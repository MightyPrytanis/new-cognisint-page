"use client"

import type { ReactNode } from "react"
import { useCallback, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { Maximize2, X } from "lucide-react"

type ImageLightboxProps = {
  src: string
  alt: string
  caption?: string
  children?: ReactNode
  className?: string
  crop?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  trigger?: "image" | "icon"
}

const cropPosition = {
  "top-left": { left: "0", top: "0" },
  "top-right": { left: "-100%", top: "0" },
  "bottom-left": { left: "0", top: "-100%" },
  "bottom-right": { left: "-100%", top: "-100%" },
}

export function ImageLightbox({
  src,
  alt,
  caption,
  children,
  className = "",
  crop,
  trigger = "image",
}: ImageLightboxProps) {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  const close = useCallback(() => {
    setOpen(false)
    requestAnimationFrame(() => triggerRef.current?.focus())
  }, [])

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [close, open])

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Open ${alt} in a larger view`}
        className={
          trigger === "icon"
            ? `inline-flex h-11 w-11 cursor-zoom-in items-center justify-center rounded-full bg-black/75 text-white shadow-lg backdrop-blur transition hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${className}`
            : `group/lightbox relative block w-full cursor-zoom-in text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#72b49a] ${className}`
        }
      >
        {trigger === "icon" ? (
          <Maximize2 className="h-5 w-5" />
        ) : (
          <>
            {children}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-3 top-3 z-20 inline-flex items-center gap-2 bg-black/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white opacity-0 backdrop-blur transition group-hover/lightbox:opacity-100 group-focus-visible/lightbox:opacity-100"
            >
              <Maximize2 className="h-4 w-4" />
              Expand
            </span>
          </>
        )}
      </button>

      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Large view of ${alt}`}
            className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-6"
          >
            <button
              type="button"
              aria-label="Close large image by clicking the backdrop"
              onClick={close}
              className="absolute inset-0 cursor-zoom-out bg-black/92 backdrop-blur-sm"
            />
            <figure className="relative z-10 flex max-h-[96svh] max-w-[98vw] flex-col items-center gap-3">
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Close large image"
                className="absolute right-2 top-2 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/75 text-white shadow-lg backdrop-blur transition hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:-right-3 sm:-top-3"
              >
                <X className="h-5 w-5" />
              </button>
              {crop ? (
                <div
                  className="relative aspect-square overflow-hidden shadow-2xl"
                  style={{ width: "min(627px, calc(100vw - 1rem), calc(100svh - 7rem))" }}
                >
                  {/* Render the selected quadrant alone while retaining the montage's source pixels. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={alt}
                    className="absolute h-[200%] w-[200%] max-w-none"
                    style={cropPosition[crop]}
                  />
                </div>
              ) : (
                <>
                  {/* The native image element preserves each asset's intrinsic display size instead of forcing every image into one modal frame. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={alt}
                    className="h-auto max-h-[calc(100svh-5rem)] w-auto max-w-[calc(100vw-1rem)] object-contain shadow-2xl sm:max-h-[calc(100svh-7rem)] sm:max-w-[calc(100vw-3rem)]"
                  />
                </>
              )}
              {caption && (
                <figcaption className="max-w-4xl px-3 text-center text-sm leading-6 text-slate-200">
                  {caption}
                </figcaption>
              )}
            </figure>
          </div>,
          document.body,
        )}
    </>
  )
}
