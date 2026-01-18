/*
 * Copyright 2025 Cognisint LLC
 * Licensed under the Apache License, Version 2.0
 * See LICENSE.md for full license text
 */

import type React from "react"

interface PrivacyIconProps {
  className?: string
  size?: number
  style?: React.CSSProperties
  color?: string
}

/**
 * Privacy-First Icon
 * A shield with a lock symbol to represent security and privacy
 */
export function PrivacyIcon({ className = "", size = 24, style, color }: PrivacyIconProps) {
  const iconColor = color || "currentColor"

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
      {/* Shield outline */}
      <path
        d="M12 2L4 6v6c0 5.5 3.84 10.74 8 12 4.16-1.26 8-6.5 8-12V6l-8-4z"
        fill="none"
        stroke={iconColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Lock body */}
      <rect x="9" y="11" width="6" height="5" rx="1" fill="none" stroke={iconColor} strokeWidth="1.5" />
      {/* Lock shackle */}
      <path
        d="M10 11V9a2 2 0 0 1 4 0v2"
        fill="none"
        stroke={iconColor}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
