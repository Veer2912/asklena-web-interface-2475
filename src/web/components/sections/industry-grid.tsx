import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  HeartPulse, Truck, Landmark, GraduationCap, Users2, ShoppingBag,
  ArrowRight, CheckCircle2, TrendingUp
} from "lucide-react";

// ============================================================================
// HEXAGONAL NEURAL MAP - Industries displayed as interconnected hex nodes
// ============================================================================

const industries = [
  {
    id: "healthcare",
    name: "Healthcare",
    icon: HeartPulse,
    color: "#06b6d4",
    description: "HIPAA-compliant voice agents for patient support",
    stats: { calls: "500K+", satisfaction: "96%", reduction: "45%" },
    useCases: ["Appointment Scheduling", "Prescription Refills", "Insurance Verification"],
    position: { row: 0, col: 1 },
  },
  {
    id: "logistics",
    name: "Logistics",
    icon: Truck,
    color: "#3b82f6",
    description: "Real-time tracking and delivery coordination",
    stats: { calls: "2M+", satisfaction: "94%", reduction: "60%" },
    useCases: ["Shipment Tracking", "Delivery Updates", "Route Optimization"],
    position: { row: 0, col: 2 },
  },
  {
    id: "finance",
    name: "Finance",
    icon: Landmark,
    color: "#a855f7",
    description: "Secure transactions and fraud prevention",
    stats: { calls: "1.2M+", satisfaction: "98%", reduction: "55%" },
    useCases: ["Account Inquiries", "Fraud Alerts", "Payment Processing"],
    position: { row: 1, col: 0 },
  },
  {
    id: "education",
    name: "Education",
    icon: GraduationCap,
    color: "#10b981",
    description: "Student support and administrative automation",
    stats: { calls: "300K+", satisfaction: "92%", reduction: "50%" },
    useCases: ["Enrollment Support", "Course Registration", "Financial Aid FAQ"],
    position: { row: 1, col: 1 },
  },
  {
    id: "hr",
    name: "HR & Recruitment",
    icon: Users2,
    color: "#ec4899",
    description: "Streamlined hiring and employee support",
    stats: { calls: "800K+", satisfaction: "95%", reduction: "70%" },
    useCases: ["Interview Scheduling", "Onboarding", "Benefits Inquiries"],
    position: { row: 1, col: 2 },
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    icon: ShoppingBag,
    color: "#f59e0b",
    description: "Order support and sales assistance",
    stats: { calls: "3M+", satisfaction: "93%", reduction: "40%" },
    useCases: ["Order Tracking", "Returns Processing", "Product Recommendations"],
    position: { row: 2, col: 1 },
  },
];

// Hexagon SVG Component
function Hexagon({ 
  size = 140, 
  color, 
  isActive,
  children 
}: { 
  size?: number; 
  color: string; 
  isActive: boolean;
  children: React.ReactNode;
}) {
  const points = Array.from({ length: 6 }, (_, i) => {
    const angle = (i * 60 - 30) * (Math.PI / 180);
    return `${size/2 + (size/2 - 4) * Math.cos(angle)},${size/2 + (size/2 - 4) * Math.sin(angle)}`;
  }).join(" ");

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="absolute inset-0">
        <defs>
          <linearGradient id={`hex-gradient-${color}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity={isActive ? 0.3 : 0.1} />
            <stop offset="100%" stopColor={color} stopOpacity={isActive ? 0.1 : 0.02} />
          </linearGradient>
          <filter id="hex-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Background fill */}
        <polygon
          points={points}
          fill={`url(#hex-gradient-${color})`}
        />
        
        {/* Border */}
        <motion.polygon
          points={points}
          fill="none"
          stroke={color}
          strokeWidth={isActive ? 2 : 1}
          strokeOpacity={isActive ? 0.8 : 0.3}
          filter={isActive ? "url(#hex-glow)" : undefined}
          animate={{
            strokeOpacity: isActive ? [0.6, 1, 0.6] : 0.3,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </svg>
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

// Connection lines between hexagons
function ConnectionLines({ activeId }: { activeId: string | null }) {
  const connections = [
    { from: "healthcare", to: "logistics" },
    { from: "healthcare", to: "education" },
    { from: "logistics", to: "hr" },
    { from: "finance", to: "education" },
    { from: "education", to: "hr" },
    { from: "education", to: "ecommerce" },
    { from: "hr", to: "ecommerce" },
  ];

  return (
    <svg className="absolute inset-0 pointer-events-none" style={{ overflow: "visible" }}>
      <defs>
        <linearGradient id="connection-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#a855f7" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ec4899" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      
      {connections.map((conn, i) => {
        const fromIndustry = industries.find(ind => ind.id === conn.from);
        const toIndustry = industries.find(ind => ind.id === conn.to);
        if (!fromIndustry || !toIndustry) return null;
        
        const isActive = activeId === conn.from || activeId === conn.to;
        
        // Calculate approximate positions based on grid
        const getX = (col: number) => 80 + col * 160;
        const getY = (row: number, col: number) => 80 + row * 140 + (col % 2 === 1 ? 0 : 70);
        
        const x1 = getX(fromIndustry.position.col);
        const y1 = getY(fromIndustry.position.row, fromIndustry.position.col);
        const x2 = getX(toIndustry.position.col);
        const y2 = getY(toIndustry.position.row, toIndustry.position.col);
        
        return (
          <motion.line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="url(#connection-gradient)"
            strokeWidth={isActive ? 2 : 1}
            strokeOpacity={isActive ? 0.6 : 0.2}
            strokeDasharray={isActive ? "none" : "4 4"}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: i * 0.1 }}
          />
        );
      })}
    </svg>
  );
}

// Industry Hex Node
function IndustryHex({ 
  industry, 
  isActive, 
  onClick 
}: { 
  industry: typeof industries[0]; 
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = industry.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="cursor-pointer relative group"
    >
      <Hexagon color={industry.color} isActive={isActive}>
        <div className="text-center">
          <motion.div
            animate={{
              scale: isActive ? 1.1 : 1,
            }}
            className="mb-2"
          >
            <Icon 
              className="w-8 h-8 mx-auto" 
              style={{ color: industry.color }}
            />
          </motion.div>
          <p className="text-xs font-bold text-white/80 group-hover:text-white transition-colors">
            {industry.name}
          </p>
        </div>
      </Hexagon>
      
      {/* Pulse effect when active */}
      {isActive && (
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ backgroundColor: industry.color }}
          initial={{ opacity: 0.3, scale: 1 }}
          animate={{ opacity: 0, scale: 1.5 }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      )}
    </motion.div>
  );
}

// Industry Detail Panel
function IndustryDetail({ industry }: { industry: typeof industries[0] | null }) {
  if (!industry) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/5 flex items-center justify-center">
            <TrendingUp className="w-8 h-8 text-zinc-600" />
          </div>
          <p className="text-zinc-500">Select an industry to view details</p>
        </div>
      </div>
    );
  }

  const Icon = industry.icon;

  return (
    <motion.div
      key={industry.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="h-full flex flex-col"
    >
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-4 mb-4">
          <div 
            className="w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{ backgroundColor: `${industry.color}20` }}
          >
            <Icon className="w-7 h-7" style={{ color: industry.color }} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">{industry.name}</h3>
            <p className="text-sm text-zinc-400">{industry.description}</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: "Calls Handled", value: industry.stats.calls },
          { label: "Satisfaction", value: industry.stats.satisfaction },
          { label: "Cost Reduction", value: industry.stats.reduction },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-4 rounded-xl bg-white/5 border border-white/10 text-center"
          >
            <p className="text-xl font-black" style={{ color: industry.color }}>
              {stat.value}
            </p>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Use Cases */}
      <div className="flex-1">
        <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4">
          Key Use Cases
        </h4>
        <div className="space-y-3">
          {industry.useCases.map((useCase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5"
            >
              <CheckCircle2 className="w-5 h-5" style={{ color: industry.color }} />
              <span className="text-sm text-zinc-300">{useCase}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-6 w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
        style={{ 
          backgroundColor: `${industry.color}20`,
          color: industry.color,
          borderColor: `${industry.color}30`,
          borderWidth: 1,
        }}
      >
        Explore {industry.name}
        <ArrowRight className="w-5 h-5" />
      </motion.button>
    </motion.div>
  );
}

export function IndustryGrid() {
  const [activeIndustry, setActiveIndustry] = useState<typeof industries[0] | null>(null);

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[200px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[200px]" />
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
            <TrendingUp className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">Industry Solutions</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Neural Industry{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Network
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-400 max-w-2xl mx-auto"
          >
            Lena adapts to any industry with specialized voice agents trained on domain-specific knowledge.
          </motion.p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hexagonal Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px]"
          >
            <ConnectionLines activeId={activeIndustry?.id || null} />
            
            {/* Hex grid - honeycomb layout */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {/* Row 1 */}
              <div className="flex gap-6 mb-[-30px]">
                {industries.filter(i => i.position.row === 0).map((industry) => (
                  <IndustryHex
                    key={industry.id}
                    industry={industry}
                    isActive={activeIndustry?.id === industry.id}
                    onClick={() => setActiveIndustry(industry)}
                  />
                ))}
              </div>
              
              {/* Row 2 */}
              <div className="flex gap-6 mb-[-30px]">
                {industries.filter(i => i.position.row === 1).map((industry) => (
                  <IndustryHex
                    key={industry.id}
                    industry={industry}
                    isActive={activeIndustry?.id === industry.id}
                    onClick={() => setActiveIndustry(industry)}
                  />
                ))}
              </div>
              
              {/* Row 3 */}
              <div className="flex gap-6">
                {industries.filter(i => i.position.row === 2).map((industry) => (
                  <IndustryHex
                    key={industry.id}
                    industry={industry}
                    isActive={activeIndustry?.id === industry.id}
                    onClick={() => setActiveIndustry(industry)}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Detail Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="min-h-[500px] p-8 rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-xl"
          >
            <AnimatePresence mode="wait">
              <IndustryDetail industry={activeIndustry} />
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
