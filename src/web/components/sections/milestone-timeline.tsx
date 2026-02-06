import { motion } from "framer-motion";
import { 
  Search, BrainCircuit, Cable, 
  ShieldAlert, Rocket, CheckCircle2, 
  Settings2, Activity
} from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Discovery",
    description: "We analyze your existing call flows, identifying high-impact automation opportunities and customer touchpoints.",
    icon: <Search className="w-6 h-6" />,
    color: "cyan",
    accent: "#22d3ee"
  },
  {
    id: "02",
    title: "Model Training",
    description: "Our neural engine is fine-tuned on your specific business knowledge, brand voice, and industry terminology.",
    icon: <BrainCircuit className="w-6 h-6" />,
    color: "purple",
    accent: "#a855f7"
  },
  {
    id: "03",
    title: "Integration",
    description: "Native connection to your CRM (Salesforce, HubSpot), telephony (Twilio, SIP), and internal APIs.",
    icon: <Cable className="w-6 h-6" />,
    color: "blue",
    accent: "#3b82f6"
  },
  {
    id: "04",
    title: "Beta Testing",
    description: "A controlled rollout with real-time monitoring to ensure perfect technical and emotional performance.",
    icon: <ShieldAlert className="w-6 h-6" />,
    color: "pink",
    accent: "#ec4899"
  },
  {
    id: "05",
    title: "Deployment",
    description: "Full-scale go-live with unlimited concurrency, sub-200ms latency, and 24/7 autonomous support.",
    icon: <Rocket className="w-6 h-6" />,
    color: "green",
    accent: "#10b981",
    highlight: true
  }
];

export function MilestoneTimeline() {
  return (
    <section className="py-32 bg-black relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Settings2 className="w-4 h-4 text-zinc-400" />
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">The Implementation Path</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tighter"
          >
            Enterprise <span className="text-zinc-500">Rollout</span>
          </motion.h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Our streamlined deployment process ensures your AI voice agents are live, secure, and perfectly aligned with your brand in weeks, not months.
          </p>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-zinc-800 via-zinc-500 to-zinc-800 hidden lg:block" />

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-0 ${
                  idx % 2 === 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content Side */}
                <div className={`w-full lg:w-1/2 lg:px-16 text-center ${idx % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900 border border-white/5 mb-6 text-xl font-bold font-mono text-zinc-700`}>
                    {step.id}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 uppercase tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-zinc-500 text-lg leading-relaxed mb-6">
                    {step.description}
                  </p>
                  <div className={`inline-flex items-center gap-2 ${idx % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                    <CheckCircle2 className="w-4 h-4 text-green-500/50" />
                    <span className="text-[10px] font-bold text-zinc-700 uppercase tracking-widest">Verified Phase</span>
                  </div>
                </div>

                {/* Node */}
                <div className="relative z-20 flex items-center justify-center">
                  <div className={`w-20 h-20 rounded-3xl flex items-center justify-center border backdrop-blur-xl transition-all duration-500 ${
                    step.highlight 
                      ? "bg-white text-black border-white shadow-[0_0_40px_rgba(255,255,255,0.2)] scale-110" 
                      : "bg-zinc-900/80 text-zinc-400 border-white/10"
                  }`}>
                    {step.icon}
                  </div>
                  {/* Glowing background */}
                  <div 
                    className="absolute inset-0 blur-2xl opacity-20 rounded-full"
                    style={{ backgroundColor: step.accent }}
                  />
                </div>

                {/* Spacer Side */}
                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action Row */}
        <div className="mt-32 p-12 rounded-[3.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white">
                <Activity className="w-6 h-6" />
              </div>
              <div className="text-left">
                <span className="block text-white font-bold">Fast-Track Pilot</span>
                <span className="text-zinc-500 text-sm">Start your 14-day beta program today</span>
              </div>
            </div>
            <div className="h-12 w-px bg-white/5 hidden md:block" />
            <button className="px-10 py-4 rounded-2xl bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-zinc-200 transition-all">
              Schedule Onboarding
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
