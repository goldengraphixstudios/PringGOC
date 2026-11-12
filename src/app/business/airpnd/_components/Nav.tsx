"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Menu, X } from "lucide-react";
import { bp } from "@/lib/basePath";
import { useInquiry } from "./Inquiry";

const links = [
  { href: "#stays", label: "Stays" },
  { href: "#inside", label: "Inside" },
  { href: "#neighborhood", label: "Neighborhood" },
  { href: "#how", label: "How to book" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const { open } = useInquiry();
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const fillRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
        setSolid(window.scrollY > 24);
        if (fillRef.current) fillRef.current.style.transform = `scaleX(${p})`;
        if (dotRef.current) dotRef.current.style.left = `${p * 100}%`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Scrollspy: the section crossing the upper third of the screen is "current"
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
          else if (e.boundingClientRect.top > 0 && `#${e.target.id}` === links[0].href) setActive("");
        }
      },
      { rootMargin: "-30% 0px -65% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setMenuOpen(false);
    if (menuOpen) {
      window.addEventListener("keydown", onKey);
      window.addEventListener("resize", onResize);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  return (
    <header className="ap-nav" data-solid={solid || menuOpen}>
      <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between gap-4 px-5 sm:px-8">
        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/"
            aria-label="Back to Pring Group of Companies"
            title="Back to Pring Group"
            className="hidden h-10 w-10 place-items-center rounded-full text-[var(--ap-ink-soft)] sm:grid transition hover:bg-[var(--ap-sand)] hover:text-[var(--ap-ink)]"
          >
            <ArrowLeft className="h-[18px] w-[18px]" />
          </Link>
          <a href="#top" className="flex min-h-[44px] items-center gap-2.5" aria-label="AIRPND Rentals, back to top">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={bp("/airpnd/brand/mark.png")} alt="" className="h-7 w-auto min-[360px]:h-6 sm:h-7" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={bp("/airpnd/brand/wordmark.png")} alt="AIRPND Rentals" className="hidden h-[24px] w-auto min-[360px]:block sm:h-[30px]" />
          </a>
        </div>

        <nav aria-label="AIRPND sections" className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="ap-navlink" aria-current={active === l.href ? "true" : undefined}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <button type="button" onClick={() => open()} className="ap-btn ap-btn-primary !min-h-[44px] !px-4 !text-[14.5px] sm:!px-5">
            Check dates
          </button>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="grid h-11 w-11 cursor-pointer place-items-center rounded-full text-[var(--ap-ink)] transition hover:bg-[var(--ap-sand)] lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div className="ap-progress" aria-hidden="true">
        <div ref={fillRef} className="ap-progress-fill" style={{ transform: "scaleX(0)" }} />
        <div ref={dotRef} className="ap-progress-dot" style={{ left: "0%" }} />
      </div>

      {menuOpen ? (
        <div className="ap-safe-bottom fixed inset-x-0 top-[72px] bottom-0 overflow-y-auto overscroll-contain bg-[var(--ap-cream)] px-6 pt-6 lg:hidden">
          <nav aria-label="AIRPND sections (mobile)" className="flex flex-col">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                aria-current={active === l.href ? "true" : undefined}
                className="ap-display ap-menulink ap-rise border-b border-[rgba(41,38,31,0.1)] py-4 text-[clamp(1.6rem,7vw,2rem)]"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <Link href="/" className="mt-6 inline-flex min-h-[44px] items-center gap-2 text-[15px] font-semibold text-[var(--ap-ink-soft)]">
            <ArrowLeft className="h-4 w-4" /> Pring Group of Companies
          </Link>
        </div>
      ) : null}
    </header>
  );
}
