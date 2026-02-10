import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import { Play, Pause, RotateCcw, Wand2 } from "lucide-react";

// ============================================================================
// HOLOGRAPHIC VOICE CHAMBER - One-of-a-kind 3D voice visualization
// ============================================================================

// Voice Particle System - particles travel through the chamber
function VoiceParticles({ isActive }: { isActive: boolean }) {
  const particles = useMemo(() => 
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      delay: Math.random() * 2,
      duration: 1.5 + Math.random() * 1.5,
      size: 2 + Math.random() * 4,
      yOffset: (Math.random() - 0.5) * 120,
      color: Math.random() > 0.5 ? "#06b6d4" : "#a855f7"
    })), []
  );

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            top: `calc(50% + ${p.yOffset}px)`,
            left: "-20px",
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
          }}
          animate={isActive ? {
            x: [0, 600],
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 1, 0.5],
          } : { opacity: 0 }}
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

// Hexagonal Chamber Frame
function ChamberFrame() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="chamberGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Outer hexagonal frame */}
      <motion.polygon
        points="50,200 150,50 450,50 550,200 450,350 150,350"
        fill="none"
        stroke="url(#chamberGradient)"
        strokeWidth="2"
        filter="url(#glow)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2 }}
      />
      
      {/* Inner scanning lines */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.line
          key={i}
          x1="100"
          y1={100 + i * 50}
          x2="500"
          y2={100 + i * 50}
          stroke="url(#chamberGradient)"
          strokeWidth="1"
          strokeDasharray="10 5"
          initial={{ opacity: 0.1 }}
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
        />
      ))}
      
      {/* Corner connectors */}
      {[[100, 80], [500, 80], [100, 320], [500, 320]].map(([x, y], i) => (
        <motion.circle
          key={i}
          cx={x}
          cy={y}
          r="8"
          fill="none"
          stroke="#06b6d4"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
        />
      ))}
    </svg>
  );
}

// Voice Waveform - 3D looking wave that responds to audio
function VoiceWaveform({ isActive, speaker }: { isActive: boolean; speaker: "user" | "ai" }) {
  const color = speaker === "user" ? "#06b6d4" : "#a855f7";
  const bars = 32;

  return (
    <div className="flex items-center justify-center gap-[3px] h-24">
      {Array.from({ length: bars }).map((_, i) => {
        const centerDistance = Math.abs(i - bars / 2) / (bars / 2);
        const maxHeight = 60 * (1 - centerDistance * 0.5);
        
        return (
          <motion.div
            key={i}
            className="rounded-full"
            style={{
              width: "4px",
              background: `linear-gradient(to top, ${color}00, ${color})`,
              boxShadow: isActive ? `0 0 10px ${color}` : "none",
            }}
            animate={isActive ? {
              height: [8, maxHeight * (0.3 + Math.random() * 0.7), 8],
              opacity: [0.5, 1, 0.5],
            } : { height: 8, opacity: 0.3 }}
            transition={{
              duration: 0.3 + Math.random() * 0.2,
              repeat: isActive ? Infinity : 0,
              delay: i * 0.02,
            }}
          />
        );
      })}
    </div>
  );
}

// Conversation transcript display
const conversation = [
  { speaker: "user" as const, text: "Hi, I need to reschedule my appointment for next week.", duration: 3000 },
  { speaker: "ai" as const, text: "Of course! I can see you have an appointment on Thursday at 2 PM. Would you like to move it to a different day?", duration: 4500 },
  { speaker: "user" as const, text: "Yes, can we do Friday morning instead?", duration: 2500 },
  { speaker: "ai" as const, text: "Perfect! I have availability at 9 AM and 11 AM on Friday. Which works better for you?", duration: 4000 },
  { speaker: "user" as const, text: "11 AM would be great.", duration: 2000 },
  { speaker: "ai" as const, text: "Wonderful! I've rescheduled your appointment to Friday at 11 AM. You'll receive a confirmation text shortly.", duration: 4500 },
];

function TranscriptLine({ text, speaker, isActive }: { text: string; speaker: "user" | "ai"; isActive: boolean }) {
  const isUser = speaker === "user";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
      animate={{ opacity: isActive ? 1 : 0.3, y: 0, filter: "blur(0px)" }}
      className={`flex items-start gap-3 ${isUser ? "flex-row-reverse text-right" : ""}`}
    >
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold ${
        isUser ? "bg-cyan-500/20 text-cyan-400" : "bg-purple-500/20 text-purple-400"
      }`}>
        {isUser ? "YOU" : "AI"}
      </div>
      <p className={`text-sm leading-relaxed max-w-[280px] ${isActive ? "text-white" : "text-zinc-600"}`}>
        {text}
      </p>
    </motion.div>
  );
}

// Main Holographic Chamber Component
function HolographicChamber() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSpeaker, setCurrentSpeaker] = useState<"user" | "ai">("user");

  useEffect(() => {
    if (!isPlaying) return;

    const current = conversation[currentIndex];
    if (!current) {
      // Reset after completion
      const resetTimer = setTimeout(() => {
        setCurrentIndex(0);
      }, 2000);
      return () => clearTimeout(resetTimer);
    }

    setCurrentSpeaker(current.speaker);
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
    }, current.duration);

    return () => clearTimeout(timer);
  }, [currentIndex, isPlaying]);

  const handleReset = () => {
    setCurrentIndex(0);
    setIsPlaying(true);
  };

  return (
    <div className="relative">
      {/* Main Chamber Container */}
      <div className="relative w-full max-w-[600px] mx-auto aspect-[3/2] rounded-3xl overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(6,182,212,0.1)_0%,_transparent_70%)]" />
        
        {/* Chamber frame */}
        <ChamberFrame />
        
        {/* Voice particles */}
        <VoiceParticles isActive={isPlaying && currentIndex < conversation.length} />
        
        {/* Central waveform */}
        <div className="absolute inset-0 flex items-center justify-center">
          <VoiceWaveform 
            isActive={isPlaying && currentIndex < conversation.length} 
            speaker={currentSpeaker}
          />
        </div>
        
        {/* Speaker indicator */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2">
          <motion.div
            key={currentSpeaker}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`px-4 py-2 rounded-full border backdrop-blur-sm ${
              currentSpeaker === "user" 
                ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400" 
                : "bg-purple-500/10 border-purple-500/30 text-purple-400"
            }`}
          >
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className={`w-2 h-2 rounded-full ${
                  currentSpeaker === "user" ? "bg-cyan-400" : "bg-purple-400"
                }`}
              />
              <span className="text-xs font-bold uppercase tracking-widest">
                {currentSpeaker === "user" ? "Customer Speaking" : "Lena Responding"}
              </span>
            </div>
          </motion.div>
        </div>
        
        {/* Status metrics */}
        <div className="absolute bottom-6 left-6 right-6 flex justify-between">
          {[
            { label: "LATENCY", value: "148ms" },
            { label: "CONFIDENCE", value: "98.7%" },
            { label: "LANGUAGE", value: "EN-US" },
          ].map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{metric.label}</p>
              <p className="text-sm font-mono text-cyan-400">{metric.value}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Scan line animation */}
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          style={{ opacity: 0.5 }}
        />
      </div>
      
      {/* Controls */}
      <div className="flex justify-center gap-4 mt-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleReset}
          className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
        >
          <RotateCcw className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
}

// Transcript Panel
function TranscriptPanel() {
  const [visibleMessages, setVisibleMessages] = useState<typeof conversation>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= conversation.length) {
      const timer = setTimeout(() => {
        setVisibleMessages([]);
        setCurrentIndex(0);
      }, 3000);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setVisibleMessages(prev => [...prev, conversation[currentIndex]]);
      setCurrentIndex(prev => prev + 1);
    }, currentIndex === 0 ? 500 : conversation[currentIndex - 1]?.duration || 3000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="h-[400px] overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-10 pointer-events-none" />
      <div className="space-y-4 p-4">
        <AnimatePresence>
          {visibleMessages.map((msg, i) => (
            <TranscriptLine
              key={i}
              text={msg.text}
              speaker={msg.speaker}
              isActive={i === visibleMessages.length - 1}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function LiveDemo() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6"
          >
            <Wand2 className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">Interactive Demo</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Voice Chamber{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Live Feed
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-400 max-w-2xl mx-auto"
          >
            Watch a real conversation flow through our neural voice processing chamber. 
            Experience sub-200ms response times in action.
          </motion.p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Holographic Chamber */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <HolographicChamber />
          </motion.div>

          {/* Transcript Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-xl overflow-hidden">
              <div className="p-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Live Transcript</span>
                </div>
              </div>
              <TranscriptPanel />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
