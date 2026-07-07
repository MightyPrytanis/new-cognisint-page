"use client"

import { useState } from "react"
import { Check, Linkedin, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type ShareButtonProps = {
  className?: string
  linkedInClassName?: string
  showLabel?: boolean
  title?: string
  withLinkedIn?: boolean
}

export default function ShareButton({
  className,
  linkedInClassName,
  showLabel = true,
  title,
  withLinkedIn = false,
}: ShareButtonProps) {
  const [copied, setCopied] = useState(false)

  const getShareUrl = () => window.location.href

  async function sharePage() {
    const shareTitle = title || document.title || "Cognisint"
    const url = getShareUrl()

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

  function shareOnLinkedIn() {
    const url = encodeURIComponent(getShareUrl())
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank", "noopener,noreferrer")
  }

  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row", showLabel ? null : "inline-flex")}>
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
      {withLinkedIn ? (
        <Button
          type="button"
          variant="outline"
          className={cn("rounded-sm bg-transparent", linkedInClassName || className)}
          onClick={shareOnLinkedIn}
          aria-label="Share this article on LinkedIn"
        >
          <Linkedin className={cn("h-4 w-4", showLabel && "mr-2")} />
          {showLabel ? "LinkedIn" : null}
        </Button>
      )}
    </div>
  )
}
