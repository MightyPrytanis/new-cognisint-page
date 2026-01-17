/*
 * Copyright 2025 Cognisint LLC
 * Licensed under the Apache License, Version 2.0
 * See LICENSE.md for full license text
 */

import type React from "react"

interface AIIconProps {
  className?: string
  size?: number
  style?: React.CSSProperties
  /**
   * Color for the outer rectangle and circle (defaults to currentColor)
   * The center dot will be light blue (#60A5FA)
   */
  color?: string
}

/**
 * HAL-inspired AI Icon
 * A rectangle taller than wide, with a circular "eye" and a light blue dot in the center
 * Based on HAL 9000's red eye from 2001: A Space Odyssey, reimagined with a calming light blue
 *
 * The center dot is light blue (#60A5FA) to represent ethical, approachable AI
 */
export function AIIcon({ className = "", size = 24, style, color }: AIIconProps) {
  const outerColor = color || "currentColor"

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      {...{ "data-transparent": "true" }}
    >
      {/* HAL-inspired icon: rectangle taller than wide, with circle and light blue dot centered */}
      <rect x="7" y="3" width="10" height="18" rx="2.5" fill="none" stroke={outerColor} strokeWidth="2" />
      <circle cx="12" cy="12" r="4" fill="none" stroke={outerColor} strokeWidth="2" />
      <circle cx="12" cy="12" r="1.6" fill="#60A5FA" />
    </svg>
  )
}
