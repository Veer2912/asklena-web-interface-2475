import { motion } from "framer-motion";
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
  ChevronRight
} from "lucide-react";

const features = [
  {
    title: "Natural Conversations",
    description: "Human-grade voice synthesis that handles nuances, accents, and complex sentence structures in 40+ languages.",
    icon: <Mic2 className="w-8 h-8 text-cyan-400" />,
    metrics: "40+ Languages",
    visual: "Waveform",
    color: "from-cyan-500/20 to-blue-500/20"
  },
  {
    title: "Lightning Fast Response",
    description: "Proprietary streaming architecture ensures near-instant responses, making interactions feel completely natural.",
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    metrics: "<200ms Latency",
    visual: "Speedometer",
    color: "from-yellow-500/20 to-orange-500/20"
  },
  {
    title: "Contextual Intelligence",
    description: "Sophisticated long-term memory allows Lena to remember user preferences and past details across multiple calls.",
    icon: <Brain className="w-8 h-8 text-purple-400" />,
    metrics: "Infinite Context",
    visual: "MindMap",
    color: "from-purple-500/20 to-indigo-500/20"
  },
  {
    title: "Emotion Detection",
    description: "Real-time sentiment analysis detects customer frustration or satisfaction, allowing for adaptive tone response.",
    icon: <Smile className="w-8 h-8 text-pink-400" />,
    metrics: "98% Accuracy",
    visual: "Sentiment",
    color: "from-pink-500/20 to-rose-500/20"
  },
  {
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance with global standards including HIPAA, GDPR, and SOC 2 Type II.",
    icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
    metrics: "SOC 2 Type II",
    visual: "Security",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "Seamless Integrations",
    description: "Connect with your existing stack via pre-built integrations for CRM, Helpdesk, and Scheduling platforms.",
    icon: <Plug2 className="w-8 h-8 text-blue-400" />,
    metrics: "50+ Connectors",
    visual: "Connect",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Real-time Analytics",
    description: "Deep insights into every conversation with automatic transcription, summarization, and trend detection.",
    icon: <BarChart3 className="w-8 h-8 text-indigo-400" />,
    metrics: "Live Dashboard",
    visual: "Analytics",
    color: "from-indigo-500/20 to-blue-500/20"
  },
  {
    title: "Custom Training",
    description: "Train Lena on your specific knowledge base, brand voice, and industry jargon in hours, not weeks.",
    icon: <Wand2 className="w-8 h-8 text-orange-400" />,
    metrics: "Self-Learning",
    visual: "Training",
    color: "from-orange-500/20 to-red-500/20"
  }
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1),transparent_70%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
              Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Capabilities</span>
            </h1>
            <p className="text-zinc-400 text-xl max-w-3xl mx-auto font-light leading-relaxed">
              Explore the advanced technology that powers Lena. From human-like speech 
              to deep contextual understanding, we've built the most capable voice AI for enterprise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="p-12 rounded-[3rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 backdrop-blur-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to see it in action?</h2>
            <p className="text-zinc-400 text-lg mb-10">
              Join hundreds of forward-thinking enterprises using Asklena to transform their customer experience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-cyan-50 transition-all">
                Start Free Trial
              </button>
              <button className="px-10 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function FeatureCard({ feature, index }: { feature: typeof features[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
      
      <div className="relative h-full p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col">
        <div className="mb-6 flex items-center justify-between">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500">
            {feature.icon}
          </div>
          <div className="text-xs font-bold tracking-[0.2em] text-cyan-400 uppercase bg-cyan-400/10 px-4 py-1.5 rounded-full border border-cyan-400/20">
            {feature.metrics}
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
          {feature.title}
        </h3>
        <p className="text-zinc-400 leading-relaxed mb-8 flex-grow group-hover:text-zinc-300 transition-colors">
          {feature.description}
        </p>

        {/* Visual Mockup/Demo placeholder based on type */}
        <div className="relative w-full h-48 rounded-2xl bg-black/40 border border-white/5 overflow-hidden flex items-center justify-center">
          <FeatureVisual type={feature.visual} />
        </div>
      </div>
    </motion.div>
  );
}

function FeatureVisual({ type }: { type: string }) {
  switch (type) {
    case "Waveform":
      return (
        <div className="flex items-center gap-1.5 h-16">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ height: [20, 60, 20, 40, 20] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
              className="w-1.5 bg-cyan-500/50 rounded-full"
            />
          ))}
        </div>
      );
    case "Speedometer":
      return (
        <div className="relative flex flex-col items-center">
          <svg className="w-32 h-20" viewBox="0 0 100 60">
            <path d="M10 50 A 40 40 0 0 1 90 50" fill="none" stroke="currentColor" strokeWidth="8" className="text-white/10" strokeLinecap="round" />
            <motion.path 
              d="M10 50 A 40 40 0 0 1 90 50" 
              fill="none" 
              stroke="url(#grad1)" 
              strokeWidth="8" 
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 0.95 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#22d3ee', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#f43f5e', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
          </svg>
          <div className="text-xl font-black mt-2">180ms</div>
        </div>
      );
    case "MindMap":
      return (
        <div className="relative w-32 h-32">
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Brain className="w-12 h-12 text-purple-500 opacity-50" />
          </motion.div>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-2 h-2 bg-white/20 rounded-full"
              animate={{ 
                x: [0, Math.cos(i * 60 * Math.PI / 180) * 40],
                y: [0, Math.sin(i * 60 * Math.PI / 180) * 40],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </div>
      );
    case "Sentiment":
      return (
        <div className="flex gap-4 items-end h-20">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <motion.div 
                animate={{ height: [20, 50, 20] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                className={`w-4 rounded-t-lg ${i === 4 ? 'bg-cyan-500' : 'bg-white/10'}`}
              />
              <div className="w-1 h-1 bg-white/20 rounded-full" />
            </div>
          ))}
        </div>
      );
    case "Security":
      return (
        <div className="relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 border-2 border-dashed border-green-500/30 rounded-full flex items-center justify-center"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <ShieldCheck className="w-12 h-12 text-green-500" />
          </div>
        </div>
      );
    case "Connect":
      return (
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
            <Plug2 className="w-6 h-6 text-blue-500" />
          </div>
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
                className="w-2 h-1 bg-blue-500 rounded-full"
              />
            ))}
          </div>
          <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
            <div className="w-6 h-6 bg-cyan-500/20 rounded-md border border-cyan-500/40" />
          </div>
        </div>
      );
    case "Analytics":
      return (
        <div className="flex gap-2 items-end">
          <motion.div animate={{ height: [40, 80, 60] }} transition={{ duration: 2, repeat: Infinity }} className="w-6 bg-indigo-500/40 rounded-t-lg" />
          <motion.div animate={{ height: [60, 40, 90] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} className="w-6 bg-indigo-500/60 rounded-t-lg" />
          <motion.div animate={{ height: [80, 60, 40] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} className="w-6 bg-indigo-500/80 rounded-t-lg" />
        </div>
      );
    case "Training":
      return (
        <div className="relative">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-20 h-20 bg-orange-500/20 rounded-full blur-xl"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Wand2 className="w-10 h-10 text-orange-500" />
          </div>
        </div>
      );
    default:
      return null;
  }
}
