"use client"

import { useState } from "react"
import { Mail, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import ShareButton from "@/components/share-button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/cognisint-logo-horizontal.png"
              alt="Cognisint"
              width={288}
              height={60}
              className="h-auto w-44 object-contain sm:w-56"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            <a href="/#what-is-cognisint" className="text-sm text-foreground hover:text-[#0288D1] transition rounded-sm">
              About
            </a>
            <Link href="/about" className="text-sm text-foreground hover:text-[#0288D1] transition rounded-sm">
              Bio
            </Link>
            <a href="/#portfolio" className="text-sm text-foreground hover:text-[#0288D1] transition rounded-sm">
              Portfolio
            </a>
            <a href="/#services" className="text-sm text-foreground hover:text-[#0288D1] transition rounded-sm">
              Situations
            </a>
            <Link href="/payment" className="text-sm text-foreground hover:text-[#0288D1] transition rounded-sm">
              Account
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <ShareButton showLabel={false} className="size-10 p-0" />
            <Button
              asChild
              className="rounded-sm bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href="mailto:info&#64;cognisint&#46;com">
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </a>
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-sm p-2 text-foreground lg:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="lg:hidden pb-4 space-y-3">
            <a href="/#what-is-cognisint" className="block text-foreground hover:text-[#0288D1] transition rounded-sm">
              About
            </a>
            <Link href="/about" className="block text-foreground hover:text-[#0288D1] transition rounded-sm">
              Bio
            </Link>
            <a href="/#portfolio" className="block text-foreground hover:text-[#0288D1] transition rounded-sm">
              Portfolio
            </a>
            <a href="/#services" className="block text-foreground hover:text-[#0288D1] transition rounded-sm">
              Situations
            </a>
            <Link href="/payment" className="block text-foreground hover:text-[#0288D1] transition rounded-sm">
              Account
            </Link>
            <ShareButton className="w-full justify-center" />
            <Button
              asChild
              className="w-full rounded-sm bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href="mailto:info&#64;cognisint&#46;com">Contact</a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
