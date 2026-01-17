"use client"

export function LexFiatWordmark({ width = 200 }) {
  const height = (width * 60) / 200 // Maintain aspect ratio similar to Arkiver

  return (
    <svg viewBox="0 0 200 60" width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Simplified bulb icon - inverted (navy) */}
      <g transform="translate(8, 8)">
        {/* Bulb outline */}
        <path
          d="M12 8C12 6.34 11.84 4.89 11.52 3.6C10.99 1.5 9.15 0 7 0C4.85 0 3.01 1.5 2.48 3.6C2.16 4.89 2 6.34 2 8C2 10.76 0.33 13 0 13V14H14V13C13.67 13 12 10.76 12 8Z"
          fill="#1e3a5f"
        />
        {/* Scales inside - simplified */}
        <g transform="translate(5, 2)">
          {/* Left scale */}
          <line x1="0" y1="3" x2="1" y2="5" stroke="#1e3a5f" strokeWidth="0.8" />
          {/* Right scale */}
          <line x1="2" y1="3" x2="1" y2="5" stroke="#1e3a5f" strokeWidth="0.8" />
        </g>
      </g>

      {/* LexFiat text - modern, impactful typeface */}
      <text
        x="32"
        y="42"
        fontFamily="'Inter', 'Segoe UI', sans-serif"
        fontSize="36"
        fontWeight="700"
        letterSpacing="-0.5"
        fill="#1e3a5f"
      >
        Lex
      </text>
      <text
        x="87"
        y="42"
        fontFamily="'Inter', 'Segoe UI', sans-serif"
        fontSize="36"
        fontWeight="400"
        letterSpacing="-0.5"
        fill="#1e3a5f"
        opacity="0.9"
      >
        Fiat
      </text>
    </svg>
  )
}
