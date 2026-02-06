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
  Clock
} from "lucide-react";

const features = [
  {
    title: "Natural Conversations",
    description: "Human-grade voice synthesis that handles nuances, accents, and complex sentence structures in 40+ languages.",
    icon: <Mic2 className="w-8 h-8" />,
    stat: "40+ Languages",
    color: "cyan"
  },
  {
    title: "Lightning Fast Response",
    description: "Proprietary streaming architecture ensures near-instant responses, making interactions feel completely natural.",
    icon: <Zap className="w-8 h-8" />,
    stat: "<200ms Latency",
    color: "blue"
  },
  {
    title: "Contextual Intelligence",
    description: "Sophisticated long-term memory allows Lena to remember user preferences and past details across multiple calls.",
    icon: <Brain className="w-8 h-8" />,
    stat: "Full Context",
    color: "purple"
  },
  {
    title: "Emotion Detection",
    description: "Real-time sentiment analysis detects customer frustration or satisfaction, allowing for adaptive tone response.",
    icon: <Smile className="w-8 h-8" />,
    stat: "98% Accuracy",
    color: "pink"
  },
  {
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance with global standards including HIPAA, GDPR, and SOC 2 Type II.",
    icon: <ShieldCheck className="w-8 h-8" />,
    stat: "SOC 2 Type II",
    color: "emerald"
  },
  {
    title: "Seamless Integrations",
    description: "Connect with your existing stack via pre-built integrations for CRM, Helpdesk, and Scheduling platforms.",
    icon: <Plug2 className="w-8 h-8" />,
    stat: "50+ Tools",
    color: "indigo"
  },
  {
    title: "Real-time Analytics",
    description: "Deep insights into every conversation with automatic transcription, summarization, and trend detection.",
    icon: <BarChart3 className="w-8 h-8" />,
    stat: "Live Dashboard",
    color: "cyan"
  },
  {
    title: "Custom Training",
    description: "Train Lena on your specific knowledge base, brand voice, and industry jargon in hours, not weeks.",
    icon: <Wand2 className="w-8 h-8" />,
    stat: "Self-Learning",
    color: "orange"
  },
  {
    title: "Global Reach",
    description: "Deploy voice agents globally with localized phone numbers and cultural awareness built-in.",
    icon: <Globe2 className="w-8 h-8" />,
    stat: "190+ Countries",
    color: "blue"
  },
  {
    title: "24/7 Availability",
    description: "Never miss a call. Lena works around the clock, handling peak volumes without any degradation in quality.",
    icon: <Clock className="w-8 h-8" />,
    stat: "99.99% Uptime",
    color: "purple"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-[#0a0e27] text-white selection:bg-cyan-500/30 overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Powerful Features for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Next-Gen Voice</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Discover the advanced technology behind Lena that enables human-like conversations at enterprise scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent rounded-[2rem] border border-white/10 group-hover:border-white/20 transition-colors" />
                
                <div className="relative p-8 h-full flex flex-col">
                  <div className={`mb-6 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-zinc-400 leading-relaxed mb-8 flex-grow">
                    {feature.description}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-xs font-bold tracking-widest uppercase text-zinc-500">
                      {feature.stat}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-[2rem] bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

