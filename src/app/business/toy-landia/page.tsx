"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { bp } from "@/lib/basePath";
import {
  ArrowLeft, ArrowRight, Facebook, Gift, Heart,
  Package, PartyPopper, Scale, ShoppingBag, ShoppingCart,
  Sparkles, Star, Truck, Zap, CheckCircle2, Clock,
  MapPin, Store, BadgeCheck,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import BusinessNavArrows from "@/components/BusinessNavArrows";
import BusinessPopup from "@/components/BusinessPopup";

/* ── COLORS ───────────────────────────────────────────────────────────────── */
const C = {
  red:    "#F01800",
  yellow: "#FFD800",
  dark:   "#1A0000",
  black:  "#111111",
  white:  "#FFFFFF",
  cream:  "#FFF8EE",
  bg:     "#0F0000",
};

const FACEBOOK = "https://www.facebook.com/officialtoylandia";

/* ── GALLERY IMAGES ──────────────────────────────────────────────────────── */
const GALLERY_GROUPS = [
  ["/toy-landia/toy-1.jpg", "/toy-landia/toy-2.jpg", "/toy-landia/toy-3.jpg", "/toy-landia/toy-4.jpg"],
  ["/toy-landia/toy-5.jpg", "/toy-landia/toy-6.jpg", "/toy-landia/toy-7.jpg", "/toy-landia/toy-8.jpg"],
];

const FEATURES = [
  { icon: Scale,       title: "Sold Per Kilo",          desc: "Pick more, pay less per piece — the most exciting way to shop for toys in the Philippines.", color: C.yellow, tc: C.black },
  { icon: BadgeCheck,  title: "Brand New from China",   desc: "Every toy is brand-new, direct imported — safe, quality, and fun for kids of all ages.",     color: C.red,    tc: C.white },
  { icon: ShoppingCart,title: "Walk-In or Live Selling",desc: "Come visit in Cabuyao or shop live on Facebook Mon–Sat. Both options are easy and exciting.",    color: C.dark,   tc: C.white },
  { icon: Truck,       title: "Ships Nationwide",       desc: "Can't visit? Order online and we'll deliver right to your door anywhere in the Philippines.",   color: C.yellow, tc: C.black },
];

const STEPS = [
  { n: "01", icon: Facebook,     title: "Follow or Walk In",     desc: "Catch our Facebook live or drop by the store in Cabuyao — see what's freshly stocked.",         color: C.red    },
  { n: "02", icon: ShoppingBag,  title: "Fill Your Basket",      desc: "Dolls, action figures, blocks, party toys — grab everything that catches your eye.",              color: C.yellow },
  { n: "03", icon: Scale,        title: "Weigh Your Haul",       desc: "Simple per-kilo pricing means bigger baskets = more savings. No complicated markups.",           color: C.red    },
  { n: "04", icon: Gift,         title: "Take Home More Fun",    desc: "Perfect for party giveaways, reseller packs, or just making kids (and parents) very happy.",      color: C.yellow },
];

const WHO = [
  { icon: Heart,        title: "Budget Parents",        desc: "Stretch every peso further with bulk-friendly per-kilo pricing.",     color: C.red    },
  { icon: PartyPopper,  title: "Party Planners",        desc: "Build colorful gift bags for birthdays and school celebrations.",      color: C.yellow },
  { icon: Package,      title: "Resellers & Bulk",      desc: "Already structured for volume — source your whole stock in one stop.", color: C.red    },
  { icon: Sparkles,     title: "Everyday Toy Lovers",   desc: "Every visit feels like a toy hunt. Browsing here is half the fun.",    color: C.yellow },
];

/* ── ROTATING GALLERY ────────────────────────────────────────────────────── */
function ToyGallery() {
  const [group, setGroup] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    const t = setInterval(() => {
      setPhase("out");
      setTimeout(() => { setGroup(g => (g + 1) % GALLERY_GROUPS.length); setPhase("in"); }, 350);
    }, 3800);
    return () => clearInterval(t);
  }, []);

  const imgs = GALLERY_GROUPS[group];
  const borders = [C.red, C.yellow, C.red, C.yellow];
  const shadows = [C.yellow, C.red, C.yellow, C.red];

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
        {imgs.map((src, i) => (
          <div key={`${group}-${i}`} style={{
            borderRadius: 20, overflow: "hidden",
            border: `4px solid ${borders[i]}`,
            boxShadow: `6px 6px 0 ${shadows[i]}`,
            transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)`,
            opacity: phase === "out" ? 0 : 1,
            transition: `opacity 0.35s ease, transform 0.4s cubic-bezier(.34,1.3,.64,1)`,
            transitionDelay: `${i * 55}ms`,
          }}>
            <img src={bp(src)} alt={`Toy ${i + 1}`} style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block" }} />
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 18 }}>
        {GALLERY_GROUPS.map((_, i) => (
          <button key={i} onClick={() => setGroup(i)} style={{
            width: i === group ? 32 : 12, height: 12, borderRadius: 99,
            border: `2px solid ${C.black}`, background: i === group ? C.red : C.yellow,
            boxShadow: i === group ? `2px 2px 0 ${C.black}` : "none",
            cursor: "pointer", transition: "all .3s ease",
          }} />
        ))}
      </div>
    </div>
  );
}

/* ── PAGE ─────────────────────────────────────────────────────────────────── */
export default function ToyLandiaPage() {
  return (
    <main style={{ background: C.bg, color: C.white, overflowX: "hidden", fontFamily: "'Nunito','Inter',system-ui,sans-serif" }}>
      <BusinessNavArrows currentSlug="toy-landia" />
      <BusinessPopup config={{
        storageKey: "popup-toy-landia",
        delay: 1500,
        headerBg: "linear-gradient(135deg, #500000 0%, #900000 50%, #F01800 100%)",
        headerIcon: "🎁",
        modalBg: "#0F0000",
        eyebrow: "TOY HUNT TIME",
        eyebrowColor: "#FFD800",
        title: "More toys, more savings, more fun.",
        titleColor: "#FFD800",
        body: "Shop brand-new toys per kilo for gifts, giveaways, party packs, and reseller bundles in one colorful toy haul.",
        bodyColor: "rgba(255,216,0,0.5)",
        primaryCTA: "Browse Toy Picks",
        primaryHref: "#gallery",
        ctaBg: "#FFD800",
        ctaColor: "#1A0000",
        secondaryCTA: "See Gallery",
        secondaryColor: "rgba(255,216,0,0.4)",
        badge: "Per Kilo",
        badgeBg: "rgba(255,216,0,0.15)",
        badgeColor: "#FFD800",
        accentLine: "#FFD800",
        logoSrc: "/logos/toy-landia.jpg",
      }} />

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800;900&display=swap');

        .tl-font  { font-family: 'Fredoka One', cursive; letter-spacing: 0.01em; }
        .tl-body  { font-family: 'Nunito', system-ui, sans-serif; }

        @keyframes tlFloat   { 0%,100%{transform:translateY(0)rotate(-2deg)}50%{transform:translateY(-18px)rotate(2deg)} }
        @keyframes tlSpin    { to{transform:rotate(360deg)} }
        @keyframes tlSpinR   { to{transform:rotate(-360deg)} }
        @keyframes tlBounce  { 0%,100%{transform:translateY(0)}40%{transform:translateY(-16px)}70%{transform:translateY(-5px)} }
        @keyframes tlReveal  { from{opacity:0;transform:translateY(32px)scale(.94)}to{opacity:1;transform:translateY(0)scale(1)} }
        @keyframes tlPulse   { 0%,100%{box-shadow:0 0 0 0 rgba(240,24,0,.5)}50%{box-shadow:0 0 0 20px rgba(240,24,0,0)} }
        @keyframes tlShine   { 0%{background-position:-200% center}100%{background-position:200% center} }
        @keyframes tlMarquee { from{transform:translateX(0)}to{transform:translateX(-50%)} }
        @keyframes tlGlow    { 0%,100%{opacity:.3;transform:scale(1)}50%{opacity:.6;transform:scale(1.07)} }
        @keyframes tlHeroBob { 0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-16px) rotate(2deg)} }
        @keyframes tlStagger { from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)} }
        @keyframes tlZigPulse{ 0%,100%{stroke-dashoffset:0}50%{stroke-dashoffset:40} }

        .tl-stagger > * { opacity:0; animation:tlStagger .65s cubic-bezier(.34,1.56,.64,1) forwards; }
        .tl-stagger > *:nth-child(1){animation-delay:.05s}
        .tl-stagger > *:nth-child(2){animation-delay:.18s}
        .tl-stagger > *:nth-child(3){animation-delay:.30s}
        .tl-stagger > *:nth-child(4){animation-delay:.42s}
        .tl-stagger > *:nth-child(5){animation-delay:.54s}
        .tl-stagger > *:nth-child(6){animation-delay:.66s}

        .tl-card { transition:transform .3s cubic-bezier(.34,1.56,.64,1),box-shadow .3s ease; }
        .tl-card:hover { transform:translateY(-8px) scale(1.02); }
        .tl-btn  { transition:transform .28s cubic-bezier(.34,1.56,.64,1); cursor:pointer; }
        .tl-btn:hover  { transform:translateY(-4px) scale(1.04); }
        .tl-btn:active { transform:scale(.97); }
        .tl-pulse { animation:tlPulse 2.4s ease-in-out infinite; }

        .tl-shine {
          background: linear-gradient(90deg,${C.yellow} 0%,${C.white} 30%,${C.yellow} 60%,${C.red} 80%,${C.yellow} 100%);
          background-size:200% auto;
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          background-clip:text;
          animation:tlShine 5s linear infinite;
        }

        .tl-polka {
          background-image:radial-gradient(circle,rgba(255,255,255,.04) 2px,transparent 2px);
          background-size:26px 26px;
          pointer-events:none;
        }

        @media(max-width:768px){
          .tl-grid-2{grid-template-columns:1fr !important}
          .tl-grid-4{grid-template-columns:1fr 1fr !important}
        }
      `}} />

      {/* ══ NAV ══════════════════════════════════════════════════════════════ */}
      <nav style={{ position:"fixed",top:0,left:0,right:0,zIndex:50,background:"rgba(15,0,0,0.94)",backdropFilter:"blur(16px)",borderBottom:`3px solid ${C.red}` }}>
        <div style={{ maxWidth:1280,margin:"0 auto",padding:"0 24px",height:64,display:"flex",alignItems:"center",justifyContent:"space-between" }}>
          <Link href="/" style={{ display:"flex",alignItems:"center",gap:8,color:"rgba(255,255,255,.45)",textDecoration:"none",fontSize:14,fontWeight:700,transition:"color .2s" }}
            onMouseEnter={e=>(e.currentTarget as HTMLElement).style.color=C.white}
            onMouseLeave={e=>(e.currentTarget as HTMLElement).style.color="rgba(255,255,255,.45)"}
          >
            <ArrowLeft size={16}/><span className="tl-body">All Businesses</span>
          </Link>

          <div style={{ display:"flex",alignItems:"center",gap:10 }}>
            <img src={bp("/logos/toy-landia.jpg")} alt="Toy Landia"
              style={{ height:38,width:38,objectFit:"contain",borderRadius:10,border:`2px solid ${C.yellow}`,boxShadow:`2px 2px 0 ${C.black}` }} />
            <span className="tl-font" style={{ fontSize:20,color:C.yellow,letterSpacing:"0.02em" }}>Toy Landia</span>
          </div>

          <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="tl-btn"
            style={{
              display:"flex",alignItems:"center",gap:6,
              background:C.red,color:C.white,textDecoration:"none",
              borderRadius:12,padding:"8px 18px",fontSize:13,fontWeight:800,
              border:`3px solid ${C.black}`,boxShadow:`3px 3px 0 ${C.black}`,
            }}
          >
            <Facebook size={14}/><span className="tl-body">Follow Us</span>
          </a>
        </div>
      </nav>

      {/* ══ HERO ═════════════════════════════════════════════════════════════ */}
      <section style={{ position:"relative",minHeight:"100vh",display:"flex",alignItems:"center",paddingTop:64,overflow:"hidden" }}>
        {/* Starburst BG */}
        <div style={{
          position:"absolute",inset:0,zIndex:0,
          backgroundImage:`conic-gradient(from 0deg at 50% 50%, ${C.red} 0deg 6deg, ${C.bg} 6deg 12deg, ${C.red} 12deg 18deg, ${C.bg} 18deg 24deg, ${C.red} 24deg 30deg, ${C.bg} 30deg 360deg)`,
          opacity:0.07,
        }}/>
        <div style={{
          position:"absolute",inset:0,zIndex:0,
          background:`radial-gradient(ellipse at 35% 45%, rgba(240,24,0,.22) 0%, rgba(255,216,0,.08) 40%, rgba(15,0,0,1) 72%)`,
        }}/>
        <div className="tl-polka" style={{ position:"absolute",inset:0,zIndex:0 }}/>

        {/* Spinning rings */}
        <div style={{ position:"absolute",top:"48%",left:"60%",transform:"translate(-50%,-50%)",zIndex:0,pointerEvents:"none" }}>
          <div style={{ width:600,height:600,borderRadius:"50%",border:`2px dashed rgba(240,24,0,.12)`,animation:"tlSpin 50s linear infinite" }}/>
          <div style={{ position:"absolute",inset:60,borderRadius:"50%",border:`2px dotted rgba(255,216,0,.1)`,animation:"tlSpinR 32s linear infinite" }}/>
        </div>

        {/* Floating stars */}
        {[
          {top:"15%",left:"5%", c:C.yellow,s:28,d:"0s"},
          {top:"25%",left:"20%",c:C.red,   s:16,d:"1.1s"},
          {top:"10%",right:"8%",c:C.yellow,s:22,d:"0.4s"},
          {top:"35%",right:"5%",c:C.red,   s:18,d:"1.7s"},
          {bottom:"20%",left:"3%",  c:C.yellow,s:20,d:"2s"},
          {bottom:"30%",right:"12%",c:C.red,   s:14,d:"0.8s"},
        ].map((p,i)=>(
          <div key={i} style={{
            position:"absolute",zIndex:1,
            top:(p as any).top,left:(p as any).left,right:(p as any).right,bottom:(p as any).bottom,
            animation:`tlFloat ${5.5+i*.6}s ease-in-out infinite ${p.d}`,pointerEvents:"none",
          }}>
            <Star size={p.s} fill={p.c} style={{color:p.c,filter:"drop-shadow(0 2px 8px rgba(0,0,0,.5))",opacity:.65}}/>
          </div>
        ))}

        {/* Layout: left text + right image */}
        <div style={{ position:"relative",zIndex:2,maxWidth:1280,margin:"0 auto",padding:"60px 32px 100px",width:"100%",display:"grid",gridTemplateColumns:"1fr 1fr",gap:56,alignItems:"center" }} className="tl-grid-2">

          {/* Left — text */}
          <div className="tl-stagger">
            {/* Eyebrow badges */}
            <div style={{ display:"flex",flexWrap:"wrap",gap:8,marginBottom:28 }}>
              {[
                {label:"Toys Per Kilo",     bg:C.yellow,tc:C.black},
                {label:"Brand New from China", bg:"rgba(255,255,255,.1)",tc:C.white,b:"rgba(255,255,255,.2)"},
                {label:"Ships Nationwide",  bg:C.red,   tc:C.white},
              ].map(({label,bg,tc,b})=>(
                <span key={label} style={{
                  display:"inline-block",padding:"7px 16px",borderRadius:40,
                  background:bg,color:tc,fontWeight:900,fontSize:12,
                  border:`2px solid ${b||C.black}`,boxShadow:b?undefined:`3px 3px 0 ${C.black}`,
                }} className="tl-body">{label}</span>
              ))}
            </div>

            {/* Headline */}
            <h1 className="tl-font" style={{ fontSize:"clamp(44px,6.5vw,88px)",lineHeight:0.98,marginBottom:20 }}>
              <span style={{ color:C.white }}>More Toys.</span><br/>
              <span className="tl-shine">More Fun.</span><br/>
              <span style={{ color:C.white }}>More </span>
              <span style={{ color:C.yellow }}>Savings.</span>
            </h1>

            <p className="tl-body" style={{ fontSize:17,lineHeight:1.75,color:"rgba(255,255,255,.65)",maxWidth:480,marginBottom:36,fontWeight:600 }}>
              Brand-new toys from China, sold <strong style={{color:C.yellow}}>per kilogram</strong> — the most exciting toy shopping experience in Cabuyao. Perfect for families, resellers, and party planners.
            </p>

            {/* CTAs */}
            <div style={{ display:"flex",gap:14,flexWrap:"wrap",marginBottom:40 }}>
              <a href={FACEBOOK} target="_blank" rel="noopener noreferrer"
                className="tl-btn tl-pulse"
                style={{
                  display:"inline-flex",alignItems:"center",gap:10,
                  background:C.red,color:C.white,textDecoration:"none",
                  padding:"16px 32px",borderRadius:18,fontWeight:900,
                  border:`4px solid ${C.black}`,boxShadow:`6px 6px 0 ${C.black}`,
                }}
              >
                <Facebook size={20}/>
                <span className="tl-font" style={{fontSize:20}}>Shop on Facebook</span>
                <ArrowRight size={18}/>
              </a>
              <a href="#gallery"
                className="tl-btn"
                style={{
                  display:"inline-flex",alignItems:"center",gap:10,
                  background:C.yellow,color:C.black,textDecoration:"none",
                  padding:"16px 24px",borderRadius:18,fontWeight:900,
                  border:`4px solid ${C.black}`,boxShadow:`6px 6px 0 ${C.black}`,
                }}
              >
                <Sparkles size={18}/>
                <span className="tl-font" style={{fontSize:18}}>See Gallery</span>
              </a>
            </div>

            {/* Trust row */}
            <div style={{ display:"flex",gap:20,flexWrap:"wrap" }}>
              {[
                {icon:CheckCircle2,text:"Direct China Import",c:C.yellow},
                {icon:CheckCircle2,text:"100% Brand New",     c:C.red   },
                {icon:CheckCircle2,text:"Open Mon–Sat",       c:C.yellow},
              ].map(({icon:Icon,text,c})=>(
                <div key={text} style={{display:"flex",alignItems:"center",gap:7}}>
                  <Icon size={15} style={{color:c}}/>
                  <span className="tl-body" style={{fontSize:13,color:"rgba(255,255,255,.55)",fontWeight:700}}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — hero image mosaic */}
          <div style={{ position:"relative" }}>
            {/* Big hero */}
            <div style={{
              borderRadius:28,overflow:"hidden",
              border:`5px solid ${C.yellow}`,boxShadow:`10px 10px 0 ${C.black}`,
              marginBottom:14,
            }}>
              <img src={bp("/toy-landia/hero.jpg")} alt="Toy Landia store" style={{ width:"100%",height:340,objectFit:"cover",display:"block" }}/>
            </div>
            {/* Two smaller thumbnails */}
            <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:14 }}>
              <div style={{ borderRadius:20,overflow:"hidden",border:`4px solid ${C.red}`,boxShadow:`6px 6px 0 ${C.black}`,transform:"rotate(-1.5deg)" }}>
                <img src={bp("/toy-landia/toys.jpg")} alt="Toy selection" style={{ width:"100%",height:160,objectFit:"cover",display:"block" }}/>
              </div>
              <div style={{ borderRadius:20,overflow:"hidden",border:`4px solid ${C.yellow}`,boxShadow:`6px 6px 0 ${C.black}`,transform:"rotate(1.5deg)" }}>
                <img src={bp("/toy-landia/party.jpg")} alt="Party toys" style={{ width:"100%",height:160,objectFit:"cover",display:"block" }}/>
              </div>
            </div>

            {/* Floating badge */}
            <div style={{
              position:"absolute",top:-20,right:-12,
              background:C.yellow,color:C.black,
              padding:"10px 18px",borderRadius:16,
              border:`4px solid ${C.black}`,boxShadow:`5px 5px 0 ${C.black}`,
              fontWeight:900,fontSize:13,
              animation:"tlBounce 3s ease-in-out infinite",
              zIndex:3,
            }} className="tl-body">
              🎉 Resellers Welcome!
            </div>
            <div style={{
              position:"absolute",bottom:10,left:-16,
              background:C.red,color:C.white,
              padding:"10px 18px",borderRadius:16,
              border:`4px solid ${C.black}`,boxShadow:`5px 5px 0 ${C.black}`,
              fontWeight:900,fontSize:13,
              animation:"tlFloat 4s ease-in-out infinite 1s",
              zIndex:3,
            }} className="tl-body">
              ⚖️ Sold Per Kilo
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div style={{ position:"absolute",bottom:0,left:0,right:0,overflow:"hidden",lineHeight:0 }}>
          <svg viewBox="0 0 1440 60" style={{width:"100%",display:"block"}} preserveAspectRatio="none">
            <polyline points="0,60 40,20 80,60 120,20 160,60 200,20 240,60 280,20 320,60 360,20 400,60 440,20 480,60 520,20 560,60 600,20 640,60 680,20 720,60 760,20 800,60 840,20 880,60 920,20 960,60 1000,20 1040,60 1080,20 1120,60 1160,20 1200,60 1240,20 1280,60 1320,20 1360,60 1400,20 1440,60 1440,0 0,0" fill={C.bg}/>
          </svg>
        </div>
      </section>

      {/* ══ TICKER RIBBON ════════════════════════════════════════════════════ */}
      <div style={{ background:C.yellow,borderTop:`3px solid ${C.black}`,borderBottom:`3px solid ${C.black}`,overflow:"hidden",padding:"12px 0" }}>
        <div style={{ display:"flex",width:"max-content",animation:"tlMarquee 200s linear infinite" }}>
          {[...Array(6)].map((_,set)=>
            ["🎁 Brand New Toys", "⚖️ Per Kilo Pricing", "🚚 Ships Nationwide", "🎪 Live Selling Mon–Sat", "🏷️ Bulk Buyer Friendly", "🎉 Walk-In Cabuyao"].map((item,i)=>(
              <span key={`${set}-${i}`} className="tl-font" style={{ fontSize:18,color:C.black,whiteSpace:"nowrap",padding:"0 36px" }}>{item}</span>
            ))
          )}
        </div>
      </div>

      {/* ══ STATS ════════════════════════════════════════════════════════════ */}
      <section style={{ background:C.black,borderBottom:`3px solid ${C.red}` }}>
        <div style={{ maxWidth:1280,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(4,1fr)" }} className="tl-grid-4">
          {[
            {val:"Per Kilo", label:"Pricing Model",  sub:"fill the basket",bg:C.red,   tc:C.white},
            {val:"China",    label:"Direct Import",  sub:"brand-new toys", bg:C.yellow,tc:C.black},
            {val:"Mon–Sat",  label:"Live Selling",   sub:"9AM – 6:30PM",   bg:C.dark,  tc:C.yellow},
            {val:"PH",       label:"Ships To",       sub:"door to door",   bg:C.red,   tc:C.white},
          ].map((s,i)=>(
            <ScrollReveal key={i} delay={i*80}>
              <div style={{
                background:s.bg,padding:"28px 16px",textAlign:"center",
                borderRight:i<3?`3px solid ${C.black}`:"none",
              }}>
                <div className="tl-font" style={{fontSize:42,lineHeight:1,color:s.tc}}>{s.val}</div>
                <div className="tl-body" style={{fontSize:12,fontWeight:900,color:s.tc,marginTop:6,textTransform:"uppercase",letterSpacing:"0.05em"}}>{s.label}</div>
                <div className="tl-body" style={{fontSize:11,color:s.tc,opacity:.6,marginTop:2}}>{s.sub}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ══ FEATURES ═════════════════════════════════════════════════════════ */}
      <section style={{ padding:"88px 32px",background:"#120000",position:"relative",overflow:"hidden" }}>
        <div className="tl-polka" style={{position:"absolute",inset:0}}/>
        <div style={{ position:"absolute",top:0,left:0,right:0,height:4,display:"flex" }}>
          {[C.red,C.yellow,C.red,C.yellow,C.red,C.yellow,C.red,C.yellow].map((c,i)=><div key={i} style={{flex:1,background:c}}/>)}
        </div>

        <div style={{ position:"relative",maxWidth:1280,margin:"0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign:"center",marginBottom:52 }}>
              <div style={{
                display:"inline-flex",alignItems:"center",gap:8,marginBottom:14,
                background:C.red,color:C.white,fontWeight:900,fontSize:12,padding:"8px 20px",
                borderRadius:40,border:`3px solid ${C.black}`,boxShadow:`4px 4px 0 ${C.black}`,
              }} className="tl-body"><Zap size={14}/> WHY TOY LANDIA</div>
              <h2 className="tl-font" style={{fontSize:"clamp(28px,4vw,54px)"}}>
                <span style={{color:C.white}}>The Toy Shopping </span>
                <span style={{color:C.yellow}}>You Deserve</span>
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:20 }} className="tl-grid-4">
            {FEATURES.map(({icon:Icon,title,desc,color,tc},i)=>(
              <ScrollReveal key={i} delay={i*90}>
                <div className="tl-card" style={{
                  borderRadius:24,padding:"28px 22px",height:"100%",
                  background:color,
                  border:`4px solid ${C.black}`,boxShadow:`7px 7px 0 ${C.black}`,
                  transform:`rotate(${i%2===0?-0.8:0.8}deg)`,
                }}>
                  <div style={{
                    width:52,height:52,borderRadius:14,marginBottom:18,
                    background:color===C.yellow?"rgba(0,0,0,.12)":"rgba(255,255,255,.15)",
                    display:"flex",alignItems:"center",justifyContent:"center",
                    border:`3px solid ${C.black}`,boxShadow:`3px 3px 0 ${C.black}`,
                  }}>
                    <Icon size={24} style={{color:tc}}/>
                  </div>
                  <h3 className="tl-font" style={{fontSize:22,color:tc,marginBottom:10}}>{title}</h3>
                  <p className="tl-body" style={{fontSize:14,color:tc,opacity:.75,lineHeight:1.6,margin:0}}>{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ GALLERY ══════════════════════════════════════════════════════════ */}
      <section id="gallery" style={{ padding:"88px 32px",background:C.bg,position:"relative" }}>
        <div style={{ position:"absolute",top:0,left:0,right:0,height:5,display:"flex" }}>
          {[C.yellow,C.red,C.yellow,C.red,C.yellow,C.red].map((c,i)=><div key={i} style={{flex:1,background:c}}/>)}
        </div>
        <div className="tl-polka" style={{position:"absolute",inset:0}}/>

        <div style={{ position:"relative",maxWidth:1280,margin:"0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign:"center",marginBottom:48 }}>
              <div style={{
                display:"inline-flex",alignItems:"center",gap:8,marginBottom:14,
                background:C.yellow,color:C.black,fontWeight:900,fontSize:12,padding:"8px 20px",
                borderRadius:40,border:`3px solid ${C.black}`,boxShadow:`4px 4px 0 ${C.black}`,
              }} className="tl-body"><Sparkles size={14}/> TOY GALLERY</div>
              <h2 className="tl-font" style={{fontSize:"clamp(28px,4vw,52px)"}}>
                <span style={{color:C.white}}>See Our </span>
                <span style={{color:C.red}}>Toy Collection!</span>
              </h2>
            </div>
          </ScrollReveal>

          {/* Hero mosaic */}
          <ScrollReveal delay={80}>
            <div style={{ display:"grid",gridTemplateColumns:"2fr 1fr 1fr",gridTemplateRows:"280px 280px",gap:14,marginBottom:14 }}>
              <div style={{ gridRow:"1 / 3",borderRadius:24,overflow:"hidden",border:`5px solid ${C.red}`,boxShadow:`8px 8px 0 ${C.black}` }}>
                <img src={bp("/toy-landia/hero.jpg")} alt="Toy Landia" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
              </div>
              <div style={{ borderRadius:20,overflow:"hidden",border:`4px solid ${C.yellow}`,boxShadow:`6px 6px 0 ${C.black}` }}>
                <img src={bp("/toy-landia/tl-1.jpg")} alt="Toy Landia toys" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
              </div>
              <div style={{ borderRadius:20,overflow:"hidden",border:`4px solid ${C.red}`,boxShadow:`6px 6px 0 ${C.black}` }}>
                <img src={bp("/toy-landia/tl-2.jpg")} alt="Toy Landia toys" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
              </div>
              <div style={{ borderRadius:20,overflow:"hidden",border:`4px solid ${C.yellow}`,boxShadow:`6px 6px 0 ${C.black}` }}>
                <img src={bp("/toy-landia/tl-3.jpg")} alt="Toy Landia toys" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
              </div>
              <div style={{ borderRadius:20,overflow:"hidden",border:`4px solid ${C.red}`,boxShadow:`6px 6px 0 ${C.black}` }}>
                <img src={bp("/toy-landia/tl-4.jpg")} alt="Toy Landia toys" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
              </div>
            </div>
          </ScrollReveal>

          {/* Rotating grid */}
          <ScrollReveal delay={120}>
            <ToyGallery/>
          </ScrollReveal>
        </div>
      </section>

      {/* ══ HOW IT WORKS ═════════════════════════════════════════════════════ */}
      <section style={{ padding:"88px 32px",background:"#120000",position:"relative",overflow:"hidden" }}>
        <div className="tl-polka" style={{position:"absolute",inset:0}}/>
        <div style={{ position:"relative",maxWidth:1280,margin:"0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign:"center",marginBottom:52 }}>
              <div style={{
                display:"inline-flex",alignItems:"center",gap:8,marginBottom:14,
                background:C.red,color:C.white,fontWeight:900,fontSize:12,padding:"8px 20px",
                borderRadius:40,border:`3px solid ${C.black}`,boxShadow:`4px 4px 0 ${C.black}`,
              }} className="tl-body"><ShoppingCart size={14}/> HOW IT WORKS</div>
              <h2 className="tl-font" style={{fontSize:"clamp(28px,4vw,52px)",color:C.white}}>
                4 Easy Steps to{" "}<span style={{color:C.yellow}}>More Toys!</span>
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:20 }} className="tl-grid-4">
            {STEPS.map(({n,icon:Icon,title,desc,color},i)=>(
              <ScrollReveal key={i} delay={i*80}>
                <div style={{
                  position:"relative",borderRadius:24,padding:"32px 24px",
                  background:color===C.red?"rgba(240,24,0,.12)":"rgba(255,216,0,.08)",
                  border:`4px solid ${color}`,boxShadow:`7px 7px 0 ${C.black}`,
                  height:"100%",
                }}>
                  <div className="tl-font" style={{position:"absolute",top:12,right:18,fontSize:72,lineHeight:1,color:`${color}18`,userSelect:"none"}}>{n}</div>
                  <div style={{
                    width:54,height:54,borderRadius:15,marginBottom:18,background:color,
                    display:"flex",alignItems:"center",justifyContent:"center",
                    border:`3px solid ${C.black}`,boxShadow:`3px 3px 0 ${C.black}`,
                  }}>
                    <Icon size={24} style={{color:color===C.yellow?C.black:C.white}}/>
                  </div>
                  <div className="tl-body" style={{fontSize:11,fontWeight:900,color,textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:8}}>Step {n}</div>
                  <h3 className="tl-font" style={{fontSize:21,color:C.white,marginBottom:10}}>{title}</h3>
                  <p className="tl-body" style={{fontSize:14,color:"rgba(255,255,255,.6)",lineHeight:1.65,margin:0}}>{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Hours strip */}
          <ScrollReveal delay={200}>
            <div style={{
              marginTop:36,padding:"22px 32px",background:C.yellow,borderRadius:20,
              border:`4px solid ${C.black}`,boxShadow:`6px 6px 0 ${C.black}`,
              display:"flex",gap:32,flexWrap:"wrap",justifyContent:"center",alignItems:"center",
            }}>
              {[
                {icon:Clock,    label:"Live Selling",  time:"Mon–Sat 9:00 AM – 6:30 PM"},
                {icon:Store,    label:"Walk-In Store", time:"Mon–Sat 9:00 AM – 6:30 PM"},
                {icon:MapPin,   label:"Location",      time:"Cabuyao, Laguna"},
              ].map(({icon:Icon,label,time},i)=>(
                <div key={i} style={{display:"flex",alignItems:"center",gap:12}}>
                  <div style={{width:42,height:42,borderRadius:12,background:C.black,display:"flex",alignItems:"center",justifyContent:"center",border:`3px solid ${C.black}`,boxShadow:`2px 2px 0 ${C.red}`}}>
                    <Icon size={18} style={{color:C.yellow}}/>
                  </div>
                  <div>
                    <div className="tl-font" style={{fontSize:16,color:C.black}}>{label}</div>
                    <div className="tl-body" style={{fontSize:12,color:"#444",fontWeight:700}}>{time}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══ WHO IT'S FOR ═════════════════════════════════════════════════════ */}
      <section style={{ padding:"88px 32px",background:C.bg,position:"relative" }}>
        <div style={{ maxWidth:1280,margin:"0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign:"center",marginBottom:52 }}>
              <div style={{
                display:"inline-flex",alignItems:"center",gap:8,marginBottom:14,
                background:C.yellow,color:C.black,fontWeight:900,fontSize:12,padding:"8px 20px",
                borderRadius:40,border:`3px solid ${C.black}`,boxShadow:`4px 4px 0 ${C.black}`,
              }} className="tl-body"><Heart size={14}/> PERFECT FOR</div>
              <h2 className="tl-font" style={{fontSize:"clamp(28px,4vw,52px)",color:C.white}}>
                <span style={{color:C.white}}>More Than </span>
                <span style={{color:C.red}}>Just a Toy Store</span>
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:20 }} className="tl-grid-4">
            {WHO.map(({icon:Icon,title,desc,color},i)=>(
              <ScrollReveal key={i} delay={i*80}>
                <div className="tl-card" style={{
                  borderRadius:24,padding:"32px 24px",height:"100%",
                  background:"#1a0000",
                  border:`4px solid ${color}`,boxShadow:`7px 7px 0 ${color}55`,
                }}>
                  <div style={{
                    width:56,height:56,borderRadius:16,marginBottom:18,background:color,
                    display:"flex",alignItems:"center",justifyContent:"center",
                    border:`3px solid ${C.black}`,boxShadow:`3px 3px 0 ${C.black}`,
                  }}>
                    <Icon size={26} style={{color:color===C.yellow?C.black:C.white}}/>
                  </div>
                  <h3 className="tl-font" style={{fontSize:22,color:C.white,marginBottom:10}}>{title}</h3>
                  <p className="tl-body" style={{fontSize:14,color:"rgba(255,255,255,.6)",lineHeight:1.65,margin:0}}>{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SHOWCASE — big toys.jpg full bleed ═══════════════════════════════ */}
      <section style={{ position:"relative",overflow:"hidden",height:480 }}>
        <img src={bp("/toy-landia/toys.jpg")} alt="Toy Landia collection" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
        <div style={{ position:"absolute",inset:0,background:"linear-gradient(to right,rgba(15,0,0,.9) 0%,rgba(15,0,0,.4) 60%,transparent 100%)" }}/>
        <div style={{ position:"absolute",inset:0,display:"flex",alignItems:"center",padding:"0 64px" }}>
          <ScrollReveal variant="fadeRight">
            <div>
              <div className="tl-font" style={{fontSize:"clamp(36px,5vw,70px)",color:C.white,lineHeight:1}}>
                Hundreds of Toys.<br/>
                <span style={{color:C.yellow}}>One Amazing Price.</span>
              </div>
              <p className="tl-body" style={{fontSize:18,color:"rgba(255,255,255,.7)",marginTop:16,fontWeight:600,maxWidth:500}}>
                Walk in, fill your basket, weigh it — that's all there is to it. Toy Landia makes buying more toys easier and more affordable than ever.
              </p>
              <a href={FACEBOOK} target="_blank" rel="noopener noreferrer"
                className="tl-btn"
                style={{
                  display:"inline-flex",alignItems:"center",gap:10,marginTop:28,
                  background:C.yellow,color:C.black,textDecoration:"none",
                  padding:"14px 28px",borderRadius:16,fontWeight:900,
                  border:`4px solid ${C.black}`,boxShadow:`6px 6px 0 ${C.black}`,
                }}
              >
                <Facebook size={18}/><span className="tl-font" style={{fontSize:18}}>Shop Now</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══ FINAL CTA ════════════════════════════════════════════════════════ */}
      <section style={{ padding:"100px 32px",background:C.red,position:"relative",overflow:"hidden" }}>
        {/* Starburst */}
        <div style={{
          position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)",
          width:"120vw",height:"120vw",
          backgroundImage:`conic-gradient(from 0deg,rgba(255,216,0,.18) 0deg 8deg,transparent 8deg 16deg,rgba(255,216,0,.18) 16deg 24deg,transparent 24deg 32deg,rgba(255,216,0,.18) 32deg 40deg,transparent 40deg 48deg,rgba(255,216,0,.18) 48deg 56deg,transparent 56deg 64deg,rgba(255,216,0,.18) 64deg 72deg,transparent 72deg 80deg,rgba(255,216,0,.18) 80deg 88deg,transparent 88deg 360deg)`,
          animation:"tlSpin 60s linear infinite",opacity:.5,
          pointerEvents:"none",
        }}/>
        <div style={{ position:"absolute",inset:0,opacity:.1, backgroundImage:"radial-gradient(circle,#fff 1px,transparent 1px)",backgroundSize:"24px 24px" }}/>

        <div style={{ position:"relative",zIndex:1,maxWidth:800,margin:"0 auto",textAlign:"center" }}>
          <ScrollReveal variant="scale">
            <div style={{
              display:"inline-flex",alignItems:"center",gap:8,marginBottom:28,
              background:C.yellow,color:C.black,fontWeight:900,fontSize:14,padding:"10px 24px",
              borderRadius:40,border:`4px solid ${C.black}`,boxShadow:`5px 5px 0 ${C.black}`,
              animation:"tlBounce 2.5s ease-in-out infinite",
            }} className="tl-body">
              <Zap size={16}/> JOIN THE FUN
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="tl-font" style={{fontSize:"clamp(44px,7vw,88px)",lineHeight:1,marginBottom:24,color:C.white}}>
              Ready for Your<br/>
              <span style={{color:C.yellow}}>Toy Haul?</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="tl-body" style={{fontSize:18,color:"rgba(255,255,255,.75)",marginBottom:44,lineHeight:1.7,fontWeight:600}}>
              Visit us in Cabuyao or follow our Facebook page for live selling, new arrivals, and exclusive deals on toys sold per kilogram.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div style={{ display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap" }}>
              <a href={FACEBOOK} target="_blank" rel="noopener noreferrer"
                className="tl-btn tl-pulse"
                style={{
                  display:"inline-flex",alignItems:"center",gap:12,
                  background:C.black,color:C.white,textDecoration:"none",
                  padding:"20px 40px",borderRadius:18,fontWeight:900,
                  border:`5px solid ${C.black}`,boxShadow:`7px 7px 0 ${C.yellow}`,
                }}
              >
                <Facebook size={22}/><span className="tl-font" style={{fontSize:22}}>Follow Toy Landia</span><ArrowRight size={20}/>
              </a>
              <Link href="/"
                className="tl-btn"
                style={{
                  display:"inline-flex",alignItems:"center",gap:12,
                  background:"rgba(255,255,255,.12)",color:C.white,textDecoration:"none",
                  padding:"20px 32px",borderRadius:18,fontWeight:900,
                  border:`5px solid rgba(255,255,255,.3)`,backdropFilter:"blur(12px)",
                }}
              >
                <Store size={20}/><span className="tl-font" style={{fontSize:20}}>Pring Group</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══ FOOTER ═══════════════════════════════════════════════════════════ */}
      <footer style={{ background:C.bg,borderTop:`3px solid ${C.red}`,padding:"32px 32px" }}>
        <div style={{ display:"flex",height:4,marginBottom:28 }}>
          {[C.red,C.yellow,C.red,C.yellow,C.red,C.yellow,C.red,C.yellow].map((c,i)=><div key={i} style={{flex:1,background:c}}/>)}
        </div>
        <div style={{ maxWidth:1280,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:16 }}>
          <div style={{ display:"flex",alignItems:"center",gap:12 }}>
            <img src={bp("/logos/toy-landia.jpg")} alt="Toy Landia" style={{height:44,width:44,objectFit:"contain",borderRadius:10,border:`2px solid ${C.yellow}`}}/>
            <div>
              <div className="tl-font" style={{fontSize:20,color:C.yellow}}>Toy Landia</div>
              <div className="tl-body" style={{fontSize:11,color:"rgba(255,255,255,.35)"}}>Part of Pring Group of Companies</div>
            </div>
          </div>

          <div style={{ display:"flex",gap:20,flexWrap:"wrap" }}>
            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" style={{display:"flex",alignItems:"center",gap:6,color:"rgba(255,255,255,.45)",textDecoration:"none",fontSize:13,fontWeight:700}}>
              <Facebook size={14}/> Facebook
            </a>
            <Link href="/" style={{color:"rgba(255,255,255,.45)",textDecoration:"none",fontSize:13,fontWeight:700}}>Pring Group</Link>
          </div>

          <div className="tl-body" style={{fontSize:12,color:"rgba(255,255,255,.25)"}}>
            © {new Date().getFullYear()} Pring Group of Companies · Cabuyao, Laguna
          </div>
        </div>
      </footer>
    </main>
  );
}
