"use client";

import Link from "next/link";
import { bp } from "@/lib/basePath";
import {
  ArrowLeft,
  ArrowRight,
  Facebook,
  Tv,
  Trophy,
  Package,
  Truck,
  ShoppingBag,
  Warehouse,
  Users,
  Star,
  Zap,
  ChevronRight,
  Play,
  CheckCircle2,
  Clock,
  Sparkles,
  Globe,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import BusinessNavArrows from "@/components/BusinessNavArrows";

// ─── BRAND TOKENS ─────────────────────────────────────────────────────────────
const C = {
  red: "#E8350A",
  orange: "#FF6B35",
  yellow: "#FFD700",
  navy: "#1A1A2E",
  navyDeep: "#0F0F1A",
  navyMid: "#16213E",
  navyCard: "rgba(26,26,46,0.85)",
  whitePure: "#FFFFFF",
  whiteOff: "rgba(255,255,255,0.92)",
  whiteDim: "rgba(255,255,255,0.60)",
  whiteGhost: "rgba(255,255,255,0.12)",
  whiteGhostDark: "rgba(255,255,255,0.06)",
  goldGlow: "rgba(255,215,0,0.18)",
  redGlow: "rgba(232,53,10,0.22)",
  orangeGlow: "rgba(255,107,53,0.18)",
};

const FACEBOOK_GROUP = "https://www.facebook.com/groups/642834551000763";

// ─── DATA ─────────────────────────────────────────────────────────────────────
const toys = [
  { src: "/toyzoona-importer/toys-1.jpg", label: "UK Imports" },
  { src: "/toyzoona-importer/toys-2.jpg", label: "China Imports" },
  { src: "/toyzoona-importer/toys-3.jpg", label: "Per Kilo" },
  { src: "/toyzoona-importer/toys-4.jpg", label: "All Ages" },
];

const tvPhotos = [
  { src: "/toyzoona-importer/tv-1.jpg", caption: "Featured on TV5 – National Coverage" },
  { src: "/toyzoona-importer/tv-2.jpg", caption: "Live TV Interview – Toys Per Kilo" },
  { src: "/toyzoona-importer/tv-3.jpg", caption: "Studio Appearance – National TV" },
  { src: "/toyzoona-importer/tv-4.jpg", caption: "Media Feature – Cabuyao, Laguna" },
  { src: "/toyzoona-importer/tv-5.jpg", caption: "National Broadcast Spotlight" },
];

const toyfairPhotos = [
  { src: "/toyzoona-importer/toyfair-1.jpg" },
  { src: "/toyzoona-importer/toyfair-2.jpg" },
  { src: "/toyzoona-importer/toyfair-3.jpg" },
  { src: "/toyzoona-importer/toyfair-4.jpg" },
];

const stats = [
  { value: "1st", label: "in the South", sub: "toys sold per kilo" },
  { value: "TV5", label: "Featured", sub: "national television" },
  { value: "2+", label: "Toyfairs", sub: "participated nationwide" },
  { value: "Ship", label: "Nationwide", sub: "anywhere in PH" },
];

const howToBuy = [
  {
    icon: ShoppingBag,
    title: "Saturday Auction",
    badge: "Every Sat",
    desc: "Join our live auction every Saturday at 10:00 AM. Bid per kilogram at competitive prices.",
    color: C.yellow,
    step: "01",
  },
  {
    icon: Tv,
    title: "Live Selling",
    badge: "Mon–Sat",
    desc: "Watch and shop live on Facebook! Mon–Sat, 9AM–6:30PM (some sessions go until midnight).",
    color: C.orange,
    step: "02",
  },
  {
    icon: Warehouse,
    title: "Warehouse Visit",
    badge: "Mon–Sat",
    desc: "Visit us in Cabuyao, Laguna. Browse and pick toys by the kilo. Open 9AM–6:30PM.",
    color: C.red,
    step: "03",
  },
  {
    icon: Facebook,
    title: "Facebook Group",
    badge: "24/7 Updates",
    desc: "Get exclusive deals, live alerts, and member-only promos in our private FB group.",
    color: "#1877F2",
    step: "04",
    link: FACEBOOK_GROUP,
  },
];

const reasons = [
  { icon: Trophy, title: "Pioneer in the South", desc: "We were the FIRST in Southern Luzon to introduce toys sold per kilogram — blazing a trail no one else had." },
  { icon: Tv, title: "TV-Verified Credibility", desc: "Featured on national television — our story, our mission, and our toys have been broadcast to millions of Filipinos." },
  { icon: Globe, title: "Nationwide Delivery", desc: "From Cabuyao to Cagayan de Oro — we ship anywhere in the Philippines. Your kids get the toys they deserve." },
  { icon: Package, title: "Direct UK & China Imports", desc: "We source directly from UK and China suppliers — no middlemen, unbeatable prices, maximum value per kilo." },
  { icon: Star, title: "Toyfair Presence", desc: "Proudly represented at major toyfairs nationwide, bringing our per-kilo concept to the biggest toy events in the country." },
  { icon: Users, title: "Thriving Community", desc: "Join thousands of parents, resellers, and toy lovers in our exclusive Facebook group with live deals and flash sales." },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function ToyZoonaImporterPage() {
  return (
    <main
      style={{
        backgroundColor: C.navyDeep,
        color: C.whitePure,
        fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
        overflowX: "hidden",
      }}
    >
      <BusinessNavArrows currentSlug="toyzoona-importer" />
      {/* ── AMBIENT GLOWS ───────────────────────────────────────────────────── */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div
          style={{
            position: "absolute", top: "-15%", left: "-10%",
            width: 800, height: 800, borderRadius: "50%",
            background: `radial-gradient(circle, ${C.redGlow} 0%, transparent 70%)`,
          }}
        />
        <div
          style={{
            position: "absolute", bottom: "10%", right: "-15%",
            width: 700, height: 700, borderRadius: "50%",
            background: `radial-gradient(circle, ${C.goldGlow} 0%, transparent 70%)`,
          }}
        />
        <div
          style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600, height: 600, borderRadius: "50%",
            background: `radial-gradient(circle, ${C.orangeGlow} 0%, transparent 70%)`,
          }}
        />
      </div>

      {/* ── NAV BACK ────────────────────────────────────────────────────────── */}
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          backgroundColor: "rgba(15,15,26,0.85)",
          backdropFilter: "blur(16px)",
          borderBottom: `1px solid ${C.whiteGhostDark}`,
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link
            href="/business"
            style={{
              display: "flex", alignItems: "center", gap: 8,
              color: C.whiteDim, textDecoration: "none", fontSize: 14,
              transition: "color 200ms",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = C.whitePure)}
            onMouseLeave={(e) => (e.currentTarget.style.color = C.whiteDim)}
          >
            <ArrowLeft size={16} />
            <span>All Businesses</span>
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img
              src={bp("/logos/toyzoona-importer.jpg")}
              alt="Toyzoona Importer"
              style={{ height: 36, width: 36, objectFit: "contain", borderRadius: 8 }}
            />
            <span style={{ fontWeight: 700, fontSize: 15, color: C.whitePure }}>Toyzoona Importer</span>
          </div>

          <a
            href={FACEBOOK_GROUP}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", gap: 6,
              backgroundColor: C.red, color: C.whitePure,
              textDecoration: "none", borderRadius: 8,
              padding: "8px 16px", fontSize: 13, fontWeight: 700,
              transition: "background-color 200ms",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.orange)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.red)}
          >
            <Facebook size={14} />
            <span>Join Group</span>
          </a>
        </div>
      </nav>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          position: "relative", zIndex: 1,
          minHeight: "100vh",
          display: "flex", alignItems: "center",
          paddingTop: 100, paddingBottom: 80,
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", width: "100%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>

            {/* LEFT — Copy */}
            <div>
              {/* TV Badge — prominently placed */}
              <ScrollReveal variant="fadeDown" delay={0}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28 }}>
                  <span
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 8,
                      backgroundColor: C.yellow, color: C.navy,
                      fontWeight: 800, fontSize: 13, padding: "8px 16px",
                      borderRadius: 40, letterSpacing: "0.05em",
                      boxShadow: `0 0 24px ${C.goldGlow}`,
                    }}
                  >
                    <Tv size={15} />
                    AS SEEN ON NATIONAL TV · TV5
                  </span>
                  <span
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 6,
                      backgroundColor: C.whiteGhost, color: C.whitePure,
                      fontWeight: 700, fontSize: 13, padding: "8px 14px",
                      borderRadius: 40, letterSpacing: "0.04em",
                      border: `1px solid ${C.whiteGhostDark}`,
                    }}
                  >
                    <Trophy size={13} style={{ color: C.yellow }} />
                    TOYFAIR PARTICIPANT
                  </span>
                  <span
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 6,
                      backgroundColor: "rgba(34,197,94,0.15)", color: "#4ADE80",
                      fontWeight: 700, fontSize: 13, padding: "8px 14px",
                      borderRadius: 40, letterSpacing: "0.04em",
                      border: "1px solid rgba(34,197,94,0.25)",
                    }}
                  >
                    <Truck size={13} />
                    SHIPS NATIONWIDE
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fadeUp" delay={100}>
                <h1
                  style={{
                    fontSize: "clamp(42px, 5vw, 72px)",
                    fontWeight: 900,
                    lineHeight: 1.05,
                    marginBottom: 24,
                    letterSpacing: "-0.02em",
                  }}
                >
                  <span style={{ display: "block", color: C.whitePure }}>The First</span>
                  <span
                    style={{
                      display: "block",
                      background: `linear-gradient(135deg, ${C.red} 0%, ${C.orange} 50%, ${C.yellow} 100%)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Toys Per Kilo
                  </span>
                  <span style={{ display: "block", color: C.whitePure }}>in the South.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal variant="fadeUp" delay={200}>
                <p
                  style={{
                    fontSize: 18, lineHeight: 1.7,
                    color: C.whiteDim,
                    marginBottom: 36, maxWidth: 480,
                  }}
                >
                  Toyzoona Importer brings you <strong style={{ color: C.whiteOff }}>high-quality UK & China imported toys</strong> — sold by the kilogram at unbeatable prices. Trusted by thousands. Featured on TV5. Delivering joy nationwide.
                </p>
              </ScrollReveal>

              <ScrollReveal variant="fadeUp" delay={300}>
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                  <a
                    href={FACEBOOK_GROUP}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 10,
                      background: `linear-gradient(135deg, ${C.red}, ${C.orange})`,
                      color: C.whitePure, textDecoration: "none",
                      padding: "16px 32px", borderRadius: 12,
                      fontWeight: 800, fontSize: 16,
                      boxShadow: `0 8px 32px ${C.redGlow}`,
                      transition: "transform 200ms, box-shadow 200ms",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 40px rgba(232,53,10,0.4)`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px ${C.redGlow}`;
                    }}
                  >
                    <Facebook size={18} />
                    Join Facebook Group
                    <ArrowRight size={16} />
                  </a>
                  <a
                    href="#how-to-buy"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 10,
                      backgroundColor: C.whiteGhost,
                      color: C.whitePure, textDecoration: "none",
                      padding: "16px 28px", borderRadius: 12,
                      fontWeight: 700, fontSize: 15,
                      border: `1px solid ${C.whiteGhostDark}`,
                      transition: "background-color 200ms",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.18)")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.whiteGhost)}
                  >
                    How to Buy
                    <ChevronRight size={16} />
                  </a>
                </div>
              </ScrollReveal>

              {/* Quick trust signals */}
              <ScrollReveal variant="fadeUp" delay={400}>
                <div style={{ display: "flex", gap: 24, marginTop: 40, flexWrap: "wrap" }}>
                  {[
                    { icon: CheckCircle2, text: "Direct Importer" },
                    { icon: CheckCircle2, text: "Sold Per Kilo" },
                    { icon: CheckCircle2, text: "Safe & Quality Toys" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <Icon size={16} style={{ color: C.yellow }} />
                      <span style={{ fontSize: 14, color: C.whiteDim, fontWeight: 500 }}>{text}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* RIGHT — Hero Visual Collage */}
            <ScrollReveal variant="fadeLeft" delay={200}>
              <div style={{ position: "relative" }}>
                {/* Main large image */}
                <div
                  style={{
                    borderRadius: 20, overflow: "hidden",
                    border: `2px solid ${C.whiteGhostDark}`,
                    boxShadow: `0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px ${C.whiteGhostDark}`,
                  }}
                >
                  <img
                    src={bp("/toyzoona-importer/toys-1.jpg")}
                    alt="Toyzoona toys per kilo"
                    style={{ width: "100%", height: 420, objectFit: "cover", display: "block" }}
                  />
                  {/* TV badge overlay */}
                  <div
                    style={{
                      position: "absolute", top: 20, right: 20,
                      display: "flex", alignItems: "center", gap: 8,
                      backgroundColor: C.yellow, color: C.navy,
                      fontWeight: 900, fontSize: 13, padding: "10px 16px",
                      borderRadius: 40, letterSpacing: "0.04em",
                      boxShadow: `0 4px 20px rgba(0,0,0,0.4)`,
                    }}
                  >
                    <Tv size={14} />
                    TV5 FEATURED
                  </div>
                </div>

                {/* Floating stats card */}
                <div
                  style={{
                    position: "absolute", bottom: -24, left: -24,
                    backgroundColor: C.navyMid,
                    border: `1px solid ${C.whiteGhostDark}`,
                    borderRadius: 16, padding: "18px 24px",
                    boxShadow: "0 16px 40px rgba(0,0,0,0.5)",
                    display: "flex", gap: 24,
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 26, fontWeight: 900, color: C.yellow }}>1st</div>
                    <div style={{ fontSize: 11, color: C.whiteDim, fontWeight: 600 }}>IN THE SOUTH</div>
                  </div>
                  <div style={{ width: 1, backgroundColor: C.whiteGhostDark }} />
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 26, fontWeight: 900, color: C.orange }}>TV5</div>
                    <div style={{ fontSize: 11, color: C.whiteDim, fontWeight: 600 }}>NATIONAL TV</div>
                  </div>
                  <div style={{ width: 1, backgroundColor: C.whiteGhostDark }} />
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 26, fontWeight: 900, color: C.red }}>PH</div>
                    <div style={{ fontSize: 11, color: C.whiteDim, fontWeight: 600 }}>SHIPS NATIONWIDE</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 2 — STATS BAR
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          position: "relative", zIndex: 1,
          borderTop: `1px solid ${C.whiteGhostDark}`,
          borderBottom: `1px solid ${C.whiteGhostDark}`,
          background: `linear-gradient(90deg, ${C.navyMid}, rgba(26,26,46,0.6), ${C.navyMid})`,
          padding: "32px 0",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }}>
            {stats.map((s, i) => (
              <div
                key={i}
                style={{
                  textAlign: "center", padding: "8px 16px",
                  borderRight: i < stats.length - 1 ? `1px solid ${C.whiteGhostDark}` : "none",
                }}
              >
                <div
                  style={{
                    fontSize: 36, fontWeight: 900, lineHeight: 1,
                    background: `linear-gradient(135deg, ${C.red}, ${C.yellow})`,
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, color: C.whiteOff, marginTop: 4 }}>{s.label}</div>
                <div style={{ fontSize: 11, color: C.whiteDim, marginTop: 2 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 3 — TV5 SHOWCASE (HERO FEATURE)
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ position: "relative", zIndex: 1, padding: "100px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>

          {/* Section header */}
          <ScrollReveal variant="fadeUp">
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <div
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  backgroundColor: C.yellow, color: C.navy,
                  fontWeight: 800, fontSize: 12, padding: "8px 18px",
                  borderRadius: 40, letterSpacing: "0.08em",
                  marginBottom: 20,
                }}
              >
                <Tv size={13} />
                AS SEEN ON NATIONAL TELEVISION
              </div>
              <h2
                style={{
                  fontSize: "clamp(32px, 4vw, 54px)",
                  fontWeight: 900, lineHeight: 1.1,
                  letterSpacing: "-0.02em", marginBottom: 16,
                }}
              >
                TV5 Showcase
              </h2>
              <p style={{ fontSize: 17, color: C.whiteDim, maxWidth: 540, margin: "0 auto" }}>
                Toyzoona Importer was featured on <strong style={{ color: C.yellow }}>national television on TV5</strong> — bringing the unique toys-per-kilo concept to millions of Filipino viewers.
              </p>
            </div>
          </ScrollReveal>

          {/* TV Photos Grid — featured layout */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {/* Main feature — large left */}
            <ScrollReveal variant="fadeRight" delay={0} className="w-full">
              <div
                style={{
                  position: "relative", borderRadius: 20, overflow: "hidden",
                  border: `2px solid rgba(255,215,0,0.3)`,
                  boxShadow: `0 0 60px rgba(255,215,0,0.12), 0 24px 60px rgba(0,0,0,0.5)`,
                }}
              >
                <img
                  src={bp("/toyzoona-importer/tv-5.jpg")}
                  alt="Toyzoona on TV5"
                  style={{ width: "100%", height: 460, objectFit: "cover", display: "block" }}
                />
                <div
                  style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(15,15,26,0.85) 0%, transparent 50%)",
                  }}
                />
                <div style={{ position: "absolute", bottom: 24, left: 24, right: 24 }}>
                  <div
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 6,
                      backgroundColor: C.yellow, color: C.navy,
                      fontWeight: 800, fontSize: 12, padding: "6px 14px",
                      borderRadius: 40, marginBottom: 10, letterSpacing: "0.06em",
                    }}
                  >
                    <Tv size={11} />
                    TV5 · NATIONAL TV
                  </div>
                  <p style={{ fontSize: 18, fontWeight: 700, color: C.whitePure, margin: 0 }}>
                    Featured: Toys Per Kilo Revolution
                  </p>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", marginTop: 4 }}>
                    National broadcast spotlight on Toyzoona Importer
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right column — 2x2 grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {tvPhotos.slice(0, 4).map((photo, i) => (
                <ScrollReveal key={i} variant="fadeLeft" delay={i * 80} className="w-full">
                  <div
                    style={{
                      position: "relative", borderRadius: 14, overflow: "hidden",
                      border: `1px solid ${C.whiteGhostDark}`,
                      boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                    }}
                  >
                    <img
                      src={bp(photo.src)}
                      alt={photo.caption}
                      style={{ width: "100%", height: 215, objectFit: "cover", display: "block" }}
                    />
                    <div
                      style={{
                        position: "absolute", inset: 0,
                        background: "linear-gradient(to top, rgba(15,15,26,0.8) 0%, transparent 55%)",
                      }}
                    />
                    <div style={{ position: "absolute", bottom: 12, left: 12, right: 12 }}>
                      <span
                        style={{
                          display: "inline-flex", alignItems: "center", gap: 4,
                          backgroundColor: "rgba(255,215,0,0.9)", color: C.navy,
                          fontWeight: 800, fontSize: 10, padding: "4px 10px",
                          borderRadius: 40, letterSpacing: "0.06em",
                        }}
                      >
                        <Tv size={9} />
                        TV5
                      </span>
                      <p style={{ fontSize: 11, color: "rgba(255,255,255,0.8)", margin: "6px 0 0" }}>
                        {photo.caption}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* TV Call-to-action strip */}
          <ScrollReveal variant="fadeUp" delay={200}>
            <div
              style={{
                marginTop: 40,
                background: `linear-gradient(135deg, rgba(255,215,0,0.1), rgba(232,53,10,0.1))`,
                border: `1px solid rgba(255,215,0,0.2)`,
                borderRadius: 16, padding: "24px 32px",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                flexWrap: "wrap", gap: 16,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 48, height: 48, borderRadius: "50%",
                    backgroundColor: C.yellow, display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  <Tv size={22} color={C.navy} />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 16, color: C.whitePure }}>
                    Seen on National TV — Trusted by Millions
                  </div>
                  <div style={{ fontSize: 13, color: C.whiteDim }}>
                    TV5 featured Toyzoona Importer's unique per-kilo toy concept, validating us as a pioneer.
                  </div>
                </div>
              </div>
              <a
                href={FACEBOOK_GROUP}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  backgroundColor: C.yellow, color: C.navy,
                  textDecoration: "none", padding: "12px 24px",
                  borderRadius: 10, fontWeight: 800, fontSize: 14,
                  flexShrink: 0, transition: "transform 200ms",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <Facebook size={15} />
                Join Our Group
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 4 — PRODUCT GALLERY (TOYS PER KILO)
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          position: "relative", zIndex: 1,
          padding: "100px 0",
          background: `linear-gradient(180deg, transparent, rgba(26,26,46,0.4), transparent)`,
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>

          <ScrollReveal variant="fadeUp">
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 56, flexWrap: "wrap", gap: 24 }}>
              <div>
                <div
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    backgroundColor: `${C.red}22`, color: C.orange,
                    fontWeight: 700, fontSize: 12, padding: "6px 14px",
                    borderRadius: 40, letterSpacing: "0.07em", marginBottom: 16,
                    border: `1px solid ${C.red}33`,
                  }}
                >
                  <Package size={11} />
                  OUR PRODUCTS
                </div>
                <h2
                  style={{
                    fontSize: "clamp(28px, 3.5vw, 46px)",
                    fontWeight: 900, lineHeight: 1.1,
                    letterSpacing: "-0.02em", margin: 0,
                  }}
                >
                  Toys By The Kilo —<br />
                  <span
                    style={{
                      background: `linear-gradient(135deg, ${C.orange}, ${C.yellow})`,
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Direct from UK & China
                  </span>
                </h2>
              </div>
              <p style={{ fontSize: 16, color: C.whiteDim, maxWidth: 360, lineHeight: 1.6 }}>
                No overpriced retail markup. Get premium imported toys at wholesale pricing — sold by the kilo for maximum value.
              </p>
            </div>
          </ScrollReveal>

          {/* Toy photo grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {toys.map((toy, i) => (
              <ScrollReveal key={i} variant="fadeUp" delay={i * 80} className="w-full">
                <div
                  style={{
                    position: "relative", borderRadius: 16, overflow: "hidden",
                    border: `1px solid ${C.whiteGhostDark}`,
                    cursor: "pointer",
                    transition: "transform 250ms, box-shadow 250ms",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-6px) scale(1.01)";
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px ${C.orange}44`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0) scale(1)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.4)";
                  }}
                >
                  <img
                    src={bp(toy.src)}
                    alt={toy.label}
                    style={{ width: "100%", height: 280, objectFit: "cover", display: "block" }}
                  />
                  <div
                    style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(to top, rgba(15,15,26,0.9) 0%, transparent 55%)",
                    }}
                  />
                  <div style={{ position: "absolute", bottom: 16, left: 16, right: 16 }}>
                    <span
                      style={{
                        display: "inline-block",
                        backgroundColor: `${C.orange}CC`, color: C.whitePure,
                        fontWeight: 800, fontSize: 12, padding: "5px 12px",
                        borderRadius: 40, letterSpacing: "0.05em",
                      }}
                    >
                      {toy.label}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Per-kilo proposition strip */}
          <ScrollReveal variant="fadeUp" delay={200}>
            <div
              style={{
                marginTop: 48, padding: "36px",
                background: `linear-gradient(135deg, ${C.red}15, ${C.orange}10, ${C.yellow}08)`,
                border: `1px solid ${C.red}25`,
                borderRadius: 20,
                display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32, textAlign: "center",
              }}
            >
              {[
                { icon: Package, label: "Sold Per Kilo", desc: "Buy as much or as little as you want — priced by weight for ultimate value", color: C.red },
                { icon: ShoppingBag, label: "UK & China Direct", desc: "Imported directly — no middlemen, better prices, exclusive toy collections", color: C.orange },
                { icon: Truck, label: "Ships Nationwide", desc: "Delivered to your doorstep anywhere in the Philippines — fast and reliable", color: C.yellow },
              ].map(({ icon: Icon, label, desc, color }, i) => (
                <div key={i}>
                  <div
                    style={{
                      width: 52, height: 52, borderRadius: "50%",
                      backgroundColor: `${color}20`, border: `1px solid ${color}30`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      margin: "0 auto 14px",
                    }}
                  >
                    <Icon size={22} style={{ color }} />
                  </div>
                  <div style={{ fontWeight: 800, fontSize: 16, color: C.whitePure, marginBottom: 8 }}>{label}</div>
                  <div style={{ fontSize: 13, color: C.whiteDim, lineHeight: 1.6 }}>{desc}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 5 — TOYFAIR CREDIBILITY
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ position: "relative", zIndex: 1, padding: "100px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

            {/* LEFT — Copy */}
            <ScrollReveal variant="fadeRight">
              <div>
                <div
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    backgroundColor: "rgba(139,92,246,0.15)", color: "#A78BFA",
                    fontWeight: 700, fontSize: 12, padding: "6px 14px",
                    borderRadius: 40, letterSpacing: "0.07em", marginBottom: 20,
                    border: "1px solid rgba(139,92,246,0.25)",
                  }}
                >
                  <Trophy size={11} />
                  TOYFAIR PARTICIPANT
                </div>
                <h2
                  style={{
                    fontSize: "clamp(28px, 3vw, 44px)",
                    fontWeight: 900, lineHeight: 1.15,
                    letterSpacing: "-0.02em", marginBottom: 20,
                  }}
                >
                  Proudly Representing <br />
                  <span
                    style={{
                      background: `linear-gradient(135deg, ${C.red}, ${C.orange})`,
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    at Major Toyfairs
                  </span>
                </h2>
                <p style={{ fontSize: 16, color: C.whiteDim, lineHeight: 1.7, marginBottom: 28 }}>
                  Toyzoona Importer actively participates in the biggest toy industry events in the Philippines — showcasing our per-kilo concept to thousands of toy enthusiasts, resellers, and families.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    "Pioneer per-kilo toy concept at national events",
                    "Connecting directly with resellers & wholesalers",
                    "Showcasing UK & China imported collections",
                    "Building the biggest toy buyer community in the South",
                  ].map((point, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <CheckCircle2 size={16} style={{ color: C.yellow, marginTop: 2, flexShrink: 0 }} />
                      <span style={{ fontSize: 14, color: C.whiteDim, lineHeight: 1.5 }}>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* RIGHT — Photo grid */}
            <ScrollReveal variant="fadeLeft">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                {toyfairPhotos.map((photo, i) => (
                  <div
                    key={i}
                    style={{
                      borderRadius: 14, overflow: "hidden",
                      border: `1px solid ${C.whiteGhostDark}`,
                      boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                      transform: i % 2 === 0 ? "rotate(-1deg)" : "rotate(1deg)",
                    }}
                  >
                    <img
                      src={bp(photo.src)}
                      alt={`Toyfair ${i + 1}`}
                      style={{ width: "100%", height: 180, objectFit: "cover", display: "block" }}
                    />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 6 — WHY TOYZOONA
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          position: "relative", zIndex: 1,
          padding: "100px 0",
          backgroundColor: `${C.navyMid}80`,
          borderTop: `1px solid ${C.whiteGhostDark}`,
          borderBottom: `1px solid ${C.whiteGhostDark}`,
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <ScrollReveal variant="fadeUp">
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <div
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  backgroundColor: `${C.orange}20`, color: C.orange,
                  fontWeight: 700, fontSize: 12, padding: "6px 14px",
                  borderRadius: 40, letterSpacing: "0.07em", marginBottom: 16,
                  border: `1px solid ${C.orange}33`,
                }}
              >
                <Sparkles size={11} />
                WHY CHOOSE US
              </div>
              <h2
                style={{
                  fontSize: "clamp(28px, 3.5vw, 46px)",
                  fontWeight: 900, lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                }}
              >
                Why Toyzoona Importer?
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {reasons.map(({ icon: Icon, title, desc }, i) => (
              <ScrollReveal key={i} variant="fadeUp" delay={i * 80} className="w-full">
                <div
                  style={{
                    backgroundColor: C.navyCard,
                    border: `1px solid ${C.whiteGhostDark}`,
                    borderRadius: 16, padding: "28px 24px",
                    transition: "transform 250ms, border-color 250ms",
                    height: "100%",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLElement).style.borderColor = `${C.orange}40`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.borderColor = C.whiteGhostDark;
                  }}
                >
                  <div
                    style={{
                      width: 48, height: 48, borderRadius: 12,
                      background: `linear-gradient(135deg, ${C.red}30, ${C.orange}20)`,
                      border: `1px solid ${C.red}30`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: 16,
                    }}
                  >
                    <Icon size={22} style={{ color: C.orange }} />
                  </div>
                  <h3 style={{ fontWeight: 800, fontSize: 17, marginBottom: 8, color: C.whitePure }}>{title}</h3>
                  <p style={{ fontSize: 14, color: C.whiteDim, lineHeight: 1.6, margin: 0 }}>{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 7 — HOW TO BUY
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="how-to-buy" style={{ position: "relative", zIndex: 1, padding: "100px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>

          <ScrollReveal variant="fadeUp">
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <div
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  backgroundColor: `${C.yellow}15`, color: C.yellow,
                  fontWeight: 700, fontSize: 12, padding: "6px 14px",
                  borderRadius: 40, letterSpacing: "0.07em", marginBottom: 16,
                  border: `1px solid ${C.yellow}25`,
                }}
              >
                <ShoppingBag size={11} />
                HOW TO BUY
              </div>
              <h2
                style={{
                  fontSize: "clamp(28px, 3.5vw, 46px)",
                  fontWeight: 900, lineHeight: 1.15,
                  letterSpacing: "-0.02em", marginBottom: 16,
                }}
              >
                4 Ways to Get Your Toys
              </h2>
              <p style={{ fontSize: 17, color: C.whiteDim, maxWidth: 480, margin: "0 auto" }}>
                Choose how you want to shop — online, in-person, or at auction. We make it easy.
              </p>
            </div>
          </ScrollReveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {howToBuy.map((method, i) => {
              const Icon = method.icon;
              return (
                <ScrollReveal key={i} variant="fadeUp" delay={i * 80} className="w-full">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: C.navyCard,
                      border: `1px solid ${C.whiteGhostDark}`,
                      borderRadius: 20, padding: "32px 28px",
                      overflow: "hidden",
                      transition: "transform 250ms, border-color 250ms",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                      (e.currentTarget as HTMLElement).style.borderColor = `${method.color}50`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                      (e.currentTarget as HTMLElement).style.borderColor = C.whiteGhostDark;
                    }}
                  >
                    {/* Step number background */}
                    <div
                      style={{
                        position: "absolute", top: 20, right: 24,
                        fontSize: 72, fontWeight: 900, lineHeight: 1,
                        color: `${method.color}08`,
                        userSelect: "none",
                      }}
                    >
                      {method.step}
                    </div>

                    <div style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
                      <div
                        style={{
                          width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                          background: `${method.color}20`,
                          border: `1px solid ${method.color}30`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}
                      >
                        <Icon size={24} style={{ color: method.color }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                          <h3 style={{ fontWeight: 800, fontSize: 18, margin: 0, color: C.whitePure }}>{method.title}</h3>
                          <span
                            style={{
                              backgroundColor: `${method.color}25`,
                              color: method.color,
                              fontSize: 11, fontWeight: 700,
                              padding: "3px 10px", borderRadius: 40,
                              letterSpacing: "0.04em",
                            }}
                          >
                            {method.badge}
                          </span>
                        </div>
                        <p style={{ fontSize: 14, color: C.whiteDim, lineHeight: 1.6, margin: 0 }}>{method.desc}</p>
                        {method.link && (
                          <a
                            href={method.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: "inline-flex", alignItems: "center", gap: 6,
                              color: method.color, textDecoration: "none",
                              fontSize: 13, fontWeight: 700, marginTop: 12,
                              transition: "gap 200ms",
                            }}
                          >
                            Join the Group <ArrowRight size={13} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Schedule quick-reference */}
          <ScrollReveal variant="fadeUp" delay={200}>
            <div
              style={{
                marginTop: 40, padding: "28px 32px",
                background: `${C.navyMid}80`,
                border: `1px solid ${C.whiteGhostDark}`,
                borderRadius: 16,
                display: "flex", gap: 32, flexWrap: "wrap", justifyContent: "center",
              }}
            >
              {[
                { icon: Clock, label: "Live Selling", time: "Mon–Sat 9AM–6:30PM", color: C.orange },
                { icon: Warehouse, label: "Warehouse", time: "Mon–Sat 9AM–6:30PM", color: C.red },
                { icon: ShoppingBag, label: "Auction", time: "Every Saturday 10AM", color: C.yellow },
              ].map(({ icon: Icon, label, time, color }, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Icon size={16} style={{ color }} />
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: C.whitePure }}>{label}</div>
                    <div style={{ fontSize: 12, color: C.whiteDim }}>{time}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 8 — FINAL CTA
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          position: "relative", zIndex: 1,
          padding: "100px 0",
          overflow: "hidden",
        }}
      >
        {/* Background flame effect */}
        <div
          style={{
            position: "absolute", inset: 0,
            background: `radial-gradient(ellipse at center, rgba(232,53,10,0.2) 0%, rgba(255,107,53,0.1) 40%, transparent 70%)`,
          }}
        />
        <div
          style={{
            position: "absolute", bottom: 0, left: "50%",
            transform: "translateX(-50%)",
            width: 800, height: 400,
            background: `radial-gradient(ellipse at bottom, rgba(255,215,0,0.15) 0%, transparent 70%)`,
          }}
        />

        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px", position: "relative", textAlign: "center" }}>
          <ScrollReveal variant="scale" delay={0}>
            <div
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                backgroundColor: C.yellow, color: C.navy,
                fontWeight: 800, fontSize: 13, padding: "8px 18px",
                borderRadius: 40, marginBottom: 28, letterSpacing: "0.05em",
              }}
            >
              <Zap size={14} />
              JOIN THE MOVEMENT
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={100}>
            <h2
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 900, lineHeight: 1.05,
                letterSpacing: "-0.025em", marginBottom: 24,
              }}
            >
              Ready to Shop <br />
              <span
                style={{
                  background: `linear-gradient(135deg, ${C.red} 0%, ${C.orange} 50%, ${C.yellow} 100%)`,
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Toys Per Kilo?
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={200}>
            <p style={{ fontSize: 18, color: C.whiteDim, marginBottom: 44, lineHeight: 1.7 }}>
              Join thousands of happy customers and resellers in our exclusive Facebook group. Get live updates, flash sales, and exclusive member deals — all for free.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={300}>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href={FACEBOOK_GROUP}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 12,
                  background: `linear-gradient(135deg, ${C.red}, ${C.orange})`,
                  color: C.whitePure, textDecoration: "none",
                  padding: "20px 40px", borderRadius: 14,
                  fontWeight: 900, fontSize: 18,
                  boxShadow: `0 8px 40px rgba(232,53,10,0.4), 0 0 0 1px rgba(255,107,53,0.3)`,
                  transition: "transform 200ms, box-shadow 200ms",
                  letterSpacing: "-0.01em",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px) scale(1.02)";
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 60px rgba(232,53,10,0.5), 0 0 0 1px rgba(255,107,53,0.4)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0) scale(1)";
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px rgba(232,53,10,0.4), 0 0 0 1px rgba(255,107,53,0.3)`;
                }}
              >
                <Facebook size={22} />
                Join Facebook Group
                <ArrowRight size={18} />
              </a>
            </div>
          </ScrollReveal>

          {/* Social proof micro-copy */}
          <ScrollReveal variant="fadeUp" delay={400}>
            <div
              style={{
                marginTop: 36, display: "flex", alignItems: "center",
                justifyContent: "center", gap: 24, flexWrap: "wrap",
              }}
            >
              {[
                { icon: Star, text: "As Seen on TV5" },
                { icon: Trophy, text: "Toyfair Participant" },
                { icon: Truck, text: "Ships Nationwide" },
                { icon: Package, text: "Direct Importer" },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <Icon size={14} style={{ color: C.yellow }} />
                  <span style={{ fontSize: 13, color: C.whiteDim, fontWeight: 600 }}>{text}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FOOTER STRIP ────────────────────────────────────────────────────── */}
      <footer
        style={{
          position: "relative", zIndex: 1,
          borderTop: `1px solid ${C.whiteGhostDark}`,
          padding: "32px 24px",
          background: C.navyDeep,
        }}
      >
        <div
          style={{
            maxWidth: 1280, margin: "0 auto",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img
              src={bp("/logos/toyzoona-importer.jpg")}
              alt="Toyzoona Importer"
              style={{ height: 32, width: 32, objectFit: "contain", borderRadius: 6 }}
            />
            <div>
              <div style={{ fontWeight: 800, fontSize: 14, color: C.whitePure }}>Toyzoona Importer</div>
              <div style={{ fontSize: 11, color: C.whiteDim }}>Part of Pring Group of Companies</div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a
              href={FACEBOOK_GROUP}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: 6, color: C.whiteDim, textDecoration: "none", fontSize: 13 }}
            >
              <Facebook size={14} />
              Facebook Group
            </a>
            <Link
              href="/"
              style={{ color: C.whiteDim, textDecoration: "none", fontSize: 13 }}
            >
              Pring Group
            </Link>
          </div>

          <div style={{ fontSize: 12, color: `${C.whiteDim}80` }}>
            © 2025 Pring Group of Companies · Cabuyao, Laguna
          </div>
        </div>
      </footer>
    </main>
  );
}
