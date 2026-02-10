import { motion } from "framer-motion";
import { useState } from "react";
import { Check, PhoneIncoming, PhoneOutgoing, ArrowRight, Zap } from "lucide-react";

// ============================================================================
// SIGNAL FLOW COMPARISON - Animated call flow visualization
// ============================================================================

const inboundFeatures = [
  "24/7 Customer Support",
  "Instant Response Time",
  "Multilingual Support (40+)",
  "Seamless Live Transfer",
  "CRM Integration",
  "Contextual Understanding"
];

const outboundFeatures = [
  "Proactive Lead Qualification",
  "Appointment Scheduling",
  "Payment Reminders",
  "Automated Follow-ups",
  "High Conversion Rates",
  "Scalable Outreach"
];

// Signal Flow Animation
function SignalFlow({ direction, isActive }: { direction: "inbound" | "outbound"; isActive: boolean }) {
  const isInbound = direction === "inbound";
  const color = isInbound ? "#a855f7" : "#3b82f6";
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Flow particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{ 
            backgroundColor: color,
            boxShadow: `0 0 10px ${color}`,
            top: "50%",
            [isInbound ? "right" : "left"]: "100%",
          }}
          animate={isActive ? {
            x: isInbound ? [-200, 200] : [200, -200],
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 1, 0.5],
          } : { opacity: 0 }}
          transition={{
            duration: 2,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      
      {/* Flow line */}
      <motion.div
        className="absolute top-1/2 h-px w-full"
        style={{ backgroundColor: `${color}30` }}
        animate={isActive ? {
          background: [
            `linear-gradient(${isInbound ? "270deg" : "90deg"}, ${color}00, ${color}50, ${color}00)`,
          ],
          backgroundSize: ["200% 100%"],
          backgroundPosition: ["100% 0%", "0% 0%"],
        } : {}}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

// Agent Type Card
function AgentTypeCard({ 
  type, 
  isActive, 
  onClick 
}: { 
  type: "inbound" | "outbound"; 
  isActive: boolean;
  onClick: () => void;
}) {
  const isInbound = type === "inbound";
  const color = isInbound ? "#a855f7" : "#3b82f6";
  const Icon = isInbound ? PhoneIncoming : PhoneOutgoing;
  const features = isInbound ? inboundFeatures : outboundFeatures;
  
  return (
    <motion.div
      onClick={onClick}
      className="cursor-pointer group relative"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        animate={{
          borderColor: isActive ? `${color}50` : "rgba(255,255,255,0.1)",
          boxShadow: isActive ? `0 0 40px ${color}20` : "none",
        }}
        className="relative p-8 md:p-10 rounded-3xl border bg-zinc-900/50 backdrop-blur-xl transition-all duration-500 overflow-hidden"
      >
        {/* Signal flow animation */}
        <SignalFlow direction={type} isActive={isActive} />
        
        {/* Background gradient */}
        <motion.div
          className="absolute inset-0"
          style={{ backgroundColor: color }}
          animate={{ opacity: isActive ? 0.05 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Header */}
        <div className="relative z-10 flex items-center gap-4 mb-6">
          <motion.div
            animate={{
              scale: isActive ? 1.1 : 1,
              boxShadow: isActive ? `0 0 30px ${color}50` : `0 0 15px ${color}30`,
            }}
            className="w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{ backgroundColor: `${color}20` }}
          >
            <Icon className="w-7 h-7" style={{ color }} />
          </motion.div>
          
          <div>
            <h3 className="text-2xl font-bold text-white">
              {isInbound ? "Inbound" : "Outbound"} Agents
            </h3>
            <p className="text-xs text-zinc-500 uppercase tracking-widest">
              {isInbound ? "Handle incoming calls" : "Make outgoing calls"}
            </p>
          </div>
        </div>
        
        {/* Description */}
        <p className="relative z-10 text-zinc-400 mb-8 leading-relaxed">
          {isInbound 
            ? "Handle incoming customer inquiries, support requests, and bookings with human-like precision."
            : "Proactively reach out to leads, confirm appointments, and drive sales through intelligent outreach."
          }
        </p>
        
        {/* Features grid */}
        <div className="relative z-10 grid grid-cols-2 gap-3">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-2"
            >
              <div 
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${color}20` }}
              >
                <Check className="w-3 h-3" style={{ color }} />
              </div>
              <span className="text-sm text-zinc-300">{feature}</span>
            </motion.div>
          ))}
        </div>
        
        {/* Stat badges */}
        <div className="relative z-10 mt-8 flex gap-4">
          {[
            { label: isInbound ? "Response" : "Connect Rate", value: isInbound ? "<200ms" : "45%" },
            { label: "Satisfaction", value: isInbound ? "98%" : "92%" },
          ].map((stat, i) => (
            <div 
              key={i}
              className="px-4 py-2 rounded-xl border"
              style={{ 
                backgroundColor: `${color}10`,
                borderColor: `${color}20`,
              }}
            >
              <p className="text-xs text-zinc-500 uppercase">{stat.label}</p>
              <p className="text-lg font-bold" style={{ color }}>{stat.value}</p>
            </div>
          ))}
        </div>
        
        {/* Active indicator */}
        {isActive && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1"
            style={{ backgroundColor: color }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}

// Center comparison node
function CenterNode() {
  return (
    <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
      <motion.div
        animate={{
          boxShadow: [
            "0 0 30px rgba(6,182,212,0.4)",
            "0 0 50px rgba(124,58,237,0.4)",
            "0 0 30px rgba(6,182,212,0.4)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 via-purple-500 to-blue-500 flex items-center justify-center"
      >
        <Zap className="w-10 h-10 text-white" />
      </motion.div>
      
      {/* Orbiting ring */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_10px_white]" />
      </motion.div>
      
      {/* Label */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 whitespace-nowrap">
        <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Lena Core</p>
      </div>
    </div>
  );
}

export function AgentComparison() {
  const [activeType, setActiveType] = useState<"inbound" | "outbound">("inbound");

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6"
          >
            <ArrowRight className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Call Direction</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Signal{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">
              Flow
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg max-w-2xl mx-auto"
          >
            Choose the right agent for your business needs or deploy both for maximum impact.
          </motion.p>
        </div>

        {/* Comparison Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Center node */}
          <CenterNode />
          
          {/* Inbound */}
          <AgentTypeCard 
            type="inbound" 
            isActive={activeType === "inbound"}
            onClick={() => setActiveType("inbound")}
          />
          
          {/* Outbound */}
          <AgentTypeCard 
            type="outbound" 
            isActive={activeType === "outbound"}
            onClick={() => setActiveType("outbound")}
          />
        </div>
      </div>
    </section>
  );
}
