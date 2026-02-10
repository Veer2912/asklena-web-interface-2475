import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { 
  Check, X, ArrowRight, Zap, Globe2, Clock, ShieldCheck, Sparkles, Star, 
  TrendingUp, Calculator, Phone, MessageSquare, Users, Building2,
  HelpCircle, ChevronDown, ChevronUp, CheckCircle, Award, Headphones,
  CreditCard, Gift, Shield, BarChart3, Rocket, Target, Heart
} from "lucide-react";

// ============================================================================
// PRICING PAGE - Complete pricing with tiers, calculator, FAQ, and comparison
// ============================================================================

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
      { text: "Basic Analytics", included: true },
      { text: "99% Uptime SLA", included: false },
      { text: "Custom Training", included: false },
      { text: "Dedicated Manager", included: false },
    ],
    cta: "Start Free",
    highlight: false,
    color: "#3b82f6",
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
      { text: "Advanced Analytics", included: true },
      { text: "Custom Knowledge Base", included: true },
      { text: "99.9% Uptime SLA", included: true },
      { text: "Dedicated Manager", included: false },
    ],
    cta: "Get Started",
    highlight: true,
    color: "#06b6d4",
    badge: "Most Popular"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored pricing",
    description: "For high-volume deployments with custom needs.",
    features: [
      { text: "Everything in Pro", included: true },
      { text: "Unlimited Calls", included: true },
      { text: "Custom SLAs", included: true },
      { text: "24/7 Premium Support", included: true },
      { text: "Custom Integrations", included: true },
      { text: "Advanced Training", included: true },
      { text: "99.99% Uptime SLA", included: true },
      { text: "Dedicated Manager", included: true },
    ],
    cta: "Contact Sales",
    highlight: false,
    color: "#a855f7",
  }
];

const includedFeatures = [
  { icon: Zap, title: "99.9% Uptime", desc: "Industry-leading reliability" },
  { icon: Globe2, title: "40+ Languages", desc: "Global deployment ready" },
  { icon: Clock, title: "<200ms Latency", desc: "Natural conversations" },
  { icon: ShieldCheck, title: "Enterprise Security", desc: "SOC 2, HIPAA, GDPR" },
];

const faqs = [
  {
    question: "What counts as a conversation?",
    answer: "A conversation is counted as a complete call session from connection to hang-up. Multi-turn interactions within the same call count as one conversation."
  },
  {
    question: "Can I switch plans anytime?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, changes take effect at the next billing cycle."
  },
  {
    question: "Do you offer volume discounts?",
    answer: "Enterprise customers get custom pricing based on volume. Contact our sales team for a quote tailored to your needs."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, Amex), ACH bank transfers, and wire transfers for enterprise accounts."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! All new accounts get $50 in free credits to test our platform. No credit card required to start."
  },
  {
    question: "What happens if I exceed my plan limits?",
    answer: "You'll receive alerts as you approach limits. Additional usage is billed at the per-conversation rate for your plan tier."
  },
];

const comparisonData = [
  { feature: "Concurrent Calls", starter: "5", pro: "100", enterprise: "Unlimited" },
  { feature: "Languages", starter: "10", pro: "40+", enterprise: "40+" },
  { feature: "Response Time", starter: "Standard", pro: "<200ms", enterprise: "<150ms" },
  { feature: "Uptime SLA", starter: "99%", pro: "99.9%", enterprise: "99.99%" },
  { feature: "Support", starter: "Email", pro: "Priority (2hr)", enterprise: "24/7 Premium" },
  { feature: "Custom Training", starter: "—", pro: "Basic", enterprise: "Advanced" },
  { feature: "Analytics", starter: "Basic", pro: "Advanced", enterprise: "Custom" },
  { feature: "Integrations", starter: "Standard", pro: "Standard", enterprise: "Custom" },
];

const guarantees = [
  { icon: Gift, title: "Free Credits", desc: "$50 to start, no card required", color: "#06b6d4" },
  { icon: Shield, title: "Money-Back", desc: "30-day satisfaction guarantee", color: "#10b981" },
  { icon: Heart, title: "No Contracts", desc: "Cancel anytime, no questions", color: "#ec4899" },
  { icon: Rocket, title: "Same-Day Setup", desc: "Go live within hours", color: "#a855f7" },
];

const addOns = [
  { name: "Voice Cloning", price: "$500", period: "one-time", desc: "Create custom brand voices" },
  { name: "Priority Escalation", price: "$99", period: "/month", desc: "Direct access to engineering" },
  { name: "Custom Reports", price: "$199", period: "/month", desc: "Tailored analytics dashboards" },
  { name: "Training Session", price: "$299", period: "per session", desc: "1-on-1 onboarding call" },
];

// Hero Section
function PricingHero() {
  return (
    <section className="relative pt-32 pb-16 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[200px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-sm font-semibold text-cyan-400 mb-6"
        >
          <TrendingUp className="w-4 h-4" />
          TRANSPARENT PRICING
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-white mb-6"
        >
          Simple Pricing,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
            Powerful Results
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-zinc-400 max-w-2xl mx-auto"
        >
          Pay only for what you use. No hidden fees. Scale with confidence.
        </motion.p>
      </div>
    </section>
  );
}

// Pricing Card
function PricingCard({ tier, index }: { tier: typeof tiers[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`relative ${tier.highlight ? "lg:scale-105 z-10" : ""}`}
    >
      {/* Glow effect for highlighted */}
      {tier.highlight && (
        <div 
          className="absolute -inset-2 rounded-3xl blur-xl opacity-30"
          style={{ backgroundColor: tier.color }}
        />
      )}

      <div 
        className={`relative h-full p-8 rounded-3xl border backdrop-blur-xl ${
          tier.highlight ? "" : "bg-white/5"
        }`}
        style={{
          borderColor: tier.highlight ? `${tier.color}50` : "rgba(255,255,255,0.1)",
          background: tier.highlight ? `linear-gradient(135deg, ${tier.color}15, transparent)` : undefined,
        }}
      >
        {/* Badge */}
        {tier.badge && (
          <div 
            className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-1"
            style={{ backgroundColor: tier.color, color: "white" }}
          >
            <Star className="w-3 h-3" />
            {tier.badge}
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-8 pt-2">
          <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
          <p className="text-zinc-400 text-sm mb-6">{tier.description}</p>
          
          <div className="mb-2">
            <span className="text-5xl font-black" style={{ color: tier.color }}>
              {tier.price}
            </span>
          </div>
          <span className="text-zinc-500 text-sm">{tier.period}</span>
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-4 rounded-xl font-bold mb-8 flex items-center justify-center gap-2 ${
            tier.highlight
              ? "text-white"
              : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
          }`}
          style={tier.highlight ? { background: `linear-gradient(135deg, ${tier.color}, ${tier.color}dd)` } : {}}
        >
          {tier.cta}
          <ArrowRight className="w-5 h-5" />
        </motion.button>

        {/* Features */}
        <div className="space-y-3">
          {tier.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-3">
              {feature.included ? (
                <Check className="w-5 h-5 flex-shrink-0" style={{ color: tier.color }} />
              ) : (
                <X className="w-5 h-5 flex-shrink-0 text-zinc-700" />
              )}
              <span className={`text-sm ${feature.included ? "text-zinc-300" : "text-zinc-600"}`}>
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Pricing Cards Section
function PricingCards() {
  return (
    <section className="py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <PricingCard key={tier.name} tier={tier} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Guarantees Section
function GuaranteesSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {guarantees.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-5 rounded-2xl border border-white/10 bg-white/5 text-center group hover:border-white/20 transition-colors"
            >
              <div 
                className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: `${item.color}15` }}
              >
                <item.icon className="w-6 h-6" style={{ color: item.color }} />
              </div>
              <h4 className="font-bold text-white mb-1">{item.title}</h4>
              <p className="text-xs text-zinc-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Included Features
function IncludedFeatures() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Included in All Plans
          </h2>
          <p className="text-zinc-400">Every plan comes with these core features</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {includedFeatures.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-5 rounded-2xl border border-white/10 bg-white/5 text-center"
            >
              <feature.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h4 className="font-bold text-white mb-1">{feature.title}</h4>
              <p className="text-xs text-zinc-500">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ROI Calculator
function ROICalculator() {
  const [calls, setCalls] = useState(10000);
  const [avgCallCost, setAvgCallCost] = useState(5);
  
  const lenaCost = calls * 0.40;
  const traditionalCost = calls * avgCallCost;
  const savings = traditionalCost - lenaCost;
  const savingsPercent = Math.round((savings / traditionalCost) * 100);
  
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl border border-cyan-500/20 bg-zinc-900/50"
        >
          <div className="flex items-center gap-3 mb-8">
            <Calculator className="w-8 h-8 text-cyan-400" />
            <div>
              <h2 className="text-2xl font-bold text-white">ROI Calculator</h2>
              <p className="text-sm text-zinc-500">See your potential savings</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="text-sm text-zinc-400 mb-3 block">Monthly Call Volume</label>
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={calls}
                onChange={(e) => setCalls(Number(e.target.value))}
                className="w-full accent-cyan-500 mb-2"
              />
              <div className="flex justify-between">
                <span className="text-xs text-zinc-500">1K</span>
                <span className="text-cyan-400 font-bold">{calls.toLocaleString()} calls</span>
                <span className="text-xs text-zinc-500">100K</span>
              </div>
            </div>
            
            <div>
              <label className="text-sm text-zinc-400 mb-3 block">Current Cost per Call</label>
              <input
                type="range"
                min="2"
                max="15"
                step="0.5"
                value={avgCallCost}
                onChange={(e) => setAvgCallCost(Number(e.target.value))}
                className="w-full accent-cyan-500 mb-2"
              />
              <div className="flex justify-between">
                <span className="text-xs text-zinc-500">$2</span>
                <span className="text-cyan-400 font-bold">${avgCallCost.toFixed(2)}</span>
                <span className="text-xs text-zinc-500">$15</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-zinc-800/50 text-center">
              <p className="text-sm text-zinc-500 mb-1">Current Cost</p>
              <p className="text-2xl font-bold text-red-400">${traditionalCost.toLocaleString()}</p>
            </div>
            <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-center">
              <p className="text-sm text-zinc-500 mb-1">With Lena</p>
              <p className="text-2xl font-bold text-cyan-400">${lenaCost.toLocaleString()}</p>
            </div>
            <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-center">
              <p className="text-sm text-zinc-500 mb-1">You Save</p>
              <p className="text-2xl font-bold text-green-400">{savingsPercent}%</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Add-ons Section
function AddOnsSection() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-bold text-purple-400 mb-4"
          >
            <Sparkles className="w-3 h-3" />
            ADD-ONS
          </motion.span>
          
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Enhance Your Plan
          </h2>
          <p className="text-zinc-400">Optional add-ons for advanced needs</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {addOns.map((addon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-5 rounded-2xl border border-white/10 bg-white/5 hover:border-purple-500/30 transition-colors"
            >
              <h4 className="font-bold text-white mb-1">{addon.name}</h4>
              <div className="mb-3">
                <span className="text-xl font-black text-purple-400">{addon.price}</span>
                <span className="text-xs text-zinc-500 ml-1">{addon.period}</span>
              </div>
              <p className="text-sm text-zinc-500">{addon.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Comparison Table
function ComparisonTable() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Compare Plans
          </h2>
          <p className="text-zinc-400">Find the perfect plan for your needs</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-4 text-zinc-400 font-medium">Feature</th>
                <th className="text-center py-4 px-4 text-zinc-400 font-medium">Starter</th>
                <th className="text-center py-4 px-4 text-cyan-400 font-bold">Professional</th>
                <th className="text-center py-4 px-4 text-zinc-400 font-medium">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <tr key={i} className="border-b border-white/5">
                  <td className="py-4 px-4 text-zinc-300 text-sm">{row.feature}</td>
                  <td className="py-4 px-4 text-center text-zinc-400 text-sm">{row.starter}</td>
                  <td className="py-4 px-4 text-center text-white text-sm font-medium bg-cyan-500/5">{row.pro}</td>
                  <td className="py-4 px-4 text-center text-zinc-400 text-sm">{row.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// Enterprise Section
function EnterpriseSection() {
  const enterpriseFeatures = [
    { icon: Users, title: "Unlimited Scale", desc: "Handle millions of calls without limits" },
    { icon: Shield, title: "Custom SLAs", desc: "Tailored uptime and support agreements" },
    { icon: Headphones, title: "24/7 Support", desc: "Dedicated team, always available" },
    { icon: BarChart3, title: "Custom Analytics", desc: "Build your own reporting dashboards" },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-bold text-purple-400 mb-4"
            >
              <Building2 className="w-3 h-3" />
              ENTERPRISE
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Need Custom{" "}
              <span className="text-purple-400">Solutions?</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 mb-8"
            >
              For large-scale deployments with specific requirements, our enterprise 
              plan offers fully customizable solutions with dedicated support.
            </motion.p>

            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold"
            >
              <Phone className="w-5 h-5" />
              Talk to Sales
            </motion.a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {enterpriseFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-2xl border border-white/10 bg-white/5"
              >
                <feature.icon className="w-8 h-8 text-purple-400 mb-3" />
                <h4 className="font-bold text-white mb-1">{feature.title}</h4>
                <p className="text-xs text-zinc-500">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-bold text-cyan-400 mb-4"
          >
            <HelpCircle className="w-3 h-3" />
            FAQ
          </motion.span>
          
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-bold text-white">{faq.question}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-zinc-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-zinc-400" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5">
                      <p className="text-zinc-400 text-sm">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Final CTA
function FinalCTA() {
  return (
    <section className="py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center p-12 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"
      >
        <Sparkles className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Transform Your Support?
        </h2>
        <p className="text-lg text-zinc-400 mb-8">
          Start free with $50 in credits. No credit card required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold shadow-lg"
          >
            Start Free Trial
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-bold hover:bg-white/5"
          >
            <Phone className="w-5 h-5" />
            Talk to Sales
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <PricingHero />
      <PricingCards />
      <GuaranteesSection />
      <IncludedFeatures />
      <ROICalculator />
      <AddOnsSection />
      <ComparisonTable />
      <EnterpriseSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
