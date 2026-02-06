import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mic, Zap, Brain, MessageSquare, Volume2, ChevronRight, Activity } from "lucide-react";

const stages = [
  {
    id: "input",
    title: "Voice Input",
    description: "Capturing raw audio data with high fidelity and ultra-low latency.",
    icon: <Mic className="w-6 h-6" />,
    color: "from-cyan-500 to-blue-500",
    glow: "rgba(6, 182, 212, 0.4)",
  },
  {
    id: "recognition",
    title: "Recognition",
    description: "Converting audio to text using advanced neural speech models.",
    icon: <Activity className="w-6 h-6" />,
    color: "from-blue-500 to-indigo-500",
    glow: "rgba(59, 130, 246, 0.4)",
  },
  {
    id: "analysis",
    title: "Intent Analysis",
    description: "Mapping phrases to specific intents and extracting key data points.",
    icon: <Zap className="w-6 h-6" />,
    color: "from-indigo-500 to-purple-500",
    glow: "rgba(99, 102, 241, 0.4)",
  },
  {
    id: "context",
    title: "Context & Memory",
    description: "Referencing past interactions to provide personalized, relevant responses.",
    icon: <Brain className="w-6 h-6" />,
    color: "from-purple-500 to-magenta-500",
    glow: "rgba(168, 85, 247, 0.4)",
  },
  {
    id: "generation",
    title: "Response Gen",
    description: "Synthesizing logical, helpful, and brand-consistent responses.",
    icon: <MessageSquare className="w-6 h-6" />,
    color: "from-magenta-500 to-pink-500",
    glow: "rgba(236, 72, 153, 0.4)",
  },
  {
    id: "output",
    title: "Voice Output",
    description: "Realistic TTS delivery with human-like prosody and emotion.",
    icon: <Volume2 className="w-6 h-6" />,
    color: "from-pink-500 to-rose-500",
    glow: "rgba(244, 114, 182, 0.4)",
  }
];

export function IntelligenceLayers() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  return (
    <section 
      ref={containerRef}
      className="py-32 bg-black relative overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(20,20,50,1),transparent)]" />
        <motion.div 
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 30%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
          >
            Intelligence <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">In Motion</span>
          </motion.h2 >
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-light">
            Watch how Lena processes every word through a sophisticated neural pipeline, 
            delivering human-like responses in milliseconds.
          </p>
        </div>

        {/* Desktop Pipeline Flow */}
        <div className="hidden lg:block relative">
          {/* Connector Line */}
          <div className="absolute top-12 left-0 w-full h-[2px] bg-white/10 overflow-hidden">
            <motion.div 
              animate={isInView ? { x: ["-100%", "100%"] } : {}}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-1/3 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            />
          </div>

          <div className="grid grid-cols-6 gap-4 relative">
            {stages.map((stage, index) => (
              <StageNode key={stage.id} stage={stage} index={index} />
            ))}
          </div>
        </div>

        {/* Mobile Pipeline Flow */}
        <div className="lg:hidden flex flex-col gap-12 relative px-4">
          {/* Vertical line */}
          <div className="absolute left-[39px] top-0 bottom-0 w-[2px] bg-white/10" />
          
          {stages.map((stage, index) => (
            <motion.div 
              key={stage.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6 relative"
            >
              <div className={`flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${stage.color} flex items-center justify-center shadow-lg relative z-10`}>
                {stage.icon}
              </div>
              <div className="pt-1">
                <h3 className="text-white font-bold text-xl mb-2">{stage.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{stage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StageNode({ stage, index }: { stage: typeof stages[0], index: number }) {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: false, amount: 0.5 });

  return (
    <div ref={nodeRef} className="flex flex-col items-center group">
      {/* Node Circle */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
        className="relative z-10"
      >
        <div 
          className={`w-24 h-24 rounded-[2rem] bg-gradient-to-br ${stage.color} p-[1px] shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
          style={{ boxShadow: isInView ? `0 0 40px -5px ${stage.glow}` : 'none' }}
        >
          <div className="w-full h-full bg-black/40 backdrop-blur-xl rounded-[1.95rem] flex items-center justify-center text-white">
            {stage.icon}
          </div>
        </div>

        {/* Connecting Arrow (except for last one) */}
        {index < stages.length - 1 && (
          <div className="absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div
              animate={{ x: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
            >
              <ChevronRight className="w-6 h-6 text-white/20" />
            </motion.div>
          </div>
        )}

        {/* Pulse effect */}
        {isInView && (
          <motion.div
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            className={`absolute inset-0 rounded-[2rem] border border-white/20`}
          />
        )}
      </motion.div>

      {/* Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.15 + 0.2 }}
        className="mt-12 text-center"
      >
        <h3 className="text-white font-bold text-lg mb-3 tracking-tight group-hover:text-cyan-400 transition-colors">
          {stage.title}
        </h3>
        <p className="text-zinc-500 text-xs md:text-sm leading-relaxed max-w-[160px] mx-auto font-light group-hover:text-zinc-300 transition-colors">
          {stage.description}
        </p>
      </motion.div>
    </div>
  );
}
