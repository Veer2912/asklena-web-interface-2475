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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-20 will-change-transform"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated Orbs */}
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-magenta-500/20 rounded-full blur-[150px]"
          style={{ backgroundColor: 'rgba(255, 0, 255, 0.15)' }}
        />

        {/* Floating Particles Simulation */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%", 
                opacity: Math.random() 
              }}
              animate={{ 
                y: [null, Math.random() * -100 - 50 + "px"],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: Math.random() * 5 + 5, 
                repeat: Infinity, 
                ease: "linear",
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
      </div>

      {/* Central Waveform & Sound Waves */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Sound Waves (Expanding Circles) */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-cyan-500/30 rounded-full"
            initial={{ width: 0, height: 0, opacity: 0.5 }}
            animate={{ 
              width: ["200px", "800px"], 
              height: ["200px", "800px"], 
              opacity: [0.5, 0] 
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeOut",
              delay: i * 1.3
            }}
          />
        ))}

        {/* Waveform Visualization */}
        <div className="relative w-full max-w-lg h-32 flex items-center justify-center gap-1">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 bg-gradient-to-t from-cyan-400 to-magenta-400 rounded-full"
              animate={{ 
                height: [
                  "10%", 
                  `${Math.random() * 60 + 20}%`, 
                  "10%"
                ] 
              }}
              transition={{ 
                duration: 0.5 + Math.random() * 0.5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * 0.05
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ y: y1 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-100 tracking-wider uppercase">Future of Conversation</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight leading-none overflow-hidden">
            {"Meet Lena — AI that".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                className="inline-block mr-4"
              >
                {word}
              </motion.span>
            ))}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-magenta-400">
              {"Truly Listens".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 + i * 0.05 }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            Voice agents that sound human, understand context, and handle <br className="hidden md:block" />
            40+ languages with <span className="text-cyan-400 font-medium">&lt;200ms response</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              size="lg" 
              onClick={playChime}
              className="group relative h-16 px-10 text-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10">Experience Voice AI</span>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={playChime}
              className="h-16 px-10 text-lg border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 transition-all gap-2"
            >
              <Play className="w-5 h-5 fill-current" />
              See Live Agent Demo
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Stats Overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-0 right-0 z-10 hidden md:block"
      >
        <div className="max-w-4xl mx-auto flex justify-between px-8 py-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-xl">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">99.9%</div>
            <div className="text-xs text-zinc-500 uppercase tracking-widest">Uptime</div>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="text-center">
            <div className="text-2xl font-bold text-white">10K+</div>
            <div className="text-xs text-zinc-500 uppercase tracking-widest">Concurrent Calls</div>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="text-center">
            <div className="text-2xl font-bold text-white">&lt;200ms</div>
            <div className="text-xs text-zinc-500 uppercase tracking-widest">Latency</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
