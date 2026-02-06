import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Sparkles, Zap, Shield, BarChart3, Globe2, MessageSquare, Cpu } from "lucide-react";
import { useRef, useEffect } from "react";
import { useSound } from "../sound-provider";
import { MeshGradient } from "../ui/mesh-gradient";
import { GlitchText } from "../ui/glitch-text";

export function Hero() {
  const { playPulse, playChime } = useSound();
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      playPulse();
    }, 4000);
    return () => clearInterval(interval);
  }, [playPulse]);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-20"
    >
      <MeshGradient />

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <FloatingShape Icon={Zap} delay={0} x="10%" y="20%" color="text-cyan-500/20" />
        <FloatingShape Icon={Shield} delay={2} x="85%" y="15%" color="text-purple-500/20" />
        <FloatingShape Icon={BarChart3} delay={4} x="75%" y="70%" color="text-magenta-500/20" />
        <FloatingShape Icon={Globe2} delay={1} x="15%" y="75%" color="text-emerald-500/20" />
        <FloatingShape Icon={Cpu} delay={3} x="50%" y="10%" color="text-blue-500/20" />
        <FloatingShape Icon={MessageSquare} delay={5} x="90%" y="50%" color="text-cyan-500/20" />
      </div>

      {/* Central Interactive Waveform */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="relative w-full max-w-4xl h-96 flex items-center justify-center gap-1.5 opacity-40">
          {[...Array(80)].map((_, i) => {
            const delay = i * 0.04;
            return (
              <motion.div
                key={i}
                className="w-[2px] md:w-1 bg-gradient-to-t from-transparent via-cyan-400 to-transparent rounded-full shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                animate={{ 
                  height: ["10%", "80%", "10%"],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{ 
                  duration: 2 + Math.random() * 2, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: delay,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 text-center mt-[-5vh]"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-2xl mb-12 shadow-[0_0_30px_rgba(0,255,255,0.1)] group hover:border-cyan-500/30 transition-colors"
          >
            <div className="relative">
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping opacity-75" />
            </div>
            <span className="text-sm font-bold text-cyan-50/80 tracking-[0.25em] uppercase">Revolutionizing Voice Intelligence</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.9] flex flex-col items-center">
            <motion.span 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="block"
            >
              Meet <GlitchText text="Lena" />
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-magenta-400 drop-shadow-[0_0_50px_rgba(34,211,238,0.4)]"
            >
              Truly Listens
            </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-16 leading-relaxed font-light tracking-wide"
          >
            Experience the world's most <span className="text-white font-medium">human-like</span> voice AI. 
            Sub-200ms latency. 40+ languages. <span className="text-cyan-400 font-medium italic">Unlimited scale.</span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-24"
          >
            <Button 
              size="lg" 
              onClick={playChime}
              className="group relative h-20 px-14 text-xl bg-white text-black hover:bg-white/90 transition-all duration-500 overflow-hidden rounded-2xl active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-magenta-400 opacity-0 group-hover:opacity-10 transition-opacity" />
              <span className="relative z-10 flex items-center gap-3 font-black uppercase tracking-wider">
                Experience Lena <Zap className="w-5 h-5 fill-black" />
              </span>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={playChime}
              className="group h-20 px-14 text-xl border-white/20 bg-white/5 backdrop-blur-3xl text-white hover:bg-white/10 hover:border-white/40 transition-all duration-500 rounded-2xl active:scale-95 flex items-center gap-3"
            >
              <div className="p-2 rounded-full bg-white/10 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                <Play className="w-5 h-5 fill-current" />
              </div>
              <span className="font-bold">Watch Demo</span>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Stat Cards - Floating & Staggered */}
      <div className="absolute bottom-12 left-0 right-0 z-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6">
          <StatCard delay={1.4} label="Platform Uptime" value="99.9%" color="cyan" />
          <StatCard delay={1.6} label="Concurrent Calls" value="100K+" color="magenta" />
          <StatCard delay={1.8} label="Response Latency" value="<180ms" color="cyan" />
        </div>
      </div>
    </section>
  );
}

function FloatingShape({ Icon, delay, x, y, color }: { Icon: React.ElementType, delay: number, x: string, y: string, color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 1, 0.5, 1, 0],
        scale: [0.5, 1, 0.8, 1.2, 0.5],
        x: [0, 20, -20, 10, 0],
        y: [0, -30, 20, -10, 0],
        rotate: [0, 90, 180, 270, 360]
      }}
      transition={{ 
        duration: 20, 
        repeat: Infinity, 
        delay,
        ease: "easeInOut" 
      }}
      className={`absolute ${color}`}
      style={{ left: x, top: y }}
    >
      <Icon className="w-12 h-12 md:w-24 md:h-24 stroke-[0.5]" />
    </motion.div>
  );
}

function StatCard({ delay, label, value, color }: { delay: number; label: string; value: string; color: "cyan" | "magenta" }) {
  const accentColor = color === "cyan" ? "bg-cyan-500" : "bg-magenta-500";
  const textColor = color === "cyan" ? "text-cyan-400" : "text-magenta-400";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      className="group relative px-10 py-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl overflow-hidden min-w-[240px] will-change-transform"
    >
      <div className={`absolute top-0 left-0 w-full h-1 ${accentColor} opacity-20 group-hover:opacity-100 transition-opacity`} />
      <div className="relative z-10 flex flex-col items-center text-center">
        <span className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">{value}</span>
        <span className={`text-[10px] uppercase tracking-[0.3em] font-black ${textColor}`}>{label}</span>
      </div>
      <div className={`absolute -bottom-8 -right-8 w-24 h-24 rounded-full ${accentColor} blur-[50px] opacity-0 group-hover:opacity-20 transition-opacity`} />
    </motion.div>
  );
}

