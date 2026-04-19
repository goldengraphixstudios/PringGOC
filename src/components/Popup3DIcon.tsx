"use client";

type IconKind =
  | "house"
  | "flame"
  | "cookware"
  | "gavel"
  | "zap"
  | "gem"
  | "books"
  | "coffee"
  | "pin"
  | "truck"
  | "calendar"
  | "sparkles"
  | "gift"
  | "tag"
  | "toys"
  | "bag";

const TOKEN_TO_KIND: Record<string, IconKind> = {
  "🏠": "house",
  "🔥": "flame",
  "🍳": "cookware",
  "🔨": "gavel",
  "⚡": "zap",
  "💎": "gem",
  "📚": "books",
  "☕": "coffee",
  "📍": "pin",
  "🚛": "truck",
  "📅": "calendar",
  "✨": "sparkles",
  "🎁": "gift",
  "🏷️": "tag",
  "🧸": "toys",
  "🛍️": "bag",
  house: "house",
  flame: "flame",
  cookware: "cookware",
  gavel: "gavel",
  zap: "zap",
  gem: "gem",
  books: "books",
  coffee: "coffee",
  pin: "pin",
  truck: "truck",
  calendar: "calendar",
  sparkles: "sparkles",
  gift: "gift",
  tag: "tag",
  toys: "toys",
  bag: "bag",
};

function defs(id: string) {
  return (
    <defs>
      <linearGradient id={`${id}-base`} x1="10" y1="8" x2="54" y2="56" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#FDFEFF" />
        <stop offset="0.45" stopColor="#D7E6FF" />
        <stop offset="1" stopColor="#96B6F3" />
      </linearGradient>
      <radialGradient id={`${id}-shine`} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20 14) rotate(42) scale(26 22)">
        <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.95" />
        <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
      </radialGradient>
      <linearGradient id={`${id}-edge`} x1="6" y1="6" x2="58" y2="58" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.9" />
        <stop offset="1" stopColor="#D4E4FF" stopOpacity="0.25" />
      </linearGradient>
      <filter id={`${id}-shadow`} x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#0F1D39" floodOpacity="0.2" />
      </filter>
      <filter id={`${id}-shapeShadow`} x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="2.5" stdDeviation="2" floodColor="#122548" floodOpacity="0.18" />
      </filter>
      <linearGradient id={`${id}-blue`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#8FD0FF" />
        <stop offset="1" stopColor="#2B6CF0" />
      </linearGradient>
      <linearGradient id={`${id}-navy`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#335ECA" />
        <stop offset="1" stopColor="#102958" />
      </linearGradient>
      <linearGradient id={`${id}-gold`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#FFE79A" />
        <stop offset="1" stopColor="#F5B924" />
      </linearGradient>
      <linearGradient id={`${id}-amber`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#FFD78F" />
        <stop offset="1" stopColor="#F68B1F" />
      </linearGradient>
      <linearGradient id={`${id}-red`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#FF9A8D" />
        <stop offset="1" stopColor="#E43B2F" />
      </linearGradient>
      <linearGradient id={`${id}-green`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#9AF2C6" />
        <stop offset="1" stopColor="#22A06B" />
      </linearGradient>
      <linearGradient id={`${id}-violet`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#D4B1FF" />
        <stop offset="1" stopColor="#7A4FF4" />
      </linearGradient>
      <linearGradient id={`${id}-rose`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#FFD0E4" />
        <stop offset="1" stopColor="#EA4C89" />
      </linearGradient>
      <linearGradient id={`${id}-brown`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#F2D0A0" />
        <stop offset="1" stopColor="#9E5A28" />
      </linearGradient>
      <linearGradient id={`${id}-gray`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#F3F7FF" />
        <stop offset="1" stopColor="#8A98B8" />
      </linearGradient>
    </defs>
  );
}

function BadgeBase({ id }: { id: string }) {
  return (
    <>
      <rect x="6" y="8" width="52" height="52" rx="17" fill={`url(#${id}-base)`} filter={`url(#${id}-shadow)`} />
      <rect x="6.75" y="8.75" width="50.5" height="50.5" rx="16.25" fill="none" stroke={`url(#${id}-edge)`} strokeWidth="1.5" />
      <rect x="10.5" y="12.5" width="43" height="43" rx="14" fill="url(#card-top)" opacity="0.22" />
      <rect x="10.5" y="12.5" width="43" height="43" rx="14" fill={`url(#${id}-shine)`} />
      <defs>
        <linearGradient id="card-top" x1="12" y1="12" x2="52" y2="52" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.55" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </>
  );
}

function renderShape(kind: IconKind, id: string) {
  const s = `url(#${id}-shapeShadow)`;

  switch (kind) {
    case "house":
      return (
        <g filter={s}>
          <path d="M18 31L32 19L46 31V47H18V31Z" fill={`url(#${id}-navy)`} />
          <path d="M15 31L32 16L49 31L45.5 34.8L32 23L18.5 34.8Z" fill={`url(#${id}-red)`} />
          <rect x="22" y="32" width="20" height="15" rx="3.5" fill={`url(#${id}-blue)`} />
          <rect x="29" y="36" width="6" height="11" rx="2" fill={`url(#${id}-gold)`} />
          <rect x="23.5" y="35.5" width="4.5" height="5" rx="1.5" fill="#EAF6FF" opacity="0.85" />
          <rect x="36" y="35.5" width="4.5" height="5" rx="1.5" fill="#EAF6FF" opacity="0.85" />
        </g>
      );
    case "flame":
      return (
        <g filter={s}>
          <path d="M32 16C36 22 45 28 45 38C45 46 39.4 51 32 51C24.6 51 19 46 19 38C19 30 24 25 27.5 21C29.4 18.8 30.8 16.9 32 16Z" fill={`url(#${id}-red)`} />
          <path d="M33 24C35.8 27.7 40 31.2 40 37.1C40 42.1 36.6 46 32 46C27.4 46 24 42.1 24 37.1C24 33.2 26.1 30.5 28.1 28C29.4 26.4 31 24.9 33 24Z" fill={`url(#${id}-amber)`} />
          <path d="M32.5 30C34.1 32 36 33.8 36 37C36 39.9 34.1 42 31.4 42C28.6 42 26.8 39.9 26.8 37C26.8 34.7 28 33.1 29.3 31.6C30.2 30.6 31.2 29.7 32.5 30Z" fill={`url(#${id}-gold)`} />
        </g>
      );
    case "cookware":
      return (
        <g filter={s}>
          <rect x="18" y="27" width="28" height="16" rx="7" fill={`url(#${id}-brown)`} />
          <path d="M20.5 27C22.5 22.5 26.6 20 32 20C37.4 20 41.5 22.5 43.5 27" fill="none" stroke={`url(#${id}-gold)`} strokeWidth="4" strokeLinecap="round" />
          <rect x="22" y="24.5" width="20" height="5" rx="2.5" fill={`url(#${id}-gray)`} />
          <rect x="15" y="31" width="4" height="7" rx="2" fill={`url(#${id}-navy)`} />
          <rect x="45" y="31" width="4" height="7" rx="2" fill={`url(#${id}-navy)`} />
          <ellipse cx="32" cy="34" rx="9" ry="3.5" fill="#FFF7DF" opacity="0.55" />
        </g>
      );
    case "gavel":
      return (
        <g filter={s}>
          <path d="M22 21L31 30L26.5 34.5L17.5 25.5Z" fill={`url(#${id}-brown)`} />
          <path d="M30 18L38 26L32 32L24 24Z" fill={`url(#${id}-navy)`} />
          <path d="M26 34L40 48" stroke={`url(#${id}-gold)`} strokeWidth="5" strokeLinecap="round" />
          <rect x="36" y="43" width="13" height="4.5" rx="2.25" transform="rotate(-15 36 43)" fill={`url(#${id}-gold)`} />
          <rect x="12" y="39" width="20" height="5.5" rx="2.75" fill={`url(#${id}-red)`} />
        </g>
      );
    case "zap":
      return (
        <g filter={s}>
          <path d="M34 16L22 34H30L27 48L42 28H33L34 16Z" fill={`url(#${id}-gold)`} />
          <path d="M34 16L27 33H33L31 44L42 28H35L34 16Z" fill={`url(#${id}-amber)`} opacity="0.85" />
          <ellipse cx="32" cy="47" rx="12" ry="3" fill="#7FC7FF" opacity="0.25" />
        </g>
      );
    case "gem":
      return (
        <g filter={s}>
          <path d="M22 23L28 17H36L42 23L32 46Z" fill={`url(#${id}-violet)`} />
          <path d="M22 23H42L37 31H27Z" fill={`url(#${id}-blue)`} />
          <path d="M28 17L26 23L32 46L38 23L36 17Z" fill="#F5F7FF" opacity="0.45" />
          <path d="M24.5 23L32 17L39.5 23" fill="none" stroke="#FFFFFF" strokeOpacity="0.7" strokeWidth="1.5" />
        </g>
      );
    case "books":
      return (
        <g filter={s}>
          <rect x="17" y="21" width="10" height="24" rx="3" fill={`url(#${id}-red)`} />
          <rect x="27" y="19" width="10" height="26" rx="3" fill={`url(#${id}-blue)`} />
          <rect x="37" y="23" width="10" height="22" rx="3" fill={`url(#${id}-gold)`} />
          <path d="M22 25V41" stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="1.5" />
          <path d="M32 23V41" stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="1.5" />
          <path d="M42 27V41" stroke="#FFFFFF" strokeOpacity="0.45" strokeWidth="1.5" />
        </g>
      );
    case "coffee":
      return (
        <g filter={s}>
          <path d="M19 26H42V37C42 42 38.2 45 32 45H29C23.3 45 19 41.5 19 37V26Z" fill={`url(#${id}-brown)`} />
          <path d="M42 29H45.5C48 29 50 31 50 33.5C50 36 48 38 45.5 38H42" fill="none" stroke={`url(#${id}-gold)`} strokeWidth="3" />
          <path d="M22 26C22.4 22.5 25 20 29 20H32.5C36.3 20 39.5 22.4 40 26Z" fill="#FFF5E2" />
          <path d="M26 17C24 19 24.5 21 26.2 22.4" stroke="#FFFFFF" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" />
          <path d="M32 16C30 18 30.5 20 32.2 21.4" stroke="#FFFFFF" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" />
          <path d="M38 17C36 19 36.5 21 38.2 22.4" stroke="#FFFFFF" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" />
        </g>
      );
    case "pin":
      return (
        <g filter={s}>
          <path d="M32 15C24.8 15 19.5 20.1 19.5 27.1C19.5 36.4 32 49 32 49C32 49 44.5 36.4 44.5 27.1C44.5 20.1 39.2 15 32 15Z" fill={`url(#${id}-red)`} />
          <circle cx="32" cy="27" r="6.2" fill="#F9FBFF" />
          <circle cx="32" cy="27" r="2.7" fill={`url(#${id}-blue)`} />
        </g>
      );
    case "truck":
      return (
        <g filter={s}>
          <rect x="14" y="28" width="22" height="12" rx="3.5" fill={`url(#${id}-navy)`} />
          <path d="M36 31H43L47 35V40H36Z" fill={`url(#${id}-blue)`} />
          <path d="M40 31V35H46" stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="1.5" />
          <circle cx="22" cy="42" r="4.5" fill="#22345D" />
          <circle cx="22" cy="42" r="2" fill="#EAF3FF" />
          <circle cx="41" cy="42" r="4.5" fill="#22345D" />
          <circle cx="41" cy="42" r="2" fill="#EAF3FF" />
          <rect x="17" y="31" width="10" height="4" rx="2" fill="#A8D5FF" opacity="0.85" />
        </g>
      );
    case "calendar":
      return (
        <g filter={s}>
          <rect x="17" y="18" width="30" height="28" rx="7" fill={`url(#${id}-blue)`} />
          <rect x="17" y="18" width="30" height="8" rx="7" fill={`url(#${id}-red)`} />
          <rect x="22" y="15" width="3.5" height="8" rx="1.75" fill="#F7FBFF" />
          <rect x="38.5" y="15" width="3.5" height="8" rx="1.75" fill="#F7FBFF" />
          <rect x="23" y="31" width="7" height="7" rx="2" fill="#FDFEFF" />
          <rect x="32.5" y="31" width="8" height="7" rx="2" fill="#E6F0FF" />
        </g>
      );
    case "sparkles":
      return (
        <g filter={s}>
          <path d="M32 18L34.8 27.2L44 30L34.8 32.8L32 42L29.2 32.8L20 30L29.2 27.2Z" fill={`url(#${id}-gold)`} />
          <path d="M20 18L21.2 22.8L26 24L21.2 25.2L20 30L18.8 25.2L14 24L18.8 22.8Z" fill={`url(#${id}-blue)`} />
          <path d="M46 20L47.2 24.8L52 26L47.2 27.2L46 32L44.8 27.2L40 26L44.8 24.8Z" fill={`url(#${id}-rose)`} />
        </g>
      );
    case "gift":
      return (
        <g filter={s}>
          <rect x="18" y="27" width="28" height="18" rx="4.5" fill={`url(#${id}-red)`} />
          <rect x="18" y="23" width="28" height="7" rx="3.5" fill={`url(#${id}-gold)`} />
          <rect x="29.5" y="23" width="5" height="22" rx="2.5" fill="#FFF9E6" />
          <path d="M30 23C26 23 23.5 20.5 23.5 18.5C23.5 16.7 24.9 15.4 26.7 15.4C28.7 15.4 30 17.4 30.8 19.6" fill="none" stroke={`url(#${id}-blue)`} strokeWidth="3" strokeLinecap="round" />
          <path d="M34 23C38 23 40.5 20.5 40.5 18.5C40.5 16.7 39.1 15.4 37.3 15.4C35.3 15.4 34 17.4 33.2 19.6" fill="none" stroke={`url(#${id}-blue)`} strokeWidth="3" strokeLinecap="round" />
        </g>
      );
    case "tag":
      return (
        <g filter={s}>
          <path d="M21 22H38L45 29V42L38 49H21C18.8 49 17 47.2 17 45V26C17 23.8 18.8 22 21 22Z" fill={`url(#${id}-gold)`} />
          <circle cx="24.5" cy="28" r="2.5" fill="#FFFFFF" opacity="0.95" />
          <path d="M29 33H40" stroke="#A86A08" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M29 39H36.5" stroke="#A86A08" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      );
    case "toys":
      return (
        <g filter={s}>
          <rect x="18" y="19" width="11" height="11" rx="2.5" fill={`url(#${id}-red)`} />
          <rect x="31" y="23" width="11" height="11" rx="2.5" fill={`url(#${id}-blue)`} />
          <rect x="24" y="34" width="11" height="11" rx="2.5" fill={`url(#${id}-gold)`} />
          <circle cx="23.5" cy="24.5" r="1.2" fill="#FFFFFF" opacity="0.8" />
          <circle cx="36.5" cy="28.5" r="1.2" fill="#FFFFFF" opacity="0.8" />
          <circle cx="29.5" cy="39.5" r="1.2" fill="#FFFFFF" opacity="0.8" />
        </g>
      );
    case "bag":
      return (
        <g filter={s}>
          <path d="M20 25H44L42 46H22L20 25Z" fill={`url(#${id}-rose)`} />
          <path d="M25 25C25 20.6 28.1 17.5 32 17.5C35.9 17.5 39 20.6 39 25" fill="none" stroke={`url(#${id}-gold)`} strokeWidth="3" strokeLinecap="round" />
          <path d="M24 31H40" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1.8" />
          <path d="M24.5 36H38" stroke="#FFFFFF" strokeOpacity="0.35" strokeWidth="1.8" />
        </g>
      );
  }
}

export default function Popup3DIcon({ token }: { token: string }) {
  const kind = TOKEN_TO_KIND[token];

  if (!kind) {
    return null;
  }

  const id = `p3d-${kind}`;

  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden="true">
      {defs(id)}
      <BadgeBase id={id} />
      {renderShape(kind, id)}
    </svg>
  );
}
