import { Metadata } from "next";
import Link from "next/link";
import Image from "@/components/Img";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import BusinessNavArrows from "@/components/BusinessNavArrows";
import {
  Gavel,
  Package,
  Globe,
  TrendingUp,
  ShieldCheck,
  Truck,
  Star,
  ArrowLeft,
  ArrowRight,
  MapPin,
  Users,
  Zap,
  ChevronRight,
  Facebook,
  Crown,
  Sparkles,
  BadgeCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "RFG Auction House — Quality Surplus at Unbeatable Prices",
  description:
    "Premium surplus auctions featuring UK & Japan imports, brand new items, and wholesale deals. RFG Auction House in Cabuyao — where every bid is a win.",
};

export default function RFGAuctionHousePage() {
  const services = [
    {
      icon: <Gavel size={28} />,
      title: "Surplus Auctions",
      desc: "Live and scheduled auctions with massive savings on quality surplus from global sources.",
    },
    {
      icon: <Package size={28} />,
      title: "Brand New Items",
      desc: "Factory-direct brand new merchandise at wholesale prices you won't find anywhere else.",
    },
    {
      icon: <Globe size={28} />,
      title: "UK & Japan Imports",
      desc: "Curated surplus from the UK and Japan — premium quality at a fraction of retail.",
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Wholesale Deals",
      desc: "Bulk pricing for resellers and businesses. The more you bid, the more you save.",
    },
  ];

  const categories = [
    { name: "Furniture", img: "/rfg-auction-house/items-bed-1.jpg", tag: "Top Seller" },
    { name: "Electronics", img: "/rfg-auction-house/items-electronics-65580.jpg", tag: "Hot Lots" },
    { name: "Premium Goods", img: "/rfg-auction-house/items-kitchen-1.jpg", tag: "Imported" },
    { name: "Wholesale", img: "/rfg-auction-house/items-toys-1.jpg", tag: "Bulk Deals" },
  ];

  const steps = [
    { num: "01", title: "Browse Lots", desc: "Explore our curated surplus inventory — updated weekly with fresh imports." },
    { num: "02", title: "Place Your Bid", desc: "Join our live auctions or visit in-store. Every item starts at rock-bottom prices." },
    { num: "03", title: "Win & Save", desc: "Walk away with premium goods at a fraction of retail. Quality guaranteed." },
  ];

  const galleryImages = [
    { src: "/rfg-auction-house/items-bed-1.jpg", alt: "Auction scene" },
    { src: "/rfg-auction-house/items-bed-2.jpg", alt: "Quality furniture" },
    { src: "/rfg-auction-house/items-electronics-65580.jpg", alt: "Electronics" },
    { src: "/rfg-auction-house/items-kitchen-1.jpg", alt: "Auction crowd" },
    { src: "/rfg-auction-house/items-toys-1.jpg", alt: "Premium goods" },
    { src: "/rfg-auction-house/items-toys-2.jpg", alt: "Great deals" },
    { src: "/rfg-auction-house/items-bed-1.jpg", alt: "Global imports" },
    { src: "/rfg-auction-house/items-bed-2.jpg", alt: "Warehouse" },
  ];

  const marqueeItems = [
    "SURPLUS AUCTIONS",
    "UK IMPORTS",
    "JAPAN IMPORTS",
    "WHOLESALE DEALS",
    "BRAND NEW ITEMS",
    "FURNITURE",
    "ELECTRONICS",
    "PREMIUM QUALITY",
    "UNBEATABLE PRICES",
    "CABUYAO",
  ];

  const reasons = [
    { icon: <ShieldCheck size={22} />, text: "Verified Quality" },
    { icon: <Truck size={22} />, text: "Global Sourcing" },
    { icon: <Crown size={22} />, text: "Premium Selection" },
    { icon: <BadgeCheck size={22} />, text: "Trusted Since Day 1" },
    { icon: <Zap size={22} />, text: "Unbeatable Prices" },
    { icon: <Users size={22} />, text: "Thousands Served" },
  ];

  return (
    <>
      <BusinessNavArrows currentSlug="rfg-auction-house" />
      <style
        dangerouslySetInnerHTML={{
          __html: `
/* ── VARIABLES ── */
:root {
  --rfg-deep: #0B0620;
  --rfg-surface: #150D35;
  --rfg-purple: #7C3AED;
  --rfg-purple-mid: #6D28D9;
  --rfg-violet: #A78BFA;
  --rfg-lavender: #C4B5FD;
  --rfg-faint: #EDE9FE;
  --rfg-orange: #E8650A;
  --rfg-amber: #F59E0B;
  --rfg-glow: #FF7A1A;
  --rfg-text: #F5F3FF;
  --rfg-muted: #9B95B8;
}

/* ── NAVBAR ── */
.rfg-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(11,6,32,0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(167,139,250,0.08);
  animation: fadeSlideDown 0.6s ease-out both;
}
.rfg-nav-inner {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
}
.rfg-nav-back {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  color: var(--rfg-muted);
  text-decoration: none;
  transition: color 0.2s;
  cursor: pointer;
}
.rfg-nav-back:hover {
  color: var(--rfg-text);
}
.rfg-nav-logo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.rfg-nav-logo img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid rgba(167,139,250,0.2);
  transition: transform 0.3s, border-color 0.3s;
  object-fit: cover;
}
.rfg-nav-logo img:hover {
  transform: scale(1.1);
  border-color: var(--rfg-orange);
}
.rfg-nav-cta {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  background: linear-gradient(135deg, var(--rfg-orange), var(--rfg-glow));
  color: #fff;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 13px;
  border-radius: 100px;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}
.rfg-nav-cta:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 20px rgba(232,101,10,0.4);
}

/* ── HERO ── */
.rfg-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--rfg-deep);
}
.rfg-hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.rfg-hero-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.25;
  filter: saturate(0.6);
}
.rfg-hero-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 70% 60% at 50% 45%, rgba(124,58,237,0.2) 0%, transparent 70%),
    linear-gradient(180deg, rgba(11,6,32,0.3) 0%, rgba(11,6,32,0.85) 60%, var(--rfg-deep) 100%);
  z-index: 1;
}
.rfg-hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 900px;
  padding: 0 24px;
}
.rfg-hero-logo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid var(--rfg-orange);
  box-shadow: 0 0 40px rgba(232,101,10,0.4), 0 0 80px rgba(124,58,237,0.3);
  margin: 0 auto 24px;
  animation: pulseGlow 3s ease-in-out infinite;
  object-fit: cover;
}
.rfg-hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(124,58,237,0.2);
  border: 1px solid rgba(167,139,250,0.3);
  border-radius: 100px;
  padding: 8px 20px;
  font-family: var(--font-body);
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--rfg-lavender);
  margin-bottom: 28px;
  animation: fadeSlideDown 0.8s ease-out 0.2s both;
}
.rfg-hero h1 {
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  line-height: 1.05;
  color: var(--rfg-text);
  margin-bottom: 12px;
  animation: fadeSlideDown 0.8s ease-out 0.4s both;
}
.rfg-hero h1 .hero-accent {
  background: linear-gradient(135deg, var(--rfg-orange), var(--rfg-amber), var(--rfg-glow));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmerOrange 4s ease-in-out infinite;
  background-size: 200% 100%;
}
.rfg-hero-sub {
  font-family: var(--font-body);
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--rfg-muted);
  max-width: 600px;
  margin: 0 auto 36px;
  line-height: 1.7;
  animation: fadeSlideDown 0.8s ease-out 0.6s both;
}
.rfg-hero-cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 36px;
  background: linear-gradient(135deg, var(--rfg-orange), var(--rfg-glow));
  color: #fff;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 16px;
  border-radius: 12px;
  text-decoration: none;
  box-shadow: 0 4px 30px rgba(232,101,10,0.4);
  transition: transform 0.2s, box-shadow 0.2s;
  animation: fadeSlideDown 0.8s ease-out 0.8s both;
  cursor: pointer;
}
.rfg-hero-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 40px rgba(232,101,10,0.6);
}

/* floating auction elements */
.hero-float-element {
  position: absolute;
  z-index: 1;
  pointer-events: none;
  animation: gentleFloat 6s ease-in-out infinite;
}
.hero-float-element.el-1 {
  top: 15%;
  left: 8%;
  animation-delay: 0s;
}
.hero-float-element.el-2 {
  top: 20%;
  right: 10%;
  animation-delay: 2s;
}
.hero-float-element.el-3 {
  bottom: 25%;
  left: 12%;
  animation-delay: 4s;
}
.hero-float-element.el-4 {
  bottom: 20%;
  right: 8%;
  animation-delay: 1s;
}
.float-card {
  background: rgba(124,58,237,0.15);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(167,139,250,0.2);
  border-radius: 12px;
  padding: 12px 18px;
  color: var(--rfg-lavender);
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
}
.float-card .fc-price {
  color: var(--rfg-glow);
  font-weight: 700;
  font-size: 18px;
  display: block;
  margin-top: 4px;
}

/* ── MARQUEE ── */
.rfg-marquee {
  background: linear-gradient(135deg, var(--rfg-purple-mid), var(--rfg-orange));
  padding: 14px 0;
  overflow: hidden;
  position: relative;
}
.rfg-marquee-track {
  display: flex;
  width: max-content;
  animation: marqueeScroll 30s linear infinite;
}
.rfg-marquee-track span {
  font-family: var(--font-heading);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #fff;
  white-space: nowrap;
  padding: 0 24px;
  display: inline-flex;
  align-items: center;
  gap: 16px;
}
.rfg-marquee-track span::after {
  content: "◆";
  font-size: 8px;
  opacity: 0.6;
}

/* ── SECTIONS BASE ── */
.rfg-section {
  padding: 100px 24px;
  position: relative;
}
.rfg-section-dark {
  background: var(--rfg-deep);
}
.rfg-section-surface {
  background: var(--rfg-surface);
}
.rfg-section-title {
  font-family: var(--font-heading);
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 700;
  color: var(--rfg-text);
  text-align: center;
  margin-bottom: 12px;
}
.rfg-section-sub {
  font-family: var(--font-body);
  font-size: 16px;
  color: var(--rfg-muted);
  text-align: center;
  max-width: 560px;
  margin: 0 auto 56px;
  line-height: 1.7;
}
.rfg-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-body);
  font-size: 12px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--rfg-orange);
  margin-bottom: 16px;
  text-align: center;
}

/* ── SERVICES CARDS (staggered waterfall) ── */
.rfg-services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  max-width: 1100px;
  margin: 0 auto;
}
.rfg-service-card {
  background: rgba(124,58,237,0.08);
  border: 1px solid rgba(167,139,250,0.12);
  border-radius: 20px;
  padding: 36px 28px;
  transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
  cursor: default;
}
.rfg-service-card:nth-child(2) { margin-top: 32px; }
.rfg-service-card:nth-child(3) { margin-top: 16px; }
.rfg-service-card:nth-child(4) { margin-top: 48px; }
.rfg-service-card:hover {
  transform: translateY(-6px);
  border-color: var(--rfg-purple);
  box-shadow: 0 12px 48px rgba(124,58,237,0.2);
}
.rfg-service-icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--rfg-purple), var(--rfg-orange));
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-bottom: 20px;
}
.rfg-service-card h3 {
  font-family: var(--font-heading);
  font-size: 20px;
  font-weight: 600;
  color: var(--rfg-text);
  margin-bottom: 10px;
}
.rfg-service-card p {
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--rfg-muted);
  line-height: 1.7;
}

/* ── CATEGORIES (tilted showcase) ── */
.rfg-categories-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1100px;
  margin: 0 auto;
}
.rfg-cat-card {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 3/4;
  cursor: pointer;
  transition: transform 0.4s cubic-bezier(.16,1,.3,1);
}
.rfg-cat-card:hover {
  transform: scale(1.03);
}
.rfg-cat-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s;
}
.rfg-cat-card:hover img {
  transform: scale(1.08);
}
.rfg-cat-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(0deg, rgba(11,6,32,0.9) 0%, rgba(11,6,32,0.1) 50%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px;
}
.rfg-cat-tag {
  display: inline-block;
  background: var(--rfg-orange);
  color: #fff;
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 100px;
  margin-bottom: 10px;
  width: fit-content;
}
.rfg-cat-overlay h3 {
  font-family: var(--font-heading);
  font-size: 22px;
  font-weight: 600;
  color: #fff;
}

/* ── STATS RIBBON ── */
.rfg-stats-ribbon {
  background: linear-gradient(135deg, var(--rfg-purple-mid) 0%, var(--rfg-deep) 50%, var(--rfg-orange) 100%);
  padding: 64px 24px;
  position: relative;
  overflow: hidden;
}
.rfg-stats-ribbon::before {
  content: "";
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    90deg,
    transparent 0px,
    transparent 120px,
    rgba(255,255,255,0.03) 120px,
    rgba(255,255,255,0.03) 121px
  );
}
.rfg-stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}
.rfg-stat {
  text-align: center;
}
.rfg-stat-num {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #fff;
  line-height: 1;
  margin-bottom: 8px;
}
.rfg-stat-label {
  font-family: var(--font-body);
  font-size: 14px;
  color: rgba(255,255,255,0.7);
  letter-spacing: 1px;
  text-transform: uppercase;
}

/* ── HOW IT WORKS ── */
.rfg-steps {
  display: flex;
  gap: 0;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
}
.rfg-steps::before {
  content: "";
  position: absolute;
  top: 36px;
  left: 80px;
  right: 80px;
  height: 2px;
  background: linear-gradient(90deg, var(--rfg-purple), var(--rfg-orange), var(--rfg-purple));
}
.rfg-step {
  flex: 1;
  text-align: center;
  position: relative;
  padding: 0 20px;
}
.rfg-step-num {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: var(--rfg-surface);
  border: 2px solid var(--rfg-purple);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-size: 24px;
  font-weight: 700;
  color: var(--rfg-orange);
  margin: 0 auto 24px;
  position: relative;
  z-index: 1;
  box-shadow: 0 0 30px rgba(124,58,237,0.3);
  transition: box-shadow 0.3s, border-color 0.3s;
}
.rfg-step:hover .rfg-step-num {
  border-color: var(--rfg-orange);
  box-shadow: 0 0 40px rgba(232,101,10,0.4);
}
.rfg-step h3 {
  font-family: var(--font-heading);
  font-size: 20px;
  font-weight: 600;
  color: var(--rfg-text);
  margin-bottom: 10px;
}
.rfg-step p {
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--rfg-muted);
  line-height: 1.7;
}

/* ── TRUST BADGES ── */
.rfg-trust-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  max-width: 900px;
  margin: 0 auto;
}
.rfg-trust-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(124,58,237,0.1);
  border: 1px solid rgba(167,139,250,0.15);
  border-radius: 100px;
  padding: 14px 28px;
  color: var(--rfg-lavender);
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  transition: transform 0.2s, border-color 0.3s, background 0.3s;
  cursor: default;
}
.rfg-trust-pill:hover {
  transform: translateY(-3px);
  border-color: var(--rfg-orange);
  background: rgba(232,101,10,0.1);
}
.rfg-trust-pill svg {
  color: var(--rfg-orange);
  flex-shrink: 0;
}

/* ── GALLERY (auto-scroll filmstrip) ── */
.rfg-gallery-strip {
  overflow: hidden;
  padding: 0;
}
.rfg-gallery-track {
  display: flex;
  width: max-content;
  animation: galleryScroll 40s linear infinite;
}
.rfg-gallery-item {
  flex-shrink: 0;
  width: 320px;
  height: 220px;
  margin-right: 16px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
}
.rfg-gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}
.rfg-gallery-item:hover img {
  transform: scale(1.06);
}
.rfg-gallery-item::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 16px;
  border: 1px solid rgba(167,139,250,0.15);
  pointer-events: none;
}

/* ── CTA FINALE ── */
.rfg-cta-finale {
  text-align: center;
  padding: 100px 24px;
  background: linear-gradient(180deg, var(--rfg-deep) 0%, var(--rfg-surface) 40%, var(--rfg-deep) 100%);
  position: relative;
  overflow: hidden;
}
.rfg-cta-finale::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%);
  animation: breathePurple 5s ease-in-out infinite;
}
.rfg-cta-logo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid var(--rfg-purple);
  box-shadow: 0 0 50px rgba(124,58,237,0.3);
  margin: 0 auto 28px;
  object-fit: cover;
  position: relative;
  z-index: 1;
  animation: pulseGlow 3s ease-in-out infinite;
}
.rfg-cta-finale h2 {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--rfg-text);
  margin-bottom: 16px;
  position: relative;
  z-index: 1;
}
.rfg-cta-finale p {
  font-family: var(--font-body);
  font-size: 17px;
  color: var(--rfg-muted);
  max-width: 520px;
  margin: 0 auto 40px;
  line-height: 1.7;
  position: relative;
  z-index: 1;
}
.rfg-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 18px 44px;
  background: linear-gradient(135deg, var(--rfg-orange), var(--rfg-glow));
  color: #fff;
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 17px;
  border-radius: 14px;
  text-decoration: none;
  box-shadow: 0 6px 36px rgba(232,101,10,0.4);
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  position: relative;
  z-index: 1;
  animation: pulseBid 2s ease-in-out infinite;
}
.rfg-cta-btn:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 10px 48px rgba(232,101,10,0.6);
}
.rfg-cta-location {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
  color: var(--rfg-muted);
  font-family: var(--font-body);
  font-size: 14px;
  position: relative;
  z-index: 1;
}

/* ── KEYFRAMES ── */
@keyframes fadeSlideDown {
  from { opacity: 0; transform: translateY(-24px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes shimmerOrange {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 0 30px rgba(232,101,10,0.3), 0 0 60px rgba(124,58,237,0.2); }
  50% { box-shadow: 0 0 50px rgba(232,101,10,0.5), 0 0 90px rgba(124,58,237,0.35); }
}
@keyframes gentleFloat {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-12px) rotate(1deg); }
  66% { transform: translateY(6px) rotate(-1deg); }
}
@keyframes marqueeScroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
@keyframes galleryScroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
@keyframes breathePurple {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  50% { transform: translate(-50%, -50%) scale(1.15); opacity: 0.8; }
}
@keyframes pulseBid {
  0%, 100% { box-shadow: 0 6px 36px rgba(232,101,10,0.4); }
  50% { box-shadow: 0 6px 50px rgba(232,101,10,0.65); }
}
@keyframes spinSlow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
@keyframes sparkle {
  0%, 100% { opacity: 0.3; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.2); }
}

/* ── RESPONSIVE ── */
@media (max-width: 1024px) {
  .rfg-services-grid { grid-template-columns: repeat(2, 1fr); }
  .rfg-service-card:nth-child(2),
  .rfg-service-card:nth-child(3),
  .rfg-service-card:nth-child(4) { margin-top: 0; }
  .rfg-categories-row { grid-template-columns: repeat(2, 1fr); }
  .rfg-stats-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
}
@media (max-width: 768px) {
  .rfg-hero { min-height: 90vh; }
  .rfg-hero-logo { width: 64px; height: 64px; }
  .rfg-section { padding: 72px 20px; }
  .rfg-services-grid { grid-template-columns: 1fr; gap: 16px; }
  .rfg-categories-row { grid-template-columns: 1fr 1fr; gap: 12px; }
  .rfg-cat-card { aspect-ratio: 4/5; }
  .rfg-steps { flex-direction: column; gap: 40px; }
  .rfg-steps::before { display: none; }
  .rfg-stats-grid { grid-template-columns: repeat(2, 1fr); }
  .rfg-gallery-item { width: 260px; height: 180px; }
  .hero-float-element { display: none; }
}
@media (max-width: 480px) {
  .rfg-categories-row { grid-template-columns: 1fr; }
  .rfg-stats-grid { grid-template-columns: 1fr 1fr; gap: 20px; }
  .rfg-trust-row { flex-direction: column; align-items: center; }
}

/* ── REDUCED MOTION ── */
@media (prefers-reduced-motion: reduce) {
  .rfg-marquee-track,
  .rfg-gallery-track { animation: none; }
  .hero-float-element { animation: none; }
  .rfg-hero-logo,
  .rfg-cta-logo { animation: none; }
  .rfg-hero h1 .hero-accent { animation: none; }
  .rfg-cta-btn { animation: none; }
  .rfg-cta-finale::before { animation: none; }
  .rfg-hero-badge,
  .rfg-hero h1,
  .rfg-hero-sub,
  .rfg-hero-cta { animation: none; opacity: 1; transform: none; }
}
`,
        }}
      />

      {/* ════════ NAVBAR ════════ */}
      <nav className="rfg-nav">
        <div className="rfg-nav-inner">
          <Link href="/" className="rfg-nav-back">
            <ArrowLeft size={16} /> Back
          </Link>
          <Link href="/business/rfg-auction-house" className="rfg-nav-logo">
            <Image
              src="/logos/rfg-auction.jpg"
              alt="RFG Auction House"
              width={40}
              height={40}
            />
          </Link>
          <a
            href="https://www.facebook.com/RFGauctionhouse"
            target="_blank"
            rel="noopener noreferrer"
            className="rfg-nav-cta"
          >
            <Facebook size={14} /> Follow Us
          </a>
        </div>
      </nav>

      {/* ════════ HERO ════════ */}
      <section className="rfg-hero">
        <div className="rfg-hero-bg">
          <Image
            src="/rfg-auction-house/items-bed-1.jpg"
            alt="RFG Auction House"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="rfg-hero-overlay" />

        {/* floating auction cards */}
        <div className="hero-float-element el-1">
          <div className="float-card">
            UK Import <span className="fc-price">₱299</span>
          </div>
        </div>
        <div className="hero-float-element el-2">
          <div className="float-card">
            Japan Surplus <span className="fc-price">₱199</span>
          </div>
        </div>
        <div className="hero-float-element el-3">
          <div className="float-card">
            Wholesale Lot <span className="fc-price">₱2,499</span>
          </div>
        </div>
        <div className="hero-float-element el-4">
          <div className="float-card">
            Brand New <span className="fc-price">₱599</span>
          </div>
        </div>

        <div className="rfg-hero-content">
          <Image
            src="/logos/rfg-auction.jpg"
            alt="RFG Auction House Logo"
            width={80}
            height={80}
            className="rfg-hero-logo"
          />
          <div className="rfg-hero-badge">
            <Sparkles size={14} />
            Cabuyao&apos;s Premier Auction House
          </div>
          <h1>
            Quality Surplus at{" "}
            <span className="hero-accent">Unbeatable Prices</span>
          </h1>
          <p className="rfg-hero-sub">
            Premium UK &amp; Japan imports, brand new items, and wholesale
            deals&mdash;all under one roof. Every bid is a win at RFG.
          </p>
          <Link
            href="https://www.facebook.com/RFGauctionhouse"
            target="_blank"
            rel="noopener noreferrer"
            className="rfg-hero-cta"
          >
            <Facebook size={18} />
            Visit Our Page
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ════════ MARQUEE TICKER ════════ */}
      <div className="rfg-marquee">
        <div className="rfg-marquee-track">
          <div style={{ display: "flex" }}>
            {marqueeItems.map((item, i) => (
              <span key={`a-${i}`}>{item}</span>
            ))}
          </div>
          <div style={{ display: "flex" }}>
            {marqueeItems.map((item, i) => (
              <span key={`b-${i}`}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ════════ SERVICES (waterfall grid) ════════ */}
      <section className="rfg-section rfg-section-dark">
        <ScrollReveal>
          <div style={{ textAlign: "center" }}>
            <div className="rfg-label">
              <Gavel size={14} /> What We Offer
            </div>
          </div>
          <h2 className="rfg-section-title">
            Four Ways to Score Big
          </h2>
          <p className="rfg-section-sub">
            From live surplus auctions to wholesale bulk deals, RFG Auction
            House gives you access to premium goods at prices that defy retail.
          </p>
        </ScrollReveal>
        <div className="rfg-services-grid">
          {services.map((s, i) => (
            <ScrollReveal key={i} delay={i * 120}>
              <div className="rfg-service-card">
                <div className="rfg-service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ════════ CATEGORIES ════════ */}
      <section className="rfg-section rfg-section-surface">
        <ScrollReveal>
          <div style={{ textAlign: "center" }}>
            <div className="rfg-label">
              <Package size={14} /> Browse Categories
            </div>
          </div>
          <h2 className="rfg-section-title">
            Explore Our Lots
          </h2>
          <p className="rfg-section-sub">
            Quality-checked surplus across every category. From elegant furniture
            to cutting-edge electronics.
          </p>
        </ScrollReveal>
        <div className="rfg-categories-row">
          {categories.map((cat, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="rfg-cat-card">
                <Image
                  src={cat.img}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="rfg-cat-overlay">
                  <span className="rfg-cat-tag">{cat.tag}</span>
                  <h3>{cat.name}</h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ════════ STATS RIBBON ════════ */}
      <div className="rfg-stats-ribbon">
        <div className="rfg-stats-grid">
          <ScrollReveal delay={0}>
            <div className="rfg-stat">
              <div className="rfg-stat-num">
                <CountUp end={5000} suffix="+" />
              </div>
              <div className="rfg-stat-label">Items Sold</div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="rfg-stat">
              <div className="rfg-stat-num">
                <CountUp end={70} suffix="%" />
              </div>
              <div className="rfg-stat-label">Avg. Savings</div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="rfg-stat">
              <div className="rfg-stat-num">
                <CountUp end={2000} suffix="+" />
              </div>
              <div className="rfg-stat-label">Happy Bidders</div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={450}>
            <div className="rfg-stat">
              <div className="rfg-stat-num">
                <CountUp end={3} suffix="" />
              </div>
              <div className="rfg-stat-label">Countries Sourced</div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ════════ HOW IT WORKS ════════ */}
      <section className="rfg-section rfg-section-dark">
        <ScrollReveal>
          <div style={{ textAlign: "center" }}>
            <div className="rfg-label">
              <Star size={14} /> How It Works
            </div>
          </div>
          <h2 className="rfg-section-title">
            Three Steps to Winning
          </h2>
          <p className="rfg-section-sub">
            It&apos;s simple, transparent, and exciting. Here&apos;s how you
            score big at RFG.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="rfg-steps">
            {steps.map((step, i) => (
              <div className="rfg-step" key={i}>
                <div className="rfg-step-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ════════ TRUST BADGES ════════ */}
      <section className="rfg-section rfg-section-surface">
        <ScrollReveal>
          <div style={{ textAlign: "center" }}>
            <div className="rfg-label">
              <ShieldCheck size={14} /> Why Choose RFG
            </div>
          </div>
          <h2 className="rfg-section-title">
            Trusted by Thousands
          </h2>
          <p className="rfg-section-sub">
            We stand behind every item. Quality-checked, globally sourced, and
            priced to move.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="rfg-trust-row">
            {reasons.map((r, i) => (
              <div className="rfg-trust-pill" key={i}>
                {r.icon}
                {r.text}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ════════ GALLERY FILMSTRIP ════════ */}
      <section className="rfg-section rfg-section-dark" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <ScrollReveal>
          <div style={{ textAlign: "center", padding: "0 24px" }}>
            <div className="rfg-label">
              <Sparkles size={14} /> Gallery
            </div>
          </div>
          <h2 className="rfg-section-title" style={{ marginBottom: 48 }}>
            Inside RFG Auction House
          </h2>
        </ScrollReveal>
        <div className="rfg-gallery-strip">
          <div className="rfg-gallery-track">
            <div style={{ display: "flex" }}>
              {galleryImages.map((img, i) => (
                <div className="rfg-gallery-item" key={`ga-${i}`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="320px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
            <div style={{ display: "flex" }}>
              {galleryImages.map((img, i) => (
                <div className="rfg-gallery-item" key={`gb-${i}`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="320px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════ CTA FINALE ════════ */}
      <section className="rfg-cta-finale">
        <ScrollReveal>
          <Image
            src="/logos/rfg-auction.jpg"
            alt="RFG Auction House"
            width={100}
            height={100}
            className="rfg-cta-logo"
          />
          <h2>
            Your Next Great Deal Awaits
          </h2>
          <p>
            Join thousands of smart shoppers who score premium surplus at
            unbeatable prices. Follow us on Facebook for the latest auction
            schedules and exclusive drops.
          </p>
          <Link
            href="https://www.facebook.com/RFGauctionhouse"
            target="_blank"
            rel="noopener noreferrer"
            className="rfg-cta-btn"
          >
            <Facebook size={20} />
            Follow RFG Auction House
            <ChevronRight size={18} />
          </Link>
          <div className="rfg-cta-location">
            <MapPin size={16} />
            Cabuyao, Laguna
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
