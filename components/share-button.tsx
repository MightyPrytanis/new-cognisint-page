"use client"

import { useState } from "react"
import { Check, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type ShareButtonProps = {
  className?: string
  showLabel?: boolean
  title?: string
}

export default function ShareButton({ className, showLabel = true, title }: ShareButtonProps) {
  const [copied, setCopied] = useState(false)

  async function sharePage() {
    const shareTitle = title || document.title || "Cognisint"
    const url = window.location.href

    if (navigator.share) {
      try {
        await navigator.share({ title: shareTitle, url })
        return
      } catch {
        // A cancelled share should leave the page unchanged.
      }
    }

    if (navigator.clipboard) {
      await navigator.clipboard.writeText(url)
    } else {
      const textArea = document.createElement("textarea")
      textArea.value = url
      textArea.setAttribute("readonly", "")
      textArea.style.position = "fixed"
      textArea.style.opacity = "0"
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
    }

    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <Button
      type="button"
      variant="outline"
      className={cn("rounded-sm bg-transparent", className)}
      onClick={sharePage}
      aria-live="polite"
      aria-label={copied ? "Page link copied" : "Share this page"}
    >
      {copied ? (
        <Check className={cn("h-4 w-4", showLabel && "mr-2")} />
      ) : (
        <Share2 className={cn("h-4 w-4", showLabel && "mr-2")} />
      )}
      {showLabel ? (copied ? "Copied" : "Share") : null}
    </Button>
  )
}
