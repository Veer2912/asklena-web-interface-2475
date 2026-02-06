import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, MessageCircle, Sparkles, UserCheck } from "lucide-react";

const stages = [
  {
    id: 1,
    title: "Initial Call",
    subtitle: "First Contact",
    description: "Agent initiates contact with natural greeting and high clarity.",
    icon: <MessageCircle className="w-6 h-6" />,
    color: "cyan",
    waveHeight: [10, 30, 10],
  },
  {
    id: 2,
    title: "Learning Pattern",
    subtitle: "Intent Recognition",
    description: "System identifies customer intent and sentiment in real-time.",
    icon: <BrainCircuit className="w-6 h-6" />,
    color: "purple",
    waveHeight: [10, 50, 10],
  },
  {
    id: 3,
    title: "Context Understanding",
    subtitle: "Memory Recall",
    description: "Agent recalls past preferences and CRM data for deep context.",
    icon: <UserCheck className="w-6 h-6" />,
    color: "magenta",
    waveHeight: [10, 70, 10],
  },
  {
    id: 4,
    title: "Personalized Response",
    subtitle: "Adaptive Solution",
    description: "Delivering a tailored, human-like resolution in under 200ms.",
    icon: <Sparkles className="w-6 h-6" />,
    color: "blue",
    waveHeight: [10, 90, 10],
  }
];

export function AgentEvolution() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Voice Agent Evolution
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
            Witness how Lena evolves from a simple voice interface into a deeply personalized intelligent partner.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-cyan-500/0 via-white/10 to-blue-500/0 hidden md:block" />

          {stages.map((stage, idx) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Icon Container */}
              <div className={`relative w-20 h-20 rounded-2xl flex items-center justify-center bg-zinc-900 border transition-all duration-500 group-hover:scale-110 mb-8 z-10 ${
                stage.color === 'cyan' ? 'border-cyan-500/30 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.1)]' :
                stage.color === 'purple' ? 'border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]' :
                stage.color === 'magenta' ? 'border-magenta-500/30 text-magenta-400 shadow-[0_0_20px_rgba(217,70,239,0.1)]' :
                'border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]'
              }`}>
                {stage.icon}
                
                {/* Connecting Arrow (Desktop) */}
                {idx < stages.length - 1 && (
                  <div className="absolute top-1/2 -right-6 -translate-y-1/2 text-white/10 hidden md:block">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>

              {/* Waveform Visualization */}
              <div className="h-16 flex items-end gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`w-1 rounded-full ${
                      stage.color === 'cyan' ? 'bg-cyan-500' :
                      stage.color === 'purple' ? 'bg-purple-500' :
                      stage.color === 'magenta' ? 'bg-magenta-500' : 'bg-blue-500'
                    }`}
                    animate={{ 
                      height: [
                        `${stage.waveHeight[0]}%`, 
                        `${stage.waveHeight[1] + (Math.random() * 10)}%`, 
                        `${stage.waveHeight[0]}%`
                      ]
                    }}
                    transition={{ 
                      duration: 0.8, 
                      repeat: Infinity, 
                      delay: i * 0.1 
                    }}
                  />
                ))}
              </div>

              <div className="relative">
                <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${
                   stage.color === 'cyan' ? 'text-cyan-400' :
                   stage.color === 'purple' ? 'text-purple-400' :
                   stage.color === 'magenta' ? 'text-magenta-400' : 'text-blue-400'
                }`}>
                  Stage {stage.id}: {stage.subtitle}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{stage.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed px-4">
                  {stage.description}
                </p>
              </div>

              {/* Background Glow */}
              <div className={`absolute -top-20 -z-0 w-40 h-40 blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity rounded-full ${
                stage.color === 'cyan' ? 'bg-cyan-500' :
                stage.color === 'purple' ? 'bg-purple-500' :
                stage.color === 'magenta' ? 'bg-magenta-500' : 'bg-blue-500'
              }`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
