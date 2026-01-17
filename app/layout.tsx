import type React from "react"
import type { Metadata } from "next"
import { Jost } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Cognisint LLC - Human-Scale Legal Technology",
  description: "Advancing innovative, human-scaled solutions to enterprise-size challenges",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${jost.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
