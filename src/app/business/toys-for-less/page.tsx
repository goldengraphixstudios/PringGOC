import { Metadata } from "next";
import Link from "next/link";
import Image from "@/components/Img";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import BusinessNavArrows from "@/components/BusinessNavArrows";
import {
  ArrowLeft,
  Facebook,
  MapPin,
  Star,
  Heart,
  ShoppingCart,
  Package,
  Gift,
  ChevronRight,
  Tag,
  Truck,
  BadgeCheck,
  PartyPopper,
  Crown,
  Smile,
  ThumbsUp,
  CheckCircle2,
  Quote,
  Zap,
  Trophy,
  Clock,
  Sparkles,
  Shield,
  Users,
  Boxes,
  Store,
  Coins,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Toys for Less — UK Toys | Nothing Above ₱200 | Cabuyao",
  description:
    "Supplier of UK Toys in the PH since 2024. Nothing above ₱200! Affordable, quality UK-imported toys for kids. Toys for Less, Cabuyao.",
};

/* ───── color tokens ─────
   orange     #F06018  (primary, brand chocolate)
   yellow     #F0D800  (highlight, brand gold)
   red        #D42020  (CTA, urgency)
   wood       #8B5E34  (warm accent)
   woodLight  #D4A762  (secondary wood)
   warmWhite  #FFF8F0  (background)
   dark       #1A0E00  (text, dark sections)
────────────────────────── */

export default function ToysForLessPage() {
  const services = [
    {
      icon: Crown,
      title: "UK Imported Toys",
      desc: "Straight from the UK! Premium-quality toys that kids in Britain love — now available in the Philippines at unbeatable prices.",
      img: "/toys-for-less/toy-1.jpg",
      badge: "UK Quality",
      accent: "#F06018",
    },
    {
      icon: Tag,
      title: "Nothing Above ₱200",
      desc: "Every single toy in our store is ₱200 or less. No surprises, no hidden costs — just pure affordable fun for every family.",
      img: "/toys-for-less/toy-2.jpg",
      badge: "Best Deal",
      accent: "#D42020",
    },
    {
      icon: Boxes,
      title: "Wholesale Supply",
      desc: "Resellers, event organizers, schools — get wholesale pricing on bulk orders. The more you buy, the more you save.",
      img: "/toys-for-less/toy-3.jpg",
      badge: "Bulk Ready",
      accent: "#8B5E34",
    },
    {
      icon: Store,
      title: "Retail Toy Sales",
      desc: "Walk in and browse our full collection. Every visit is a treasure hunt — new UK toy drops arrive regularly!",
      img: "/toys-for-less/toy-4.jpg",
      badge: "Walk-In",
      accent: "#F0D800",
    },
  ];

  const reasons = [
    { icon: Crown, title: "UK Quality Toys", desc: "Imported directly from the United Kingdom — safe, durable, and fun.", color: "#F06018" },
    { icon: Coins, title: "Nothing Above ₱200", desc: "Our iron-clad promise. Every toy in the store fits any family's budget.", color: "#D42020" },
    { icon: Shield, title: "Safe & Certified", desc: "All toys pass quality standards — safe for kids of all ages to play with.", color: "#8B5E34" },
    { icon: Truck, title: "Wholesale Ready", desc: "Bulk orders for resellers, events, schools, and charity drives.", color: "#F0D800" },
    { icon: Crown, title: "Supplier Since 2024", desc: "Trusted UK toy supplier in the Philippines — growing every month.", color: "#F06018" },
    { icon: Smile, title: "Kids Love It", desc: "Happy kids, happy parents. Our customers keep coming back for more!", color: "#D42020" },
  ];

  const steps = [
    { num: "01", title: "Visit or Follow Us", desc: "Come to our Cabuyao store or follow us on Facebook to see the latest UK toy drops and exclusive deals.", icon: MapPin },
    { num: "02", title: "Browse Our Collection", desc: "Hundreds of UK-imported toys organized by type. Action figures, dolls, vehicles, educational — something for everyone!", icon: ShoppingCart },
    { num: "03", title: "Pick Your Favorites", desc: "Every toy is ₱200 or less! Grab as many as you want — no calculator needed. Fill that bag with joy!", icon: Gift },
    { num: "04", title: "Happy Kids, Happy Life", desc: "Take home UK-quality toys at Philippine-friendly prices. Watch your kids light up — priceless!", icon: Heart },
  ];

  const stats = [
    { value: 10, suffix: "K+", label: "Facebook Likes", icon: ThumbsUp },
    { value: 200, suffix: "", label: "Max Price (₱)", icon: Tag },
    { value: 100, suffix: "%", label: "UK Imported", icon: Crown },
    { value: 2024, suffix: "", label: "Est. Year", icon: Crown },
  ];

  return (
    <main className="relative overflow-hidden" style={{ background: "#FFF8F0" }}>
      <BusinessNavArrows currentSlug="toys-for-less" />
      <style
        dangerouslySetInnerHTML={{
          __html: `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&family=Comic+Neue:wght@300;400;700&display=swap');

@keyframes tfFloat {
  0%, 100% { transform: translateY(0) rotate(-1deg); }
  50% { transform: translateY(-16px) rotate(2deg); }
}
@keyframes tfBounce {
  0%, 100% { transform: translateY(0); }
  25% { transform: translateY(-14px); }
  50% { transform: translateY(-4px); }
  75% { transform: translateY(-9px); }
}
@keyframes tfReveal {
  from { opacity: 0; transform: translateY(30px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes tfWiggle {
  0%, 100% { transform: rotate(0deg); }
  20% { transform: rotate(-6deg); }
  40% { transform: rotate(6deg); }
  60% { transform: rotate(-4deg); }
  80% { transform: rotate(4deg); }
}
@keyframes tfPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(212,32,32,0.35); }
  50% { box-shadow: 0 0 0 18px rgba(212,32,32,0); }
}
@keyframes tfGlow {
  0%, 100% { box-shadow: 0 8px 32px rgba(240,96,24,0.15), inset 0 0 0 3px rgba(240,96,24,0.08); }
  50% { box-shadow: 0 16px 56px rgba(240,96,24,0.28), inset 0 0 0 3px rgba(240,96,24,0.15); }
}
@keyframes tfLogoFloat {
  0%, 100% { transform: translateY(0) scale(1) rotate(-2deg); }
  50% { transform: translateY(-18px) scale(1.02) rotate(2deg); }
}
@keyframes tfSpin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
@keyframes tfShimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
@keyframes tfPriceTag {
  0%, 100% { transform: rotate(-3deg) scale(1); }
  50% { transform: rotate(3deg) scale(1.05); }
}
@keyframes tfWoodGrain {
  0% { background-position: 0 0; }
  100% { background-position: 80px 0; }
}
@keyframes tfConfetti {
  0% { opacity: 0; transform: translateY(0) rotate(0deg); }
  20% { opacity: 1; }
  100% { opacity: 0; transform: translateY(-40px) rotate(180deg); }
}

.tf-hero-stagger > * {
  opacity: 0;
  animation: tfReveal 0.7s cubic-bezier(0.34,1.56,0.64,1) forwards;
}
.tf-hero-stagger > *:nth-child(1) { animation-delay: 0.1s; }
.tf-hero-stagger > *:nth-child(2) { animation-delay: 0.25s; }
.tf-hero-stagger > *:nth-child(3) { animation-delay: 0.4s; }
.tf-hero-stagger > *:nth-child(4) { animation-delay: 0.55s; }
.tf-hero-stagger > *:nth-child(5) { animation-delay: 0.7s; }
.tf-hero-stagger > *:nth-child(6) { animation-delay: 0.85s; }

.tf-card {
  transition: all 0.4s cubic-bezier(0.34,1.56,0.64,1);
}
.tf-card:hover {
  transform: translateY(-10px) rotate(-0.5deg);
  box-shadow: 0 20px 50px rgba(139,94,52,0.12), 0 8px 20px rgba(240,96,24,0.08);
}
.tf-card:hover .tf-card-icon {
  animation: tfWiggle 0.5s ease-in-out;
}
.tf-card:hover .tf-card-img {
  transform: scale(1.06);
}
.tf-card:hover .tf-card-badge {
  transform: scale(1.1) rotate(-2deg);
}

.tf-reason {
  transition: all 0.35s cubic-bezier(0.34,1.56,0.64,1);
}
.tf-reason:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(139,94,52,0.1);
}
.tf-reason:hover .tf-reason-icon {
  animation: tfBounce 0.6s ease-out;
  transform: scale(1.1);
}

.tf-btn {
  position: relative;
  transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
  cursor: pointer;
}
.tf-btn:hover {
  transform: translateY(-3px) scale(1.03);
}
.tf-btn-pulse { animation: tfPulse 2.5s ease-in-out infinite; }

.tf-step {
  transition: all 0.35s cubic-bezier(0.34,1.56,0.64,1);
}
.tf-step:hover {
  transform: translateX(8px);
}
.tf-step:hover .tf-step-num {
  transform: scale(1.15) rotate(-5deg);
}
.tf-step:hover .tf-step-bar {
  width: 48px;
}

.tf-gallery-item {
  transition: all 0.45s cubic-bezier(0.34,1.56,0.64,1);
}
.tf-gallery-item:hover {
  transform: scale(1.04) rotate(-1deg);
}
.tf-gallery-item:hover .tf-gallery-overlay {
  opacity: 1;
}

.font-display { font-family: 'Baloo 2', cursive, system-ui; }
.font-body { font-family: 'Comic Neue', cursive, system-ui, sans-serif; }

@media (prefers-reduced-motion: reduce) {
  .tf-hero-stagger > * { opacity: 1; animation: none; }
  .tf-btn-pulse { animation: none; }
  .tf-card:hover .tf-card-icon { animation: none; }
  .tf-reason:hover .tf-reason-icon { animation: none; }
}
`,
        }}
      />

      {/* ═══ NAV ═══ */}
      <nav className="fixed top-0 right-0 left-0 z-50 border-b-[3px] border-[#F06018]/10 bg-[#FFF8F0]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <Link
            href="/"
            className="flex cursor-pointer items-center gap-2 text-sm font-medium text-[#1A0E00]/40 transition-colors hover:text-[#F06018]"
          >
            <ArrowLeft size={16} />
            <span className="font-body hidden font-bold sm:inline">Back to Pring Group</span>
          </Link>
          <div className="flex items-center gap-3">
            <Image
              src="/logos/toys-for-less.jpg"
              alt="Toys for Less"
              width={40}
              height={40}
              className="rounded-xl border-[3px] border-[#F06018]/15"
            />
            <div className="hidden sm:block">
              <div className="font-display text-sm font-bold text-[#1A0E00]">Toys for Less</div>
              <div className="font-body text-[10px] font-extrabold tracking-wider text-[#F06018] uppercase">UK Toys &middot; Cabuyao</div>
            </div>
          </div>
          <a
            href="https://www.facebook.com/ToyssforLess"
            target="_blank"
            rel="noopener noreferrer"
            className="tf-btn inline-flex items-center gap-2 rounded-xl bg-[#D42020] px-4 py-2 text-sm font-bold text-white shadow-md shadow-[#D42020]/20"
          >
            <Facebook size={16} />
            <span className="font-body hidden font-bold sm:inline">Follow Us</span>
          </a>
        </div>
      </nav>

      {/* ═══ HERO — Diagonal Split ═══ */}
      <section className="relative overflow-hidden pt-16">
        {/* Background: warm orange gradient with diagonal wood-tone cut */}
        <div className="absolute top-16 right-0 left-0 h-[78vh] overflow-hidden bg-gradient-to-br from-[#F06018] via-[#E05010] to-[#8B5E34]">
          {/* Wood grain texture pattern */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(139,94,52,0.5) 8px, rgba(139,94,52,0.5) 9px, transparent 9px, transparent 16px)",
              animation: "tfWoodGrain 8s linear infinite",
            }}
          />
          {/* Subtle diagonal overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, transparent, transparent 24px, rgba(255,255,255,0.4) 24px, rgba(255,255,255,0.4) 48px)",
            }}
          />
          {/* Floating UK-themed decorative icons */}
          <div className="pointer-events-none absolute top-12 left-[8%] flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F0D800]/20" style={{ animation: "tfFloat 5s ease-in-out infinite" }}>
            <Crown size={24} className="text-[#F0D800]" />
          </div>
          <div className="pointer-events-none absolute top-20 right-[10%] flex h-12 w-12 items-center justify-center rounded-full bg-white/10" style={{ animation: "tfFloat 6.5s ease-in-out infinite 1.5s" }}>
            <Crown size={20} className="text-white/70" />
          </div>
          <div className="pointer-events-none absolute bottom-28 left-[14%] flex h-11 w-11 items-center justify-center rounded-xl bg-[#D42020]/15" style={{ animation: "tfFloat 7s ease-in-out infinite 2s" }}>
            <Gift size={20} className="text-[#D42020]/60" />
          </div>
          <div className="pointer-events-none absolute right-[24%] bottom-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#F0D800]/15" style={{ animation: "tfFloat 5.5s ease-in-out infinite 0.8s" }}>
            <Star size={18} className="text-[#F0D800]/60" />
          </div>
          <div className="pointer-events-none absolute top-[42%] left-[42%] flex h-10 w-10 items-center justify-center rounded-lg bg-white/5" style={{ animation: "tfFloat 8s ease-in-out infinite 3s" }}>
            <Tag size={18} className="text-white/25" />
          </div>
        </div>

        {/* Wavy diagonal cut to warm white */}
        <div className="absolute top-[calc(78vh+16px-50px)] right-0 left-0">
          <svg viewBox="0 0 1440 120" className="w-full" preserveAspectRatio="none">
            <path d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,70 C1350,95 1420,65 1440,60 L1440,0 L0,0 Z" fill="#8B5E34" />
            <path d="M0,70 C200,110 400,30 600,70 C800,110 1000,30 1200,80 C1350,105 1420,75 1440,70 L1440,0 L0,0 Z" fill="#8B5E34" opacity="0.3" />
          </svg>
        </div>

        <div className="relative mx-auto grid min-h-[100vh] max-w-7xl items-center gap-10 px-6 md:grid-cols-[1.1fr_auto] md:px-12">
          {/* Content left */}
          <div className="tf-hero-stagger py-16 md:py-10">
            {/* UK Badge pill */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border-[3px] border-white/15 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
              <Crown size={14} className="text-[#F0D800]" />
              <span className="font-display text-xs font-bold tracking-wider text-white uppercase">
                UK Toys Supplier Since 2024
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display mb-4 text-5xl leading-[1.02] font-extrabold tracking-tight text-white md:text-[5.5rem]">
              Nothing
              <br />
              <span className="text-[#F0D800]">Above ₱200!</span>
            </h1>

            {/* Subheadline */}
            <p className="font-body mb-3 max-w-lg text-xl leading-relaxed font-bold text-white/80">
              Quality UK-imported toys at prices every Filipino family can afford.
            </p>

            {/* Price tag accent */}
            <div className="mb-10 inline-flex items-center gap-3 rounded-2xl border-[3px] border-[#F0D800]/30 bg-[#F0D800]/15 px-5 py-2.5 backdrop-blur-sm" style={{ animation: "tfPriceTag 4s ease-in-out infinite" }}>
              <Tag size={18} className="text-[#F0D800]" />
              <span className="font-display text-lg font-extrabold text-[#F0D800]">₱50 — ₱200 Only!</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://www.facebook.com/ToyssforLess"
                target="_blank"
                rel="noopener noreferrer"
                className="tf-btn tf-btn-pulse inline-flex items-center gap-2.5 rounded-2xl bg-[#D42020] px-8 py-4 text-base font-extrabold text-white shadow-lg shadow-[#D42020]/25"
              >
                <Facebook size={20} />
                <span className="font-display">Shop on Facebook</span>
              </a>
              <a
                href="#services"
                className="tf-btn inline-flex items-center gap-2 rounded-2xl border-[3px] border-white/20 bg-white/8 px-6 py-3.5 font-bold text-white backdrop-blur-sm"
              >
                <span className="font-body text-base">See Our Toys</span>
                <ChevronRight size={16} />
              </a>
            </div>

            {/* Trust signals */}
            <div className="mt-9 flex flex-wrap items-center gap-5">
              {[
                { icon: Crown, label: "UK Imported", color: "#F0D800" },
                { icon: Tag, label: "₱200 Max", color: "#F0D800" },
                { icon: ThumbsUp, label: "10K+ Likes", color: "#F0D800" },
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <t.icon size={15} style={{ color: t.color }} />
                  <span className="font-body text-xs font-bold text-white/60">{t.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Logo right — floating with decorations */}
          <div className="hidden md:flex md:items-center md:justify-center">
            <div className="relative">
              {/* Warm glow */}
              <div className="absolute -inset-10 rounded-full bg-[#F06018]/20 blur-3xl" style={{ animation: "tfGlow 4s ease-in-out infinite" }} />
              {/* Dashed ring with wood tone */}
              <div className="absolute -inset-7 rounded-[2rem] border-4 border-dashed border-[#D4A762]/25" style={{ animation: "tfSpin 45s linear infinite" }} />
              {/* Corner price tag */}
              <div className="absolute -top-8 -left-8 flex h-14 w-14 items-center justify-center rounded-2xl border-[3px] border-[#F0D800] bg-white shadow-lg" style={{ animation: "tfFloat 4.5s ease-in-out infinite" }}>
                <Tag size={24} className="text-[#D42020]" />
              </div>
              {/* Corner UK badge */}
              <div className="absolute -right-7 -bottom-7 flex h-13 w-13 items-center justify-center rounded-full border-[3px] border-[#F06018] bg-white shadow-lg" style={{ animation: "tfFloat 5.5s ease-in-out infinite 1.5s" }}>
                <Crown size={22} className="text-[#F06018]" />
              </div>
              {/* Corner gift */}
              <div className="absolute -top-4 right-4 flex h-9 w-9 items-center justify-center rounded-lg border-2 border-[#D42020] bg-white shadow-md" style={{ animation: "tfFloat 6s ease-in-out infinite 2.5s" }}>
                <Gift size={16} className="text-[#D42020]" />
              </div>
              {/* Logo */}
              <Image
                src="/logos/toys-for-less.jpg"
                alt="Toys for Less - UK Toys Logo"
                width={260}
                height={260}
                className="relative rounded-3xl border-4 border-white shadow-2xl"
                style={{ animation: "tfLogoFloat 6s ease-in-out infinite" }}
              />
              {/* Star sparkle */}
              <div className="absolute -top-2 left-1/2" style={{ animation: "tfConfetti 3s ease-in-out infinite" }}>
                <Star size={22} className="fill-[#F0D800] text-[#F0D800] drop-shadow-sm" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS — Wood-toned ribbon ═══ */}
      <section className="relative z-10 overflow-hidden bg-[#1A0E00]">
        {/* Orange-yellow top accent */}
        <div className="flex h-1.5">
          <div className="flex-1 bg-[#F06018]" />
          <div className="flex-1 bg-[#F0D800]" />
          <div className="flex-1 bg-[#D42020]" />
          <div className="flex-1 bg-[#8B5E34]" />
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => {
            const colors = ["#F06018", "#D42020", "#F0D800", "#D4A762"];
            return (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="group flex flex-col items-center gap-1.5 px-6 py-9 text-center">
                  <s.icon size={24} style={{ color: colors[i] }} className="mb-1 transition-transform group-hover:scale-110" />
                  <div className="font-display text-3xl font-extrabold text-white md:text-4xl">
                    <CountUp end={s.value} suffix={s.suffix} />
                  </div>
                  <div className="font-body text-[11px] font-bold tracking-wider text-white/40 uppercase">{s.label}</div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
        {/* Bottom accent */}
        <div className="flex h-1.5">
          <div className="flex-1 bg-[#8B5E34]" />
          <div className="flex-1 bg-[#D42020]" />
          <div className="flex-1 bg-[#F0D800]" />
          <div className="flex-1 bg-[#F06018]" />
        </div>
      </section>

      {/* ═══ SERVICES — Asymmetric Bento Grid ═══ */}
      <section id="services" className="relative py-24 md:py-32">
        {/* Subtle wood dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #8B5E34 1.2px, transparent 1.2px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border-[3px] border-[#F06018]/15 bg-[#F06018]/[0.06] px-4 py-1.5">
                <ShoppingCart size={14} className="text-[#F06018]" />
                <span className="font-display text-xs font-bold tracking-wider text-[#F06018] uppercase">What We Offer</span>
              </div>
              <h2 className="font-display mb-4 text-3xl font-extrabold text-[#1A0E00] md:text-5xl">
                UK Toys, <span className="text-[#D42020]">Pinoy Prices!</span>
              </h2>
              <p className="font-body mx-auto max-w-2xl text-base font-bold text-[#1A0E00]/42">
                Premium toys imported from the United Kingdom — all priced at ₱200 and below.
              </p>
            </div>
          </ScrollReveal>

          {/* Bento-style: first card spans full width on mobile, 2-col on desktop with first card bigger */}
          <div className="grid gap-5 md:grid-cols-12">
            {services.map((svc, i) => {
              const spanClass = i === 0 ? "md:col-span-7" : i === 1 ? "md:col-span-5" : i === 2 ? "md:col-span-5" : "md:col-span-7";
              return (
                <ScrollReveal key={i} delay={i * 120} variant="fadeUp" className={spanClass}>
                  <div className="tf-card group h-full overflow-hidden rounded-3xl border-[3px] bg-white shadow-lg" style={{ borderColor: svc.accent + "15" }}>
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden md:h-56">
                      <Image src={svc.img} alt={svc.title} fill className="tf-card-img object-cover transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/25 to-transparent" />
                      {/* Badge */}
                      <div className="absolute top-4 right-4">
                        <span
                          className="tf-card-badge font-display inline-block rounded-xl px-3 py-1 text-[11px] font-bold tracking-wider text-white uppercase shadow-md transition-transform duration-300"
                          style={{ background: svc.accent }}
                        >
                          {svc.badge}
                        </span>
                      </div>
                      {/* Icon bubble */}
                      <div className="absolute bottom-4 left-4">
                        <div className="tf-card-icon flex h-12 w-12 items-center justify-center rounded-2xl border-[3px] bg-white shadow-lg" style={{ borderColor: svc.accent + "30" }}>
                          <svc.icon size={22} style={{ color: svc.accent }} />
                        </div>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-display mb-2 text-xl font-extrabold text-[#1A0E00]">{svc.title}</h3>
                      <p className="font-body text-sm leading-relaxed font-bold text-[#1A0E00]/40">{svc.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ ORANGE WAVE INTO WHY CHOOSE US ═══ */}
      <div className="relative h-20 overflow-hidden">
        <svg viewBox="0 0 1440 80" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0,35 C180,70 400,5 660,40 C880,70 1100,10 1440,40 L1440,80 L0,80 Z" fill="#F06018" />
        </svg>
      </div>

      {/* ═══ WHY CHOOSE US — Orange section with wood accents ═══ */}
      <section className="relative overflow-hidden bg-[#F06018] py-20 md:py-24">
        {/* Wood-grain pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent, transparent 12px, rgba(255,255,255,0.4) 12px, rgba(255,255,255,0.4) 13px, transparent 13px, transparent 24px)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border-[3px] border-white/20 bg-white/10 px-4 py-1.5">
                <Trophy size={14} className="text-[#F0D800]" />
                <span className="font-display text-xs font-bold tracking-wider text-white uppercase">Why Toys for Less</span>
              </div>
              <h2 className="font-display mb-4 text-3xl font-extrabold text-white md:text-5xl">
                The <span className="text-[#F0D800]">Smart Choice</span> for Parents!
              </h2>
            </div>
          </ScrollReveal>

          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80} variant="scale">
                <div className="tf-reason rounded-3xl border-[3px] border-white/10 bg-white p-6 shadow-lg">
                  <div
                    className="tf-reason-icon mb-4 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300"
                    style={{ background: item.color + "12", border: `3px solid ${item.color}25` }}
                  >
                    <item.icon size={24} style={{ color: item.color }} />
                  </div>
                  <h3 className="font-display mb-2 text-lg font-extrabold text-[#1A0E00]">{item.title}</h3>
                  <p className="font-body text-sm leading-relaxed font-bold text-[#1A0E00]/40">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ORANGE → WARM WHITE WAVE ═══ */}
      <div className="relative h-20 overflow-hidden bg-[#F06018]">
        <svg viewBox="0 0 1440 80" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0,30 C320,65 700,5 1050,45 C1280,65 1400,40 1440,30 L1440,80 L0,80 Z" fill="#FFF8F0" />
        </svg>
      </div>

      {/* ═══ HOW IT WORKS — Diagonal Timeline ═══ */}
      <section className="relative py-24 md:py-32">
        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border-[3px] border-[#8B5E34]/15 bg-[#8B5E34]/[0.06] px-4 py-1.5">
                <Clock size={14} className="text-[#8B5E34]" />
                <span className="font-display text-xs font-bold tracking-wider text-[#8B5E34] uppercase">How It Works</span>
              </div>
              <h2 className="font-display mb-4 text-3xl font-extrabold text-[#1A0E00] md:text-5xl">
                Your UK Toy <span className="text-[#F06018]">Shopping Guide!</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="mx-auto max-w-3xl space-y-4">
            {steps.map((step, i) => {
              const stepColors = ["#F06018", "#D42020", "#F0D800", "#8B5E34"];
              const c = stepColors[i];
              return (
                <ScrollReveal key={i} delay={i * 120} variant="fadeLeft">
                  <div className="tf-step group flex items-start gap-5 rounded-3xl border-[3px] border-transparent bg-white px-6 py-6 shadow-sm transition-all hover:shadow-md md:px-8" style={{ borderColor: "transparent" }}>
                    <div className="flex flex-col items-center">
                      <span className="tf-step-num font-display text-4xl font-extrabold transition-all duration-300 md:text-5xl" style={{ color: c + "30" }}>
                        {step.num}
                      </span>
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="mb-1.5 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: c + "10" }}>
                          <step.icon size={18} style={{ color: c }} />
                        </div>
                        <h3 className="font-display text-lg font-extrabold text-[#1A0E00]">{step.title}</h3>
                      </div>
                      <p className="font-body text-sm leading-relaxed font-bold text-[#1A0E00]/40">{step.desc}</p>
                      <div className="tf-step-bar mt-3 h-1 w-8 rounded-full transition-all duration-400" style={{ background: c }} />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ GALLERY — Masonry with overlapping polaroid feel ═══ */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border-[3px] border-[#F0D800]/30 bg-[#F0D800]/[0.08] px-4 py-1.5">
                <Sparkles size={14} className="text-[#F06018]" />
                <span className="font-display text-xs font-bold tracking-wider text-[#F06018] uppercase">Gallery</span>
              </div>
              <h2 className="font-display mb-4 text-3xl font-extrabold text-[#1A0E00] md:text-5xl">
                Peek at Our <span className="text-[#D42020]">UK Toys!</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {[
              { src: "/toys-for-less/toy-1.jpg", alt: "Toy Collection", span: "md:col-span-2 md:row-span-2", border: "#F06018" },
              { src: "/toys-for-less/toy-2.jpg", alt: "UK Toys", span: "", border: "#D42020" },
              { src: "/toys-for-less/toy-3.jpg", alt: "Happy Kids", span: "", border: "#F0D800" },
              { src: "/toys-for-less/toy-4.jpg", alt: "Wholesale", span: "", border: "#8B5E34" },
              { src: "/toys-for-less/toy-5.jpg", alt: "Premium Toys", span: "", border: "#F06018" },
            ].map((img, i) => (
              <ScrollReveal key={i} delay={i * 100} variant="scale">
                <div
                  className={`tf-gallery-item group relative overflow-hidden rounded-3xl border-[3px] bg-white shadow-sm ${img.span}`}
                  style={{ minHeight: img.span ? "420px" : "210px", borderColor: img.border + "20" }}
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="tf-gallery-overlay absolute inset-0 flex items-end bg-gradient-to-t from-[#1A0E00]/60 via-transparent to-transparent opacity-0 transition-opacity duration-300">
                    <div className="p-5">
                      <span className="font-display text-sm font-extrabold text-white">{img.alt}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIAL — Yellow accent section ═══ */}
      <section className="relative overflow-hidden bg-[#F0D800] py-20 md:py-24">
        {/* Wood-accent top bar */}
        <div className="absolute top-0 right-0 left-0 flex h-1.5">
          <div className="flex-1 bg-[#F06018]" />
          <div className="flex-1 bg-[#D42020]" />
          <div className="flex-1 bg-[#8B5E34]" />
          <div className="flex-1 bg-[#D4A762]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <Quote size={44} className="mx-auto mb-6 text-[#1A0E00]/15" />
              <blockquote className="font-display mb-6 text-2xl leading-relaxed font-bold text-[#1A0E00]/80 italic md:text-3xl">
                &ldquo;I couldn&apos;t believe it — premium UK toys for less
                than ₱200 each! My kids were so happy, and my wallet didn&apos;t
                suffer. We&apos;ll be regular customers for sure!&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-[#F06018]/25 bg-[#F06018]/10">
                  <Heart size={18} className="text-[#F06018]" />
                </div>
                <div className="text-left">
                  <div className="font-display text-sm font-bold text-[#1A0E00]/75">Happy Customer</div>
                  <div className="font-body text-xs font-bold text-[#1A0E00]/35">Regular Buyer, Cabuyao</div>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={20} className="fill-[#F06018] text-[#F06018]" />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom accent */}
        <div className="absolute right-0 bottom-0 left-0 flex h-1.5">
          <div className="flex-1 bg-[#D4A762]" />
          <div className="flex-1 bg-[#8B5E34]" />
          <div className="flex-1 bg-[#D42020]" />
          <div className="flex-1 bg-[#F06018]" />
        </div>
      </section>

      {/* ═══ LOCATION ═══ */}
      <section className="relative py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="overflow-hidden rounded-[2rem] border-[3px] border-[#F06018]/12 bg-white shadow-xl">
              <div className="grid md:grid-cols-2">
                <div className="relative min-h-[280px] md:min-h-[380px]">
                  <Image src="/toys-for-less/toy-5.jpg" alt="Toys for Less Store" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/50 md:to-white/80" />
                </div>
                <div className="flex flex-col justify-center px-8 py-10 md:px-12">
                  <div className="mb-4 flex items-center gap-2">
                    <MapPin size={18} className="text-[#D42020]" />
                    <span className="font-display text-xs font-bold tracking-wider text-[#D42020] uppercase">Visit Our Store</span>
                  </div>
                  <h3 className="font-display mb-3 text-2xl font-extrabold text-[#1A0E00] md:text-3xl">Toys for Less — UK Toys</h3>
                  <p className="font-body mb-4 text-sm leading-relaxed font-bold text-[#1A0E00]/40">
                    Cabuyao, Laguna. Walk in and discover hundreds of UK-imported toys — all ₱200 and below. New drops from the UK every week!
                  </p>
                  <div className="mb-6 space-y-2.5">
                    {[
                      { label: "Walk-in shopping welcome", color: "#F06018" },
                      { label: "Wholesale orders available", color: "#8B5E34" },
                      { label: "New UK drops weekly", color: "#D42020" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 size={15} style={{ color: item.color }} />
                        <span className="font-body font-bold text-[#1A0E00]/55">{item.label}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="https://www.facebook.com/ToyssforLess"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tf-btn inline-flex w-fit items-center gap-2 rounded-2xl bg-[#D42020] px-6 py-3 font-bold text-white shadow-md shadow-[#D42020]/15"
                  >
                    <Facebook size={16} />
                    <span className="font-display text-sm">Message on Facebook</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F06018] via-[#D45010] to-[#8B5E34] py-28 md:py-36">
        {/* Wood-grain texture */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(255,255,255,0.3) 10px, rgba(255,255,255,0.3) 11px, transparent 11px, transparent 20px)",
          }}
        />
        {/* Floating accents */}
        <div className="pointer-events-none absolute top-[14%] left-[7%] flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F0D800]/12" style={{ animation: "tfFloat 6s ease-in-out infinite" }}>
          <Gift size={28} className="text-[#F0D800]/60" />
        </div>
        <div className="pointer-events-none absolute right-[8%] bottom-[14%] flex h-14 w-14 items-center justify-center rounded-full bg-[#D42020]/12" style={{ animation: "tfFloat 5s ease-in-out infinite 2s" }}>
          <Star size={22} className="text-[#D42020]/50" />
        </div>
        <div className="pointer-events-none absolute top-[50%] right-[25%] flex h-10 w-10 items-center justify-center rounded-lg bg-[#F0D800]/10" style={{ animation: "tfFloat 7s ease-in-out infinite 1s" }}>
          <Crown size={18} className="text-[#F0D800]/50" />
        </div>

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal variant="scale">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border-[3px] border-white/15 bg-white/8 px-5 py-2 backdrop-blur-sm">
              <PartyPopper size={15} className="text-[#F0D800]" />
              <span className="font-display text-xs font-bold tracking-wider text-[#F0D800] uppercase">Start Shopping!</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="font-display mb-6 text-4xl font-extrabold text-white md:text-6xl">
              UK Toys at
              <br />
              <span className="text-[#F0D800]">₱200 & Below!</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="font-body mx-auto mb-10 max-w-xl text-lg font-bold text-white/70">
              Follow us on Facebook for fresh UK arrivals, flash deals, and exclusive promos.
              Nothing above ₱200 — that&apos;s our promise!
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <a
              href="https://www.facebook.com/ToyssforLess"
              target="_blank"
              rel="noopener noreferrer"
              className="tf-btn tf-btn-pulse inline-flex items-center gap-3 rounded-2xl bg-[#F0D800] px-10 py-5 text-lg font-extrabold text-[#1A0E00] shadow-xl shadow-[#F0D800]/20"
            >
              <Facebook size={22} />
              <span className="font-display">Follow Toys for Less</span>
            </a>
            <div className="font-body mt-5 text-xs font-bold text-white/35">
              Be the first to know about new UK toy drops and mega deals!
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="py-10" style={{ background: "#FFF8F0" }}>
        {/* Accent line */}
        <div className="mb-8 flex h-1">
          <div className="flex-1 bg-[#F06018]" />
          <div className="flex-1 bg-[#F0D800]" />
          <div className="flex-1 bg-[#D42020]" />
          <div className="flex-1 bg-[#8B5E34]" />
        </div>
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-6 md:flex-row md:justify-between md:px-12">
          <div className="flex items-center gap-3">
            <Image src="/logos/toys-for-less.jpg" alt="Toys for Less" width={36} height={36} className="rounded-xl border-[3px] border-[#F06018]/10" />
            <div>
              <span className="font-display text-sm font-bold text-[#1A0E00]">Toys for Less — UK Toys</span>
              <div className="font-body text-[10px] font-bold text-[#F06018]">Nothing Above ₱200</div>
            </div>
          </div>
          <p className="font-body text-center text-xs font-bold text-[#1A0E00]/30 md:text-right">
            Cabuyao, Laguna<br />
            &copy; {new Date().getFullYear()} Toys for Less &middot; A Pring Group Company
          </p>
        </div>
      </footer>
    </main>
  );
}
