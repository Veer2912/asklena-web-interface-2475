import { motion } from "framer-motion";
import { MessageSquareText, Brain, Zap, ShieldCheck, Share2, BarChart3 } from "lucide-react";

const features = [
  {
    title: "Natural Speech",
    description: "Fluid, human-like conversations in over 40 languages with natural inflection.",
    icon: <MessageSquareText className="w-6 h-6 text-purple-400" />
  },
  {
    title: "Contextual Intelligence",
    description: "Understands intent and maintains context throughout complex conversations.",
    icon: <Brain className="w-6 h-6 text-indigo-400" />
  },
  {
    title: "Lightning Fast",
    description: "Ultra-low latency with sub-200ms response times for seamless interaction.",
    icon: <Zap className="w-6 h-6 text-blue-400" />
  },
  {
    title: "Enterprise Security",
    description: "Fully compliant with SOC 2, GDPR, and HIPAA standards for data protection.",
    icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />
  },
  {
    title: "Omnichannel Ready",
    description: "Deploy across phone, web, and messaging platforms with a single configuration.",
    icon: <Share2 className="w-6 h-6 text-teal-400" />
  },
  {
    title: "Real-time Analysis",
    description: "Live sentiment analysis and call transcriptions with actionable insights.",
    icon: <BarChart3 className="w-6 h-6 text-emerald-400" />
  }
];

export function KeyFeatures() {
  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4 font-outfit"
          >
            Engineered for Excellence
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg max-w-2xl mx-auto"
          >
            Powerful features that set Asklena apart from traditional IVR systems.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="mb-6 p-3 w-fit rounded-xl bg-zinc-900/50 border border-white/5 text-white group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-outfit">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
