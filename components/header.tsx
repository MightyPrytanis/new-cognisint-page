"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/cognisint-logo-horizontal.png"
              alt="Cognisint LLC"
              width={288}
              height={60}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-foreground hover:text-[#0288D1] transition rounded-sm">
              Solutions
            </a>
            <a href="#about" className="text-foreground hover:text-[#0288D1] transition rounded-sm">
              About
            </a>
            <a href="#engagement" className="text-foreground hover:text-[#0288D1] transition rounded-sm">
              Consulting
            </a>
            <Link href="/manifesto" className="text-foreground hover:text-[#0288D1] transition rounded-sm">
              Manifesto
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground hover:text-[#0288D1] hover:shadow-[0_0_30px_rgba(2,136,209,0.5)] transition-all duration-300"
            >
              <a href="mailto:appointments&#64;cognisint&#46;com">Schedule Consultation</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            <a href="#products" className="block text-foreground hover:text-[#0288D1] transition rounded-sm">
              Solutions
            </a>
            <a href="#about" className="block text-foreground hover:text-[#0288D1] transition rounded-sm">
              About
            </a>
            <a href="#engagement" className="block text-foreground hover:text-[#0288D1] transition rounded-sm">
              Consulting
            </a>
            <Link href="/manifesto" className="block text-foreground hover:text-[#0288D1] transition rounded-sm">
              Manifesto
            </Link>
            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover:text-[#0288D1] hover:shadow-[0_0_30px_rgba(2,136,209,0.5)] transition-all duration-300"
            >
              <a href="mailto:appointments&#64;cognisint&#46;com">Schedule Consultation</a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
