import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { useState } from "react";
import { 
  Mic2, 
  Zap, 
  Brain, 
  Smile, 
  ShieldCheck, 
  Plug2, 
  BarChart3, 
  Wand2, 
  Globe2, 
  Clock,
  ArrowUpRight
} from "lucide-react";

const features = [
  {
    title: "Natural Conversations",
    description: "Human-grade voice synthesis that handles nuances, accents, and complex sentence structures in 40+ languages.",
    icon: <Mic2 className="w-8 h-8" />,
    stat: "40+ Languages",
    color: "from-cyan-400 to-cyan-600",
    accent: "cyan"
  },
  {
    title: "Lightning Fast Response",
    description: "Proprietary streaming architecture ensures near-instant responses, making interactions feel completely natural.",
    icon: <Zap className="w-8 h-8" />,
    stat: "<200ms Latency",
    color: "from-blue-400 to-blue-600",
    accent: "blue"
  },
  {
    title: "Contextual Intelligence",
    description: "Sophisticated long-term memory allows Lena to remember user preferences and past details across multiple calls.",
    icon: <Brain className="w-8 h-8" />,
    stat: "Full Context",
    color: "from-purple-400 to-purple-600",
    accent: "purple"
  },
  {
    title: "Emotion Detection",
    description: "Real-time sentiment analysis detects customer frustration or satisfaction, allowing for adaptive tone response.",
    icon: <Smile className="w-8 h-8" />,
    stat: "98% Accuracy",
    color: "from-pink-400 to-pink-600",
    accent: "pink"
  },
  {
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance with global standards including HIPAA, GDPR, and SOC 2 Type II.",
    icon: <ShieldCheck className="w-8 h-8" />,
    stat: "SOC 2 Type II",
    color: "from-emerald-400 to-emerald-600",
    accent: "emerald"
  },
  {
    title: "Seamless Integrations",
    description: "Connect with your existing stack via pre-built integrations for CRM, Helpdesk, and Scheduling platforms.",
    icon: <Plug2 className="w-8 h-8" />,
    stat: "50+ Tools",
    color: "from-indigo-400 to-indigo-600",
    accent: "indigo"
  },
  {
    title: "Real-time Analytics",
    description: "Deep insights into every conversation with automatic transcription, summarization, and trend detection.",
    icon: <BarChart3 className="w-8 h-8" />,
    stat: "Live Dashboard",
    color: "from-cyan-400 to-cyan-600",
    accent: "cyan"
  },
  {
    title: "Custom Training",
    description: "Train Lena on your specific knowledge base, brand voice, and industry jargon in hours, not weeks.",
    icon: <Wand2 className="w-8 h-8" />,
    stat: "Self-Learning",
    color: "from-orange-400 to-orange-600",
    accent: "orange"
  },
  {
    title: "Global Reach",
    description: "Deploy voice agents globally with localized phone numbers and cultural awareness built-in.",
    icon: <Globe2 className="w-8 h-8" />,
    stat: "190+ Countries",
    color: "from-blue-400 to-blue-600",
    accent: "blue"
  },
  {
    title: "24/7 Availability",
    description: "Never miss a call. Lena works around the clock, handling peak volumes without any degradation in quality.",
    icon: <Clock className="w-8 h-8" />,
    stat: "99.99% Uptime",
    color: "from-purple-400 to-purple-600",
    accent: "purple"
  }
];

// Premium feature card with 3D effects and premium interactions
function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovered) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="group relative h-full perspective"
    >
      {/* Premium outer border glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(6,182,212,0.2), transparent)`,
        }}
      />

      {/* Card container with gradient background */}
      <div className="relative h-full p-8 rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-500">
        
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br from-white/[0.03] to-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        {/* Animated accent bar - appears on hover */}
        <motion.div
          className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${feature.color}`}
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.5 }}
        />

        {/* Icon container with premium styling */}
        <motion.div
          className={`mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} border border-white/20 flex items-center justify-center text-white shadow-[0_8px_32px_rgba(6,182,212,0.2)] group-hover:shadow-[0_12px_48px_rgba(6,182,212,0.4)]`}
          whileHover={{ scale: 1.12, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {feature.icon}
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
            {feature.title}
          </h3>

          <p className="text-zinc-400 leading-relaxed mb-8 text-base">
            {feature.description}
          </p>

          {/* Stats row with premium styling */}
          <div className="flex items-center justify-between pt-6 border-t border-white/5 group-hover:border-white/10 transition-all">
            <motion.span
              className="text-xs font-bold tracking-widest uppercase text-zinc-500 group-hover:text-zinc-300 transition-colors"
              whileHover={{ letterSpacing: "0.2em" }}
            >
              {feature.stat}
            </motion.span>

            {/* Animated indicator */}
            <motion.div
              className="flex items-center gap-2"
              animate={isHovered ? { x: [0, 4, 0], opacity: [0.5, 1, 0.5] } : { opacity: 0 }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color} shadow-lg`} />
              <ArrowUpRight className="w-3 h-3 text-cyan-400" />
            </motion.div>
          </div>
        </div>

        {/* Corner accent - appears on hover */}
        <motion.div
          className="absolute bottom-0 right-0 w-20 h-20 rounded-tl-3xl bg-gradient-to-tl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      </div>

      {/* Shine effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 pointer-events-none"
        initial={{ background: "linear-gradient(135deg, transparent, rgba(255,255,255,0.1), transparent)" }}
        whileHover={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 0.5 }}
        style={{ backgroundSize: "200% 200%" }}
      />
    </motion.div>
  );
}

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-[#0a0e27] text-white selection:bg-cyan-500/30 overflow-x-hidden">
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-purple-500/10 blur-[120px]"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/50 text-sm font-semibold text-cyan-400 mb-6">
              ✨ ADVANCED CAPABILITIES
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-[1.2]"
          >
            Enterprise-Grade Features{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Reimagined for Voice AI
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed"
          >
            Explore the technology that powers natural conversations at enterprise scale. From lightning-fast response times to military-grade security, Lena has everything you need.
          </motion.p>
        </div>
      </section>

      {/* Premium Features Grid */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience Next-Gen Voice AI?
          </h2>
          <p className="text-xl text-zinc-400 mb-8">
            Start your free trial today and see how Lena can transform your customer experience.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold text-lg shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_60px_rgba(6,182,212,0.6)] transition-all duration-300"
          >
            Start Free Trial
          </motion.button>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}

