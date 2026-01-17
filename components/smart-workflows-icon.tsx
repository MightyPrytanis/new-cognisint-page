"use client"

export function SmartWorkflowsIcon({ size = 32, color = "currentColor" }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Central brain-like node cluster */}
      <circle cx="100" cy="70" r="18" fill={color} opacity="0.8" />
      <circle cx="85" cy="60" r="12" fill={color} opacity="0.6" />
      <circle cx="115" cy="60" r="12" fill={color} opacity="0.6" />
      <circle cx="80" cy="85" r="11" fill={color} opacity="0.5" />
      <circle cx="120" cy="85" r="11" fill={color} opacity="0.5" />

      {/* Connecting lines - sparkly flows */}
      <line x1="100" y1="88" x2="100" y2="120" stroke={color} strokeWidth="2.5" opacity="0.7" />
      <line x1="85" y1="72" x2="50" y2="95" stroke={color} strokeWidth="2" opacity="0.5" />
      <line x1="115" y1="72" x2="150" y2="95" stroke={color} strokeWidth="2" opacity="0.5" />

      {/* Bottom processing nodes */}
      <circle cx="60" cy="130" r="10" fill={color} opacity="0.6" />
      <circle cx="100" cy="140" r="11" fill={color} opacity="0.7" />
      <circle cx="140" cy="130" r="10" fill={color} opacity="0.6" />

      {/* Sparkle accents */}
      <circle cx="70" cy="50" r="3" fill={color} opacity="0.8" />
      <circle cx="130" cy="50" r="3" fill={color} opacity="0.8" />
      <circle cx="40" cy="120" r="2.5" fill={color} opacity="0.7" />
      <circle cx="160" cy="120" r="2.5" fill={color} opacity="0.7" />
      <circle cx="100" cy="160" r="3" fill={color} opacity="0.8" />

      {/* Flow lines between bottom nodes */}
      <line x1="70" y1="130" x2="90" y2="137" stroke={color} strokeWidth="1.5" opacity="0.4" />
      <line x1="110" y1="137" x2="130" y2="130" stroke={color} strokeWidth="1.5" opacity="0.4" />
    </svg>
  )
}
