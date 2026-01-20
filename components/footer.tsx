import { MailIcon, Linkedin } from "lucide-react"
import Image from "next/image"

function BlueskyIcon({ size = 24, ...props }: { size?: number; [key: string]: any }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="currentColor"
      {...props}
    >
      <path d="M110.985 30.442c58.695 44.217 121.837 133.856 145.013 181.961 23.176-48.105 86.322-137.744 145.016-181.961 42.361-31.897 110.985-56.584 110.985 21.96 0 15.681-8.962 131.776-14.223 150.628-18.272 65.516-84.873 82.228-144.112 72.116 103.55 17.68 129.889 76.238 73 134.8-108.04 111.223-155.288-27.905-167.385-63.554-3.489-10.262-2.991-10.498-6.561 0-12.098 35.649-59.342 174.777-167.382 63.554-56.89-58.562-30.551-117.12 72.999-134.8-59.239 10.112-125.84-6.6-144.112-72.116C8.962 184.178 0 68.083 0 52.402c0-78.544 68.633-53.857 110.985-21.96z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border border-t-slate-900">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-40 h-40">
                <Image
                  src="/cognisint-logo.png"
                  alt="Cognisint LLC"
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Cognisint advances and humanizes the practice of law and advocacy with strategic consulting and innovative
              technology.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#lexfiat" className="text-muted-foreground hover:text-[#0288D1] transition">
                  LexFiat
                </a>
              </li>
              <li>
                <a href="#arkiver" className="text-muted-foreground hover:text-[#0288D1] transition">
                  Arkiver
                </a>
              </li>
              <li>
                <a href="#cyrano" className="text-muted-foreground hover:text-[#0288D1] transition">
                  Cyrano MCP
                </a>
              </li>
              <li>
                <a href="/beta" className="text-muted-foreground hover:text-[#0288D1] transition">
                  Beta Testers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-[#0288D1] transition">
                  About
                </a>
              </li>
              <li>
                <a href="#engagement" className="text-muted-foreground hover:text-[#0288D1] transition">
                  Consulting
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello&#64;cognisint&#46;com"
                  className="text-muted-foreground hover:text-[#0288D1] transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect and Legal Links Combined */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://bsky.app/profile/cognisint.com"
                className="text-muted-foreground hover:text-[#0288D1] transition hover:shadow-[0_0_15px_rgba(2,136,209,0.4)] rounded-full p-1"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Bluesky"
              >
                <BlueskyIcon size={20} />
              </a>
              <a
                href="https://linkedin.com/company/cognisint"
                className="text-muted-foreground hover:text-[#0288D1] transition hover:shadow-[0_0_15px_rgba(2,136,209,0.4)] rounded-full p-1"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:hello&#64;cognisint&#46;com"
                className="text-muted-foreground hover:text-[#0288D1] transition hover:shadow-[0_0_15px_rgba(2,136,209,0.4)] rounded-full p-1"
              >
                <MailIcon size={20} />
              </a>
            </div>
            
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/privacy" className="text-muted-foreground hover:text-[#0288D1] transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-muted-foreground hover:text-[#0288D1] transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border border-t-slate-900 py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Cognisint LLC. Built with care, intention, and experience in Lansing, Michigan.
          </p>
        </div>
      </div>
    </footer>
  )
}
