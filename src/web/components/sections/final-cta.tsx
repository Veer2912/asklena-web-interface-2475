import { motion } from "react-icons/si"; // Wait, I used Si earlier, but I need motion from framer-motion
import { motion as m } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm text-purple-400 text-sm font-medium"
        >
          <Sparkles className="w-4 h-4" />
          Ready to transform your customer experience?
        </m.div>
        
        <m.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-8 font-outfit"
        >
          Start building your AI <br className="hidden md:block" />
          voice agent today.
        </m.h2>
        
        <m.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Join hundreds of forward-thinking enterprises using Asklena to deliver human-like voice experiences at scale.
        </m.p>
        
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button 
            size="lg" 
            className="h-14 px-8 text-lg bg-white text-black hover:bg-zinc-200 transition-all group w-full sm:w-auto"
          >
            Start Free Trial
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="h-14 px-8 text-lg border-zinc-800 text-white hover:bg-zinc-900 transition-all w-full sm:w-auto"
          >
            Schedule Demo
          </Button>
          <Button 
            variant="ghost" 
            size="lg" 
            className="h-14 px-8 text-lg text-zinc-400 hover:text-white transition-all w-full sm:w-auto"
          >
            View Pricing
          </Button>
        </m.div>
      </div>
    </section>
  );
}
