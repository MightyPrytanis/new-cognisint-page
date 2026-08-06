export type DynamoPaletteEntry = {
  name: string
  description: string
  background: string
}

export const exteriorPaints: DynamoPaletteEntry[] = [
  {
    name: "Copperclad Metallic",
    description: "Burnished copper with a restrained metallic lift.",
    background:
      "radial-gradient(circle at 24% 18%, rgba(255,255,255,.38), transparent 22%), linear-gradient(145deg, #6f3829 0%, #b66e46 46%, #7d412f 100%)",
  },
  {
    name: "Quicksilver",
    description: "A clean, kinetic silver that sharpens reflected light.",
    background:
      "radial-gradient(circle at 28% 12%, rgba(255,255,255,.82), transparent 24%), linear-gradient(145deg, #747b82 0%, #d7dbdd 48%, #8d9499 100%)",
  },
  {
    name: "Cherry Royal metallic",
    description: "Deep sweet cherry red with a dark metallic undertone.",
    background:
      "radial-gradient(circle at 26% 15%, rgba(255,220,220,.4), transparent 22%), linear-gradient(145deg, #3a0710 0%, #8d1530 48%, #4b0916 100%)",
  },
  {
    name: "Glacier Blue Clearcoat",
    description: "A pale, cold blue that stays crisp in winter light.",
    background:
      "radial-gradient(circle at 30% 12%, rgba(255,255,255,.62), transparent 25%), linear-gradient(145deg, #8eb8cf 0%, #c7e0ea 48%, #78a5bd 100%)",
  },
  {
    name: "Midnight Blue metallic",
    description: "Near-black blue with a measured metallic depth.",
    background:
      "radial-gradient(circle at 25% 12%, rgba(92,134,176,.52), transparent 24%), linear-gradient(145deg, #050d19 0%, #173555 50%, #071321 100%)",
  },
  {
    name: "After Six Black",
    description: "Formal black with just enough warmth to avoid severity.",
    background:
      "radial-gradient(circle at 28% 12%, rgba(255,255,255,.18), transparent 24%), linear-gradient(145deg, #050505 0%, #202124 48%, #08090a 100%)",
  },
  {
    name: "Champagne Clearcoat Metallic",
    description: "A warm, quiet metallic between silver and soft gold.",
    background:
      "radial-gradient(circle at 30% 10%, rgba(255,255,255,.58), transparent 24%), linear-gradient(145deg, #8e8169 0%, #d6c7a9 50%, #9f9177 100%)",
  },
  {
    name: "Blue Order clearcoat",
    description: "A smooth, saturated blue suited to purposeful work.",
    background:
      "radial-gradient(circle at 30% 10%, rgba(177,216,255,.48), transparent 24%), linear-gradient(145deg, #0b3e80 0%, #176ec1 48%, #092f65 100%)",
  },
  {
    name: "T.R. Green",
    description: "A forest green with an outdoorsman’s reserve.",
    background:
      "radial-gradient(circle at 30% 12%, rgba(188,210,184,.28), transparent 24%), linear-gradient(145deg, #152d24 0%, #3d5b42 48%, #1a352a 100%)",
  },
  {
    name: "Canyon Red",
    description: "A strong earthen red for the working pickup body.",
    background:
      "radial-gradient(circle at 28% 12%, rgba(255,207,196,.34), transparent 24%), linear-gradient(145deg, #51131a 0%, #8a2930 50%, #55161b 100%)",
  },
  {
    name: "Platinum Mist",
    description: "A pale platinum contrast with a soft atmospheric cast.",
    background:
      "radial-gradient(circle at 28% 12%, rgba(255,255,255,.82), transparent 24%), linear-gradient(145deg, #a7a7a1 0%, #deddd5 50%, #aaa9a2 100%)",
  },
  {
    name: "Lake Effect White clearcoat",
    description: "A crisp white with the faint cool cast of fresh lake snow.",
    background:
      "radial-gradient(circle at 30% 12%, #ffffff, transparent 25%), linear-gradient(145deg, #dce4e6 0%, #fbfcfa 52%, #d6dfe1 100%)",
  },
  {
    name: "Dreadnought Gray clearcoat",
    description: "A warm, historical gray with quiet industrial weight.",
    background:
      "radial-gradient(circle at 30% 12%, rgba(255,255,255,.36), transparent 24%), linear-gradient(145deg, #4d4c47 0%, #77766e 50%, #53524d 100%)",
  },
]

export const cabinMaterials: DynamoPaletteEntry[] = [
  {
    name: "Anthracite",
    description: "Finely grained molded polymer, flooring, and structural foundations.",
    background:
      "repeating-linear-gradient(25deg, rgba(255,255,255,.025) 0 1px, transparent 1px 4px), linear-gradient(145deg, #17191a, #35383a)",
  },
  {
    name: "Oxblood",
    description: "Deep red-brown woven upholstery and durable bolsters.",
    background:
      "repeating-linear-gradient(0deg, rgba(255,255,255,.05) 0 1px, transparent 1px 5px), repeating-linear-gradient(90deg, rgba(0,0,0,.16) 0 1px, transparent 1px 5px), #5b2423",
  },
  {
    name: "Sandstone",
    description: "A warm, light foundation for durable molded interior surfaces.",
    background:
      "radial-gradient(circle at 2px 2px, rgba(72,56,41,.14) 0 1px, transparent 1.4px), linear-gradient(145deg, #a99478, #d1c1aa)",
  },
  {
    name: "Nantucket Fog",
    description: "Pale warm gray for headliners, pillars, upper trim, and upholstery.",
    background:
      "repeating-linear-gradient(0deg, rgba(255,255,255,.18) 0 1px, transparent 1px 4px), repeating-linear-gradient(90deg, rgba(65,62,57,.08) 0 1px, transparent 1px 4px), #c9c6be",
  },
  {
    name: "Brushed Aluminum",
    description: "Satin linear grain for switches, controls, and frequent touchpoints.",
    background:
      "repeating-linear-gradient(0deg, rgba(255,255,255,.16) 0 1px, rgba(54,61,65,.08) 1px 3px), linear-gradient(90deg, #858b8e, #c7cbcc 48%, #8e9497)",
  },
  {
    name: "Travertine",
    description: "Warm stone-toned upholstery with a restrained tactile weave.",
    background:
      "repeating-linear-gradient(30deg, rgba(255,255,255,.09) 0 2px, transparent 2px 6px), repeating-linear-gradient(120deg, rgba(74,54,38,.08) 0 1px, transparent 1px 5px), #ac9a80",
  },
]
