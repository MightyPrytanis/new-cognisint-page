# Project Dynamo publication ledger

## 2026-08-10 — Corrected brochure covers, photography, and material finishes

- **Cover and badge:** Replaced the photographic front cover with an unnumbered deep navy to Clark red vector gradient, centered “Project Dynamo” typography, and the approved free-floating Clark Red Trapezoid badge. Removed the champagne sheetmetal badge from the brochure generator entirely.
- **Photo legibility:** Rebuilt the affected photographic layouts with substantially lighter translucent reading panels. Moved image card captions below their photographs wherever the page structure allowed, so caption backgrounds no longer cover vehicle, cabin, or use case imagery.
- **Passenger and work pacing:** Restored three clearly visible Constellation photographs on the passenger space page. Removed the separate Foreman and Ranch image spotlights from the work use page and retained their roles in a compact family level explanation.
- **Colors and materials:** Replaced the brochure's flat color blocks and generic diagonal cabin lines with vector swatches matching the website's established finish logic: smooth clearcoat highlights, sparse irregular metallic flecks only on metallic paints, distinct smooth and woven halves for each cabin family, and differentiated Brushed Aluminum, Black Chrome, and Dark Anodized Aluminum treatments.
- **Back cover:** Added an unnumbered back cover with the free-floating Clark Red Trapezoid badge and the centered “Time after time” Clark slogan. The revised auto show viewbook now contains 21 pages while replacing the same public PDF.
- **Synchronization and QA:** Added the website palette source to the shared publication contract. Rebuilt the PDF, checked its metadata and extracted text, visually inspected all 21 rendered pages, rechecked the brochure link in source and the production website build, and recorded a new synchronized baseline only after the strict pair audit passed.

## 2026-08-10 — Synchronized website and auto show brochure

- **Recovered baseline:** Began from the published `origin/main` state and preserved all approved vehicle imagery, model identities, colors, materials, specifications, disclaimers, and Clark language. No image asset was generated, edited, recolored, cropped, or replaced.
- **Website narrative:** Reordered the principal page from the proposition through the two energy strategies and locomotive explanation into the Forward and Amidships Energy Bay cutaway, propulsion paths, production logic, and then the nine-model family. Moved future possibilities to an epilogue after use cases, technical evidence, honest engineering, and external context.
- **Architecture definition:** Defined Dynamo once as a scalable electric-drive architecture comprising shared hard points, interfaces, component families, energy bays, controls, production logic, and service knowledge. Clarified that “platform” is shorthand and that Dynamo is not one invariant floorpan stretched from Captain to Ranch.
- **Production claim:** Replaced “Specialization without retooling” with “Specialization without restarting the architecture.” Derivatives and PE / BEV production-mix changes retain the shared system while body-specific tooling, crash structure, cooling, plumbing, packaging, and capacity remain separately engineered.
- **Precedent and calibration:** Replaced the Ford-only firstness claim with seven linked manufacturer or primary-source precedents spanning series-electric propulsion and scalable or energy-flexible electric architecture. The page expressly recognizes that Scout and STLA Frame already combine BEV and range-extended configurations and identifies Dynamo’s narrower distinction as applying PE / BEV flexibility to a specialized nine-model system. Public performance calibration remains internal to Dynamo with explicit Concept status and Simulated design target basis.
- **Brochure source:** Added a maintainable ReportLab generator under `brochure/project-dynamo/` and rebuilt the existing 20-page auto show PDF in place. The brochure follows the same broad logic as the site with medium-specific pacing rather than reproducing the webpage.
- **Brochure corrections:** Replaced stale CityVan and “hot hikers” references, updated the PE and locomotive explanation, moved the energy-bay architecture forward, preserved the Ranch laptop boundary, added current colors, cabin materials, and hardware finishes, replaced the outdated precedent claim, and retained the Clark closing.
- **Synchronization contract:** Updated `.website-brochure.json` to declare the brochure source, build command, shared publication data, approved image assets, and meaningful cross-medium phrases. Recorded the synchronized baseline only after the website build, lint, PDF text and metadata checks, all-page visual inspection, responsive hierarchy checks, interaction checks, brochure-link verification, and strict pair audit passed.
- **Intentional medium differences:** The website retains interactive model profiles, full target tables, and a separate Colors and Materials page. The brochure condenses those subjects into a cinematic 20-page auto show viewbook while preserving the shared facts and publication invariants.

## 2026-08-08 — Palette finish, color alignment, and cabin flexibility

- **Page framing:** Replaced the procedural order-sheet disclaimer with “Abundant character, thoughtfully contained,” tying the palette to Dynamo’s compact abundance philosophy.
- **Color names:** The Colors and Materials page now presents each exterior color by its proper name without visible clearcoat or metallic qualifiers.
- **Finish behavior:** Metallic colors use sparse, irregular flecks rather than a repeating dot grid; clearcoat colors use a smooth lacquered highlight. Cherry Royal is now treated as a clearcoat, while Canyon and Platinum Mist receive metallic depth.
- **Vehicle alignment:** Darkened Glacier, brightened Blue Order, moved Canyon toward maroon, warmed Platinum Mist, and made Gridiron slightly more vivid to match the vehicle studies more closely.
- **Evocative names:** Removed redundant color words from Glacier, After Six, Gridiron, Canyon, Lake Effect, and Dreadnought. Retained Midnight Blue and Blue Order intact because the color word belongs to each musical allusion.
- **Foreman:** Renamed its green exterior Gridiron across the palette and model profile.
- **Cabin materials:** Framed the system as flexible material and color variation within a defined architecture, including vegan leather alternatives, real leather, durable textiles, and mixed-material interiors. Each cabin chip is divided horizontally to show its color across a smooth upper surface and woven lower textile, with deliberately varied contrast. The Captain now identifies smooth and pebbled Anthracite, a Travertine dash band and bolsters, and their shared Anthracite/Travertine weave. Added Thalassic as the dark blue cabin color.
- **Hardware finishes:** Moved Brushed Aluminum out of the cabin color grid and into a dedicated hardware section with Black Chrome and bead-blasted Dark Anodized Aluminum.
- **Brochure:** The static PDF remains an earlier, separately authored edition. This website update does not claim that the brochure has been regenerated or synchronized.

## 2026-08-05 — Colors and materials page

- **Website presentation:** Added a dedicated Colors and Materials page with thirteen exterior paint chips and six cabin color and material swatches. The page is explicitly a working design palette, not a configurator or order sheet.
- **New exterior colors:** Added Lake Effect and Dreadnought to the canonical web palette.
- **Structured source:** Centralized the palette names, descriptions, and digital swatch treatments in `app/portfolio/project-dynamo/palette.ts`.
- **Brochure:** The static PDF remains an earlier, separately authored edition. This website update does not claim that the brochure has been regenerated or synchronized.

## 2026-08-05 — Foreman exterior color

- **Exterior finish:** The Foreman model-profile spotlight identifies the pickup’s green exterior; the name was revised in the 2026-08-08 palette update.
- **Brochure:** The static PDF remains an earlier, separately authored edition. This website update does not claim that the brochure has been regenerated or synchronized.

## 2026-08-05 — Ranch mobile workstation

- **Interior description:** The Ranch profile identifies its interior as Oxblood and Nantucket Fog and describes the fold-flat workstation as providing room for a laptop, coffee, and documents. In-cab AC power connections support field work without implying that a laptop is included with the vehicle.
- **Brochure:** The static PDF remains an earlier, separately authored edition. This website update does not claim that the brochure has been regenerated or synchronized.

## 2026-08-05 — TaskVan identity

- **Shared vehicle name:** Renamed the commercial van Dynamo TaskVan across public copy, model data, its route slug, and asset identifiers. The new name describes the vehicle's working purpose without implying that its usefulness ends at the city limits.
- **Exterior finish:** The TaskVan model-profile spotlight identifies the vehicle as pictured in Blue Order clearcoat.
- **Brochure:** The static PDF remains an earlier, separately authored edition. This website update does not claim that the brochure has been regenerated or synchronized.

## 2026-08-05 — Petro-Electric explanation and signature colors

- **Engineering nomenclature:** Standardized the public model choice as PE / BEV. PE now expands to Petro-Electric (PE) plug-in series hybrid; PEV is not used because it conventionally denotes the broader plug-in electric vehicle category.
- **Early explanation:** Added a prominent definition immediately above the locomotive comparison: an onboard prime mover generates electricity while electric traction motors alone drive the wheels.
- **Locomotive comparison:** Distinguished a conventional diesel-electric locomotive from Dynamo PE vehicles by explaining the Highroad's plug-in traction battery, routine battery-only driving, regenerative braking, power buffering, and generator-off operation.
- **Exterior colors:** Restored Copperclad Metallic for the Captain hero, identified the Fastback in Quicksilver, the Highroad in Midnight Blue metallic, the Estate sport wagon in Cherry Royal, and the two-tone Ranch in Canyon with a Platinum Mist roof. Retained the existing selective use of Glacier clearcoat, After Six, and Champagne Clearcoat Metallic rather than converting the galleries into an order guide.
- **Interior colors and materials:** Preserved the established judicious references to Anthracite, Sandstone, Nantucket Fog, Brushed Aluminum, Oxblood, and Travertine where the adjacent imagery makes them meaningful.
- **Brochure:** The static PDF remains an earlier, separately authored edition. This release updates the public website and publication contract but does not claim that the brochure has been regenerated or synchronized.

## 2026-08-02 — Energy-bay architecture and cabin material vocabulary

- **Website architecture:** Replaced literal solid-state and one-module-swap language with a chemistry-flexible structural battery enclosure, a Forward Energy Bay, and an Amidships Energy Bay. Added concise explanations of the shared high-voltage interface, separate thermal circuits, condition-aware maintenance logic, route preview, and staged generator loading.
- **Engineering boundaries:** Preserved model-specific capacity and performance targets; explicitly retained differences in crash structure, cooling, plumbing, and packaging rather than claiming exact commonality.
- **Cabin vocabulary:** Introduced Anthracite, Sandstone, Nantucket Fog, and Brushed Aluminum as functional material names. Added selected model-level discoveries including Oxblood, Glacier, After Six, Champagne Clearcoat Metallic, and Travertine without turning the presentation into a complete order guide.
- **Value framing:** Described materials through durability, warmth, tactility, quietness, and intended use—not status or price hierarchy.
- **Responsive presentation:** Corrected the locomotive comparison so its cinematic aspect ratio no longer forces horizontal overflow on narrow screens; the mobile composition now uses a taller full-width frame for the explanatory copy.
- **Brochure:** The current brochure remains a separately authored static PDF. No reproducible source has yet been located, so this website revision is recorded as an intentional temporary divergence rather than falsely described as synchronized.

## 2026-08-01 — Main web presentation hierarchy

- **Website:** Removed repeat launch-style spotlights for individual models outside the nine-model lineup.
- **Model pages:** Retained the full model-specific image galleries and detail narratives.
- **Intentional web uses:** Retained vehicle imagery when it demonstrates a broader platform principle, including Cabin Intelligence, performance derivatives, passenger/cargo flexibility, and commercial adaptability.
- **Brochure:** No corresponding change required for this web-navigation and pacing revision. The current brochure remains a separately authored static PDF.
- **Open workflow item:** A reproducible brochure source or generator has not yet been located. Do not describe the website and PDF as automatically synchronized until one exists and a verified baseline is recorded.

## 2026-08-01 — Canonical locomotive image and Cabin Comfort wording

- **Shared website asset:** The main presentation and Highroad model gallery now use the same `highroad-locomotive.png` image, carrying one plain `COGX` reporting mark and no Cognisint logo.
- **Website wording:** Cabin Comfort now describes the returning hikers as “tired,” not “hot.”
- **Brochure:** The current brochure remains a separately authored static PDF; no reproducible source has yet been located for rebuilding it with this revised image or wording.
