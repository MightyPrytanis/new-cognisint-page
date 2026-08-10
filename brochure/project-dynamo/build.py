#!/usr/bin/env python3
"""Build the 21-page Project Dynamo auto show brochure."""

from __future__ import annotations

import html
import io
import json
import os
from pathlib import Path
from typing import Iterable

from PIL import Image as PILImage
from reportlab.lib import colors
from reportlab.lib.colors import Color, HexColor
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import landscape, letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph, Table, TableStyle


ROOT = Path(__file__).resolve().parents[2]
ASSETS = ROOT / "public" / "projects" / "project-dynamo"
CONTENT = ROOT / "content" / "project-dynamo" / "publication.json"
OUTPUT = ASSETS / "project-dynamo-auto-show-brochure.pdf"
TMP_OUTPUT = OUTPUT.with_suffix(".tmp.pdf")

PAGE_W, PAGE_H = landscape(letter)
NAVY = HexColor("#071522")
NAVY_2 = HexColor("#0a1d28")
INK = HexColor("#071522")
CREAM = HexColor("#e9e6dc")
PAPER = HexColor("#f6f4ee")
WHITE = colors.white
SLATE = HexColor("#c7d0d8")
MUTED = HexColor("#66727d")
RED = HexColor("#ef6654")
CLARK_RED = HexColor("#9c2826")
GREEN = HexColor("#72b49a")
DEEP_GREEN = HexColor("#3a6b5c")
BLUE = HexColor("#55a9d6")


with CONTENT.open("r", encoding="utf-8") as stream:
    DATA = json.load(stream)

IMAGE_CACHE: dict[Path, ImageReader] = {}


class LayoutError(RuntimeError):
    pass


def asset(name: str) -> Path:
    path = ASSETS / name
    if not path.is_file():
        raise FileNotFoundError(path)
    return path


def image_reader(image_path: Path) -> ImageReader:
    """Cache high-quality in-PDF encodings without changing source assets."""
    cached = IMAGE_CACHE.get(image_path)
    if cached is not None:
        return cached
    with PILImage.open(image_path) as source:
        if source.mode in {"RGBA", "LA"}:
            reader = ImageReader(str(image_path))
        else:
            buffer = io.BytesIO()
            source.convert("RGB").save(buffer, format="JPEG", quality=91, subsampling=0, optimize=True)
            buffer.seek(0)
            reader = ImageReader(buffer)
            reader._dynamo_buffer = buffer  # type: ignore[attr-defined]
    IMAGE_CACHE[image_path] = reader
    return reader


def paragraph_style(
    name: str,
    size: float,
    leading: float,
    color: Color,
    font: str = "Helvetica",
    alignment: int = TA_LEFT,
    space_after: float = 0,
) -> ParagraphStyle:
    return ParagraphStyle(
        name=name,
        fontName=font,
        fontSize=size,
        leading=leading,
        textColor=color,
        alignment=alignment,
        spaceAfter=space_after,
        allowWidows=0,
        allowOrphans=0,
    )


def para(
    c: canvas.Canvas,
    text: str,
    x: float,
    top: float,
    width: float,
    max_height: float,
    style: ParagraphStyle,
) -> float:
    block = Paragraph(html.escape(text).replace("\n", "<br/>"), style)
    _, height = block.wrap(width, max_height)
    if height > max_height + 0.5:
        raise LayoutError(f"Text exceeds available height: {text[:70]!r}")
    block.drawOn(c, x, top - height)
    return height


def rich_para(
    c: canvas.Canvas,
    markup: str,
    x: float,
    top: float,
    width: float,
    max_height: float,
    style: ParagraphStyle,
) -> float:
    block = Paragraph(markup, style)
    _, height = block.wrap(width, max_height)
    if height > max_height + 0.5:
        raise LayoutError(f"Markup exceeds available height: {markup[:70]!r}")
    block.drawOn(c, x, top - height)
    return height


def cover_image(
    c: canvas.Canvas,
    image_path: Path,
    x: float = 0,
    y: float = 0,
    width: float = PAGE_W,
    height: float = PAGE_H,
    focus_x: float = 0.5,
    focus_y: float = 0.5,
) -> None:
    with PILImage.open(image_path) as image:
        source_w, source_h = image.size
    scale = min(width / source_w, height / source_h)
    draw_w = source_w * scale
    draw_h = source_h * scale
    draw_x = x + (width - draw_w) * focus_x
    draw_y = y + (height - draw_h) * focus_y
    c.saveState()
    c.setFillColor(NAVY)
    c.rect(x, y, width, height, stroke=0, fill=1)
    clip = c.beginPath()
    clip.rect(x, y, width, height)
    c.clipPath(clip, stroke=0, fill=0)
    c.drawImage(image_reader(image_path), draw_x, draw_y, draw_w, draw_h, mask="auto")
    c.restoreState()


def translucent_rect(c: canvas.Canvas, x: float, y: float, w: float, h: float, color: Color, alpha: float) -> None:
    c.saveState()
    c.setFillColor(color)
    c.setFillAlpha(alpha)
    c.rect(x, y, w, h, stroke=0, fill=1)
    c.restoreState()


def gradient_rect(
    c: canvas.Canvas,
    x: float,
    y: float,
    w: float,
    h: float,
    stops: list[str],
    *,
    diagonal: bool = True,
    radius: float = 0,
) -> None:
    """Draw a vector gradient, optionally clipped to a rounded rectangle."""
    c.saveState()
    if radius:
        clip = c.beginPath()
        clip.roundRect(x, y, w, h, radius)
        c.clipPath(clip, stroke=0, fill=0)
    x1, y1 = (x + w, y + h) if diagonal else (x + w, y)
    c.linearGradient(x, y, x1, y1, [HexColor(stop) for stop in stops])
    c.restoreState()


def gloss(c: canvas.Canvas, x: float, y: float, w: float, h: float, alpha: float = 0.18) -> None:
    """Add the smooth, non-repeating clearcoat highlight used by the website."""
    c.saveState()
    clip = c.beginPath()
    clip.roundRect(x, y, w, h, 4)
    c.clipPath(clip, stroke=0, fill=0)
    c.setFillColor(WHITE)
    c.setFillAlpha(alpha)
    c.ellipse(x - w * 0.16, y + h * 0.47, x + w * 0.62, y + h * 1.38, stroke=0, fill=1)
    c.restoreState()


def label(c: canvas.Canvas, text: str, x: float, y: float, color: Color = RED, size: float = 8.2) -> None:
    c.setFillColor(color)
    c.setFont("Helvetica-Bold", size)
    c.drawString(x, y, text.upper())


def rule(c: canvas.Canvas, x: float, y: float, width: float, color: Color = RED, thickness: float = 2) -> None:
    c.setStrokeColor(color)
    c.setLineWidth(thickness)
    c.line(x, y, x + width, y)


def footer(c: canvas.Canvas, page_number: int, light: bool = True) -> None:
    text_color = HexColor("#d5dde5") if light else HexColor("#43505a")
    c.setFont("Helvetica", 6.4)
    c.setFillColor(text_color)
    c.drawString(28, 18, "PROJECT DYNAMO | INDEPENDENT FUTURE VEHICLE CONCEPT")
    c.drawRightString(PAGE_W - 28, 18, f"{page_number:02d}")


def heading(c: canvas.Canvas, text: str, x: float, top: float, width: float, size: float, color: Color) -> float:
    return para(
        c,
        text,
        x,
        top,
        width,
        210,
        paragraph_style("heading", size, size * 0.96, color, "Helvetica-Bold"),
    )


def body(c: canvas.Canvas, text: str, x: float, top: float, width: float, max_height: float, color: Color, size: float = 10.5) -> float:
    return para(
        c,
        text,
        x,
        top,
        width,
        max_height,
        paragraph_style("body", size, size * 1.45, color),
    )


def card(c: canvas.Canvas, x: float, y: float, w: float, h: float, fill: Color, stroke: Color | None = None) -> None:
    c.setFillColor(fill)
    c.setStrokeColor(stroke or fill)
    c.setLineWidth(0.7)
    c.roundRect(x, y, w, h, 4, stroke=1 if stroke else 0, fill=1)


def image_card(
    c: canvas.Canvas,
    image_name: str,
    x: float,
    y: float,
    w: float,
    h: float,
    title: str,
    caption: str,
    focus_x: float = 0.5,
    focus_y: float = 0.5,
) -> None:
    # Keep every caption outside the image area so it cannot obscure the photography.
    caption_h = 58
    card(c, x, y, w, h, NAVY_2, HexColor("#28404f"))
    cover_image(c, asset(image_name), x, y + caption_h, w, h - caption_h, focus_x, focus_y)
    label(c, title, x + 12, y + 39, GREEN, 7.2)
    para(c, caption, x + 12, y + 31, w - 24, 26, paragraph_style("caption", 7.2, 9.2, WHITE, "Helvetica"))


def page_1(c: canvas.Canvas) -> None:
    # Color and typography only: no vehicle photo and no page number.
    gradient_rect(c, 0, 0, PAGE_W, PAGE_H, ["#03101b", "#0a2634", "#3b1720"])
    c.drawImage(
        image_reader(asset("clark-trapezoid-floating.png")),
        PAGE_W / 2 - 112,
        376,
        224,
        150,
        preserveAspectRatio=True,
        anchor="c",
        mask="auto",
    )
    para(c, "Project Dynamo", 96, 340, 600, 60, paragraph_style("cover title", 36, 40, WHITE, "Helvetica-Bold", TA_CENTER))
    rule(c, PAGE_W / 2 - 56, 294, 112, RED, 3)
    para(c, DATA["hero_line"], 126, 270, 540, 54, paragraph_style("cover proposition", 13, 17, SLATE, "Helvetica", TA_CENTER))
    para(c, "2027 FUTURE VEHICLE CONCEPT", 126, 190, 540, 20, paragraph_style("cover label", 8, 10, RED, "Helvetica-Bold", TA_CENTER))
    para(c, "AN INDEPENDENT COGNISINT DESIGN AND PRODUCT STRATEGY STUDY", 126, 74, 540, 20, paragraph_style("cover footer", 7, 9, SLATE, "Helvetica-Bold", TA_CENTER))


def page_2(c: canvas.Canvas) -> None:
    cover_image(c, asset("sedan.png"), 0, 0, PAGE_W, PAGE_H, 0.64, 0.48)
    translucent_rect(c, 0, 0, 458, PAGE_H, NAVY, 0.62)
    label(c, "The proposition", 38, 552, GREEN)
    h = heading(c, "SPECIALIZATION WITHOUT FRAGMENTATION.", 38, 525, 385, 29, WHITE)
    top = 514 - h
    top -= body(c, DATA["platform_definition"], 38, top, 380, 140, SLATE, 11.2) + 17
    body(c, "Platform is readable shorthand. Dynamo does not claim that one invariant floorpan stretches from Captain to Ranch.", 38, top, 380, 72, WHITE, 10.8)
    translucent_rect(c, 38, 88, 382, 88, NAVY_2, 0.60)
    rule(c, 38, 176, 382, RED, 3)
    body(c, DATA["specialization_claim"], 52, 160, 352, 66, SLATE, 8.8)
    footer(c, 2)


def page_3(c: canvas.Canvas) -> None:
    cover_image(c, asset("highroad-locomotive.png"), focus_x=0.55, focus_y=0.48)
    translucent_rect(c, 0, 0, PAGE_W, PAGE_H, NAVY, 0.08)
    translucent_rect(c, 0, 0, 395, PAGE_H, NAVY, 0.56)
    label(c, "PE explanation and locomotive", 38, 552)
    h = heading(c, "ELECTRIC TRACTION. FROM RAIL TO ROAD.", 38, 523, 335, 28, WHITE)
    top = 506 - h
    top -= body(c, DATA["petro_electric_definition"], 38, top, 335, 96, WHITE, 11.3) + 14
    body(
        c,
        "A diesel-electric locomotive makes traction electricity onboard. Dynamo PE adds a plug-in battery for routine battery-only driving, regenerative braking, and power buffering, so the generator can remain off until additional energy or system conditioning requires it.",
        38,
        top,
        335,
        150,
        SLATE,
        9.7,
    )
    footer(c, 3)


def page_4(c: canvas.Canvas) -> None:
    c.setFillColor(NAVY)
    c.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)
    label(c, "The energy bay architecture", 34, 562, RED)
    heading(c, "THE ENERGY MODULE CHANGES. THE PROPULSION SYSTEM DOES NOT.", 34, 538, 700, 23, WHITE)
    cover_image(c, asset("architecture.png"), 34, 178, 724, 315, 0.5, 0.5)
    items = [
        ("FORWARD ENERGY BAY", "Generator cassette or supplemental BEV battery and power electronics."),
        ("AMIDSHIPS ENERGY BAY", "PE fuel storage or vehicle-specific BEV battery capacity ahead of the rear axle."),
        ("ONE ELECTRICAL HANDSHAKE", "A regulated high-voltage interface; the battery remains the immediate power buffer."),
        ("SEPARATE THERMAL JOBS", "PE engine heat and lower-temperature battery, inverter, and drive-unit circuits remain distinct."),
    ]
    x_positions = [34, 220, 406, 592]
    for x, (title, text) in zip(x_positions, items):
        label(c, title, x, 150, GREEN, 6.7)
        para(c, text, x, 139, 166, 78, paragraph_style("energy bay", 7.5, 10, SLATE))
    footer(c, 4)


def page_5(c: canvas.Canvas) -> None:
    c.setFillColor(CREAM)
    c.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)
    label(c, "Four ways to move a car", 34, 558, CLARK_RED)
    heading(c, "THE DIFFERENCE IS THE PATH TO THE WHEELS.", 34, 534, 700, 25, INK)
    paths = [
        ("01  CONVENTIONAL ICE", "Fuel > engine > transmission > wheels", "Mature and familiar. Engine speed and road speed remain mechanically coupled."),
        ("02  CONVENTIONAL HYBRID", "Fuel + battery > engine / motor / transmission > wheels", "Efficient and proven, but retains a mechanical engine-to-wheel path while adding electric hardware."),
        ("03  DYNAMO PETRO-ELECTRIC", "Fuel > Dynamo Module > electricity > battery / motor > wheels", "Grid energy or onboard generation charges the battery. Traction motors alone drive the wheels."),
        ("04  BATTERY ELECTRIC", "Grid > battery > motor > wheels", "The simplest propulsion path, bounded by stored energy and charging access."),
    ]
    positions = [(34, 302), (407, 302), (34, 92), (407, 92)]
    for (title, route, description), (x, y) in zip(paths, positions):
        card(c, x, y, 351, 176, WHITE, HexColor("#d4d0c6"))
        label(c, title, x + 18, y + 145, BLUE if title.startswith(("01", "04")) else DEEP_GREEN, 7.2)
        para(c, route, x + 18, y + 121, 315, 35, paragraph_style("route", 8, 10, INK, "Courier-Bold"))
        body(c, description, x + 18, y + 76, 315, 55, MUTED, 8.4)
    footer(c, 5, light=False)


def page_6(c: canvas.Canvas) -> None:
    c.setFillColor(NAVY)
    c.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)
    label(c, "Production logic", 34, 558, GREEN)
    heading(c, "CHANGE THE MIX WITHOUT RESTARTING THE PROGRAM.", 34, 534, 720, 20, WHITE)
    items = [
        ("COMMON INTERFACES", "Shared hard points, high-voltage connections, thermal backbone, and controls support both energy strategies."),
        ("COMPONENT FAMILIES", "E-drives, electronics, switches, latches, seat hardware, sensors, and scaled modules repeat where repetition earns value."),
        ("BODY-SPECIFIC ENGINEERING", "Tooling, crash structure, cooling, plumbing, packaging, capacity, and outer forms remain tailored to each mission."),
        ("PRODUCTION FLEXIBILITY", "PE and BEV output can rebalance as customer preference, policy, fuel prices, charging access, and demand move."),
        ("SERVICE CONTINUITY", "Shared diagnostics, training, parts logic, and accumulated technician knowledge continue across the family."),
        ("SPECIALTY DERIVATIVES", "New bodies and performance versions retain the architecture and production system instead of forcing a restart."),
    ]
    positions = [(34, 330), (284, 330), (534, 330), (34, 120), (284, 120), (534, 120)]
    for (title, text), (x, y) in zip(items, positions):
        card(c, x, y, 224, 172, NAVY_2, HexColor("#28404f"))
        rule(c, x + 16, y + 147, 42, GREEN, 3)
        label(c, title, x + 16, y + 126, GREEN, 6.8)
        body(c, text, x + 16, y + 107, 192, 94, SLATE, 8.3)
    footer(c, 6)


def page_7(c: canvas.Canvas) -> None:
    c.setFillColor(NAVY)
    c.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)
    label(c, "The complete concept family", 28, 567, GREEN)
    heading(c, "NINE MODELS. ONE SHARED FOUNDATION.", 28, 545, 720, 24, WHITE)
    models = DATA["models"]
    card_w, card_h = 236, 143
    for index, model in enumerate(models):
        row, col = divmod(index, 3)
        x = 28 + col * 250
        y = 346 - row * 158
        cover_image(c, asset(model["image"]), x, y, card_w, card_h, 0.5, 0.5)
        translucent_rect(c, x, y, card_w, 40, NAVY, 0.58)
        label(c, model["short_name"], x + 9, y + 25, WHITE, 7.2)
        c.setFont("Helvetica", 6.2)
        c.setFillColor(GREEN)
        c.drawRightString(x + card_w - 9, y + 25, model["profile"].upper())
        c.setFont("Helvetica", 6.1)
        c.setFillColor(SLATE)
        c.drawString(x + 9, y + 12, model["role"])
    footer(c, 7)


def page_8(c: canvas.Canvas) -> None:
    c.setFillColor(NAVY)
    c.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)
    label(c, "Passenger space", 28, 566, RED)
    heading(c, "SPACE THAT CHANGES WITH THE DAY.", 28, 542, 710, 25, WHITE)
    image_card(c, "constellation-liftgate-v2.png", 28, 307, 238, 192, "CARGO DEPTH", "Useful room remains behind a fully occupied third row.", 0.5, 0.52)
    image_card(c, "constellation-interior-v2.png", 277, 307, 238, 192, "THREE-ROW COMFORT", "Track-mounted captain's chairs support ordinary passenger use.", 0.5, 0.5)
    image_card(c, "constellation-third-row-inset-v3.png", 526, 307, 238, 192, "HORIZONTAL STOWAGE", "The third-row bench folds into a level, useful cargo surface.", 0.5, 0.5)
    card(c, 28, 66, 736, 200, NAVY_2, HexColor("#28404f"))
    body(
        c,
        "The Constellation passenger van does not pretend that occupied rows disappear. Its low floor, removable second-row chairs, folding work surfaces, and horizontally stowing third-row bench support passenger comfort and practical cargo use. The Estate and XTour answer different needs with lower and medium profiles. No vehicle has to be all things to all people.",
        48,
        243,
        696,
        136,
        SLATE,
        10.2,
    )
    footer(c, 8)


def page_9(c: canvas.Canvas) -> None:
    c.setFillColor(colors.black)
    c.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)
    label(c, "Work use cases", 28, 566, RED)
    heading(c, "FROM LAST-MILE DELIVERY TO FIELD WORK.", 28, 542, 720, 25, WHITE)
    image_card(c, "taskvan-delivery.png", 28, 307, 238, 192, "TASKVAN DELIVERY", "A credible sliding aperture, low step, and modular parcel shelving.")
    image_card(c, "taskvan-inclusive-trade.png", 277, 307, 238, 192, "SKILLED TRADES", "Organized tools and durable access serve the people doing the work.")
    image_card(c, "taskvan-market.png", 526, 307, 238, 192, "MOBILE ENTERPRISE", "Washable modules, refrigeration, tie-downs, and power export.")
    card(c, 28, 67, 736, 200, NAVY_2, HexColor("#28404f"))
    label(c, "One work architecture, three distinct missions", 48, 237, GREEN, 7.2)
    body(
        c,
        "TaskVan handles enclosed delivery and trade work, Foreman adds a mid-size open bed, and Ranch supports full-size towing, hauling, and field work. Each retains body-specific engineering while drawing on shared controls, component families, service logic, and power export. Ranch's fold-flat work surface leaves room for a laptop, coffee, and documents; AC connections are supplied, not a laptop.",
        48,
        215,
        696,
        116,
        SLATE,
        9.2,
    )
    footer(c, 9)


def page_10(c: canvas.Canvas) -> None:
    c.setFillColor(NAVY)
    c.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)
    label(c, "Inside Dynamo", 28, 566, GREEN)
    heading(c, "ONE CONTROL PHILOSOPHY. DISTINCT CABINS.", 28, 542, 720, 25, WHITE)
    image_card(c, "sedan-interior-v2.png", 28, 310, 357, 190, "CAPTAIN", "Anthracite foundations, a Travertine dash band and bolsters, and Brushed Aluminum touchpoints.")
    image_card(c, "estate-interior.png", 407, 310, 357, 190, "ESTATE", "Oxblood bolsters, woven inserts, real controls, and useful storage.")
    image_card(c, "constellation-executive.png", 28, 86, 357, 190, "CONSTELLATION", "Sandstone, Nantucket Fog, and tactile Travertine support quiet passenger comfort.")
    image_card(c, "highroad-interior.png", 407, 86, 357, 190, "HIGHROAD", "Three usable rows, familiar physical controls, and durable materials without excess.")
    footer(c, 10)


PAINT_STYLES = {
    "Copperclad": (["#6f3829", "#b66e46", "#7d412f"], True),
    "Quicksilver": (["#747b82", "#d7dbdd", "#8d9499"], True),
    "Cherry Royal": (["#3a0710", "#8d1530", "#4b0916"], False),
    "Glacier": (["#2f516b", "#6689a4", "#29485f"], False),
    "Midnight Blue": (["#050d19", "#173555", "#071321"], True),
    "After Six": (["#050505", "#202124", "#08090a"], False),
    "Champagne": (["#8e8169", "#d6c7a9", "#9f9177"], True),
    "Blue Order": (["#0752b5", "#1688ed", "#07439a"], False),
    "Gridiron": (["#102f23", "#356447", "#143a2b"], False),
    "Canyon": (["#35101b", "#681c35", "#42101f"], True),
    "Platinum Mist": (["#9f9588", "#d8cdbd", "#aaa093"], True),
    "Lake Effect": (["#dce4e6", "#fbfcfa", "#d6dfe1"], False),
    "Dreadnought": (["#4d4c47", "#77766e", "#53524d"], False),
}

CABIN_STYLES = {
    "Anthracite": (["#17191a", "#35383a"], "#242426", "warm-weave"),
    "Oxblood": (["#351315", "#6d292a", "#431719"], "#5b2423", "square-weave"),
    "Sandstone": (["#a99478", "#d1c1aa"], "#bfac91", "light-weave"),
    "Nantucket Fog": (["#aaa79f", "#d2cfc7"], "#c9c6be", "quiet-grid"),
    "Thalassic": (["#06172a", "#153a5a", "#081d32"], "#0d2b45", "ocean-weave"),
    "Travertine": (["#704029", "#b66f40", "#7c472d"], "#242426", "warm-weave"),
}

HARDWARE_STYLES = {
    "Brushed Aluminum": (["#858b8e", "#c7cbcc", "#8e9497"], "brushed"),
    "Black Chrome": (["#080a0c", "#343a40", "#0b0e11", "#666d72", "#15191d", "#030405"], "reflective"),
    "Dark Anodized Aluminum": (["#1b2023", "#41484b", "#202629"], "bead-blasted"),
}

IRREGULAR_POINTS = [
    (0.08, 0.22, 0.6),
    (0.17, 0.64, 0.9),
    (0.29, 0.36, 0.55),
    (0.38, 0.78, 0.72),
    (0.46, 0.16, 0.85),
    (0.55, 0.56, 0.5),
    (0.63, 0.83, 0.8),
    (0.72, 0.29, 0.62),
    (0.81, 0.68, 0.92),
    (0.91, 0.42, 0.58),
    (0.24, 0.9, 0.5),
    (0.68, 0.08, 0.55),
    (0.95, 0.84, 0.7),
]


def sparse_texture(c: canvas.Canvas, x: float, y: float, w: float, h: float, color: Color, alpha: float, scale: float = 1) -> None:
    c.saveState()
    c.setFillColor(color)
    c.setFillAlpha(alpha)
    for px, py, radius in IRREGULAR_POINTS:
        c.circle(x + px * w, y + py * h, radius * scale, stroke=0, fill=1)
    c.restoreState()


def swatch_outline(c: canvas.Canvas, x: float, y: float, w: float, h: float) -> None:
    c.saveState()
    c.setStrokeColor(HexColor("#c4c0b7"))
    c.setLineWidth(0.55)
    c.roundRect(x, y, w, h, 4, stroke=1, fill=0)
    c.restoreState()


def swatch_name(c: canvas.Canvas, name: str, x: float, y: float, w: float) -> None:
    c.setFont("Helvetica-Bold", 6.2)
    c.setFillColor(INK)
    c.drawCentredString(x + w / 2, y, name.upper())


def paint_swatch(c: canvas.Canvas, name: str, x: float, y: float, w: float, h: float) -> None:
    stops, metallic = PAINT_STYLES[name]
    gradient_rect(c, x, y, w, h, stops, radius=4)
    gloss(c, x, y, w, h, 0.30 if name in {"Quicksilver", "Champagne", "Platinum Mist", "Lake Effect"} else 0.18)
    if metallic:
        sparse_texture(c, x + 4, y + 3, w - 8, h - 6, WHITE, 0.42, 0.62)
    swatch_outline(c, x, y, w, h)


def cabin_swatch(c: canvas.Canvas, name: str, x: float, y: float, w: float, h: float) -> None:
    upper_stops, lower_color, pattern = CABIN_STYLES[name]
    split = y + h / 2
    c.saveState()
    clip = c.beginPath()
    clip.roundRect(x, y, w, h, 4)
    c.clipPath(clip, stroke=0, fill=0)
    gradient_rect(c, x, split, w, h / 2, upper_stops)
    c.setFillColor(HexColor(lower_color))
    c.rect(x, y, w, h / 2, stroke=0, fill=1)

    if name in {"Anthracite", "Sandstone", "Nantucket Fog"}:
        sparse_texture(c, x + 2, split + 1, w - 4, h / 2 - 2, WHITE if name == "Anthracite" else INK, 0.11, 0.48)
    if name in {"Oxblood", "Thalassic"}:
        gloss(c, x, split, w, h / 2, 0.14)
    if name == "Travertine":
        c.saveState()
        c.setFillColor(HexColor("#4e2a18"))
        c.setFillAlpha(0.26)
        c.ellipse(x + 8, split + 12, x + 52, split + 20, stroke=0, fill=1)
        c.ellipse(x + 62, split + 3, x + 104, split + 10, stroke=0, fill=1)
        c.restoreState()

    c.saveState()
    c.setLineWidth(0.55)
    if pattern in {"warm-weave", "light-weave", "ocean-weave"}:
        first = HexColor("#bd6c3e") if pattern == "warm-weave" else WHITE if pattern == "light-weave" else HexColor("#5d85a4")
        second = HexColor("#e09e68") if pattern == "warm-weave" else HexColor("#4d3b28") if pattern == "light-weave" else HexColor("#03101d")
        c.setStrokeColor(first)
        c.setStrokeAlpha(0.42 if pattern == "warm-weave" else 0.16)
        for offset in range(-20, int(w) + 20, 8):
            c.line(x + offset, y, x + offset + 18, split)
        c.setStrokeColor(second)
        c.setStrokeAlpha(0.22 if pattern != "light-weave" else 0.12)
        for offset in range(-15, int(w) + 20, 10):
            c.line(x + offset, split, x + offset + 18, y)
    else:
        light = WHITE if pattern in {"square-weave", "quiet-grid"} else HexColor("#5d85a4")
        dark = HexColor("#111111")
        for offset in range(4, int(w), 7 if pattern == "square-weave" else 6):
            c.setStrokeColor(light)
            c.setStrokeAlpha(0.10 if pattern == "square-weave" else 0.18)
            c.line(x + offset, y, x + offset, split)
        for offset in range(4, int(h / 2), 6):
            c.setStrokeColor(dark)
            c.setStrokeAlpha(0.12 if pattern == "square-weave" else 0.08)
            c.line(x, y + offset, x + w, y + offset)
    c.restoreState()
    c.restoreState()
    swatch_outline(c, x, y, w, h)


def hardware_swatch(c: canvas.Canvas, name: str, x: float, y: float, w: float, h: float) -> None:
    stops, finish = HARDWARE_STYLES[name]
    gradient_rect(c, x, y, w, h, stops, diagonal=finish != "brushed", radius=4)
    if finish == "brushed":
        c.saveState()
        c.setStrokeColor(WHITE)
        c.setStrokeAlpha(0.16)
        c.setLineWidth(0.45)
        for offset in range(3, int(h), 3):
            c.line(x + 2, y + offset, x + w - 2, y + offset)
        c.restoreState()
    elif finish == "bead-blasted":
        sparse_texture(c, x + 3, y + 2, w - 6, h - 4, WHITE, 0.13, 0.55)
    swatch_outline(c, x, y, w, h)


def page_11(c: canvas.Canvas) -> None:
    c.setFillColor(CREAM)
    c.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)
    label(c, "Colors, materials, and hardware", 28, 566, CLARK_RED)
    heading(c, "ABUNDANT CHARACTER, THOUGHTFULLY CONTAINED.", 28, 542, 730, 25, INK)
    label(c, "Exterior palette", 28, 486, DEEP_GREEN, 7.2)
    exterior = DATA["palette"]["exterior"]
    for index, name in enumerate(exterior):
        row, col = divmod(index, 7)
        x = 28 + col * 105
        y = 414 - row * 76
        paint_swatch(c, name, x, y, 94, 46)
        swatch_name(c, name, x, y - 12, 94)
    label(c, "Cabin colors and material families", 28, 302, DEEP_GREEN, 7.2)
    for index, name in enumerate(DATA["palette"]["cabin"]):
        x = 28 + index * 122
        cabin_swatch(c, name, x, 228, 110, 52)
        swatch_name(c, name, x, 214, 110)
    label(c, "Hardware finishes", 28, 185, DEEP_GREEN, 7.2)
    for index, name in enumerate(DATA["palette"]["hardware"]):
        x = 28 + index * 244
        hardware_swatch(c, name, x, 130, 226, 38)
        swatch_name(c, name, x, 116, 226)
    body(c, DATA["palette"]["material_note"], 28, 93, 736, 46, MUTED, 8.1)
    footer(c, 11, light=False)


def page_12(c: canvas.Canvas) -> None:
    c.setFillColor(NAVY)
    c.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)
    label(c, "Dynamo Cabin Intelligence", 28, 566, RED)
    heading(c, "SENSE CONTEXT. CHOOSE A BOUNDED RESPONSE.", 28, 542, 720, 24, WHITE)
    image_card(c, "captain-cabin-safe.png", 28, 286, 238, 215, "CABIN SAFE", "A dog waits safely while actual thermal risk, not a timer, governs the response.")
    image_card(c, "xtour-cabin-comfort-v2.png", 277, 286, 238, 215, "CABIN COMFORT", "Tired hikers return to a pre-cooled XTour prepared around real conditions and return time.")
    image_card(c, "highroad-rain-guard.png", 526, 286, 238, 215, "RAIN GUARD", "The Highroad verifies every closure and reports any obstruction or fault.")
    steps = [
        ("SENSE", "Occupants, movement, temperature, weather, battery, time, location, and vehicle state."),
        ("UNDERSTAND", "Onboard AI combines signals, detects contradictions, estimates risk, and predicts what follows."),
        ("PROTECT", "A safety-certified controller selects bounded actions: monitor, heat, cool, close, notify, unlock, or request help."),
    ]
    for index, (title, text) in enumerate(steps):
        x = 28 + index * 249
        rule(c, x, 236, 58, BLUE if index == 0 else GREEN if index == 1 else RED, 3)
        label(c, title, x, 217, WHITE, 7.2)
        body(c, text, x, 202, 220, 84, SLATE, 8.2)
    para(c, "AI interprets the situation. Safety-certified controls govern the response.", 28, 83, 736, 36, paragraph_style("cabin quote", 11, 14, WHITE, "Helvetica-Bold", TA_CENTER))
    footer(c, 12)


def page_13(c: canvas.Canvas) -> None:
    cover_image(c, asset("performance-low-photoreal.png"), focus_x=0.5, focus_y=0.52)
    translucent_rect(c, 0, 0, PAGE_W, PAGE_H, NAVY, 0.35)
    translucent_rect(c, 0, 0, PAGE_W, 230, NAVY, 0.86)
    label(c, DATA["specialization_label"], 34, 190, RED)
    heading(c, "ROOM FOR THE VEHICLES ENTHUSIASTS THOUGHT THE MARKET HAD FORGOTTEN.", 34, 166, 690, 25, WHITE)
    body(
        c,
        "Higher-output drive units, brakes, suspension tuning, cooling, wheels, and software create credible Captain, Fastback, and Estate derivatives. Progressive controls and predictable responses make the additional capability useful to ordinary drivers. The base models retain their current simulated targets; the presentation does not chase sub-three-second acceleration.",
        34,
        96,
        690,
        70,
        SLATE,
        9.2,
    )
    footer(c, 13)


def page_14(c: canvas.Canvas) -> None:
    c.setFillColor(CREAM)
    c.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)
    label(c, "Simulated 2027 design targets", 24, 570, CLARK_RED)
    heading(c, "GROUNDED ENOUGH TO EVALUATE.", 24, 548, 600, 23, INK)
    headers = ["Model", "L x W", "Weight PE / BEV", "Torque", "Battery PE / BEV", "Gen.", "PE mpg", "0-60", "Top / cruise"]
    rows = [headers]
    for model in DATA["models"]:
        rows.append([
            model["short_name"],
            f'{model["length"].replace(" in", "")} x {model["width"].replace(" in", "")}',
            model["weight"],
            model["torque"],
            model["battery"],
            model["generator"],
            model["pe_mpg"].replace(" mpg", ""),
            model["acceleration"].replace(" sec", " s"),
            model["speed"].replace(" mph", ""),
        ])
    table = Table(rows, colWidths=[72, 76, 100, 70, 92, 54, 45, 45, 72], rowHeights=[28] + [28] * 9)
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), NAVY),
        ("TEXTCOLOR", (0, 0), (-1, 0), WHITE),
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("FONTNAME", (0, 1), (0, -1), "Helvetica-Bold"),
        ("FONTSIZE", (0, 0), (-1, -1), 6.5),
        ("LEADING", (0, 0), (-1, -1), 7.5),
        ("ALIGN", (1, 0), (-1, -1), "CENTER"),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("BACKGROUND", (0, 1), (-1, -1), WHITE),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [WHITE, PAPER]),
        ("GRID", (0, 0), (-1, -1), 0.35, HexColor("#c8c4bb")),
        ("LEFTPADDING", (0, 0), (-1, -1), 5),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5),
    ]))
    table.wrapOn(c, 744, 310)
    table.drawOn(c, 24, 224)
    card(c, 24, 65, 744, 125, WHITE, HexColor("#c8c4bb"))
    label(c, "Very restrained internal calibration", 38, 168, DEEP_GREEN, 7.1)
    body(c, "Status: concept. Basis: simulated design targets. PE and BEV Captain values share the same body, mission, and electric drive; no production vehicle is presented as an exact analogue. PE targets 39 mpg while the generator is running, a 32 kWh battery, and 6.1 seconds to 60 mph. BEV targets 28 kWh per 100 miles, a 72 kWh battery, and 5.9 seconds to 60 mph.", 38, 151, 716, 72, MUTED, 8.2)
    footer(c, 14, light=False)


def page_15(c: canvas.Canvas) -> None:
    cover_image(c, asset("family.png"), focus_x=0.5, focus_y=0.52)
    translucent_rect(c, 0, 0, PAGE_W, PAGE_H, NAVY, 0.7)
    label(c, "The core value proposition", 34, 558, GREEN)
    heading(c, "COMPETITIVE PRODUCTS. A RESILIENT PRODUCT SYSTEM.", 34, 534, 720, 26, WHITE)
    columns = [
        ("VALUE TO PEOPLE", "CHOOSE THE ENERGY STRATEGY. KEEP THE ELECTRIC DRIVE.", [
            "PE plugs in for routine electric travel, then refuels quickly when distance or charging access demands it.",
            "BEV removes the prime mover for the lowest energy use and scheduled maintenance.",
            "Both retain electric torque, all-wheel drive, traction control, regenerative braking, and familiar character.",
        ]),
        ("VALUE TO THE COMPANY", "CHANGE THE MIX WITHOUT RESTARTING THE PROGRAM.", [
            "Shared architecture and suppliers spread investment across nine specialized models.",
            "Production can rebalance PE and BEV without discarding factory, service, and technician knowledge.",
            "New derivatives retain the architecture while body-specific tooling and engineering remain honest.",
        ]),
    ]
    for index, (eyebrow, title, bullets) in enumerate(columns):
        x = 34 + index * 375
        card(c, x, 114, 350, 332, NAVY_2, HexColor("#35505f"))
        label(c, eyebrow, x + 20, 414, BLUE if index == 0 else GREEN, 7)
        para(c, title, x + 20, 389, 310, 70, paragraph_style("value title", 14, 16, WHITE, "Helvetica-Bold"))
        y = 300
        for bullet in bullets:
            c.setFillColor(RED if index == 0 else GREEN)
            c.circle(x + 24, y - 4, 2.2, stroke=0, fill=1)
            used = body(c, bullet, x + 36, y + 8, 290, 60, SLATE, 8.6)
            y -= used + 18
    para(c, "1 electric-drive core  >  2 energy strategies  >  9+ specialized models", 34, 83, 725, 30, paragraph_style("value equation", 12, 14, WHITE, "Helvetica-Bold", TA_CENTER))
    footer(c, 15)


def page_16(c: canvas.Canvas) -> None:
    c.setFillColor(NAVY)
    c.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)
    label(c, "The honest engineering brief", 34, 558, RED)
    heading(c, "WHAT STILL HAS TO BE PROVED.", 34, 534, 650, 28, WHITE)
    items = [
        "A PE vehicle remains more complex and maintenance-intensive than a pure BEV.",
        "The generator, fuel, exhaust, cooling, and battery can erase weight savings if the module is not aggressively optimized.",
        "Sustained towing and mountain-grade performance depend on generator output, battery buffer, and thermal capacity.",
        "Occasional engine operation creates fuel-aging, catalyst-temperature, noise, vibration, emissions, and oil-conditioning challenges.",
        "Common Forward and Amidships Energy Bay interfaces do not mean a literal one-for-one volume swap.",
        "Cost, durability, repairability, certification, and real-world efficiency require full engineering validation.",
    ]
    positions = [(34, 335), (284, 335), (534, 335), (34, 126), (284, 126), (534, 126)]
    for text, (x, y) in zip(items, positions):
        card(c, x, y, 224, 166, NAVY_2, HexColor("#28404f"))
        c.setFillColor(RED)
        c.circle(x + 18, y + 138, 3, stroke=0, fill=1)
        body(c, text, x + 32, y + 148, 172, 118, SLATE, 8.7)
    footer(c, 16)


def precedent_card(c: canvas.Canvas, item: dict, x: float, y: float, w: float, h: float) -> None:
    card(c, x, y, w, h, WHITE, HexColor("#d4d0c6"))
    label(c, item["category"], x + 16, y + h - 25, DEEP_GREEN, 6.3)
    para(c, item["name"], x + 16, y + h - 42, w - 32, 40, paragraph_style("precedent title", 12, 13.5, INK, "Helvetica-Bold"))
    status_top = y + h - 83
    c.setFont("Helvetica-Bold", 6.5)
    c.setFillColor(CLARK_RED)
    c.drawString(x + 16, status_top, f'STATUS / BASIS: {item["status"].upper()}')
    body(c, item["summary"], x + 16, status_top - 15, w - 32, h - 108, MUTED, 8.2)
    source = item["source_label"]
    c.setFillColor(BLUE)
    c.setFont("Helvetica-Bold", 7)
    c.drawString(x + 16, y + 14, source)
    link_w = stringWidth(source, "Helvetica-Bold", 7)
    c.linkURL(item["source_url"], (x + 16, y + 10, x + 16 + link_w, y + 23), relative=0)


def page_17(c: canvas.Canvas) -> None:
    c.setFillColor(CREAM)
    c.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)
    label(c, "Series electric propulsion precedents", 28, 566, CLARK_RED)
    heading(c, "ELECTRIC MOTORS AT THE WHEELS ARE NOT SPECULATIVE.", 28, 542, 720, 24, INK)
    series_items = [item for item in DATA["precedents"] if item["category"] == "Series electric propulsion"]
    for index, item in enumerate(series_items):
        precedent_card(c, item, 28 + index * 249, 168, 238, 322)
    body(c, "Ford demonstrates a production plug-in range extender. Li Auto demonstrates a commercial family of extended-range electric SUVs. Edison Motors demonstrates the same electric-drive logic in demanding vocational trucks. Each example proves a part of the engineering premise; none is presented as a one-to-one Dynamo analogue.", 28, 135, 736, 76, MUTED, 8.8)
    footer(c, 17, light=False)


def page_18(c: canvas.Canvas) -> None:
    c.setFillColor(CREAM)
    c.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)
    label(c, "Scalable and energy flexible architecture precedents", 28, 566, CLARK_RED)
    heading(c, "THE CONTEXT HAS MOVED BEYOND AN ABSOLUTE FIRST.", 28, 542, 720, 24, INK)
    items = [item for item in DATA["precedents"] if item["category"] != "Series electric propulsion"]
    positions = [(28, 305), (407, 305), (28, 92), (407, 92)]
    for item, (x, y) in zip(items, positions):
        precedent_card(c, item, x, y, 357, 188)
    footer(c, 18, light=False)


def page_19(c: canvas.Canvas) -> None:
    cover_image(c, asset("dynamo-global-possibilities-v2.png"), focus_x=0.5, focus_y=0.5)
    translucent_rect(c, 0, 0, PAGE_W, PAGE_H, NAVY, 0.08)
    translucent_rect(c, 0, 0, 320, PAGE_H, NAVY, 0.56)
    label(c, "Future possibilities", 34, 552, GREEN)
    h = heading(c, "A STARTING LINEUP, NOT A CLOSED CATALOG.", 34, 525, 260, 28, WHITE)
    top = 506 - h
    top -= body(c, "Project Dynamo begins with a balanced, North American-oriented nine-model family. A global automaker could choose different bodies for different markets while retaining shared hard points, propulsion, electronics, production logic, and service knowledge.", 34, top, 260, 175, SLATE, 10) + 18
    body(c, DATA["future_note"], 34, top, 260, 65, WHITE, 9.3)
    footer(c, 19)


def page_20(c: canvas.Canvas) -> None:
    cover_image(c, asset("family-v2.png"), focus_x=0.5, focus_y=0.52)
    translucent_rect(c, 0, 0, PAGE_W, PAGE_H, NAVY, 0.08)
    translucent_rect(c, 0, 0, 474, PAGE_H, NAVY, 0.58)
    c.drawImage(image_reader(asset("clark-trapezoid-floating.png")), 522, 366, 225, 150, preserveAspectRatio=True, mask="auto")
    label(c, "Independent strategy, systems, and design study", 34, 552, GREEN)
    heading(c, "ENGINEERED TO BENCHMARKS, NOT DOWN TO A PRICE POINT.", 34, 522, 420, 27, WHITE)
    body(c, "A durable architecture preserves more than invested capital: skilled work, supplier capability, service knowledge, useful products, and the trust earned when a company supports what it builds.", 34, 422, 410, 105, SLATE, 11)
    rule(c, 34, 298, 110, RED, 3)
    translucent_rect(c, 34, 86, 724, 142, NAVY_2, 0.58)
    label(c, "Independent concept study", 50, 204, RED, 6.8)
    body(c, DATA["disclaimer"], 50, 186, 692, 88, HexColor("#c1cad1"), 6.6)
    footer(c, 20)


def page_21(c: canvas.Canvas) -> None:
    # Back cover: a quiet Clark coda with no page number.
    gradient_rect(c, 0, 0, PAGE_W, PAGE_H, ["#071522", "#24131a", "#071522"], diagonal=False)
    c.drawImage(
        image_reader(asset("clark-trapezoid-floating.png")),
        PAGE_W / 2 - 128,
        318,
        256,
        170,
        preserveAspectRatio=True,
        anchor="c",
        mask="auto",
    )
    rule(c, PAGE_W / 2 - 60, 285, 120, RED, 3)
    para(c, DATA["closing"], 96, 250, 600, 72, paragraph_style("back cover slogan", 17, 22, WHITE, "Helvetica-Oblique", TA_CENTER))
    para(c, "PROJECT DYNAMO", 96, 112, 600, 18, paragraph_style("back cover title", 7, 9, SLATE, "Helvetica-Bold", TA_CENTER))


PAGES = [
    page_1,
    page_2,
    page_3,
    page_4,
    page_5,
    page_6,
    page_7,
    page_8,
    page_9,
    page_10,
    page_11,
    page_12,
    page_13,
    page_14,
    page_15,
    page_16,
    page_17,
    page_18,
    page_19,
    page_20,
    page_21,
]


def validate_assets() -> None:
    names: set[str] = {
        "architecture.png",
        "captain-cabin-safe.png",
        "clark-trapezoid-floating.png",
        "constellation-executive.png",
        "constellation-interior-v2.png",
        "constellation-liftgate-v2.png",
        "constellation-third-row-inset-v3.png",
        "dynamo-global-possibilities-v2.png",
        "estate-interior.png",
        "family.png",
        "family-v2.png",
        "highroad-interior.png",
        "highroad-locomotive.png",
        "highroad-rain-guard.png",
        "performance-low-photoreal.png",
        "sedan-interior-v2.png",
        "sedan.png",
        "taskvan-delivery.png",
        "taskvan-inclusive-trade.png",
        "taskvan-market.png",
        "xtour-cabin-comfort-v2.png",
    }
    names.update(model["image"] for model in DATA["models"])
    for name in sorted(names):
        asset(name)


def build() -> None:
    validate_assets()
    brochure = canvas.Canvas(str(TMP_OUTPUT), pagesize=(PAGE_W, PAGE_H), pageCompression=1)
    brochure.setTitle("Project Dynamo - Future Vehicle Concept")
    brochure.setAuthor("Cognisint")
    brochure.setCreator("Cognisint Project Dynamo ReportLab generator")
    brochure.setSubject("A synchronized auto show viewbook for Project Dynamo")
    for index, render_page in enumerate(PAGES, start=1):
        render_page(brochure)
        if index != len(PAGES):
            brochure.showPage()
    brochure.save()
    os.replace(TMP_OUTPUT, OUTPUT)
    print(f"Built {OUTPUT.relative_to(ROOT)} ({len(PAGES)} pages)")


if __name__ == "__main__":
    build()
