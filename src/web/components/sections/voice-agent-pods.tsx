import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HeartPulse, Truck, Landmark, GraduationCap, Users, ShoppingCart, 
  X, CheckCircle2, Zap, Globe2, Mic2
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ============================================================================
// NEURAL MATRIX PODS - 3D hovering pods with neural connections
// ============================================================================

const industries = [
  {
    id: "health",
    name: "HealthPod",
    industry: "Healthcare",
    icon: HeartPulse,
    color: "#06b6d4",
    description: "Empathetic voice agents for patient support and medical coordination.",
    capabilities: ["Appointment Scheduling", "Symptom Documentation", "Insurance Verification", "HIPAA Compliant"],
    stats: { efficiency: "+40%", latency: "180ms", security: "Tier 1" }
  },
  {
    id: "logistics",
    name: "LogiPod",
    industry: "Logistics",
    icon: Truck,
    color: "#3b82f6",
    description: "Precision-focused agents for fleet management and delivery tracking.",
    capabilities: ["Real-time Tracking", "Route Optimization", "Dispatch Coordination", "Inventory Management"],
    stats: { efficiency: "+55%", latency: "150ms", security: "Enterprise" }
  },
  {
    id: "finance",
    name: "FinPod",
    industry: "Finance",
    icon: Landmark,
    color: "#a855f7",
    description: "Secure, professional agents for transaction support and fraud alerts.",
    capabilities: ["Fraud Detection", "Balance Inquiries", "Loan Status", "Secure ID Verification"],
    stats: { efficiency: "+30%", latency: "190ms", security: "Bank-Grade" }
  },
  {
    id: "edu",
    name: "EduPod",
    industry: "Education",
    icon: GraduationCap,
    color: "#10b981",
    description: "Encouraging agents for student enrollment and academic support.",
    capabilities: ["Enrollment Guidance", "FAQ Automation", "Schedule Management", "Event Notifications"],
    stats: { efficiency: "+45%", latency: "200ms", security: "GDPR/FERPA" }
  },
  {
    id: "hr",
    name: "HRPod",
    industry: "HR & Recruitment",
    icon: Users,
    color: "#ec4899",
    description: "Warm, engaging agents for candidate screening and interviews.",
    capabilities: ["Pre-screening", "Interview Scheduling", "Onboarding", "Employee Inquiries"],
    stats: { efficiency: "+60%", latency: "170ms", security: "SOC 2" }
  },
  {
    id: "shop",
    name: "ShopPod",
    industry: "E-commerce",
    icon: ShoppingCart,
    color: "#f59e0b",
    description: "Helpful agents for order management and personalized sales.",
    capabilities: ["Order Status", "Cart Recovery", "Refund Processing", "Upsell Assistance"],
    stats: { efficiency: "+35%", latency: "160ms", security: "PCI DSS" }
  }
];

// Floating Pod Component with 3D effect
function FloatingPod({ 
  pod, 
  index, 
  onClick,
  isAnySelected 
}: { 
  pod: typeof industries[0]; 
  index: number;
  onClick: () => void;
  isAnySelected: boolean;
}) {
  const Icon = pod.icon;
  const row = Math.floor(index / 3);
  const col = index % 3;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -30 }}
      whileInView={{ 
        opacity: isAnySelected ? 0.3 : 1, 
        y: 0, 
        rotateX: 0 
      }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ 
        scale: 1.05, 
        y: -10, 
        opacity: 1,
        rotateY: 5,
        rotateX: -5,
      }}
      onClick={onClick}
      className="group cursor-pointer perspective-1000"
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3 + index * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
        {/* Pod container */}
        <div 
          className="relative p-8 rounded-[2rem] border backdrop-blur-xl transition-all duration-500"
          style={{
            backgroundColor: `${pod.color}08`,
            borderColor: `${pod.color}30`,
            boxShadow: `0 20px 60px ${pod.color}15, 0 0 0 1px ${pod.color}10`,
          }}
        >
          {/* Glowing orb background */}
          <motion.div
            className="absolute top-4 right-4 w-24 h-24 rounded-full blur-3xl"
            style={{ backgroundColor: pod.color }}
            animate={{
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          {/* Neural connection lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
            <defs>
              <linearGradient id={`pod-gradient-${pod.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={pod.color} stopOpacity="0" />
                <stop offset="50%" stopColor={pod.color} stopOpacity="0.5" />
                <stop offset="100%" stopColor={pod.color} stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.line
              x1="0%"
              y1="50%"
              x2="100%"
              y2="50%"
              stroke={`url(#pod-gradient-${pod.id})`}
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </svg>
          
          {/* Icon */}
          <motion.div
            animate={{
              boxShadow: [
                `0 0 20px ${pod.color}30`,
                `0 0 40px ${pod.color}50`,
                `0 0 20px ${pod.color}30`,
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
            style={{ backgroundColor: `${pod.color}20` }}
          >
            <Icon className="w-8 h-8" style={{ color: pod.color }} />
          </motion.div>
          
          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-1">{pod.name}</h3>
            <p className="text-xs text-zinc-500 uppercase tracking-widest mb-4">{pod.industry}</p>
            <p className="text-sm text-zinc-400 leading-relaxed">{pod.description}</p>
          </div>
          
          {/* Hover indicator */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 rounded-b-[2rem]"
            style={{ backgroundColor: pod.color }}
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        
        {/* Shadow/reflection */}
        <div 
          className="absolute -bottom-4 left-4 right-4 h-8 rounded-full blur-xl opacity-30"
          style={{ backgroundColor: pod.color }}
        />
      </motion.div>
    </motion.div>
  );
}

// Expanded Pod Modal
function PodModal({ pod, onClose }: { pod: typeof industries[0]; onClose: () => void }) {
  const Icon = pod.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <motion.div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
      />
      
      {/* Modal */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, rotateX: -10 }}
        animate={{ scale: 1, opacity: 1, rotateX: 0 }}
        exit={{ scale: 0.9, opacity: 0, rotateX: 10 }}
        className="relative w-full max-w-3xl rounded-[3rem] border overflow-hidden"
        style={{
          backgroundColor: "#0a0a0a",
          borderColor: `${pod.color}30`,
          boxShadow: `0 40px 100px ${pod.color}20`,
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>
        
        {/* Glowing background */}
        <div 
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[150px] opacity-20"
          style={{ backgroundColor: pod.color }}
        />
        
        <div className="relative z-10 p-10 md:p-12">
          {/* Header */}
          <div className="flex items-center gap-6 mb-8">
            <motion.div
              animate={{
                boxShadow: [
                  `0 0 30px ${pod.color}40`,
                  `0 0 60px ${pod.color}60`,
                  `0 0 30px ${pod.color}40`,
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: `${pod.color}20` }}
            >
              <Icon className="w-10 h-10" style={{ color: pod.color }} />
            </motion.div>
            
            <div>
              <h2 className="text-3xl font-bold text-white">{pod.name}</h2>
              <p className="text-zinc-500 uppercase tracking-widest text-sm">{pod.industry} Agent</p>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-lg text-zinc-400 mb-8 leading-relaxed">{pod.description}</p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {Object.entries(pod.stats).map(([key, value], i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-4 rounded-xl border text-center"
                style={{
                  backgroundColor: `${pod.color}10`,
                  borderColor: `${pod.color}20`,
                }}
              >
                <p className="text-2xl font-bold" style={{ color: pod.color }}>{value}</p>
                <p className="text-xs text-zinc-500 uppercase tracking-widest capitalize">{key}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Capabilities */}
          <div className="mb-8">
            <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4" style={{ color: pod.color }} />
              Core Capabilities
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {pod.capabilities.map((cap, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5"
                >
                  <CheckCircle2 className="w-5 h-5" style={{ color: pod.color }} />
                  <span className="text-sm text-zinc-300">{cap}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* CTA */}
          <div className="p-6 rounded-2xl border" style={{ borderColor: `${pod.color}20`, backgroundColor: `${pod.color}10` }}>
            <div className="flex items-center gap-3 mb-4">
              <Mic2 className="w-4 h-4" style={{ color: pod.color }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: pod.color }}>
                Deploy in 5 Minutes
              </span>
            </div>
            <p className="text-sm text-zinc-400 mb-4">
              Connect this pod to your existing infrastructure with our native API connectors.
            </p>
            <Button 
              className="w-full h-12 font-bold rounded-xl"
              style={{ backgroundColor: pod.color }}
            >
              Deploy {pod.name}
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function VoiceAgentPods() {
  const [selectedPod, setSelectedPod] = useState<typeof industries[0] | null>(null);

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[200px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6"
          >
            <Globe2 className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">Neural Matrix</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Agent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              Pods
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-400 max-w-2xl mx-auto"
          >
            Specialized neural cores pre-configured for your industry. Deploy a dedicated voice agent pod in minutes.
          </motion.p>
        </div>

        {/* Pods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((pod, idx) => (
            <FloatingPod
              key={pod.id}
              pod={pod}
              index={idx}
              onClick={() => setSelectedPod(pod)}
              isAnySelected={!!selectedPod}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPod && (
          <PodModal pod={selectedPod} onClose={() => setSelectedPod(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
