import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Sparkles, ArrowRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { useSound } from "../sound-provider";

export function Hero() {
  const { playPulse, playChime } = useSound();
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const interval = setInterval(() => {
      playPulse();
    }, 4000);
    return () => clearInterval(interval);
  }, [playPulse]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-20 will-change-transform"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div 
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-magenta-500/20 rounded-full blur-[150px]"
        />
        <motion.div 
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 right-1/3 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px]"
        />
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-cyan-500/20"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan-400"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%", 
              opacity: 0 
            }}
            animate={{ 
              y: [null, Math.random() * -200 - 100 + "px"],
              opacity: [0, Math.random() * 0.5 + 0.3, 0]
            }}
            transition={{ 
              duration: Math.random() * 8 + 6, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>

      {/* Radial Gradient Light Following Mouse */}
      <motion.div
        className="absolute w-96 h-96 rounded-full pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)",
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
          filter: "blur(60px)",
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ y: y1 }}
          className="space-y-6 md:space-y-8 lg:space-y-10"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/50 backdrop-blur-md hover:border-cyan-400 transition-all cursor-pointer group"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-cyan-400"
            />
            <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent uppercase tracking-widest">
              The Future of Voice AI
            </span>
          </motion.div>

          {/* Main Headline - Split into two parts for better layout */}
          <div className="space-y-3 md:space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight tracking-tight">
                Meet{" "}
                <span className="relative inline-block">
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
                    animate={{ backgroundPosition: ["0%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{ backgroundSize: "200% 200%" }}
                  >
                    Lena
                  </motion.span>
                  <motion.div
                    className="absolute -inset-2 rounded-lg border-2 border-cyan-400/20"
                    animate={{ 
                      boxShadow: [
                        "0 0 0 0 rgba(6,182,212,0.2)",
                        "0 0 30px 10px rgba(6,182,212,0.1)",
                        "0 0 0 0 rgba(6,182,212,0.2)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                AI Voice That{" "}
                <span className="relative">
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400"
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Truly Listens
                  </motion.span>
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-pink-400 to-cyan-400"
                    animate={{ scaleX: [0, 1, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </span>
              </h2>
            </motion.div>
          </div>

          {/* Subheading with Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-4"
          >
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed font-light">
              Enterprise-grade voice agents that understand context, speak naturally in 40+ languages,
              and respond in <span className="text-cyan-400 font-semibold">&lt;200ms</span>.
            </p>
            
            {/* Mini Stats */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pt-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all"
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="text-sm font-semibold text-zinc-300">99.9% Uptime</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all"
              >
                <div className="w-2 h-2 rounded-full bg-purple-400" />
                <span className="text-sm font-semibold text-zinc-300">10K+ Calls</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-pink-500/50 transition-all"
              >
                <div className="w-2 h-2 rounded-full bg-pink-400" />
                <span className="text-sm font-semibold text-zinc-300">&lt;200ms</span>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-6 md:pt-10"
          >
            {/* Primary Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button 
                size="lg" 
                onClick={playChime}
                className="group relative w-full sm:w-auto h-14 sm:h-16 px-8 sm:px-10 text-base sm:text-lg bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-black font-bold transition-all overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_50px_rgba(6,182,212,0.5)]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Experience Voice AI
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </span>
              </Button>
            </motion.div>
            
            {/* Secondary Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button 
                variant="outline" 
                size="lg" 
                onClick={playChime}
                className="group w-full sm:w-auto h-14 sm:h-16 px-8 sm:px-10 text-base sm:text-lg border-2 border-white/20 hover:border-cyan-500/50 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 transition-all gap-2 font-semibold"
              >
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Play className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                </motion.div>
                <span>See Live Demo</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicator */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-sm text-zinc-500 pt-4 sm:pt-6"
          >
            <span className="text-cyan-400 font-semibold">147+ companies</span> already using Lena for customer support
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom Animated Line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
      />

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 hover:text-cyan-400 transition-colors cursor-pointer"
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll to explore</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
