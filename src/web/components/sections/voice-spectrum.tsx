import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, Heart, ShieldAlert, Sparkles, Briefcase } from "lucide-react";

const emotions = [
  {
    id: "happy",
    name: "Happy",
    icon: <Heart className="w-5 h-5" />,
    color: "#22c55e", // Green
    glow: "rgba(34, 197, 94, 0.4)",
    amplitude: 40,
    frequency: 0.05,
    description: "Warm, welcoming, and high-energy for positive interactions.",
    sample: "I'm so glad I could help you with that today! Is there anything else I can do to make your day better?"
  },
  {
    id: "serious",
    name: "Serious",
    icon: <Briefcase className="w-5 h-5" />,
    color: "#3b82f6", // Blue
    glow: "rgba(59, 130, 246, 0.4)",
    amplitude: 15,
    frequency: 0.02,
    description: "Professional, steady, and direct for business-critical tasks.",
    sample: "I have confirmed your transaction details. The protocol has been successfully executed according to your specifications."
  },
  {
    id: "concerned",
    name: "Concerned",
    icon: <ShieldAlert className="w-5 h-5" />,
    color: "#f59e0b", // Amber
    glow: "rgba(245, 158, 11, 0.4)",
    amplitude: 25,
    frequency: 0.03,
    description: "Empathetic, calm, and reassuring for support or sensitive issues.",
    sample: "I understand how frustrating that must be. Let me see what I can do to resolve this for you right away."
  },
  {
    id: "exciting",
    name: "Exciting",
    icon: <Sparkles className="w-5 h-5" />,
    color: "#d946ef", // Fuchsia
    glow: "rgba(217, 70, 239, 0.4)",
    amplitude: 60,
    frequency: 0.08,
    description: "Dynamic, rhythmic, and persuasive for sales and marketing.",
    sample: "You're going to love this! We have an exclusive offer just for you that's starting right now!"
  }
];

export function VoiceSpectrum() {
  const [activeEmotion, setActiveEmotion] = useState(emotions[0]);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 0.1);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const generateWavePath = (amplitude: number, frequency: number, phase: number) => {
    const points = [];
    const width = 800;
    const height = 200;
    const centerY = height / 2;

    for (let x = 0; x <= width; x += 10) {
      const y = centerY + Math.sin(x * frequency + phase) * amplitude;
      points.push(`${x},${y}`);
    }

    return `M ${points.join(" L ")}`;
  };

  return (
    <section className="py-32 bg-black relative overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tighter"
          >
            Voice Spectrum
          </motion.h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Lena expresses human-like emotions through nuanced vocal inflections. Select an emotion to see the vocal resonance change in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Wave Visualizer */}
          <div className="relative aspect-[16/9] lg:aspect-auto lg:h-[400px] flex items-center justify-center bg-zinc-900/40 rounded-[2.5rem] border border-white/5 backdrop-blur-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
            
            <svg 
              viewBox="0 0 800 200" 
              className="w-full h-full px-8"
              preserveAspectRatio="none"
            >
              {/* Primary Wave */}
              <motion.path
                d={generateWavePath(activeEmotion.amplitude, activeEmotion.frequency, time)}
                fill="none"
                stroke={activeEmotion.color}
                strokeWidth="4"
                strokeLinecap="round"
                animate={{ stroke: activeEmotion.color }}
                transition={{ duration: 0.5 }}
                style={{ filter: `drop-shadow(0 0 8px ${activeEmotion.glow})` }}
              />
              
              {/* Secondary Wave (lower opacity) */}
              <motion.path
                d={generateWavePath(activeEmotion.amplitude * 0.6, activeEmotion.frequency * 1.2, time * 1.5)}
                fill="none"
                stroke={activeEmotion.color}
                strokeWidth="2"
                strokeLinecap="round"
                animate={{ stroke: activeEmotion.color }}
                transition={{ duration: 0.5 }}
                className="opacity-30"
              />

              {/* Tertiary Wave (lowest opacity) */}
              <motion.path
                d={generateWavePath(activeEmotion.amplitude * 0.3, activeEmotion.frequency * 0.8, time * 0.7)}
                fill="none"
                stroke={activeEmotion.color}
                strokeWidth="1"
                strokeLinecap="round"
                animate={{ stroke: activeEmotion.color }}
                transition={{ duration: 0.5 }}
                className="opacity-10"
              />
            </svg>

            {/* Scanning Line Effect */}
            <motion.div 
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
            />
          </div>

          {/* Emotion Controls */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              {emotions.map((emotion) => (
                <button
                  key={emotion.id}
                  onClick={() => setActiveEmotion(emotion)}
                  className={`relative p-6 rounded-3xl border transition-all duration-300 group ${
                    activeEmotion.id === emotion.id 
                      ? "bg-white/10 border-white/20" 
                      : "bg-white/5 border-white/5 hover:border-white/10"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors ${
                    activeEmotion.id === emotion.id ? "bg-white text-black" : "bg-zinc-800 text-zinc-400 group-hover:text-white"
                  }`}>
                    {emotion.icon}
                  </div>
                  <h3 className={`text-lg font-bold transition-colors ${
                    activeEmotion.id === emotion.id ? "text-white" : "text-zinc-500 group-hover:text-zinc-300"
                  }`}>
                    {emotion.name}
                  </h3>
                  {activeEmotion.id === emotion.id && (
                    <motion.div 
                      layoutId="active-indicator"
                      className="absolute top-4 right-4 w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                    />
                  )}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeEmotion.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-8 rounded-[2rem] bg-zinc-900/60 border border-white/5 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Volume2 className="w-5 h-5 text-purple-400" />
                  <span className="text-xs font-bold text-purple-400 uppercase tracking-widest font-mono">Neural Simulation</span>
                </div>
                <h4 className="text-white text-xl font-bold mb-4">{activeEmotion.description}</h4>
                <div className="relative p-6 rounded-2xl bg-black/40 border border-white/5 italic text-zinc-300 leading-relaxed font-serif">
                  "{activeEmotion.sample}"
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-1.5 h-1.5 rounded-full bg-purple-500"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Technical Specs Footer */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Sampling Rate", value: "48kHz" },
            { label: "Bit Depth", value: "24-bit" },
            { label: "Emotional Depth", value: "Multi-modal" },
            { label: "Synthesis", value: "Real-time" }
          ].map((spec, i) => (
            <div key={i} className="px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-center">
              <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">{spec.label}</div>
              <div className="text-white font-mono text-sm">{spec.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
