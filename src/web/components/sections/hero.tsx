import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import { 
  Play, ArrowRight, Mic, Sparkles, Zap, Globe,
  Phone, Waves, Activity, Signal
} from "lucide-react";

// ============================================================================
// NEURAL VOICE NEXUS HERO - Revolutionary 3D Voice AI Interface
// ============================================================================

// Neural Node Component
function NeuralNode({ 
  x, y, size, color, delay, isActive, pulseIntensity = 1 
}: { 
  x: number; y: number; size: number; color: string; delay: number; isActive: boolean; pulseIntensity?: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{ 
        left: `${x}%`, 
        top: `${y}%`,
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color}, transparent)`,
        boxShadow: isActive ? `0 0 ${20 * pulseIntensity}px ${color}` : 'none',
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isActive ? [0.3, 1, 0.3] : 0.2,
        scale: isActive ? [1, 1.3, 1] : 1,
      }}
      transition={{
        delay,
        duration: 1.5 + Math.random(),
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

// Neural Connection
function NeuralConnection({ 
  x1, y1, x2, y2, color, delay, isActive 
}: { 
  x1: number; y1: number; x2: number; y2: number; color: string; delay: number; isActive: boolean;
}) {
  const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

  return (
    <motion.div
      className="absolute origin-left h-[2px]"
      style={{
        left: `${x1}%`,
        top: `${y1}%`,
        width: `${length}%`,
        transform: `rotate(${angle}deg)`,
        background: `linear-gradient(90deg, ${color}00, ${color}, ${color}00)`,
      }}
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ 
        opacity: isActive ? [0.1, 0.6, 0.1] : 0.1,
        scaleX: 1,
      }}
      transition={{
        delay,
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

// Neural Network Visualization
function NeuralNetwork({ isProcessing }: { isProcessing: boolean }) {
  const nodes = useMemo(() => [
    { x: 8, y: 20, size: 12, color: "#06b6d4" },
    { x: 5, y: 40, size: 16, color: "#06b6d4" },
    { x: 8, y: 60, size: 14, color: "#06b6d4" },
    { x: 25, y: 35, size: 14, color: "#8b5cf6" },
    { x: 28, y: 50, size: 18, color: "#8b5cf6" },
    { x: 45, y: 45, size: 20, color: "#a855f7" },
    { x: 92, y: 35, size: 14, color: "#ec4899" },
    { x: 95, y: 55, size: 18, color: "#ec4899" },
  ], []);

  const connections = useMemo(() => [
    { x1: 8, y1: 20, x2: 25, y2: 35 },
    { x1: 5, y1: 40, x2: 28, y2: 50 },
    { x1: 28, y1: 50, x2: 45, y2: 45 },
    { x1: 45, y1: 45, x2: 92, y2: 35 },
    { x1: 45, y1: 45, x2: 95, y2: 55 },
  ], []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {connections.map((conn, i) => (
        <NeuralConnection
          key={`conn-${i}`}
          {...conn}
          color="#8b5cf6"
          delay={i * 0.1}
          isActive={isProcessing}
        />
      ))}
      {nodes.map((node, i) => (
        <NeuralNode
          key={`node-${i}`}
          {...node}
          delay={i * 0.05}
          isActive={isProcessing}
        />
      ))}
    </div>
  );
}

// Central Voice Core
function VoiceCore({ isActive, currentPhase }: { isActive: boolean; currentPhase: string }) {
  return (
    <div className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px]">
      {/* Outer glow rings */}
      {[1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          className="absolute inset-0 rounded-full border"
          style={{
            borderColor: ring === 1 ? '#06b6d440' : ring === 2 ? '#a855f730' : '#ec489920',
            transform: `scale(${1 + ring * 0.15})`,
          }}
          animate={isActive ? {
            scale: [1 + ring * 0.15, 1.1 + ring * 0.15, 1 + ring * 0.15],
            opacity: [0.3, 0.6, 0.3],
          } : {}}
          transition={{
            duration: 2 + ring * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Core container */}
      <motion.div
        className="absolute inset-0 rounded-full overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(6,182,212,0.1), rgba(168,85,247,0.1), rgba(236,72,153,0.1))',
          backdropFilter: 'blur(40px)',
          border: '1px solid rgba(255,255,255,0.1)',
        }}
        animate={isActive ? {
          boxShadow: [
            '0 0 60px rgba(6,182,212,0.3)',
            '0 0 100px rgba(168,85,247,0.4)',
            '0 0 60px rgba(6,182,212,0.3)',
          ],
        } : {}}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {/* Voice waveform bars */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center gap-1">
            {Array.from({ length: 24 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-1.5 md:w-2 rounded-full"
                style={{
                  background: `linear-gradient(180deg, #06b6d4, #a855f7, #ec4899)`,
                }}
                animate={isActive ? {
                  height: [8, 20 + Math.sin(i * 0.5) * 60, 8],
                  opacity: [0.4, 1, 0.4],
                } : { height: 8, opacity: 0.3 }}
                transition={{
                  duration: 0.15 + Math.random() * 0.1,
                  repeat: Infinity,
                  delay: i * 0.02,
                }}
              />
            ))}
          </div>
        </div>

        {/* Phase indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-sm border border-white/10">
            {isActive && (
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-cyan-400"
              />
            )}
            <span className="text-xs font-mono text-white/80">{currentPhase}</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Central icon */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={isActive ? { scale: [1, 1.05, 1] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl">
          <Mic className="w-10 h-10 md:w-12 md:h-12 text-white" />
        </div>
      </motion.div>
    </div>
  );
}

// Floating Stat Orb
function FloatingStatOrb({ 
  value, label, icon: Icon, color, position, delay 
}: { 
  value: string; label: string; icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>; color: string; position: { x: string; y: string }; delay: number;
}) {
  return (
    <motion.div
      className="absolute hidden lg:flex"
      style={{ left: position.x, top: position.y }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring", stiffness: 100 }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
        className="relative group"
      >
        <div 
          className="relative flex items-center gap-3 px-4 py-3 rounded-2xl border backdrop-blur-xl"
          style={{ 
            background: `linear-gradient(135deg, ${color}15, rgba(0,0,0,0.6))`,
            borderColor: `${color}30`,
          }}
        >
          <div 
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${color}20` }}
          >
            <Icon className="w-5 h-5" style={{ color }} />
          </div>
          <div>
            <p className="text-lg font-black text-white">{value}</p>
            <p className="text-[10px] text-zinc-500 uppercase tracking-wider">{label}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Particle Field
function ParticleField() {
  const particles = useMemo(() => 
    Array.from({ length: 30 }).map((_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 4,
      duration: 10 + Math.random() * 20,
      delay: Math.random() * 5,
    })), []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-cyan-400/20"
          style={{ 
            left: `${p.x}%`, 
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

// Main Hero Component
export function Hero() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentPhase, setCurrentPhase] = useState("AWAITING INPUT");
  const [cycleCount, setCycleCount] = useState(0);

  const phases = useMemo(() => [
    "LISTENING...",
    "PROCESSING VOICE",
    "ANALYZING INTENT",
    "GENERATING RESPONSE",
    "SYNTHESIZING VOICE",
    "TRANSMITTING",
  ], []);

  // Auto-cycle demo
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsProcessing(true);
      let phaseIndex = 0;
      
      const phaseInterval = setInterval(() => {
        if (phaseIndex < phases.length) {
          setCurrentPhase(phases[phaseIndex]);
          phaseIndex++;
        } else {
          clearInterval(phaseInterval);
          setTimeout(() => {
            setIsProcessing(false);
            setCurrentPhase("AWAITING INPUT");
            setCycleCount(c => c + 1);
          }, 1000);
        }
      }, 800);
      
      return () => clearInterval(phaseInterval);
    }, cycleCount === 0 ? 2000 : 5000);
    
    return () => clearTimeout(timeout);
  }, [cycleCount, phases]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background gradient mesh */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[150px]" />
      </div>

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Particle field */}
      <ParticleField />

      {/* Neural network */}
      <div className="hidden lg:block">
        <NeuralNetwork isProcessing={isProcessing} />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                </motion.div>
                <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  NEXT-GEN VOICE AI
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
                <span className="block">Voice AI That</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  Thinks, Feels
                </span>
                <span className="block">& Responds</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto lg:mx-0 mb-8">
                Deploy enterprise voice agents with human-grade conversations. 
                Sub-200ms response times. 40+ languages. Infinite scalability.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                <motion.a
                  href="/pricing"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold"
                >
                  <Play className="w-5 h-5" />
                  Start Free Trial
                </motion.a>

                <motion.a
                  href="/solutions"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-white/20 text-white font-bold backdrop-blur-sm hover:bg-white/5"
                >
                  See It In Action
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>

              {/* Quick stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:hidden">
                {[
                  { icon: Zap, value: "<200ms", label: "Response" },
                  { icon: Globe, value: "40+", label: "Languages" },
                  { icon: Activity, value: "99.9%", label: "Uptime" },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <stat.icon className="w-5 h-5 text-cyan-400" />
                    <div>
                      <p className="text-lg font-bold text-white">{stat.value}</p>
                      <p className="text-xs text-zinc-500">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Voice Core visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex-shrink-0"
          >
            <VoiceCore isActive={isProcessing} currentPhase={currentPhase} />
            
            {/* Live indicator */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute -left-4 lg:-left-24 top-1/4"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-emerald-400"
                />
                <span className="text-xs font-bold text-emerald-400">LIVE DEMO</span>
              </div>
            </motion.div>
            
            {/* Latency indicator */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -right-4 lg:-right-28 top-1/3"
            >
              <div className="px-3 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                <p className="text-xs text-cyan-400 font-mono">&lt;200ms latency</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating stat orbs */}
      <FloatingStatOrb
        value="10M+"
        label="Conversations"
        icon={Phone}
        color="#06b6d4"
        position={{ x: "8%", y: "25%" }}
        delay={0.5}
      />
      <FloatingStatOrb
        value="40+"
        label="Languages"
        icon={Globe}
        color="#a855f7"
        position={{ x: "85%", y: "20%" }}
        delay={0.7}
      />
      <FloatingStatOrb
        value="10K+"
        label="Concurrent"
        icon={Signal}
        color="#ec4899"
        position={{ x: "5%", y: "70%" }}
        delay={0.9}
      />
      <FloatingStatOrb
        value="99.9%"
        label="Uptime"
        icon={Activity}
        color="#10b981"
        position={{ x: "88%", y: "75%" }}
        delay={1.1}
      />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-zinc-600 uppercase tracking-widest">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-zinc-700 flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-cyan-400"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
