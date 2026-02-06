import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { 
  Check, 
  Minus, 
  HelpCircle, 
  Calculator,
  ShieldCheck,
  Star,
  Zap,
  ChevronDown,
  ArrowRight,
  TrendingUp
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { PricingSlider } from "@/components/ui/pricing-slider";

const tiers = [
  {
    id: "starter",
    name: "Starter",
    price: "0.50",
    description: "Perfect for testing and small businesses.",
    color: "cyan",
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
    id: "professional",
    name: "Professional",
    price: "0.40",
    description: "Best for growing teams and enterprises.",
    color: "magenta",
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
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    description: "Custom solutions for large-scale operations.",
    color: "purple",
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

export default function PricingPage() {
  const [callsPerMonth, setCallsPerMonth] = useState(2500);
  const avgCallLength = 3; 
  const traditionalCost = 2.50; 
  const [activeTier, setActiveTier] = useState("professional");

  const selectedTier = tiers.find(t => t.id === activeTier) || tiers[1];
  const pricePerMin = selectedTier.price === "Custom" ? 0.35 : parseFloat(selectedTier.price);
  
  const lenaCost = callsPerMonth * avgCallLength * pricePerMin;
  const humanCost = callsPerMonth * avgCallLength * traditionalCost;
  const savings = humanCost - lenaCost;

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30 overflow-x-hidden">
      <Navbar />
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
        <div className={`absolute inset-0 bg-gradient-to-br from-${selectedTier.color}-500/10 via-transparent to-transparent transition-colors duration-1000`} />
      </div>

      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionHeader 
            title="Invest in Your Growth" 
            subtitle="Predictable & Scalable"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-zinc-400 text-xl max-w-3xl mx-auto font-light leading-relaxed"
          >
            No connection fees, no hidden costs. Pay only for the minutes Lena is 
            actively helping your customers.
          </motion.p>
        </div>
      </section>

      {/* Interactive Pricing Tiers */}
      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <PricingCard 
                key={index} 
                tier={tier} 
                index={index} 
                isActive={activeTier === tier.id}
                onClick={() => setActiveTier(tier.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Innovative Savings Calculator */}
      <section className="py-32 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="p-12 md:p-20 rounded-[4rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl relative overflow-hidden group shadow-2xl">
            {/* Savings Thermometer */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyan-500/5 to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
                <div>
                  <h2 className="text-4xl font-black mb-4 flex items-center gap-4">
                    <TrendingUp className="w-10 h-10 text-cyan-400" />
                    ROI Engine
                  </h2>
                  <p className="text-zinc-400 text-lg max-w-md">
                    Calculate your monthly savings compared to traditional human-only support.
                  </p>
                </div>
                <div className="p-8 rounded-[2.5rem] bg-cyan-500 text-black flex flex-col items-center justify-center min-w-[240px] shadow-[0_0_50px_rgba(34,211,238,0.3)]">
                  <div className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-70">Monthly Savings</div>
                  <div className="text-4xl font-black">${Math.round(savings).toLocaleString()}</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-7">
                  <div className="mb-12">
                    <div className="flex justify-between items-end mb-4">
                      <label className="text-zinc-300 font-bold uppercase tracking-widest text-xs">Monthly Conversations</label>
                      <span className="text-3xl font-black text-white">{callsPerMonth.toLocaleString()}</span>
                    </div>
                    <PricingSlider 
                      value={callsPerMonth} 
                      onChange={setCallsPerMonth} 
                      max={50000} 
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-8">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                      <div className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-2">Lena Cost</div>
                      <div className="text-2xl font-black text-cyan-400">${Math.round(lenaCost).toLocaleString()}</div>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                      <div className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-2">Human Cost</div>
                      <div className="text-2xl font-black text-zinc-500 line-through">${Math.round(humanCost).toLocaleString()}</div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-5">
                  <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 relative">
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-magenta-500 flex items-center justify-center shadow-lg">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Efficiency Boost</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                      Switching to Asklena doesn't just save money—it increases your capacity 
                      by <span className="text-white font-bold">10,000%</span>, allowing you to handle 
                      infinite concurrent calls without adding staff.
                    </p>
                    <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold">
                      Explore Scale <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs with Smooth Accordion */}
      <section className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader 
            title="Common Inquiries" 
            subtitle="FAQ"
          />
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FaqAccordion key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Security Badges */}
      <section className="py-24 relative z-10 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <ShieldBadge name="SOC 2" />
            <ShieldBadge name="GDPR" />
            <ShieldBadge name="HIPAA" />
            <ShieldBadge name="ISO 27001" />
            <ShieldBadge name="PCI DSS" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function PricingCard({ tier, index, isActive, onClick }: { tier: typeof tiers[0], index: number, isActive: boolean, onClick: () => void }) {
  const colorClass = tier.color === "cyan" ? "cyan-500" : tier.color === "magenta" ? "magenta-500" : "purple-500";
  const borderClass = isActive ? `border-${colorClass}` : "border-white/10";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      viewport={{ once: true }}
      onClick={onClick}
      className={`relative p-10 rounded-[3rem] flex flex-col h-full border-2 cursor-pointer transition-all duration-500 group ${
        isActive 
          ? `bg-gradient-to-br from-${colorClass}/10 via-zinc-900 to-zinc-950 ${borderClass} shadow-2xl scale-[1.02] z-20` 
          : 'bg-zinc-950/50 border-white/5 hover:border-white/20 hover:bg-zinc-900'
      }`}
    >
      {tier.popular && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] px-6 py-2 rounded-full flex items-center gap-2 shadow-2xl">
          <Star className="w-3 h-3 fill-current" /> Most Popular
        </div>
      )}
      
      <div className="mb-10">
        <h3 className="text-3xl font-black mb-2 tracking-tight">{tier.name}</h3>
        <p className="text-zinc-500 text-sm font-light leading-relaxed">{tier.description}</p>
      </div>

      <div className="mb-10">
        <div className="flex items-baseline gap-2">
          <span className="text-6xl font-black tracking-tighter">
            {tier.price === "Custom" ? "" : "$"}{tier.price}
          </span>
          <span className="text-zinc-600 text-sm uppercase tracking-widest font-bold">
            {tier.price === "Custom" ? "Contact Us" : "/ min"}
          </span>
        </div>
        <div className={`mt-4 inline-block px-4 py-1.5 rounded-full bg-${colorClass}/10 text-${colorClass} text-[10px] font-black uppercase tracking-widest border border-${colorClass}/20`}>
          {tier.limit}
        </div>
      </div>

      <div className="space-y-5 mb-12 flex-grow">
        {tier.features.map((feature, i) => (
          <div key={i} className="flex items-center gap-4 group/item">
            <motion.div 
              whileHover={{ scale: 1.2, rotate: 360 }}
              className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                isActive ? `bg-${colorClass} text-black` : 'bg-white/5 text-zinc-500 group-hover/item:bg-white/10'
              }`}
            >
              <Check className="w-3 h-3 stroke-[3]" />
            </motion.div>
            <span className={`text-sm ${isActive ? 'text-zinc-200 font-medium' : 'text-zinc-500'}`}>{feature}</span>
          </div>
        ))}
      </div>

      <button className={`w-full py-5 rounded-2xl font-black text-lg transition-all active:scale-95 ${
        isActive 
          ? `bg-white text-black hover:bg-zinc-100 shadow-xl` 
          : `bg-white/5 text-white border border-white/10 hover:bg-white/10`
      }`}>
        {tier.cta}
      </button>

      {/* Decorative Gradient Glow */}
      <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-${colorClass} blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity`} />
    </motion.div>
  );
}

function FaqAccordion({ faq }: { faq: typeof faqs[0] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`rounded-3xl border transition-all duration-500 ${isOpen ? 'bg-white/[0.05] border-white/20' : 'bg-white/[0.02] border-white/5 hover:border-white/10'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 flex items-center justify-between text-left"
      >
        <span className={`text-xl font-bold transition-colors ${isOpen ? 'text-cyan-400' : 'text-white'}`}>{faq.q}</span>
        <ChevronDown className={`w-6 h-6 text-zinc-500 transition-transform duration-500 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-8 pt-0 text-zinc-400 leading-relaxed font-light text-lg">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ShieldBadge({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-3">
      <ShieldCheck className="w-6 h-6 text-white" />
      <span className="text-xl font-black tracking-tighter text-white">{name}</span>
    </div>
  );
}

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

