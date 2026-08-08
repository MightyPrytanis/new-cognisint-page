import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { cabinMaterials, exteriorPaints, type DynamoPaletteEntry } from "../palette"

export const metadata: Metadata = {
  title: "Colors and Materials | Project Dynamo | Cognisint",
  description:
    "The exterior paint and cabin material palette developed for the independent Project Dynamo future-vehicle study.",
}

function Swatch({ entry, material = false }: { entry: DynamoPaletteEntry; material?: boolean }) {
  const metallic = !material && entry.finish === "clearcoat-metallic"

  return (
    <article>
      <div
        aria-label={`${entry.name} ${material ? "material" : "paint"} sample`}
        role="img"
        className={`relative overflow-hidden border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.24)] ${
          material ? "aspect-[5/3]" : "aspect-[12/5]"
        }`}
        style={{ background: entry.background }}
      >
        {!material && (
          <span
            aria-hidden="true"
            className="absolute inset-0"
            style={
              metallic
                ? {
                    backgroundImage:
                      "radial-gradient(circle, rgba(255,255,255,.72) 0 .65px, transparent .9px), radial-gradient(circle, rgba(215,228,235,.48) 0 .55px, transparent .85px)",
                    backgroundPosition: "0 0, 5px 7px",
                    backgroundSize: "11px 13px, 17px 19px",
                    mixBlendMode: "screen",
                    opacity: 0.34,
                  }
                : {
                    background:
                      "linear-gradient(112deg, transparent 8%, rgba(255,255,255,.2) 34%, rgba(255,255,255,.06) 48%, transparent 68%)",
                  }
            }
          />
        )}
      </div>
      <h3 className="mt-4 text-xl font-semibold text-white">{entry.name}</h3>
      <p className="mt-2 max-w-md leading-7 text-slate-400">{entry.description}</p>
    </article>
  )
}

export default function DynamoColorsMaterialsPage() {
  return (
    <main className="min-h-screen bg-[#050d17] text-white">
      <section className="border-b border-white/15 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/portfolio/project-dynamo"
            className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Project Dynamo
          </Link>
          <h1 className="mt-10 max-w-5xl text-balance text-5xl font-semibold leading-none sm:text-7xl">
            Colors and materials
          </h1>
          <p className="mt-6 text-2xl text-slate-300">Abundant character, thoughtfully contained.</p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Naming a finish is part description, part allusion, and part character. These colors and materials give
            the Dynamo family a shared vocabulary while leaving room for each vehicle to have a distinct life.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold sm:text-4xl">Exterior paint palette</h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-400">
            Concept colors shown digitally; light, surface geometry, and production materials change how every
            finish appears in the world.
          </p>
          <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {exteriorPaints.map((entry) => (
              <Swatch key={entry.name} entry={entry} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/15 bg-[#071522] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold sm:text-4xl">Cabin colors and materials</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            Durable, tactile materials chosen for real use, long service, and interiors that remain warm without
            becoming precious.
          </p>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            The interior studies suggest a flexible mix of vegan leather alternatives, real leather, durable
            textiles, and combinations of them, matched to each vehicle and its use.
          </p>
          <div className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {cabinMaterials.map((entry) => (
              <Swatch key={entry.name} entry={entry} material />
            ))}
          </div>
          <div className="mt-16 border-t border-white/15 pt-10">
            <Link
              href="/portfolio/project-dynamo"
              className="inline-flex items-center gap-2 text-lg font-semibold text-[#72b49a] transition hover:text-white"
            >
              <ArrowLeft className="h-5 w-5" />
              Return to Project Dynamo
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
