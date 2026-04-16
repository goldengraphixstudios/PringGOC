import Image from "@/components/Img";
import Link from "next/link";
import { notFound } from "next/navigation";
import { businesses, getBusinessBySlug } from "@/data/businesses";
import {
  ArrowLeft,
  ExternalLink,
  MapPin,
  ArrowRight,
  Facebook,
  CheckCircle2,
  Layers,
  Star,
  ChevronRight,
  Package,
  ShoppingBag,
  Warehouse,
  Gavel,
  Users,
  Mail,
  Globe,
  Navigation,
  Clock,
  Tv,
  Trophy,
} from "lucide-react";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedBackground from "@/components/AnimatedBackground";
import BusinessNavArrows from "@/components/BusinessNavArrows";

export function generateStaticParams() {
  return businesses.map((biz) => ({ slug: biz.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const biz = getBusinessBySlug(slug);
  if (!biz) return { title: "Not Found" };
  return {
    title: `${biz.name} | Pring Group of Companies`,
    description: `${biz.tagline} — ${biz.description}`,
  };
}

export default async function BusinessPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const biz = getBusinessBySlug(slug);
  if (!biz) notFound();

  const currentIndex = businesses.findIndex((b) => b.slug === slug);
  const prevBiz = currentIndex > 0 ? businesses[currentIndex - 1] : null;
  const nextBiz =
    currentIndex < businesses.length - 1 ? businesses[currentIndex + 1] : null;

  const relatedBusinesses = businesses
    .filter((b) => b.category === biz.category && b.slug !== biz.slug)
    .slice(0, 3);

  const isDark = biz.theme === "dark";
  const primary = biz.colors[0];
  const accent = biz.colors[1] || biz.colors[0];
  const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const tertiary = biz.colors[2] || accent;

  // Compute readable text colors for light/dark themes
  const bgBase = isDark ? "#050D1A" : "#FAFAF8";
  const textPrimary = isDark ? "#FFFFFF" : "#1A1A1A";
  const textSecondary = isDark ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.55)";
  const textTertiary = isDark ? "rgba(255,255,255,0.30)" : "rgba(0,0,0,0.30)";
  const surfaceBg = isDark ? "rgba(15,32,53,0.5)" : "rgba(255,255,255,0.8)";
  const surfaceBorder = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.08)";
  const cardBg = isDark ? "rgba(15,32,53,0.6)" : "rgba(255,255,255,0.9)";
  const navBg = isDark ? "rgba(5,13,26,0.8)" : "rgba(250,250,248,0.85)";

  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: bgBase, color: textPrimary }}
    >
      {/* ===== FLOATING BUSINESS NAV ARROWS ===== */}
      <BusinessNavArrows currentSlug={slug} />

      {/* ===== ANIMATED BACKGROUND ===== */}
      {isDark ? (
        <AnimatedBackground colors={[accent, primary, tertiary]} orbCount={5} variant="dark" />
      ) : (
        <div className="pointer-events-none fixed inset-0 z-0">
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(180deg, ${bgBase} 0%, #F0EDE6 100%)` }}
          />
          <div
            className="absolute top-[-15%] right-[-10%] h-[600px] w-[600px] rounded-full blur-[150px]"
            style={{ backgroundColor: `${primary}08` }}
          />
          <div
            className="absolute bottom-[-10%] left-[-5%] h-[400px] w-[400px] rounded-full blur-[120px]"
            style={{ backgroundColor: `${accent}06` }}
          />
          {/* Subtle grid for light theme */}
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `linear-gradient(${primary}40 1px, transparent 1px), linear-gradient(90deg, ${primary}40 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
            }}
          />
        </div>
      )}

      {/* ===== NAVIGATION ===== */}
      <nav
        className="fixed top-0 right-0 left-0 z-50 backdrop-blur-xl"
        style={{
          backgroundColor: navBg,
          borderBottom: `1px solid ${surfaceBorder}`,
        }}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link
            href="/"
            className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-70"
            style={{ color: textSecondary }}
          >
            <ArrowLeft className="h-4 w-4" />
            <Image
              src="/logos/pring-group.png"
              alt="Pring Group"
              width={32}
              height={32}
              className="rounded"
            />
            <span className="hidden text-sm sm:inline">Pring Group</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold" style={{ color: textPrimary }}>
              {biz.name}
            </span>
            <a
              href={biz.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:opacity-80"
              style={{
                backgroundColor: `${primary}15`,
                color: isDark ? accent : primary,
                border: `1px solid ${primary}20`,
              }}
            >
              <Facebook className="h-4 w-4" />
              <span className="hidden sm:inline">Follow</span>
            </a>
          </div>
        </div>
      </nav>

      {/* ===== HERO — varies by heroStyle ===== */}
      <section className="relative z-10 px-6 pt-24 pb-16">
        {/* Top accent gradient */}
        <div className="absolute top-16 right-0 left-0 h-[2px] overflow-hidden">
          <div
            className="h-full w-full"
            style={{
              background: `linear-gradient(90deg, transparent, ${accent}, ${primary}, ${tertiary}, transparent)`,
            }}
          />
        </div>

        {biz.heroStyle === "centered" && (
          <div className="mx-auto flex min-h-[65vh] max-w-4xl flex-col items-center justify-center text-center">
            <ScrollReveal variant="scale">
              <div className="relative mb-8 inline-block">
                <div
                  className="absolute -inset-6 rounded-3xl blur-3xl"
                  style={{ backgroundColor: `${primary}12` }}
                />
                <div
                  className="relative flex h-32 w-32 items-center justify-center rounded-3xl p-4"
                  style={{
                    backgroundColor: cardBg,
                    border: `1px solid ${surfaceBorder}`,
                    backdropFilter: "blur(20px)",
                  }}
                >
                  <Image
                    src={biz.logo}
                    alt={biz.name}
                    width={96}
                    height={96}
                    className="rounded-2xl object-contain"
                    priority
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={100}>
              <p
                className="mb-3 text-sm font-semibold tracking-[0.15em] uppercase"
                style={{ color: isDark ? accent : primary }}
              >
                {biz.category}
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={200}>
              <h1 className="mb-4 font-[family-name:var(--font-heading)] text-5xl font-bold leading-[1.1] md:text-7xl">
                {biz.name}
              </h1>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={300}>
              <p
                className="mb-3 font-[family-name:var(--font-heading)] text-xl italic md:text-2xl"
                style={{ color: isDark ? accent : primary }}
              >
                {biz.tagline}
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={400}>
              <p className="mx-auto mb-10 max-w-xl text-lg" style={{ color: textSecondary }}>
                {biz.description}
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={500}>
              <a
                href={biz.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex cursor-pointer items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold transition-all duration-300 hover:shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${primary}, ${accent})`,
                  color: isDark ? "#fff" : "#fff",
                  boxShadow: `0 4px 20px ${primary}30`,
                }}
              >
                Visit Facebook Page
                <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </ScrollReveal>
          </div>
        )}

        {biz.heroStyle === "split" && (
          <div className="mx-auto flex min-h-[75vh] max-w-6xl items-center">
            <div className="grid w-full items-center gap-10 md:grid-cols-2">
              {/* ── LEFT: Text Content ── */}
              <div>
                {/* Logo mark */}
                <ScrollReveal variant="fadeRight">
                  <div className="mb-6 flex items-center gap-4">
                    <div
                      className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl p-1.5"
                      style={{ backgroundColor: `${accent}18`, border: `1px solid ${accent}30` }}
                    >
                      <Image src={biz.logo} alt={biz.name} width={44} height={44} className="rounded-xl object-contain" priority />
                    </div>
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: isDark ? accent : primary }}>
                      {biz.category}{biz.location && ` · ${biz.location}`}
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal variant="fadeRight" delay={100}>
                  <h1
                    className="mb-3 font-[family-name:var(--font-heading)] text-6xl font-bold leading-[1.05] md:text-7xl"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {biz.name}
                  </h1>
                </ScrollReveal>

                <ScrollReveal variant="fadeRight" delay={180}>
                  <p
                    className="mb-6 font-[family-name:var(--font-heading)] text-2xl italic"
                    style={{ color: isDark ? accent : primary }}
                  >
                    {biz.tagline}
                  </p>
                </ScrollReveal>

                <ScrollReveal variant="fadeRight" delay={260}>
                  <p className="mb-8 max-w-md text-base leading-relaxed" style={{ color: textSecondary }}>
                    {biz.description}
                  </p>
                </ScrollReveal>

                <ScrollReveal variant="fadeRight" delay={340}>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={biz.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex cursor-pointer items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:shadow-xl hover:brightness-110"
                      style={{
                        background: `linear-gradient(135deg, ${accent}, ${primary})`,
                        color: "#0A0A0A",
                        boxShadow: `0 4px 24px ${accent}40`,
                      }}
                    >
                      Shop Now
                      <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                    {biz.shipsNationwide && (
                      <span className="flex items-center gap-1.5 rounded-full px-4 py-3.5 text-xs font-semibold" style={{ backgroundColor: "#dcfce7", color: "#15803d", border: "1px solid #bbf7d0" }}>
                        <Package className="h-3.5 w-3.5" /> Ships Nationwide
                      </span>
                    )}
                  </div>
                </ScrollReveal>
              </div>

              {/* ── RIGHT: Video or Logo ── */}
              <ScrollReveal variant="fadeLeft" delay={150}>
                <div className="flex items-center justify-center">
                  <div className="relative w-full max-w-md">
                    {/* Glow ring */}
                    <div
                      className="absolute -inset-6 rounded-[2.5rem] blur-3xl"
                      style={{ backgroundColor: `${accent}18` }}
                    />
                    {/* Gold border frame */}
                    <div
                      className="absolute -inset-[2px] rounded-[2rem]"
                      style={{ background: `linear-gradient(135deg, ${accent}60, transparent, ${accent}40)`, borderRadius: "2rem" }}
                    />
                    {biz.heroVideo ? (
                      <video
                        src={`${BASE}${biz.heroVideo}`}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="relative w-full rounded-[2rem] object-cover"
                        style={{
                          aspectRatio: "9/16",
                          maxHeight: "70vh",
                          border: `1px solid ${accent}25`,
                          backdropFilter: "blur(4px)",
                        }}
                      />
                    ) : (
                      <div
                        className="relative flex h-80 w-full items-center justify-center rounded-[2rem] p-8 backdrop-blur-xl"
                        style={{ backgroundColor: cardBg, border: `1px solid ${surfaceBorder}` }}
                      >
                        <Image src={biz.logo} alt={biz.name} width={220} height={220} className="rounded-2xl object-contain" priority />
                      </div>
                    )}

                    {/* Floating badge: Sold per kilo */}
                    <div
                      className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-5 py-2.5 text-xs font-bold tracking-wider shadow-xl"
                      style={{
                        background: `linear-gradient(135deg, ${accent}, ${primary})`,
                        color: "#0A0A0A",
                        border: `1px solid ${accent}60`,
                      }}
                    >
                      ✦ Sold Per Kilo · Direct Import
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        )}

        {biz.heroStyle === "fullwidth" && (
          <div className="mx-auto flex min-h-[65vh] max-w-6xl flex-col items-center justify-center text-center">
            {/* Large background logo */}
            <div className="relative mb-6">
              <div
                className="absolute -inset-16 rounded-full blur-[100px]"
                style={{ backgroundColor: `${primary}08` }}
              />
              <Image
                src={biz.logo}
                alt={biz.name}
                width={160}
                height={160}
                className="animate-float relative rounded-3xl object-contain drop-shadow-2xl"
                priority
              />
            </div>

            <ScrollReveal variant="fadeUp" delay={100}>
              <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
                <span
                  className="rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase"
                  style={{
                    backgroundColor: `${primary}15`,
                    color: isDark ? accent : primary,
                    border: `1px solid ${primary}20`,
                  }}
                >
                  {biz.category}
                </span>
                {biz.location && (
                  <span className="flex items-center gap-1 text-sm" style={{ color: textTertiary }}>
                    <MapPin className="h-3 w-3" />
                    {biz.location}
                  </span>
                )}
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={200}>
              <h1 className="mb-4 font-[family-name:var(--font-heading)] text-5xl font-bold leading-[1.1] md:text-8xl">
                {biz.name}
              </h1>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={300}>
              <p
                className="mb-3 font-[family-name:var(--font-heading)] text-xl italic md:text-2xl"
                style={{ color: isDark ? accent : primary }}
              >
                {biz.tagline}
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={400}>
              <p className="mx-auto mb-10 max-w-2xl text-lg" style={{ color: textSecondary }}>
                {biz.description}
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={500}>
              <a
                href={biz.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex cursor-pointer items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold transition-all duration-300 hover:shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${primary}, ${accent})`,
                  color: "#fff",
                  boxShadow: `0 4px 20px ${primary}30`,
                }}
              >
                Visit Facebook Page
                <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </ScrollReveal>
          </div>
        )}

        {biz.heroStyle === "diagonal" && (
          <div className="mx-auto flex min-h-[65vh] max-w-6xl items-center">
            <div className="grid w-full items-center gap-8 md:grid-cols-5">
              <div className="md:col-span-3">
                <ScrollReveal variant="fadeRight">
                  <div className="mb-6 flex items-center gap-4">
                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-2xl p-2"
                      style={{
                        backgroundColor: `${primary}15`,
                        border: `1px solid ${primary}20`,
                      }}
                    >
                      <Image
                        src={biz.logo}
                        alt={biz.name}
                        width={48}
                        height={48}
                        className="rounded-xl object-contain"
                        priority
                      />
                    </div>
                    <div>
                      <p
                        className="text-xs font-semibold tracking-[0.15em] uppercase"
                        style={{ color: isDark ? accent : primary }}
                      >
                        {biz.category}
                      </p>
                      {biz.location && (
                        <p className="flex items-center gap-1 text-xs" style={{ color: textTertiary }}>
                          <MapPin className="h-3 w-3" />
                          {biz.location}
                        </p>
                      )}
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal variant="fadeRight" delay={100}>
                  <h1 className="mb-4 font-[family-name:var(--font-heading)] text-5xl font-bold leading-[1.1] md:text-6xl">
                    {biz.name}
                  </h1>
                </ScrollReveal>

                <ScrollReveal variant="fadeRight" delay={200}>
                  <p
                    className="mb-6 font-[family-name:var(--font-heading)] text-xl italic"
                    style={{ color: isDark ? accent : primary }}
                  >
                    {biz.tagline}
                  </p>
                </ScrollReveal>

                <ScrollReveal variant="fadeRight" delay={300}>
                  <p className="mb-8 max-w-lg text-lg leading-relaxed" style={{ color: textSecondary }}>
                    {biz.description}
                  </p>
                </ScrollReveal>

                <ScrollReveal variant="fadeRight" delay={400}>
                  <a
                    href={biz.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex cursor-pointer items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold transition-all duration-300 hover:shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${primary}, ${accent})`,
                      color: "#fff",
                      boxShadow: `0 4px 20px ${primary}30`,
                    }}
                  >
                    Visit Facebook Page
                    <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </ScrollReveal>
              </div>

              <ScrollReveal variant="fadeLeft" delay={200} className="md:col-span-2">
                <div className="flex flex-col gap-3">
                  {biz.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-xl p-4 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
                      style={{
                        backgroundColor: cardBg,
                        border: `1px solid ${surfaceBorder}`,
                      }}
                    >
                      <CheckCircle2
                        className="h-5 w-5 shrink-0"
                        style={{ color: isDark ? accent : primary }}
                      />
                      <span className="text-sm font-medium" style={{ color: textSecondary }}>
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        )}
      </section>

      {/* ===== HERO BADGES (Ships Nationwide / Featured on TV) ===== */}
      {(biz.shipsNationwide || biz.highlights.some(h => h.toLowerCase().includes("television"))) && (
        <div className="relative z-10 px-6 pb-4">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2">
            {biz.shipsNationwide && (
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold tracking-wide"
                style={{ backgroundColor: "#dcfce7", color: "#15803d", border: "1px solid #bbf7d0" }}
              >
                <Package className="h-3.5 w-3.5" /> Ships Nationwide
              </span>
            )}
            {biz.highlights.some(h => h.toLowerCase().includes("television")) && (
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold tracking-wide"
                style={{ backgroundColor: isDark ? "rgba(234,179,8,0.15)" : "#fef9c3", color: isDark ? "#facc15" : "#854d0e", border: isDark ? "1px solid rgba(234,179,8,0.25)" : "1px solid #fef08a" }}
              >
                <Tv className="h-3.5 w-3.5" /> As Seen on National TV
              </span>
            )}
            {biz.highlights.some(h => h.toLowerCase().includes("toyfair") || h.toLowerCase().includes("toy fair")) && (
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold tracking-wide"
                style={{ backgroundColor: isDark ? "rgba(99,102,241,0.15)" : "#ede9fe", color: isDark ? "#a5b4fc" : "#4f46e5", border: isDark ? "1px solid rgba(99,102,241,0.25)" : "1px solid #c4b5fd" }}
              >
                <Trophy className="h-3.5 w-3.5" /> Toyfair Participant
              </span>
            )}
          </div>
        </div>
      )}

      {/* ===== PHOTO GALLERY ===== */}
      {biz.photos && biz.photos.length > 0 && (
        <section
          className="relative z-10 px-6 py-16"
          style={{ borderTop: `1px solid ${surfaceBorder}` }}
        >
          <div className="mx-auto max-w-6xl">
            <ScrollReveal variant="fadeUp">
              <div className="mb-10 text-center">
                <p className="mb-2 text-sm font-semibold tracking-[0.2em] uppercase" style={{ color: isDark ? accent : primary }}>
                  {biz.slug === "lusso" ? "Our Collection" : "Gallery"}
                </p>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold md:text-3xl">
                  {biz.slug === "lusso" ? "Pieces Worth Wearing" : "See It for Yourself"}
                </h2>
              </div>
            </ScrollReveal>

            {/* ── LUSSO luxury boutique grid ── */}
            {biz.slug === "lusso" ? (
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                {biz.photos.map((photo, i) => (
                  <ScrollReveal key={photo} variant="fadeUp" delay={i * 50} className="w-full">
                    {/* padding-bottom trick: ensures height = 133% of width (3:4 ratio) regardless of wrapper */}
                    <div
                      className="group w-full overflow-hidden"
                      style={{
                        borderRadius: "1.25rem",
                        border: `1px solid ${accent}20`,
                        boxShadow: `0 4px 24px rgba(0,0,0,0.4)`,
                        position: "relative",
                        paddingBottom: "133.33%",
                      }}
                    >
                      <Image
                        src={photo}
                        alt={`LUSSO jewelry collection piece ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        style={{ position: "absolute", inset: 0 }}
                      />
                      {/* Gold shimmer overlay on hover */}
                      <div
                        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{ background: `linear-gradient(160deg, ${accent}22 0%, transparent 60%)` }}
                      />
                      {/* Bottom gradient */}
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            ) : (
              /* ── Standard masonry grid for other businesses ── */
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                {biz.photos.map((photo, i) => (
                  <ScrollReveal
                    key={photo}
                    variant="fadeUp"
                    delay={i * 60}
                    className={i === 0 ? "col-span-2 w-full" : "w-full"}
                  >
                    <div
                      className="group w-full overflow-hidden rounded-2xl"
                      style={{ position: "relative", paddingBottom: i === 0 ? "56.25%" : "100%" }}
                    >
                      <Image
                        src={photo}
                        alt={`${biz.name} photo ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 25vw"
                        style={{ position: "absolute", inset: 0 }}
                      />
                      <div
                        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{ background: `linear-gradient(135deg, ${primary}30, transparent)` }}
                      />
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ===== BRANCHES SECTION (AIRPND / RFG) ===== */}
      {biz.branches && biz.branches.length > 0 && (
        <section
          className="relative z-10 px-6 py-16"
          style={{ borderTop: `1px solid ${surfaceBorder}` }}
        >
          <div className="mx-auto max-w-6xl">
            <ScrollReveal variant="fadeUp">
              <div className="mb-10 text-center">
                <p className="mb-3 text-sm font-semibold tracking-[0.15em] uppercase" style={{ color: isDark ? accent : primary }}>
                  {biz.slug === "airpnd" ? "Our Locations" : "Our Branches"}
                </p>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold md:text-3xl">
                  {biz.slug === "airpnd" ? "Available Properties" : "Nationwide Branches"}
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {biz.branches.map((branch, i) => (
                <ScrollReveal key={branch.name} variant="fadeUp" delay={i * 100}>
                  <div
                    className="rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    style={{ backgroundColor: cardBg, border: `1px solid ${surfaceBorder}` }}
                  >
                    <div className="mb-3 flex items-center gap-2">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: `${primary}15` }}>
                        <MapPin className="h-4 w-4" style={{ color: isDark ? accent : primary }} />
                      </div>
                      <h3 className="text-sm font-bold leading-tight">{branch.name}</h3>
                    </div>

                    <p className="mb-3 text-xs leading-relaxed" style={{ color: textSecondary }}>{branch.address}</p>

                    {branch.auctionSchedule && (
                      <div className="mb-3 flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-medium" style={{ backgroundColor: `${primary}10`, color: isDark ? accent : primary }}>
                        <Clock className="h-3.5 w-3.5 shrink-0" />
                        {branch.auctionSchedule}
                      </div>
                    )}

                    {branch.waze && (
                      <div className="flex items-center gap-1.5 text-xs" style={{ color: textTertiary }}>
                        <Navigation className="h-3 w-3 shrink-0" />
                        Waze: {branch.waze}
                      </div>
                    )}

                    {branch.details && branch.details.length > 0 && (
                      <ul className="mt-3 space-y-1">
                        {branch.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-1.5 text-xs" style={{ color: textSecondary }}>
                            <CheckCircle2 className="h-3.5 w-3.5 shrink-0" style={{ color: isDark ? accent : primary }} />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== HOW TO PURCHASE ===== */}
      {biz.purchaseMethods && biz.purchaseMethods.length > 0 && (
        <section
          className="relative z-10 px-6 py-16"
          style={{
            backgroundColor: isDark ? "rgba(10,22,40,0.4)" : "rgba(245,243,238,0.7)",
            borderTop: `1px solid ${surfaceBorder}`,
            borderBottom: `1px solid ${surfaceBorder}`,
          }}
        >
          <div className="mx-auto max-w-6xl">
            <ScrollReveal variant="fadeUp">
              <div className="mb-10 text-center">
                <p className="mb-3 text-sm font-semibold tracking-[0.15em] uppercase" style={{ color: isDark ? accent : primary }}>
                  How to Purchase
                </p>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold md:text-3xl">
                  Ways to Buy From Us
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {biz.purchaseMethods.map((method, i) => {
                const iconMap: Record<string, typeof ShoppingBag> = {
                  "live-selling": Tv,
                  "store-visit": ShoppingBag,
                  "warehouse": Warehouse,
                  "auction": Gavel,
                  "facebook-group": Users,
                  "email": Mail,
                  "online": Globe,
                };
                const Icon = iconMap[method.type] || ShoppingBag;

                return (
                  <ScrollReveal key={method.label} variant="fadeUp" delay={i * 80}>
                    <div
                      className="flex flex-col rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                      style={{ backgroundColor: cardBg, border: `1px solid ${surfaceBorder}` }}
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl" style={{ backgroundColor: `${primary}12` }}>
                        <Icon className="h-5 w-5" style={{ color: isDark ? accent : primary }} />
                      </div>
                      <h3 className="mb-1 text-[15px] font-bold">{method.label}</h3>
                      <p className="mb-2 text-sm font-medium" style={{ color: isDark ? accent : primary }}>{method.schedule}</p>
                      {method.note && (
                        <p className="mt-auto text-xs leading-relaxed" style={{ color: textTertiary }}>{method.note}</p>
                      )}
                      {method.link && (
                        <a
                          href={method.link}
                          target={method.type === "email" ? "_self" : "_blank"}
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 hover:opacity-80"
                          style={{ backgroundColor: `${primary}15`, color: isDark ? accent : primary, border: `1px solid ${primary}20` }}
                        >
                          {method.type === "email" ? "Send Email" : method.type === "facebook-group" ? "Join Group" : "Open Link"}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ===== EXTRA LINKS (e.g. Extreme Gainz form, Toyzoona FB group) ===== */}
      {biz.extraLinks && biz.extraLinks.length > 0 && (
        <section
          className="relative z-10 px-6 py-12"
          style={{ borderBottom: `1px solid ${surfaceBorder}` }}
        >
          <div className="mx-auto max-w-4xl text-center">
            <ScrollReveal variant="fadeUp">
              <p className="mb-5 text-sm font-semibold tracking-[0.15em] uppercase" style={{ color: textTertiary }}>
                Quick Links
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {biz.extraLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex cursor-pointer items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${primary}, ${accent})`,
                      color: "#fff",
                      boxShadow: `0 4px 20px ${primary}25`,
                    }}
                  >
                    {link.label}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ===== SERVICES SECTION ===== */}
      <section
        className="relative z-10 py-24 px-6"
        style={{ borderTop: `1px solid ${surfaceBorder}` }}
      >
        <div className="mx-auto max-w-6xl">
          <ScrollReveal variant="fadeUp">
            <div className="mb-16 text-center">
              <p
                className="mb-3 text-sm font-semibold tracking-[0.15em] uppercase"
                style={{ color: isDark ? accent : primary }}
              >
                What We Offer
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold md:text-4xl">
                Our Services
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {biz.services.map((service, i) => (
              <ScrollReveal key={service} variant="fadeUp" delay={i * 100}>
                <div
                  className="group rounded-2xl p-8 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    backgroundColor: cardBg,
                    border: `1px solid ${surfaceBorder}`,
                  }}
                >
                  <div
                    className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-500 group-hover:scale-110"
                    style={{ backgroundColor: `${primary}12` }}
                  >
                    <Layers
                      className="h-6 w-6"
                      style={{ color: isDark ? accent : primary }}
                    />
                  </div>
                  <h3 className="text-base font-semibold">{service}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHTS / WHY US ===== */}
      {biz.heroStyle !== "diagonal" && (
        <section
          className="relative z-10 py-24 px-6"
          style={{
            backgroundColor: isDark ? "rgba(10,22,40,0.5)" : "rgba(245,243,238,0.8)",
            borderTop: `1px solid ${surfaceBorder}`,
            borderBottom: `1px solid ${surfaceBorder}`,
          }}
        >
          <div className="mx-auto max-w-6xl">
            <ScrollReveal variant="fadeUp">
              <div className="mb-16 text-center">
                <p
                  className="mb-3 text-sm font-semibold tracking-[0.15em] uppercase"
                  style={{ color: isDark ? accent : primary }}
                >
                  Why Choose Us
                </p>
                <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold md:text-4xl">
                  What Sets Us Apart
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid gap-8 md:grid-cols-2">
              {biz.highlights.map((highlight, i) => (
                <ScrollReveal key={highlight} variant={i % 2 === 0 ? "fadeRight" : "fadeLeft"} delay={i * 100}>
                  <div className="flex items-start gap-5">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${primary}12` }}
                    >
                      <Star
                        className="h-5 w-5"
                        style={{ color: isDark ? accent : primary }}
                      />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold">{highlight}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: textSecondary }}>
                        Part of what makes {biz.name} a trusted name under the Pring Group
                        of Companies.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== PART OF PRING GROUP ===== */}
      <section className="relative z-10 py-24 px-6" style={{ borderTop: `1px solid ${surfaceBorder}` }}>
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal variant="scale">
            <Image
              src="/logos/pring-group.png"
              alt="Pring Group"
              width={60}
              height={60}
              className="mx-auto mb-6 rounded"
            />
            <p
              className="mb-3 text-sm font-semibold tracking-[0.15em] uppercase"
              style={{ color: textTertiary }}
            >
              Part of
            </p>
            <h2 className="mb-4 font-[family-name:var(--font-heading)] text-2xl font-bold md:text-3xl">
              Pring Group of Companies
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-base" style={{ color: textSecondary }}>
              {biz.name} is one of 18+ businesses under the Pring Group — a
              family-owned conglomerate building a legacy across the Philippines.
            </p>
            <Link
              href="/"
              className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium transition-all duration-300 hover:gap-3"
              style={{ color: isDark ? "#E8C84A" : primary }}
            >
              Explore All Businesses
              <ChevronRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== RELATED BUSINESSES ===== */}
      {relatedBusinesses.length > 0 && (
        <section
          className="relative z-10 py-24 px-6"
          style={{ borderTop: `1px solid ${surfaceBorder}` }}
        >
          <div className="mx-auto max-w-6xl">
            <ScrollReveal variant="fadeUp">
              <h2 className="mb-10 font-[family-name:var(--font-heading)] text-2xl font-bold">
                More in{" "}
                <span style={{ color: isDark ? accent : primary }}>
                  {biz.category}
                </span>
              </h2>
            </ScrollReveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedBusinesses.map((related, i) => (
                <ScrollReveal key={related.slug} variant="fadeUp" delay={i * 100}>
                  <Link
                    href={`/business/${related.slug}`}
                    className="group block cursor-pointer rounded-2xl p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
                    style={{
                      backgroundColor: cardBg,
                      border: `1px solid ${surfaceBorder}`,
                    }}
                  >
                    <div
                      className="mb-4 flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl p-2 transition-all duration-500 group-hover:scale-110"
                      style={{ backgroundColor: `${related.colors[0]}10` }}
                    >
                      <Image
                        src={related.logo}
                        alt={related.name}
                        width={40}
                        height={40}
                        className="rounded-lg object-contain"
                      />
                    </div>
                    <h3 className="mb-1 font-semibold transition-colors duration-300"
                      style={{ color: textPrimary }}
                    >
                      {related.name}
                    </h3>
                    <p className="mb-1 text-xs font-medium italic" style={{ color: isDark ? accent : primary }}>
                      {related.tagline}
                    </p>
                    {related.location && (
                      <p className="mb-2 flex items-center gap-1 text-xs" style={{ color: textTertiary }}>
                        <MapPin className="h-3 w-3" />
                        {related.location}
                      </p>
                    )}
                    <p className="line-clamp-2 text-sm" style={{ color: textSecondary }}>
                      {related.description}
                    </p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== PREV / NEXT NAVIGATION ===== */}
      <section
        className="relative z-10 py-12 px-6"
        style={{ borderTop: `1px solid ${surfaceBorder}` }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          {prevBiz ? (
            <Link
              href={`/business/${prevBiz.slug}`}
              className="group flex items-center gap-3 transition-all duration-300 hover:gap-4"
              style={{ color: textSecondary }}
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              <div>
                <p className="text-xs" style={{ color: textTertiary }}>Previous</p>
                <p className="text-sm font-medium">{prevBiz.name}</p>
              </div>
            </Link>
          ) : (
            <div />
          )}
          <Link
            href="/"
            className="text-sm transition-colors duration-300 hover:opacity-70"
            style={{ color: textTertiary }}
          >
            All Businesses
          </Link>
          {nextBiz ? (
            <Link
              href={`/business/${nextBiz.slug}`}
              className="group flex items-center gap-3 text-right transition-all duration-300 hover:gap-4"
              style={{ color: textSecondary }}
            >
              <div>
                <p className="text-xs" style={{ color: textTertiary }}>Next</p>
                <p className="text-sm font-medium">{nextBiz.name}</p>
              </div>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer
        className="relative z-10 py-8 px-6"
        style={{ borderTop: `1px solid ${surfaceBorder}` }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logos/pring-group.png"
              alt="Pring Group"
              width={24}
              height={24}
              className="rounded"
            />
            <span className="text-xs" style={{ color: textTertiary }}>
              Pring Group of Companies
            </span>
          </Link>
          <p className="text-xs" style={{ color: textTertiary }}>
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
