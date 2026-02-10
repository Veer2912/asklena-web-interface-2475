import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Languages, Users, PhoneCall, MessageSquare } from "lucide-react";

const stats = [
  {
    label: "Languages",
    value: 40,
    suffix: "+",
    icon: Languages,
    color: "#a855f7",
    description: "Global reach"
  },
  {
    label: "Active Agents",
    value: 147,
    suffix: "",
    icon: Users,
    color: "#6366f1",
    description: "Deployed worldwide"
  },
  {
    label: "Calls Today",
    value: 2431,
    suffix: "",
    icon: PhoneCall,
    color: "#3b82f6",
    description: "And counting"
  },
  {
    label: "Conversations",
    value: 10,
    suffix: "M+",
    icon: MessageSquare,
    color: "#06b6d4",
    description: "Successfully handled"
  },
];

// Unique Component: Animated Number with Glitch Effect
function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setDisplayValue(end);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, 1000 / 60);

      // Occasional glitch effect
      const glitchTimer = setInterval(() => {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 100);
      }, 2000);

      return () => {
        clearInterval(timer);
        clearInterval(glitchTimer);
      };
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={`relative ${isGlitching ? 'animate-pulse' : ''}`}>
      {isGlitching && (
        <>
          <span className="absolute inset-0 text-cyan-400 opacity-50 translate-x-[2px]">
            {displayValue.toLocaleString()}
          </span>
          <span className="absolute inset-0 text-pink-400 opacity-50 -translate-x-[2px]">
            {displayValue.toLocaleString()}
          </span>
        </>
      )}
      <span className="relative">{displayValue.toLocaleString()}</span>
    </span>
  );
}

// Unique Component: Circular Progress Ring
function CircularProgress({ progress, color, size = 120 }: { progress: number; color: string; size?: number }) {
  const circumference = 2 * Math.PI * (size / 2 - 8);
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      {/* Background ring */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={size / 2 - 8}
        fill="none"
        stroke="rgba(255,255,255,0.05)"
        strokeWidth="4"
      />
      {/* Progress ring */}
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={size / 2 - 8}
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{
          strokeDasharray: circumference,
          filter: `drop-shadow(0 0 6px ${color})`
        }}
      />
    </svg>
  );
}

// Unique Component: 3D Rotating Card
function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group perspective-1000"
    >
      <motion.div
        animate={{
          rotateY: isHovered ? 5 : 0,
          rotateX: isHovered ? -5 : 0,
          scale: isHovered ? 1.02 : 1
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-sm overflow-hidden"
      >
        {/* Animated background gradient */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.15 : 0.05,
            scale: isHovered ? 1.2 : 1
          }}
          className="absolute inset-0 rounded-3xl"
          style={{
            background: `radial-gradient(circle at center, ${stat.color}, transparent 70%)`
          }}
        />

        {/* Scan line effect */}
        <motion.div
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
          className="absolute inset-x-0 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)` }}
        />

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Icon with circular progress */}
          <div className="relative mb-6">
            <CircularProgress progress={75 + index * 5} color={stat.color} size={100} />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: isHovered ? 360 : 0 }}
                transition={{ duration: 0.6 }}
                className="p-3 rounded-xl"
                style={{ backgroundColor: `${stat.color}20` }}
              >
                <Icon className="w-6 h-6" style={{ color: stat.color }} />
              </motion.div>
            </div>
          </div>

          {/* Value with animated counter */}
          <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
            <AnimatedCounter value={stat.value} />
            <span style={{ color: stat.color }}>{stat.suffix}</span>
          </div>

          {/* Label */}
          <div className="text-sm font-bold text-white uppercase tracking-widest mb-1">
            {stat.label}
          </div>

          {/* Description */}
          <div className="text-xs text-zinc-500">
            {stat.description}
          </div>
        </div>

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 rounded-tl-3xl" style={{ borderColor: `${stat.color}30` }} />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 rounded-br-3xl" style={{ borderColor: `${stat.color}30` }} />

        {/* Hover glow */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{ boxShadow: `0 0 40px ${stat.color}20` }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}

export function StatsSection() {
  return (
    <section className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.05),transparent_50%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-cyan-400"
            />
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Live Statistics</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Powering Conversations{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Worldwide
            </span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
        />
      </div>
    </section>
  );
}
