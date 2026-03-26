import { Metadata } from "next";
import Link from "next/link";
import Image from "@/components/Img";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
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
  Scale,
  Puzzle,
  Blocks,
  Gamepad2,
  Smile,
  ThumbsUp,
  CheckCircle2,
  Quote,
  Zap,
  Trophy,
  Clock,
  Sparkles,
  Rocket,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Toy Landia — More Toys, More Savings, More Fun | Cabuyao",
  description:
    "Brand new toys sold per kilogram. Mas marami kang maiuuwi, mas sulit ang presyo, at mas masaya ang bawat shopping experience! Toy Landia, Cabuyao.",
};

/* ───── color tokens (v1 Claymorphism) ─────
   red     #F01800  (primary, hero, sections)
   yellow  #FFD800  (highlight, accent, fun)
   white   #FFFFFF  (cards, light bg)
──────────────────────────────────────────── */

export default function ToyLandiaPage() {
  const services = [
    {
      icon: Scale,
      title: "Toys Per Kilo",
      desc: "Our signature! Pick brand new toys and pay by weight — the more you grab, the bigger your savings.",
      img: "/toy-landia/toys.jpg",
      badge: "Best Seller",
      accent: "#F01800",
    },
    {
      icon: Gift,
      title: "Brand New Toys",
      desc: "100% factory-sealed. Action figures, dolls, puzzles, building blocks — all legit and ready to play.",
      img: "/toy-landia/lego.jpg",
      badge: "100% New",
      accent: "#FFD800",
    },
    {
      icon: PartyPopper,
      title: "Party Supplies",
      desc: "Kiddie party coming? We've got giveaway packs, party favors, and themed toy bundles to make it epic.",
      img: "/toy-landia/party.jpg",
      badge: "Popular",
      accent: "#F01800",
    },
    {
      icon: Package,
      title: "Bulk Toy Orders",
      desc: "Events, reselling, charities — order in bulk and get wholesale pricing that can't be beat.",
      img: "/toy-landia/bulk.jpg",
      badge: "Wholesale",
      accent: "#FFD800",
    },
  ];

  const highlights = [
    { icon: Scale, title: "Per Kilo Pricing", desc: "Unique weigh-and-pay model. More toys = more savings.", color: "#F01800" },
    { icon: BadgeCheck, title: "All Brand New", desc: "Zero pre-owned items. Every toy is sealed and factory-fresh.", color: "#FFD800" },
    { icon: Tag, title: "Sulit na Sulit", desc: "Best toy deals in Cabuyao — your kids get more for less.", color: "#F01800" },
    { icon: Puzzle, title: "Wide Variety", desc: "Action figures, dolls, vehicles, blocks, educational — all ages.", color: "#FFD800" },
    { icon: Truck, title: "Bulk Ready", desc: "Wholesale orders for events, charities, schools, and resellers.", color: "#F01800" },
    { icon: Smile, title: "Fun Shopping", desc: "Every visit is a treasure hunt. Kids love picking their own!", color: "#FFD800" },
  ];

  const steps = [
    { num: "01", title: "Visit or Follow", desc: "Come to our Cabuyao store or follow our Facebook for new drops and flash deals.", icon: MapPin },
    { num: "02", title: "Pick Your Toys", desc: "Browse thousands of brand new toys. Grab everything your kids love — no limits!", icon: ShoppingCart },
    { num: "03", title: "Weigh & Pay", desc: "Put your picks on the scale. Pay per kilo — the heavier the haul, the better the deal.", icon: Scale },
    { num: "04", title: "Play & Enjoy", desc: "Take home bags of brand new toys. Pure happiness for kids, pure savings for parents!", icon: Heart },
  ];

  const stats = [
    { value: 1000, suffix: "+", label: "Toy Varieties", icon: Blocks },
    { value: 100, suffix: "%", label: "Brand New", icon: BadgeCheck },
    { value: 4, suffix: "", label: "Service Types", icon: ShoppingCart },
    { value: 5, suffix: "K+", label: "Happy Families", icon: Heart },
  ];

  return (
    <main className="relative overflow-hidden bg-white">
      <style
        dangerouslySetInnerHTML={{
          __html: `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&family=Comic+Neue:wght@300;400;700&display=swap');

@keyframes tlBounce {
  0%, 100% { transform: translateY(0); }
  25% { transform: translateY(-16px); }
  45% { transform: translateY(-5px); }
  65% { transform: translateY(-10px); }
}
@keyframes tlReveal {
  from { opacity: 0; transform: translateY(28px) scale(0.96); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes tlWiggle {
  0%, 100% { transform: rotate(0deg); }
  20% { transform: rotate(-5deg); }
  40% { transform: rotate(5deg); }
  60% { transform: rotate(-3deg); }
  80% { transform: rotate(3deg); }
}
@keyframes tlFloat {
  0%, 100% { transform: translateY(0) rotate(-1deg); }
  50% { transform: translateY(-14px) rotate(2deg); }
}
@keyframes tlPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(240,24,0,0.35); }
  50% { box-shadow: 0 0 0 16px rgba(240,24,0,0); }
}
@keyframes tlGlow {
  0%, 100% { box-shadow: 0 8px 32px rgba(240,24,0,0.12); }
  50% { box-shadow: 0 14px 48px rgba(240,24,0,0.25); }
}
@keyframes tlLogoFloat {
  0%, 100% { transform: translateY(0) scale(1) rotate(-1.5deg); }
  50% { transform: translateY(-16px) scale(1.025) rotate(1.5deg); }
}
@keyframes tlSpin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
@keyframes tlPop {
  0% { transform: scale(0); opacity: 0; }
  60% { transform: scale(1.2); }
  100% { transform: scale(1); opacity: 1; }
}

.tl-hero-stagger > * {
  opacity: 0;
  animation: tlReveal 0.7s cubic-bezier(0.34,1.56,0.64,1) forwards;
}
.tl-hero-stagger > *:nth-child(1) { animation-delay: 0.1s; }
.tl-hero-stagger > *:nth-child(2) { animation-delay: 0.25s; }
.tl-hero-stagger > *:nth-child(3) { animation-delay: 0.4s; }
.tl-hero-stagger > *:nth-child(4) { animation-delay: 0.55s; }
.tl-hero-stagger > *:nth-child(5) { animation-delay: 0.7s; }
.tl-hero-stagger > *:nth-child(6) { animation-delay: 0.85s; }

.tl-card {
  transition: all 0.4s cubic-bezier(0.34,1.56,0.64,1);
  border: 3px solid rgba(240,24,0,0.08);
  box-shadow: 6px 6px 0px rgba(240,24,0,0.06), 0 2px 16px rgba(0,0,0,0.04);
}
.tl-card:hover {
  transform: translateY(-12px) rotate(-0.5deg);
  box-shadow: 8px 8px 0px rgba(240,24,0,0.10), 0 24px 60px rgba(240,24,0,0.08);
}
.tl-card:hover .tl-card-icon {
  animation: tlWiggle 0.5s ease-in-out;
}
.tl-card:hover .tl-card-img {
  transform: scale(1.08);
}
.tl-card:hover .tl-card-badge {
  transform: scale(1.12) rotate(-3deg);
}

.tl-highlight {
  transition: all 0.35s cubic-bezier(0.34,1.56,0.64,1);
  box-shadow: 5px 5px 0px rgba(240,24,0,0.05), 0 2px 12px rgba(0,0,0,0.04);
}
.tl-highlight:hover {
  transform: translateY(-8px);
  box-shadow: 7px 7px 0px rgba(240,24,0,0.08), 0 18px 45px rgba(0,0,0,0.06);
}
.tl-highlight:hover .tl-highlight-icon {
  animation: tlBounce 0.6s ease-out;
  transform: scale(1.1);
}

.tl-btn {
  position: relative;
  transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
  cursor: pointer;
}
.tl-btn:hover {
  transform: translateY(-3px) scale(1.03);
}
.tl-btn-pulse { animation: tlPulse 2.5s ease-in-out infinite; }

.tl-step {
  transition: all 0.35s cubic-bezier(0.34,1.56,0.64,1);
  box-shadow: 4px 4px 0px rgba(240,24,0,0.04), 0 2px 8px rgba(0,0,0,0.03);
}
.tl-step:hover {
  transform: translateX(8px);
  box-shadow: 6px 6px 0px rgba(240,24,0,0.07), 0 8px 24px rgba(0,0,0,0.05);
}
.tl-step:hover .tl-step-num {
  transform: scale(1.15);
}
.tl-step:hover .tl-step-bar {
  width: 50px;
}

.tl-gallery-item {
  transition: all 0.45s cubic-bezier(0.34,1.56,0.64,1);
  box-shadow: 5px 5px 0px rgba(240,24,0,0.04), 0 2px 12px rgba(0,0,0,0.03);
}
.tl-gallery-item:hover {
  transform: scale(1.05) rotate(-1deg);
  box-shadow: 7px 7px 0px rgba(240,24,0,0.07), 0 16px 40px rgba(0,0,0,0.06);
}
.tl-gallery-item:hover .tl-gallery-label {
  transform: translateY(0);
  opacity: 1;
}

.font-display { font-family: 'Baloo 2', cursive, system-ui; }
.font-body { font-family: 'Comic Neue', cursive, system-ui, sans-serif; }

@media (prefers-reduced-motion: reduce) {
  .tl-hero-stagger > * { opacity: 1; animation: none; }
  .tl-btn-pulse { animation: none; }
  .tl-card:hover .tl-card-icon { animation: none; }
  .tl-highlight:hover .tl-highlight-icon { animation: none; }
}
`,
        }}
      />

      {/* ═══ NAV ═══ */}
      <nav className="fixed top-0 right-0 left-0 z-50 border-b-[3px] border-[#F01800]/10 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <Link
            href="/"
            className="flex cursor-pointer items-center gap-2 text-sm font-medium text-[#180000]/40 transition-colors hover:text-[#F01800]"
          >
            <ArrowLeft size={16} />
            <span className="font-body hidden font-bold sm:inline">Back to Pring Group</span>
          </Link>
          <div className="flex items-center gap-3">
            <Image
              src="/logos/toy-landia.jpg"
              alt="Toy Landia"
              width={40}
              height={40}
              className="rounded-xl border-[3px] border-[#F01800]/15"
            />
            <div className="hidden sm:block">
              <div className="font-display text-sm font-bold text-[#180000]">Toy Landia</div>
              <div className="font-body text-[10px] font-extrabold tracking-wider text-[#F01800] uppercase">Cabuyao</div>
            </div>
          </div>
          <a
            href="https://www.facebook.com/officialtoylandia"
            target="_blank"
            rel="noopener noreferrer"
            className="tl-btn inline-flex items-center gap-2 rounded-xl border-[3px] border-[#F01800] bg-[#F01800] px-4 py-2 text-sm font-bold text-white shadow-md shadow-[#F01800]/20"
          >
            <Facebook size={16} />
            <span className="font-body hidden font-bold sm:inline">Follow Us</span>
          </a>
        </div>
      </nav>

      {/* ═══ HERO — Red gradient ═══ */}
      <section className="relative overflow-hidden pt-16">
        {/* Red gradient hero bg */}
        <div className="absolute top-16 right-0 left-0 h-[70vh] overflow-hidden bg-gradient-to-br from-[#F01800] via-[#D01400] to-[#900000]">
          {/* Subtle diagonal stripes */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 20px, rgba(255,255,255,0.4) 20px, rgba(255,255,255,0.4) 40px)",
            }}
          />
          {/* Floating decorative elements */}
          <div className="pointer-events-none absolute top-12 left-[7%] flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFD800]/15" style={{ animation: "tlFloat 6s ease-in-out infinite" }}>
            <Star size={24} className="text-[#FFD800]/70" />
          </div>
          <div className="pointer-events-none absolute top-16 right-[10%] flex h-12 w-12 items-center justify-center rounded-full bg-white/10" style={{ animation: "tlFloat 7s ease-in-out infinite 1.2s" }}>
            <Rocket size={20} className="text-white/50" />
          </div>
          <div className="pointer-events-none absolute bottom-24 left-[12%] flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFD800]/15" style={{ animation: "tlFloat 7s ease-in-out infinite 2s" }}>
            <Blocks size={20} className="text-[#FFD800]/60" />
          </div>
          <div className="pointer-events-none absolute right-[22%] bottom-16 flex h-10 w-10 items-center justify-center rounded-full bg-white/8" style={{ animation: "tlFloat 5.5s ease-in-out infinite 0.8s" }}>
            <Gift size={18} className="text-white/40" />
          </div>
        </div>

        {/* Red wavy transition to white */}
        <div className="absolute top-[calc(70vh+16px-40px)] right-0 left-0">
          <svg viewBox="0 0 1440 100" className="w-full" preserveAspectRatio="none">
            <path d="M0,50 C180,90 360,10 540,50 C720,90 900,10 1080,50 C1260,90 1380,60 1440,50 L1440,0 L0,0 Z" fill="#900000" />
          </svg>
        </div>

        <div className="relative mx-auto grid min-h-[92vh] max-w-7xl items-center gap-8 px-6 md:grid-cols-[1fr_auto] md:px-12">
          {/* Content left */}
          <div className="tl-hero-stagger py-16 md:py-10">
            {/* Pill */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border-[3px] border-white/15 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
              <Zap size={14} className="text-[#FFD800]" />
              <span className="font-display text-xs font-bold tracking-wider text-white uppercase">
                Toys Sold Per Kilo!
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display mb-5 text-5xl leading-[1.02] font-extrabold tracking-tight text-white md:text-[5.5rem]">
              More Toys.
              <br />
              <span className="text-[#FFD800]">More Savings.</span>
              <br />
              <span className="relative inline-block">
                More Fun!
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 240 14" fill="none">
                  <path d="M3 10 C60 2, 130 14, 237 5" stroke="#FFD800" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Sub */}
            <p className="font-body mb-24 max-w-md text-lg leading-relaxed font-bold text-white/75">
              Brand new toys at sulit prices! Weigh your picks on the scale
              and take home bags of happiness for the kids.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://www.facebook.com/officialtoylandia"
                target="_blank"
                rel="noopener noreferrer"
                className="tl-btn tl-btn-pulse inline-flex items-center gap-2.5 rounded-2xl border-[3px] border-[#FFD800] bg-[#FFD800] px-8 py-4 text-base font-extrabold text-[#180000] shadow-lg shadow-[#FFD800]/25"
              >
                <Facebook size={20} />
                <span className="font-display">Shop on Facebook</span>
              </a>
              <a
                href="#services"
                className="tl-btn inline-flex items-center gap-2 rounded-2xl border-[3px] border-[#F01800]/40 bg-[#F01800]/15 px-6 py-3.5 font-bold text-white shadow-md"
              >
                <span className="font-body text-base">See Our Toys</span>
                <ChevronRight size={16} />
              </a>
            </div>

            {/* Trust signals */}
            <div className="mt-10 flex flex-wrap items-center gap-5">
              {[
                { icon: BadgeCheck, label: "100% Brand New", color: "#FFD800" },
                { icon: Scale, label: "Per Kilo Pricing", color: "#FFD800" },
                { icon: ThumbsUp, label: "5K+ Happy Families", color: "#FFD800" },
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <t.icon size={15} style={{ color: t.color }} />
                  <span className="font-body text-xs font-bold text-white/60">{t.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Logo right */}
          <div className="hidden md:flex md:items-start md:justify-center md:pt-28">
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-8 rounded-full bg-[#F01800]/15 blur-3xl" style={{ animation: "tlGlow 4s ease-in-out infinite" }} />
              {/* Dashed ring */}
              <div className="absolute -inset-6 rounded-[2rem] border-4 border-dashed border-white/15" style={{ animation: "tlSpin 40s linear infinite" }} />
              {/* Corner decorations */}
              <div className="absolute -top-7 -left-7 flex h-13 w-13 items-center justify-center rounded-2xl border-[3px] border-[#FFD800] bg-white shadow-lg" style={{ animation: "tlFloat 4.5s ease-in-out infinite" }}>
                <Blocks size={22} className="text-[#F01800]" />
              </div>
              <div className="absolute -right-6 -bottom-6 flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-[#F01800] bg-white shadow-lg" style={{ animation: "tlFloat 5.5s ease-in-out infinite 1.5s" }}>
                <Gamepad2 size={20} className="text-[#F01800]" />
              </div>
              <div className="absolute -top-4 right-3 flex h-9 w-9 items-center justify-center rounded-lg border-2 border-[#FFD800] bg-white shadow-md" style={{ animation: "tlFloat 6s ease-in-out infinite 2.5s" }}>
                <Puzzle size={16} className="text-[#FFD800]" />
              </div>
              {/* Logo */}
              <Image
                src="/logos/toy-landia.jpg"
                alt="Toy Landia Logo"
                width={250}
                height={250}
                className="relative rounded-3xl border-4 border-white shadow-2xl"
                style={{ animation: "tlLogoFloat 6s ease-in-out infinite" }}
              />
              {/* Star burst */}
              <div className="absolute -top-2 left-1/2" style={{ animation: "tlPop 2.5s ease-in-out infinite" }}>
                <Star size={22} className="fill-[#FFD800] text-[#FFD800] drop-shadow-sm" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS — Yellow Ribbon ═══ */}
      <section className="relative z-10 overflow-hidden bg-[#FFD800]">
        {/* Red/yellow alternating top accent */}
        <div className="flex h-1.5">
          <div className="flex-1 bg-[#F01800]" />
          <div className="flex-1 bg-[#FFD800]" />
          <div className="flex-1 bg-[#F01800]" />
          <div className="flex-1 bg-[#FFD800]" />
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => {
            const iconBg = i % 2 === 0 ? "#F01800" : "#FFFFFF";
            const iconColor = i % 2 === 0 ? "#FFFFFF" : "#F01800";
            const iconBorder = i % 2 === 0 ? "rgba(255,255,255,0.3)" : "rgba(240,24,0,0.2)";
            return (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="group flex flex-col items-center gap-1.5 px-6 py-9 text-center">
                  <div
                    className="mb-1 flex h-12 w-12 items-center justify-center rounded-2xl border-[3px] transition-transform group-hover:scale-110"
                    style={{ background: iconBg, borderColor: iconBorder }}
                  >
                    <s.icon size={22} style={{ color: iconColor }} />
                  </div>
                  <div className="font-display text-3xl font-extrabold text-[#180000] md:text-4xl">
                    <CountUp end={s.value} suffix={s.suffix} />
                  </div>
                  <div className="font-body text-[10px] font-extrabold tracking-wider text-[#180000]/50 uppercase">{s.label}</div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
        {/* Bottom accent */}
        <div className="flex h-1.5">
          <div className="flex-1 bg-[#FFD800]" />
          <div className="flex-1 bg-[#F01800]" />
          <div className="flex-1 bg-[#FFD800]" />
          <div className="flex-1 bg-[#F01800]" />
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section id="services" className="relative py-24 md:py-32">
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, #F01800 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border-[3px] border-[#F01800]/15 bg-[#F01800]/[0.06] px-4 py-1.5">
                <ShoppingCart size={14} className="text-[#F01800]" />
                <span className="font-display text-xs font-bold tracking-wider text-[#F01800] uppercase">What We Offer</span>
              </div>
              <h2 className="font-display mb-4 text-3xl font-extrabold text-[#180000] md:text-5xl">
                Toys Galore at <span className="text-[#F01800]">Sulit</span> Prices!
              </h2>
              <p className="font-body mx-auto max-w-2xl text-base font-bold text-[#180000]/42">
                From single picks to mega bundles — every toy is brand new and priced to make you smile.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((svc, i) => (
              <ScrollReveal key={i} delay={i * 120} variant="fadeUp">
                <div className="tl-card group overflow-hidden rounded-3xl bg-white">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image src={svc.img} alt={svc.title} fill className="tl-card-img object-cover transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                    {/* Badge */}
                    <div className="absolute top-4 right-4">
                      <span
                        className="tl-card-badge font-display inline-block rounded-xl border-[3px] px-3 py-1 text-[11px] font-bold tracking-wider uppercase shadow-md transition-transform duration-300"
                        style={{
                          background: svc.accent,
                          borderColor: svc.accent,
                          color: svc.accent === "#FFD800" ? "#180000" : "#FFFFFF",
                        }}
                      >
                        {svc.badge}
                      </span>
                    </div>
                    {/* Icon bubble */}
                    <div className="absolute bottom-4 left-4">
                      <div className="tl-card-icon flex h-12 w-12 items-center justify-center rounded-2xl border-[3px] bg-white shadow-lg" style={{ borderColor: svc.accent + "30" }}>
                        <svc.icon size={22} style={{ color: svc.accent === "#FFD800" ? "#F01800" : svc.accent }} />
                      </div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display mb-2 text-xl font-extrabold text-[#180000]">{svc.title}</h3>
                    <p className="font-body text-sm leading-relaxed font-bold text-[#180000]/42">{svc.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ RED WAVE ═══ */}
      <div className="relative h-20 overflow-hidden">
        <svg viewBox="0 0 1440 80" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0,40 C240,75 480,5 720,40 C960,75 1200,5 1440,40 L1440,80 L0,80 Z" fill="#F01800" />
        </svg>
      </div>

      {/* ═══ WHY CHOOSE US — Red section ═══ */}
      <section className="relative overflow-hidden bg-[#F01800] py-20 md:py-24">
        {/* Diagonal stripes */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 20px, rgba(255,255,255,0.5) 20px, rgba(255,255,255,0.5) 40px)" }} />

        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border-[3px] border-white/20 bg-white/10 px-4 py-1.5">
                <Trophy size={14} className="text-[#FFD800]" />
                <span className="font-display text-xs font-bold tracking-wider text-white uppercase">Why Toy Landia</span>
              </div>
              <h2 className="font-display mb-4 text-3xl font-extrabold text-white md:text-5xl">
                The <span className="text-[#FFD800]">Toy Landia</span> Experience!
              </h2>
            </div>
          </ScrollReveal>

          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80} variant="scale">
                <div className="tl-highlight rounded-3xl border-[3px] border-white/10 bg-white p-6">
                  <div
                    className="tl-highlight-icon mb-4 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300"
                    style={{ background: item.color + "12", border: `3px solid ${item.color}25` }}
                  >
                    <item.icon size={24} style={{ color: item.color === "#FFD800" ? "#F01800" : item.color }} />
                  </div>
                  <h3 className="font-display mb-2 text-lg font-extrabold text-[#180000]">{item.title}</h3>
                  <p className="font-body text-sm leading-relaxed font-bold text-[#180000]/42">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ RED → WHITE WAVE ═══ */}
      <div className="relative h-20 overflow-hidden bg-[#F01800]">
        <svg viewBox="0 0 1440 80" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0,30 C360,70 720,0 1080,50 C1300,70 1400,40 1440,30 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="relative py-24 md:py-32">
        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border-[3px] border-[#FFD800]/30 bg-[#FFD800]/[0.08] px-4 py-1.5">
                <Clock size={14} className="text-[#F01800]" />
                <span className="font-display text-xs font-bold tracking-wider text-[#F01800] uppercase">How It Works</span>
              </div>
              <h2 className="font-display mb-4 text-3xl font-extrabold text-[#180000] md:text-5xl">
                Four Steps to <span className="text-[#F01800]">Toy Heaven!</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="mx-auto max-w-3xl space-y-4">
            {steps.map((step, i) => {
              const stepColors = ["#F01800", "#FFD800", "#F01800", "#FFD800"];
              const c = stepColors[i];
              return (
                <ScrollReveal key={i} delay={i * 120} variant="fadeLeft">
                  <div className="tl-step group flex items-start gap-5 rounded-3xl border-[3px] border-[#F01800]/8 bg-white px-6 py-6 md:px-8">
                    <div className="flex flex-col items-center">
                      <span className="tl-step-num font-display text-4xl font-extrabold transition-all duration-300 md:text-5xl" style={{ color: c + "30" }}>
                        {step.num}
                      </span>
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="mb-1.5 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border-[2px]" style={{ background: c + "10", borderColor: c + "20" }}>
                          <step.icon size={18} style={{ color: c === "#FFD800" ? "#F01800" : c }} />
                        </div>
                        <h3 className="font-display text-lg font-extrabold text-[#180000]">{step.title}</h3>
                      </div>
                      <p className="font-body text-sm leading-relaxed font-bold text-[#180000]/40">{step.desc}</p>
                      <div className="tl-step-bar mt-3 h-1 w-8 rounded-full transition-all duration-400" style={{ background: c === "#FFD800" ? "#F01800" : c }} />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ YELLOW WAVE into GALLERY ═══ */}
      <div className="relative h-16 overflow-hidden">
        <svg viewBox="0 0 1440 60" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0,30 C240,55 480,5 720,30 C960,55 1200,5 1440,30 L1440,60 L0,60 Z" fill="#FFF9E0" />
        </svg>
      </div>

      {/* ═══ GALLERY ═══ */}
      <section className="relative bg-[#FFF9E0] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border-[3px] border-[#FFD800]/30 bg-[#FFD800]/[0.12] px-4 py-1.5">
                <Sparkles size={14} className="text-[#F01800]" />
                <span className="font-display text-xs font-bold tracking-wider text-[#F01800] uppercase">Gallery</span>
              </div>
              <h2 className="font-display mb-4 text-3xl font-extrabold text-[#180000] md:text-5xl">
                Peek Inside <span className="text-[#F01800]">Toy Landia!</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {[
              { src: "/toy-landia/hero.jpg", alt: "Toy Collection", span: "md:col-span-2 md:row-span-2", border: "#F01800" },
              { src: "/toy-landia/toys.jpg", alt: "Toys Per Kilo", span: "", border: "#FFD800" },
              { src: "/toy-landia/kids.jpg", alt: "Happy Kids", span: "", border: "#F01800" },
              { src: "/toy-landia/party.jpg", alt: "Party Supplies", span: "", border: "#FFD800" },
              { src: "/toy-landia/lego.jpg", alt: "Building Blocks", span: "", border: "#F01800" },
            ].map((img, i) => (
              <ScrollReveal key={i} delay={i * 100} variant="scale">
                <div
                  className={`tl-gallery-item group relative overflow-hidden rounded-3xl border-[3px] bg-white ${img.span}`}
                  style={{ minHeight: img.span ? "420px" : "210px", borderColor: img.border + "25" }}
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F01800]/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="tl-gallery-label absolute bottom-0 left-0 w-full translate-y-full p-4 opacity-0 transition-all duration-300">
                    <span className="font-display text-sm font-extrabold text-white">{img.alt}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ YELLOW WAVE into TESTIMONIAL ═══ */}
      <div className="relative h-16 overflow-hidden bg-[#FFF9E0]">
        <svg viewBox="0 0 1440 60" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0,20 C360,55 720,0 1080,40 C1300,55 1400,30 1440,20 L1440,60 L0,60 Z" fill="#FFD800" />
        </svg>
      </div>

      {/* ═══ TESTIMONIAL — Yellow section ═══ */}
      <section className="relative overflow-hidden bg-[#FFD800] py-20 md:py-24">
        {/* Red/yellow alternating accent bars */}
        <div className="absolute top-0 right-0 left-0 flex h-1.5">
          <div className="flex-1 bg-[#F01800]" />
          <div className="flex-1 bg-[#FFD800]" />
          <div className="flex-1 bg-[#F01800]" />
          <div className="flex-1 bg-[#FFD800]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <Quote size={44} className="mx-auto mb-6 text-[#F01800]/25" />
              <blockquote className="font-display mb-6 text-2xl leading-relaxed font-bold text-[#180000]/80 italic md:text-3xl">
                &ldquo;My kids went crazy! They picked all the toys they
                wanted and we paid per kilo. Sobrang sulit — we&apos;ll
                definitely be back every month!&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-[#F01800]/20 bg-[#F01800]/10">
                  <Heart size={18} className="text-[#F01800]" />
                </div>
                <div className="text-left">
                  <div className="font-display text-sm font-bold text-[#180000]/80">Happy Nanay</div>
                  <div className="font-body text-xs font-bold text-[#180000]/40">Regular Customer, Cabuyao</div>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={20} className="fill-[#F01800] text-[#F01800]" />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom accent */}
        <div className="absolute right-0 bottom-0 left-0 flex h-1.5">
          <div className="flex-1 bg-[#FFD800]" />
          <div className="flex-1 bg-[#F01800]" />
          <div className="flex-1 bg-[#FFD800]" />
          <div className="flex-1 bg-[#F01800]" />
        </div>
      </section>

      {/* ═══ YELLOW → WHITE WAVE ═══ */}
      <div className="relative h-16 overflow-hidden bg-[#FFD800]">
        <svg viewBox="0 0 1440 60" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0,25 C360,55 720,5 1080,35 C1300,50 1400,30 1440,25 L1440,60 L0,60 Z" fill="#FFFFFF" />
        </svg>
      </div>

      {/* ═══ LOCATION ═══ */}
      <section className="relative py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="overflow-hidden rounded-[2rem] border-[3px] border-[#F01800]/12 bg-white" style={{ boxShadow: "8px 8px 0px rgba(240,24,0,0.05), 0 4px 24px rgba(0,0,0,0.06)" }}>
              <div className="grid md:grid-cols-2">
                <div className="relative min-h-[280px] md:min-h-[380px]">
                  <Image src="/toy-landia/bulk.jpg" alt="Toy Landia Store" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/50 md:to-white/80" />
                </div>
                <div className="flex flex-col justify-center px-8 py-10 md:px-12">
                  <div className="mb-4 flex items-center gap-2">
                    <MapPin size={18} className="text-[#F01800]" />
                    <span className="font-display text-xs font-bold tracking-wider text-[#F01800] uppercase">Visit Our Store</span>
                  </div>
                  <h3 className="font-display mb-3 text-2xl font-extrabold text-[#180000] md:text-3xl">Toy Landia</h3>
                  <p className="font-body mb-4 text-sm leading-relaxed font-bold text-[#180000]/42">
                    Cabuyao, Laguna. Walk in and discover the most sulit toy shopping in town. New drops every week!
                  </p>
                  <div className="mb-6 space-y-2.5">
                    {[
                      { label: "Walk-in shopping welcome" },
                      { label: "Bulk orders available" },
                      { label: "New toy drops weekly" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 size={15} className="text-[#F01800]" />
                        <span className="font-body font-bold text-[#180000]/55">{item.label}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="https://www.facebook.com/officialtoylandia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tl-btn inline-flex w-fit items-center gap-2 rounded-2xl border-[3px] border-[#F01800] bg-[#F01800] px-6 py-3 font-bold text-white shadow-md shadow-[#F01800]/15"
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

      {/* ═══ RED WAVE into CTA ═══ */}
      <div className="relative h-20 overflow-hidden">
        <svg viewBox="0 0 1440 80" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0,40 C240,70 480,10 720,40 C960,70 1200,10 1440,40 L1440,80 L0,80 Z" fill="#F01800" />
        </svg>
      </div>

      {/* ═══ FINAL CTA ═══ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F01800] via-[#D01400] to-[#900000] py-28 md:py-36">
        {/* Diagonal stripes */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 20px, rgba(255,255,255,0.4) 20px, rgba(255,255,255,0.4) 40px)" }} />
        {/* Floating shapes */}
        <div className="pointer-events-none absolute top-[14%] left-[7%] flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFD800]/12" style={{ animation: "tlFloat 6s ease-in-out infinite" }}>
          <Gift size={28} className="text-[#FFD800]/60" />
        </div>
        <div className="pointer-events-none absolute right-[8%] bottom-[14%] flex h-14 w-14 items-center justify-center rounded-full bg-[#FFD800]/12" style={{ animation: "tlFloat 5s ease-in-out infinite 2s" }}>
          <Star size={22} className="text-[#FFD800]/60" />
        </div>
        <div className="pointer-events-none absolute top-[50%] right-[25%] flex h-10 w-10 items-center justify-center rounded-lg bg-white/8" style={{ animation: "tlFloat 7s ease-in-out infinite 1s" }}>
          <Rocket size={18} className="text-white/40" />
        </div>

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal variant="scale">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border-[3px] border-white/15 bg-white/8 px-5 py-2 backdrop-blur-sm">
              <PartyPopper size={15} className="text-[#FFD800]" />
              <span className="font-display text-xs font-bold tracking-wider text-[#FFD800] uppercase">Start Your Toy Hunt!</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="font-display mb-6 text-4xl font-extrabold text-white md:text-6xl">
              Ready for the Most
              <br />
              <span className="text-[#FFD800]">Sulit Toys?</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="font-body mx-auto mb-10 max-w-xl text-lg font-bold text-white/70">
              Follow us on Facebook for fresh arrivals, flash deals, and exclusive promos.
              More toys, more savings, more fun — that&apos;s Toy Landia!
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <a
              href="https://www.facebook.com/officialtoylandia"
              target="_blank"
              rel="noopener noreferrer"
              className="tl-btn tl-btn-pulse inline-flex items-center gap-3 rounded-2xl border-[3px] border-[#FFD800] bg-[#FFD800] px-10 py-5 text-lg font-extrabold text-[#180000] shadow-xl shadow-[#FFD800]/20"
            >
              <Facebook size={22} />
              <span className="font-display">Follow Toy Landia</span>
            </a>
            <div className="font-body mt-5 text-xs font-bold text-white/35">
              Be the first to know about new toy drops and mega deals!
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-white py-10">
        {/* Red/yellow alternating accent line */}
        <div className="mb-8 flex h-1">
          <div className="flex-1 bg-[#F01800]" />
          <div className="flex-1 bg-[#FFD800]" />
          <div className="flex-1 bg-[#F01800]" />
          <div className="flex-1 bg-[#FFD800]" />
        </div>
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-6 md:flex-row md:justify-between md:px-12">
          <div className="flex items-center gap-3">
            <Image src="/logos/toy-landia.jpg" alt="Toy Landia" width={36} height={36} className="rounded-xl border-[3px] border-[#F01800]/10" />
            <span className="font-display text-sm font-bold text-[#180000]">Toy Landia</span>
          </div>
          <p className="font-body text-center text-xs font-bold text-[#180000]/30 md:text-right">
            Cabuyao, Laguna<br />
            &copy; {new Date().getFullYear()} Toy Landia &middot; A Pring Group Company
          </p>
        </div>
      </footer>
    </main>
  );
}
