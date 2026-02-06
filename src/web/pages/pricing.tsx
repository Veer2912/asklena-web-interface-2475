import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { 
  Check, 
  ArrowRight,
  Zap,
  ShieldCheck,
  Globe2,
  Clock,
  MessageSquare,
  BarChart3,
  TrendingUp,
  Cpu
} from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Starter",
    price: "$0.50",
    period: "per conversation",
    description: "Perfect for testing and early stage projects.",
    features: [
      { text: "Natural Conversations", included: true },
      { text: "5 Concurrent Calls", included: true },
      { text: "10 Languages", included: true },
      { text: "Email Support", included: true },
      { text: "Standard Latency", included: true },
      { text: "99% Uptime SLA", included: false },
      { text: "Custom Training", included: false },
      { text: "Dedicated Account Manager", included: false },
    ],
    cta: "Start Free",
    highlight: false,
    color: "from-blue-400 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/5",
    badge: "Most Popular"
  },
  {
    name: "Professional",
    price: "$0.40",
    period: "per conversation",
    description: "Best for growing teams and scaling operations.",
    features: [
      { text: "Everything in Starter", included: true },
      { text: "100 Concurrent Calls", included: true },
      { text: "40+ Languages", included: true },
      { text: "Priority Support (2hr)", included: true },
      { text: "Sub-200ms Latency", included: true },
      { text: "Custom Knowledge Base", included: true },
      { text: "99.9% Uptime SLA", included: true },
      { text: "Dedicated Account Manager", included: false },
    ],
    cta: "Get Started",
    highlight: true,
    color: "from-cyan-400 to-purple-500",
    bgGradient: "from-cyan-500/10 to-purple-500/5",
    badge: "Recommended"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored to you",
    description: "For high-volume deployments with custom requirements.",
    features: [
      { text: "Everything in Professional", included: true },
      { text: "Unlimited Concurrent Calls", included: true },
      { text: "Custom SLAs", included: true },
      { text: "24/7 Premium Support", included: true },
      { text: "Sub-150ms Latency", included: true },
      { text: "Advanced Custom Training", included: true },
      { text: "99.99% Uptime SLA", included: true },
      { text: "Dedicated Account Manager", included: true },
    ],
    cta: "Schedule Demo",
    highlight: false,
    color: "from-purple-400 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/5",
    badge: "Enterprise"
  }
];

// Premium pricing card component
function PricingCard({ 
  tier, 
  index 
}: { 
  tier: typeof tiers[0]; 
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group h-full transition-all duration-300 ${tier.highlight ? "lg:scale-105" : ""}`}
    >
      {/* Glow effect */}
      <motion.div
        className={`absolute inset-0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
        style={{
          background: `linear-gradient(135deg, rgba(6,182,212,0.2), rgba(124,58,237,0.1))`
        }}
      />

      {/* Card container */}
      <div className={`relative h-full p-8 md:p-10 rounded-3xl border-2 transition-all duration-500 overflow-hidden ${
        tier.highlight
          ? "border-cyan-500/50 bg-gradient-to-br " + tier.bgGradient
          : "border-white/10 hover:border-white/30 bg-white/[0.02]"
      }`}>

        {/* Animated background accent */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${tier.color}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.03 : tier.highlight ? 0.05 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Badge */}
        {tier.badge && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className={`absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${
              tier.highlight
                ? "bg-gradient-to-r " + tier.color + " text-white"
                : "bg-white/10 text-cyan-400"
            }`}
          >
            {tier.badge}
          </motion.div>
        )}

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-2">{tier.name}</h3>
            <p className="text-zinc-400 text-sm mb-6">{tier.description}</p>

            {/* Price */}
            <div className="mb-2">
              <span className={`text-5xl font-bold ${tier.highlight ? "text-transparent bg-clip-text bg-gradient-to-r " + tier.color : "text-white"}`}>
                {tier.price}
              </span>
              <span className="text-zinc-400 text-sm ml-2">{tier.period}</span>
            </div>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full py-4 px-6 rounded-xl font-bold text-lg mb-8 transition-all flex items-center justify-center gap-2 ${
              tier.highlight
                ? `bg-gradient-to-r ${tier.color} text-white shadow-[0_8px_32px_rgba(6,182,212,0.3)] hover:shadow-[0_12px_48px_rgba(6,182,212,0.5)]`
                : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
            }`}
          >
            {tier.cta}
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          {/* Features list */}
          <div className="space-y-4 flex-1">
            {tier.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3"
              >
                <motion.div
                  animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.6, repeat: Infinity }}
                >
                  <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                    feature.included 
                      ? `text-transparent bg-clip-text bg-gradient-to-r ${tier.color}`
                      : "text-zinc-600"
                  }`} />
                </motion.div>
                <span className={`text-sm ${feature.included ? "text-zinc-300" : "text-zinc-500"}`}>
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Bottom accent */}
          {tier.highlight && (
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-xs text-zinc-500 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-cyan-400" />
                Most companies upgrade after 3 months
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Comparison feature component
function ComparisonFeature({ 
  name, 
  description, 
  icon: Icon 
}: { 
  name: string; 
  description: string;
  icon: React.ComponentType<{ className: string }>;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all"
    >
      <div className="flex items-center gap-3 mb-2">
        <Icon className="w-5 h-5 text-cyan-400" />
        <h4 className="font-semibold text-sm">{name}</h4>
      </div>
      <p className="text-xs text-zinc-500">{description}</p>
    </motion.div>
  );
}

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  return (
    <main className="min-h-screen bg-[#0a0e27] text-white selection:bg-cyan-500/30 overflow-x-hidden">
      <Navbar />

      {/* Premium Hero Section */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-1/2 right-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px]"
            animate={{ y: [0, 50, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-1/2 left-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-[120px]"
            animate={{ y: [0, -50, 0], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 12, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/50 text-sm font-semibold text-cyan-400 mb-6">
              💰 TRANSPARENT PRICING
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.2]"
          >
            Simple, Transparent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Pricing
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 max-w-4xl mx-auto mb-12"
          >
            No hidden fees. Pay only for conversations. Scale your deployments with confidence.
          </motion.p>

          {/* Billing toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-4 p-1 rounded-full bg-white/[0.05] border border-white/10 mb-12"
          >
            {["monthly", "annual"].map((cycle) => (
              <button
                key={cycle}
                onClick={() => setBillingCycle(cycle as "monthly" | "annual")}
                className="relative px-6 py-2 rounded-full font-semibold transition-all"
              >
                <AnimatePresence>
                  {billingCycle === cycle && (
                    <motion.div
                      layoutId="billingBg"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30"
                      transition={{ type: "spring", bounce: 0.2 }}
                    />
                  )}
                </AnimatePresence>
                <span className="relative z-10">{cycle === "monthly" ? "Monthly" : "Annual"}</span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {tiers.map((tier, index) => (
              <PricingCard key={tier.name} tier={tier} index={index} />
            ))}
          </div>

          {/* What's Included Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              What's Included in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                All Plans
              </span>
            </h2>
            <p className="text-zinc-400 text-lg mb-12 max-w-2xl mx-auto">
              Every plan comes with enterprise-grade reliability and support.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ComparisonFeature
                icon={Zap}
                name="99.9% Uptime"
                description="Industry-leading reliability across all deployments"
              />
              <ComparisonFeature
                icon={Globe2}
                name="40+ Languages"
                description="Deploy voice agents globally with localization"
              />
              <ComparisonFeature
                icon={BarChart3}
                name="Real-time Analytics"
                description="Complete visibility into call performance and metrics"
              />
              <ComparisonFeature
                icon={ShieldCheck}
                name="Enterprise Security"
                description="HIPAA, GDPR, SOC 2 Type II compliance included"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Questions
            </span>
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                q: "How does per-conversation pricing work?",
                a: "You're charged per completed conversation. Conversation length doesn't matter—a 30-second call costs the same as a 30-minute call."
              },
              {
                q: "Can I change plans anytime?",
                a: "Yes, upgrade or downgrade instantly. Changes take effect on your next billing cycle with pro-rata adjustments."
              },
              {
                q: "What happens if I exceed my concurrent call limit?",
                a: "Additional calls are queued and processed as capacity becomes available. Upgrade to Professional or Enterprise to increase limits."
              },
              {
                q: "Do you offer discounts for annual commitments?",
                a: "Yes! Annual plans include 20% savings. Contact our sales team for Enterprise custom pricing."
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all"
              >
                <h3 className="font-bold text-lg text-cyan-400 mb-2">{faq.q}</h3>
                <p className="text-zinc-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center p-12 md:p-16 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/5 border border-cyan-500/20"
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
            Try Lena free for 7 days. No credit card required. Full access to Professional features.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold text-lg shadow-[0_8px_32px_rgba(6,182,212,0.3)] hover:shadow-[0_12px_48px_rgba(6,182,212,0.5)] transition-all"
          >
            Start Free Trial
          </motion.button>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
