"use client"

import { Button } from "@/components/ui/button"
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

export default function InquiryForm({ compact = false, className = "" }: { compact?: boolean; className?: string }) {
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
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  return (
    <form onSubmit={handleSubmit} className={`${compact ? "space-y-5" : "space-y-6"} ${className}`.trim()}>
      <Field label="Name" required>
        <input
          type="text"
          id="name"
          name="name"
          required
          autoComplete="name"
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
          autoComplete="email"
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
          autoComplete="organization"
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
          rows={compact ? 5 : 7}
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
