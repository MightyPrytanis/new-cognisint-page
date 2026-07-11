import { MailIcon, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const links = [
  { label: "About", href: "/#what-is-cognisint" },
  { label: "Bio", href: "/about" },
  { label: "Framework", href: "/framework" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Contact", href: "/contact" },
  { label: "Account", href: "/payment" },
  { label: "Terms & Privacy", href: "/terms" },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--ink)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.25fr_0.75fr_0.95fr]">
          <div>
            <Image
              src="/cognisint-logo-horizontal.png"
              alt="Cognisint"
              width={360}
              height={102}
              className="h-auto w-52 brightness-0 invert"
            />
            <p className="mt-6 max-w-md text-sm leading-6 text-slate-300">
              Trust, Integrity, and Strategy for the AI Age.
            </p>
            <p className="mt-4 text-sm font-semibold text-white">Real Intelligence. Real Judgment. Real Results.</p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Links</h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm lg:grid-cols-1">
              {links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-300 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Contact</h2>
            <div className="mt-5 space-y-2 text-sm leading-6 text-slate-300">
              <p className="font-semibold text-white">Cognisint LLC</p>
              <p>Lansing, MI 48910</p>
              <a href="tel:+15173914815" className="flex items-center gap-2 transition hover:text-white">
                <Phone className="h-4 w-4" />
                +1 (517) 391-4815
              </a>
              <a href="mailto:info&#64;cognisint&#46;com" className="flex items-center gap-2 transition hover:text-white">
                <MailIcon className="h-4 w-4" />
                info@cognisint.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-400">
          <p>© 2026 Cognisint LLC</p>
          <p className="mt-4 max-w-4xl leading-6">
            Original Cognisint writing is copyright Cognisint LLC and David Towne. It may be shared with attribution,
            but it may not be presented as someone else&apos;s work or as Cognisint&apos;s endorsement.
          </p>
          <p className="mt-4 max-w-4xl leading-6">
            David Towne is an attorney licensed and in good standing with the State Bar of Michigan. Cognisint is not a
            law firm, does not provide legal services through this website, and site materials are not legal advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
