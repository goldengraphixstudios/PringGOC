interface Orb {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
  opacity: number;
}

interface AnimatedBackgroundProps {
  colors?: string[];
  orbCount?: number;
  className?: string;
  variant?: "light" | "dark";
}

function pseudo(seed: number) {
  const value = Math.sin(seed * 999) * 10000;
  return value - Math.floor(value);
}

export default function AnimatedBackground({
  colors = ["#1B3A5C", "#C9A84C", "#2B5A8C"],
  orbCount = 5,
  className = "",
  variant = "light",
}: AnimatedBackgroundProps) {
  const orbs: Orb[] = Array.from({ length: orbCount }, (_, i) => ({
    id: i,
    x: pseudo(i + 1) * 100,
    y: pseudo(i + 11) * 100,
    size: 250 + pseudo(i + 21) * 350,
    color: colors[i % colors.length],
    duration: 18 + pseudo(i + 31) * 22,
    delay: pseudo(i + 41) * -15,
    opacity:
      variant === "light"
        ? 0.025 + pseudo(i + 51) * 0.035
        : 0.03 + pseudo(i + 51) * 0.06,
  }));

  if (variant === "dark") {
    return (
      <div className={`pointer-events-none fixed inset-0 z-0 overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#030a14] via-[#050D1A] to-[#0a1225]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.4) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {orbs.map((orb) => (
          <div
            key={orb.id}
            className="absolute rounded-full"
            style={{
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              background: `radial-gradient(circle, ${orb.color}${Math.round(orb.opacity * 255).toString(16).padStart(2, "0")} 0%, transparent 70%)`,
              animation: `orbFloat${orb.id % 3} ${orb.duration}s ease-in-out infinite`,
              animationDelay: `${orb.delay}s`,
              filter: `blur(${orb.size * 0.3}px)`,
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className={`pointer-events-none fixed inset-0 z-0 overflow-hidden ${className}`}>
      {/* Clean warm white base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCFA] via-[#F8F6F1] to-[#F2EFE8]" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, #1B3A5C 0.5px, transparent 0.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Soft floating orbs */}
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className="absolute rounded-full"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            background: `radial-gradient(circle, ${orb.color}${Math.round(orb.opacity * 255).toString(16).padStart(2, "0")} 0%, transparent 70%)`,
            animation: `orbFloat${orb.id % 3} ${orb.duration}s ease-in-out infinite`,
            animationDelay: `${orb.delay}s`,
            filter: `blur(${orb.size * 0.35}px)`,
          }}
        />
      ))}
    </div>
  );
}
