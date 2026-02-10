import { motion } from "framer-motion";
import { 
  CalendarClock, Headphones, Truck, CreditCard, 
  HeartPulse, ShoppingBag, GraduationCap, Building2,
  Phone, MessageSquare, Zap, ArrowRight, Sparkles,
  CheckCircle, Bot, Clock, Globe
} from "lucide-react";
import CardSwap, { SwapCard } from "@/components/ui/card-swap";

// ============================================================================
// CONVERSATIONAL AGENTS SECTION - Industry Use Cases with CardSwap
// Premium design showcasing AI agents across different industries
// ============================================================================

const useCaseCards = [
  {
    id: "scheduling",
    badge: { icon: CalendarClock, label: "Scheduling", gradient: "from-cyan-500/20 to-sky-500/10" },
    title: "Appointment Booking Agents",
    description: "Voice & chat agents that check availability, book slots, send reminders, and handle reschedules automatically.",
    industries: [
      { name: "Healthcare", detail: "Doctor slots · EMR integration · SMS reminders" },
      { name: "Home Services", detail: "Site visits · Lead capture · CRM sync" },
      { name: "Restaurants", detail: "Tables · Party size · Special requests" },
      { name: "Salons & Spas", detail: "Stylist selection · Deposits · Memberships" },
    ],
    footer: { left: "24/7 · Voice & Chat", right: "No-shows ↓ 40% with smart reminders" },
    color: "#06b6d4",
  },
  {
    id: "support",
    badge: { icon: Headphones, label: "Support", gradient: "from-emerald-500/20 to-teal-500/10" },
    title: "Customer Care AI Agent",
    description: "Handles FAQs, order issues, refunds, and returns with policy-aware actions and smart escalation.",
    capabilities: [
      "Understands sentiment & urgency; escalates with full context",
      "Connects to CRM, ticketing, orders, and payments",
      "Generates summaries & disposition codes automatically",
      "Multi-language support with accent detection",
    ],
    footer: { left: "Avg. handle time ↓ 35%", right: "CSAT ↑ with instant responses" },
    color: "#10b981",
  },
  {
    id: "sales",
    badge: { icon: CreditCard, label: "Sales", gradient: "from-purple-500/20 to-pink-500/10" },
    title: "Sales & Lead Qualification",
    description: "Qualify leads, answer product questions, and schedule demos while you sleep.",
    capabilities: [
      "Intelligent lead scoring based on conversation",
      "Product recommendations with upsell/cross-sell logic",
      "Calendar integration for instant demo booking",
      "CRM auto-update with enriched lead data",
    ],
    footer: { left: "Lead response time < 30s", right: "Conversion ↑ 25%" },
    color: "#a855f7",
  },
  {
    id: "logistics",
    badge: { icon: Truck, label: "Logistics", gradient: "from-blue-500/20 to-indigo-500/10" },
    title: "Delivery & Tracking Assistant",
    description: "Real-time order tracking, delivery updates, and exception handling at scale.",
    industries: [
      { name: "E-Commerce", detail: "Order status · Returns · Refunds" },
      { name: "Food Delivery", detail: "ETA updates · Driver coordination" },
      { name: "Freight", detail: "Shipment tracking · POD collection" },
      { name: "Last Mile", detail: "Address changes · Time windows" },
    ],
    footer: { left: "WISMO calls ↓ 60%", right: "Proactive notifications" },
    color: "#3b82f6",
  },
];

// Card Content Component
function UseCaseCard({ card }: { card: typeof useCaseCards[0] }) {
  const BadgeIcon = card.badge.icon;
  
  return (
    <div className="w-full h-full p-6 bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col shadow-2xl shadow-black/50">
      {/* Header */}
      <div>
        <div 
          className={`inline-flex items-center gap-2 rounded-xl px-3 py-1.5 bg-gradient-to-r ${card.badge.gradient} border border-white/10 mb-4`}
        >
          <BadgeIcon className="w-4 h-4" style={{ color: card.color }} />
          <span className="text-xs font-bold uppercase tracking-wider text-white/80">{card.badge.label}</span>
        </div>
        
        <h3 className="text-xl font-bold text-white leading-tight mb-2">
          {card.title}
        </h3>
        
        <p className="text-sm text-zinc-400 leading-relaxed">
          {card.description}
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 mt-4">
        {'industries' in card ? (
          <div className="grid grid-cols-2 gap-2">
            {card.industries.map((industry, i) => (
              <div 
                key={i}
                className="rounded-xl bg-white/5 border border-white/5 p-3 hover:border-white/10 transition-colors"
              >
                <p className="text-sm font-semibold text-white">{industry.name}</p>
                <p className="text-xs text-zinc-500 mt-0.5">{industry.detail}</p>
              </div>
            ))}
          </div>
        ) : (
          <ul className="space-y-2">
            {card.capabilities?.map((cap, i) => (
              <li key={i} className="flex gap-2 text-sm">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: card.color }} />
                <span className="text-zinc-300">{cap}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer */}
      <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
        <span className="text-zinc-400">{card.footer.left}</span>
        <span className="text-zinc-500">{card.footer.right}</span>
      </div>
    </div>
  );
}

// Value Proposition Items
const valueProps = [
  { icon: Bot, text: "Natural dialogue + tool use (APIs, CRMs, calendars)" },
  { icon: Phone, text: "Escalation to human with full context" },
  { icon: MessageSquare, text: "Domain-trained on your SOPs and scripts" },
  { icon: Zap, text: "Realtime analytics & continuous improvement" },
];

export function ConversationalAgentsSection() {
  return (
    <section className="relative min-h-[900px] overflow-hidden py-24 bg-gradient-to-br from-[#0a0a1a] via-[#0f0f2a] to-[#1a0a2e]">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full bg-purple-500/10 blur-[150px]" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Radial gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(6,182,212,.08),transparent_50%),radial-gradient(ellipse_at_80%_70%,rgba(168,85,247,.08),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 mb-6"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">AI Agents</span>
            </motion.div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              Conversational{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                AI Agents
              </span>
              <br />
              <span className="text-zinc-400 text-3xl md:text-4xl lg:text-5xl">for Real-World Businesses</span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-lg text-zinc-400 max-w-xl leading-relaxed">
              Deploy voice & chat agents that book, answer, triage, upsell, and resolve issues 24/7. 
              Our agents plug into your tools and follow your processes to automate the busywork 
              while keeping a human-grade experience.
            </p>

            {/* Value Props Grid */}
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {valueProps.map((prop, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 w-6 h-6 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                    <prop.icon className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <span className="text-sm text-zinc-300">{prop.text}</span>
                </motion.li>
              ))}
            </ul>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-8">
              {[
                { value: "40+", label: "Languages" },
                { value: "<200ms", label: "Response" },
                { value: "99.9%", label: "Uptime" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="text-center"
                >
                  <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400">
                    {stat.value}
                  </p>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10"
            >
              <motion.a
                href="/solutions"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-shadow"
              >
                Explore Solutions
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - CardSwap */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[500px] lg:h-[600px] flex items-center justify-center"
          >
            {/* Glow behind cards */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-[80px]" />
            </div>

            <div className="relative ml-0 lg:ml-20">
              <CardSwap
                width={420}
                height={400}
                cardDistance={40}
                verticalDistance={35}
                delay={5000}
                pauseOnHover={true}
              >
                {useCaseCards.map((card) => (
                  <SwapCard key={card.id}>
                    <UseCaseCard card={card} />
                  </SwapCard>
                ))}
              </CardSwap>
            </div>

            {/* Floating indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-2 rounded-full bg-zinc-900/80 border border-white/10 backdrop-blur-sm"
            >
              <div className="flex gap-1">
                {useCaseCards.map((_, i) => (
                  <div 
                    key={i} 
                    className="w-1.5 h-1.5 rounded-full bg-white/30"
                  />
                ))}
              </div>
              <span className="text-xs text-zinc-400">Auto-rotating</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
