import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { 
  Zap, Brain, Globe2, Shield, Mic2, BarChart3, 
  Sparkles, Clock, Plug2 
} from "lucide-react";

// ============================================================================
// ORBITING FEATURE CONSTELLATION - Features orbit around central voice core
// ============================================================================

const features = [
  {
    icon: Zap,
    title: "Lightning Response",
    description: "Sub-200ms latency for natural conversations",
    stat: "<200ms",
    color: "#06b6d4",
    orbitRadius: 180,
    speed: 20,
  },
  {
    icon: Brain,
    title: "Context Memory",
    description: "Remembers conversation history across sessions",
    stat: "∞ Context",
    color: "#a855f7",
    orbitRadius: 180,
    speed: 25,
  },
  {
    icon: Globe2,
    title: "40+ Languages",
    description: "Natural speech in multiple languages and accents",
    stat: "40+",
    color: "#ec4899",
    orbitRadius: 180,
    speed: 22,
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2, HIPAA, GDPR compliant infrastructure",
    stat: "SOC 2",
    color: "#10b981",
    orbitRadius: 260,
    speed: 30,
  },
  {
    icon: Mic2,
    title: "Voice Synthesis",
    description: "Human-grade voice that handles nuances",
    stat: "99.2%",
    color: "#f59e0b",
    orbitRadius: 260,
    speed: 35,
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Live dashboards with conversation insights",
    stat: "Live",
    color: "#6366f1",
    orbitRadius: 260,
    speed: 28,
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Never miss a call with always-on agents",
    stat: "99.9%",
    color: "#ef4444",
    orbitRadius: 340,
    speed: 40,
  },
  {
    icon: Plug2,
    title: "Easy Integration",
    description: "Connect with 50+ tools in minutes",
    stat: "50+",
    color: "#14b8a6",
    orbitRadius: 340,
    speed: 45,
  },
];

// Central Voice Core
function VoiceCore({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
      {/* Outer glow rings */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/20"
          style={{
            width: 80 + i * 30,
            height: 80 + i * 30,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
      
      {/* Core orb */}
      <motion.div
        animate={{
          scale: isHovered ? 1.1 : 1,
          boxShadow: isHovered 
            ? "0 0 60px rgba(6,182,212,0.6), 0 0 120px rgba(124,58,237,0.3)"
            : "0 0 40px rgba(6,182,212,0.4), 0 0 80px rgba(124,58,237,0.2)",
        }}
        className="relative w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500"
      >
        {/* Inner glow */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
        
        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        
        {/* Rotating ring */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_15px_white]" />
        </motion.div>
      </motion.div>
      
      {/* Label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 text-center whitespace-nowrap"
      >
        <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Voice Core</p>
      </motion.div>
    </div>
  );
}

// Orbit Ring
function OrbitRing({ radius, color }: { radius: number; color: string }) {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border pointer-events-none"
      style={{
        width: radius * 2,
        height: radius * 2,
        borderColor: `${color}15`,
        borderStyle: "dashed",
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    />
  );
}

// Orbiting Feature Node
function FeatureNode({ 
  feature, 
  index, 
  totalInOrbit,
  onSelect,
  isSelected,
}: { 
  feature: typeof features[0]; 
  index: number;
  totalInOrbit: number;
  onSelect: () => void;
  isSelected: boolean;
}) {
  const Icon = feature.icon;
  const angleOffset = (index / totalInOrbit) * 360;
  
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 cursor-pointer z-10"
      style={{
        width: feature.orbitRadius * 2,
        height: feature.orbitRadius * 2,
        marginLeft: -feature.orbitRadius,
        marginTop: -feature.orbitRadius,
      }}
      animate={{ rotate: 360 }}
      transition={{
        duration: feature.speed,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <motion.div
        className="absolute"
        style={{
          top: "50%",
          left: "50%",
          transform: `rotate(${angleOffset}deg) translateX(${feature.orbitRadius}px) rotate(-${angleOffset}deg)`,
        }}
        onClick={onSelect}
        whileHover={{ scale: 1.2 }}
      >
        {/* Counter-rotate to keep upright */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: feature.speed,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            animate={{
              scale: isSelected ? 1.2 : 1,
              boxShadow: isSelected 
                ? `0 0 30px ${feature.color}80`
                : `0 0 15px ${feature.color}40`,
            }}
            className="relative -translate-x-1/2 -translate-y-1/2"
          >
            {/* Node background */}
            <div 
              className="w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-sm border transition-all duration-300"
              style={{
                backgroundColor: `${feature.color}15`,
                borderColor: isSelected ? feature.color : `${feature.color}30`,
              }}
            >
              <Icon className="w-6 h-6" style={{ color: feature.color }} />
            </div>
            
            {/* Connection line to center */}
            {isSelected && (
              <motion.div
                className="absolute top-1/2 left-1/2 h-px origin-left"
                style={{
                  width: feature.orbitRadius - 50,
                  backgroundColor: feature.color,
                  transform: `rotate(${180 + angleOffset}deg)`,
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 0.5 }}
              />
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// Feature Detail Card
function FeatureDetail({ feature }: { feature: typeof features[0] | null }) {
  if (!feature) {
    return (
      <div className="text-center py-8">
        <p className="text-zinc-500 text-sm">Click a feature to learn more</p>
      </div>
    );
  }

  const Icon = feature.icon;

  return (
    <motion.div
      key={feature.title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      <div className="flex items-start gap-4 mb-4">
        <div 
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${feature.color}20` }}
        >
          <Icon className="w-6 h-6" style={{ color: feature.color }} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-1">{feature.title}</h3>
          <p className="text-zinc-400 text-sm">{feature.description}</p>
        </div>
      </div>
      
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Performance</span>
        <span 
          className="text-2xl font-black"
          style={{ color: feature.color }}
        >
          {feature.stat}
        </span>
      </div>
    </motion.div>
  );
}

export function KeyFeatures() {
  const [selectedFeature, setSelectedFeature] = useState<typeof features[0] | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Group features by orbit radius
  const innerOrbit = features.filter(f => f.orbitRadius === 180);
  const middleOrbit = features.filter(f => f.orbitRadius === 260);
  const outerOrbit = features.filter(f => f.orbitRadius === 340);

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Core Features</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Feature{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Constellation
            </span>
          </motion.h2>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <h3 className="text-lg font-bold text-white mb-4">Enterprise Ready</h3>
              <p className="text-sm text-zinc-400 mb-6">
                Every feature is built for scale. Handle 10,000+ concurrent calls with 99.99% uptime.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Uptime", value: "99.99%" },
                  { label: "Concurrent", value: "10K+" },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-3 rounded-xl bg-white/5">
                    <p className="text-2xl font-black text-cyan-400">{stat.value}</p>
                    <p className="text-xs text-zinc-500 uppercase">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <FeatureDetail feature={selectedFeature} />
          </motion.div>

          {/* Constellation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[600px] lg:col-span-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Orbit rings */}
            <OrbitRing radius={180} color="#06b6d4" />
            <OrbitRing radius={260} color="#a855f7" />
            <OrbitRing radius={340} color="#ec4899" />
            
            {/* Central core */}
            <VoiceCore isHovered={isHovered} />
            
            {/* Orbiting features */}
            {innerOrbit.map((feature, i) => (
              <FeatureNode
                key={feature.title}
                feature={feature}
                index={i}
                totalInOrbit={innerOrbit.length}
                onSelect={() => setSelectedFeature(feature)}
                isSelected={selectedFeature?.title === feature.title}
              />
            ))}
            {middleOrbit.map((feature, i) => (
              <FeatureNode
                key={feature.title}
                feature={feature}
                index={i}
                totalInOrbit={middleOrbit.length}
                onSelect={() => setSelectedFeature(feature)}
                isSelected={selectedFeature?.title === feature.title}
              />
            ))}
            {outerOrbit.map((feature, i) => (
              <FeatureNode
                key={feature.title}
                feature={feature}
                index={i}
                totalInOrbit={outerOrbit.length}
                onSelect={() => setSelectedFeature(feature)}
                isSelected={selectedFeature?.title === feature.title}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
