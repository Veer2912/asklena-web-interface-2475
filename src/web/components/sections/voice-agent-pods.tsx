import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeartPulse, Truck, Landmark, GraduationCap, Users, ShoppingCart, MessageSquare } from "lucide-react";

const industries = [
  {
    name: "Healthcare",
    agent: "Dr. Lena",
    icon: <HeartPulse className="w-6 h-6" />,
    color: "cyan",
    conversation: "I can help schedule your cardiac screening for next Tuesday.",
    description: "Assisting patients with appointments and medical queries."
  },
  {
    name: "Logistics",
    agent: "Agent Alex",
    icon: <Truck className="w-6 h-6" />,
    color: "magenta",
    conversation: "Your shipment #4920 is currently in transit to Berlin.",
    description: "Real-time tracking and delivery coordination."
  },
  {
    name: "Finance",
    agent: "FinLena",
    icon: <Landmark className="w-6 h-6" />,
    color: "purple",
    conversation: "I've flagged the unrecognized charge and frozen your card.",
    description: "Secure transaction handling and account support."
  },
  {
    name: "Education",
    agent: "Tutor Lena",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "blue",
    conversation: "The student portal credentials have been sent to your email.",
    description: "Streamlining student inquiries and registrations."
  },
  {
    name: "HR & Recruitment",
    agent: "Recruit Lena",
    icon: <Users className="w-6 h-6" />,
    color: "indigo",
    conversation: "Your interview with the engineering team is set for 3 PM.",
    description: "Automated candidate screening and scheduling."
  },
  {
    name: "Ecommerce",
    agent: "ShopLena",
    icon: <ShoppingCart className="w-6 h-6" />,
    color: "teal",
    conversation: "I've added the summer collection discount to your cart.",
    description: "Personalized shopping and order management."
  }
];

export function VoiceAgentPods() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % industries.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Industry Agent Pods
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
            Specialized voice agents trained for your specific industry needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, idx) => (
            <PodCard 
              key={industry.name} 
              industry={industry} 
              isActive={activeIndex === idx}
              onHover={() => {
                setIsHovered(true);
                setActiveIndex(idx);
              }}
              onLeave={() => setIsHovered(false)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PodCard({ industry, isActive, onHover, onLeave }: { 
  industry: typeof industries[0], 
  isActive: boolean,
  onHover: () => void,
  onLeave: () => void
}) {
  const colorMap: Record<string, string> = {
    cyan: "from-cyan-500/20 to-cyan-500/5 border-cyan-500/30 text-cyan-400 shadow-cyan-500/10",
    magenta: "from-magenta-500/20 to-magenta-500/5 border-magenta-500/30 text-magenta-400 shadow-magenta-500/10",
    purple: "from-purple-500/20 to-purple-500/5 border-purple-500/30 text-purple-400 shadow-purple-500/10",
    blue: "from-blue-500/20 to-blue-500/5 border-blue-500/30 text-blue-400 shadow-blue-500/10",
    indigo: "from-indigo-500/20 to-indigo-500/5 border-indigo-500/30 text-indigo-400 shadow-indigo-500/10",
    teal: "from-teal-500/20 to-teal-500/5 border-teal-500/30 text-teal-400 shadow-teal-500/10",
  };

  const glowColorMap: Record<string, string> = {
    cyan: "rgba(34, 211, 238, 0.15)",
    magenta: "rgba(217, 70, 239, 0.15)",
    purple: "rgba(168, 85, 247, 0.15)",
    blue: "rgba(59, 130, 246, 0.15)",
    indigo: "rgba(99, 102, 241, 0.15)",
    teal: "rgba(20, 184, 166, 0.15)",
  };

  return (
    <motion.div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      layout
      initial={false}
      animate={{
        scale: isActive ? 1.05 : 1,
        y: isActive ? -10 : 0,
      }}
      className={`relative p-8 rounded-[2.5rem] border bg-gradient-to-br backdrop-blur-xl transition-all duration-500 cursor-pointer ${
        isActive ? colorMap[industry.color] : "from-white/5 to-transparent border-white/5 text-zinc-400 shadow-none"
      }`}
      style={{
        boxShadow: isActive ? `0 20px 40px ${glowColorMap[industry.color]}` : "none"
      }}
    >
      <div className="flex items-start justify-between mb-8">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-black/50 border border-white/10 ${isActive ? 'text-white' : 'text-zinc-500'}`}>
          {industry.icon}
        </div>
        <div className="flex gap-1">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`w-1 rounded-full ${isActive ? 'bg-current' : 'bg-zinc-800'}`}
              animate={{ 
                height: isActive ? [8, 20, 8] : 8
              }}
              transition={{ 
                duration: 0.6, 
                repeat: Infinity, 
                delay: i * 0.1 
              }}
            />
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className={`text-2xl font-bold mb-1 ${isActive ? 'text-white' : 'text-zinc-300'}`}>
          {industry.name}
        </h3>
        <p className="text-sm font-medium opacity-60 uppercase tracking-widest">
          {industry.agent}
        </p>
      </div>

      <AnimatePresence mode="wait">
        {isActive ? (
          <motion.div
            key="active"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex gap-3">
              <MessageSquare className="w-4 h-4 flex-shrink-0 mt-1 opacity-50" />
              <p className="text-sm text-white italic leading-relaxed">
                "{industry.conversation}"
              </p>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              {industry.description}
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="inactive"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className="text-sm opacity-50">
              Hover to see capabilities
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Orb */}
      <motion.div
        animate={{
          scale: isActive ? [1, 1.2, 1] : 1,
          opacity: isActive ? [0.2, 0.4, 0.2] : 0,
        }}
        className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl pointer-events-none ${
          industry.color === 'cyan' ? 'bg-cyan-500' :
          industry.color === 'magenta' ? 'bg-magenta-500' :
          industry.color === 'purple' ? 'bg-purple-500' :
          industry.color === 'blue' ? 'bg-blue-500' :
          industry.color === 'indigo' ? 'bg-indigo-500' : 'bg-teal-500'
        }`}
      />
    </motion.div>
  );
}
