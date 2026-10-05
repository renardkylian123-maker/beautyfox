export function BlobDecor({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 600"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M437.5 83.6c54.8 38.9 90.1 103.9 97.7 171.4 7.6 67.6-12.6 137.8-54.8 189.6-42.2 51.8-106.5 85.2-173.9 90.9-67.4 5.7-137.9-16.4-181.6-61.9C81.2 428 62 365.6 59.6 302.1c-2.4-63.5 12-128 51.2-174.6C150 80.8 213.9 55.7 278.1 53.6c64.2-2.1 125.5 25.1 159.4 30Z"
      />
    </svg>
  );
}

export function WaveDecor({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 200"
      className={className}
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="none"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        d="M0 100 C 120 40, 220 160, 340 100 S 560 40, 680 100 S 800 100, 800 100"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        d="M0 140 C 120 80, 220 200, 340 140 S 560 80, 680 140 S 800 140, 800 140"
      />
    </svg>
  );
}
