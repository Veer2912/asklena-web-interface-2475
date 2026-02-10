import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Shield, Lock, Eye, Server, Key, FileCheck,
  CheckCircle2, Fingerprint, Database
} from "lucide-react";

// ============================================================================
// SHIELD MATRIX - Security certifications as a protective barrier visualization
// ============================================================================

const certifications = [
  { 
    name: "SOC 2 Type II", 
    description: "Security controls audited annually by independent third parties",
    icon: Shield,
    color: "#06b6d4",
  },
  { 
    name: "HIPAA", 
    description: "Full compliance with healthcare data protection requirements",
    icon: FileCheck,
    color: "#10b981",
  },
  { 
    name: "GDPR", 
    description: "Complete adherence to EU data privacy regulations",
    icon: Lock,
    color: "#a855f7",
  },
  { 
    name: "PCI DSS", 
    description: "Level 1 payment card industry security certification",
    icon: Key,
    color: "#f59e0b",
  },
  { 
    name: "CCPA", 
    description: "California Consumer Privacy Act fully compliant",
    icon: Eye,
    color: "#ec4899",
  },
  { 
    name: "ISO 27001", 
    description: "International information security management certified",
    icon: Server,
    color: "#6366f1",
  },
];

const securityStats = [
  { label: "Encryption", value: "AES-256", desc: "Military grade", icon: Lock },
  { label: "Data Centers", value: "ISO 27001", desc: "Certified", icon: Database },
  { label: "Uptime SLA", value: "99.99%", desc: "Guaranteed", icon: Server },
  { label: "Auth Methods", value: "SSO/MFA", desc: "Enterprise", icon: Fingerprint },
];

// Certification Card
function CertificationCard({ 
  cert, 
  index,
  isActive,
  onClick,
}: { 
  cert: typeof certifications[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = cert.icon;

  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      className={`relative p-4 rounded-2xl border text-left transition-all duration-300 ${
        isActive 
          ? 'bg-white/10 border-white/20' 
          : 'bg-white/5 border-white/10 hover:bg-white/8'
      }`}
      style={{
        boxShadow: isActive ? `0 0 30px ${cert.color}30` : 'none',
      }}
    >
      {/* Active indicator */}
      {isActive && (
        <motion.div
          layoutId="activeIndicator"
          className="absolute inset-0 rounded-2xl border-2"
          style={{ borderColor: cert.color }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}

      <div className="relative flex items-start gap-4">
        {/* Icon */}
        <div 
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${cert.color}20` }}
        >
          <Icon className="w-6 h-6" style={{ color: cert.color }} />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-bold text-white">{cert.name}</h3>
            <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
          </div>
          <p className="text-sm text-zinc-400 line-clamp-2">{cert.description}</p>
        </div>
      </div>
    </motion.button>
  );
}

// Central Shield Visualization
function ShieldVisualization({ activeCert }: { activeCert: typeof certifications[0] | null }) {
  return (
    <div className="relative w-full aspect-square max-w-[400px] mx-auto">
      {/* Animated rings */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border"
          style={{
            borderColor: activeCert ? `${activeCert.color}${30 - i * 5}` : `rgba(6, 182, 212, ${0.2 - i * 0.04})`,
            transform: `scale(${0.5 + i * 0.15})`,
          }}
          animate={{ 
            rotate: i % 2 === 0 ? 360 : -360,
            scale: [0.5 + i * 0.15, 0.52 + i * 0.15, 0.5 + i * 0.15],
          }}
          transition={{
            rotate: { duration: 30 + i * 10, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          {/* Dot on ring */}
          <div 
            className="absolute w-2 h-2 rounded-full"
            style={{ 
              top: '50%', 
              left: 0, 
              transform: 'translate(-50%, -50%)',
              backgroundColor: activeCert?.color || '#06b6d4',
              boxShadow: `0 0 10px ${activeCert?.color || '#06b6d4'}`,
            }}
          />
        </motion.div>
      ))}

      {/* Central shield */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Glow */}
        <motion.div
          className="absolute w-32 h-32 rounded-full"
          style={{ 
            background: `radial-gradient(circle, ${activeCert?.color || '#06b6d4'}40, transparent)`,
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Shield shape */}
        <motion.div
          className="relative w-24 h-24"
          animate={{
            boxShadow: [
              `0 0 30px ${activeCert?.color || '#06b6d4'}50`,
              `0 0 50px ${activeCert?.color || '#06b6d4'}70`,
              `0 0 30px ${activeCert?.color || '#06b6d4'}50`,
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${activeCert?.color || '#06b6d4'}, #8b5cf6)`,
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          />
          <div 
            className="absolute inset-2"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.2), transparent)',
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            {activeCert ? (
              <activeCert.icon className="w-10 h-10 text-white" />
            ) : (
              <Shield className="w-10 h-10 text-white" />
            )}
          </div>
        </motion.div>

        {/* Label */}
        <div className="absolute top-full mt-6 text-center">
          <motion.p 
            key={activeCert?.name || 'default'}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-bold"
            style={{ color: activeCert?.color || '#06b6d4' }}
          >
            {activeCert?.name || 'PROTECTED'}
          </motion.p>
          <p className="text-xs text-zinc-500 mt-1">Click a certification</p>
        </div>
      </div>

      {/* Floating certification icons around the shield */}
      {certifications.map((cert, i) => {
        const angle = (i * 60 - 90) * (Math.PI / 180);
        const radius = 140;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const Icon = cert.icon;
        const isActive = activeCert?.name === cert.name;

        return (
          <motion.div
            key={cert.name}
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: isActive ? -5 : 0,
            }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
          >
            <div 
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                isActive ? 'scale-110' : 'scale-100'
              }`}
              style={{ 
                backgroundColor: isActive ? `${cert.color}40` : `${cert.color}20`,
                boxShadow: isActive ? `0 0 20px ${cert.color}` : 'none',
              }}
            >
              <Icon className="w-5 h-5" style={{ color: cert.color }} />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export function SecurityTrust() {
  const [activeCert, setActiveCert] = useState<typeof certifications[0] | null>(null);

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-cyan-500/5 rounded-full blur-[200px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 mb-6"
          >
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-xs font-bold text-green-400 uppercase tracking-widest">Enterprise Security</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
          >
            Shield{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Matrix
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-400 max-w-2xl mx-auto"
          >
            Bank-level security with compliance certifications that protect your data at every layer.
          </motion.p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left - Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-3"
          >
            {securityStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/8 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-zinc-500 uppercase tracking-wider">{stat.label}</p>
                      <div className="flex items-baseline gap-2">
                        <p className="text-lg font-bold text-white">{stat.value}</p>
                        <span className="text-xs text-zinc-500">{stat.desc}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Center - Shield Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 py-8"
          >
            <ShieldVisualization activeCert={activeCert} />
          </motion.div>

          {/* Right - Certifications grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-3"
          >
            <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4">
              Certifications
            </h3>
            {certifications.map((cert, i) => (
              <CertificationCard
                key={cert.name}
                cert={cert}
                index={i}
                isActive={activeCert?.name === cert.name}
                onClick={() => setActiveCert(activeCert?.name === cert.name ? null : cert)}
              />
            ))}
          </motion.div>
        </div>

        {/* Bottom trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span>Pen-tested quarterly</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span>24/7 Security monitoring</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span>Bug bounty program</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span>Zero trust architecture</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
