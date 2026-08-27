#!/usr/bin/env python3
"""Build the 24-page Project Dynamo auto-show viewbook."""

from __future__ import annotations

import html
import io
import json
import os
from pathlib import Path

from PIL import Image as PILImage
from reportlab.lib import colors
from reportlab.lib.colors import Color, HexColor
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY, TA_LEFT
from reportlab.lib.pagesizes import landscape, letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
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
MUTED = HexColor("#5b6872")
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


def register_fonts() -> tuple[str, str, str]:
    """Use Avenir Next when the system font is available; retain a portable fallback."""
    path = Path("/System/Library/Fonts/Avenir Next.ttc")
    if not path.is_file():
        return "Helvetica", "Helvetica-Bold", "Helvetica-Oblique"
    try:
        pdfmetrics.registerFont(TTFont("DynamoRegular", str(path), subfontIndex=7))
        pdfmetrics.registerFont(TTFont("DynamoMedium", str(path), subfontIndex=5))
        pdfmetrics.registerFont(TTFont("DynamoDemi", str(path), subfontIndex=2))
        pdfmetrics.registerFont(TTFont("DynamoItalic", str(path), subfontIndex=4))
        return "DynamoRegular", "DynamoDemi", "DynamoItalic"
    except Exception:
        return "Helvetica", "Helvetica-Bold", "Helvetica-Oblique"


FONT, FONT_BOLD, FONT_ITALIC = register_fonts()


def asset(name: str) -> Path:
    path = ASSETS / name
    if not path.is_file():
        raise FileNotFoundError(path)
    return path


def image_reader(path: Path) -> ImageReader:
    cached = IMAGE_CACHE.get(path)
    if cached is not None:
        return cached
    with PILImage.open(path) as source:
        if source.mode in {"RGBA", "LA"}:
            reader = ImageReader(str(path))
        else:
            buffer = io.BytesIO()
            source.convert("RGB").save(buffer, format="JPEG", quality=92, subsampling=0, optimize=True)
            buffer.seek(0)
            reader = ImageReader(buffer)
            reader._dynamo_buffer = buffer  # type: ignore[attr-defined]
    IMAGE_CACHE[path] = reader
    return reader


def style(
    name: str,
    size: float,
    leading: float,
    color: Color,
    font: str = FONT,
    alignment: int = TA_LEFT,
) -> ParagraphStyle:
    return ParagraphStyle(
        name=name,
        fontName=font,
        fontSize=size,
        leading=leading,
        textColor=color,
        alignment=alignment,
        allowWidows=0,
        allowOrphans=0,
    )


def paragraph(
    c: canvas.Canvas,
    text: str,
    x: float,
    top: float,
    width: float,
    max_height: float,
    paragraph_style: ParagraphStyle,
) -> float:
    block = Paragraph(html.escape(text).replace("\n", "<br/>"), paragraph_style)
    _, height = block.wrap(width, max_height)
    if height > max_height + 0.5:
        raise LayoutError(f"Text exceeds available height: {text[:72]!r}")
    block.drawOn(c, x, top - height)
    return height


def rich_paragraph(
    c: canvas.Canvas,
    markup: str,
    x: float,
    top: float,
    width: float,
    max_height: float,
    paragraph_style: ParagraphStyle,
) -> float:
    block = Paragraph(markup, paragraph_style)
    _, height = block.wrap(width, max_height)
    if height > max_height + 0.5:
        raise LayoutError(f"Markup exceeds available height: {markup[:72]!r}")
    block.drawOn(c, x, top - height)
    return height


def fill(c: canvas.Canvas, color: Color) -> None:
    c.setFillColor(color)
    c.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)


def gradient(c: canvas.Canvas, stops: list[str], horizontal: bool = False) -> None:
    x1, y1 = (PAGE_W, 0) if horizontal else (PAGE_W, PAGE_H)
    c.linearGradient(0, 0, x1, y1, [HexColor(item) for item in stops])


def rounded(c: canvas.Canvas, x: float, y: float, w: float, h: float, color: Color, stroke: Color | None = None) -> None:
    c.setFillColor(color)
    c.setStrokeColor(stroke or color)
    c.setLineWidth(0.65)
    c.roundRect(x, y, w, h, 5, stroke=1 if stroke else 0, fill=1)


def eyebrow(c: canvas.Canvas, text: str, x: float, y: float, color: Color = RED, size: float = 8.4) -> None:
    c.setFillColor(color)
    c.setFont(FONT_BOLD, size)
    c.drawString(x, y, text.upper())


def rule(c: canvas.Canvas, x: float, y: float, w: float, color: Color = RED, thickness: float = 2.4) -> None:
    c.setStrokeColor(color)
    c.setLineWidth(thickness)
    c.line(x, y, x + w, y)


def heading(c: canvas.Canvas, text: str, x: float, top: float, width: float, size: float, color: Color) -> float:
    return paragraph(c, text, x, top, width, 150, style("heading", size, size * 1.02, color, FONT_BOLD))


def body(c: canvas.Canvas, text: str, x: float, top: float, width: float, max_height: float, color: Color, size: float = 10.5) -> float:
    return paragraph(c, text, x, top, width, max_height, style("body", size, size * 1.42, color))


def page_number(c: canvas.Canvas, number: int, light: bool = True) -> None:
    color = SLATE if light else MUTED
    c.setFillColor(color)
    c.setFont(FONT, 6.5)
    c.drawString(34, 18, "PROJECT DYNAMO  |  INDEPENDENT PRODUCT STRATEGY STUDY")
    c.drawRightString(PAGE_W - 34, 18, f"{number:02d}")


def fit_image(c: canvas.Canvas, path: Path, x: float, y: float, w: float, h: float, background: Color = NAVY) -> None:
    """Fit the complete approved image into its frame without cropping it."""
    with PILImage.open(path) as source:
        source_w, source_h = source.size
    scale = min(w / source_w, h / source_h)
    draw_w = source_w * scale
    draw_h = source_h * scale
    c.setFillColor(background)
    c.rect(x, y, w, h, stroke=0, fill=1)
    c.drawImage(
        image_reader(path),
        x + (w - draw_w) / 2,
        y + (h - draw_h) / 2,
        draw_w,
        draw_h,
        mask="auto",
    )


def image_frame(c: canvas.Canvas, name: str, x: float, y: float, w: float, h: float, border: Color = HexColor("#294150")) -> None:
    rounded(c, x - 1, y - 1, w + 2, h + 2, NAVY_2, border)
    fit_image(c, asset(name), x, y, w, h)


def caption(c: canvas.Canvas, title: str, text: str, x: float, top: float, w: float, dark: bool = True) -> float:
    title_color = DEEP_GREEN if dark else GREEN
    body_color = MUTED if dark else SLATE
    eyebrow(c, title, x, top, title_color, 7.2)
    return body(c, text, x, top - 12, w, 58, body_color, 8.2)


def shoe_silhouette(c: canvas.Canvas, x: float, y: float, w: float, h: float) -> None:
    """Original, unbranded mid-top basketball-shoe silhouette."""
    c.saveState()
    c.translate(x, y)
    c.scale(w / 330, h / 180)
    p = c.beginPath()
    p.moveTo(18, 30)
    p.curveTo(30, 17, 62, 11, 104, 11)
    p.lineTo(276, 11)
    p.curveTo(304, 11, 321, 21, 320, 36)
    p.curveTo(319, 49, 301, 56, 274, 58)
    p.lineTo(219, 62)
    p.curveTo(198, 67, 181, 80, 166, 96)
    p.lineTo(135, 132)
    p.lineTo(129, 165)
    p.lineTo(82, 165)
    p.lineTo(69, 105)
    p.lineTo(37, 81)
    p.curveTo(20, 68, 10, 48, 18, 30)
    p.close()
    c.setFillColor(INK)
    c.drawPath(p, stroke=0, fill=1)
    c.setStrokeColor(CREAM)
    c.setLineWidth(4)
    c.line(86, 132, 144, 117)
    c.line(82, 113, 151, 96)
    c.line(79, 94, 161, 76)
    c.setLineWidth(5)
    c.line(24, 31, 313, 31)
    c.restoreState()


def page_1(c: canvas.Canvas) -> None:
    gradient(c, ["#03101b", "#0a2634", "#451a22"])
    paragraph(c, "Project Dynamo", 96, 382, 600, 70, style("cover", 44, 48, WHITE, FONT_BOLD, TA_CENTER))
    rule(c, PAGE_W / 2 - 62, 318, 124, RED, 3)
    paragraph(c, DATA["hero_line"], 130, 286, 532, 62, style("cover proposition", 14, 19, SLATE, FONT, TA_CENTER))
    paragraph(c, "AN INDEPENDENT COGNISINT PRODUCT STRATEGY AND VEHICLE DESIGN STUDY", 106, 80, 580, 22, style("cover footer", 7.4, 9, SLATE, FONT_BOLD, TA_CENTER))


def page_2(c: canvas.Canvas) -> None:
    """Inside cover: centered lockup, fully justified note, large margins, then the badge."""
    fill(c, PAPER)
    text_w = 470
    intro_style = style("intro lockup", 10.8, 17.2, INK, FONT, TA_JUSTIFY)
    block = Paragraph(html.escape(DATA["intro_note"]), intro_style)
    _, text_h = block.wrap(text_w, 250)
    badge_w, badge_h, gap = 162, 108, 34
    total_h = text_h + gap + badge_h
    start_y = (PAGE_H + total_h) / 2
    block.drawOn(c, (PAGE_W - text_w) / 2, start_y - text_h)
    badge_y = start_y - text_h - gap - badge_h
    c.drawImage(
        image_reader(asset("clark-trapezoid-floating.png")),
        (PAGE_W - badge_w) / 2,
        badge_y,
        badge_w,
        badge_h,
        preserveAspectRatio=True,
        anchor="c",
        mask="auto",
    )


def page_3(c: canvas.Canvas) -> None:
    fill(c, CREAM)
    eyebrow(c, "The question", 48, 550, CLARK_RED)
    heading(c, DATA["question_headline"], 48, 518, 700, 31, INK)
    body(c, DATA["question_copy"], 48, 420, 640, 120, MUTED, 13)
    rule(c, 48, 265, 84, CLARK_RED, 3)
    body(c, DATA["platform_definition"], 48, 232, 640, 130, INK, 11.5)
    body(c, "“Platform” remains useful shorthand, but Dynamo is not one invariant floorpan stretched from Captain to Ranch.", 48, 126, 640, 52, DEEP_GREEN, 9.5)
    page_number(c, 3, light=False)


def page_4(c: canvas.Canvas) -> None:
    fill(c, PAPER)
    eyebrow(c, "Problem one: too many answers share the same shape", 48, 550, CLARK_RED)
    heading(c, DATA["shoe_headline"], 48, 518, 424, 29, INK)
    body(c, DATA["shoe_copy"], 48, 377, 405, 175, MUTED, 11.2)
    shoe_silhouette(c, 474, 190, 270, 245)
    rule(c, 506, 163, 206, CLARK_RED, 3)
    paragraph(c, "Body style becomes a functional decision.", 474, 140, 270, 42, style("shoe caption", 10, 13, INK, FONT_BOLD, TA_CENTER))
    page_number(c, 4, light=False)


def page_5(c: canvas.Canvas) -> None:
    fill(c, NAVY)
    fit_image(c, asset("roller-coaster-sandy-torchon-pexels.jpg"), 452, 42, 306, 528, HexColor("#02070b"))
    eyebrow(c, "Problem two: the market moves faster than the program", 42, 550, GREEN)
    heading(c, DATA["swing_headline"], 42, 514, 365, 28, WHITE)
    body(c, DATA["swing_copy"], 42, 365, 360, 230, SLATE, 11.1)
    rule(c, 42, 122, 86, RED, 3)
    body(c, "The aim is resilience for the customer and for the manufacturer.", 42, 96, 360, 52, WHITE, 10)
    c.setFillColor(SLATE)
    c.setFont(FONT, 6.5)
    c.drawRightString(758, 30, "Photograph: Sandy Torchon / Pexels")
    page_number(c, 5)


def propulsion_card(c: canvas.Canvas, title: str, path: str, text: str, x: float, y: float, accent: Color) -> None:
    rounded(c, x, y, 346, 184, WHITE, HexColor("#cbc7bd"))
    rule(c, x + 18, y + 154, 48, accent, 3)
    paragraph(c, title, x + 18, y + 142, 310, 30, style("system title", 12, 14, INK, FONT_BOLD))
    paragraph(c, path, x + 18, y + 108, 310, 34, style("system path", 8.3, 11, accent, FONT_BOLD))
    body(c, text, x + 18, y + 68, 310, 58, MUTED, 8.6)


def page_6(c: canvas.Canvas) -> None:
    fill(c, CREAM)
    eyebrow(c, "Four ways energy becomes motion", 34, 568, CLARK_RED)
    heading(c, "How four familiar propulsion systems deliver power to the road.", 34, 544, 720, 23, INK)
    cards = [
        ("Traditional internal combustion", "Fuel → engine → transmission → wheels", "The engine turns the wheels mechanically through a transmission.", BLUE),
        ("Conventional hybrid", "Fuel + battery → engine / motor / transmission → wheels", "The motor assists, recovers energy, and may move the car alone; the engine still retains a mechanical path to the wheels.", DEEP_GREEN),
        ("Battery electric", "Grid → battery → inverter → motor → reduction gear → wheels", "Stored electrical energy supplies the traction motor. There is no combustion engine or mechanical engine-to-wheel path.", BLUE),
        ("Dynamo Petro-Electric (PE)", "Grid or fuel → battery / generator → inverter → motor → wheels", "The battery powers the motor. A plug or an engine-driven generator supplies energy; the engine never drives the wheels.", CLARK_RED),
    ]
    positions = [(34, 304), (412, 304), (34, 90), (412, 90)]
    for item, (x, y) in zip(cards, positions):
        propulsion_card(c, item[0], item[1], item[2], x, y, item[3])
    page_number(c, 6, light=False)


def page_7(c: canvas.Canvas) -> None:
    fill(c, NAVY)
    eyebrow(c, "The rail analogy", 42, 550, GREEN)
    heading(c, "A diesel-electric locomotive makes the series-electric idea visible.", 42, 518, 708, 28, WHITE)
    body(c, "A diesel-electric locomotive does not use its diesel engine to turn the wheels through a conventional transmission. The engine turns an alternator. The electricity then powers traction motors that move the locomotive.", 42, 414, 708, 78, SLATE, 11.2)
    image_frame(c, "highroad-locomotive.png", 42, 96, 708, 260)
    caption(c, "From rail to road", "Dynamo PE adds a plug-in traction battery for routine electric driving, regenerative braking, and power buffering. The locomotive image confirms the idea after the mechanism has been explained.", 42, 82, 708, dark=False)
    page_number(c, 7)


def page_8(c: canvas.Canvas) -> None:
    fill(c, PAPER)
    eyebrow(c, "The energy bay architecture", 38, 566, CLARK_RED)
    heading(c, "The energy bays make flexibility physical.", 38, 540, 716, 25, INK)
    image_frame(c, "architecture.png", 38, 212, 716, 278, PAPER)
    items = [
        ("Forward Energy Bay", "PE installs the production-built Power Cassette; BEV installs supplemental battery and power electronics."),
        ("Midship Energy Bay", "PE uses the space for fuel storage; BEV uses vehicle-specific battery capacity ahead of the rear axle."),
        ("Shared electrical interface", "Both strategies connect to the same traction battery, inverter, controls, and electric drive family."),
        ("Separate thermal work", "Engine heat and lower-temperature battery, inverter, and drive-unit cooling remain deliberately distinct."),
    ]
    for index, (title, text) in enumerate(items):
        x = 38 + index * 181
        caption(c, title, text, x, 184, 166, dark=True)
    page_number(c, 8, light=False)


def page_9(c: canvas.Canvas) -> None:
    fill(c, NAVY)
    eyebrow(c, "Electric-native packaging and production logic", 38, 566, GREEN)
    heading(c, "One electric-drive system supports different bodies and different energy mixes.", 38, 540, 716, 23, WHITE)
    items = [
        ("Flatter usable floors", "A structural battery and compact e-drives eliminate the conventional longitudinal driveline tunnel, freeing cabin and cargo space."),
        ("A defined Power Cassette", "The production-installed Power Cassette packages the PE prime mover and generator behind defined electrical, control, cooling, fuel, emissions, and service interfaces. It supplies electricity, never mechanical wheel power, and is not owner-swappable."),
        ("Room for each mission", "Compact PE fuel, exhaust, cooling, and emissions systems are packaged around the electric-native body instead of dictating its entire structure."),
        ("Production can respond", "PE and BEV output can rebalance as fuel prices, charging access, policy, and demand move."),
        ("Shared knowledge compounds", "Controls, diagnostics, service training, parts logic, and supplier capability continue across the family."),
        ("Body-specific work remains", "Tooling, crash structure, cooling, plumbing, packaging, and capacity stay engineered for the body and job."),
    ]
    for index, (title, text) in enumerate(items):
        row, col = divmod(index, 2)
        x = 38 + col * 370
        y = 350 - row * 132
        rounded(c, x, y, 346, 120, NAVY_2, HexColor("#294150"))
        rule(c, x + 16, y + 95, 44, GREEN if index != 1 else RED, 3)
        paragraph(c, title, x + 16, y + 84, 314, 26, style("logic title", 10.5, 12, WHITE, FONT_BOLD))
        body(c, text, x + 16, y + 57, 314, 52, SLATE, 7.7)
    page_number(c, 9)


def model_card(c: canvas.Canvas, model: dict, x: float, y: float, w: float, h: float) -> None:
    caption_h = 34
    rounded(c, x, y, w, h, NAVY_2, HexColor("#294150"))
    fit_image(c, asset(model["image"]), x + 1, y + caption_h, w - 2, h - caption_h - 1)
    c.setFillColor(WHITE)
    c.setFont(FONT_BOLD, 8)
    c.drawString(x + 10, y + 20, model["short_name"])
    c.setFillColor(GREEN)
    c.setFont(FONT, 6.8)
    c.drawRightString(x + w - 10, y + 20, model["role"])


def page_10(c: canvas.Canvas) -> None:
    fill(c, NAVY)
    eyebrow(c, "The core family", 28, 570, GREEN)
    heading(c, "Nine vehicles, each with a reason to exist.", 28, 548, 720, 25, WHITE)
    for index, model in enumerate(DATA["models"]):
        row, col = divmod(index, 3)
        model_card(c, model, 28 + col * 250, 350 - row * 158, 236, 142)
    page_number(c, 10)


def photo_card(
    c: canvas.Canvas,
    image_name: str,
    title: str,
    text: str,
    x: float,
    y: float,
    w: float,
    h: float,
    dark: bool = True,
) -> None:
    image_h = h - 78
    image_frame(c, image_name, x, y + 78, w, image_h, PAPER if not dark else NAVY_2)
    caption(c, title, text, x, y + 66, w, dark=not dark)


def page_11(c: canvas.Canvas) -> None:
    fill(c, PAPER)
    eyebrow(c, "Passenger space", 28, 568, CLARK_RED)
    heading(c, "The Constellation changes with the day.", 28, 544, 716, 25, INK)
    cards = [
        ("constellation-liftgate-v2.png", "Cargo depth", "Useful room remains behind a fully occupied third row."),
        ("constellation-removable-seat-v11.png", "Open floor", "Track-mounted second-row chairs can be removed when the trip needs more floor than seats."),
        ("constellation-third-row-inset-v3.png", "Horizontal stowage", "The third-row bench folds into a level, useful cargo surface."),
    ]
    for index, item in enumerate(cards):
        photo_card(c, item[0], item[1], item[2], 28 + index * 249, 192, 238, 300, dark=False)
    body(c, "A low, uninterrupted floor makes each configuration more useful. The Estate and XTour answer other passenger and cargo needs at lower and medium profiles; the family does not make one vehicle pretend to be every vehicle.", 28, 145, 736, 84, MUTED, 9.2)
    page_number(c, 11, light=False)


def page_12(c: canvas.Canvas) -> None:
    fill(c, HexColor("#05080b"))
    eyebrow(c, "Work use cases", 28, 568, RED)
    heading(c, "TaskVan is configured around the work.", 28, 544, 716, 25, WHITE)
    cards = [
        ("taskvan-delivery.png", "Delivery", "A credible sliding aperture, low step, and modular parcel shelving."),
        ("taskvan-inclusive-trade.png", "Skilled trades", "Organized tools and durable access serve the people doing the work."),
        ("taskvan-market.png", "Mobile enterprise", "Washable modules, refrigeration, tie-downs, and power export support a different daily mission."),
    ]
    for index, item in enumerate(cards):
        photo_card(c, item[0], item[1], item[2], 28 + index * 249, 192, 238, 300, dark=True)
    body(c, "Foreman adds a mid-size open bed; Ranch supports full-size towing, hauling, and field work. Ranch’s fold-flat work surface leaves room for a laptop, coffee, and documents; AC connections are supplied, not a laptop.", 28, 145, 736, 82, SLATE, 9.2)
    page_number(c, 12)


def page_13(c: canvas.Canvas) -> None:
    fill(c, NAVY)
    eyebrow(c, "Inside Dynamo", 28, 568, GREEN)
    heading(c, "One control philosophy, expressed through distinct cabins.", 28, 544, 716, 24, WHITE)
    cabins = [
        ("sedan-interior-v2.png", "Captain", "Anthracite, Travertine, and Brushed Aluminum."),
        ("estate-interior.png", "Estate", "Oxblood woven inserts, real controls, and useful storage."),
        ("constellation-executive.png", "Constellation", "Sandstone, Nantucket Fog, and tactile Travertine."),
        ("highroad-interior.png", "Highroad", "Three usable rows, familiar controls, and durable materials."),
    ]
    for index, item in enumerate(cabins):
        row, col = divmod(index, 2)
        x = 28 + col * 379
        y = 300 - row * 214
        image_frame(c, item[0], x, y + 64, 357, 142)
        caption(c, item[1], item[2], x, y + 52, 357, dark=False)
    page_number(c, 13)


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
    (0.08, 0.22, 0.6), (0.17, 0.64, 0.9), (0.29, 0.36, 0.55),
    (0.38, 0.78, 0.72), (0.46, 0.16, 0.85), (0.55, 0.56, 0.5),
    (0.63, 0.83, 0.8), (0.72, 0.29, 0.62), (0.81, 0.68, 0.92),
    (0.91, 0.42, 0.58), (0.24, 0.9, 0.5), (0.68, 0.08, 0.55),
    (0.95, 0.84, 0.7),
]


def clipped_gradient(c: canvas.Canvas, x: float, y: float, w: float, h: float, stops: list[str], horizontal: bool = False) -> None:
    c.saveState()
    clip = c.beginPath()
    clip.roundRect(x, y, w, h, 4)
    c.clipPath(clip, stroke=0, fill=0)
    x1, y1 = (x + w, y) if horizontal else (x + w, y + h)
    c.linearGradient(x, y, x1, y1, [HexColor(item) for item in stops])
    c.restoreState()


def sparse_texture(c: canvas.Canvas, x: float, y: float, w: float, h: float, color: Color, alpha: float, scale: float = 1) -> None:
    c.saveState()
    c.setFillColor(color)
    c.setFillAlpha(alpha)
    for px, py, radius in IRREGULAR_POINTS:
        c.circle(x + px * w, y + py * h, radius * scale, stroke=0, fill=1)
    c.restoreState()


def swatch_outline(c: canvas.Canvas, x: float, y: float, w: float, h: float) -> None:
    c.setStrokeColor(HexColor("#bcb7ad"))
    c.setLineWidth(0.55)
    c.roundRect(x, y, w, h, 4, stroke=1, fill=0)


def swatch_name(c: canvas.Canvas, name: str, x: float, y: float, w: float) -> None:
    c.setFillColor(INK)
    c.setFont(FONT_BOLD, 6.2)
    c.drawCentredString(x + w / 2, y, name)


def paint_swatch(c: canvas.Canvas, name: str, x: float, y: float, w: float, h: float) -> None:
    stops, metallic = PAINT_STYLES[name]
    clipped_gradient(c, x, y, w, h, stops)
    c.saveState()
    c.setFillColor(WHITE)
    c.setFillAlpha(0.22 if name not in {"Quicksilver", "Champagne", "Platinum Mist", "Lake Effect"} else 0.34)
    c.ellipse(x - 14, y + h * 0.48, x + w * 0.65, y + h * 1.45, stroke=0, fill=1)
    c.restoreState()
    if metallic:
        sparse_texture(c, x + 4, y + 3, w - 8, h - 6, WHITE, 0.34, 0.6)
    swatch_outline(c, x, y, w, h)


def cabin_swatch(c: canvas.Canvas, name: str, x: float, y: float, w: float, h: float) -> None:
    upper_stops, lower_color, pattern = CABIN_STYLES[name]
    split = y + h / 2
    c.saveState()
    clip = c.beginPath()
    clip.roundRect(x, y, w, h, 4)
    c.clipPath(clip, stroke=0, fill=0)
    clipped_gradient(c, x, split, w, h / 2, upper_stops)
    c.setFillColor(HexColor(lower_color))
    c.rect(x, y, w, h / 2, stroke=0, fill=1)
    if name in {"Anthracite", "Sandstone", "Nantucket Fog"}:
        sparse_texture(c, x + 2, split + 1, w - 4, h / 2 - 2, WHITE if name == "Anthracite" else INK, 0.10, 0.48)
    if name == "Travertine":
        c.saveState()
        c.setFillColor(HexColor("#4e2a18"))
        c.setFillAlpha(0.26)
        c.ellipse(x + 8, split + 12, x + 52, split + 20, stroke=0, fill=1)
        c.ellipse(x + 62, split + 3, x + 104, split + 10, stroke=0, fill=1)
        c.restoreState()
    c.saveState()
    c.setLineWidth(0.5)
    if pattern in {"warm-weave", "light-weave", "ocean-weave"}:
        first = HexColor("#bd6c3e") if pattern == "warm-weave" else WHITE if pattern == "light-weave" else HexColor("#5d85a4")
        second = HexColor("#e09e68") if pattern == "warm-weave" else HexColor("#4d3b28") if pattern == "light-weave" else HexColor("#03101d")
        c.setStrokeColor(first)
        c.setStrokeAlpha(0.38 if pattern == "warm-weave" else 0.15)
        for offset in range(-20, int(w) + 20, 8):
            c.line(x + offset, y, x + offset + 18, split)
        c.setStrokeColor(second)
        c.setStrokeAlpha(0.2)
        for offset in range(-15, int(w) + 20, 10):
            c.line(x + offset, split, x + offset + 18, y)
    else:
        for offset in range(4, int(w), 7):
            c.setStrokeColor(WHITE)
            c.setStrokeAlpha(0.10)
            c.line(x + offset, y, x + offset, split)
        for offset in range(4, int(h / 2), 6):
            c.setStrokeColor(HexColor("#111111"))
            c.setStrokeAlpha(0.10)
            c.line(x, y + offset, x + w, y + offset)
    c.restoreState()
    c.restoreState()
    swatch_outline(c, x, y, w, h)


def hardware_swatch(c: canvas.Canvas, name: str, x: float, y: float, w: float, h: float) -> None:
    stops, finish = HARDWARE_STYLES[name]
    clipped_gradient(c, x, y, w, h, stops, horizontal=finish == "brushed")
    if finish == "brushed":
        c.saveState()
        c.setStrokeColor(WHITE)
        c.setStrokeAlpha(0.16)
        c.setLineWidth(0.4)
        for offset in range(3, int(h), 3):
            c.line(x + 2, y + offset, x + w - 2, y + offset)
        c.restoreState()
    elif finish == "bead-blasted":
        sparse_texture(c, x + 3, y + 2, w - 6, h - 4, WHITE, 0.13, 0.55)
    swatch_outline(c, x, y, w, h)


def page_14(c: canvas.Canvas) -> None:
    fill(c, CREAM)
    eyebrow(c, "Colors, materials, and hardware", 28, 568, CLARK_RED)
    heading(c, "A disciplined palette with room for character.", 28, 544, 716, 24, INK)
    eyebrow(c, "Exterior colors", 28, 486, DEEP_GREEN, 7.2)
    for index, name in enumerate(DATA["palette"]["exterior"]):
        row, col = divmod(index, 7)
        x = 28 + col * 105
        y = 414 - row * 78
        paint_swatch(c, name, x, y, 94, 46)
        swatch_name(c, name, x, y - 13, 94)
    eyebrow(c, "Cabin colors and material families", 28, 302, DEEP_GREEN, 7.2)
    for index, name in enumerate(DATA["palette"]["cabin"]):
        x = 28 + index * 122
        cabin_swatch(c, name, x, 228, 110, 52)
        swatch_name(c, name, x, 214, 110)
    eyebrow(c, "Hardware finishes", 28, 184, DEEP_GREEN, 7.2)
    for index, name in enumerate(DATA["palette"]["hardware"]):
        x = 28 + index * 244
        hardware_swatch(c, name, x, 130, 226, 38)
        swatch_name(c, name, x, 116, 226)
    body(c, DATA["palette"]["material_note"], 28, 92, 736, 44, MUTED, 8)
    page_number(c, 14, light=False)


def page_15(c: canvas.Canvas) -> None:
    fill(c, NAVY)
    eyebrow(c, "Dynamo Cabin Intelligence", 28, 568, RED)
    heading(c, "The vehicle reads context, then selects a bounded response.", 28, 544, 716, 23, WHITE)
    cards = [
        ("captain-cabin-safe.png", "Cabin Safe", "A dog waits safely while actual thermal risk, rather than a timer, governs the response."),
        ("xtour-cabin-comfort-v2.png", "Cabin Comfort", "Tired hikers return to an XTour prepared around actual conditions and their expected return."),
        ("highroad-rain-guard.png", "Rain Guard", "Highroad verifies every closure and reports an obstruction or fault."),
    ]
    for index, item in enumerate(cards):
        photo_card(c, item[0], item[1], item[2], 28 + index * 249, 224, 238, 268, dark=True)
    steps = [
        ("Sense", "Occupants, movement, temperature, weather, battery, time, location, and vehicle state."),
        ("Understand", "Onboard intelligence combines signals, detects contradictions, estimates risk, and predicts what follows."),
        ("Protect", "A safety-certified controller governs bounded actions: monitor, heat, cool, close, notify, unlock, or request help."),
    ]
    for index, (title, text) in enumerate(steps):
        x = 28 + index * 249
        rule(c, x, 185, 50, [BLUE, GREEN, RED][index], 3)
        paragraph(c, title, x, 170, 220, 25, style("step title", 10.5, 12, WHITE, FONT_BOLD))
        body(c, text, x, 145, 220, 72, SLATE, 7.8)
    page_number(c, 15)


def page_16(c: canvas.Canvas) -> None:
    fill(c, NAVY)
    fit_image(c, asset("performance-low-photoreal.png"), 412, 68, 346, 476)
    eyebrow(c, DATA["specialization_label"], 42, 548, GREEN)
    heading(c, "Progressive performance that remains useful on an ordinary road.", 42, 514, 330, 27, WHITE)
    body(c, "Higher-output drive units, brakes, suspension tuning, cooling, wheels, and software can create credible Captain, Fastback, and Estate derivatives. Progressive controls and predictable responses make that capability approachable for ordinary drivers.", 42, 362, 330, 160, SLATE, 10.5)
    rule(c, 42, 178, 82, RED, 3)
    body(c, "The ordinary models keep their current simulated targets. Dynamo does not chase or advertise sub-three-second acceleration.", 42, 151, 330, 72, WHITE, 9.2)
    page_number(c, 16)


def page_17(c: canvas.Canvas) -> None:
    fill(c, CREAM)
    eyebrow(c, "Simulated 2027 design targets", 24, 572, CLARK_RED)
    heading(c, "The concept makes claims that can be tested.", 24, 550, 660, 23, INK)
    headers = ["Model", "L × W", "Weight PE / BEV", "Torque", "Battery PE / BEV", "Gen.", "PE mpg", "0–60", "Top / cruise"]
    rows = [headers]
    for model in DATA["models"]:
        rows.append([
            model["short_name"],
            f'{model["length"].replace(" in", "")} × {model["width"].replace(" in", "")}',
            model["weight"],
            model["torque"],
            model["battery"],
            model["generator"],
            model["pe_mpg"].replace(" mpg", ""),
            model["acceleration"].replace(" sec", " s"),
            model["speed"].replace(" mph", ""),
        ])
    table = Table(rows, colWidths=[72, 76, 100, 70, 92, 54, 45, 45, 72], rowHeights=[29] + [28] * 9)
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), NAVY),
        ("TEXTCOLOR", (0, 0), (-1, 0), WHITE),
        ("FONTNAME", (0, 0), (-1, 0), FONT_BOLD),
        ("FONTNAME", (0, 1), (0, -1), FONT_BOLD),
        ("FONTNAME", (1, 1), (-1, -1), FONT),
        ("FONTSIZE", (0, 0), (-1, -1), 6.5),
        ("LEADING", (0, 0), (-1, -1), 7.5),
        ("ALIGN", (1, 0), (-1, -1), "CENTER"),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [WHITE, PAPER]),
        ("GRID", (0, 0), (-1, -1), 0.35, HexColor("#c8c4bb")),
        ("LEFTPADDING", (0, 0), (-1, -1), 5),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5),
    ]))
    table.wrapOn(c, 744, 312)
    table.drawOn(c, 24, 224)
    rounded(c, 24, 62, 744, 126, WHITE, HexColor("#c8c4bb"))
    eyebrow(c, "Status / basis", 40, 166, DEEP_GREEN, 7.2)
    body(c, "Project Dynamo: concept study. Basis: simulated design targets. No production vehicle is presented as an exact analogue. Captain PE targets 39 mpg while its generator is running, a 32 kWh battery, and 6.1 seconds to 60 mph. Captain BEV targets 28 kWh per 100 miles, a 72 kWh battery, and 5.9 seconds to 60 mph.", 40, 148, 712, 76, MUTED, 8.3)
    page_number(c, 17, light=False)


def page_18(c: canvas.Canvas) -> None:
    fill(c, NAVY)
    eyebrow(c, "Value across the system", 38, 566, GREEN)
    heading(c, "Useful products for customers; durable capability for the company.", 38, 540, 716, 24, WHITE)
    columns = [
        ("For customers", [
            "Choose PE or BEV while keeping electric torque, regenerative braking, all-wheel-drive capability, and familiar vehicle character.",
            "PE supports routine plug-in driving and rapid refueling when distance or charging access demands it.",
            "BEV removes the prime mover for the lowest energy use and scheduled maintenance.",
        ]),
        ("For the manufacturer", [
            "Spread architecture, supplier, control, and service investment across nine specialized models.",
            "Rebalance the PE / BEV mix without discarding factories, service knowledge, or an established customer relationship.",
            "Develop derivatives without pretending that body-specific tooling and engineering disappear.",
        ]),
    ]
    for index, (title, bullets) in enumerate(columns):
        x = 38 + index * 370
        rounded(c, x, 122, 346, 334, NAVY_2, HexColor("#294150"))
        rule(c, x + 22, 420, 62, BLUE if index == 0 else GREEN, 3)
        paragraph(c, title, x + 22, 398, 302, 36, style("value title", 16, 18, WHITE, FONT_BOLD))
        top = 345
        for bullet in bullets:
            c.setFillColor(RED if index == 0 else GREEN)
            c.circle(x + 25, top - 4, 2.5, stroke=0, fill=1)
            used = body(c, bullet, x + 38, top + 8, 282, 70, SLATE, 9.1)
            top -= used + 25
    paragraph(c, "One electric-drive core  •  Two energy strategies  •  Nine specialized models", 38, 84, 716, 24, style("value equation", 11.5, 14, WHITE, FONT_BOLD, TA_CENTER))
    page_number(c, 18)


def page_19(c: canvas.Canvas) -> None:
    fill(c, NAVY)
    eyebrow(c, "The honest engineering brief", 38, 566, RED)
    heading(c, "The work still ahead.", 38, 540, 650, 29, WHITE)
    items = [
        "A PE vehicle remains more complex and maintenance intensive than a pure BEV.",
        "Generator, fuel, exhaust, cooling, and battery mass can erase advantages if the Power Cassette is not aggressively optimized.",
        "Sustained towing and mountain-grade performance depend on generator output, battery buffer, and thermal capacity.",
        "Occasional engine operation creates fuel-aging, catalyst-temperature, noise, vibration, emissions, and oil-conditioning challenges.",
        "Common Forward and Midship Energy Bay interfaces do not imply a literal one-for-one volume swap.",
        "Cost, durability, repairability, certification, and real-world efficiency require full engineering validation.",
    ]
    for index, text in enumerate(items):
        row, col = divmod(index, 2)
        x = 38 + col * 370
        y = 350 - row * 132
        rounded(c, x, y, 346, 120, NAVY_2, HexColor("#294150"))
        c.setFillColor(RED)
        c.circle(x + 19, y + 92, 3, stroke=0, fill=1)
        body(c, text, x + 34, y + 102, 294, 74, SLATE, 9)
    page_number(c, 19)


def precedent_card(c: canvas.Canvas, item: dict, x: float, y: float, w: float, h: float) -> None:
    rounded(c, x, y, w, h, WHITE, HexColor("#d0ccc2"))
    eyebrow(c, item["category"], x + 16, y + h - 24, DEEP_GREEN, 6.3)
    paragraph(c, item["name"], x + 16, y + h - 42, w - 32, 44, style("precedent title", 12.2, 13.6, INK, FONT_BOLD))
    c.setFillColor(CLARK_RED)
    c.setFont(FONT_BOLD, 6.4)
    c.drawString(x + 16, y + h - 90, f'STATUS / BASIS: {item["status"].upper()}')
    body(c, item["summary"], x + 16, y + h - 106, w - 32, h - 138, MUTED, 8.8 if h > 250 else 8.2)
    c.setFillColor(BLUE)
    c.setFont(FONT_BOLD, 7)
    c.drawString(x + 16, y + 16, item["source_label"])
    source_w = pdfmetrics.stringWidth(item["source_label"], FONT_BOLD, 7)
    c.linkURL(item["source_url"], (x + 16, y + 12, x + 16 + source_w, y + 25), relative=0)


def page_20(c: canvas.Canvas) -> None:
    fill(c, CREAM)
    eyebrow(c, "Series-electric propulsion in practice", 28, 568, CLARK_RED)
    heading(c, "The generator can supply energy while electric motors provide traction.", 28, 544, 716, 23, INK)
    items = [item for item in DATA["precedents"] if item["category"] == "Series electric propulsion"]
    for index, item in enumerate(items):
        precedent_card(c, item, 28 + index * 249, 178, 238, 314)
    body(c, "Ford demonstrates a production plug-in range extender. Li Auto demonstrates a commercial extended-range family. Edison Motors carries the same rail-like series-electric logic into vocational trucks. Each proves part of the premise; none is treated as a one-to-one Dynamo analogue.", 28, 144, 736, 76, MUTED, 8.8)
    page_number(c, 20, light=False)


def page_21(c: canvas.Canvas) -> None:
    fill(c, PAPER)
    eyebrow(c, "Flexible and scalable electric programs", 28, 568, CLARK_RED)
    heading(c, "The industry is assembling related pieces of the idea.", 28, 544, 716, 24, INK)
    items = [item for item in DATA["precedents"] if item["category"] != "Series electric propulsion"]
    positions = [(28, 306), (407, 306), (28, 90), (407, 90)]
    for item, (x, y) in zip(items, positions):
        precedent_card(c, item, x, y, 357, 196)
    page_number(c, 21, light=False)


def page_22(c: canvas.Canvas) -> None:
    fill(c, NAVY)
    eyebrow(c, "Future possibilities", 38, 566, GREEN)
    heading(c, "The architecture leaves room for more.", 38, 540, 716, 25, WHITE)
    image_frame(c, "dynamo-global-possibilities-v2.png", 38, 174, 716, 318)
    body(c, "The nine-model family is a balanced North American starting point. Different markets could call for different bodies while retaining shared hard points, propulsion, electronics, production logic, and service knowledge. " + DATA["future_note"], 38, 144, 716, 86, SLATE, 9.2)
    page_number(c, 22)


def page_23(c: canvas.Canvas) -> None:
    fill(c, NAVY)
    eyebrow(c, "The proposition, in one view", 38, 566, GREEN)
    heading(c, "An architecture designed for a market that will keep moving.", 38, 540, 716, 25, WHITE)
    image_frame(c, "family-v2.png", 38, 206, 716, 286)
    body(c, "Dynamo answers both opening problems with the same system. The body portfolio can change without collapsing into one dominant form, and the energy mix can respond to fuel prices, charging access, policy, and customer need. The shared architecture remains valuable because it preserves functional choice, invested capability, and accumulated knowledge.", 38, 174, 716, 96, SLATE, 10)
    page_number(c, 23)


def page_24(c: canvas.Canvas) -> None:
    gradient(c, ["#071522", "#24131a", "#071522"], horizontal=True)
    c.drawImage(
        image_reader(asset("clark-trapezoid-floating.png")),
        PAGE_W / 2 - 65,
        489,
        130,
        87,
        preserveAspectRatio=True,
        anchor="c",
        mask="auto",
    )
    paragraph(c, DATA["closing"], 88, 478, 616, 42, style("closing", 14, 18, WHITE, FONT_ITALIC, TA_CENTER))
    rule(c, 96, 423, 600, CLARK_RED, 3)

    col_w = 218
    eyebrow(c, "About this study", 42, 362, RED, 6.8)
    body(c, DATA["disclaimer"], 42, 346, col_w, 190, SLATE, 7.4)
    eyebrow(c, "Image credits", 287, 362, GREEN, 6.8)
    body(c, DATA["image_credit"], 287, 346, col_w, 150, SLATE, 7.4)
    paragraph(c, "Pexels License", 287, 190, col_w, 16, style("license", 7.4, 9, BLUE, FONT_BOLD))
    c.linkURL("https://www.pexels.com/license/", (287, 176, 370, 192), relative=0)
    eyebrow(c, "Publication", 532, 362, BLUE, 6.8)
    logo_path = ROOT / "public" / "cognisint-logo.png"
    fit_image(c, logo_path, 532, 270, 164, 68, NAVY)
    body(c, DATA["copyright"], 532, 250, col_w, 112, SLATE, 7.4)
    paragraph(c, DATA["website"], 532, 116, col_w, 20, style("website", 9.2, 11, WHITE, FONT_BOLD))
    c.linkURL("https://www.cognisint.com", (532, 96, 660, 120), relative=0)


PAGES = [
    page_1, page_2, page_3, page_4, page_5, page_6,
    page_7, page_8, page_9, page_10, page_11, page_12,
    page_13, page_14, page_15, page_16, page_17, page_18,
    page_19, page_20, page_21, page_22, page_23, page_24,
]


def validate_assets() -> None:
    names = {
        "architecture.png",
        "captain-cabin-safe.png",
        "clark-trapezoid-floating.png",
        "constellation-executive.png",
        "constellation-liftgate-v2.png",
        "constellation-removable-seat-v11.png",
        "constellation-third-row-inset-v3.png",
        "dynamo-global-possibilities-v2.png",
        "estate-interior.png",
        "family-v2.png",
        "highroad-interior.png",
        "highroad-locomotive.png",
        "highroad-rain-guard.png",
        "performance-low-photoreal.png",
        "roller-coaster-sandy-torchon-pexels.jpg",
        "sedan-interior-v2.png",
        "taskvan-delivery.png",
        "taskvan-inclusive-trade.png",
        "taskvan-market.png",
        "xtour-cabin-comfort-v2.png",
    }
    names.update(model["image"] for model in DATA["models"])
    for name in sorted(names):
        asset(name)
    logo_path = ROOT / "public" / "cognisint-logo.png"
    if not logo_path.is_file():
        raise FileNotFoundError(logo_path)


def build() -> None:
    validate_assets()
    brochure = canvas.Canvas(str(TMP_OUTPUT), pagesize=(PAGE_W, PAGE_H), pageCompression=1)
    brochure.setTitle("Project Dynamo — Product Strategy and Vehicle Design Study")
    brochure.setAuthor("Cognisint")
    brochure.setCreator("Cognisint Project Dynamo ReportLab generator")
    brochure.setSubject("A synchronized 24-page Project Dynamo auto-show viewbook")
    for index, render_page in enumerate(PAGES, start=1):
        render_page(brochure)
        if index != len(PAGES):
            brochure.showPage()
    brochure.save()
    os.replace(TMP_OUTPUT, OUTPUT)
    print(f"Built {OUTPUT.relative_to(ROOT)} ({len(PAGES)} pages)")


if __name__ == "__main__":
    build()
