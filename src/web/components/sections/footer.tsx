import { motion } from "framer-motion";
import { useMemo } from "react";
import { 
  Twitter, Linkedin, Github, Mail,
  ArrowUpRight
} from "lucide-react";

// ============================================================================
// NEURAL NETWORK FOOTER - Footer with animated neural connection background
// ============================================================================

// Neural Network Background
function NeuralBackground() {
  const nodes = useMemo(() => 
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: 5 + (i % 5) * 23 + Math.random() * 5,
      y: 10 + Math.floor(i / 5) * 25 + Math.random() * 5,
    })), []
  );

  const connections = useMemo(() => {
    const result: { from: number; to: number }[] = [];
    nodes.forEach((node, i) => {
      // Connect to nearby nodes
      nodes.forEach((other, j) => {
        if (i < j) {
          const dist = Math.sqrt(
            Math.pow(node.x - other.x, 2) + Math.pow(node.y - other.y, 2)
          );
          if (dist < 30) {
            result.push({ from: i, to: j });
          }
        }
      });
    });
    return result;
  }, [nodes]);

  return (
    <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      
      {/* Connections */}
      {connections.map((conn, i) => (
        <motion.line
          key={i}
          x1={`${nodes[conn.from].x}%`}
          y1={`${nodes[conn.from].y}%`}
          x2={`${nodes[conn.to].x}%`}
          y2={`${nodes[conn.to].y}%`}
          stroke="url(#neural-gradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0.1, 0.3, 0.1] }}
          transition={{ 
            pathLength: { duration: 2, delay: i * 0.05 },
            opacity: { duration: 3, repeat: Infinity, delay: i * 0.1 }
          }}
        />
      ))}
      
      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.circle
          key={i}
          cx={`${node.x}%`}
          cy={`${node.y}%`}
          r="3"
          fill="url(#neural-gradient)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [1, 1.5, 1], 
            opacity: [0.3, 0.6, 0.3] 
          }}
          transition={{ 
            duration: 2 + Math.random() * 2, 
            repeat: Infinity,
            delay: i * 0.1 
          }}
        />
      ))}
    </svg>
  );
}

// Animated Logo
function FooterLogo() {
  return (
    <a href="/" className="inline-block">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-3"
      >
        {/* Logo mark */}
        <div className="relative w-10 h-10">
          <motion.div
            className="absolute inset-0 rounded-xl border border-cyan-500/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-1 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600" />
          <motion.div
            className="absolute inset-1 rounded-lg bg-cyan-400"
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        
        <div>
          <span className="text-2xl font-bold text-white tracking-tight block">
            ASKLENA<span className="text-cyan-400">.</span>
          </span>
          <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
            Voice AI Platform
          </span>
        </div>
      </motion.div>
    </a>
  );
}

// Social Link
function SocialLink({ href, icon: Icon, label }: { href: string; icon: typeof Twitter; label: string }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-colors"
      aria-label={label}
    >
      <Icon className="w-5 h-5" />
    </motion.a>
  );
}

// Footer Link
function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      whileHover={{ x: 4 }}
      className="text-zinc-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-1 group"
    >
      {children}
      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.a>
  );
}

const footerLinks = {
  Product: [
    { name: "Features", href: "/features" },
    { name: "Solutions", href: "/solutions" },
    { name: "Pricing", href: "/pricing" },
    { name: "Integrations", href: "#" },
    { name: "API Docs", href: "#" },
  ],
  Company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press Kit", href: "#" },
    { name: "Contact", href: "#" },
  ],
  Legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Security", href: "#" },
    { name: "Compliance", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-zinc-950 border-t border-white/5 overflow-hidden">
      {/* Neural background */}
      <NeuralBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-6">
            <FooterLogo />
            
            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
              Enterprise Voice AI that handles customer calls with human-like intelligence. 
              40+ languages. Sub-200ms latency. 99.99% uptime.
            </p>
            
            {/* Social links */}
            <div className="flex gap-3">
              <SocialLink href="#" icon={Twitter} label="Twitter" />
              <SocialLink href="#" icon={Linkedin} label="LinkedIn" />
              <SocialLink href="#" icon={Github} label="GitHub" />
              <SocialLink href="#" icon={Mail} label="Email" />
            </div>
            
            {/* Stats */}
            <div className="flex gap-6 pt-4">
              {[
                { value: "10M+", label: "Conversations" },
                { value: "147", label: "Agents" },
                { value: "40+", label: "Languages" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-xl font-bold text-cyan-400">{stat.value}</p>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <FooterLink href={link.href}>{link.name}</FooterLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/5"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">
              © {new Date().getFullYear()} Asklena AI. All rights reserved.
            </p>
            
            {/* Certifications */}
            <div className="flex items-center gap-4">
              {["SOC 2", "HIPAA", "GDPR", "PCI DSS"].map((cert, i) => (
                <motion.span
                  key={cert}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="px-2 py-1 rounded text-[10px] font-bold text-zinc-500 uppercase tracking-widest bg-white/5 border border-white/5"
                >
                  {cert}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
