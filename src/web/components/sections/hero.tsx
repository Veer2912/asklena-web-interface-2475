import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Radio, Brain } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";

// Animated particle component for premium background
function AnimatedParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => {
        const duration = 15 + Math.random() * 10;
        const delay = Math.random() * 5;
        const size = 2 + Math.random() * 4;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        return (
          <motion.div
            key={i}
            initial={{ 
              x: `${x}%`, 
              y: `${y}%`,
              opacity: 0,
              scale: 0
            }}
            animate={{
              x: [`${x}%`, `${x + (Math.random() - 0.5) * 40}%`, `${x}%`],
              y: [`${y}%`, `${y + (Math.random() - 0.5) * 40}%`, `${y}%`],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute w-${Math.floor(size)} h-${Math.floor(size)} rounded-full ${
              i % 3 === 0 ? "bg-cyan-500" : i % 3 === 1 ? "bg-purple-500" : "bg-magenta-500"
            } blur-sm`}
            style={{
              width: size,
              height: size,
              boxShadow: i % 3 === 0 ? "0 0 20px rgba(6,182,212,0.8)" : i % 3 === 1 ? "0 0 20px rgba(124,58,237,0.8)" : "0 0 20px rgba(236,72,153,0.8)"
            }}
          />
        );
      })}
    </div>
  );
}

// Animated background grid
function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <svg className="w-full h-full" width="100%" height="100%">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(6,182,212,0.3)" strokeWidth="1"/>
          </pattern>
          <radialGradient id="gridGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(6,182,212,0.1)" />
            <stop offset="100%" stopColor="rgba(6,182,212,0)" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#gridGradient)" />
      </svg>
    </div>
  );
}

// Animated neon line accent
function NeonAccent() {
  return (
    <motion.div
      className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 pointer-events-none"
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-transparent" />
    </motion.div>
  );
}

// Interactive stats card with hover effect
function StatCard({ 
  icon: Icon, 
  label, 
  value 
}: { 
  icon: React.ComponentType<{ className: string }>; 
  label: string; 
  value: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="relative p-4 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-cyan-500/50 transition-all backdrop-blur-sm overflow-hidden">
        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0"
          animate={isHovered ? { opacity: [0, 1, 0] } : { opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        <div className="relative z-10 flex items-center gap-3">
          <div className="p-2 rounded-lg bg-cyan-500/20 border border-cyan-500/30">
            <Icon className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="min-w-0">
            <p className="text-sm text-zinc-500 font-medium">{label}</p>
            <p className="text-lg font-bold text-white">{value}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[120vh] flex flex-col items-center justify-center overflow-hidden bg-[#0a0e27] pt-24 px-6 perspective">
      {/* Premium Background Layers */}
      <AnimatedGrid />
      <AnimatedParticles />
      <NeonAccent />

      {/* Mouse-following gradient glow (cursor effect) */}
      <motion.div
        className="absolute w-96 h-96 rounded-full pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(124,58,237,0.1) 100%)",
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
          filter: "blur(40px)",
        }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      />

      {/* Main Content */}
      <div className="relative z-20 max-w-6xl mx-auto text-center">
        {/* Entrance animation - staggered */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.23, 1, 0.320, 1],
            delay: 0.1
          }}
          className="mb-8"
        >
          {/* Badge */}
          <motion.div
            className="inline-block mb-6 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/50 hover:border-cyan-500"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              Enterprise AI Voice Platform
            </span>
          </motion.div>
        </motion.div>

        {/* Main Headline with premium styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.320, 1], delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-[1.15]">
            Meet <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-purple-500 animate-pulse">Lena</span>
              <motion.div
                className="absolute -inset-4 rounded-lg border-2 border-cyan-500/30 -z-10"
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(6,182,212,0.3)",
                    "0 0 40px rgba(6,182,212,0.5)",
                    "0 0 20px rgba(6,182,212,0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </span>
            {" — "}
            <br className="hidden md:block" />
            <span className="text-white">AI Voice Agents That</span>
            {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Sound Human</span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Deploy intelligent voice agents in 40+ languages. Handle 10K+ concurrent calls with &lt;200ms response times. 99.9% uptime guaranteed.
        </motion.p>

        {/* Premium Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 px-4"
        >
          <StatCard icon={Zap} label="Response Time" value="<200ms" />
          <StatCard icon={Radio} label="Concurrent Calls" value="10K+" />
          <StatCard icon={Brain} label="Uptime SLA" value="99.9%" />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link href="/pricing">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button 
                size="lg" 
                className="h-16 px-12 text-lg font-bold bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_60px_rgba(6,182,212,0.6)] group border border-cyan-400/30 hover:border-cyan-300"
              >
                Start Free Trial
                <motion.span 
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.span>
              </Button>
            </motion.div>
          </Link>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="h-16 px-12 text-lg font-bold rounded-xl border-2 border-white/20 hover:border-white/40 text-white transition-all duration-300 bg-white/[0.02] hover:bg-white/[0.05] backdrop-blur-sm"
          >
            Watch Demo (2 min)
          </motion.button>
        </motion.div>

        {/* Trust indicators */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm text-zinc-500 mt-12"
        >
          <span className="text-cyan-400 font-semibold">147+ companies</span> trust Lena for enterprise voice AI
        </motion.p>
      </div>

      {/* Bottom animated accent line */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-1 pointer-events-none"
        animate={{ 
          opacity: [0.3, 0.8, 0.3],
          scaleX: [0.8, 1, 0.8],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{
          background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.8), transparent)"
        }}
      />
    </section>
  );
}

