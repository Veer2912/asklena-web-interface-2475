import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { useState, useMemo } from "react";
import { 
  Mic2, Zap, Brain, Smile, ShieldCheck, Plug2, BarChart3, Wand2, Globe2, Clock,
  ArrowUpRight, Sparkles, Volume2, Waves, CheckCircle, Play, ArrowRight,
  Languages, Timer, Shield, Cpu, Database, Network, Settings, LineChart,
  Webhook, Cloud, Code2, GitBranch, Layers, Target, Headphones, Radio,
  MessageSquare, Users, TrendingUp, Activity, Lock, Eye, Fingerprint
} from "lucide-react";

// ============================================================================
// FEATURES PAGE - Complete feature showcase with multiple sections
// ============================================================================

const features = [
  {
    title: "Natural Conversations",
    description: "Human-grade voice synthesis with nuances, accents, and complex sentence structures.",
    icon: Mic2,
    stat: "40+ Languages",
    color: "#06b6d4",
  },
  {
    title: "Lightning Response",
    description: "Proprietary streaming architecture ensures near-instant responses.",
    icon: Zap,
    stat: "<200ms",
    color: "#3b82f6",
  },
  {
    title: "Context Memory",
    description: "Sophisticated long-term memory across multiple calls and sessions.",
    icon: Brain,
    stat: "Infinite",
    color: "#a855f7",
  },
  {
    title: "Emotion Detection",
    description: "Real-time sentiment analysis for adaptive tone response.",
    icon: Smile,
    stat: "98%",
    color: "#ec4899",
  },
  {
    title: "Enterprise Security",
    description: "Bank-level encryption with HIPAA, GDPR, SOC 2 compliance.",
    icon: ShieldCheck,
    stat: "SOC 2",
    color: "#10b981",
  },
  {
    title: "50+ Integrations",
    description: "Pre-built connectors for CRM, Helpdesk, and more.",
    icon: Plug2,
    stat: "50+",
    color: "#6366f1",
  },
  {
    title: "Live Analytics",
    description: "Deep insights with automatic transcription and summaries.",
    icon: BarChart3,
    stat: "Real-time",
    color: "#f59e0b",
  },
  {
    title: "Custom Training",
    description: "Train on your knowledge base, brand voice, and jargon.",
    icon: Wand2,
    stat: "Hours",
    color: "#ef4444",
  },
];

const voiceCapabilities = [
  { icon: Languages, title: "40+ Languages", desc: "Native-level fluency in major world languages" },
  { icon: Timer, title: "Real-time Processing", desc: "Process and respond in milliseconds" },
  { icon: Smile, title: "Emotion Recognition", desc: "Detect and adapt to caller sentiment" },
  { icon: Mic2, title: "Voice Cloning", desc: "Create custom brand voices" },
];

const securityFeatures = [
  { title: "SOC 2 Type II", desc: "Audited security controls", icon: Shield },
  { title: "HIPAA Compliant", desc: "Healthcare data protection", icon: Lock },
  { title: "GDPR Ready", desc: "EU data privacy compliance", icon: Eye },
  { title: "256-bit Encryption", desc: "End-to-end data security", icon: Fingerprint },
];

const analyticsFeatures = [
  { icon: LineChart, title: "Call Analytics", desc: "Track every metric that matters" },
  { icon: Database, title: "Full Transcripts", desc: "Searchable call recordings" },
  { icon: Cpu, title: "AI Insights", desc: "Automated conversation analysis" },
  { icon: Settings, title: "Custom Reports", desc: "Build your own dashboards" },
];

const integrations = [
  { name: "Salesforce", category: "CRM", color: "#00A1E0" },
  { name: "HubSpot", category: "CRM", color: "#FF7A59" },
  { name: "Zendesk", category: "Support", color: "#03363D" },
  { name: "Intercom", category: "Support", color: "#1F8DED" },
  { name: "Slack", category: "Communication", color: "#4A154B" },
  { name: "Microsoft Teams", category: "Communication", color: "#6264A7" },
  { name: "Twilio", category: "Telephony", color: "#F22F46" },
  { name: "AWS", category: "Cloud", color: "#FF9900" },
  { name: "Google Cloud", category: "Cloud", color: "#4285F4" },
  { name: "Shopify", category: "E-Commerce", color: "#96BF48" },
  { name: "Stripe", category: "Payments", color: "#635BFF" },
  { name: "Zapier", category: "Automation", color: "#FF4A00" },
];

const voiceTechSpecs = [
  { label: "Voice Models", value: "15+", desc: "Pre-trained voice personalities" },
  { label: "Sample Rate", value: "48kHz", desc: "Studio-quality audio" },
  { label: "Latency", value: "<200ms", desc: "End-to-end response time" },
  { label: "Accuracy", value: "98.5%", desc: "Speech recognition rate" },
  { label: "Languages", value: "40+", desc: "Native fluency support" },
  { label: "Emotions", value: "12", desc: "Detectable sentiment states" },
];

// Hero Section
function FeaturesHero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[200px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-sm font-semibold text-cyan-400 mb-6"
          >
            <Sparkles className="w-4 h-4" />
            VOICE TECHNOLOGY
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mb-6"
          >
            Features That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Speak Volumes
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8"
          >
            Every feature engineered for natural, intelligent conversations.
            From millisecond response times to emotional intelligence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8"
          >
            {[
              { icon: Waves, value: "40+", label: "Languages" },
              { icon: Zap, value: "<200ms", label: "Latency" },
              { icon: CheckCircle, value: "99.99%", label: "Uptime" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <stat.icon className="w-6 h-6 text-cyan-400" />
                <div>
                  <p className="text-2xl font-black text-white">{stat.value}</p>
                  <p className="text-xs text-zinc-500">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Feature Card
function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      <div 
        className="h-full p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:border-opacity-60"
        style={{
          backgroundColor: `${feature.color}05`,
          borderColor: `${feature.color}20`,
        }}
      >
        <div 
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
          style={{ backgroundColor: `${feature.color}15` }}
        >
          <Icon className="w-7 h-7" style={{ color: feature.color }} />
        </div>
        
        <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
        <p className="text-sm text-zinc-400 mb-4">{feature.description}</p>
        
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <span className="text-xs text-zinc-500">Performance</span>
          <span className="text-lg font-bold" style={{ color: feature.color }}>{feature.stat}</span>
        </div>
      </div>
    </motion.div>
  );
}

// Features Grid
function FeaturesGrid() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Core Capabilities
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Everything you need to deploy intelligent voice agents at scale
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Voice Technology Deep Dive Section
function VoiceTechDeepDive() {
  const [activeSpec, setActiveSpec] = useState(0);
  
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-bold text-cyan-400 mb-4"
          >
            <Radio className="w-3 h-3" />
            VOICE ENGINE
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Voice Technology{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Under the Hood
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 max-w-2xl mx-auto"
          >
            Built on state-of-the-art neural networks, our voice engine delivers
            unparalleled naturalness and responsiveness
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Tech Specs Display */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Central core */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="w-64 h-64 rounded-full border border-cyan-500/20"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                  className="absolute w-48 h-48 rounded-full border border-purple-500/20"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute w-32 h-32 rounded-full border border-pink-500/20"
                />
                
                {/* Center display */}
                <div className="absolute w-28 h-28 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center backdrop-blur-xl">
                  <div className="text-center">
                    <motion.p
                      key={activeSpec}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-2xl font-black text-white"
                    >
                      {voiceTechSpecs[activeSpec].value}
                    </motion.p>
                    <p className="text-[10px] text-zinc-500 uppercase">
                      {voiceTechSpecs[activeSpec].label}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Orbiting spec nodes */}
              {voiceTechSpecs.map((spec, i) => {
                const angle = (i / voiceTechSpecs.length) * 2 * Math.PI - Math.PI / 2;
                const radius = 45;
                const x = 50 + radius * Math.cos(angle);
                const y = 50 + radius * Math.sin(angle);
                
                return (
                  <motion.button
                    key={i}
                    onClick={() => setActiveSpec(i)}
                    className={`absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-xl flex items-center justify-center transition-all ${
                      activeSpec === i 
                        ? 'bg-cyan-500/20 border-cyan-500/50 scale-110' 
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    } border backdrop-blur-sm`}
                    style={{ left: `${x}%`, top: `${y}%` }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className={`text-xs font-bold ${activeSpec === i ? 'text-cyan-400' : 'text-zinc-400'}`}>
                      {spec.value}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Spec Details */}
          <div className="space-y-4">
            {voiceTechSpecs.map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveSpec(i)}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  activeSpec === i 
                    ? 'bg-cyan-500/10 border-cyan-500/30' 
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-white">{spec.label}</h4>
                    <p className="text-sm text-zinc-500">{spec.desc}</p>
                  </div>
                  <span className={`text-2xl font-black ${activeSpec === i ? 'text-cyan-400' : 'text-zinc-600'}`}>
                    {spec.value}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Voice Capabilities Section
function VoiceCapabilities() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-bold text-cyan-400 mb-4"
            >
              <Volume2 className="w-3 h-3" />
              SYNTHESIS
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Human-Grade Voice{" "}
              <span className="text-cyan-400">Synthesis</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 mb-8"
            >
              Our proprietary voice engine delivers natural, expressive speech that's 
              indistinguishable from human conversation. Built with the latest neural 
              network architectures.
            </motion.p>

            <div className="grid grid-cols-2 gap-4">
              {voiceCapabilities.map((cap, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <cap.icon className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-sm">{cap.title}</h4>
                    <p className="text-xs text-zinc-500">{cap.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Voice visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 flex items-center justify-center overflow-hidden">
              {/* Animated waveform */}
              <div className="absolute inset-0 flex items-center justify-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full border border-cyan-500/30"
                    style={{ 
                      width: `${60 + i * 20}%`, 
                      height: `${60 + i * 20}%` 
                    }}
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ 
                      duration: 2 + i * 0.3, 
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                ))}
              </div>
              
              <div className="text-center relative z-10">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center"
                >
                  <Mic2 className="w-16 h-16 text-white" />
                </motion.div>
                <p className="text-lg font-bold text-white mb-2">Voice Engine v4.0</p>
                <p className="text-sm text-zinc-500">98% Natural Speech Score</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Integration Ecosystem Section
function IntegrationEcosystem() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-bold text-purple-400 mb-4"
          >
            <Webhook className="w-3 h-3" />
            INTEGRATIONS
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Connect to Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Entire Stack
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 max-w-2xl mx-auto"
          >
            50+ pre-built integrations with your favorite tools. Deploy in minutes, not months.
          </motion.p>
        </div>

        {/* Integration grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          {integrations.map((integration, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-center group cursor-pointer"
            >
              <div 
                className="w-10 h-10 mx-auto rounded-lg mb-2 flex items-center justify-center transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${integration.color}20` }}
              >
                <Plug2 className="w-5 h-5" style={{ color: integration.color }} />
              </div>
              <p className="text-sm font-medium text-white truncate">{integration.name}</p>
              <p className="text-[10px] text-zinc-500">{integration.category}</p>
            </motion.div>
          ))}
        </div>

        {/* API highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            { icon: Code2, title: "REST API", desc: "Full-featured RESTful API with comprehensive docs" },
            { icon: Webhook, title: "Webhooks", desc: "Real-time event notifications for all call events" },
            { icon: GitBranch, title: "SDKs", desc: "Native SDKs for Node.js, Python, Go, and more" },
          ].map((item, i) => (
            <div 
              key={i}
              className="p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <item.icon className="w-8 h-8 text-purple-400 mb-4" />
              <h4 className="font-bold text-white mb-2">{item.title}</h4>
              <p className="text-sm text-zinc-500">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Security Section
function SecuritySection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-xs font-bold text-green-400 mb-4"
          >
            <Shield className="w-3 h-3" />
            SECURITY
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Enterprise-Grade Security
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 max-w-xl mx-auto"
          >
            Your data is protected with the highest standards of security and compliance
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {securityFeatures.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center group hover:border-green-500/30 transition-colors"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-green-500/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-green-400" />
              </div>
              <h4 className="font-bold text-white mb-1">{feature.title}</h4>
              <p className="text-xs text-zinc-500">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Analytics Section
function AnalyticsSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Analytics visualization */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="p-6 rounded-3xl bg-zinc-900/50 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-bold text-white">Call Analytics Dashboard</h4>
                <span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-full">Live</span>
              </div>
              
              {/* Mock chart bars */}
              <div className="flex items-end gap-2 h-40 mb-6">
                {[65, 85, 45, 90, 70, 95, 60, 80, 75, 88, 92, 78].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex-1 rounded-t bg-gradient-to-t from-purple-500 to-cyan-400"
                  />
                ))}
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Total Calls", value: "12,847" },
                  { label: "Avg Duration", value: "3:24" },
                  { label: "Resolution", value: "94%" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-zinc-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-bold text-purple-400 mb-4"
            >
              <BarChart3 className="w-3 h-3" />
              ANALYTICS
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Deep Insights,{" "}
              <span className="text-purple-400">Real-time</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 mb-8"
            >
              Every conversation is an opportunity to learn. Our analytics platform 
              transforms call data into actionable insights.
            </motion.p>

            <div className="space-y-3">
              {analyticsFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <feature.icon className="w-5 h-5 text-purple-400" />
                  <div>
                    <h4 className="font-bold text-white text-sm">{feature.title}</h4>
                    <p className="text-xs text-zinc-500">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// AI Training Section
function AITrainingSection() {
  const trainingSteps = [
    { step: "01", title: "Upload Knowledge", desc: "Import your docs, FAQs, scripts, and brand guidelines", icon: Database },
    { step: "02", title: "Configure Voice", desc: "Choose or clone a voice that matches your brand", icon: Headphones },
    { step: "03", title: "Train & Test", desc: "Our AI learns your domain in hours, not weeks", icon: Brain },
    { step: "04", title: "Deploy & Monitor", desc: "Go live with real-time analytics and optimization", icon: Activity },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-xs font-bold text-pink-400 mb-4"
          >
            <Wand2 className="w-3 h-3" />
            CUSTOM TRAINING
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Train Your AI Agent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              in Hours
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 max-w-2xl mx-auto"
          >
            No ML expertise required. Our platform makes it easy to create domain-expert
            voice agents tailored to your business.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainingSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              {/* Connector line */}
              {i < trainingSteps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-[2px] bg-gradient-to-r from-pink-500/50 to-transparent z-0" />
              )}
              
              <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/30 transition-colors">
                <span className="text-4xl font-black text-pink-500/20 absolute top-4 right-4">
                  {step.step}
                </span>
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <step.icon className="w-6 h-6 text-pink-400" />
                </div>
                <h4 className="font-bold text-white mb-2">{step.title}</h4>
                <p className="text-sm text-zinc-500">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center p-12 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Experience These Features?
        </h2>
        <p className="text-lg text-zinc-400 mb-8">
          Start your free trial and see the difference in your customer experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="/pricing"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold shadow-lg"
          >
            <Play className="w-5 h-5" />
            Start Free Trial
          </motion.a>
          <motion.a
            href="/solutions"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-bold hover:bg-white/5"
          >
            View Solutions
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <FeaturesHero />
      <FeaturesGrid />
      <VoiceTechDeepDive />
      <VoiceCapabilities />
      <IntegrationEcosystem />
      <AITrainingSection />
      <SecuritySection />
      <AnalyticsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
