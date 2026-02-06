import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";

interface Solution {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  accent: string;
  description: string;
  image: string;
  useCases: string[];
  metrics: string;
  roi: string;
  testimonial: string;
  company: string;
}

export const SolutionModal = ({ isOpen, onClose, solution }: { isOpen: boolean; onClose: () => void; solution: Solution | undefined }) => {
  if (!solution) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-zinc-950 border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-8 right-8 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors z-20"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-12 bg-gradient-to-br from-white/[0.05] to-transparent">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-8 shadow-2xl`}>
                  {solution.icon}
                </div>
                <h2 className="text-4xl font-black text-white mb-6">{solution.title}</h2>
                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                  {solution.description}
                </p>
                <div className="space-y-4">
                  <div className="text-zinc-500 text-xs font-black uppercase tracking-widest">Performance Metrics</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                      <div className={`text-2xl font-black ${solution.accent}`}>{solution.metrics.split(' ')[0]}</div>
                      <div className="text-[10px] text-zinc-500 uppercase">{solution.metrics.split(' ').slice(1).join(' ')}</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                      <div className="text-2xl font-black text-white">{solution.roi.split(' ')[0]}</div>
                      <div className="text-[10px] text-zinc-500 uppercase">{solution.roi.split(' ').slice(1).join(' ')}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-12 bg-zinc-900/50">
                <h3 className="text-xl font-bold text-white mb-8">360° Detailed Use Cases</h3>
                <div className="space-y-6">
                  {solution.useCases.map((useCase: string, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all group"
                    >
                      <CheckCircle2 className={`w-6 h-6 ${solution.accent} shrink-0`} />
                      <div>
                        <div className="font-bold text-white group-hover:text-cyan-400 transition-colors">{useCase}</div>
                        <div className="text-sm text-zinc-500 mt-1">Lena handles this workflow autonomously with high precision.</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20">
                  <div className="text-sm font-bold text-cyan-400 mb-2">Ready to deploy?</div>
                  <p className="text-xs text-zinc-400 mb-4">Start your trial today and get {solution.title} agents live in 24 hours.</p>
                  <button className="w-full py-3 bg-cyan-500 text-black font-black rounded-xl hover:bg-cyan-400 transition-colors">
                    Deploy {solution.title} AI
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
