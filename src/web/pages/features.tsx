import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
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
  Smartphone,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import { useState, useRef } from "react";
import { TypewriterText } from "@/components/ui/typewriter-text";
import { SectionHeader } from "@/components/ui/section-header";

const features = [
  {
    title: "Natural Conversations",
    description: "Human-grade voice synthesis that handles nuances, accents, and complex sentence structures in 40+ languages.",
    detailed: "Our neural engine doesn't just speak; it understands emotional context and responds with appropriate prosody, making interactions indistinguishable from human agents.",
    icon: <Mic2 className="w-10 h-10 text-cyan-400" />,
    metrics: "40+ Languages",
    visual: "Waveform",
    color: "cyan"
  },
  {
    title: "Lightning Fast Response",
    description: "Proprietary streaming architecture ensures near-instant responses, making interactions feel completely natural.",
    detailed: "With sub-200ms latency, Lena eliminates the awkward silence found in traditional voice AI, enabling true real-time interruption and fluid dialogue.",
    icon: <Zap className="w-10 h-10 text-yellow-400" />,
    metrics: "<200ms Latency",
    visual: "Speedometer",
    color: "yellow"
  },
  {
    title: "Contextual Intelligence",
    description: "Sophisticated long-term memory allows Lena to remember user preferences and past details across multiple calls.",
    detailed: "Lena builds a comprehensive profile of every user she interacts with, remembering their history, preferences, and even specific details mentioned weeks ago.",
    icon: <Brain className="w-10 h-10 text-purple-400" />,
    metrics: "Infinite Context",
    visual: "MindMap",
    color: "purple"
  },
  {
    title: "Emotion Detection",
    description: "Real-time sentiment analysis detects customer frustration or satisfaction, allowing for adaptive tone response.",
    detailed: "By analyzing pitch, pace, and word choice, Lena can detect subtle shifts in mood and adjust her approach to de-escalate frustration or celebrate success.",
    icon: <Smile className="w-10 h-10 text-pink-400" />,
    metrics: "98% Accuracy",
    visual: "Sentiment",
    color: "pink"
  },
  {
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance with global standards including HIPAA, GDPR, and SOC 2 Type II.",
    detailed: "We prioritize your data sovereignty. Every conversation is encrypted in transit and at rest, with full audit trails and compliance built into the core.",
    icon: <ShieldCheck className="w-10 h-10 text-green-400" />,
    metrics: "SOC 2 Type II",
    visual: "Security",
    color: "green"
  },
  {
    title: "Seamless Integrations",
    description: "Connect with your existing stack via pre-built integrations for CRM, Helpdesk, and Scheduling platforms.",
    detailed: "Deploy Lena into your existing workflow in minutes. She natively connects with Calendly, HubSpot, Salesforce, and custom REST APIs.",
    icon: <Plug2 className="w-10 h-10 text-blue-400" />,
    metrics: "50+ Connectors",
    visual: "Connect",
    color: "blue"
  },
  {
    title: "Real-time Analytics",
    description: "Deep insights into every conversation with automatic transcription, summarization, and trend detection.",
    detailed: "Turn voice data into actionable intelligence. Our dashboard provides real-time sentiment tracking, conversion rates, and automated call summaries.",
    icon: <BarChart3 className="w-10 h-10 text-indigo-400" />,
    metrics: "Live Dashboard",
    visual: "Analytics",
    color: "indigo"
  },
  {
    title: "Custom Training",
    description: "Train Lena on your specific knowledge base, brand voice, and industry jargon in hours, not weeks.",
    detailed: "Simply upload your documentation or website, and Lena will instantly learn your products, services, and brand persona with perfect accuracy.",
    icon: <Wand2 className="w-10 h-10 text-orange-400" />,
    metrics: "Self-Learning",
    visual: "Training",
    color: "orange"
  }
];

export default function FeaturesPage() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30 overflow-x-hidden">
      <Navbar />
      
      {/* Dynamic Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="fixed inset-0 z-0 pointer-events-none opacity-40"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(6,182,212,0.15),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(192,38,211,0.15),transparent_50%)]" />
      </motion.div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionHeader 
            title="The Future of Voice" 
            subtitle="Engineered for Performance"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-zinc-400 text-xl max-w-3xl mx-auto font-light leading-relaxed mb-12"
          >
            We've combined breakthrough neural synthesis with ultra-low latency architecture 
            to create a voice AI that doesn't just respond—it connects.
          </motion.p>
        </div>
      </section>

      {/* Organic Features Grid */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="The Leap Forward" 
            subtitle="Benchmark Comparison"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ComparisonCard 
              type="before"
              title="Traditional IVR & Chatbots"
              items={[
                "2-3 second latency gap",
                "Robotic, monotone delivery",
                "Easily confused by context",
                "Expensive human handover",
                "Limited language support"
              ]}
            />
            <ComparisonCard 
              type="after"
              title="The Asklena Standard"
              items={[
                "<200ms instant response",
                "Perfect human prosody",
                "Infinite contextual memory",
                "Fully autonomous operation",
                "40+ languages natively"
              ]}
              highlight
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 relative z-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
            viewport={{ once: true }}
            className="p-16 rounded-[4rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 backdrop-blur-3xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-magenta-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">Ready to evolve?</h2>
            <p className="text-zinc-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Experience the power of Lena today. Start your 14-day free trial and see why leading enterprises choose Asklena.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="h-16 px-12 bg-white text-black font-black text-lg rounded-2xl hover:bg-cyan-50 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                Start Free Trial
              </button>
              <button className="h-16 px-12 bg-white/5 border border-white/20 text-white font-black text-lg rounded-2xl hover:bg-white/10 transition-all active:scale-95">
                Book a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function FeatureCard({ feature, index }: { feature: typeof features[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Organic grid logic: different span values for different indexes
  const colSpan = (index === 0 || index === 3 || index === 4 || index === 7) ? "lg:col-span-7" : "lg:col-span-5";

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: index % 2 === 0 ? 10 : -10 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ delay: index * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${colSpan} group relative perspective-1000`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-500/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
      
      <motion.div
        whileHover={{ rotateX: 2, rotateY: index % 2 === 0 ? 2 : -2, z: 20 }}
        className="relative h-full p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col min-h-[500px] will-change-transform"
      >
        {/* Animated Border Reveal */}
        <div className="absolute inset-0 z-0">
          <motion.div
            animate={isHovered ? {
              background: [
                `radial-gradient(600px circle at 0% 0%, rgba(255,255,255,0.06), transparent 40%)`,
                `radial-gradient(600px circle at 100% 100%, rgba(255,255,255,0.06), transparent 40%)`
              ]
            } : {}}
            transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
            className="absolute inset-0"
          />
        </div>

        <div className="relative z-10 flex flex-col h-full">
          <div className="mb-8 flex items-center justify-between">
            <motion.div 
              whileHover={{ rotate: 12, scale: 1.1 }}
              className="p-5 rounded-[2rem] bg-white/5 border border-white/10 shadow-2xl"
            >
              {feature.icon}
            </motion.div>
            <div className={`text-xs font-black tracking-[0.2em] uppercase px-5 py-2 rounded-full border border-white/10 bg-white/5 text-zinc-400`}>
              {feature.metrics}
            </div>
          </div>
          
          <h3 className="text-3xl font-black mb-6 text-white group-hover:text-cyan-400 transition-colors tracking-tight">
            {feature.title}
          </h3>
          
          <div className="relative flex-grow">
            <p className="text-zinc-400 text-lg leading-relaxed mb-8 group-hover:opacity-0 transition-opacity duration-300">
              {feature.description}
            </p>
            
            <div className="absolute top-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {isHovered && <TypewriterText text={feature.detailed} />}
            </div>
          </div>

          <div className="mt-auto relative w-full h-48 rounded-[2rem] bg-black/40 border border-white/5 overflow-hidden flex items-center justify-center group-hover:border-cyan-500/30 transition-colors">
            <FeatureVisual type={feature.visual} color={feature.color} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ComparisonCard({ title, items, highlight = false, type }: { title: string; items: string[]; highlight?: boolean; type: "before" | "after" }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`p-10 rounded-[3rem] border ${highlight ? 'bg-white/[0.05] border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.1)]' : 'bg-white/[0.02] border-white/10'} backdrop-blur-3xl`}
    >
      <div className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 ${highlight ? 'bg-cyan-500 text-black' : 'bg-white/10 text-zinc-400'}`}>
        {type === "before" ? "Past" : "Future"}
      </div>
      <h3 className="text-3xl font-black mb-8 text-white">{title}</h3>
      <ul className="space-y-4">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${highlight ? 'bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]' : 'bg-zinc-600'}`} />
            <span className={highlight ? 'text-zinc-200' : 'text-zinc-500'}>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function FeatureVisual({ type, color }: { type: string; color: string }) {
  const accentClass = `text-${color}-400`;
  const bgClass = `bg-${color}-500/50`;

  switch (type) {
    case "Waveform":
      return (
        <div className="flex items-center gap-2 h-16">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ height: [15, 60, 15, 45, 15] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.05, ease: "easeInOut" }}
              className={`w-1.5 ${bgClass} rounded-full`}
            />
          ))}
        </div>
      );
    case "Speedometer":
      return (
        <div className="relative flex flex-col items-center">
          <svg className="w-40 h-24" viewBox="0 0 100 60">
            <path d="M10 50 A 40 40 0 0 1 90 50" fill="none" stroke="currentColor" strokeWidth="6" className="text-white/5" strokeLinecap="round" />
            <motion.path 
              d="M10 50 A 40 40 0 0 1 90 50" 
              fill="none" 
              stroke="url(#speedGradient)" 
              strokeWidth="6" 
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 0.9 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
            <defs>
              <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#22d3ee' }} />
                <stop offset="100%" style={{ stopColor: '#f43f5e' }} />
              </linearGradient>
            </defs>
          </svg>
          <div className="text-3xl font-black mt-[-10px] text-white">180<span className="text-sm font-normal text-zinc-500 ml-1">ms</span></div>
        </div>
      );
    case "MindMap":
      return (
        <div className="relative w-32 h-32">
          <motion.div 
            animate={{ scale: [1, 1.1, 1], rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-purple-500/20 rounded-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Brain className="w-16 h-16 text-purple-500/50" />
          </div>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full"
              animate={{ 
                x: [0, Math.cos(i * 45 * Math.PI / 180) * 50],
                y: [0, Math.sin(i * 45 * Math.PI / 180) * 50],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      );
    case "Sentiment":
      return (
        <div className="flex gap-4 items-end h-24">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <motion.div 
                animate={{ height: [20, 70, 30, 60, 20] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                className={`w-5 rounded-t-xl ${i === 4 ? 'bg-pink-500' : 'bg-white/10'}`}
              />
              <div className="w-2 h-2 bg-white/20 rounded-full" />
            </div>
          ))}
        </div>
      );
    case "Security":
      return (
        <div className="relative">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-40 h-40 bg-green-500 rounded-full blur-[40px]"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <ShieldCheck className="w-20 h-20 text-green-500" />
          </div>
        </div>
      );
    case "Connect":
      return (
        <div className="flex items-center gap-6">
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center"
          >
            <Plug2 className="w-8 h-8 text-blue-500" />
          </motion.div>
          <div className="flex gap-2">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.5, 1], opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              />
            ))}
          </div>
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
            <div className="w-8 h-8 bg-cyan-500/20 rounded-lg border border-cyan-500/30" />
          </div>
        </div>
      );
    case "Analytics":
      return (
        <div className="flex gap-3 items-end h-24">
          <motion.div animate={{ height: [30, 90, 40] }} transition={{ duration: 2, repeat: Infinity }} className="w-8 bg-indigo-500/20 rounded-t-xl border-t border-indigo-500/50" />
          <motion.div animate={{ height: [60, 30, 80] }} transition={{ duration: 2.5, repeat: Infinity }} className="w-8 bg-indigo-500/40 rounded-t-xl border-t border-indigo-500/50" />
          <motion.div animate={{ height: [80, 50, 70] }} transition={{ duration: 3, repeat: Infinity }} className="w-8 bg-indigo-500/60 rounded-t-xl border-t border-indigo-500/50" />
          <motion.div animate={{ height: [40, 70, 30] }} transition={{ duration: 2.2, repeat: Infinity }} className="w-8 bg-indigo-500/80 rounded-t-xl border-t border-indigo-500/50" />
        </div>
      );
    case "Training":
      return (
        <div className="relative">
          <motion.div
            animate={{ 
              background: [
                "radial-gradient(circle, rgba(249,115,22,0.3) 0%, transparent 70%)",
                "radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
            className="w-40 h-40 absolute inset-[-20px]"
          />
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <Wand2 className="w-20 h-20 text-orange-500" />
          </motion.div>
        </div>
      );
    default:
      return null;
  }
}

