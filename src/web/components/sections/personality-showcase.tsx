import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Heart, Truck, Landmark, GraduationCap, Users, ShoppingCart, Play, Volume2, ChevronRight, ChevronLeft } from "lucide-react";

const personas = [
  {
    industry: "Healthcare",
    title: "Caring & Empathetic",
    icon: <Heart className="w-6 h-6" />,
    color: "cyan",
    traits: ["Patient-first", "Calm delivery", "Medical terminology expert"],
    description: "Lena provides support with genuine care, ensuring patients feel heard and valued.",
    sample: "I'm here to help you through this. Let's take it one step at a time."
  },
  {
    industry: "Logistics",
    title: "Efficient & Direct",
    icon: <Truck className="w-6 h-6" />,
    color: "blue",
    traits: ["Rapid processing", "Clarity-focused", "Status-driven"],
    description: "In the fast-paced world of logistics, Lena delivers information with precision and speed.",
    sample: "Shipment #4920 is currently in transit. Expected arrival: 2:00 PM today."
  },
  {
    industry: "Finance",
    title: "Professional & Secure",
    icon: <Landmark className="w-6 h-6" />,
    color: "indigo",
    traits: ["Formal tone", "Security-conscious", "Detail-oriented"],
    description: "Lena maintains the highest level of professionalism and security for sensitive financial matters.",
    sample: "I have securely processed your inquiry regarding the quarterly tax adjustment."
  },
  {
    industry: "Education",
    title: "Encouraging & Patient",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "purple",
    traits: ["Supportive pacing", "Clear explanations", "Student-centric"],
    description: "Lena guides students through their learning journey with encouragement and patience.",
    sample: "That's a great question! Let's look at the concept from another angle."
  },
  {
    industry: "HR & Recruitment",
    title: "Friendly & Warm",
    icon: <Users className="w-6 h-6" />,
    color: "pink",
    traits: ["Engaging dialogue", "Brand-aligned", "Relatable tone"],
    description: "First impressions matter. Lena greets candidates with a warm, welcoming presence.",
    sample: "It was a pleasure speaking with you today. We'll be in touch regarding next steps!"
  }
];

const colorMap: Record<string, { bg: string, text: string, border: string, dot: string, glow: string }> = {
  cyan: { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500/30", dot: "bg-cyan-500", glow: "rgba(34, 211, 238, 0.4)" },
  blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/30", dot: "bg-blue-500", glow: "rgba(59, 130, 246, 0.4)" },
  indigo: { bg: "bg-indigo-500/10", text: "text-indigo-400", border: "border-indigo-500/30", dot: "bg-indigo-500", glow: "rgba(99, 102, 241, 0.4)" },
  purple: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/30", dot: "bg-purple-500", glow: "rgba(168, 85, 247, 0.4)" },
  pink: { bg: "bg-pink-500/10", text: "text-pink-400", border: "border-pink-500/30", dot: "bg-pink-500", glow: "rgba(236, 72, 153, 0.4)" },
};

export function PersonalityShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => setActiveIdx((prev) => (prev + 1) % personas.length);
  const prev = () => setActiveIdx((prev) => (prev - 1 + personas.length) % personas.length);

  const activePersona = personas[activeIdx];
  const colors = colorMap[activePersona.color];

  return (
    <section className="py-32 bg-black relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
            >
              <Users className="w-4 h-4 text-zinc-400" />
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Persona Engine</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tighter"
            >
              One Engine, <br />
              <span className="text-zinc-500">Infinite Moods</span>
            </motion.h2>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Persona Card */}
              <div className="relative group">
                <div className={`absolute -inset-10 ${colors.bg} blur-[100px] opacity-50 transition-colors duration-1000`} />
                <div className="relative p-12 rounded-[3rem] bg-zinc-900/60 border border-white/10 backdrop-blur-2xl overflow-hidden">
                  <div className="flex items-center justify-between mb-12">
                    <div className={`w-20 h-20 rounded-3xl ${colors.bg} flex items-center justify-center ${colors.text} border ${colors.border}`}>
                      {activePersona.icon}
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Status</span>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${activePersona.color === 'cyan' ? 'bg-cyan-500' : 
                          activePersona.color === 'blue' ? 'bg-blue-500' :
                          activePersona.color === 'indigo' ? 'bg-indigo-500' :
                          activePersona.color === 'purple' ? 'bg-purple-500' : 'bg-pink-500'} animate-pulse`} />
                        <span className="text-xs font-mono text-white">READY_FOR_DEPLOY</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-2">{activePersona.industry}</h3>
                  <p className={`${colors.text} text-lg font-medium mb-8`}>{activePersona.title}</p>
                  
                  <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                    {activePersona.description}
                  </p>

                  <div className="space-y-4">
                    {activePersona.traits.map((trait, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                        <span className="text-sm text-zinc-300 font-mono uppercase tracking-wider">{trait}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interaction Preview */}
              <div className="space-y-8">
                <div className="p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-md">
                  <div className="flex items-center gap-3 mb-6">
                    <Volume2 className="w-5 h-5 text-zinc-500" />
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Sample Dialogue</span>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex justify-start">
                      <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/5 text-zinc-400 text-sm max-w-[80%]">
                        Hello Lena, I need some assistance.
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <motion.div 
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className={`px-6 py-4 rounded-2xl bg-black border ${colors.border} text-white text-sm max-w-[80%] relative shadow-[0_10px_30px_rgba(0,0,0,0.5)]`}
                      >
                        <div className={`absolute -left-2 top-4 w-4 h-4 bg-black border-l border-b ${colors.border} rotate-45`} />
                        {activePersona.sample}
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Mood Selector Tabs */}
                <div className="flex flex-wrap gap-3">
                  {personas.map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIdx(idx)}
                      className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                        activeIdx === idx 
                          ? "bg-white text-black" 
                          : "bg-white/5 text-zinc-500 hover:text-white border border-white/5"
                      }`}
                    >
                      {p.industry}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
