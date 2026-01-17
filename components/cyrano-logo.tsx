export function CyranoLogo({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Minimalist profile face - left profile with sharp geometric lines */}
      {/* Head outline - sharp profile */}
      <path
        d="M 16 20 L 20 16 L 32 14 L 40 16 L 44 20 L 44 40 L 40 48 L 28 50 L 16 48 L 14 40 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      {/* Eye - minimalist sharp */}
      <line x1="28" y1="24" x2="36" y2="24" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="32" cy="24" r="2" fill="currentColor" />

      {/* Nose - sharp line */}
      <line x1="32" y1="24" x2="32" y2="34" stroke="currentColor" strokeWidth="1.5" />

      {/* Mouth - minimalist arc */}
      <path d="M 20 36 Q 32 40 40 36" fill="none" stroke="currentColor" strokeWidth="1.5" />

      {/* Brain/thought indicator - abstract geometric circuit nodes */}
      <circle cx="42" cy="18" r="3" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="48" cy="22" r="2.5" fill="none" stroke="currentColor" strokeWidth="1" />
      <line x1="42" y1="21" x2="48" y2="22" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}
