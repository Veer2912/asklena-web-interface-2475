import { motion } from "framer-motion";
import { Check, X, Zap } from "lucide-react";

const categories = [
  { name: "Natural Conversation", asklena: 98, ivr: 10, chatbots: 40, human: 95 },
  { name: "Response Speed (<200ms)", asklena: 100, ivr: 20, chatbots: 70, human: 30 },
  { name: "Cost Efficiency", asklena: 95, ivr: 60, chatbots: 85, human: 10 },
  { name: "24/7 Availability", asklena: 100, ivr: 90, chatbots: 100, human: 0 },
  { name: "Language Support (40+)", asklena: 100, ivr: 15, chatbots: 40, human: 10 },
  { name: "Context Awareness", asklena: 95, ivr: 5, chatbots: 30, human: 90 },
  { name: "Scaling (10K+ Concurrent)", asklena: 100, ivr: 40, chatbots: 100, human: 0 },
];

const solutions = [
  { name: "Traditional IVR", key: "ivr" },
  { name: "Old Chatbots", key: "chatbots" },
  { name: "Human Agents", key: "human" },
  { name: "ASKLENA", key: "asklena", highlighted: true },
];

export function AdvantageMatrix() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tighter"
          >
            The Asklena Advantage
          </motion.h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Traditional solutions forced you to choose between scale and quality. 
            <span className="text-white font-bold"> Asklena gives you both.</span>
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Header Row */}
            <div className="grid grid-cols-[300px_repeat(4,1fr)] gap-4 mb-8 items-end">
              <div />
              {solutions.map((sol, i) => (
                <div key={i} className={`text-center pb-4 ${sol.highlighted ? 'border-b-2 border-cyan-400' : 'border-b border-white/10'}`}>
                  <span className={`text-sm font-bold uppercase tracking-widest ${sol.highlighted ? 'text-cyan-400' : 'text-zinc-500'}`}>
                    {sol.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Category Rows */}
            <div className="space-y-4">
              {categories.map((cat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="grid grid-cols-[300px_repeat(4,1fr)] gap-4 items-center group"
                >
                  <div className="pr-8">
                    <span className="text-zinc-300 font-medium group-hover:text-white transition-colors">{cat.name}</span>
                  </div>
                  
                  {solutions.map((sol, j) => {
                    const value = (cat as any)[sol.key];
                    return (
                      <div key={j} className={`relative h-12 flex items-center px-4 rounded-xl transition-all duration-300 ${sol.highlighted ? 'bg-cyan-500/5 border border-cyan-500/20' : 'bg-white/5 border border-transparent'}`}>
                        {/* Bar */}
                        <div className="absolute inset-x-4 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${value}%` }}
                            transition={{ duration: 1.5, delay: i * 0.1 + j * 0.1, ease: "circOut" }}
                            className={`h-full rounded-full ${sol.highlighted ? 'bg-gradient-to-r from-cyan-600 to-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]' : 'bg-zinc-600'}`}
                          />
                        </div>
                        
                        {/* Value overlay for Asklena */}
                        {sol.highlighted && value === 100 && (
                           <motion.div 
                             initial={{ opacity: 0 }}
                             whileInView={{ opacity: 1 }}
                             transition={{ delay: i * 0.1 + 1.5 }}
                             className="absolute right-2 top-1/2 -translate-y-1/2"
                           >
                             <Zap className="w-3 h-3 text-cyan-400 fill-cyan-400" />
                           </motion.div>
                        )}
                      </div>
                    );
                  })}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-20 flex flex-wrap justify-center gap-12 text-center opacity-60">
           <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-zinc-400 text-sm italic">Lower Cost per Resolution</span>
           </div>
           <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-zinc-400 text-sm italic">Higher Customer CSAT</span>
           </div>
           <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-zinc-400 text-sm italic">Infinite Scalability</span>
           </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
}
