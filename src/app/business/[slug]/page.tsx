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
} from "lucide-react";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedBackground from "@/components/AnimatedBackground";

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
          <div className="mx-auto flex min-h-[65vh] max-w-6xl items-center">
            <div className="grid w-full items-center gap-12 md:grid-cols-2">
              <div>
                <ScrollReveal variant="fadeRight">
                  <p
                    className="mb-4 text-sm font-semibold tracking-[0.15em] uppercase"
                    style={{ color: isDark ? accent : primary }}
                  >
                    {biz.category}
                    {biz.location && ` — ${biz.location}`}
                  </p>
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

              <ScrollReveal variant="fadeLeft" delay={200}>
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <div
                      className="absolute -inset-8 rounded-[2rem] blur-3xl"
                      style={{ backgroundColor: `${primary}10` }}
                    />
                    <div
                      className="relative flex h-72 w-72 items-center justify-center rounded-[2rem] p-8 backdrop-blur-xl md:h-80 md:w-80"
                      style={{
                        backgroundColor: cardBg,
                        border: `1px solid ${surfaceBorder}`,
                      }}
                    >
                      <Image
                        src={biz.logo}
                        alt={biz.name}
                        width={220}
                        height={220}
                        className="rounded-2xl object-contain"
                        priority
                      />
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
              {biz.name} is one of 16+ businesses under the Pring Group — a
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
