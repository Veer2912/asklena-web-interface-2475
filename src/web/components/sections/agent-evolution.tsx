import { motion } from "framer-motion";
import { Clock, Smartphone, Cpu, Sparkles, Phone, Bot } from "lucide-react";

const timeline = [
  {
    year: "1990s",
    title: "Legacy IVR",
    description: "Rigid touch-tone menus. 'Press 1 for Sales'. No natural language understanding, frustrating user loops.",
    icon: <Phone className="w-6 h-6" />,
    color: "zinc",
    tech: "DTMF Tones"
  },
  {
    year: "2011",
    title: "Early Assistants",
    description: "Siri and Alexa enter the home. Command-based, limited context, and noticeably robotic synthetic voices.",
    icon: <Smartphone className="w-6 h-6" />,
    color: "blue",
    tech: "NLP v1.0"
  },
  {
    year: "2023",
    title: "GenAI Breakthrough",
    description: "LLMs enable natural text generation. The bridge between data and human-like reasoning is finally built.",
    icon: <Cpu className="w-6 h-6" />,
    color: "purple",
    tech: "Transformers"
  },
  {
    year: "TODAY",
    title: "ASKLENA",
    description: "The apex of voice AI. Real-time, empathetic, and indistinguishable from human speech with sub-200ms latency.",
    icon: <Sparkles className="w-6 h-6" />,
    color: "cyan",
    tech: "Neural Prosody",
    highlight: true
  }
];

export function AgentEvolution() {
  return (
    <section className="py-32 bg-black relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Clock className="w-4 h-4 text-zinc-400" />
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Evolutionary Leap</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tighter"
          >
            Agent <span className="text-zinc-500">Evolution</span>
          </motion.h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            From rigid menus to neural intelligence. Trace the technological journey that led to the creation of Asklena.
          </p>
        </div>

        <div className="relative">
          {/* Vertical/Horizontal Line */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-zinc-800 to-transparent hidden lg:block" />

          <div className="space-y-12 lg:space-y-32">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-0 ${
                  idx % 2 === 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content Side */}
                <div className="w-full lg:w-1/2 lg:px-16 text-center lg:text-left">
                  <div className={`inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 mb-4 font-mono text-xs font-bold ${
                    item.highlight ? "text-cyan-400 border-cyan-400/30" : "text-zinc-500"
                  }`}>
                    {item.year}
                  </div>
                  <h3 className={`text-3xl font-bold mb-4 ${item.highlight ? "text-white" : "text-zinc-300"}`}>
                    {item.title}
                  </h3>
                  <p className="text-zinc-500 text-lg leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <Bot className="w-4 h-4 text-zinc-700" />
                    <span className="text-[10px] font-bold text-zinc-700 uppercase tracking-[0.2em]">TECH: {item.tech}</span>
                  </div>
                </div>

                {/* Center Node */}
                <div className="relative z-20 flex items-center justify-center">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-500 ${
                    item.highlight 
                      ? "bg-white text-black border-white shadow-[0_0_30px_rgba(255,255,255,0.2)] scale-125" 
                      : "bg-zinc-900 text-zinc-500 border-white/5 group-hover:border-white/20"
                  }`}>
                    {item.icon}
                  </div>
                  {item.highlight && (
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-white rounded-2xl -z-10 blur-xl"
                    />
                  )}
                </div>

                {/* Spacer Side */}
                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
}
