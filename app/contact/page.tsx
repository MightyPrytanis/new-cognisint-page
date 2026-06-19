"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, Phone } from "lucide-react"
import Link from "next/link"
import type React from "react"
import { type ChangeEvent, type FormEvent, useState } from "react"

const reasons = [
  "Leadership/Employment Opportunity",
  "Advisory or consulting work",
  "Custom app or workflow solution",
  "Speaking or workshop",
  "Writing or publication inquiry",
  "Civic or institutional project",
  "General inquiry",
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    reason: reasons[0],
    message: "",
  })

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    const subject = encodeURIComponent(`${formData.reason} - Cognisint inquiry from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Organization: ${formData.organization}\n` +
        `Reason for Contact: ${formData.reason}\n\n` +
        `Message:\n${formData.message}`
    )

    window.location.href = `mailto:info@cognisint.com?subject=${subject}&body=${body}`
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <main className="min-h-screen bg-background py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Button asChild variant="outline" className="mb-8 rounded-sm bg-transparent">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.72fr]">
          <section className="package-card p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">Contact</p>
            <h1 className="mt-4 text-4xl font-semibold text-foreground">Start a Conversation</h1>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Reach out about leadership opportunities, advisory work, consulting engagements, custom app solutions,
              institutional strategy, technology governance, public-sector modernization, civic proposals, speaking,
              workshops, or related conversations.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <Field label="Name" required>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="form-field"
                />
              </Field>

              <Field label="Email" required>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="form-field"
                />
              </Field>

              <Field label="Organization">
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="form-field"
                />
              </Field>

              <Field label="Reason for Contact" htmlFor="reason">
                <select id="reason" name="reason" value={formData.reason} onChange={handleChange} className="form-field">
                  {reasons.map((reason) => (
                    <option key={reason} value={reason}>
                      {reason}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Message" required>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={7}
                  value={formData.message}
                  onChange={handleChange}
                  className="form-field resize-vertical"
                  placeholder="Share enough context to make the first conversation useful."
                />
              </Field>

              <Button type="submit" size="lg" className="w-full rounded-sm bg-primary text-primary-foreground hover:bg-primary/90">
                Send Inquiry
              </Button>
            </form>
          </section>

          <aside className="package-card h-fit p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">Direct Details</p>
            <div className="mt-6 space-y-3 text-base leading-7 text-muted-foreground">
              <p className="text-xl font-semibold text-foreground">Cognisint LLC</p>
              <p>David Towne, Founder and Principal</p>
              <p>Lansing, MI 48910</p>
              <a href="tel:+15173914815" className="flex items-center gap-2 text-foreground hover:text-[var(--blue)]">
                <Phone className="h-4 w-4" />
                +1 (517) 391-4815
              </a>
              <a href="mailto:info@cognisint.com" className="flex items-center gap-2 text-foreground hover:text-[var(--blue)]">
                <Mail className="h-4 w-4" />
                info@cognisint.com
              </a>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string
  htmlFor?: string
  required?: boolean
  children: React.ReactNode
}) {
  const id = htmlFor ?? label.toLowerCase().replaceAll(" ", "-")

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-foreground">
        {label}
        {required ? " *" : ""}
      </label>
      {children}
    </div>
  )
}
