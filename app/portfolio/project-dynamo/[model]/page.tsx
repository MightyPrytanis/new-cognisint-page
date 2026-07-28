import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { dynamoModelBySlug, dynamoModels } from "../models"

const cropPosition = {
  "top-left": "0% 0%",
  "top-right": "100% 0%",
  "bottom-left": "0% 100%",
  "bottom-right": "100% 100%",
}

export function generateStaticParams() {
  return dynamoModels.map((model) => ({ model: model.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ model: string }>
}): Promise<Metadata> {
  const { model: slug } = await params
  const model = dynamoModelBySlug[slug]
  if (!model) return {}
  return {
    title: `${model.name} | Project Dynamo | Cognisint`,
    description: `${model.role} portfolio from the independent Project Dynamo future-vehicle study.`,
  }
}

export default async function DynamoModelPage({ params }: { params: Promise<{ model: string }> }) {
  const { model: slug } = await params
  const model = dynamoModelBySlug[slug]
  if (!model) notFound()

  return (
    <main className="min-h-screen bg-[#050d17] text-white">
      <section className="relative min-h-[76svh] overflow-hidden">
        <Image src={model.hero} alt={model.name} fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050d17] via-black/15 to-black/20" />
        <div className="relative mx-auto flex min-h-[76svh] max-w-7xl flex-col justify-between px-4 py-8 sm:px-6 lg:px-8">
          <Link
            href="/portfolio/project-dynamo"
            className="inline-flex w-fit items-center gap-2 border border-white/20 bg-black/25 px-4 py-2 text-sm backdrop-blur transition hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Project Dynamo
          </Link>
          <div className="max-w-3xl pb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#72b49a]">
              {model.profile} · {model.role}
            </p>
            <h1 className="mt-4 text-balance text-5xl font-semibold leading-none sm:text-7xl">{model.name}</h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-100">{model.thesis}</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {model.photos.map((photo, index) => (
              <figure
                key={`${photo.src}-${photo.crop ?? "full"}-${index}`}
                className={index === 0 ? "md:col-span-2" : ""}
              >
                {photo.crop ? (
                  <div
                    role="img"
                    aria-label={photo.caption}
                    className="aspect-square bg-cover bg-no-repeat"
                    style={{
                      backgroundImage: `url(${photo.src})`,
                      backgroundPosition: cropPosition[photo.crop],
                      backgroundSize: "200% 200%",
                    }}
                  />
                ) : (
                  <div className={`relative overflow-hidden ${index === 0 ? "aspect-[16/8]" : "aspect-[16/9]"}`}>
                    <Image src={photo.src} alt={photo.caption} fill sizes={index === 0 ? "100vw" : "50vw"} className="object-cover" />
                  </div>
                )}
                <figcaption className="border-x border-b border-white/10 bg-white/[0.03] p-5 leading-7 text-slate-300">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0a1725] py-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <p className="text-slate-300">Nine models. Shared fundamentals. Distinct lives.</p>
          <Link href="/portfolio/project-dynamo#family" className="font-semibold text-[#72b49a] hover:text-white">
            Return to the complete family
          </Link>
        </div>
      </section>
    </main>
  )
}
