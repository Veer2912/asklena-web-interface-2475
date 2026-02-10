import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, ArrowRight, 
  Zap, ShieldCheck, Globe2, Mic2, Play
} from "lucide-react";
import { useRef, useState } from "react";

// Unique Component: Pulsating Core Animation
function PulsatingCore() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Concentric rings */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            scale: [1, 1.5 + i * 0.3, 1],
            opacity: [0.3, 0, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeOut"
          }}
          className="absolute rounded-full border border-purple-500/20"
          style={{
            width: 200 + i * 100,
            height: 200 + i * 100
          }}
        />
      ))}
      
      {/* Central glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-xl"
      />
    </div>
  );
}

// Unique Component: Floating Feature Cards
function FloatingFeatureCard({ icon: Icon, text, color, delay }: { 
  icon: typeof Zap; 
  text: string; 
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="relative group"
    >
      <div className="relative p-5 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden">
        {/* Animated shine */}
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 3, repeat: Infinity, delay }}
          className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
        />
        
        <div className="relative z-10 flex items-center gap-3">
          <div 
            className="p-2 rounded-lg"
            style={{ backgroundColor: `${color}20` }}
          >
            <Icon className="w-5 h-5" style={{ color }} />
          </div>
          <span className="text-white text-sm font-bold uppercase tracking-wide">{text}</span>
        </div>
        
        {/* Bottom accent */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
        />
      </div>
    </motion.div>
  );
}

// Unique Component: Glowing CTA Button
function GlowingButton({ children, primary = false, onClick }: { 
  children: React.ReactNode; 
  primary?: boolean;
  onClick?: () => void;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="relative group"
    >
      {/* Glow effect */}
      {primary && (
        <motion.div
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity"
        />
      )}
      
      <Button 
        onClick={onClick}
        className={`relative h-16 px-10 text-lg font-bold rounded-2xl transition-all ${
          primary 
            ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white shadow-[0_0_40px_rgba(168,85,247,0.3)]"
            : "bg-white/5 border-2 border-white/20 hover:border-white/40 text-white hover:bg-white/10 backdrop-blur-sm"
        }`}
      >
        {children}
      </Button>
    </motion.div>
  );
}

export function FinalCTA() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.3 });

  return (
    <section ref={containerRef} className="py-32 md:py-40 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-purple-500/20 blur-[200px] rounded-full" 
        />
        <motion.div 
          animate={{ opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-pink-500/20 blur-[180px] rounded-full" 
        />
        
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -150, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-1 h-1 bg-purple-400/50 rounded-full"
            style={{
              top: `${50 + Math.random() * 50}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <PulsatingCore />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center space-y-10"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
            </motion.div>
            <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 uppercase tracking-widest">
              The Future is Now
            </span>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight"
            >
              Ready to Transform Your
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                Customer Experience?
              </span>
            </motion.h2>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
          >
            Join hundreds of industry leaders scaling their support, sales, and operations 
            with Lena's intelligent voice agents.
          </motion.p>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <FloatingFeatureCard icon={Zap} text="Instant Setup" color="#a855f7" delay={0.5} />
            <FloatingFeatureCard icon={ShieldCheck} text="Enterprise Security" color="#3b82f6" delay={0.6} />
            <FloatingFeatureCard icon={Globe2} text="40+ Languages" color="#ec4899" delay={0.7} />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <GlowingButton primary>
              <span className="flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </GlowingButton>
            <GlowingButton>
              <span className="flex items-center gap-2">
                <Play className="w-4 h-4 fill-current" />
                Watch Demo
              </span>
            </GlowingButton>
          </motion.div>

          {/* Bottom Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="pt-12 flex flex-wrap items-center justify-center gap-6 text-zinc-500"
          >
            <div className="flex items-center gap-2">
              <Mic2 className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-wider">Neural Engine v4.2</span>
            </div>
            <div className="h-4 w-px bg-zinc-700" />
            <span className="text-xs font-mono uppercase tracking-wider">No credit card required</span>
            <div className="h-4 w-px bg-zinc-700" />
            <span className="text-xs font-mono uppercase tracking-wider">Setup in 5 minutes</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
