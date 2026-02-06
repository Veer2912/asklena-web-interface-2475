import { motion } from "framer-motion";
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
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Starter",
    price: "$0.50",
    description: "Ideal for testing and early stage startups.",
    features: [
      "Natural Conversations",
      "5 Concurrent Calls",
      "10 Languages",
      "Email Support",
      "Standard Latency"
    ],
    cta: "Start Free Trial",
    highlight: false
  },
  {
    name: "Professional",
    price: "$0.40",
    description: "Best for growing teams and scaling operations.",
    features: [
      "Everything in Starter",
      "100 Concurrent Calls",
      "40+ Languages",
      "Priority Support",
      "Sub-200ms Latency",
      "Custom Knowledge Base"
    ],
    cta: "Get Started",
    highlight: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations with high-volume needs.",
    features: [
      "Everything in Professional",
      "Unlimited Concurrent Calls",
      "Custom Neural Voice",
      "SLA Guarantees",
      "Dedicated Account Manager",
      "White-glove Onboarding"
    ],
    cta: "Contact Sales",
    highlight: false
  }
];

const comparisons = [
  { feature: "Natural Conversations", starter: true, pro: true, enterprise: true },
  { feature: "Languages", starter: "10", pro: "40+", enterprise: "Custom" },
  { feature: "Concurrent Calls", starter: "5", pro: "100", enterprise: "Unlimited" },
  { feature: "Response Time", starter: "Standard", pro: "<200ms", enterprise: "Lowest" },
  { feature: "Analytics", starter: "Basic", pro: "Advanced", enterprise: "Custom" },
  { feature: "Custom Voice", starter: false, pro: false, enterprise: true },
  { feature: "Security", starter: "Standard", pro: "SOC 2/GDPR", enterprise: "Full Compliance" },
];

export default function PricingPage() {
  const [callVolume, setCallVolume] = useState(5000);
  const costPerMinute = 0.40;
  const humanAgentCost = 2.50;
  const savings = (humanAgentCost - costPerMinute) * callVolume;

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
              Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Pricing</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Choose the plan that's right for your business. All plans include our core human-sounding AI technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {tiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative p-8 rounded-[2.5rem] border ${
                  tier.highlight 
                  ? "bg-white/[0.05] border-cyan-500/50 shadow-[0_0_40px_rgba(6,182,212,0.1)]" 
                  : "bg-white/[0.02] border-white/10"
                } hover:scale-[1.02] transition-all duration-300 flex flex-col`}
              >
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-cyan-500 text-black text-[10px] font-black uppercase tracking-widest rounded-full">
                    Recommended
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-5xl font-bold">{tier.price}</span>
                    {tier.price !== "Custom" && <span className="text-zinc-500 font-medium">/ min</span>}
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">{tier.description}</p>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full h-14 rounded-2xl font-bold text-lg ${
                    tier.highlight 
                    ? "bg-cyan-500 hover:bg-cyan-400 text-black" 
                    : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                  }`}
                >
                  {tier.cta}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* ROI Calculator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[3rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 mb-24"
          >
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Calculate Your ROI</h2>
                <p className="text-zinc-400">See how much you can save by switching from traditional human agents to Lena.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-8">
                    <div className="flex justify-between items-end mb-4">
                      <label className="text-zinc-300 font-bold uppercase tracking-widest text-xs">Monthly Minutes</label>
                      <span className="text-3xl font-bold text-cyan-400">{callVolume.toLocaleString()}</span>
                    </div>
                    <input 
                      type="range" 
                      min="1000" 
                      max="100000" 
                      step="1000"
                      value={callVolume}
                      onChange={(e) => setCallVolume(parseInt(e.target.value))}
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                      <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-1">Lena Cost</div>
                      <div className="text-xl font-bold">${(callVolume * costPerMinute).toLocaleString()}</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                      <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-1">Human Cost</div>
                      <div className="text-xl font-bold text-zinc-500 line-through">${(callVolume * humanAgentCost).toLocaleString()}</div>
                    </div>
                  </div>
                </div>

                <div className="text-center md:text-left p-8 rounded-3xl bg-cyan-500 text-black shadow-[0_0_40px_rgba(6,182,212,0.3)]">
                  <div className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-70">Annual Savings</div>
                  <div className="text-5xl font-black mb-4">${Math.round(savings * 12).toLocaleString()}</div>
                  <p className="text-sm font-medium opacity-80">Lena enables you to scale without linearly increasing your overhead costs.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Compare Plans</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-zinc-400 text-sm uppercase tracking-widest font-bold">
                  <th className="py-6 px-4 text-left">Feature</th>
                  <th className="py-6 px-4 text-center">Starter</th>
                  <th className="py-6 px-4 text-center">Professional</th>
                  <th className="py-6 px-4 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody className="text-zinc-300">
                {comparisons.map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-6 px-4 font-medium">{row.feature}</td>
                    <td className="py-6 px-4 text-center">
                      {typeof row.starter === 'boolean' ? (row.starter ? <Check className="mx-auto text-cyan-400" /> : <span className="text-zinc-700">—</span>) : row.starter}
                    </td>
                    <td className="py-6 px-4 text-center">
                      {typeof row.pro === 'boolean' ? (row.pro ? <Check className="mx-auto text-cyan-400" /> : <span className="text-zinc-700">—</span>) : row.pro}
                    </td>
                    <td className="py-6 px-4 text-center">
                      {typeof row.enterprise === 'boolean' ? (row.enterprise ? <Check className="mx-auto text-cyan-400" /> : <span className="text-zinc-700">—</span>) : row.enterprise}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

