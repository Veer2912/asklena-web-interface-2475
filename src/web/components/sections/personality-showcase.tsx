import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, Truck, Landmark, GraduationCap, Users, ShoppingCart, Play, Volume2 } from "lucide-react";

const personas = [
  {
    industry: "Healthcare",
    title: "Caring & Empathetic",
    icon: <Heart className="w-6 h-6" />,
    color: "cyan",
    traits: ["Patient-first", "Calm delivery", "Medical terminology expert"],
    description: "Lena provides support with genuine care, ensuring patients feel heard and valued."
  },
  {
    industry: "Logistics",
    title: "Efficient & Direct",
    icon: <Truck className="w-6 h-6" />,
    color: "blue",
    traits: ["Rapid processing", "Clarity-focused", "Status-driven"],
    description: "In the fast-paced world of logistics, Lena delivers information with precision and speed."
  },
  {
    industry: "Finance",
    title: "Professional & Secure",
    icon: <Landmark className="w-6 h-6" />,
    color: "indigo",
    traits: ["Formal tone", "Security-conscious", "Detail-oriented"],
    description: "Lena maintains the highest level of professionalism and security for sensitive financial matters."
  },
  {
    industry: "Education",
    title: "Encouraging & Patient",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "purple",
    traits: ["Supportive pacing", "Clear explanations", "Student-centric"],
    description: "Lena guides students through their learning journey with encouragement and patience."
  },
  {
    industry: "HR & Recruitment",
    title: "Friendly & Warm",
    icon: <Users className="w-6 h-6" />,
    color: "pink",
    traits: ["Engaging dialogue", "Brand-aligned", "Relatable tone"],
    description: "First impressions matter. Lena greets candidates with a warm, welcoming presence."
  },
  {
    industry: "Ecommerce",
    title: "Helpful & Proactive",
    icon: <ShoppingCart className="w-6 h-6" />,
    color: "magenta",
    traits: ["Service-focused", "Quick resolution", "Upsell-capable"],
    description: "Lena helps customers find what they need and resolve issues with a helpful attitude."
  }
];

const colorMap: Record<string, { bg: string, text: string, border: string, dot: string, iconBg: string, voice: string }> = {
  cyan: { 
    bg: "bg-cyan-500/10", 
    text: "text-cyan-400", 
    border: "border-cyan-500/30", 
    dot: "bg-cyan-500", 
    iconBg: "bg-cyan-500/20",
    voice: "bg-cyan-400"
  },
  blue: { 
    bg: "bg-blue-500/10", 
    text: "text-blue-400", 
    border: "border-blue-500/30", 
    dot: "bg-blue-500", 
    iconBg: "bg-blue-500/20",
    voice: "bg-blue-400"
  },
  indigo: { 
    bg: "bg-indigo-500/10", 
    text: "text-indigo-400", 
    border: "border-indigo-500/30", 
    dot: "bg-indigo-500", 
    iconBg: "bg-indigo-500/20",
    voice: "bg-indigo-400"
  },
  purple: { 
    bg: "bg-purple-500/10", 
    text: "text-purple-400", 
    border: "border-purple-500/30", 
    dot: "bg-purple-500", 
    iconBg: "bg-purple-500/20",
    voice: "bg-purple-400"
  },
  pink: { 
    bg: "bg-pink-500/10", 
    text: "text-pink-400", 
    border: "border-pink-500/30", 
    dot: "bg-pink-500", 
    iconBg: "bg-pink-500/20",
    voice: "bg-pink-400"
  },
  magenta: { 
    bg: "bg-fuchsia-500/10", 
    text: "text-fuchsia-400", 
    border: "border-fuchsia-500/30", 
    dot: "bg-fuchsia-500", 
    iconBg: "bg-fuchsia-500/20",
    voice: "bg-fuchsia-400"
  }
};

export function PersonalityShowcase() {
  const [activePersona, setActivePersona] = useState<number | null>(null);

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            One Engine, Infinite Personalities
          </motion.h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Lena isn't just a voice. She's a chameleon that adapts her tone, pacing, and personality to perfectly represent your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personas.map((persona, idx) => {
            const colors = colorMap[persona.color];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onHoverStart={() => setActivePersona(idx)}
                onHoverEnd={() => setActivePersona(null)}
                className="group relative p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden"
              >
                {/* Background Glow */}
                <div className={`absolute -inset-20 ${colors.bg} blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                <div className="relative z-10">
                  {/* Avatar / Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <div className={`w-16 h-16 rounded-2xl ${colors.iconBg} flex items-center justify-center ${colors.text} group-hover:scale-110 transition-transform duration-500`}>
                      {persona.icon}
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                      <Volume2 className="w-4 h-4 text-zinc-500" />
                      <span className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase">Sample Ready</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{persona.industry}</h3>
                  <p className={`${colors.text} text-sm font-medium mb-6`}>{persona.title}</p>

                  <p className="text-zinc-500 text-sm mb-8 leading-relaxed">
                    {persona.description}
                  </p>

                  <div className="space-y-3">
                    {persona.traits.map((trait, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                        <span className="text-xs text-zinc-400 font-mono uppercase tracking-wider">{trait}</span>
                      </div>
                    ))}
                  </div>

                  {/* Voice Visualization on Hover */}
                  <div className="mt-8 h-12 flex items-center gap-1">
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={activePersona === idx ? {
                          height: [10, 40, 15, 30, 10],
                          opacity: 1
                        } : { height: 10, opacity: 0.3 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.05,
                          ease: "easeInOut"
                        }}
                        className={`w-1 ${colors.voice} rounded-full`}
                      />
                    ))}
                    {activePersona === idx && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="ml-4 flex items-center gap-2"
                      >
                        <Play className={`w-4 h-4 ${colors.text} fill-current`} />
                        <span className="text-[10px] font-bold text-white uppercase tracking-widest">Playing Demo</span>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
}
