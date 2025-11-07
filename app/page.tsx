import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <div className="card">
        <header>
          <h1>Classic Game Boy</h1>
          <p>An SVG tribute to the portable legend of 1989.</p>
        </header>

        <div className="svg-wrapper">
          <svg
            viewBox="0 0 320 520"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="title desc"
          >
            <title id="title">Classic Nintendo Game Boy Illustration</title>
            <desc id="desc">
              Stylized depiction of the original Game Boy handheld console.
            </desc>

            {/* Body shadow */}
            <defs>
              <linearGradient id="bodyGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f6f7f8" />
                <stop offset="35%" stopColor="#e6e7eb" />
                <stop offset="100%" stopColor="#c1c4cf" />
              </linearGradient>
              <linearGradient id="screenGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#c2e182" />
                <stop offset="45%" stopColor="#9cbc5b" />
                <stop offset="100%" stopColor="#7f9f3d" />
              </linearGradient>
              <linearGradient id="screenBevel" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3f4256" />
                <stop offset="100%" stopColor="#242736" />
              </linearGradient>
              <linearGradient id="highlight" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
              <radialGradient id="buttonGradient" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#870025" />
                <stop offset="50%" stopColor="#69001d" />
                <stop offset="100%" stopColor="#35000e" />
              </radialGradient>
              <linearGradient id="speakerSlot" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#2d2f41" />
                <stop offset="100%" stopColor="#08090f" />
              </linearGradient>
              <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow
                  dx="0"
                  dy="18"
                  stdDeviation="18"
                  floodColor="rgba(0,0,0,0.35)"
                />
              </filter>
            </defs>

            {/* Outer body */}
            <g filter="url(#softShadow)">
              <path
                d="M36 28h248a20 20 0 0 1 20 20v408a24 24 0 0 1-24 24H48a24 24 0 0 1-24-24V48a20 20 0 0 1 20-20Z"
                fill="url(#bodyGradient)"
                stroke="#9aa0b6"
                strokeWidth="4"
              />
              {/* Inner inset */}
              <rect
                x="56"
                y="48"
                width="208"
                height="424"
                rx="18"
                ry="18"
                fill="rgba(255,255,255,0.3)"
                stroke="rgba(255,255,255,0.35)"
                strokeWidth="2"
              />
            </g>

            {/* Power LED */}
            <circle cx="80" cy="96" r="7" fill="#f44336" />
            <circle cx="80" cy="96" r="9" fill="rgba(244,67,54,0.18)" />
            <circle cx="80" cy="96" r="12" fill="rgba(244,67,54,0.08)" />

            {/* Screen Bezel */}
            <path
              d="M76 92h168a14 14 0 0 1 14 14v142a14 14 0 0 1-14 14H76a14 14 0 0 1-14-14V106a14 14 0 0 1 14-14Z"
              fill="url(#screenBevel)"
            />
            <rect
              x="88"
              y="118"
              width="144"
              height="112"
              rx="8"
              ry="8"
              fill="url(#screenGradient)"
            />
            <path
              d="M96 124h40l18 20H96z"
              fill="rgba(255,255,255,0.08)"
            />
            <rect
              x="148"
              y="94"
              width="24"
              height="4"
              rx="2"
              fill="#c20064"
            />

            {/* Nintendo branding */}
            <text
              x="88"
              y="266"
              fontFamily="'Press Start 2P', 'Courier New', monospace"
              fontSize="12"
              fill="#24344a"
              letterSpacing="0.2em"
            >
              GAME BOY
            </text>

            {/* D-Pad */}
            <g transform="translate(98 320)">
              <rect
                x="24"
                y="0"
                width="40"
                height="96"
                rx="8"
                ry="8"
                fill="#212331"
              />
              <rect
                x="0"
                y="32"
                width="88"
                height="32"
                rx="8"
                ry="8"
                fill="#212331"
              />
              <circle cx="44" cy="48" r="10" fill="#000517" />
              <circle cx="44" cy="48" r="4" fill="#42475a" />
              <rect
                x="40"
                y="9"
                width="8"
                height="20"
                rx="4"
                fill="#10121f"
              />
              <rect
                x="40"
                y="66"
                width="8"
                height="20"
                rx="4"
                fill="#10121f"
              />
              <rect
                x="9"
                y="40"
                width="20"
                height="8"
                rx="4"
                fill="#10121f"
              />
              <rect
                x="66"
                y="40"
                width="20"
                height="8"
                rx="4"
                fill="#10121f"
              />
            </g>

            {/* A and B buttons */}
            <g transform="translate(210 328) rotate(-12)">
              <circle cx="0" cy="0" r="26" fill="url(#buttonGradient)" />
              <circle
                cx="0"
                cy="0"
                r="26"
                fill="url(#highlight)"
                opacity="0.22"
              />
              <circle cx="0" cy="0" r="8" fill="rgba(255,255,255,0.15)" />
            </g>
            <g transform="translate(252 372) rotate(-12)">
              <circle cx="0" cy="0" r="26" fill="url(#buttonGradient)" />
              <circle
                cx="0"
                cy="0"
                r="26"
                fill="url(#highlight)"
                opacity="0.22"
              />
              <circle cx="0" cy="0" r="8" fill="rgba(255,255,255,0.15)" />
            </g>

            {/* Select & Start buttons */}
            <g transform="translate(176 384)">
              <rect
                x="0"
                y="0"
                width="54"
                height="12"
                rx="6"
                ry="6"
                fill="#4e4f6b"
              />
              <rect
                x="0"
                y="20"
                width="54"
                height="12"
                rx="6"
                ry="6"
                fill="#4e4f6b"
              />
            </g>

            {/* Speaker */}
            <g transform="translate(92 424) rotate(12)">
              <rect
                x="0"
                y="0"
                width="116"
                height="24"
                rx="12"
                ry="12"
                fill="#d7d8de"
                stroke="#aab0c0"
                strokeWidth="2"
              />
              {[...Array(6)].map((_, index) => (
                <rect
                  key={index}
                  x={16 + index * 16}
                  y="5"
                  width="8"
                  height="14"
                  rx="4"
                  fill="url(#speakerSlot)"
                />
              ))}
            </g>

            {/* Shadow highlight */}
            <path
              d="M44 54c12-20 44-26 84-26h64c44 0 76 8 92 24"
              stroke="rgba(255,255,255,0.55)"
              strokeWidth="6"
              strokeLinecap="round"
              opacity="0.2"
            />
          </svg>
        </div>

        <p className="signature">
          Crafted with <span>SVG</span> geometry and gradient magic.
        </p>
      </div>
    </main>
  );
}

