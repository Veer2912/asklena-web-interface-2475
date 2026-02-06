import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { Mic, Zap, Brain, MessageSquare, Volume2, ArrowRight } from "lucide-react";

const layers = [
  {
    id: 1,
    title: "Voice Recognition",
    description: "Real-time audio processing with sub-200ms latency.",
    icon: <Mic className="w-6 h-6" />,
    color: "from-cyan-500 to-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/30",
    content: "Waveform"
  },
  {
    id: 2,
    title: "Intent Analysis",
    description: "Deep learning models identifying customer needs accurately.",
    icon: <Zap className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    content: "Connections"
  },
  {
    id: 3,
    title: "Context Awareness",
    description: "Maintaining conversation state and memory across turns.",
    icon: <Brain className="w-6 h-6" />,
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/30",
    content: "DataStreams"
  },
  {
    id: 4,
    title: "Response Generation",
    description: "Synthesizing human-like responses with personality.",
    icon: <MessageSquare className="w-6 h-6" />,
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    content: "TextForming"
  },
  {
    id: 5,
    title: "Human Delivery",
    description: "Ultra-realistic voice synthesis with emotional range.",
    icon: <Volume2 className="w-6 h-6" />,
    color: "from-pink-500 to-purple-500",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/30",
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
      className="py-32 md:py-48 lg:py-56 bg-black relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16 md:mb-24 lg:mb-32 space-y-4 md:space-y-6"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 uppercase tracking-tighter leading-tight">
            Lena's Intelligence <span className="block mt-2">Pipeline</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed px-2">
            Watch how voice flows through our intelligent neural network. Each layer processes, understands, and responds in real-time.
          </p>
        </motion.div>

        {/* Pipeline Container */}
        <div className="relative">
          {/* Connecting Lines */}
          <div className="absolute inset-0 pointer-events-none">
            {layers.map((_, index) => (
              index < layers.length - 1 && (
                <motion.svg
                  key={`line-${index}`}
                  className="absolute w-full h-full"
                  style={{ top: 0, left: 0 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <defs>
                    <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(6,182,212,0.3)" />
                      <stop offset="100%" stopColor="rgba(59,130,246,0.3)" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              )
            ))}
          </div>

          {/* Grid Layout for Layers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-0 relative">
            {layers.map((layer, index) => (
              <motion.div
                key={layer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                {/* Arrow Connector - shown between items */}
                {index < layers.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 transform -translate-y-1/2 z-20 pointer-events-none">
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-cyan-500/50"
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                  </div>
                )}

                {/* Layer Card */}
                <div className={`relative h-full p-6 sm:p-8 rounded-2xl border-2 transition-all duration-500 overflow-hidden ${layer.borderColor} hover:border-white/50 group cursor-pointer`}>
                  
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 ${layer.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Animated Border Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                    animate={{
                      boxShadow: ["0 0 0 0 rgba(6,182,212,0)", "0 0 30px 5px rgba(6,182,212,0.2)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    {/* Icon with Counter */}
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className={`p-3 sm:p-4 rounded-xl bg-gradient-to-br ${layer.color} text-white flex-shrink-0`}
                      >
                        {layer.icon}
                      </motion.div>
                      <div className="text-sm font-bold text-cyan-400 uppercase tracking-wider">
                        Layer {layer.id}
                      </div>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {layer.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {layer.description}
                    </p>

                    {/* Visual Animation */}
                    <div className="pt-4 h-16 flex items-center justify-center rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors border border-white/5">
                      {layer.content === "Waveform" && <WaveformAnimation />}
                      {layer.content === "Connections" && <ConnectionsAnimation />}
                      {layer.content === "DataStreams" && <DataStreamsAnimation />}
                      {layer.content === "TextForming" && <TextFormingAnimation />}
                      {layer.content === "VoiceOutput" && <VoiceOutputAnimation />}
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-12 h-12 border-t-2 border-r-2 border-cyan-500/0 group-hover:border-cyan-500/50 rounded-tr-2xl transition-colors"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 md:mt-24 text-center"
        >
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
            From voice input to natural response, <span className="text-cyan-400 font-semibold">all within &lt;200ms</span>. 
            That's the power of Lena's unified intelligence pipeline.
          </p>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_70%)]" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/5 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>
    </section>
  );
}

function WaveformAnimation() {
  return (
    <div className="flex items-center gap-1 h-10">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            height: [10, 30, 15, 25, 10],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut"
          }}
          className="w-1.5 bg-gradient-to-t from-cyan-400 to-cyan-300 rounded-full"
        />
      ))}
    </div>
  );
}

function ConnectionsAnimation() {
  return (
    <div className="relative w-12 h-12">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 border-2 border-blue-400/50 rounded-lg"
          animate={{
            scale: [1, 1.3],
            opacity: [0.6, 0],
            borderColor: ["rgba(96, 165, 250, 0.5)", "rgba(96, 165, 250, 0)"]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeOut"
          }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <Zap className="text-blue-400 w-5 h-5" />
      </div>
    </div>
  );
}

function DataStreamsAnimation() {
  return (
    <div className="flex items-center justify-center gap-1 h-full">
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1 h-8 bg-gradient-to-b from-indigo-400 to-transparent rounded-full"
          animate={{
            y: [-10, 10],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

function TextFormingAnimation() {
  const characters = "RESPOND".split("");
  return (
    <div className="flex items-center justify-center gap-1.5">
      {characters.map((char, i) => (
        <motion.span
          key={i}
          animate={{
            opacity: [0.3, 1, 0.3],
            y: [0, -3, 0]
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: i * 0.1
          }}
          className="text-xs font-bold text-purple-400"
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}

function VoiceOutputAnimation() {
  return (
    <div className="flex items-center justify-center gap-1.5">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            scaleY: [0.4, 1, 0.4],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut"
          }}
          className="w-1.5 h-8 bg-gradient-to-t from-pink-400 to-pink-300 rounded-full"
        />
      ))}
    </div>
  );
}
