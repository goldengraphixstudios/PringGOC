"use client";

import { useEffect, useRef, useState } from "react";

/**
 * "How to book" drawn on the AIRPND roofline: the logo's dot travels the curve,
 * passing each step on its way home.
 */
const ROOF = "M 30 278 C 190 214, 330 150, 432 52 Q 492 -6, 540 62 C 610 168, 650 284, 790 290 C 860 293, 915 272, 970 246";
const STOPS = [0.2, 0.47, 0.86];

const steps = [
  { title: "Pick a stay", body: "Choose Macabling, Golden City or Mamatid, plus your dates and how many are coming." },
  { title: "Message us", body: "Send your details on Messenger or by email. We reply with availability and the rate for your dates." },
  { title: "Settle in", body: "Confirm your booking, get your check-in details, and make yourself at home." },
];

export default function BookingCurve() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const motionRef = useRef<SVGAnimateMotionElement>(null);
  const [nodes, setNodes] = useState<{ x: number; y: number }[]>([]);
  const [played, setPlayed] = useState(false);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const len = path.getTotalLength();
    setNodes(STOPS.map((t) => {
      const p = path.getPointAtLength(len * t);
      return { x: p.x, y: p.y };
    }));
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlayed(true);
          try {
            motionRef.current?.beginElement();
          } catch {
            /* SMIL not supported: dot simply sits at the end */
          }
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapRef}>
      <div className="relative mx-auto hidden max-w-[1080px] md:block">
        <svg viewBox="0 -20 1000 340" className="h-auto w-full overflow-visible" aria-hidden="true">
          <path d={ROOF} fill="none" stroke="rgba(126,122,93,0.22)" strokeWidth="14" strokeLinecap="round" />
          <path
            ref={pathRef}
            d={ROOF}
            pathLength={1}
            fill="none"
            stroke="var(--ap-clay)"
            strokeWidth="14"
            strokeLinecap="round"
            style={{
              strokeDasharray: 1,
              strokeDashoffset: played ? 0 : 1,
              transition: "stroke-dashoffset 3s cubic-bezier(0.45, 0, 0.2, 1)",
            }}
          />
          {nodes.map((n, i) => (
            <g key={i} style={{ opacity: played ? 1 : 0, transition: `opacity 0.5s ${0.4 + i * 0.9}s` }}>
              <circle cx={n.x} cy={n.y} r="34" fill="var(--ap-paper)" stroke="var(--ap-clay)" strokeWidth="5" />
              <text
                x={n.x}
                y={n.y + 11}
                textAnchor="middle"
                fontFamily="var(--ap-display)"
                fontSize="30"
                fill="var(--ap-clay-deep)"
              >
                {i + 1}
              </text>
            </g>
          ))}
          {/* The dot from the logo, travelling home */}
          <circle r="17" fill="var(--ap-clay)" cx="0" cy="0" opacity={played ? 1 : 0}>
            <animateMotion
              ref={motionRef}
              dur="3s"
              begin="indefinite"
              fill="freeze"
              path={ROOF}
              keyPoints="0;1"
              keyTimes="0;1"
              calcMode="spline"
              keySplines="0.45 0 0.2 1"
            />
          </circle>
        </svg>
      </div>

      <ol className="ap-timeline mx-auto mt-2 grid max-w-[1080px] gap-10 md:mt-6 md:grid-cols-3 md:gap-8">
        {steps.map((s, i) => (
          <li key={s.title} className="flex gap-4 md:block">
            <span className="ap-display mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[var(--ap-clay-btn)] text-[1.15rem] text-[var(--ap-paper)] md:hidden">
              {i + 1}
            </span>
            <div>
              <h3 className="ap-display mb-1.5 text-[1.5rem] leading-tight sm:text-[1.7rem] md:mb-2">{s.title}</h3>
              <p className="ap-body max-w-[22rem]">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
