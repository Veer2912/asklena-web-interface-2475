import { motion, useScroll, useTransform } from "framer-motion";
import { Brain, Cpu, Database, Languages, MessageSquare, Zap } from "lucide-react";
import { useRef } from "react";

const nodes = [
  { id: "input", label: "Voice Input", icon: <Languages className="w-5 h-5" />, x: 10, y: 50, color: "cyan" },
  { id: "nlp", label: "NLP Engine", icon: <Brain className="w-5 h-5" />, x: 30, y: 30, color: "purple" },
  { id: "intent", label: "Intent Analysis", icon: <Zap className="w-5 h-5" />, x: 30, y: 70, color: "magenta" },
  { id: "context", label: "Context Memory", icon: <Database className="w-5 h-5" />, x: 55, y: 50, color: "blue" },
  { id: "logic", label: "Decision Logic", icon: <Cpu className="w-5 h-5" />, x: 75, y: 50, color: "indigo" },
  { id: "output", label: "Human Voice", icon: <MessageSquare className="w-5 h-5" />, x: 90, y: 50, color: "cyan" },
];

const connections = [
  { from: "input", to: "nlp" },
  { from: "input", to: "intent" },
  { from: "nlp", to: "context" },
  { from: "intent", to: "context" },
  { from: "context", to: "logic" },
  { from: "logic", to: "output" },
];

export function NeuralConsciousness() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  return (
    <section 
      ref={containerRef}
      className="py-32 bg-black relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          style={{ opacity, scale }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Neural Consciousness
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Real-time Neural Processing: Watch how Lena processes language, remembers context, and generates human responses in milliseconds.
          </p>
        </motion.div>

        <div className="relative aspect-[16/9] md:aspect-[21/9] w-full max-w-6xl mx-auto">
          {/* Connections (SVG Lines) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {connections.map((conn, idx) => {
              const fromNode = nodes.find(n => n.id === conn.from)!;
              const toNode = nodes.find(n => n.id === conn.to)!;
              return (
                <g key={idx}>
                  <line
                    x1={`${fromNode.x}%`}
                    y1={`${fromNode.y}%`}
                    x2={`${toNode.x}%`}
                    y2={`${toNode.y}%`}
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="2"
                  />
                  <motion.line
                    x1={`${fromNode.x}%`}
                    y1={`${fromNode.y}%`}
                    x2={`${toNode.x}%`}
                    y2={`${toNode.y}%`}
                    stroke={fromNode.color === 'cyan' ? '#22d3ee' : fromNode.color === 'purple' ? '#a855f7' : '#d946ef'}
                    strokeWidth="2"
                    strokeDasharray="10, 20"
                    animate={{
                      strokeDashoffset: [-100, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      delay: idx * 0.5,
                    }}
                  />
                </g>
              );
            })}
          </svg>

          {/* Nodes */}
          {nodes.map((node) => (
            <motion.div
              key={node.id}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: "translate(-50%, -50%)",
              }}
              className="absolute"
            >
              <div className="relative group">
                {/* Node Glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`absolute inset-0 blur-2xl rounded-full ${
                    node.color === 'cyan' ? 'bg-cyan-500/40' : 
                    node.color === 'purple' ? 'bg-purple-500/40' : 
                    node.color === 'magenta' ? 'bg-magenta-500/40' : 'bg-blue-500/40'
                  }`}
                />
                
                {/* Node Content */}
                <div className="relative flex flex-col items-center gap-3">
                  <div className={`w-14 h-14 md:w-20 md:h-20 rounded-2xl border flex items-center justify-center bg-zinc-900 transition-all group-hover:scale-110 ${
                    node.color === 'cyan' ? 'border-cyan-500/30 text-cyan-400' : 
                    node.color === 'purple' ? 'border-purple-500/30 text-purple-400' : 
                    node.color === 'magenta' ? 'border-magenta-500/30 text-magenta-400' : 'border-blue-500/30 text-blue-400'
                  }`}>
                    {node.icon}
                  </div>
                  <span className="text-xs md:text-sm font-medium text-white whitespace-nowrap bg-black/50 px-3 py-1 rounded-full border border-white/5 backdrop-blur-sm">
                    {node.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Capability Info Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-32">
          {[
            { title: "NLP & NLU", desc: "Understanding natural language with human-like precision, capturing nuances and intent.", icon: <Brain className="text-purple-400" /> },
            { title: "Context Awareness", desc: "Remembering previous interactions and personal details for a truly tailored experience.", icon: <Database className="text-blue-400" /> },
            { title: "Dynamic Logic", desc: "Real-time decision making to solve complex queries and drive results.", icon: <Cpu className="text-indigo-400" /> }
          ].map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-8 rounded-[2rem] border border-white/5 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center mb-6">
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
              <p className="text-zinc-500 leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
}
