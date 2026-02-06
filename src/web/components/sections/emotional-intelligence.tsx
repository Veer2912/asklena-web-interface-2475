import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { AlertTriangle, Flame, Heart, Briefcase, Activity, ShieldCheck, MessageSquare } from "lucide-react";

const situations = [
  {
    id: "frustrated",
    label: "Frustrated Customer",
    icon: <AlertTriangle className="w-6 h-6" />,
    color: "red",
    customer: "I've been waiting for my refund for two weeks now! This is absolutely ridiculous, I want to talk to someone right now!",
    lenaResponse: "I hear your frustration, and I sincerely apologize for the delay. I've located your request #8291. I'm prioritizing it for immediate processing right now so we can get this resolved for you today.",
    eqTone: "De-escalation Mode",
    metrics: { sentiment: -0.8, pitch: "High", stability: "Low" }
  },
  {
    id: "urgent",
    label: "Urgent Medical Query",
    icon: <Flame className="w-6 h-6" />,
    color: "orange",
    customer: "Hello? My daughter has a very high fever and I don't know what to do. The clinics are all closed. Is there a doctor available?",
    lenaResponse: "I understand this is urgent. I'm connecting you with our on-call medical specialist immediately. While I do that, please ensure she's hydrated. One moment while I bridge the call.",
    eqTone: "Emergency Protocol",
    metrics: { sentiment: 0.1, pitch: "Varied", stability: "Critical" }
  },
  {
    id: "excited",
    label: "Excited Prospect",
    icon: <Heart className="w-6 h-6" />,
    color: "pink",
    customer: "I just saw your voice demo and it's incredible! We have over 500 agents and I think this could completely change our workflow. How soon can we start?",
    lenaResponse: "That's wonderful to hear! We're just as excited to show you what Lena can do at scale. I can get a specialist on the line to discuss a custom pilot program for your team this afternoon.",
    eqTone: "Enthusiastic Sync",
    metrics: { sentiment: 0.9, pitch: "Dynamic", stability: "High" }
  },
  {
    id: "professional",
    label: "Calm Professional",
    icon: <Briefcase className="w-6 h-6" />,
    color: "blue",
    customer: "Good morning. I'm calling to discuss the API integration documentation for the upcoming enterprise deployment in Q4.",
    lenaResponse: "Good morning. I've prepared the relevant technical specifications for our REST API and webhook architecture. Would you like me to walk through the security protocols first?",
    eqTone: "Formal Professional",
    metrics: { sentiment: 0.2, pitch: "Steady", stability: "Max" }
  }
];

const colorMap: Record<string, { bg: string, text: string, border: string, shadow: string, glow: string }> = {
  red: { bg: "bg-red-500/10", text: "text-red-400", border: "border-red-500/30", shadow: "shadow-red-500/20", glow: "rgba(239, 68, 68, 0.4)" },
  orange: { bg: "bg-orange-500/10", text: "text-orange-400", border: "border-orange-500/30", shadow: "shadow-orange-500/20", glow: "rgba(249, 115, 22, 0.4)" },
  pink: { bg: "bg-pink-500/10", text: "text-pink-400", border: "border-pink-500/30", shadow: "shadow-pink-500/20", glow: "rgba(236, 72, 153, 0.4)" },
  blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/30", shadow: "shadow-blue-500/20", glow: "rgba(59, 130, 246, 0.4)" },
};

export function EmotionalIntelligence() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeSituation = situations[activeIdx];
  const colors = colorMap[activeSituation.color];

  return (
    <section className="py-32 bg-black relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <ShieldCheck className="w-4 h-4 text-zinc-400" />
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Sentiment Analysis</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tighter"
          >
            Emotional <span className="text-zinc-500">IQ</span>
          </motion.h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Lena doesn't just listen to words—she understands the emotion behind them. Watch how her response adapts in real-time to the caller's state.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Situation Selector */}
          <div className="lg:col-span-4 space-y-4">
            {situations.map((situation, idx) => (
              <button
                key={situation.id}
                onClick={() => setActiveIdx(idx)}
                className={`w-full p-6 rounded-3xl border transition-all duration-300 flex items-center gap-6 group ${
                  activeIdx === idx 
                    ? "bg-white/10 border-white/20 shadow-2xl" 
                    : "bg-zinc-900/40 border-white/5 hover:bg-zinc-900/60"
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${
                  activeIdx === idx ? "bg-white text-black" : "bg-zinc-800 text-zinc-500 group-hover:text-zinc-300"
                }`}>
                  {situation.icon}
                </div>
                <div className="text-left">
                  <h3 className={`font-bold transition-colors ${
                    activeIdx === idx ? "text-white" : "text-zinc-500 group-hover:text-zinc-300"
                  }`}>
                    {situation.label}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Activity className={`w-3 h-3 ${activeIdx === idx ? colors.text : "text-zinc-600"}`} />
                    <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                      {situation.eqTone}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Interactive Display */}
          <div className="lg:col-span-8 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="relative p-12 rounded-[3.5rem] bg-zinc-900/60 border border-white/10 backdrop-blur-2xl overflow-hidden min-h-[500px] flex flex-col"
              >
                {/* Background Glow */}
                <div className={`absolute -inset-20 ${colors.bg} blur-[100px] transition-colors duration-1000`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-12">
                    <div className="flex items-center gap-3">
                      <MessageSquare className="w-5 h-5 text-zinc-500" />
                      <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Real-time EQ Processing</span>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className={`w-1.5 h-1.5 rounded-full ${colors.bg} border ${colors.border}`} />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-10 flex-grow">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-zinc-500" />
                        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Customer</span>
                      </div>
                      <p className="text-xl md:text-2xl font-medium text-zinc-300 italic leading-relaxed pl-6 border-l border-white/10">
                        "{activeSituation.customer}"
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${colors.bg.replace('/10', '')} shadow-[0_0_10px_${colors.glow}] animate-pulse`} />
                        <span className={`text-[10px] font-bold ${colors.text} uppercase tracking-widest`}>Lena (Adaptive Response)</span>
                      </div>
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className={`p-8 rounded-3xl bg-black border ${colors.border} relative shadow-2xl`}
                      >
                        <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
                          {activeSituation.lenaResponse}
                        </p>
                        
                        {/* Audio Wave Sim */}
                        <div className="mt-8 flex items-end gap-1 h-6">
                          {[...Array(30)].map((_, i) => (
                            <motion.div
                              key={i}
                              animate={{ height: [4, Math.random() * 100 + 4, 4] }}
                              transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.05 }}
                              className={`flex-1 ${colors.bg.replace('/10', '/40')} rounded-full`}
                              style={{ maxHeight: '100%' }}
                            />
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Real-time Metrics */}
                  <div className="mt-12 grid grid-cols-3 gap-6 pt-10 border-t border-white/5">
                    <div>
                      <span className="block text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-2">Sentiment</span>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${(activeSituation.metrics.sentiment + 1) * 50}%` }}
                          className={`h-full ${colors.bg.replace('/10', '')}`}
                        />
                      </div>
                    </div>
                    <div>
                      <span className="block text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-2">Pitch Range</span>
                      <span className="text-white font-mono text-xs">{activeSituation.metrics.pitch}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-2">Stability</span>
                      <span className="text-white font-mono text-xs">{activeSituation.metrics.stability}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
