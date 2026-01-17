export default function CyranoWordmark() {
  return (
    <svg viewBox="0 0 240 48" width={240} height={48} xmlns="http://www.w3.org/2000/svg" className="w-auto h-full">
      {/* Layered Face - Left side */}
      <g>
        {/* Outer layer - subtle outline */}
        <circle cx="12" cy="24" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />

        {/* Middle layer - face profile */}
        <path
          d="M 18 16 Q 22 16 22 24 Q 22 32 18 32 Q 14 32 14 24 Q 14 16 18 16 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Inner layer - eye */}
        <circle cx="16" cy="21" r="1.5" fill="currentColor" />

        {/* Minimal mouth suggestion */}
        <path d="M 15 28 Q 18 29 21 28" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />

        {/* Circuit nodes suggesting AI/interconnection */}
        <circle cx="10" cy="20" r="1" fill="currentColor" opacity="0.6" />
        <circle cx="9" cy="26" r="1" fill="currentColor" opacity="0.6" />
        <line x1="11" y1="20" x2="14" y2="22" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
        <line x1="10" y1="26" x2="14" y2="26" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      </g>

      {/* "Cyrano" Text - Right side */}
      <text
        x="32"
        y="32"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="24"
        fontWeight="700"
        fill="currentColor"
        letterSpacing="-0.5"
      >
        Cyrano
      </text>
    </svg>
  )
}
