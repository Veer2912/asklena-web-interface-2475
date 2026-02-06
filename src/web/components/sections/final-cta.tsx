import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, CheckCircle2, ArrowRight, 
  Zap, ShieldCheck, Globe2, Mic2
} from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-32 bg-black relative overflow-hidden font-sans">
      {/* Immersive Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-500/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-pink-500/10 blur-[120px] rounded-full" />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative p-12 md:p-24 rounded-[4rem] bg-zinc-900/40 border border-white/10 backdrop-blur-3xl overflow-hidden text-center shadow-[0_0_80px_rgba(168,85,247,0.15)]"
        >
          {/* Internal Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-purple-500/20 to-transparent pointer-events-none" />

          <div className="relative z-10 space-y-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-bold text-white uppercase tracking-widest">The Future is Calling</span>
            </div>

            <h2 className="text-5xl md:text-8xl font-bold text-white leading-tight uppercase tracking-tighter">
              Start Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                Voice Revolution.
              </span>
            </h2>

            <p className="text-zinc-400 text-xl max-w-2xl mx-auto leading-relaxed">
              Join hundreds of industry-leading enterprises that are scaling their customer support, logistics, and sales with Asklena's neural voice agents.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { icon: <Zap className="w-5 h-5 text-purple-400" />, text: "Instant Deployment" },
                { icon: <ShieldCheck className="w-5 h-5 text-blue-400" />, text: "Enterprise Security" },
                { icon: <Globe2 className="w-5 h-5 text-pink-400" />, text: "40+ Languages" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                  {item.icon}
                  <span className="text-white text-sm font-bold uppercase tracking-tight">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Button className="h-20 px-12 bg-white text-black hover:bg-zinc-200 text-xl font-bold rounded-3xl shadow-[0_20px_40px_rgba(255,255,255,0.2)] transition-all duration-300 group">
                Start Free Trial
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button variant="outline" className="h-20 px-12 border-white/10 text-white hover:bg-white/5 text-xl font-bold rounded-3xl backdrop-blur-md">
                Schedule a Demo
              </Button>
            </div>

            <div className="pt-12 flex items-center justify-center gap-8 opacity-40 grayscale">
              <div className="flex items-center gap-2">
                <Mic2 className="w-5 h-5 text-white" />
                <span className="text-white font-mono text-sm tracking-tighter uppercase font-bold">Neural Engine v4.2</span>
              </div>
              <div className="h-4 w-px bg-white/20" />
              <span className="text-white font-mono text-sm tracking-tighter uppercase font-bold">Unlimited Concurrency</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
