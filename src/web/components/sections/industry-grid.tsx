import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Heart, Truck, Landmark, GraduationCap, Users, ShoppingCart,
  Play, Volume2, ShieldCheck, Zap, MessageSquare, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  {
    id: "healthcare",
    name: "Healthcare",
    icon: <Heart className="w-5 h-5" />,
    color: "cyan",
    useCases: [
      {
        title: "Appointment Booking",
        desc: "24/7 automated scheduling for clinics and hospitals.",
        demo: "I can help you book that appointment for next Tuesday at 10 AM. Would you like a confirmation text?"
      },
      {
        title: "Patient Follow-up",
        desc: "Automated post-op check-ins and medication reminders.",
        demo: "Hello, I'm checking in to see how you're feeling after your procedure yesterday."
      },
      {
        title: "Billing Inquiries",
        desc: "Handling complex insurance and billing questions with ease.",
        demo: "Your insurance has covered 80% of the cost. The remaining balance is $45.20."
      }
    ]
  },
  {
    id: "logistics",
    name: "Logistics",
    icon: <Truck className="w-5 h-5" />,
    color: "blue",
    useCases: [
      {
        title: "Fleet Dispatch",
        desc: "Coordinating driver routes and delivery schedules.",
        demo: "The route has been updated to avoid traffic on I-95. Expected arrival is now 4:15 PM."
      },
      {
        title: "Shipment Tracking",
        desc: "Real-time updates for customers on their orders.",
        demo: "Your package #4920 is currently 5 miles from your location. The driver is on their way."
      },
      {
        title: "Inventory Alerts",
        desc: "Proactive notifications for low stock and supply chain issues.",
        demo: "Stock levels for item SKU-902 are below threshold. Initiating reorder process."
      }
    ]
  },
  {
    id: "finance",
    name: "Finance",
    icon: <Landmark className="w-5 h-5" />,
    color: "indigo",
    useCases: [
      {
        title: "Fraud Prevention",
        desc: "Instant alerts and verification for suspicious activity.",
        demo: "I've detected an unusual transaction from London. Was this you?"
      },
      {
        title: "Loan Status",
        desc: "Guiding customers through the application lifecycle.",
        demo: "Your mortgage application has been pre-approved. We just need two more documents."
      },
      {
        title: "Account Support",
        desc: "Secure handling of balance inquiries and transfers.",
        demo: "Your current balance is $4,502.80. Would you like to transfer funds to savings?"
      }
    ]
  },
  {
    id: "education",
    name: "Education",
    icon: <GraduationCap className="w-5 h-5" />,
    color: "purple",
    useCases: [
      {
        title: "Student Enrollment",
        desc: "Helping students navigate registration and admissions.",
        demo: "Welcome! I can help you complete your spring semester registration in just 3 minutes."
      },
      {
        title: "Tutor Scheduling",
        desc: "Connecting students with available academic support.",
        demo: "We have a math tutor available today at 4 PM. Shall I book the session?"
      },
      {
        title: "FAQ Automation",
        desc: "Instant answers for campus life and academic policies.",
        demo: "The library is open until midnight today. You can reserve a study room through the portal."
      }
    ]
  }
];

const colorMap: Record<string, { bg: string, text: string, border: string, glow: string }> = {
  cyan: { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500/20", glow: "rgba(34, 211, 238, 0.4)" },
  blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20", glow: "rgba(59, 130, 246, 0.4)" },
  indigo: { bg: "bg-indigo-500/10", text: "text-indigo-400", border: "border-indigo-500/20", glow: "rgba(99, 102, 241, 0.4)" },
  purple: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20", glow: "rgba(168, 85, 247, 0.4)" },
};

export function IndustryGrid() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);
  const [playingDemo, setPlayingDemo] = useState<string | null>(null);

  const colors = colorMap[activeIndustry.color];

  return (
    <section className="py-32 bg-black relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">Industry Solutions</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tighter"
          >
            Tailored <span className="text-zinc-500">Intelli-Core</span>
          </motion.h2>
        </div>

        {/* Industry Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {industries.map((ind) => (
            <button
              key={ind.id}
              onClick={() => {
                setActiveIndustry(ind);
                setPlayingDemo(null);
              }}
              className={`px-8 py-4 rounded-2xl border transition-all duration-300 flex items-center gap-3 ${
                activeIndustry.id === ind.id 
                  ? "bg-white text-black border-white shadow-2xl" 
                  : "bg-white/5 border-white/5 text-zinc-500 hover:text-white hover:border-white/10"
              }`}
            >
              {ind.icon}
              <span className="font-bold text-sm tracking-widest uppercase">{ind.name}</span>
            </button>
          ))}
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {activeIndustry.useCases.map((useCase, idx) => (
              <motion.div
                key={`${activeIndustry.id}-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="relative p-10 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl h-full flex flex-col transition-all duration-500 hover:border-white/20">
                  <div className={`absolute -inset-10 ${colors.bg} blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-8">
                      <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${colors.text}`}>
                        <MessageSquare className="w-6 h-6" />
                      </div>
                      <ShieldCheck className="w-5 h-5 text-zinc-700" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-10">
                      {useCase.desc}
                    </p>

                    <div className="mt-auto pt-8 border-t border-white/5">
                      <Button
                        onClick={() => setPlayingDemo(playingDemo === useCase.title ? null : useCase.title)}
                        className={`w-full rounded-2xl h-14 font-bold uppercase tracking-widest text-xs gap-3 transition-all duration-300 ${
                          playingDemo === useCase.title 
                            ? "bg-white text-black hover:bg-zinc-200" 
                            : `bg-transparent border ${colors.border} ${colors.text} hover:bg-white/5`
                        }`}
                      >
                        {playingDemo === useCase.title ? (
                          <>
                            <Volume2 className="w-4 h-4 animate-pulse" />
                            Playing Demo...
                          </>
                        ) : (
                          <>
                            <Play className="w-4 h-4 fill-current" />
                            Listen to Demo
                          </>
                        )}
                      </Button>
                    </div>

                    <AnimatePresence>
                      {playingDemo === useCase.title && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="mt-6 p-4 rounded-xl bg-black/40 border border-white/5 italic text-zinc-300 text-xs leading-relaxed"
                        >
                          "{useCase.demo}"
                          <div className="mt-3 flex gap-0.5 items-end h-4">
                            {[...Array(20)].map((_, i) => (
                              <motion.div
                                key={i}
                                animate={{ height: [2, Math.random() * 16 + 2, 2] }}
                                transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.05 }}
                                className={`flex-1 ${colors.bg.replace('/10', '/60')} rounded-full`}
                              />
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Global Stats Footer */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Deployment", value: "Cloud Native" },
            { label: "Compliance", value: "SOC2/HIPAA" },
            { label: "Connectivity", value: "SIP/PSTN" },
            { label: "Uptime", value: "99.99%" }
          ].map((stat, i) => (
            <div key={i} className="px-8 py-6 rounded-3xl bg-white/5 border border-white/5 text-center group hover:bg-white/10 transition-colors">
              <span className="block text-[10px] text-zinc-600 font-bold uppercase tracking-widest mb-1 group-hover:text-purple-400">{stat.label}</span>
              <span className="text-white font-mono font-bold">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
}
