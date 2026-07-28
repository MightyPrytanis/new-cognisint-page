export type DynamoPhoto = {
  src: string
  caption: string
  crop?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
}

export type DynamoModel = {
  slug: string
  name: string
  role: string
  profile: string
  thesis: string
  hero: string
  photos: DynamoPhoto[]
}

const root = "/projects/project-dynamo"

const montage = (src: string, captions: string[]): DynamoPhoto[] =>
  (["top-left", "top-right", "bottom-left", "bottom-right"] as const).map((crop, index) => ({
    src,
    crop,
    caption: captions[index],
  }))

export const dynamoModels: DynamoModel[] = [
  {
    slug: "captain",
    name: "Dynamo Captain",
    role: "Compact sedan",
    profile: "Low profile",
    thesis: "The Captain sedan is the design leader: composed, attainable, and quietly proud of every detail.",
    hero: `${root}/sedan.png`,
    photos: [
      { src: `${root}/sedan.png`, caption: "Captain establishes the family’s low, long-wheelbase stance." },
      {
        src: `${root}/captain-couple.png`,
        caption: "An attainable sedan can still feel like an occasion—and belong naturally to the people who choose it.",
      },
      { src: `${root}/sedan-interior.png`, caption: "Simple and plush: useful controls, warm materials, and technology that recedes." },
      ...montage(`${root}/captain-portfolio.png`, [
        "A formal rear three-quarter view reveals the Captain’s clean tail and planted stance.",
        "Electric traction gives the attainable sedan effortless highway composure.",
        "A real trunk and practical opening keep elegance from becoming precious.",
        "A low-volume performance tune changes wheels, brakes, suspension, and thermal capacity—not the platform logic.",
      ]).slice(0, 3),
    ],
  },
  {
    slug: "fastback",
    name: "Dynamo Fastback",
    role: "Five-door hatch",
    profile: "Low profile",
    thesis: "The lighter, quicker Fastback five-door hatch is a younger, more kinetic expression of the Captain sedan’s fundamentals.",
    hero: `${root}/fastback.png`,
    photos: [
      { src: `${root}/fastback.png`, caption: "A true five-door hatch with its own roofline and lighting character." },
      ...montage(`${root}/fastback-portfolio.png`, [
        "The fast roof and short tail distinguish Fastback without breaking the family face.",
        "The hatch opening and folding rear seat make the shape genuinely useful.",
        "Compact dimensions and instant electric response suit the city after dark.",
        "The shared performance package creates a credible specialty derivative.",
      ]),
      { src: `${root}/performance-low-photoreal.png`, caption: "Fastback joins Captain and Estate in a restrained factory performance study." },
    ],
  },
  {
    slug: "estate",
    name: "Dynamo Estate",
    role: "Compact sport wagon",
    profile: "Low profile",
    thesis: "The Estate sport wagon interprets European long-roof confidence through a restrained North American design language.",
    hero: `${root}/estate.png`,
    photos: [
      { src: `${root}/estate.png`, caption: "Utility without surrendering to crossover proportions." },
      {
        src: `${root}/estate-family.png`,
        caption: "A real family, a real liftgate, and useful cargo space: versatility without inflated proportions.",
      },
      ...montage(`${root}/estate-portfolio.png`, [
        "Long-roof elegance and a useful liftgate belong in the same vehicle.",
        "A coherent cargo bay handles family life without pretending occupied rows disappear.",
        "Low center of gravity and electric all-wheel drive imply sure-footed winter travel.",
        "The performance Estate preserves space while sharpening the chassis and thermal package.",
      ]).slice(0, 3),
      { src: `${root}/performance-low-photoreal.png`, caption: "The low-profile trio demonstrates specialization on shared hard points." },
    ],
  },
  {
    slug: "xtour",
    name: "Dynamo XTour",
    role: "Compact crossover",
    profile: "Medium profile",
    thesis: "The XTour CUV is clearly taller than the Estate sport wagon and clearly more carlike than the Highroad SUV.",
    hero: `${root}/crossover.png`,
    photos: [
      { src: `${root}/crossover.png`, caption: "A raised hip point and 190 mm target clearance establish a true middle height." },
      ...montage(`${root}/xtour-portfolio.png`, [
        "XTour’s taller greenhouse preserves the family’s calm surfaces.",
        "The liftgate and two-row cargo bay fit everyday equipment without SUV bulk.",
        "The medium profile improves sightline while retaining road manners.",
        "Useful trailhead access, not off-road theater.",
      ]),
    ],
  },
  {
    slug: "highroad",
    name: "Dynamo Highroad",
    role: "Three-row SUV",
    profile: "High profile",
    thesis: "The Highroad SUV is the platform’s full-size expression: greater clearance, thermal capacity, towing ability, and room.",
    hero: `${root}/suv.png`,
    photos: [
      { src: `${root}/suv.png`, caption: "A raised hood dome and larger wheel family add stature without changing the fascia." },
      {
        src: `${root}/highroad-locomotive-cogx.png`,
        caption:
          "Beside a modern diesel-electric locomotive, the analogy becomes physical: a prime mover makes electricity; traction motors do the propelling.",
      },
      ...montage(`${root}/highroad-portfolio.png`, [
        "Highroad wears black especially well: formal, capable, and unforced.",
        "Three rows remain honest about luggage space and passenger packaging.",
        "A higher-output generator and thermal system support sustained towing targets.",
        "Clearance and suspension travel serve real access roads rather than an image.",
      ]),
    ],
  },
  {
    slug: "constellation",
    name: "Dynamo Constellation",
    role: "Passenger van",
    profile: "High profile",
    thesis: "The Constellation passenger van is a worthy successor to the North American minivan—quiet, gracious, and genuinely useful.",
    hero: `${root}/cityvan.png`,
    photos: [
      { src: `${root}/cityvan.png`, caption: "Full glazing, champagne clearcoat, and richer trim distinguish the passenger model." },
      { src: `${root}/cityvan-interior-v2.png`, caption: "Two track-mounted captain’s chairs and one coherent three-place rear bench." },
      {
        src: `${root}/constellation-liftgate.png`,
        caption: "The liftgate reveals a hidden Clark badge—and a useful but finite cargo well behind the occupied third row.",
      },
      ...montage(`${root}/constellation-portfolio.png`, [
        "Constellation can arrive with the presence of a much more expensive vehicle.",
        "The power liftgate and full glazing separate it clearly from CityVan.",
        "The shared architecture accommodates ordinary family travel without apology.",
        "Passenger trim also supports a refined executive-shuttle configuration.",
      ]).filter((photo) => photo.crop !== "top-right"),
    ],
  },
  {
    slug: "cityvan",
    name: "Dynamo CityVan",
    role: "Commercial panel van",
    profile: "High profile",
    thesis: "The CityVan commercial van is a worthy successor to the compact commercial van—configured for delivery, trades, and mobile enterprise.",
    hero: `${root}/cityvan-commercial.png`,
    photos: [
      { src: `${root}/cityvan-commercial.png`, caption: "Panel quarters and durable trim define the commercial configuration." },
      { src: `${root}/cityvan-french-doors.png`, caption: "Side-by-side French doors create a square, low commercial load opening." },
      { src: `${root}/cityvan-delivery.png`, caption: "A realistic sliding aperture and modular shelving support last-mile delivery." },
      {
        src: `${root}/cityvan-inclusive-trade.png`,
        caption: "The commercial brief begins with the dignity, competence, and everyday needs of the people doing the work.",
      },
      { src: `${root}/cityvan-market.png`, caption: "Power, refrigeration, and washable modules enable small-business logistics." },
    ],
  },
  {
    slug: "foreman",
    name: "Dynamo Foreman",
    role: "Medium-profile pickup",
    profile: "Medium profile",
    thesis: "The Foreman pickup offers a useful bed, attainable load height, and jobsite ability without high-profile excess.",
    hero: `${root}/foreman-v2.png`,
    photos: [
      {
        src: `${root}/foreman-v2.png`,
        caption: "Foreman keeps a road-friendly stance and the same modular bed-rail hard points used by Ranch.",
      },
      ...montage(`${root}/foreman-portfolio.png`, [
        "The medium-profile truck looks at home outside a workshop, not only on a trail.",
        "A lower load floor makes tools and materials easier to handle all day.",
        "Electric torque and a stable chassis suit ordinary utility-trailer work.",
        "The useful pickup is also a credible everyday vehicle.",
      ]),
    ],
  },
  {
    slug: "ranch",
    name: "Dynamo Ranch",
    role: "High-profile pickup",
    profile: "High profile",
    thesis: "The Ranch pickup adds a longer crew cab and bed, Highroad SUV hood dome, greater clearance, and added thermal capacity.",
    hero: `${root}/ranch-v2.png`,
    photos: [
      {
        src: `${root}/ranch-v2.png`,
        caption:
          "Ranch is visibly longer, taller, and wider than Foreman, with shared bed-rail hard points and a distinctive two-tone finish.",
      },
      ...montage(`${root}/ranch-portfolio.png`, [
        "The high-profile pickup carries its size with calm, deliberate surfaces.",
        "Bed height, payload, tie-downs, and access remain production considerations.",
        "Greater thermal capacity and track width support higher towing targets.",
        "Longer travel and 225 mm target clearance protect work on maintained rural tracks.",
      ]),
    ],
  },
]

export const dynamoModelBySlug = Object.fromEntries(dynamoModels.map((model) => [model.slug, model]))
