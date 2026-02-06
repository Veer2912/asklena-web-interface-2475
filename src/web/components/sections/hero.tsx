import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-[#0a0e27] pt-20 px-6">
      {/* Subtle Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-cyan-500/10 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-purple-500/10 blur-[140px]"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
            Meet Lena — <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">AI Voice Agents</span> That Sound Human
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-12 text-zinc-400 font-medium tracking-wide">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
              99.9% Uptime
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              10K+ Concurrent Calls
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
              &lt;200ms Response
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Link href="/pricing">
              <Button size="lg" className="h-16 px-10 text-lg bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] group">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Bottom Waveform Decor */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none opacity-20">
        <div className="flex items-end justify-center gap-1 h-full px-4">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ height: [20, 40 + Math.random() * 40, 20] }}
              transition={{ duration: 2 + Math.random(), repeat: Infinity, ease: "easeInOut" }}
              className="w-1 bg-gradient-to-t from-cyan-500/0 to-cyan-500/40 rounded-t-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

