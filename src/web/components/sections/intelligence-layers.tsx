import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mic, Zap, Brain, MessageSquare, Volume2 } from "lucide-react";

const layers = [
  {
    id: 1,
    title: "Voice Recognition",
    description: "Real-time audio processing with sub-200ms latency.",
    icon: Mic,
    color: "#06b6d4",
    gradientFrom: "from-cyan-500",
    gradientTo: "to-cyan-400"
  },
  {
    id: 2,
    title: "Intent Analysis",
    description: "Deep learning models identifying customer needs.",
    icon: Zap,
    color: "#3b82f6",
    gradientFrom: "from-blue-500",
    gradientTo: "to-cyan-500"
  },
  {
    id: 3,
    title: "Context Engine",
    description: "Maintaining conversation state across turns.",
    icon: Brain,
    color: "#6366f1",
    gradientFrom: "from-indigo-500",
    gradientTo: "to-blue-500"
  },
  {
    id: 4,
    title: "Response Gen",
    description: "Synthesizing human-like responses.",
    icon: MessageSquare,
    color: "#a855f7",
    gradientFrom: "from-purple-500",
    gradientTo: "to-indigo-500"
  },
  {
    id: 5,
    title: "Voice Output",
    description: "Ultra-realistic voice synthesis.",
    icon: Volume2,
    color: "#ec4899",
    gradientFrom: "from-pink-500",
    gradientTo: "to-purple-500"
  }
];

// Unique Component: Hexagonal Layer Node
function HexagonNode({ layer, index, isActive, onClick }: { 
  layer: typeof layers[0]; 
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = layer.icon;
  
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="relative cursor-pointer group"
    >
      {/* Hexagon Shape using clip-path */}
      <div 
        className={`relative w-24 h-28 sm:w-28 sm:h-32 md:w-32 md:h-36 transition-all duration-500 ${isActive ? 'scale-110' : ''}`}
        style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
      >
        {/* Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${layer.gradientFrom} ${layer.gradientTo} opacity-${isActive ? '100' : '20'} transition-opacity`} />
        
        {/* Inner content */}
        <div className="absolute inset-[2px] bg-black flex flex-col items-center justify-center"
          style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
        >
          <Icon className={`w-6 h-6 sm:w-8 sm:h-8 transition-colors ${isActive ? 'text-white' : 'text-zinc-500'}`} />
          <span className={`text-[10px] sm:text-xs mt-2 font-bold uppercase tracking-wider text-center px-2 transition-colors ${isActive ? 'text-white' : 'text-zinc-600'}`}>
            {layer.title.split(' ')[0]}
          </span>
        </div>
      </div>

      {/* Glow effect when active */}
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 -z-10"
          style={{
            boxShadow: `0 0 60px 20px ${layer.color}40`,
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
          }}
        />
      )}

      {/* Layer number badge */}
      <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${isActive ? 'bg-white text-black' : 'bg-zinc-800 text-zinc-500'}`}>
        {layer.id}
      </div>
    </motion.div>
  );
}

// Unique Component: Data Flow Connector
function DataFlowConnector({ isActive, color }: { isActive: boolean; color: string }) {
  return (
    <div className="hidden md:flex items-center justify-center w-12 lg:w-16">
      <div className="relative w-full h-1">
        {/* Base line */}
        <div className="absolute inset-0 bg-zinc-800 rounded-full" />
        
        {/* Animated flow */}
        {isActive && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="absolute inset-y-0 w-8 rounded-full"
            style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
          />
        )}
      </div>
      
      {/* Arrow head */}
      <motion.div
        animate={isActive ? { x: [0, 4, 0], opacity: [0.5, 1, 0.5] } : {}}
        transition={{ duration: 1, repeat: Infinity }}
        className="w-0 h-0 border-t-4 border-b-4 border-l-8 border-transparent"
        style={{ borderLeftColor: isActive ? color : '#27272a' }}
      />
    </div>
  );
}

// Unique Component: Waveform Visualization
function WaveformVisualization({ isActive, color }: { isActive: boolean; color: string }) {
  return (
    <div className="flex items-center justify-center gap-[2px] h-12">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={isActive ? {
            height: [8, 24 + Math.random() * 16, 8],
            opacity: [0.4, 1, 0.4]
          } : { height: 8, opacity: 0.2 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.05,
            ease: "easeInOut"
          }}
          className="w-1 rounded-full"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}

// Unique Component: Processing Particles
function ProcessingParticles({ isActive, color }: { isActive: boolean; color: string }) {
  return (
    <div className="relative w-24 h-24">
      {isActive && [...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            rotate: [i * 45, i * 45 + 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0"
        >
          <motion.div
            animate={{
              scale: [0.5, 1, 0.5],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.15
            }}
            className="absolute top-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full"
            style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }}
          />
        </motion.div>
      ))}
      <div 
        className="absolute inset-1/4 rounded-full opacity-20"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}

export function IntelligenceLayers() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.3 });
  const [activeLayer, setActiveLayer] = useState(0);

  // Auto-cycle through layers
  const cycleRef = useRef<NodeJS.Timeout>();
  
  useState(() => {
    cycleRef.current = setInterval(() => {
      setActiveLayer(prev => (prev + 1) % layers.length);
    }, 3000);
    return () => clearInterval(cycleRef.current);
  });

  const currentLayer = layers[activeLayer];

  return (
    <section 
      ref={containerRef}
      className="py-24 md:py-32 lg:py-40 bg-black relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Neural Architecture</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
            Intelligence{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Pipeline
            </span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
            Watch how voice data flows through Lena's neural layers in real-time.
          </p>
        </motion.div>

        {/* Hexagonal Pipeline */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-0 mb-16">
          {layers.map((layer, index) => (
            <div key={layer.id} className="flex items-center">
              <HexagonNode
                layer={layer}
                index={index}
                isActive={activeLayer === index}
                onClick={() => setActiveLayer(index)}
              />
              {index < layers.length - 1 && (
                <DataFlowConnector 
                  isActive={activeLayer >= index} 
                  color={layer.color}
                />
              )}
            </div>
          ))}
        </div>

        {/* Active Layer Details Panel */}
        <motion.div
          key={activeLayer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative p-8 md:p-12 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent overflow-hidden">
            {/* Background glow */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{ background: `radial-gradient(circle at center, ${currentLayer.color}, transparent 70%)` }}
            />

            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              {/* Left: Visualization */}
              <div className="flex flex-col items-center gap-6">
                <ProcessingParticles isActive={isInView} color={currentLayer.color} />
                <WaveformVisualization isActive={isInView} color={currentLayer.color} />
              </div>

              {/* Right: Details */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <div 
                    className={`p-3 rounded-xl bg-gradient-to-br ${currentLayer.gradientFrom} ${currentLayer.gradientTo}`}
                  >
                    <currentLayer.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{currentLayer.title}</h3>
                    <p className="text-sm text-zinc-500">Layer {currentLayer.id} of 5</p>
                  </div>
                </div>
                
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  {currentLayer.description}
                </p>

                {/* Progress indicator */}
                <div className="flex gap-2">
                  {layers.map((_, i) => (
                    <motion.div
                      key={i}
                      className="h-1 rounded-full flex-1 cursor-pointer"
                      style={{ 
                        backgroundColor: i <= activeLayer ? currentLayer.color : '#27272a'
                      }}
                      onClick={() => setActiveLayer(i)}
                      whileHover={{ scale: 1.1 }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 rounded-tl-3xl" style={{ borderColor: `${currentLayer.color}30` }} />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 rounded-br-3xl" style={{ borderColor: `${currentLayer.color}30` }} />
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-zinc-500">
            End-to-end processing in <span className="text-cyan-400 font-bold">&lt;200ms</span> • 
            <span className="text-purple-400 font-bold"> 99.9%</span> accuracy • 
            <span className="text-pink-400 font-bold"> 40+</span> languages
          </p>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05),transparent_50%)]" />
      </div>
    </section>
  );
}
