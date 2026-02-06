import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { Mic, Zap, Brain, MessageSquare, Volume2 } from "lucide-react";

const layers = [
  {
    id: 1,
    title: "Voice Recognition",
    description: "Real-time audio processing with sub-200ms latency.",
    icon: <Mic className="w-6 h-6" />,
    color: "from-cyan-500 to-cyan-400",
    glow: "shadow-[0_0_50px_-12px_rgba(6,182,212,0.5)]",
    content: "Waveform"
  },
  {
    id: 2,
    title: "Intent Analysis",
    description: "Deep learning models identifying customer needs accurately.",
    icon: <Zap className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    glow: "shadow-[0_0_60px_-12px_rgba(59,130,246,0.5)]",
    content: "Connections"
  },
  {
    id: 3,
    title: "Context Awareness",
    description: "Maintaining conversation state and memory across turns.",
    icon: <Brain className="w-6 h-6" />,
    color: "from-indigo-500 to-blue-500",
    glow: "shadow-[0_0_70px_-12px_rgba(99,102,241,0.5)]",
    content: "DataStreams"
  },
  {
    id: 4,
    title: "Response Generation",
    description: "Synthesizing human-like responses with personality.",
    icon: <MessageSquare className="w-6 h-6" />,
    color: "from-purple-500 to-indigo-500",
    glow: "shadow-[0_0_80px_-12px_rgba(168,85,247,0.5)]",
    content: "TextForming"
  },
  {
    id: 5,
    title: "Human Delivery",
    description: "Ultra-realistic voice synthesis with emotional range.",
    icon: <Volume2 className="w-6 h-6" />,
    color: "from-pink-500 to-purple-500",
    glow: "shadow-[0_0_90px_-12px_rgba(236,72,153,0.5)]",
    content: "VoiceOutput"
  }
];

export function IntelligenceLayers() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section 
      ref={containerRef}
      className="py-32 bg-black relative overflow-hidden min-h-[150vh]"
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10 h-full flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tighter">
            Lena's Intelligence Layers
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-light">
            Peel back the layers of the most advanced AI voice engine ever built. 
            See how Lena understands, thinks, and speaks in real-time.
          </p>
        </motion.div>

        <div className="relative w-full max-w-4xl aspect-square flex items-center justify-center">
          {layers.map((layer, index) => (
            <LayerCircle 
              key={layer.id} 
              layer={layer} 
              index={index} 
              total={layers.length}
              containerScroll={scrollYProgress}
            />
          ))}
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />
      </div>
    </section>
  );
}

function LayerCircle({ layer, index, total, containerScroll }: { 
  layer: typeof layers[0], 
  index: number, 
  total: number,
  containerScroll: any
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  
  // Calculate size based on index (expanding outwards)
  const size = 120 + (index * 140); // base size + expansion
  const opacity = useTransform(
    containerScroll,
    [index / total, (index + 0.5) / total, (index + 1) / total],
    [0.2, 1, 0.2]
  );
  
  const scale = useTransform(
    containerScroll,
    [index / total, (index + 0.5) / total],
    [0.9, 1]
  );

  return (
    <motion.div
      ref={ref}
      style={{ 
        width: size, 
        height: size,
        opacity,
        scale,
      }}
      className={`absolute rounded-full border border-white/5 flex items-center justify-center transition-all duration-700 ${isInView ? layer.glow : ''} backdrop-blur-[2px]`}
    >
      {/* Label for the layer */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 text-center pointer-events-none">
        <motion.div
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
          className="flex flex-col items-center"
        >
          <div className={`p-3 rounded-2xl bg-gradient-to-br ${layer.color} mb-3 shadow-lg`}>
            {layer.icon}
          </div>
          <span className="text-white font-bold text-lg whitespace-nowrap tracking-tight">{layer.title}</span>
          <span className="text-zinc-500 text-sm max-w-[180px] leading-tight mt-1">{layer.description}</span>
        </motion.div>
      </div>

      {/* Visual content for the layer */}
      <div className="scale-125">
        {layer.content === "Waveform" && <WaveformAnimation active={isInView} />}
        {layer.content === "Connections" && <ConnectionsAnimation active={isInView} />}
        {layer.content === "DataStreams" && <DataStreamsAnimation active={isInView} />}
        {layer.content === "TextForming" && <TextFormingAnimation active={isInView} />}
        {layer.content === "VoiceOutput" && <VoiceOutputAnimation active={isInView} />}
      </div>
    </motion.div>
  );
}

function WaveformAnimation({ active }: { active: boolean }) {
  return (
    <div className="flex items-center gap-1.5 h-10">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={active ? {
            height: [10, 40, 15, 30, 10],
          } : { height: 10 }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut"
          }}
          className="w-1.5 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"
        />
      ))}
    </div>
  );
}

function ConnectionsAnimation({ active }: { active: boolean }) {
  return (
    <div className="relative w-24 h-24">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 border border-blue-400/20 rounded-full"
          animate={active ? {
            scale: [1, 1.6],
            opacity: [0.6, 0],
            borderWidth: ["1px", "3px", "1px"]
          } : {}}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeOut"
          }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
         <Zap className="text-blue-400 w-8 h-8 fill-blue-400/20 animate-pulse" />
      </div>
    </div>
  );
}

function DataStreamsAnimation({ active }: { active: boolean }) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-full">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[1px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent"
          style={{
            top: `${5 + i * 6}%`,
            left: "-100%",
            width: "100%",
            transform: `rotate(${i * 24}deg)`
          }}
          animate={active ? {
            left: ["100%", "-100%"]
          } : {}}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}

function TextFormingAnimation({ active }: { active: boolean }) {
  const characters = "SYNTHESIZING_RESPONSE_BRAIN_MATRIX_0101".split("");
  return (
    <div className="flex flex-wrap justify-center max-w-[120px] gap-1.5">
      {characters.map((char, i) => (
        <motion.span
          key={i}
          animate={active ? {
            opacity: [0.1, 1, 0.4, 1],
            color: ["#a855f7", "#ffffff", "#a855f7"]
          } : { opacity: 0.1 }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            delay: i * 0.04
          }}
          className="text-[11px] font-mono text-purple-400 font-bold"
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}

function VoiceOutputAnimation({ active }: { active: boolean }) {
  return (
    <div className="relative flex items-center justify-center">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={active ? {
            scale: [1, 2.5],
            opacity: [0.6, 0]
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeOut"
          }}
          className="absolute w-16 h-16 bg-pink-500/10 rounded-full border border-pink-500/30"
        />
      ))}
      <Volume2 className="text-pink-400 w-10 h-10 drop-shadow-[0_0_8px_rgba(244,114,182,0.8)]" />
    </div>
  );
}
