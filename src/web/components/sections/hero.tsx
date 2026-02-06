import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Sparkles } from "lucide-react";
import { useRef, useEffect } from "react";
import { useSound } from "../sound-provider";

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
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Animated Orbs */}
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-20 w-[700px] h-[700px] bg-magenta-500/10 rounded-full blur-[150px]"
        />

        {/* Floating Particles Simulation - Optimized */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full"
              initial={{ 
                left: `${(i * 7) % 100}%`,
                top: `${(i * 13) % 100}%`,
                opacity: 0 
              }}
              animate={{ 
                y: [0, -100, -200],
                opacity: [0, 0.8, 0],
                scale: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 8 + (i % 5), 
                repeat: Infinity, 
                ease: "linear",
                delay: i * 0.5
              }}
            />
          ))}
        </div>
      </div>

      {/* Central Waveform & Sound Waves */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        {/* Sound Waves (Expanding Circles) */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-cyan-500/20 rounded-full"
            initial={{ width: "20%", height: "20%", opacity: 0 }}
            animate={{ 
              width: ["20%", "150%"], 
              height: ["20%", "150%"], 
              opacity: [0, 0.3, 0] 
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeOut",
              delay: i * 2
            }}
          />
        ))}

        {/* Waveform Visualization - Optimized for 60fps */}
        <div className="relative w-full max-w-2xl h-64 flex items-center justify-center gap-1.5 opacity-30 blur-[2px]">
          {[...Array(60)].map((_, i) => {
            const delay = i * 0.05;
            return (
              <motion.div
                key={i}
                className="w-1 bg-gradient-to-t from-cyan-500/50 via-white/50 to-magenta-500/50 rounded-full"
                animate={{ 
                  height: ["15%", "65%", "15%"],
                }}
                transition={{ 
                  duration: 1.5, 
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
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-10 shadow-2xl shadow-cyan-500/10"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs md:text-sm font-semibold text-cyan-100 tracking-[0.2em] uppercase">The Next Era of Voice AI</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight leading-[1.1] md:leading-[1.05]">
            <span className="inline-block">Meet Lena — AI that</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-magenta-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">
              Truly Listens
            </span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-zinc-300 max-w-3xl mx-auto mb-14 leading-relaxed font-light">
            Deploy AI voice agents that handle customer calls, book appointments, and close sales — <span className="text-white font-medium">24/7, in 40+ languages</span> with <span className="text-cyan-400 font-medium">sub-200ms latency</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <Button 
              size="lg" 
              onClick={playChime}
              className="group relative h-16 px-12 text-lg bg-white text-black hover:bg-cyan-50 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)] active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2 font-bold">
                Experience Voice AI
              </span>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={playChime}
              className="h-16 px-12 text-lg border-white/10 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 transition-all duration-300 gap-2 active:scale-95"
            >
              <Play className="w-5 h-5 fill-current" />
              Watch Live Demo
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Stats Overlay - Redesigned for Responsiveness */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
        className="w-full max-w-5xl px-6 pb-12 mt-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-1 bg-white/[0.03] backdrop-blur-2xl rounded-3xl border border-white/10">
          <div className="flex flex-col items-center justify-center py-8 px-4 rounded-[1.4rem] bg-white/[0.02]">
            <div className="text-3xl md:text-4xl font-black text-white mb-1">99.9%</div>
            <div className="text-[10px] md:text-xs text-cyan-400/80 uppercase tracking-[0.2em] font-bold">Platform Uptime</div>
          </div>
          <div className="flex flex-col items-center justify-center py-8 px-4 rounded-[1.4rem] bg-white/[0.02]">
            <div className="text-3xl md:text-4xl font-black text-white mb-1">10K+</div>
            <div className="text-[10px] md:text-xs text-cyan-400/80 uppercase tracking-[0.2em] font-bold">Concurrent Calls</div>
          </div>
          <div className="flex flex-col items-center justify-center py-8 px-4 rounded-[1.4rem] bg-white/[0.02]">
            <div className="text-3xl md:text-4xl font-black text-white mb-1">&lt;200ms</div>
            <div className="text-[10px] md:text-xs text-cyan-400/80 uppercase tracking-[0.2em] font-bold">Response Time</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
