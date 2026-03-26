"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "scale" | "blur";
  duration?: number;
  threshold?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  variant = "fadeUp",
  duration = 700,
  threshold = 0.15,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check for reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity = "1";
      el.style.transform = "none";
      el.style.filter = "none";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.transition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), filter ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`;
            el.style.opacity = "1";
            el.style.transform = "translate(0, 0) scale(1)";
            el.style.filter = "blur(0px)";
          }, delay);
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.style.opacity = "0";
          el.style.transform = getInitialTransform(variant);
          el.style.filter = variant === "blur" ? "blur(10px)" : "blur(0px)";
        }
      },
      { threshold }
    );

    // Set initial state
    el.style.opacity = "0";
    el.style.transform = getInitialTransform(variant);
    el.style.filter = variant === "blur" ? "blur(10px)" : "blur(0px)";

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, variant, duration, threshold, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

function getInitialTransform(variant: string): string {
  switch (variant) {
    case "fadeUp": return "translate(0, 40px) scale(1)";
    case "fadeDown": return "translate(0, -40px) scale(1)";
    case "fadeLeft": return "translate(40px, 0) scale(1)";
    case "fadeRight": return "translate(-40px, 0) scale(1)";
    case "scale": return "translate(0, 0) scale(0.9)";
    case "blur": return "translate(0, 20px) scale(1)";
    default: return "translate(0, 40px) scale(1)";
  }
}
