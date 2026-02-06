import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const solutions = [
  { name: "Legacy Chatbots", x: -40, y: -40, z: 20, color: "bg-zinc-600", blur: "shadow-zinc-500/20" },
  { name: "Traditional IVR", x: -60, y: -20, z: -40, color: "bg-zinc-700", blur: "shadow-zinc-600/20" },
  { name: "Basic Voice AI", x: 20, y: -30, z: 30, color: "bg-blue-600", blur: "shadow-blue-500/20" },
  { name: "ASKLENA", x: 60, y: 60, z: 60, color: "bg-cyan-400", blur: "shadow-cyan-400/50", highlighted: true },
];

export function VoiceSpectrum() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section 
      ref={containerRef}
      className="py-32 bg-black relative overflow-hidden min-h-screen flex flex-col items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase"
          >
            The Voice Spectrum
          </motion.h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Mapping the intelligence landscape. See how Asklena redefines what's possible in the intersection of natural speech, complexity, and speed.
          </p>
        </div>

        <div className="relative h-[600px] w-full flex items-center justify-center perspective-[2000px]">
          <motion.div 
            style={{ 
              rotateX,
              rotateY,
              transformStyle: "preserve-3d"
            }}
            className="relative w-[500px] h-[500px]"
          >
            {/* 3D Axis System */}
            <div className="absolute inset-0 border border-white/10" style={{ transform: "translateZ(-100px)" }} />
            
            {/* X-Axis (Natural <-> Technical) */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-zinc-800 via-white/20 to-zinc-800 flex justify-between items-center px-4">
               <span className="text-[10px] text-zinc-500 -translate-x-full">TECHNICAL</span>
               <span className="text-[10px] text-zinc-500 translate-x-full">NATURAL</span>
            </div>

            {/* Y-Axis (Simple <-> Complex) */}
            <div className="absolute left-1/2 top-0 h-full w-[1px] bg-gradient-to-b from-zinc-800 via-white/20 to-zinc-800 flex flex-col justify-between items-center py-4">
               <span className="text-[10px] text-zinc-500 -translate-y-full">COMPLEX</span>
               <span className="text-[10px] text-zinc-500 translate-y-full">SIMPLE</span>
            </div>

            {/* Z-Axis (Fast <-> Deep) - Simulated with lines */}
            <div 
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{ transform: "rotateY(90deg)" }}
            >
               <div className="w-full h-[1px] bg-white/5" />
            </div>

            {/* Grid planes for depth */}
            {[...Array(5)].map((_, i) => (
              <div 
                key={i}
                className="absolute inset-0 border border-white/5 pointer-events-none"
                style={{ transform: `translateZ(${(i - 2) * 100}px)` }}
              />
            ))}

            {/* Data Points */}
            {solutions.map((item, idx) => (
              <DataPoint key={idx} item={item} />
            ))}
          </motion.div>
        </div>

        {/* Legend / Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
          {[
            { label: "Natural", desc: "Human-like inflection" },
            { label: "Complex", desc: "Multi-turn reasoning" },
            { label: "Fast", desc: "<200ms latency" },
            { label: "Superior", desc: "Market-leading AI" }
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="text-white font-bold mb-1">{item.label}</h4>
              <p className="text-zinc-500 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DataPoint({ item }: { item: typeof solutions[0] }) {
  return (
    <motion.div
      style={{
        left: `${50 + item.x / 2}%`,
        top: `${50 - item.y / 2}%`,
        transform: `translateZ(${item.z * 2}px)`,
        transformStyle: "preserve-3d"
      }}
      className="absolute"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 + Math.random() * 0.5 }}
    >
      <div className="relative group">
        {/* Glow */}
        <div className={`absolute -inset-4 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity ${item.color}`} />
        
        {/* Point */}
        <div className={`w-4 h-4 rounded-full border border-white/20 shadow-lg ${item.color} ${item.highlighted ? 'animate-pulse ring-4 ring-cyan-400/20' : ''}`} />
        
        {/* Label */}
        <div 
          className="absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap"
          style={{ transform: "translateZ(20px)" }}
        >
          <div className={`px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md ${
            item.highlighted 
              ? 'bg-cyan-500/20 border-cyan-400 text-cyan-400' 
              : 'bg-zinc-900/50 border-white/10 text-zinc-400'
          }`}>
            {item.name}
          </div>
        </div>

        {/* Connecting Line to Origin (optional but helps depth) */}
        <div className="absolute top-1/2 left-1/2 w-px h-px bg-white/10" style={{ transform: `translateZ(${-item.z * 2}px)` }} />
      </div>

      {/* Lena Specific Effects */}
      {item.highlighted && (
        <>
          <motion.div
            animate={{
              scale: [1, 2, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-cyan-400/20 -z-10"
          />
          {/* Floating particles around Lena */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              animate={{
                x: [0, (Math.random() - 0.5) * 100],
                y: [0, (Math.random() - 0.5) * 100],
                z: [0, (Math.random() - 0.5) * 100],
                opacity: [1, 0]
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </>
      )}
    </motion.div>
  );
}
