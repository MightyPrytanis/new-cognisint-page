export type DynamoPaletteEntry = {
  name: string
  description: string
  background: string
  secondaryBackground?: string
  finish?: "clearcoat" | "clearcoat-metallic"
}

export const exteriorPaints: DynamoPaletteEntry[] = [
  {
    name: "Copperclad",
    description: "Burnished copper with a restrained lift in direct light.",
    finish: "clearcoat-metallic",
    background:
      "radial-gradient(circle at 24% 18%, rgba(255,255,255,.38), transparent 22%), linear-gradient(145deg, #6f3829 0%, #b66e46 46%, #7d412f 100%)",
  },
  {
    name: "Quicksilver",
    description: "A clean, kinetic silver that sharpens reflected light.",
    finish: "clearcoat-metallic",
    background:
      "radial-gradient(circle at 28% 12%, rgba(255,255,255,.82), transparent 24%), linear-gradient(145deg, #747b82 0%, #d7dbdd 48%, #8d9499 100%)",
  },
  {
    name: "Cherry Royal",
    description: "Deep sweet cherry red with a dark, glassy undertone.",
    finish: "clearcoat",
    background:
      "radial-gradient(circle at 26% 15%, rgba(255,220,220,.4), transparent 22%), linear-gradient(145deg, #3a0710 0%, #8d1530 48%, #4b0916 100%)",
  },
  {
    name: "Glacier",
    description: "A cool slate blue that stays crisp in winter light.",
    finish: "clearcoat",
    background:
      "radial-gradient(circle at 30% 12%, rgba(255,255,255,.38), transparent 28%), linear-gradient(145deg, #2f516b 0%, #6689a4 48%, #29485f 100%)",
  },
  {
    name: "Midnight Blue",
    description: "Near-black blue with measured depth.",
    finish: "clearcoat-metallic",
    background:
      "radial-gradient(circle at 25% 12%, rgba(92,134,176,.52), transparent 24%), linear-gradient(145deg, #050d19 0%, #173555 50%, #071321 100%)",
  },
  {
    name: "After Six",
    description: "Formal black with just enough warmth to avoid severity.",
    finish: "clearcoat",
    background:
      "radial-gradient(circle at 28% 12%, rgba(255,255,255,.18), transparent 24%), linear-gradient(145deg, #050505 0%, #202124 48%, #08090a 100%)",
  },
  {
    name: "Champagne",
    description: "A warm, quiet color between silver and soft gold.",
    finish: "clearcoat-metallic",
    background:
      "radial-gradient(circle at 30% 10%, rgba(255,255,255,.58), transparent 24%), linear-gradient(145deg, #8e8169 0%, #d6c7a9 50%, #9f9177 100%)",
  },
  {
    name: "Blue Order",
    description: "A smooth, saturated blue suited to purposeful work.",
    finish: "clearcoat",
    background:
      "radial-gradient(circle at 30% 10%, rgba(198,228,255,.42), transparent 28%), linear-gradient(145deg, #0752b5 0%, #1688ed 48%, #07439a 100%)",
  },
  {
    name: "Gridiron",
    description: "A vivid but disciplined green with unmistakably American character.",
    finish: "clearcoat",
    background:
      "radial-gradient(circle at 30% 12%, rgba(190,221,191,.28), transparent 27%), linear-gradient(145deg, #102f23 0%, #356447 48%, #143a2b 100%)",
  },
  {
    name: "Canyon",
    description: "A deep maroon-red for the working pickup body.",
    finish: "clearcoat-metallic",
    background:
      "radial-gradient(circle at 28% 12%, rgba(255,205,205,.28), transparent 26%), linear-gradient(145deg, #35101b 0%, #681c35 50%, #42101f 100%)",
  },
  {
    name: "Platinum Mist",
    description: "A warm platinum contrast with a soft atmospheric cast.",
    finish: "clearcoat-metallic",
    background:
      "radial-gradient(circle at 28% 12%, rgba(255,255,255,.68), transparent 26%), linear-gradient(145deg, #9f9588 0%, #d8cdbd 50%, #aaa093 100%)",
  },
  {
    name: "Lake Effect",
    description: "A crisp white with the faint cool cast of fresh lake snow.",
    finish: "clearcoat",
    background:
      "radial-gradient(circle at 30% 12%, #ffffff, transparent 25%), linear-gradient(145deg, #dce4e6 0%, #fbfcfa 52%, #d6dfe1 100%)",
  },
  {
    name: "Dreadnought",
    description: "A warm, historical gray with quiet industrial weight.",
    finish: "clearcoat",
    background:
      "radial-gradient(circle at 30% 12%, rgba(255,255,255,.36), transparent 24%), linear-gradient(145deg, #4d4c47 0%, #77766e 50%, #53524d 100%)",
  },
]

export const cabinMaterials: DynamoPaletteEntry[] = [
  {
    name: "Anthracite",
    description: "Deep charcoal across smooth and finely pebbled surfaces, flooring, and woven blends.",
    background:
      "radial-gradient(circle at 2px 2px, rgba(255,255,255,.055) 0 .7px, transparent 1px) right top / 50% 100% repeat, linear-gradient(145deg, #17191a, #35383a)",
    secondaryBackground:
      "repeating-linear-gradient(30deg, rgba(189,108,62,.46) 0 1px, transparent 1px 5px), repeating-linear-gradient(120deg, rgba(224,158,104,.22) 0 1px, transparent 1px 7px), #242426",
  },
  {
    name: "Oxblood",
    description: "Deep red-brown woven upholstery and durable bolsters.",
    background:
      "radial-gradient(circle at 28% 15%, rgba(255,255,255,.16), transparent 28%), linear-gradient(145deg, #351315, #6d292a 52%, #431719)",
    secondaryBackground:
      "repeating-linear-gradient(0deg, rgba(255,255,255,.05) 0 1px, transparent 1px 5px), repeating-linear-gradient(90deg, rgba(0,0,0,.16) 0 1px, transparent 1px 5px), #5b2423",
  },
  {
    name: "Sandstone",
    description: "A warm, light foundation for durable molded interior surfaces.",
    background:
      "radial-gradient(circle at 2px 2px, rgba(72,56,41,.14) 0 1px, transparent 1.4px), linear-gradient(145deg, #a99478, #d1c1aa)",
    secondaryBackground:
      "repeating-linear-gradient(30deg, rgba(255,255,255,.13) 0 1px, transparent 1px 5px), repeating-linear-gradient(120deg, rgba(77,59,40,.11) 0 1px, transparent 1px 6px), #bfac91",
  },
  {
    name: "Nantucket Fog",
    description: "Pale warm gray for headliners, pillars, upper trim, and upholstery.",
    background:
      "radial-gradient(circle at 2px 2px, rgba(70,67,61,.08) 0 .8px, transparent 1.2px), linear-gradient(145deg, #aaa79f, #d2cfc7)",
    secondaryBackground:
      "repeating-linear-gradient(0deg, rgba(255,255,255,.18) 0 1px, transparent 1px 4px), repeating-linear-gradient(90deg, rgba(65,62,57,.08) 0 1px, transparent 1px 4px), #c9c6be",
  },
  {
    name: "Thalassic",
    description: "Deep ocean blue for upholstery, molded accents, and cabin contrast.",
    background:
      "radial-gradient(circle at 26% 15%, rgba(105,154,190,.2), transparent 28%), linear-gradient(145deg, #06172a 0%, #153a5a 48%, #081d32 100%)",
    secondaryBackground:
      "repeating-linear-gradient(30deg, rgba(93,133,164,.13) 0 1px, transparent 1px 5px), repeating-linear-gradient(120deg, rgba(3,15,29,.22) 0 1px, transparent 1px 6px), linear-gradient(145deg, #06172a 0%, #153a5a 48%, #081d32 100%)",
  },
  {
    name: "Travertine",
    description: "A variegated warm brown carried across smooth surfaces and woven textiles.",
    background:
      "radial-gradient(ellipse 42% 10% at 24% 24%, rgba(78,42,24,.38), transparent 72%), radial-gradient(ellipse 50% 12% at 78% 68%, rgba(71,38,23,.3), transparent 72%), radial-gradient(ellipse 30% 8% at 44% 88%, rgba(235,177,123,.24), transparent 74%), linear-gradient(145deg, #704029 0%, #b66f40 46%, #7c472d 100%)",
    secondaryBackground:
      "repeating-linear-gradient(30deg, rgba(189,108,62,.46) 0 1px, transparent 1px 5px), repeating-linear-gradient(120deg, rgba(224,158,104,.22) 0 1px, transparent 1px 7px), #242426",
  },
]

export const hardwareFinishes: DynamoPaletteEntry[] = [
  {
    name: "Brushed Aluminum",
    description: "Satin linear grain for switches, controls, and frequent touchpoints.",
    background:
      "repeating-linear-gradient(0deg, rgba(255,255,255,.16) 0 1px, rgba(54,61,65,.08) 1px 3px), linear-gradient(90deg, #858b8e, #c7cbcc 48%, #8e9497)",
  },
  {
    name: "Black Chrome",
    description: "A deep reflective finish reserved for select trim and jewelry-like details.",
    background:
      "linear-gradient(110deg, #080a0c 0%, #343a40 22%, #0b0e11 40%, #666d72 53%, #15191d 67%, #030405 100%)",
  },
  {
    name: "Dark Anodized Aluminum",
    description: "A bead-blasted, low-glare finish for controls and touchpoints in working vehicles.",
    background:
      "radial-gradient(circle at 2px 2px, rgba(255,255,255,.13) 0 .7px, transparent 1px), linear-gradient(145deg, #1b2023 0%, #41484b 48%, #202629 100%)",
  },
]
