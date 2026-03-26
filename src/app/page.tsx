import Image from "@/components/Img";
import Link from "next/link";
import { businesses } from "@/data/businesses";
import {
  ArrowRight,
  Building2,
  Users,
  TrendingUp,
  MapPin,
  ChevronDown,
  Facebook,
  Globe,
  Sparkles,
  Crown,
  Star,
  ShieldCheck,
  Zap,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import LoadingScreen from "@/components/LoadingScreen";
import CountUp from "@/components/CountUp";
import PhilippinesMap from "@/components/PhilippinesMap";
import MarqueeBelt from "@/components/MarqueeBelt";

const stats = [
  { value: 16, suffix: "+", label: "Businesses", icon: Building2 },
  { value: 8, suffix: "+", label: "Industries", icon: TrendingUp },
  { value: 6, suffix: "+", label: "Locations", icon: MapPin },
  { value: 1, suffix: "", label: "Family", icon: Users },
];

const categories = [...new Set(businesses.map((b) => b.category))];

const categoryIcons: Record<string, typeof Building2> = {
  "Real Estate": Building2,
  Fitness: Zap,
  "Retail & Auction": Star,
  "Home & Kitchen": ShieldCheck,
  "Fashion & Jewelry": Crown,
  "Books & Education": Sparkles,
  "Cafe & Bookstore": Sparkles,
  "Events & Venues": Globe,
  "Fashion & Apparel": Crown,
  "Toys & Kids": Star,
};

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <LoadingScreen />

      {/* ═══ Page-wide animations ═══ */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
@keyframes heroReveal {
  from { opacity: 0; transform: translateY(32px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes heroLine {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}
@keyframes subtlePan {
  0%, 100% { transform: scale(1.08) translate(0, 0); }
  50% { transform: scale(1.08) translate(-1.5%, -1%); }
}
@keyframes shimmerGold {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
@keyframes floatUp {
  0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
}
@keyframes floatOrb {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -40px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.95); }
}
@keyframes pulseGlow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.05); }
}
@keyframes spinSlow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
@keyframes breathe {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.15; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.3; }
}
.hero-stagger > * {
  opacity: 0;
  animation: heroReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.hero-stagger > *:nth-child(1) { animation-delay: 0.15s; }
.hero-stagger > *:nth-child(2) { animation-delay: 0.3s; }
.hero-stagger > *:nth-child(3) { animation-delay: 0.45s; }
.hero-stagger > *:nth-child(4) { animation-delay: 0.6s; }
.hero-stagger > *:nth-child(5) { animation-delay: 0.75s; }
.hero-stagger > *:nth-child(6) { animation-delay: 0.9s; }
.gold-shimmer {
  background: linear-gradient(135deg, var(--color-gold-500), var(--color-gold-400), var(--color-gold-600), var(--color-gold-500));
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmerGold 5s ease-in-out infinite;
}
.card-glow {
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.35s ease;
}
.card-glow:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 60px rgba(0,0,0,0.08);
}
.industry-pill {
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
.industry-pill:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.06);
  border-color: var(--color-gold-500);
  color: var(--color-navy-900);
}
.stat-card {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.stat-card:hover {
  transform: translateY(-4px);
}
.hero-logo {
  animation: logoFloat 5s ease-in-out infinite, logoReveal 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
}
@keyframes logoFloat {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-8px) rotate(1deg); }
  75% { transform: translateY(4px) rotate(-0.5deg); }
}
@keyframes logoReveal {
  from { opacity: 0; transform: scale(0.7) translateY(20px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
@media (prefers-reduced-motion: reduce) {
  .hero-stagger > * { opacity: 1; animation: none; }
  .gold-shimmer { animation: none; }
}
`,
        }}
      />

      {/* ═══════════════════════════════════════════
          NAVIGATION
      ═══════════════════════════════════════════ */}
      <nav className="glass fixed top-0 right-0 left-0 z-50">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3 transition-opacity duration-200 hover:opacity-80">
            <Image src="/logos/pring-group.png" alt="Pring Group of Companies" width={32} height={32} className="rounded" />
            <span className="font-[family-name:var(--font-heading)] text-sm font-semibold tracking-[0.12em] text-navy-800 uppercase">
              Pring Group
            </span>
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            {[
              { href: "#about", label: "About" },
              { href: "#businesses", label: "Businesses" },
              { href: "#locations", label: "Locations" },
              { href: "#contact", label: "Contact" },
            ].map((link) => (
              <a key={link.href} href={link.href} className="relative cursor-pointer text-[13px] font-medium text-navy-700/80 transition-colors duration-200 hover:text-navy-900">
                {link.label}
              </a>
            ))}
          </div>
          <a href="#businesses" className="hidden cursor-pointer items-center gap-2 rounded-full bg-navy-800 px-5 py-2 text-xs font-semibold text-white transition-all duration-200 hover:bg-navy-700 hover:shadow-lg sm:flex">
            Explore <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════
          HERO — Full-viewport cinematic
      ═══════════════════════════════════════════ */}
      <section className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 pt-20 pb-8">
        {/* BG image — visible */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src="/landing/hero-bg.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ opacity: 0.18, animation: "subtlePan 25s ease-in-out infinite" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-warm-50/40 via-warm-50/70 to-warm-50" />
        </div>

        {/* Ambient glow orbs */}
        <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
          <div
            className="absolute rounded-full"
            style={{ top: "15%", left: "10%", width: 400, height: 400, background: "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)", animation: "floatOrb 18s ease-in-out infinite", filter: "blur(60px)" }}
          />
          <div
            className="absolute rounded-full"
            style={{ top: "50%", right: "5%", width: 350, height: 350, background: "radial-gradient(circle, rgba(27,58,92,0.08) 0%, transparent 70%)", animation: "floatOrb 22s ease-in-out infinite 3s", filter: "blur(50px)" }}
          />
          <div
            className="absolute rounded-full"
            style={{ bottom: "10%", left: "30%", width: 300, height: 300, background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)", animation: "floatOrb 20s ease-in-out infinite 6s", filter: "blur(70px)" }}
          />
        </div>

        {/* Floating particles */}
        <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={`p-${i}`}
              className="absolute rounded-full bg-gold-500"
              style={{
                width: `${2 + (i % 3)}px`,
                height: `${2 + (i % 3)}px`,
                left: `${8 + i * 11}%`,
                bottom: "-10px",
                opacity: 0,
                animation: `floatUp ${12 + i * 3}s linear infinite ${i * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="flex-[1]" />

        <div className="hero-stagger relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Logo — animated */}
          <div className="hero-logo mb-8">
            <Image
              src="/logos/pring-group.png"
              alt="Pring Group Logo"
              width={140}
              height={140}
              className="relative z-10 drop-shadow-lg"
              priority
            />
          </div>

          {/* Tag */}
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-500/25 bg-gold-500/[0.08] px-5 py-1.5 text-[11px] font-semibold tracking-[0.15em] text-gold-600 uppercase shadow-sm">
            <Crown className="h-3.5 w-3.5" />
            Family-Owned Conglomerate
          </span>

          {/* Headline */}
          <h1 className="mb-6 font-[family-name:var(--font-heading)] text-[2rem] leading-[1.1] font-bold tracking-tight text-navy-900 sm:text-3xl md:text-4xl lg:text-5xl">
            Building Legacies
            <br />
            <span className="gold-shimmer">Across Industries</span>
          </h1>

          {/* Divider line */}
          <div
            className="mb-6 h-[2px] w-24 origin-center rounded-full bg-gradient-to-r from-transparent via-gold-500 to-transparent"
            style={{ opacity: 0, animation: "heroLine 0.6s ease-out 0.55s forwards, heroReveal 0.5s ease-out 0.55s forwards" }}
          />

          {/* Sub */}
          <p className="mx-auto mb-10 max-w-xl text-[15px] leading-[1.8] text-navy-700/70 sm:text-base md:text-lg md:leading-[1.8]">
            16+ businesses spanning 8+ industries. One family united by a shared
            vision of growth and excellence across the Philippines.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#businesses" className="group flex cursor-pointer items-center gap-2.5 rounded-full bg-navy-800 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-navy-900/10 transition-all duration-200 hover:bg-navy-700 hover:shadow-xl hover:shadow-navy-900/15 active:scale-[0.98]">
              Explore Our Businesses
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a href="#about" className="cursor-pointer rounded-full border border-navy-800/15 px-8 py-3.5 text-sm font-semibold text-navy-700 transition-all duration-200 hover:border-navy-800/25 hover:bg-navy-800/[0.04] hover:text-navy-900 active:scale-[0.98]">
              Our Story
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="mt-auto pt-8">
          <div className="flex flex-col items-center gap-2" style={{ opacity: 0, animation: "heroReveal 0.5s ease-out 1.2s forwards" }}>
            <span className="text-[10px] tracking-[0.2em] text-navy-700/50 uppercase">Scroll</span>
            <ChevronDown className="h-4 w-4 animate-bounce text-navy-700/50" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          LOGO MARQUEE BELT — Dual row (client component)
      ═══════════════════════════════════════════ */}
      <MarqueeBelt
        row1={businesses.slice(0, 8).map(b => ({ slug: b.slug, name: b.name, logo: b.logo }))}
        row2={businesses.slice(8, 16).map(b => ({ slug: b.slug, name: b.name, logo: b.logo }))}
      />

      {/* ═══════════════════════════════════════════
          STATS — Dark with background image
      ═══════════════════════════════════════════ */}
      <section className="stats-section relative z-10 overflow-hidden bg-navy-900 px-6 py-8 md:py-10">
        {/* Gold grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Ambient glow */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[300px] w-[500px] rounded-full" style={{ transform: "translate(-50%, -50%)", background: "radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 70%)", animation: "breathe 8s ease-in-out infinite" }} />

        <div className="relative mx-auto flex max-w-3xl items-center justify-between gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} variant="scale" delay={i * 150}>
              <div className="stat-card group relative text-center" style={{ animationDelay: `${i * 0.15}s` }}>
                <stat.icon className="mx-auto mb-1.5 h-4 w-4 text-gold-400 transition-all duration-300 group-hover:scale-125 group-hover:text-gold-300" />
                <div className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white md:text-3xl">
                  <CountUp end={stat.value} suffix={stat.suffix} duration={2500} className="text-white" />
                </div>
                <div className="mt-1 text-[10px] tracking-[0.15em] text-white/80 uppercase">{stat.label}</div>
                {/* Hover glow */}
                <div className="pointer-events-none absolute -inset-3 -z-10 rounded-2xl bg-gold-500/0 transition-all duration-500 group-hover:bg-gold-500/[0.04] group-hover:shadow-[0_0_30px_rgba(201,168,76,0.08)]" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ABOUT / OUR STORY — with image
      ═══════════════════════════════════════════ */}
      <section id="about" className="relative z-10 px-6 py-14 md:py-20">
        {/* Subtle background particles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div key={`ap-${i}`} className="absolute rounded-full bg-gold-500"
              style={{ width: `${2 + i}px`, height: `${2 + i}px`, left: `${15 + i * 16}%`, bottom: 0, opacity: 0, animation: `floatUp ${15 + i * 4}s linear infinite ${i * 3}s` }} />
          ))}
        </div>

        <div className="relative mx-auto max-w-6xl">
          <ScrollReveal variant="fadeUp">
            <div className="mb-6 text-center">
              <span className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-gold-500 uppercase">
                <Sparkles className="h-3.5 w-3.5" /> Our Story
              </span>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold leading-tight text-navy-900 md:text-4xl lg:text-[2.75rem]">
                One Family. <span className="text-gradient-gold">Multiple Empires.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <ScrollReveal variant="fadeRight" delay={100}>
              <div>
                <p className="mb-4 text-base leading-[1.8] text-navy-700/70">
                  Pring Group of Companies is a family-owned business
                  conglomerate where each family member takes the helm of their
                  own venture. From auction houses and bookstores to fitness
                  gyms and event venues, the Pring family has built a diverse
                  portfolio that serves communities across the Philippines.
                </p>
                <p className="mb-6 text-base leading-[1.8] text-navy-700/70">
                  What started as a single business has grown into a network of
                  16+ thriving enterprises — each with its own brand identity,
                  loyal customer base, and vision for growth.
                </p>

                {/* Trust badges */}
                <div className="mb-6 flex flex-wrap gap-3">
                  {[
                    { icon: ShieldCheck, text: "Trusted Brands" },
                    { icon: Users, text: "Family-Led" },
                    { icon: TrendingUp, text: "Growing Network" },
                  ].map((badge) => (
                    <div key={badge.text} className="flex items-center gap-2 rounded-full border border-navy-700/[0.06] bg-warm-100/60 px-4 py-2 text-[12px] font-medium text-navy-700/70">
                      <badge.icon className="h-3.5 w-3.5 text-gold-500" />
                      {badge.text}
                    </div>
                  ))}
                </div>

                <a href="#businesses" className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-navy-800 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-navy-900/10 transition-all duration-200 hover:bg-navy-700 hover:shadow-lg active:scale-[0.98]">
                  View All Businesses
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeLeft" delay={200}>
              <PhilippinesMap />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          INDUSTRIES — with bg image
      ═══════════════════════════════════════════ */}
      <section className="relative z-10 overflow-hidden border-y border-black/[0.04] bg-warm-100/40 px-6 py-20 md:py-24">
        {/* Background image */}
        <div className="pointer-events-none absolute inset-0">
          <Image src="/landing/network.jpg" alt="" fill sizes="100vw" className="object-cover opacity-[0.04]" />
        </div>

        <div className="relative mx-auto max-w-5xl">
          <ScrollReveal variant="fadeUp">
            <div className="mb-14 text-center">
              <span className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-gold-500 uppercase">
                <Globe className="h-3.5 w-3.5" /> Diversified Portfolio
              </span>
              <h2 className="mb-3 font-[family-name:var(--font-heading)] text-2xl font-bold text-navy-900 md:text-3xl lg:text-4xl">
                Industries We <span className="text-gradient-gold">Operate In</span>
              </h2>
              <p className="mx-auto max-w-md text-sm leading-relaxed text-navy-700/55">
                A diverse ecosystem of businesses spanning retail, hospitality,
                fitness, real estate, and more.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat, i) => {
              const Icon = categoryIcons[cat] || Building2;
              const count = businesses.filter((b) => b.category === cat).length;
              return (
                <ScrollReveal key={cat} variant="scale" delay={i * 60}>
                  <div className="industry-pill flex cursor-default items-center gap-2.5 rounded-2xl border border-navy-700/[0.06] bg-white/80 px-5 py-3 shadow-sm backdrop-blur-sm">
                    <Icon className="h-4 w-4 text-gold-500" />
                    <span className="text-[13px] font-semibold text-navy-800/80">{cat}</span>
                    <span className="rounded-full bg-navy-800/[0.06] px-2 py-0.5 text-[10px] font-bold text-navy-700/50">{count}</span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BUSINESSES GRID
      ═══════════════════════════════════════════ */}
      <section id="businesses" className="relative z-10 px-6 py-24 md:py-32">
        {/* Floating particles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div key={`bp-${i}`} className="absolute rounded-full bg-navy-700"
              style={{ width: `${2 + (i % 2)}px`, height: `${2 + (i % 2)}px`, left: `${5 + i * 16}%`, bottom: 0, opacity: 0, animation: `floatUp ${14 + i * 3}s linear infinite ${i * 2.5}s` }} />
          ))}
        </div>

        <div className="relative mx-auto max-w-7xl">
          <ScrollReveal variant="fadeUp">
            <div className="mb-16 text-center">
              <span className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-gold-500 uppercase">
                <Building2 className="h-3.5 w-3.5" /> Our Portfolio
              </span>
              <h2 className="mb-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-navy-900 md:text-4xl lg:text-[2.75rem]">
                Explore Our <span className="text-gradient-gold">Businesses</span>
              </h2>
              <p className="mx-auto max-w-lg text-sm leading-relaxed text-navy-700/55">
                Each brand carries its own identity, market, and loyal community
                — powered by the Pring family legacy.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {businesses.map((biz, i) => (
              <ScrollReveal key={biz.slug} variant="fadeUp" delay={(i % 4) * 80}>
                <Link
                  href={`/business/${biz.slug}`}
                  className="card-glow group relative block cursor-pointer overflow-hidden rounded-2xl border border-black/[0.04] bg-white p-0"
                >
                  {/* Color accent bar */}
                  <div className="h-1" style={{ background: `linear-gradient(90deg, ${biz.colors[0]}, ${biz.colors[1] || biz.colors[0]}, ${biz.colors[2] || biz.colors[0]})` }} />

                  <div className="p-5">
                    <div className="mb-4 flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-warm-100 p-1 transition-transform duration-300 group-hover:scale-105">
                        <Image src={biz.logo} alt={biz.name} width={48} height={48} className="h-full w-full rounded-lg object-contain" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="mb-0.5 truncate text-[15px] font-bold text-navy-900">{biz.name}</h3>
                        <p className="truncate font-[family-name:var(--font-cursive)] text-[12px] font-medium text-gold-600 italic">{biz.tagline}</p>
                      </div>
                    </div>

                    {biz.location && (
                      <div className="mb-3 flex items-center gap-1.5 text-[11px] text-navy-700/50">
                        <MapPin className="h-3 w-3" /> {biz.location}
                      </div>
                    )}

                    <p className="mb-4 line-clamp-2 text-[13px] leading-[1.7] text-navy-700/60">{biz.description}</p>

                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {biz.services.slice(0, 2).map((s) => (
                        <span key={s} className="rounded-full bg-warm-100/80 px-2.5 py-0.5 text-[10px] font-medium text-navy-700/55">{s}</span>
                      ))}
                      {biz.services.length > 2 && (
                        <span className="rounded-full bg-warm-100/80 px-2.5 py-0.5 text-[10px] font-medium text-navy-700/40">+{biz.services.length - 2}</span>
                      )}
                    </div>

                    <div className="flex items-center justify-between border-t border-black/[0.03] pt-3">
                      <span className="rounded-full bg-warm-100 px-3 py-1 text-[10px] font-semibold text-navy-700/50">{biz.category}</span>
                      <div className="flex items-center gap-1.5 text-[12px] font-semibold text-navy-800/50 transition-colors duration-200 group-hover:text-navy-800">
                        View <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          LOCATIONS — Dark with bg image
      ═══════════════════════════════════════════ */}
      <section id="locations" className="relative z-10 overflow-hidden bg-navy-900 px-6 py-24 md:py-32">
        {/* Background image */}
        <div className="pointer-events-none absolute inset-0">
          <Image src="/landing/locations.jpg" alt="" fill sizes="100vw" className="object-cover opacity-[0.12]" />
          <div className="absolute inset-0 bg-navy-900/85" />
        </div>
        {/* Grid overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(rgba(201,168,76,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.6) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        {/* Glow */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] rounded-full" style={{ transform: "translate(-50%, -50%)", background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)", animation: "breathe 10s ease-in-out infinite" }} />

        <div className="relative mx-auto max-w-6xl">
          <ScrollReveal variant="fadeUp">
            <div className="mb-16 text-center">
              <Globe className="mx-auto mb-4 h-7 w-7 text-gold-500/50" />
              <h2 className="mb-4 font-[family-name:var(--font-heading)] text-3xl font-bold text-white md:text-4xl">
                Growing Across the <span className="gold-shimmer">Philippines</span>
              </h2>
              <p className="mx-auto max-w-md text-sm leading-relaxed text-white/45">
                From Laguna to Bulacan, Cavite to Davao — the Pring Group
                footprint expands as each venture finds its community.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={100}>
            <div className="flex flex-wrap justify-center gap-3">
              {["Cabuyao, Laguna", "Santa Rosa, Laguna", "San Pablo, Laguna", "GMA, Cavite", "Meycauayan, Bulacan", "Davao City"].map((loc, i) => (
                <ScrollReveal key={loc} variant="scale" delay={i * 60}>
                  <div className="flex items-center gap-2.5 rounded-full border border-white/[0.1] bg-white/[0.06] px-5 py-3 backdrop-blur-sm transition-all duration-200 hover:border-gold-500/25 hover:bg-white/[0.12]">
                    <MapPin className="h-4 w-4 text-gold-500/70" />
                    <span className="text-[13px] font-medium text-white/75">{loc}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA / CONTACT — with bg image
      ═══════════════════════════════════════════ */}
      <footer id="contact" className="relative z-10 overflow-hidden px-6 py-24 md:py-32">
        {/* Background texture */}
        <div className="pointer-events-none absolute inset-0">
          <Image src="/landing/cta-bg.jpg" alt="" fill sizes="100vw" className="object-cover opacity-[0.03]" />
        </div>
        {/* Ambient glow */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] rounded-full" style={{ transform: "translate(-50%, -50%)", background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)", animation: "breathe 12s ease-in-out infinite" }} />

        <div className="relative mx-auto max-w-4xl">
          <ScrollReveal variant="fadeUp">
            <div className="overflow-hidden rounded-3xl border border-black/[0.06] bg-white shadow-2xl shadow-navy-900/[0.06]">
              <div className="h-1.5 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500" />
              <div className="px-8 py-14 text-center md:px-16 md:py-20">
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    <Image src="/logos/pring-group.png" alt="Pring Group" width={56} height={56} className="relative z-10 rounded-lg shadow-md" />
                    <div className="absolute inset-0 -m-2 rounded-xl bg-gold-500/15" style={{ animation: "pulseGlow 3s ease-in-out infinite", filter: "blur(8px)" }} />
                  </div>
                </div>

                <h2 className="mb-3 font-[family-name:var(--font-heading)] text-2xl font-bold text-navy-900 md:text-3xl lg:text-4xl">
                  Partner With the <span className="text-gradient-gold">Pring Group</span>
                </h2>
                <p className="mx-auto mb-10 max-w-md text-sm leading-[1.8] text-navy-700/55">
                  Interested in partnerships, franchising, or business
                  inquiries? Connect with us through any of our business pages.
                </p>

                <div className="mb-10 flex flex-wrap justify-center gap-2">
                  {businesses.map((biz) => (
                    <a key={biz.slug} href={biz.facebook} target="_blank" rel="noopener noreferrer"
                      className="flex cursor-pointer items-center gap-1.5 rounded-full border border-navy-700/[0.06] bg-warm-50 px-3.5 py-2 text-[11px] font-medium text-navy-700/65 transition-all duration-200 hover:border-gold-500/20 hover:bg-white hover:text-navy-900 hover:shadow-sm">
                      <Facebook className="h-3 w-3" /> {biz.name}
                    </a>
                  ))}
                </div>

                <a href="https://www.facebook.com/RFGauctionhouse" target="_blank" rel="noopener noreferrer"
                  className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-navy-800 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-navy-900/10 transition-all duration-200 hover:bg-navy-700 hover:shadow-xl active:scale-[0.98]">
                  <Facebook className="h-4 w-4" />
                  Follow Us on Facebook
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-black/[0.03] pt-6 md:flex-row">
            <div className="flex items-center gap-2.5">
              <Image src="/logos/pring-group.png" alt="Pring Group" width={20} height={20} className="rounded" />
              <span className="text-[13px] text-navy-700/45">Pring Group of Companies</span>
            </div>
            <p className="text-[11px] text-navy-700/35">
              &copy; {new Date().getFullYear()} Pring Group of Companies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
