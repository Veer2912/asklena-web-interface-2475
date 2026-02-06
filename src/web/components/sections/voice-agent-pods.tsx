import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HeartPulse, Truck, Landmark, GraduationCap, Users, ShoppingCart, 
  X, CheckCircle2, BarChart3, ShieldCheck, Zap, Globe2, Mic2
} from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  {
    id: "health",
    name: "HealthPod",
    industry: "Healthcare",
    icon: <HeartPulse className="w-6 h-6" />,
    color: "cyan",
    accent: "#22d3ee",
    description: "Empathetic voice agents for patient support and medical coordination.",
    capabilities: [
      "Appointment Scheduling",
      "Symptom Documentation",
      "Insurance Verification",
      "HIPAA Compliant Processing"
    ],
    stats: { efficiency: "+40%", latency: "180ms", security: "Tier 1" }
  },
  {
    id: "logistics",
    name: "LogisticsPod",
    industry: "Logistics",
    icon: <Truck className="w-6 h-6" />,
    color: "blue",
    accent: "#3b82f6",
    description: "Precision-focused agents for fleet management and delivery tracking.",
    capabilities: [
      "Real-time Tracking",
      "Route Optimization",
      "Dispatch Coordination",
      "Inventory Management"
    ],
    stats: { efficiency: "+55%", latency: "150ms", security: "Enterprise" }
  },
  {
    id: "finance",
    name: "FinPod",
    industry: "Finance",
    icon: <Landmark className="w-6 h-6" />,
    color: "indigo",
    accent: "#6366f1",
    description: "Secure, professional agents for transaction support and fraud alerts.",
    capabilities: [
      "Fraud Detection Alerts",
      "Balance Inquiries",
      "Loan Status Updates",
      "Secure ID Verification"
    ],
    stats: { efficiency: "+30%", latency: "190ms", security: "Bank-Grade" }
  },
  {
    id: "edu",
    name: "EduPod",
    industry: "Education",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "purple",
    accent: "#a855f7",
    description: "Encouraging agents for student enrollment and academic support.",
    capabilities: [
      "Enrollment Guidance",
      "FAQ Automation",
      "Schedule Management",
      "Event Notifications"
    ],
    stats: { efficiency: "+45%", latency: "200ms", security: "GDPR/FERPA" }
  },
  {
    id: "hr",
    name: "RecruitPod",
    industry: "HR & Recruitment",
    icon: <Users className="w-6 h-6" />,
    color: "pink",
    accent: "#ec4899",
    description: "Warm, engaging agents for candidate screening and interviews.",
    capabilities: [
      "Pre-screening Interviews",
      "Interview Scheduling",
      "Onboarding Assistance",
      "Employee Inquiries"
    ],
    stats: { efficiency: "+60%", latency: "170ms", security: "SOC 2" }
  },
  {
    id: "shop",
    name: "ShopPod",
    industry: "Ecommerce",
    icon: <ShoppingCart className="w-6 h-6" />,
    color: "fuchsia",
    accent: "#d946ef",
    description: "Helpful agents for order management and personalized sales.",
    capabilities: [
      "Order Status Updates",
      "Cart Abandonment",
      "Refund Processing",
      "Upsell Assistance"
    ],
    stats: { efficiency: "+35%", latency: "160ms", security: "PCI DSS" }
  }
];

export function VoiceAgentPods() {
  const [selectedPod, setSelectedPod] = useState<typeof industries[0] | null>(null);

  return (
    <section className="py-32 bg-black relative overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-purple-500/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-500/5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Globe2 className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">Industry Architecture</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tighter"
          >
            Agent <span className="text-zinc-500">Pods</span>
          </motion.h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Specialized neural cores pre-configured for your industry. Deploy a dedicated voice agent pod in minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((pod, idx) => (
            <motion.div
              key={pod.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedPod(pod)}
              className="group cursor-pointer"
            >
              <div className="relative p-10 rounded-[3rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl transition-all duration-500 group-hover:border-white/20 h-full overflow-hidden">
                {/* Pod Core */}
                <div className="mb-8 relative w-20 h-20">
                  <div className={`absolute inset-0 bg-white/5 rounded-2xl flex items-center justify-center text-white z-10 border border-white/10 group-hover:scale-110 transition-transform duration-500`}>
                    {pod.icon}
                  </div>
                  {/* Pulse Effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.1, 0.3],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 rounded-2xl bg-current opacity-20 blur-xl"
                    style={{ color: pod.accent }}
                  />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{pod.name}</h3>
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6">
                  {pod.industry} Agent
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-10">
                  {pod.description}
                </p>

                <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-auto">
                  <span>View Details</span>
                  <div className="w-8 h-px bg-zinc-800 group-hover:w-12 transition-all duration-500 group-hover:bg-purple-500" />
                </div>

                {/* Corner Accent */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-3xl rounded-full"
                  style={{ backgroundColor: pod.accent }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Pod Modal */}
      <AnimatePresence>
        {selectedPod && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPod(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            
            <motion.div
              layoutId={selectedPod.id}
              className="relative w-full max-w-4xl bg-zinc-950 border border-white/10 rounded-[4rem] overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                onClick={() => setSelectedPod(null)}
                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors z-20"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Side: Identity */}
                <div className="p-12 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
                  <div className={`w-24 h-24 rounded-[2rem] flex items-center justify-center text-white mb-8 border border-white/10 relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20" style={{ backgroundColor: selectedPod.accent }} />
                    <div className="relative z-10">{selectedPod.icon}</div>
                  </div>
                  
                  <h3 className="text-4xl font-bold text-white mb-2">{selectedPod.name}</h3>
                  <p className="text-lg font-mono text-zinc-500 uppercase tracking-widest mb-8">
                    {selectedPod.industry} Engine
                  </p>
                  <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                    {selectedPod.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/5">
                      <span className="block text-[10px] text-zinc-500 font-bold uppercase mb-1">Efficiency</span>
                      <span className="text-white font-mono font-bold">{selectedPod.stats.efficiency}</span>
                    </div>
                    <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/5">
                      <span className="block text-[10px] text-zinc-500 font-bold uppercase mb-1">Latency</span>
                      <span className="text-white font-mono font-bold">{selectedPod.stats.latency}</span>
                    </div>
                    <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/5">
                      <span className="block text-[10px] text-zinc-500 font-bold uppercase mb-1">Security</span>
                      <span className="text-white font-mono font-bold">{selectedPod.stats.security}</span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Capabilities */}
                <div className="p-12 lg:p-16 bg-zinc-900/30">
                  <div className="flex items-center gap-3 mb-10">
                    <Zap className="w-5 h-5 text-purple-400" />
                    <h4 className="text-xl font-bold text-white uppercase tracking-tighter">Core Capabilities</h4>
                  </div>

                  <div className="space-y-6">
                    {selectedPod.capabilities.map((cap, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                        className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/5 group hover:bg-white/10 transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-purple-400 border border-white/10">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <span className="text-white font-medium">{cap}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-12 p-8 rounded-3xl bg-purple-500/10 border border-purple-500/20">
                    <div className="flex items-center gap-3 mb-4">
                      <Mic2 className="w-4 h-4 text-purple-400" />
                      <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest">Live Integration</span>
                    </div>
                    <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
                      Deploy this pod to your existing infrastructure in under 5 minutes with our native API connectors.
                    </p>
                    <Button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl h-12">
                      Deploy Pod Now
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
