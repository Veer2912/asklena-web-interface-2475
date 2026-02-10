import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { useState } from "react";
import { 
  HeartPulse, Truck, Building2, GraduationCap, Users2, ShoppingBag,
  CheckCircle, ArrowRight, Globe2, Layers, Zap, Phone, TrendingUp,
  Clock, Shield, BarChart3, Sparkles, Play, Target, Award, Users,
  MessageSquare, Headphones, Star, Quote, ChevronLeft, ChevronRight,
  PhoneIncoming, PhoneOutgoing, Bot, Workflow, Settings, LineChart
} from "lucide-react";

// ============================================================================
// SOLUTIONS PAGE - Industry-specific solutions with detailed showcases
// ============================================================================

const solutions = [
  {
    id: "healthcare",
    title: "Healthcare",
    icon: HeartPulse,
    color: "#06b6d4",
    gradient: "from-cyan-500 to-blue-600",
    tagline: "HIPAA-compliant voice agents for patient care",
    description: "Transform patient communication with AI agents that handle appointments, reminders, insurance verification, and follow-ups—all while maintaining strict healthcare compliance.",
    useCases: [
      { title: "Appointment Scheduling", desc: "24/7 booking and rescheduling" },
      { title: "Medication Reminders", desc: "Proactive health management calls" },
      { title: "Insurance Verification", desc: "Real-time eligibility checks" },
      { title: "Patient Follow-ups", desc: "Post-visit care coordination" },
    ],
    stats: { calls: "500K+", satisfaction: "96%", reduction: "45%" },
    testimonial: {
      quote: "Lena reduced our no-show rate by 40% and freed up staff for patient care.",
      author: "Dr. Sarah Chen",
      role: "Chief Medical Officer, CityHealth",
    },
  },
  {
    id: "logistics",
    title: "Logistics",
    icon: Truck,
    color: "#3b82f6",
    gradient: "from-blue-500 to-indigo-600",
    tagline: "Real-time tracking and delivery coordination",
    description: "Keep customers informed and drivers supported with voice agents that provide instant shipment updates, handle delivery changes, and coordinate logistics at scale.",
    useCases: [
      { title: "Shipment Tracking", desc: "Real-time package location" },
      { title: "Delivery Coordination", desc: "Address changes and rescheduling" },
      { title: "Driver Support", desc: "Route assistance and dispatch" },
      { title: "Inventory Status", desc: "Stock level inquiries" },
    ],
    stats: { calls: "2M+", satisfaction: "94%", reduction: "60%" },
    testimonial: {
      quote: "Our customer service costs dropped 60% while satisfaction increased.",
      author: "Mike Rodriguez",
      role: "VP Operations, FastShip",
    },
  },
  {
    id: "finance",
    title: "Financial Services",
    icon: Building2,
    color: "#a855f7",
    gradient: "from-purple-500 to-violet-600",
    tagline: "Secure, compliant voice agents for banking",
    description: "Handle sensitive financial inquiries with AI agents built for security. From account balances to fraud alerts, deliver instant support while meeting regulatory requirements.",
    useCases: [
      { title: "Account Inquiries", desc: "Balance and transaction history" },
      { title: "Payment Processing", desc: "Bill pay and transfers" },
      { title: "Fraud Detection", desc: "Suspicious activity alerts" },
      { title: "Loan Status", desc: "Application tracking" },
    ],
    stats: { calls: "1.2M+", satisfaction: "98%", reduction: "55%" },
    testimonial: {
      quote: "PCI-compliant from day one. Our security team was impressed.",
      author: "Jennifer Park",
      role: "CISO, SecureBank",
    },
  },
  {
    id: "education",
    title: "Education",
    icon: GraduationCap,
    color: "#10b981",
    gradient: "from-emerald-500 to-teal-600",
    tagline: "Student and faculty support at scale",
    description: "Support students, parents, and faculty with AI agents that handle enrollment questions, scheduling, financial aid inquiries, and campus information around the clock.",
    useCases: [
      { title: "Enrollment Support", desc: "Application guidance" },
      { title: "Course Scheduling", desc: "Registration assistance" },
      { title: "Financial Aid", desc: "FAFSA and scholarship info" },
      { title: "Campus Info", desc: "Events and resources" },
    ],
    stats: { calls: "300K+", satisfaction: "92%", reduction: "50%" },
    testimonial: {
      quote: "Students get answers instantly instead of waiting in long lines.",
      author: "Prof. David Kim",
      role: "Dean of Students, State University",
    },
  },
  {
    id: "hr",
    title: "HR & Recruitment",
    icon: Users2,
    color: "#ec4899",
    gradient: "from-pink-500 to-rose-600",
    tagline: "Streamline HR operations with AI",
    description: "Let voice agents handle routine HR inquiries so your team can focus on people. From benefits questions to PTO requests, automate the repetitive while keeping it personal.",
    useCases: [
      { title: "Benefits Enrollment", desc: "Open enrollment support" },
      { title: "PTO Requests", desc: "Leave balance and booking" },
      { title: "Payroll Questions", desc: "Stub and deduction info" },
      { title: "Policy Inquiries", desc: "Handbook navigation" },
    ],
    stats: { calls: "800K+", satisfaction: "95%", reduction: "70%" },
    testimonial: {
      quote: "Our HR team finally has time for strategic initiatives.",
      author: "Lisa Thompson",
      role: "CHRO, TechCorp",
    },
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    icon: ShoppingBag,
    color: "#f59e0b",
    gradient: "from-amber-500 to-orange-600",
    tagline: "Convert more and support better",
    description: "Turn support calls into sales opportunities. Voice agents that handle orders, returns, and product questions while identifying upsell opportunities and recovering abandoned carts.",
    useCases: [
      { title: "Order Tracking", desc: "Shipment status updates" },
      { title: "Returns & Exchanges", desc: "Hassle-free processing" },
      { title: "Product Questions", desc: "Sizing, specs, availability" },
      { title: "Cart Recovery", desc: "Proactive outreach" },
    ],
    stats: { calls: "3M+", satisfaction: "93%", reduction: "40%" },
    testimonial: {
      quote: "Cart recovery calls increased our conversion by 25%.",
      author: "Alex Chen",
      role: "CEO, TrendyShop",
    },
  },
];

const benefits = [
  { icon: Clock, title: "Deploy in Days", desc: "Not months. Get live in under a week." },
  { icon: TrendingUp, title: "Instant ROI", desc: "See cost savings from day one." },
  { icon: Shield, title: "Compliance Built-in", desc: "HIPAA, PCI, GDPR ready." },
  { icon: BarChart3, title: "Full Analytics", desc: "Every call, measured and analyzed." },
];

const agentTypes = [
  {
    type: "inbound",
    icon: PhoneIncoming,
    title: "Inbound Agents",
    description: "Handle incoming customer calls with intelligent routing, instant responses, and seamless escalation.",
    features: [
      "24/7 availability",
      "Intelligent call routing",
      "Context-aware responses",
      "Seamless human handoff",
    ],
    color: "#06b6d4",
  },
  {
    type: "outbound",
    icon: PhoneOutgoing,
    title: "Outbound Agents",
    description: "Proactive outreach for sales, reminders, surveys, and follow-ups at scale.",
    features: [
      "Campaign management",
      "Appointment reminders",
      "Lead qualification",
      "Survey collection",
    ],
    color: "#a855f7",
  },
];

const customerLogos = [
  "Acme Corp", "TechFlow", "GlobalMed", "FastShip", "SecureBank", "EduPro",
  "RetailMax", "CloudFirst", "DataSync", "HealthPlus", "LogiTech", "FinServ"
];

const caseStudies = [
  {
    company: "CityHealth Medical",
    industry: "Healthcare",
    metric: "40%",
    improvement: "Reduction in No-Shows",
    description: "Implemented AI voice agents for appointment reminders and saw a 40% decrease in missed appointments within 3 months.",
    icon: HeartPulse,
    color: "#06b6d4",
  },
  {
    company: "FastShip Logistics",
    industry: "Logistics",
    metric: "60%",
    improvement: "Cost Reduction",
    description: "Replaced their call center with AI agents, handling 2M+ calls monthly while cutting operational costs by 60%.",
    icon: Truck,
    color: "#3b82f6",
  },
  {
    company: "SecureBank",
    industry: "Finance",
    metric: "98%",
    improvement: "Customer Satisfaction",
    description: "Deployed fraud detection voice alerts, achieving 98% customer satisfaction and preventing $2M in fraud.",
    icon: Building2,
    color: "#a855f7",
  },
];

// Hero Section
function SolutionsHero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[200px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[200px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-sm font-semibold text-purple-400 mb-6"
        >
          <Globe2 className="w-4 h-4" />
          INDUSTRY SOLUTIONS
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-white mb-6"
        >
          Built for Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
            Industry
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12"
        >
          Pre-trained voice agents with domain expertise. Deploy faster with 
          industry-specific knowledge built in.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {benefits.map((benefit, i) => (
            <div 
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
            >
              <benefit.icon className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-zinc-300">{benefit.title}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Agent Types Section
function AgentTypesSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-bold text-cyan-400 mb-4"
          >
            <Bot className="w-3 h-3" />
            AGENT TYPES
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Inbound & Outbound{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Voice Agents
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 max-w-2xl mx-auto"
          >
            Whether you're receiving customer calls or proactively reaching out, 
            our AI agents handle it all.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {agentTypes.map((agent, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div 
                className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity"
                style={{ backgroundColor: `${agent.color}20` }}
              />
              
              <div 
                className="relative p-8 rounded-3xl border backdrop-blur-xl h-full"
                style={{ 
                  background: `linear-gradient(135deg, ${agent.color}10, transparent)`,
                  borderColor: `${agent.color}30`,
                }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${agent.color}20` }}
                  >
                    <agent.icon className="w-8 h-8" style={{ color: agent.color }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{agent.title}</h3>
                    <p className="text-sm text-zinc-400">{agent.description}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {agent.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: agent.color }} />
                      <span className="text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Solution Card
function SolutionCard({ 
  solution, 
  isActive, 
  onClick 
}: { 
  solution: typeof solutions[0];
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = solution.icon;
  
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`w-full text-left p-5 rounded-2xl border transition-all ${
        isActive
          ? ""
          : "border-white/10 bg-white/5 hover:border-white/20"
      }`}
      style={isActive ? {
        background: `linear-gradient(135deg, ${solution.color}15, transparent)`,
        borderColor: `${solution.color}50`,
        boxShadow: `0 0 30px ${solution.color}20`,
      } : {}}
    >
      <div className="flex items-center gap-4">
        <div 
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${solution.color}20` }}
        >
          <Icon className="w-6 h-6" style={{ color: solution.color }} />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-white">{solution.title}</h3>
          <p className="text-xs text-zinc-500">{solution.stats.calls} calls handled</p>
        </div>
        {isActive && (
          <div 
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: solution.color }}
          />
        )}
      </div>
    </motion.button>
  );
}

// Solution Detail Panel
function SolutionDetail({ solution }: { solution: typeof solutions[0] }) {
  const Icon = solution.icon;
  
  return (
    <motion.div
      key={solution.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="h-full"
    >
      {/* Header */}
      <div className="flex items-start gap-6 mb-8">
        <motion.div
          animate={{ boxShadow: `0 0 40px ${solution.color}50` }}
          className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center`}
        >
          <Icon className="w-10 h-10 text-white" />
        </motion.div>
        <div>
          <span 
            className="text-xs font-bold uppercase tracking-widest mb-2 block"
            style={{ color: solution.color }}
          >
            {solution.tagline}
          </span>
          <h2 className="text-3xl font-bold text-white">{solution.title}</h2>
        </div>
      </div>

      <p className="text-zinc-400 mb-8">{solution.description}</p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: "Calls Handled", value: solution.stats.calls },
          { label: "Satisfaction", value: solution.stats.satisfaction },
          { label: "Cost Reduction", value: solution.stats.reduction },
        ].map((stat, i) => (
          <div
            key={i}
            className="p-4 rounded-xl text-center"
            style={{
              backgroundColor: `${solution.color}10`,
              borderColor: `${solution.color}20`,
            }}
          >
            <p className="text-2xl font-black" style={{ color: solution.color }}>
              {stat.value}
            </p>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Use Cases */}
      <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4">
        Key Use Cases
      </h4>
      <div className="grid grid-cols-2 gap-3 mb-8">
        {solution.useCases.map((useCase, i) => (
          <div
            key={i}
            className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
          >
            <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: solution.color }} />
            <div>
              <h5 className="font-bold text-white text-sm">{useCase.title}</h5>
              <p className="text-xs text-zinc-500">{useCase.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonial */}
      <div 
        className="p-6 rounded-2xl border"
        style={{ 
          backgroundColor: `${solution.color}05`,
          borderColor: `${solution.color}20`,
        }}
      >
        <p className="text-zinc-300 italic mb-4">"{solution.testimonial.quote}"</p>
        <div className="flex items-center gap-3">
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
            style={{ backgroundColor: solution.color }}
          >
            {solution.testimonial.author[0]}
          </div>
          <div>
            <p className="font-bold text-white text-sm">{solution.testimonial.author}</p>
            <p className="text-xs text-zinc-500">{solution.testimonial.role}</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <motion.a
        href="/pricing"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`mt-8 w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 bg-gradient-to-r ${solution.gradient} text-white`}
      >
        <Play className="w-5 h-5" />
        Deploy {solution.title} Agent
      </motion.a>
    </motion.div>
  );
}

// Solutions Explorer
function SolutionsExplorer() {
  const [activeSolution, setActiveSolution] = useState(solutions[0]);

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Industry Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 max-w-2xl mx-auto"
          >
            Pre-configured voice agents for every major industry vertical
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Solution selector */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4 px-1">
              Select Industry
            </h3>
            {solutions.map((solution) => (
              <SolutionCard
                key={solution.id}
                solution={solution}
                isActive={activeSolution.id === solution.id}
                onClick={() => setActiveSolution(solution)}
              />
            ))}
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-2">
            <div className="p-8 rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-xl h-full">
              <AnimatePresence mode="wait">
                <SolutionDetail solution={activeSolution} />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Case Studies Section
function CaseStudiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-bold text-purple-400 mb-4"
          >
            <Award className="w-3 h-3" />
            CASE STUDIES
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Real Results from{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Real Customers
            </span>
          </motion.h2>
        </div>

        {/* Case study cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {caseStudies.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setActiveIndex(i)}
              className={`p-6 rounded-2xl border cursor-pointer transition-all ${
                activeIndex === i 
                  ? '' 
                  : 'border-white/10 bg-white/5 hover:border-white/20'
              }`}
              style={activeIndex === i ? {
                background: `linear-gradient(135deg, ${study.color}15, transparent)`,
                borderColor: `${study.color}50`,
                boxShadow: `0 0 30px ${study.color}20`,
              } : {}}
            >
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${study.color}20` }}
                >
                  <study.icon className="w-5 h-5" style={{ color: study.color }} />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{study.company}</p>
                  <p className="text-xs text-zinc-500">{study.industry}</p>
                </div>
              </div>
              
              <div className="mb-3">
                <p className="text-4xl font-black" style={{ color: study.color }}>{study.metric}</p>
                <p className="text-sm text-zinc-400">{study.improvement}</p>
              </div>
              
              <p className="text-sm text-zinc-500">{study.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Deployment Process Section - Immersive Launch Sequence
function DeploymentProcess() {
  const [activePhase, setActivePhase] = useState(0);
  const [isLaunched, setIsLaunched] = useState(false);

  const phases = [
    { 
      phase: "T-4",
      title: "Discovery", 
      subtitle: "Mission Briefing",
      desc: "30-minute strategy call to map your voice AI objectives",
      duration: "30 min",
      color: "#06b6d4",
      details: ["Understand your call flow", "Identify automation opportunities", "Define success metrics"],
    },
    { 
      phase: "T-3",
      title: "Configure", 
      subtitle: "Systems Check",
      desc: "Train your AI agent with your brand voice and knowledge base",
      duration: "1-2 days",
      color: "#8b5cf6",
      details: ["Upload training data", "Customize responses", "Set business rules"],
    },
    { 
      phase: "T-2",
      title: "Integrate", 
      subtitle: "Final Connections",
      desc: "Connect to your CRM, phone system, and existing tools",
      duration: "1-2 days",
      color: "#ec4899",
      details: ["API integrations", "Phone number setup", "Testing & QA"],
    },
    { 
      phase: "T-1",
      title: "Launch", 
      subtitle: "Liftoff",
      desc: "Go live with 24/7 monitoring and dedicated support",
      duration: "Same day",
      color: "#10b981",
      details: ["Production deployment", "Real-time monitoring", "Ongoing optimization"],
    },
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Central glow */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: `radial-gradient(circle, ${phases[activePhase].color}15 0%, transparent 70%)`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `linear-gradient(${phases[activePhase].color} 1px, transparent 1px), linear-gradient(90deg, ${phases[activePhase].color} 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
          }}
        />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: phases[activePhase].color,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-5 h-5 text-cyan-400" />
            </motion.div>
            <span className="text-sm font-bold text-white uppercase tracking-widest">Launch Sequence</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight"
          >
            Go Live in{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Under a Week
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </motion.h2>
        </div>

        {/* Main Content - Centered Launch Visualization */}
        <div className="relative">
          {/* Central Countdown Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mb-12"
          >
            <div className="relative">
              {/* Outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `conic-gradient(from 0deg, ${phases[0].color}, ${phases[1].color}, ${phases[2].color}, ${phases[3].color}, ${phases[0].color})`,
                  padding: '3px',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-black" />
              </motion.div>
              
              {/* Main countdown box */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-zinc-950 border border-white/10 flex flex-col items-center justify-center">
                <motion.p
                  key={activePhase}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, ${phases[activePhase].color}, ${phases[activePhase].color}80)`,
                  }}
                >
                  {phases[activePhase].phase}
                </motion.p>
                <motion.p
                  key={`title-${activePhase}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-lg md:text-xl font-bold text-white mt-2"
                >
                  {phases[activePhase].title}
                </motion.p>
                <motion.p
                  key={`sub-${activePhase}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-sm text-zinc-500 uppercase tracking-wider"
                >
                  {phases[activePhase].subtitle}
                </motion.p>
                
                {/* Duration badge */}
                <motion.div
                  key={`dur-${activePhase}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute -bottom-4 px-4 py-2 rounded-full bg-zinc-900 border border-white/20"
                >
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" style={{ color: phases[activePhase].color }} />
                    <span className="text-sm font-bold text-white">{phases[activePhase].duration}</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Phase Selector - Horizontal Pills */}
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {phases.map((phase, i) => (
              <motion.button
                key={i}
                onClick={() => setActivePhase(i)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-6 py-3 rounded-2xl font-bold transition-all ${
                  activePhase === i 
                    ? 'text-white' 
                    : 'text-zinc-400 hover:text-white bg-zinc-900/50 border border-white/5 hover:border-white/10'
                }`}
                style={{
                  backgroundColor: activePhase === i ? `${phase.color}20` : undefined,
                  borderColor: activePhase === i ? `${phase.color}50` : undefined,
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span 
                    className="w-2 h-2 rounded-full"
                    style={{ 
                      backgroundColor: activePhase === i ? phase.color : 'currentColor',
                      boxShadow: activePhase === i ? `0 0 10px ${phase.color}` : 'none'
                    }}
                  />
                  {phase.phase}
                  <span className="hidden sm:inline">• {phase.title}</span>
                </span>
                
                {activePhase === i && (
                  <motion.div
                    layoutId="activePhase"
                    className="absolute inset-0 rounded-2xl -z-0"
                    style={{
                      background: `linear-gradient(135deg, ${phase.color}15, transparent)`,
                      border: `1px solid ${phase.color}30`,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Phase Details Panel */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhase}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative p-8 rounded-3xl overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${phases[activePhase].color}08, transparent)`,
                  border: `1px solid ${phases[activePhase].color}20`,
                }}
              >
                {/* Decorative corner accent */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 opacity-20"
                  style={{
                    background: `radial-gradient(circle at top right, ${phases[activePhase].color}, transparent)`,
                  }}
                />
                
                <p className="text-lg md:text-xl text-zinc-300 mb-6 max-w-xl">
                  {phases[activePhase].desc}
                </p>
                
                <div className="grid sm:grid-cols-3 gap-4">
                  {phases[activePhase].details.map((detail, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5"
                    >
                      <CheckCircle 
                        className="w-5 h-5 flex-shrink-0" 
                        style={{ color: phases[activePhase].color }}
                      />
                      <span className="text-sm text-white font-medium">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Progress Bar */}
          <div className="max-w-3xl mx-auto mt-8">
            <div className="flex items-center gap-4">
              <span className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Day 1</span>
              <div className="flex-1 h-2 bg-zinc-900 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${phases[0].color}, ${phases[1].color}, ${phases[2].color}, ${phases[3].color})`,
                  }}
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${((activePhase + 1) / phases.length) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <span className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Day 5</span>
            </div>
          </div>

          {/* Comparison Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <div className="inline-flex items-center gap-6 md:gap-10 px-8 py-5 rounded-2xl bg-zinc-900/80 border border-white/10 backdrop-blur-sm">
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400">5</p>
                <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Days with Asklena</p>
              </div>
              <div className="flex flex-col items-center">
                <ArrowRight className="w-6 h-6 text-zinc-600 rotate-180 md:rotate-0" />
                <span className="text-[10px] text-zinc-600 uppercase mt-1">vs</span>
              </div>
              <div className="text-center opacity-50">
                <p className="text-4xl md:text-5xl font-black text-zinc-600 line-through">30+</p>
                <p className="text-xs text-zinc-600 uppercase tracking-wider mt-1">Days typical</p>
              </div>
              <div className="pl-6 border-l border-white/10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30"
                >
                  <span className="text-lg font-black text-green-400">6x</span>
                  <span className="text-sm font-bold text-green-400/80 ml-1">Faster</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(6, 182, 212, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold text-lg shadow-2xl shadow-cyan-500/25 transition-all"
          >
            <Zap className="w-5 h-5" />
            Start Your Launch Sequence
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </motion.a>
          <p className="text-sm text-zinc-500 mt-4">No commitment required • 30 min discovery call</p>
        </motion.div>
      </div>
    </section>
  );
}

// Trusted By Section
function TrustedBySection() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm text-zinc-500 uppercase tracking-widest mb-8">
          Trusted by Industry Leaders
        </p>
        
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          {customerLogos.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="text-xl font-bold text-zinc-700 hover:text-zinc-500 transition-colors"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Custom Solution CTA
function CustomSolutionCTA() {
  return (
    <section className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center p-12 rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-pink-500/10"
      >
        <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Don't See Your Industry?
        </h2>
        <p className="text-lg text-zinc-400 mb-8">
          We build custom voice agents for any vertical. Let's discuss your specific needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold shadow-lg"
          >
            <Phone className="w-5 h-5" />
            Schedule Consultation
          </motion.a>
          <motion.a
            href="/pricing"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-bold hover:bg-white/5"
          >
            View Pricing
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <SolutionsHero />
      <AgentTypesSection />
      <SolutionsExplorer />
      <CaseStudiesSection />
      <DeploymentProcess />
      <TrustedBySection />
      <CustomSolutionCTA />
      <Footer />
    </main>
  );
}
