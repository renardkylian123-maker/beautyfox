function base(children: React.ReactNode) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-10 w-10"
    >
      {children}
    </svg>
  );
}

export function LeafIcon() {
  return base(
    <>
      <path d="M24 40C10 34 8 18 14 8c14 2 24 12 22 26-8 2-16 2-22-2Z" />
      <path d="M14 8c4 10 8 20 20 26" />
    </>
  );
}

export function RippleIcon() {
  return base(
    <>
      <circle cx="24" cy="24" r="4" />
      <circle cx="24" cy="24" r="11" opacity="0.6" />
      <circle cx="24" cy="24" r="18" opacity="0.3" />
    </>
  );
}

export function HandsIcon() {
  return base(
    <>
      <path d="M10 26c0-9 5-16 5-16s2 1 2 5v10" />
      <path d="M17 25v-6c0-3 2-4 2-4s2 1 2 4v7" />
      <path d="M21 26v-4c0-3 2-4 2-4s2 1 2 4v6" />
      <path d="M25 28v-3c0-2.5 2-3.5 2-3.5s2 1 2 3.5c0 8-4 13-11 13-6 0-9-3-9-9v-5" />
    </>
  );
}
