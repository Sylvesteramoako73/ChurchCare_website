/** Faithful SVG reproduction of the Faith ChurchCare logo mark */
export function LogoIcon({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={Math.round(size * 1.1)}
      viewBox="0 0 100 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Cross */}
      <line x1="50" y1="1" x2="50" y2="17" stroke="#1B2875" strokeWidth="6" strokeLinecap="round" />
      <line x1="41" y1="8.5" x2="59" y2="8.5" stroke="#1B2875" strokeWidth="6" strokeLinecap="round" />

      {/* Church building outline */}
      <path
        d="M50,17 L83,40 L83,82 L17,82 L17,40 Z"
        stroke="#1B2875"
        strokeWidth="5"
        strokeLinejoin="round"
      />

      {/* Left person — teal */}
      <circle cx="34" cy="50" r="9" fill="#2BA898" />
      <path d="M21,82 C21,64 47,64 47,82" fill="#2BA898" />

      {/* Centre person — navy (tallest) */}
      <circle cx="50" cy="44" r="11" fill="#1B2875" />
      <path d="M32,82 C32,61 68,61 68,82" fill="#1B2875" />

      {/* Right person — purple */}
      <circle cx="66" cy="50" r="9" fill="#7B4FBE" />
      <path d="M53,82 C53,64 79,64 79,82" fill="#7B4FBE" />

      {/* Left caring hand / leaf — teal */}
      <path
        d="M17,92 C4,83 6,67 17,61 C22,58 27,61 27,66 C27,72 23,77 24,82 C29,73 36,71 40,74 C35,80 32,87 34,93"
        fill="#2BA898"
      />

      {/* Right caring hand / leaf — teal */}
      <path
        d="M83,92 C96,83 94,67 83,61 C78,58 73,61 73,66 C73,72 77,77 76,82 C71,73 64,71 60,74 C65,80 68,87 66,93"
        fill="#2BA898"
      />
    </svg>
  );
}
