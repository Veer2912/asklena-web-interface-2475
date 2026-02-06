import { motion } from "framer-motion";
import { useState } from "react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { 
  Check, 
  Minus, 
  HelpCircle, 
  Calculator,
  ShieldCheck,
  Star
} from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "0.50",
    description: "Perfect for testing and small businesses.",
    features: [
      "Natural Conversations",
      "Standard Response Time",
      "5 Languages",
      "Basic Analytics",
      "Community Support"
    ],
    limit: "Up to 500 mins/mo",
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Professional",
    price: "0.40",
    description: "Best for growing teams and enterprises.",
    features: [
      "Everything in Starter",
      "Priority Response Time (<200ms)",
      "40+ Languages",
      "Advanced CRM Integrations",
      "Emotion Detection",
      "24/7 Priority Support"
    ],
    limit: "Unlimited minutes",
    cta: "Get Started",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Custom solutions for large-scale operations.",
    features: [
      "Everything in Professional",
      "Custom Neural Voice",
      "On-premise Deployment",
      "Dedicated Account Manager",
      "Custom Training & Fine-tuning",
      "SLA Guarantees"
    ],
    limit: "Infinite scale",
    cta: "Contact Sales",
    popular: false
  }
];

const faqs = [
  {
    q: "How does the per-minute billing work?",
    a: "You only pay for the time Lena is actively engaged in a conversation. We bill in 1-second increments, and there are no connection fees."
  },
  {
    q: "Can I change my plan later?",
    a: "Yes, you can upgrade or downgrade your plan at any time through your dashboard. Changes take effect at the start of the next billing cycle."
  },
  {
    q: "Do you offer discounts for high volume?",
    a: "Absolutely. Our Enterprise tier is designed for high-volume users and includes volume-based pricing that scales down as you use more."
  },
  {
    q: "Is there a free trial available?",
    a: "Yes, every new account includes 50 free minutes to test Lena's capabilities and integrations."
  }
];

export default function PricingPage() {
  const [callsPerMonth, setCallsPerMonth] = useState(1000);
  const avgCallLength = 3; // mins
  const traditionalCost = 2.50; // per min for human agent

  const lenaCost = callsPerMonth * avgCallLength * 0.40;
  const humanCost = callsPerMonth * avgCallLength * traditionalCost;
  const savings = humanCost - lenaCost;

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-8 tracking-tight"
          >
            Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Pricing</span>
          </motion.h1>
          <p className="text-zinc-400 text-xl max-w-2xl mx-auto font-light">
            Simple, pay-as-you-go pricing that scales with your business. 
            No hidden fees or long-term commitments.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <PricingCard key={index} tier={tier} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Savings Calculator */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="p-12 rounded-[3rem] bg-zinc-950 border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Calculator className="w-48 h-48" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Calculator className="w-8 h-8 text-cyan-400" />
                See Your Savings
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                  <label className="block text-zinc-400 text-sm mb-4 uppercase tracking-widest font-bold">
                    Calls per month: <span className="text-white ml-2 text-xl">{callsPerMonth.toLocaleString()}</span>
                  </label>
                  <input 
                    type="range" 
                    min="100" 
                    max="50000" 
                    step="100"
                    value={callsPerMonth}
                    onChange={(e) => setCallsPerMonth(parseInt(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-400 mb-8"
                  />
                  
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 italic text-zinc-400 text-sm">
                    "Zeno reduced their customer support costs by 60% within the first 3 months of switching to Lena."
                  </div>
                </div>
                
                <div className="text-center md:text-left">
                  <div className="mb-6">
                    <div className="text-zinc-500 text-xs uppercase tracking-widest font-bold mb-1">Monthly Cost (Traditional)</div>
                    <div className="text-2xl text-zinc-400 line-through">${humanCost.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-zinc-500 text-xs uppercase tracking-widest font-bold mb-1">Monthly Cost (Asklena)</div>
                    <div className="text-5xl font-black text-cyan-400">${lenaCost.toLocaleString()}</div>
                  </div>
                  <div className="mt-8 inline-block px-6 py-3 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 font-bold">
                    Save ${savings.toLocaleString()} / month
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-zinc-950/50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-6 px-4 text-zinc-500 text-sm uppercase tracking-widest">Feature</th>
                  <th className="py-6 px-4 text-white font-bold">Starter</th>
                  <th className="py-6 px-4 text-cyan-400 font-bold">Professional</th>
                  <th className="py-6 px-4 text-white font-bold">Enterprise</th>
                </tr>
              </thead>
              <tbody className="text-zinc-300">
                <ComparisonRow label="Natural Conversations" values={[true, true, true]} />
                <ComparisonRow label="Response Time" values={["Standard", "<200ms", "<200ms"]} />
                <ComparisonRow label="Languages" values={["5", "40+", "Custom"]} />
                <ComparisonRow label="CRM Integrations" values={["Basic", "Full", "Custom"]} />
                <ComparisonRow label="Emotion Detection" values={[false, true, true]} />
                <ComparisonRow label="Custom Training" values={[false, "Standard", "Priority"]} />
                <ComparisonRow label="SSO & Security" values={["Basic", "Enterprise", "Custom"]} />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 p-4 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 mb-8">
            <ShieldCheck className="w-6 h-6" />
            <span className="font-bold">30-Day Money Back Guarantee</span>
          </div>
          <h2 className="text-3xl font-bold mb-6">No Risk, All Reward</h2>
          <p className="text-zinc-400 text-lg font-light">
            If you're not completely satisfied with Lena within the first 30 days, 
            we'll refund your subscription—no questions asked.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-3 text-white">
                  <HelpCircle className="w-5 h-5 text-cyan-400" />
                  {faq.q}
                </h3>
                <p className="text-zinc-400 leading-relaxed font-light">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function PricingCard({ tier, index }: { tier: typeof tiers[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      viewport={{ once: true }}
      className={`relative p-8 rounded-[3rem] flex flex-col h-full border transition-all duration-500 ${
        tier.popular 
          ? 'bg-gradient-to-br from-cyan-500/10 via-zinc-900 to-zinc-950 border-cyan-500/50 shadow-2xl shadow-cyan-500/10' 
          : 'bg-zinc-950 border-white/5 hover:border-white/10'
      }`}
    >
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-black text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full flex items-center gap-1.5">
          <Star className="w-3 h-3 fill-current" /> Most Popular
        </div>
      )}
      
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
        <p className="text-zinc-400 text-sm font-light">{tier.description}</p>
      </div>

      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className="text-5xl font-black">${tier.price}</span>
          <span className="text-zinc-500 text-sm uppercase tracking-widest">/ min</span>
        </div>
        <div className="mt-2 text-cyan-400 text-xs font-bold uppercase tracking-widest">{tier.limit}</div>
      </div>

      <div className="space-y-4 mb-10 flex-grow">
        {tier.features.map((feature, i) => (
          <div key={i} className="flex items-center gap-3 text-sm">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${tier.popular ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/5 text-zinc-500'}`}>
              <Check className="w-3 h-3" />
            </div>
            <span className="text-zinc-300 font-light">{feature}</span>
          </div>
        ))}
      </div>

      <button className={`w-full py-4 rounded-2xl font-black transition-all ${
        tier.popular 
          ? 'bg-cyan-500 text-black hover:bg-cyan-400' 
          : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
      }`}>
        {tier.cta}
      </button>
    </motion.div>
  );
}

function ComparisonRow({ label, values }: { label: string, values: (string | boolean)[] }) {
  return (
    <tr className="border-b border-white/5 hover:bg-white/[0.01] transition-colors">
      <td className="py-6 px-4 text-sm font-medium">{label}</td>
      {values.map((v, i) => (
        <td key={i} className="py-6 px-4">
          {typeof v === 'boolean' ? (
            v ? <Check className="w-5 h-5 text-cyan-400" /> : <Minus className="w-5 h-5 text-zinc-700" />
          ) : (
            <span className={`text-sm ${i === 1 ? 'text-cyan-400 font-bold' : ''}`}>{v}</span>
          )}
        </td>
      ))}
    </tr>
  );
}
