import Image from "@/components/Img";
import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import { bp } from "@/lib/basePath";
import BusinessNavArrows from "@/components/BusinessNavArrows";
import BusinessPopup from "@/components/BusinessPopup";
import GalleryCarousel from "@/components/GalleryCarousel";
import { businesses } from "@/data/businesses";
import { GROUP_BUSINESS_LABEL, GROUP_EMAIL } from "@/data/site";
import {
  ArrowLeft,
  Facebook,
  MapPin,
  Wifi,
  AirVent,
  Car,
  Tv,
  ShowerHead,
  UtensilsCrossed,
  ChevronDown,
  Shield,
  Sparkles,
  Clock,
  Phone,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AIRPND | Premium Rental Apartments — Santa Rosa, Laguna",
  description:
    "Modern furnished apartments across Santa Rosa and Cabuyao, Laguna. Secure AIRPND locations with CCTV, WiFi, and move-in ready stays.",
};

const amenities = [
  { icon: Wifi, label: "High-Speed WiFi" },
  { icon: AirVent, label: "Air Conditioning" },
  { icon: UtensilsCrossed, label: "Fully-Equipped Kitchen" },
  { icon: Car, label: "Parking Space" },
  { icon: Tv, label: "Smart TV" },
  { icon: ShowerHead, label: "Hot & Cold Shower" },
  { icon: Shield, label: "24/7 Security" },
  { icon: Sparkles, label: "Weekly Housekeeping" },
];

const gallery = [
  { src: "/airpnd/macabling-1.jpg", alt: "Modern Living Room" },
  { src: "/airpnd/macabling-2.jpg", alt: "Elegant Bedroom" },
  { src: "/airpnd/macabling-3.jpg", alt: "Fully-Equipped Kitchen" },
  { src: "/airpnd/macabling-4.jpg", alt: "Studio Layout Interior" },
  { src: "/airpnd/golden-city-1.jpg", alt: "Modern Bathroom" },
  { src: "/airpnd/golden-city-2.jpg", alt: "Interior Design" },
  { src: "/airpnd/golden-city-3.jpg", alt: "One-Bedroom Unit" },
  { src: "/airpnd/golden-city-4.jpg", alt: "Apartment Exterior" },
];

const airpndBusiness = businesses.find((business) => business.slug === "airpnd");
const locations = airpndBusiness?.branches ?? [];
const totalUnits = locations.reduce((sum, location) => {
  const detailWithCount = location.details?.find((detail) => /^\d+/.test(detail));
  const count = detailWithCount ? Number(detailWithCount.match(/^\d+/)?.[0] ?? 0) : 0;
  return sum + count;
}, 0);

export default function AirpndPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#060606] text-white">
      <BusinessNavArrows currentSlug="airpnd" />
      <BusinessPopup config={{
        storageKey: "popup-airpnd",
        delay: 2800,
        headerBg: "linear-gradient(135deg, #041208 0%, #0A2418 50%, #1A4830 100%)",
        headerIcon: "🏠",
        modalBg: "#0D1117",
        eyebrow: "FIND YOUR UNIT",
        eyebrowColor: "#4BAF78",
        title: "Looking for a place in Laguna?",
        titleColor: "#E8F5EE",
        body: "Browse studio and one-bedroom units across three Laguna locations — designed for comfort, security, and convenience.",
        bodyColor: "rgba(232,245,238,0.48)",
        primaryCTA: "View Locations",
        primaryHref: "#locations",
        ctaBg: "#487860",
        ctaColor: "#FFFFFF",
        secondaryCTA: "Send an Inquiry",
        secondaryColor: "rgba(75,175,120,0.5)",
        badge: "3 Locations",
        badgeBg: "rgba(75,175,120,0.2)",
        badgeColor: "#4BAF78",
        locationChips: ["Santa Rosa", "Golden City", "Cabuyao"],
        accentLine: "#487860",
        logoSrc: "/logos/airpnd-main.png",
      }} />
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes fadeInUpAirpnd {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes scaleReveal {
            from { opacity: 0; transform: scale(1.08); }
            to { opacity: 1; transform: scale(1); }
          }
          .hero-bg-zoom {
            animation: scaleReveal 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `,
        }}
      />

      {/* ===== NAVIGATION ===== */}
      <nav className="fixed top-0 right-0 left-0 z-50 border-b border-white/[0.06] bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link
            href="/"
            className="flex items-center gap-3 text-white/50 transition-colors duration-300 hover:text-white/80"
          >
            <ArrowLeft className="h-4 w-4" />
            <Image
              src="/logos/pring-group.png"
              alt="Pring Group"
              width={28}
              height={28}
              className="rounded"
            />
            <span className="hidden text-sm sm:inline">Pring Group</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="font-[family-name:var(--font-cursive)] text-lg font-semibold tracking-wide text-white">
              AIRPND
            </span>
            <a
              href="https://www.facebook.com/modernapartment2023"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-white/70 transition-all duration-300 hover:border-white/30 hover:text-white"
            >
              <Facebook className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Follow</span>
            </a>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="hero-bg-zoom absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={bp("/airpnd/golden-city-1.jpg")}
            alt="AIRPND Luxury Apartments"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          {/* Logo */}
          <div
            className="mb-8"
            style={{
              opacity: 0,
              animationName: "fadeInUpAirpnd",
              animationDuration: "0.8s",
              animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              animationDelay: "0.3s",
              animationFillMode: "forwards",
            }}
          >
            <Image
              src="/logos/airpnd-main.png"
              alt="AIRPND Logo"
              width={80}
              height={80}
              className="mx-auto rounded-2xl shadow-2xl"
              priority
            />
          </div>

          {/* Location badge */}
          <div
            style={{
              opacity: 0,
              animationName: "fadeInUpAirpnd",
              animationDuration: "0.7s",
              animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              animationDelay: "0.5s",
              animationFillMode: "forwards",
            }}
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-1.5 text-[11px] font-medium tracking-[0.2em] text-white/60 uppercase backdrop-blur-sm">
              <MapPin className="h-3 w-3" />
              Santa Rosa, Laguna
            </span>
          </div>

          {/* Headline */}
          <h1
            className="mb-6 font-[family-name:var(--font-cursive)] text-5xl leading-[1.1] font-light italic tracking-wide text-white sm:text-6xl md:text-7xl lg:text-8xl"
            style={{
              opacity: 0,
              animationName: "fadeInUpAirpnd",
              animationDuration: "0.9s",
              animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              animationDelay: "0.7s",
              animationFillMode: "forwards",
            }}
          >
            Modern Living,
            <br />
            Designed for Comfort
          </h1>

          {/* Decorative line */}
          <div
            className="mx-auto mb-6 h-px w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            style={{
              opacity: 0,
              animationName: "fadeInUpAirpnd",
              animationDuration: "0.6s",
              animationDelay: "0.9s",
              animationFillMode: "forwards",
            }}
          />

          {/* Subtitle */}
          <p
            className="mx-auto mb-10 max-w-lg text-base leading-relaxed text-white/50 sm:text-lg"
            style={{
              opacity: 0,
              animationName: "fadeInUpAirpnd",
              animationDuration: "0.7s",
              animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              animationDelay: "1s",
              animationFillMode: "forwards",
            }}
          >
            Premium furnished apartments designed for modern living across
            Santa Rosa and Cabuyao, Laguna.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{
              opacity: 0,
              animationName: "fadeInUpAirpnd",
              animationDuration: "0.7s",
              animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              animationDelay: "1.15s",
              animationFillMode: "forwards",
            }}
          >
            <a
              href="#locations"
              className="group flex cursor-pointer items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90 hover:shadow-xl hover:shadow-white/10 active:scale-[0.97]"
            >
              Explore Locations
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://www.facebook.com/modernapartment2023"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/[0.05] active:scale-[0.97]"
            >
              <Phone className="h-4 w-4" />
              Inquire Now
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          style={{
            opacity: 0,
            animationName: "fadeInUpAirpnd",
            animationDuration: "0.5s",
            animationDelay: "1.5s",
            animationFillMode: "forwards",
          }}
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-white/30 transition-colors hover:text-white/50"
          >
            <span className="text-[10px] tracking-[0.2em] uppercase">
              Discover
            </span>
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </section>

      {/* ===== ABOUT / OVERVIEW ===== */}
      <section
        id="about"
        className="relative border-t border-white/[0.06] px-6 py-24 md:py-32"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Animated Building */}
            <ScrollReveal variant="fadeRight">
              <div className="relative flex items-center justify-center rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3", background: "linear-gradient(180deg, #080808 0%, #0f0f0f 60%, #181818 100%)" }}>
                <style dangerouslySetInnerHTML={{ __html: `
                  @keyframes airpnd-blink { 0%,100%{opacity:1} 50%{opacity:0.2} }
                  @keyframes airpnd-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
                  @keyframes airpnd-star { 0%,100%{opacity:0.8} 50%{opacity:0.2} }
                  @keyframes airpnd-cloud { 0%{transform:translateX(-10px)} 100%{transform:translateX(10px)} }
                  @keyframes airpnd-glow { 0%,100%{opacity:0.1} 50%{opacity:0.25} }
                  .airpnd-win { animation: airpnd-blink var(--d,3s) var(--delay,0s) ease-in-out infinite; }
                  .airpnd-float { animation: airpnd-float 4s ease-in-out infinite; }
                  .airpnd-star { animation: airpnd-star var(--d,2s) var(--delay,0s) ease-in-out infinite; }
                  .airpnd-cloud { animation: airpnd-cloud 6s ease-in-out infinite alternate; }
                  .airpnd-glow { animation: airpnd-glow 3s ease-in-out infinite; }
                ` }} />
                <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
                  {/* Stars */}
                  {[{x:30,y:20,d:"2.5s",dl:"0s"},{x:80,y:12,d:"3s",dl:"0.5s"},{x:150,y:18,d:"2s",dl:"1s"},{x:220,y:10,d:"3.5s",dl:"0.3s"},{x:300,y:15,d:"2s",dl:"0.8s"},{x:360,y:22,d:"2.5s",dl:"0.2s"},{x:50,y:40,d:"3s",dl:"1.2s"},{x:330,y:35,d:"2s",dl:"0.6s"}].map((s,i)=>(
                    <circle key={i} cx={s.x} cy={s.y} r="1.5" fill="white" className="airpnd-star" style={{"--d":s.d,"--delay":s.dl} as React.CSSProperties} />
                  ))}
                  {/* Moon */}
                  <path d="M370 30 Q378 22 378 35 Q365 42 370 30Z" fill="#F0EAD6" opacity="0.7" />
                  {/* Ground */}
                  <rect x="0" y="260" width="400" height="40" fill="#0a0a0a" />
                  {/* Road */}
                  <rect x="150" y="258" width="100" height="44" fill="#111111" />
                  <rect x="195" y="260" width="10" height="8" fill="#F0EAD6" opacity="0.3" rx="2" />
                  <rect x="195" y="275" width="10" height="8" fill="#F0EAD6" opacity="0.3" rx="2" />
                  {/* Ground glow */}
                  <ellipse cx="200" cy="265" rx="120" ry="12" fill="#888888" className="airpnd-glow" />
                  {/* Cloud 1 */}
                  <g className="airpnd-cloud" style={{transformOrigin:"100px 50px"}}>
                    <ellipse cx="90" cy="55" rx="30" ry="12" fill="#222222" opacity="0.7" />
                    <ellipse cx="108" cy="50" rx="22" ry="14" fill="#222222" opacity="0.7" />
                    <ellipse cx="72" cy="52" rx="18" ry="11" fill="#222222" opacity="0.7" />
                  </g>
                  {/* Cloud 2 */}
                  <g className="airpnd-cloud" style={{transformOrigin:"310px 45px", animationDelay:"3s"}}>
                    <ellipse cx="310" cy="48" rx="28" ry="11" fill="#222222" opacity="0.6" />
                    <ellipse cx="326" cy="44" rx="20" ry="13" fill="#222222" opacity="0.6" />
                    <ellipse cx="294" cy="46" rx="16" ry="10" fill="#222222" opacity="0.6" />
                  </g>

                  {/* ── BUILDING — MAIN (center tall) ── */}
                  <g className="airpnd-float">
                    {/* Main body */}
                    <rect x="155" y="80" width="90" height="180" rx="3" fill="#1c1c1c" />
                    {/* Facade stripes */}
                    <rect x="155" y="80" width="90" height="180" rx="3" fill="url(#bldg-stripe)" />
                    {/* Roof top bar */}
                    <rect x="150" y="75" width="100" height="10" rx="2" fill="#2e2e2e" />
                    <rect x="192" y="65" width="16" height="12" rx="2" fill="#1e1e1e" />
                    {/* Antenna */}
                    <line x1="200" y1="45" x2="200" y2="65" stroke="#666666" strokeWidth="2" />
                    <circle cx="200" cy="44" r="3" fill="#D4C4A8">
                      <animate attributeName="opacity" values="1;0.2;1" dur="2s" repeatCount="indefinite" />
                    </circle>
                    {/* Windows — grid 3×7 */}
                    {[...Array(7)].map((_,row)=>
                      [0,1,2].map(col=>{
                        const wx = 168 + col*26;
                        const wy = 92 + row*22;
                        const isLit = (row*3+col) % 3 !== 2;
                        const delay = `${(row*3+col)*0.4}s`;
                        return (
                          <rect key={`${row}-${col}`} x={wx} y={wy} width="14" height="14" rx="2"
                            fill={isLit ? "#EDE8DC" : "#0f0f0f"}
                            className={isLit ? "airpnd-win" : ""}
                            style={isLit ? {"--delay":delay} as React.CSSProperties : {}}
                            opacity={isLit ? 0.9 : 1}
                          />
                        );
                      })
                    )}
                    {/* Balconies */}
                    {[1,3,5].map(row=>(
                      <rect key={row} x="152" y={92+row*22+10} width="96" height="4" rx="1" fill="#282828" />
                    ))}
                    {/* Ground floor entrance */}
                    <rect x="186" y="232" width="28" height="28" rx="3" fill="#0d0d0d" />
                    <rect x="190" y="236" width="10" height="18" rx="2" fill="#1d1d1d" />
                    <rect x="200" y="236" width="10" height="18" rx="2" fill="#1d1d1d" />
                    {/* Door handle */}
                    <circle cx="199" cy="246" r="1.5" fill="#D4C4A8" opacity="0.8" />
                    <circle cx="201" cy="246" r="1.5" fill="#D4C4A8" opacity="0.8" />
                  </g>

                  {/* ── BUILDING — LEFT (shorter) ── */}
                  <g className="airpnd-float" style={{animationDelay:"1s"}}>
                    <rect x="60" y="130" width="68" height="130" rx="3" fill="#151515" />
                    <rect x="55" y="125" width="78" height="8" rx="2" fill="#1c1c1c" />
                    {/* Windows 2×4 */}
                    {[...Array(4)].map((_,row)=>
                      [0,1].map(col=>{
                        const wx = 72 + col*28;
                        const wy = 140 + row*22;
                        const isLit = (row+col) % 2 === 0;
                        return (
                          <rect key={`l${row}-${col}`} x={wx} y={wy} width="14" height="14" rx="2"
                            fill={isLit ? "#E8E0D0" : "#0d0d0d"}
                            className={isLit ? "airpnd-win" : ""}
                            style={isLit ? {"--delay":`${(row*2+col)*0.6}s`} as React.CSSProperties : {}}
                            opacity={isLit ? 0.85 : 1}
                          />
                        );
                      })
                    )}
                    {/* Entrance */}
                    <rect x="82" y="230" width="24" height="30" rx="2" fill="#0b0b0b" />
                  </g>

                  {/* ── BUILDING — RIGHT (medium) ── */}
                  <g className="airpnd-float" style={{animationDelay:"2s"}}>
                    <rect x="272" y="110" width="72" height="150" rx="3" fill="#161616" />
                    <rect x="267" y="105" width="82" height="8" rx="2" fill="#1e1e1e" />
                    <rect x="302" y="92" width="12" height="14" rx="2" fill="#151515" />
                    <line x1="308" y1="78" x2="308" y2="93" stroke="#666666" strokeWidth="1.5" />
                    <circle cx="308" cy="77" r="2.5" fill="#C8B89A">
                      <animate attributeName="opacity" values="1;0.2;1" dur="1.5s" begin="1s" repeatCount="indefinite" />
                    </circle>
                    {/* Windows 2×5 */}
                    {[...Array(5)].map((_,row)=>
                      [0,1].map(col=>{
                        const wx = 283 + col*30;
                        const wy = 118 + row*22;
                        const isLit = !((row===1&&col===0)||(row===3&&col===1));
                        return (
                          <rect key={`r${row}-${col}`} x={wx} y={wy} width="14" height="14" rx="2"
                            fill={isLit ? "#EDE8DC" : "#0d0d0d"}
                            className={isLit ? "airpnd-win" : ""}
                            style={isLit ? {"--delay":`${(row*2+col)*0.5}s`} as React.CSSProperties : {}}
                            opacity={isLit ? 0.85 : 1}
                          />
                        );
                      })
                    )}
                    <rect x="286" y="228" width="26" height="32" rx="2" fill="#0b0b0b" />
                  </g>

                  {/* Street lamps */}
                  <line x1="140" y1="220" x2="140" y2="260" stroke="#2a2a2a" strokeWidth="3" />
                  <ellipse cx="140" cy="218" rx="8" ry="4" fill="#2a2a2a" />
                  <ellipse cx="140" cy="216" rx="5" ry="3" fill="#F0EAD6" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;0.3;0.6" dur="4s" repeatCount="indefinite" />
                  </ellipse>
                  <line x1="260" y1="220" x2="260" y2="260" stroke="#2a2a2a" strokeWidth="3" />
                  <ellipse cx="260" cy="218" rx="8" ry="4" fill="#2a2a2a" />
                  <ellipse cx="260" cy="216" rx="5" ry="3" fill="#F0EAD6" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;0.3;0.6" dur="4s" begin="2s" repeatCount="indefinite" />
                  </ellipse>

                  {/* AIRPND sign glow on main building */}
                  <rect x="167" y="82" width="66" height="14" rx="3" fill="#222222" opacity="0.8" />
                  <text x="200" y="92" textAnchor="middle" fill="#F0EAD6" fontSize="8" fontWeight="bold" letterSpacing="2" opacity="0.9">AIRPND</text>

                  <defs>
                    <pattern id="bldg-stripe" x="0" y="0" width="10" height="40" patternUnits="userSpaceOnUse">
                      <rect x="0" y="0" width="10" height="40" fill="none" />
                      <line x1="0" y1="0" x2="0" y2="40" stroke="#2e2e2e" strokeWidth="0.5" opacity="0.3" />
                    </pattern>
                  </defs>
                </svg>
              </div>
            </ScrollReveal>

            {/* Text */}
            <ScrollReveal variant="fadeLeft" delay={150}>
              <div>
                <span className="mb-4 inline-block font-[family-name:var(--font-cursive)] text-sm italic tracking-[0.15em] text-white/40 uppercase">
                  About AIRPND
                </span>
                <h2 className="mb-6 font-[family-name:var(--font-cursive)] text-3xl font-light italic leading-tight text-white md:text-4xl lg:text-5xl">
                  Where Design
                  <br />
                  Meets Comfort
                </h2>
                <div className="mb-8 h-px w-16 bg-white/20" />
                <p className="mb-6 text-base leading-[1.8] text-white/50">
                  AIRPND offers premium rental apartments in Santa Rosa,
                  Laguna &mdash; designed with modern aesthetics and equipped
                  with everything you need. Whether you&apos;re staying for a
                  short stay or planning a longer move, our fully furnished
                  spaces are built for a smoother arrival.
                </p>
                <p className="mb-8 text-base leading-[1.8] text-white/50">
                  Each unit is thoughtfully designed with contemporary interiors,
                  high-quality furnishings, and smart amenities that make you
                  feel right at home, with security and convenience already in place.
                </p>

                {/* Key stats */}
                <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                  {[
                    { value: locations.length, unit: "", label: "Locations" },
                    { value: totalUnits, unit: "", label: "Total Units" },
                    { value: 2, unit: "", label: "Cities" },
                    { value: "24/7", unit: "", label: "Security" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="font-[family-name:var(--font-cursive)] text-2xl font-semibold text-white">
                        {stat.value}
                        <span className="text-sm text-white/40">
                          {stat.unit}
                        </span>
                      </div>
                      <div className="text-[11px] tracking-[0.1em] text-white/30 uppercase">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== LOCATIONS ===== */}
      <section
        id="locations"
        className="relative border-t border-white/[0.06] bg-[#0a0a0a] px-6 py-24 md:py-32"
      >
        <div className="mx-auto max-w-6xl">
          <ScrollReveal variant="fadeUp">
            <div className="mb-16 text-center">
              <span className="mb-4 inline-block font-[family-name:var(--font-cursive)] text-sm italic tracking-[0.15em] text-white/40 uppercase">
                Our Locations
              </span>
              <h2 className="font-[family-name:var(--font-cursive)] text-3xl font-light italic text-white md:text-4xl lg:text-5xl">
                Find Your Space
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-3">
            {locations.map((location, i) => (
              <ScrollReveal key={location.name} variant="fadeUp" delay={i * 120}>
                <div className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-500 hover:border-white/15 hover:bg-white/[0.04]">
                  <h3 className="mb-4 font-[family-name:var(--font-cursive)] text-xl font-semibold italic text-white">
                    {location.name}
                  </h3>
                  <div className="mb-6 h-px w-full bg-white/[0.06]" />

                  <div className="mb-6 flex items-start gap-2 text-sm text-white/40">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>{location.address}</span>
                  </div>

                  <div className="mb-6 space-y-2">
                    {(location.details ?? []).map((detail) => (
                      <div
                        key={detail}
                        className="flex items-start gap-2 text-sm leading-relaxed text-white/35"
                      >
                        <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={`mailto:${GROUP_EMAIL}?subject=${encodeURIComponent(`AIRPND inquiry - ${location.name}`)}`}
                    className="group/btn flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-white/15 py-3 text-sm font-medium text-white/70 transition-all duration-300 hover:border-white/30 hover:bg-white hover:text-black"
                  >
                    Inquire About This Location
                    <ExternalLink className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal variant="fadeUp" delay={200}>
            <p className="mt-8 text-center text-sm text-white/25">
              Email us your preferred AIRPND location and stay duration for
              current availability.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== AMENITIES ===== */}
      <section className="relative border-t border-white/[0.06] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <ScrollReveal variant="fadeRight">
              <div>
                <span className="mb-4 inline-block font-[family-name:var(--font-cursive)] text-sm italic tracking-[0.15em] text-white/40 uppercase">
                  Premium Amenities
                </span>
                <h2 className="mb-6 font-[family-name:var(--font-cursive)] text-3xl font-light italic leading-tight text-white md:text-4xl lg:text-5xl">
                  Everything You Need,
                  <br />
                  Nothing You Don&apos;t
                </h2>
                <div className="mb-8 h-px w-16 bg-white/20" />
                <p className="text-base leading-[1.8] text-white/50">
                  Every AIRPND unit comes equipped with premium amenities
                  designed for your comfort. From high-speed WiFi to fully
                  equipped kitchens, we&apos;ve thought of everything so you can
                  focus on what matters.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeLeft" delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {amenities.map((amenity) => (
                  <div
                    key={amenity.label}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05]"
                  >
                    <amenity.icon className="h-5 w-5 shrink-0 text-white/40" />
                    <span className="text-sm font-medium text-white/60">
                      {amenity.label}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="relative border-t border-white/[0.06] bg-[#0a0a0a] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal variant="fadeUp">
            <div className="mb-16 text-center">
              <span className="mb-4 inline-block font-[family-name:var(--font-cursive)] text-sm italic tracking-[0.15em] text-white/40 uppercase">
                Gallery
              </span>
              <h2 className="font-[family-name:var(--font-cursive)] text-3xl font-light italic text-white md:text-4xl lg:text-5xl">
                A Glimpse Inside
              </h2>
            </div>
          </ScrollReveal>

          <GalleryCarousel images={gallery} />
        </div>
      </section>

      {/* ===== LOCATION ===== */}
      <section className="relative border-t border-white/[0.06] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <ScrollReveal variant="fadeRight">
              <div>
                <span className="mb-4 inline-block font-[family-name:var(--font-cursive)] text-sm italic tracking-[0.15em] text-white/40 uppercase">
                  Prime Location
                </span>
                <h2 className="mb-6 font-[family-name:var(--font-cursive)] text-3xl font-light italic leading-tight text-white md:text-4xl lg:text-5xl">
                  The Heart of
                  <br />
                  Santa Rosa
                </h2>
                <div className="mb-8 h-px w-16 bg-white/20" />
                <p className="mb-8 text-base leading-[1.8] text-white/50">
                  Strategically located in Santa Rosa, Laguna &mdash; one of the
                  fastest-growing cities in the Philippines. Enjoy easy access to
                  major commercial centers, restaurants, and transportation hubs.
                </p>

                <div className="space-y-4">
                  {[
                    "SM City Santa Rosa — 10 min drive",
                    "Nuvali — 15 min drive",
                    "Enchanted Kingdom — 10 min drive",
                    "SLEX / CALAX Access — 5 min drive",
                    "Paseo de Santa Rosa — 8 min drive",
                  ].map((place) => (
                    <div
                      key={place}
                      className="flex items-center gap-3 text-sm text-white/40"
                    >
                      <div className="h-1 w-1 rounded-full bg-white/30" />
                      {place}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Location card */}
            <ScrollReveal variant="fadeLeft" delay={150}>
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
                {/* Subtle grid pattern */}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                <div className="relative flex h-full flex-col items-center justify-center text-center">
                  <MapPin className="mb-4 h-10 w-10 text-white/20" />
                  <h3 className="mb-2 font-[family-name:var(--font-cursive)] text-2xl font-semibold italic text-white">
                    Santa Rosa, Laguna
                  </h3>
                  <p className="mb-6 text-sm text-white/30">
                    The Lion City of South Luzon
                  </p>
                  <div className="h-px w-16 bg-white/10" />
                  <p className="mt-6 font-[family-name:var(--font-cursive)] text-lg italic text-white/20">
                    14.3147&deg; N, 121.1113&deg; E
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative border-t border-white/[0.06] bg-[#0a0a0a] px-6 py-24 md:py-32">
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <ScrollReveal variant="fadeUp">
            <span className="mb-4 inline-block font-[family-name:var(--font-cursive)] text-sm italic tracking-[0.15em] text-white/40 uppercase">
              Ready to Move In?
            </span>
            <h2 className="mb-6 font-[family-name:var(--font-cursive)] text-4xl font-light italic leading-tight text-white md:text-5xl lg:text-6xl">
              Your New Home
              <br />
              Awaits
            </h2>
            <div className="mx-auto mb-8 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <p className="mx-auto mb-10 max-w-md text-base leading-relaxed text-white/40">
              Contact us today to schedule a viewing and ask about the best
              AIRPND location for your stay.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={100}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://www.facebook.com/modernapartment2023"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex cursor-pointer items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:shadow-xl hover:shadow-white/10 active:scale-[0.97]"
              >
                <Facebook className="h-4 w-4" />
                Message Us on Facebook
              </a>
              <a
                href="https://www.facebook.com/modernapartment2023"
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-pointer items-center gap-2 rounded-full border border-white/15 px-8 py-4 text-sm font-medium text-white/60 transition-all duration-300 hover:border-white/30 hover:text-white"
              >
                <Phone className="h-4 w-4" />
                Call for Inquiries
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PART OF PRING GROUP ===== */}
      <section className="relative border-t border-white/[0.06] px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal variant="scale">
            <Image
              src="/logos/pring-group.png"
              alt="Pring Group"
              width={48}
              height={48}
              className="mx-auto mb-5 rounded opacity-60"
            />
            <p className="mb-2 text-[11px] tracking-[0.2em] text-white/20 uppercase">
              A Member Of
            </p>
            <h3 className="mb-3 font-[family-name:var(--font-cursive)] text-xl font-semibold italic text-white/50">
              Pring Group of Companies
            </h3>
            <p className="mx-auto mb-6 max-w-md text-sm text-white/25">
              AIRPND is one of {GROUP_BUSINESS_LABEL} businesses under the Pring Group &mdash; a
              family-owned conglomerate building a legacy across the Philippines.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/30 transition-colors duration-300 hover:text-white/60"
            >
              Explore All Businesses
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-white/[0.06] px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-3">
            <Image
              src="/logos/airpnd-main.png"
              alt="AIRPND"
              width={24}
              height={24}
              className="rounded"
            />
            <span className="font-[family-name:var(--font-cursive)] text-sm italic text-white/30">
              AIRPND
            </span>
          </div>
          <p className="text-[11px] text-white/20">
            &copy; {new Date().getFullYear()} AIRPND &mdash; A Pring Group
            Company. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
