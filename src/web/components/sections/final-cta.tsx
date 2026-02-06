import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Calendar, Phone, HeartPulse, Truck, Landmark, Sparkles } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-magenta-500/10 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm font-medium mb-8 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            Ready for the future of voice?
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            See Lena in Action
          </h2>
          <p className="text-zinc-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Experience the revolutionary human-like intelligence that's transforming how enterprises communicate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Main Immersive CTA */}
          <motion.div
            whileHover={{ y: -10 }}
            className="p-12 rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-2xl flex flex-col justify-between group overflow-hidden relative"
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-6">Experience Lena Live</h3>
              <p className="text-zinc-400 mb-12 text-lg">
                Join an immersive live demo session and interact with our most advanced voice AI agents in real-time.
              </p>
              
              <Button 
                size="lg" 
                className="h-20 px-12 text-xl bg-white text-black hover:bg-cyan-400 hover:text-black transition-all rounded-full font-bold shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-cyan-500/20"
              >
                <Play className="mr-3 w-6 h-6 fill-current" />
                Start Live Voice Demo
              </Button>
            </div>

            {/* Decorative Audio Visualizer */}
            <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end justify-center gap-1 px-8 opacity-20 pointer-events-none">
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 bg-white rounded-t-full"
                  animate={{ height: [20, Math.random() * 80 + 20, 20] }}
                  transition={{ duration: 0.5 + Math.random(), repeat: Infinity }}
                />
              ))}
            </div>
            
            {/* Ambient Background Audio Hint */}
            <div className="absolute top-8 right-8 text-white/20 animate-pulse">
               <Phone className="w-12 h-12" />
            </div>
          </motion.div>

          {/* Industry Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <IndustryCTACard 
              title="Healthcare" 
              icon={<HeartPulse className="w-6 h-6" />} 
              color="cyan"
              desc="Patient Scheduling & Support"
            />
            <IndustryCTACard 
              title="Logistics" 
              icon={<Truck className="w-6 h-6" />} 
              color="magenta"
              desc="Package Tracking & Delivery"
            />
            <IndustryCTACard 
              title="Finance" 
              icon={<Landmark className="w-6 h-6" />} 
              color="purple"
              desc="Secure Transaction Handling"
            />
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-[2rem] border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-xl flex flex-col justify-center items-center text-center group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-cyan-500 text-black flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                <Calendar className="w-6 h-6" />
              </div>
              <h4 className="text-white font-bold mb-1">Schedule Live Call</h4>
              <p className="text-zinc-500 text-xs">Speak with Lena directly</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustryCTACard({ title, icon, color, desc }: any) {
  const colorMap: any = {
    cyan: "border-cyan-500/20 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-cyan-400",
    magenta: "border-magenta-500/20 hover:border-magenta-500/50 hover:bg-magenta-500/10 text-magenta-400",
    purple: "border-purple-500/20 hover:border-purple-500/50 hover:bg-purple-500/10 text-purple-400",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className={`p-8 rounded-[2rem] border bg-white/5 backdrop-blur-xl transition-all cursor-pointer group ${colorMap[color]}`}
    >
      <div className={`w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h4 className="text-white font-bold text-lg mb-2">{title} Demo</h4>
      <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}
