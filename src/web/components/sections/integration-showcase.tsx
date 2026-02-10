import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, useRef, useEffect } from "react";
import { 
  Calendar, Video, Mail, Phone, ShoppingCart, 
  Database, MessageSquare, CreditCard, Zap,
  ArrowRight, Check, Sparkles, ExternalLink
} from "lucide-react";

// ============================================================================
// QUANTUM DATA FLOW CONSTELLATION - Never-before-seen integration visualization
// Features: 3D perspective data streams, floating integration orbs,
// dynamic connection beams, holographic detail panels
// ============================================================================

const integrations = [
  { 
    id: "calendly",
    name: "Calendly", 
    icon: Calendar, 
    category: "Scheduling", 
    color: "#006bff",
    gradient: "from-blue-500 to-cyan-400",
    description: "Seamless appointment booking with real-time calendar sync",
    features: ["Smart scheduling", "Timezone detection", "Auto-reminders"],
    stats: { connected: "2.4K", synced: "847K" },
  },
  { 
    id: "zoom",
    name: "Zoom", 
    icon: Video, 
    category: "Communication", 
    color: "#2d8cff",
    gradient: "from-blue-400 to-indigo-500",
    description: "Automatic meeting creation and intelligent transcription",
    features: ["1-click meetings", "Live transcription", "Recording sync"],
    stats: { connected: "3.1K", synced: "1.2M" },
  },
  { 
    id: "hubspot",
    name: "HubSpot", 
    icon: MessageSquare, 
    category: "CRM", 
    color: "#ff7a59",
    gradient: "from-orange-500 to-red-400",
    description: "Complete customer relationship management automation",
    features: ["Contact sync", "Deal tracking", "Activity logging"],
    stats: { connected: "1.8K", synced: "523K" },
  },
  { 
    id: "twilio",
    name: "Twilio", 
    icon: Phone, 
    category: "Voice", 
    color: "#f22f46",
    gradient: "from-red-500 to-pink-500",
    description: "Enterprise-grade voice and SMS communication",
    features: ["SIP trunking", "SMS alerts", "Call recording"],
    stats: { connected: "4.2K", synced: "2.8M" },
  },
  { 
    id: "shopify",
    name: "Shopify", 
    icon: ShoppingCart, 
    category: "E-Commerce", 
    color: "#96bf48",
    gradient: "from-green-400 to-emerald-500",
    description: "Real-time order and inventory management",
    features: ["Order lookup", "Tracking sync", "Returns handling"],
    stats: { connected: "2.9K", synced: "1.5M" },
  },
  { 
    id: "stripe",
    name: "Stripe", 
    icon: CreditCard, 
    category: "Payments", 
    color: "#635bff",
    gradient: "from-purple-500 to-indigo-500",
    description: "Secure payment processing and invoicing",
    features: ["Payment status", "Refund processing", "Invoice generation"],
    stats: { connected: "3.4K", synced: "4.1M" },
  },
  { 
    id: "gmail",
    name: "Gmail", 
    icon: Mail, 
    category: "Email", 
    color: "#ea4335",
    gradient: "from-red-400 to-orange-400",
    description: "Automated email communication and follow-ups",
    features: ["Auto-emails", "Smart templates", "Open tracking"],
    stats: { connected: "5.6K", synced: "8.3M" },
  },
  { 
    id: "salesforce",
    name: "Salesforce", 
    icon: Database, 
    category: "CRM", 
    color: "#00a1e0",
    gradient: "from-cyan-400 to-blue-500",
    description: "Enterprise CRM with deep data integration",
    features: ["Lead capture", "Opportunity sync", "Custom reports"],
    stats: { connected: "1.2K", synced: "945K" },
  },
];

// Data Stream Particle
function DataStreamParticle({ delay, path }: { delay: number; path: string }) {
  return (
    <motion.div
      className="absolute w-2 h-2 rounded-full bg-cyan-400"
      style={{
        offsetPath: `path("${path}")`,
        boxShadow: "0 0 10px rgba(6,182,212,0.8), 0 0 20px rgba(6,182,212,0.4)",
      }}
      animate={{
        offsetDistance: ["0%", "100%"],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

// Central Hub with pulsing energy
function CentralHub({ activeId }: { activeId: string | null }) {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
      {/* Outer energy rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
          style={{
            width: 80 + i * 30,
            height: 80 + i * 30,
            borderColor: activeId ? "rgba(6,182,212,0.4)" : "rgba(6,182,212,0.2)",
          }}
          animate={{
            rotate: i % 2 === 0 ? 360 : -360,
            scale: activeId ? [1, 1.05, 1] : 1,
          }}
          transition={{
            rotate: { duration: 15 + i * 5, repeat: Infinity, ease: "linear" },
            scale: { duration: 1.5, repeat: Infinity },
          }}
        />
      ))}
      
      {/* Core sphere */}
      <motion.div
        animate={{
          boxShadow: activeId
            ? [
                "0 0 40px rgba(6,182,212,0.6), 0 0 80px rgba(168,85,247,0.4)",
                "0 0 60px rgba(168,85,247,0.6), 0 0 120px rgba(6,182,212,0.4)",
                "0 0 40px rgba(6,182,212,0.6), 0 0 80px rgba(168,85,247,0.4)",
              ]
            : "0 0 30px rgba(6,182,212,0.4)",
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="relative w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="w-7 h-7 text-white" />
        </motion.div>
        
        {/* Glass overlay */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent" />
      </motion.div>
      
      {/* Label */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
        <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
          LENA CORE
        </span>
      </div>
    </div>
  );
}

// Integration Orb - floating 3D-style integration node
function IntegrationOrb({ 
  integration, 
  position, 
  index,
  isActive,
  onClick,
}: { 
  integration: typeof integrations[0];
  position: { x: number; y: number; z: number };
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = integration.icon;
  const scale = 1 - position.z * 0.003;
  
  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: `translate(-50%, -50%) scale(${scale})`,
        zIndex: Math.round(100 - position.z),
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1 - position.z * 0.005, scale }}
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
      whileHover={{ scale: scale * 1.15 }}
    >
      {/* Connection line to center */}
      <svg
        className="absolute pointer-events-none"
        style={{
          width: 400,
          height: 400,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          overflow: "visible",
        }}
      >
        <defs>
          <linearGradient id={`beam-${integration.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={integration.color} stopOpacity={isActive ? "0.8" : "0.2"} />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.line
          x1="0"
          y1="0"
          x2={-position.x + 50 + "%"}
          y2={-position.y + 50 + "%"}
          stroke={`url(#beam-${integration.id})`}
          strokeWidth={isActive ? 2 : 1}
          strokeDasharray={isActive ? "0" : "4,4"}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: index * 0.1 }}
        />
        
        {/* Traveling data packet */}
        {isActive && (
          <motion.circle
            r="4"
            fill={integration.color}
            filter="drop-shadow(0 0 6px currentColor)"
            animate={{
              cx: ["0%", `${(-position.x + 50) * 2}%`],
              cy: ["0%", `${(-position.y + 50) * 2}%`],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        )}
      </svg>
      
      {/* Pulse ring */}
      <motion.div
        className="absolute -inset-3 rounded-2xl"
        style={{ backgroundColor: integration.color }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: index * 0.2,
        }}
      />
      
      {/* Main orb */}
      <motion.div
        animate={{
          boxShadow: isActive
            ? `0 0 40px ${integration.color}80, 0 0 80px ${integration.color}40`
            : `0 0 20px ${integration.color}40`,
          borderColor: isActive ? integration.color : `${integration.color}60`,
        }}
        className="relative w-16 h-16 rounded-2xl border-2 backdrop-blur-md flex items-center justify-center transition-all"
        style={{
          background: `linear-gradient(135deg, ${integration.color}20, rgba(0,0,0,0.5))`,
        }}
      >
        <Icon className="w-7 h-7" style={{ color: integration.color }} />
        
        {/* Active indicator */}
        {isActive && (
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-400"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
        )}
      </motion.div>
      
      {/* Label */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 text-center">
        <p className="text-xs font-bold text-white whitespace-nowrap">{integration.name}</p>
        <p className="text-[10px] text-zinc-500 uppercase tracking-wider">{integration.category}</p>
      </div>
    </motion.div>
  );
}

// Detail Panel - slides in from right
function DetailPanel({ integration, onClose }: { integration: typeof integrations[0] | null; onClose: () => void }) {
  if (!integration) return null;
  
  const Icon = integration.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className="absolute right-0 top-0 bottom-0 w-full md:w-96 bg-zinc-950/90 backdrop-blur-xl border-l border-white/10 z-50 overflow-hidden"
    >
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at top right, ${integration.color}30, transparent 60%)`,
        }}
      />
      
      {/* Content */}
      <div className="relative p-8 h-full flex flex-col">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          ×
        </button>
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <motion.div
            animate={{
              boxShadow: `0 0 40px ${integration.color}50`,
            }}
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${integration.gradient} flex items-center justify-center`}
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>
          <div>
            <h3 className="text-2xl font-black text-white">{integration.name}</h3>
            <p className="text-xs text-zinc-500 uppercase tracking-widest">{integration.category}</p>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="text-2xl font-black" style={{ color: integration.color }}>
              {integration.stats.connected}
            </p>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Connected</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="text-2xl font-black text-cyan-400">
              {integration.stats.synced}
            </p>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Data Synced</p>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-zinc-400 mb-6">{integration.description}</p>
        
        {/* Features */}
        <div className="space-y-3 mb-8 flex-1">
          <p className="text-xs text-zinc-500 uppercase tracking-widest mb-4">Capabilities</p>
          {integration.features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="flex items-center gap-3 p-3 rounded-lg bg-white/5"
            >
              <div 
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${integration.color}30` }}
              >
                <Check className="w-3 h-3" style={{ color: integration.color }} />
              </div>
              <span className="text-sm text-zinc-300">{feature}</span>
            </motion.div>
          ))}
        </div>
        
        {/* Connection status */}
        <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-2.5 h-2.5 rounded-full bg-green-400"
            />
            <span className="text-sm font-bold text-green-400">Connected & Syncing</span>
          </div>
          <ExternalLink className="w-4 h-4 text-green-400" />
        </div>
      </div>
    </motion.div>
  );
}

// Floating particles background
function FloatingParticles() {
  const particles = useMemo(() =>
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 2,
      duration: 10 + Math.random() * 10,
      delay: Math.random() * 5,
    })), []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-cyan-500/20"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function IntegrationShowcase() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeIntegration = integrations.find(i => i.id === activeId) || null;
  
  // Generate 3D-style positions
  const positions = useMemo(() => {
    const centerX = 50;
    const centerY = 50;
    
    return integrations.map((_, i) => {
      const angle = (i / integrations.length) * Math.PI * 2 - Math.PI / 2;
      const radius = 32;
      const z = Math.sin(i * 0.5) * 30 + 30; // Depth variation
      
      return {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
        z,
      };
    });
  }, []);

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[150px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]" />
      </div>
      
      <FloatingParticles />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6"
          >
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">50+ Native Integrations</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Quantum{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Data Constellation
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-400 max-w-2xl mx-auto"
          >
            Your tools, connected. Data flows through Lena's neural pathways,
            syncing in real-time across your entire tech stack.
          </motion.p>
        </div>

        {/* Main visualization */}
        <div className="relative mx-auto" style={{ maxWidth: 900 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square"
          >
            {/* Central hub */}
            <CentralHub activeId={activeId} />
            
            {/* Integration orbs */}
            {integrations.map((integration, i) => (
              <IntegrationOrb
                key={integration.id}
                integration={integration}
                position={positions[i]}
                index={i}
                isActive={activeId === integration.id}
                onClick={() => setActiveId(activeId === integration.id ? null : integration.id)}
              />
            ))}
            
            {/* Detail panel */}
            <AnimatePresence>
              {activeIntegration && (
                <DetailPanel 
                  integration={activeIntegration} 
                  onClose={() => setActiveId(null)}
                />
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-zinc-500 mb-4">Can't find your tool?</p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-cyan-500/30 transition-all"
          >
            <span>Request Integration</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
