import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { 
  HeartPulse, 
  Truck, 
  Wallet, 
  GraduationCap, 
  Users2, 
  ShoppingBag,
  CheckCircle2,
  TrendingUp,
  BarChart3,
  ArrowRight
} from "lucide-react";
import { useState } from "react";

const solutions = [
  {
    id: "healthcare",
    title: "Healthcare",
    icon: <HeartPulse className="w-12 h-12" />,
    color: "from-cyan-400 to-blue-600",
    bgGradient: "from-cyan-500/10 to-blue-500/5",
    accent: "#06b6d4",
    description: "Scale patient support with AI agents that handle bookings and inquiries with empathy.",
    useCases: [
      "24/7 Appointment Scheduling",
      "Medication Reminders",
      "Insurance Verification",
      "Patient Follow-ups"
    ],
    result: "45% fewer no-shows",
    roi: "3 month ROI",
    impact: "10K+ patients supported"
  },
  {
    id: "logistics",
    title: "Logistics",
    icon: <Truck className="w-12 h-12" />,
    color: "from-blue-400 to-indigo-600",
    bgGradient: "from-blue-500/10 to-indigo-500/5",
    accent: "#3b82f6",
    description: "Automate shipment tracking and delivery coordination at any scale.",
    useCases: [
      "Real-time Tracking Updates",
      "Delivery Coordination",
      "Driver Support",
      "Inventory Status"
    ],
    result: "80% faster updates",
    roi: "60% cost reduction",
    impact: "2M+ deliveries tracked"
  },
  {
    id: "finance",
    title: "Finance",
    icon: <Wallet className="w-12 h-12" />,
    color: "from-purple-400 to-violet-600",
    bgGradient: "from-purple-500/10 to-violet-500/5",
    accent: "#a855f7",
    description: "Secure, compliant voice agents for payments and account support.",
    useCases: [
      "Payment Processing",
      "Account Inquiries",
      "Fraud Verification",
      "Loan Status"
    ],
    result: "99.9% Accuracy",
    roi: "2.5x Collection rate",
    impact: "$500M+ in payments"
  },
  {
    id: "education",
    title: "Education",
    icon: <GraduationCap className="w-12 h-12" />,
    color: "from-emerald-400 to-teal-600",
    bgGradient: "from-emerald-500/10 to-teal-500/5",
    accent: "#10b981",
    description: "Support students and faculty with instant administrative assistance.",
    useCases: [
      "Enrollment Support",
      "Course Scheduling",
      "Financial Aid FAQ",
      "Campus Information"
    ],
    result: "92% Student CSAT",
    roi: "50% fewer tickets",
    impact: "250K+ students served"
  },
  {
    id: "hr",
    title: "HR & Benefits",
    icon: <Users2 className="w-12 h-12" />,
    color: "from-pink-400 to-rose-600",
    bgGradient: "from-pink-500/10 to-rose-500/5",
    accent: "#ec4899",
    description: "Streamline HR operations with intelligent agent support.",
    useCases: [
      "Benefits Enrollment",
      "PTO Requests",
      "Payroll Questions",
      "Policy Inquiries"
    ],
    result: "70% faster resolution",
    roi: "40% fewer HR tickets",
    impact: "50K+ employees supported"
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    icon: <ShoppingBag className="w-12 h-12" />,
    color: "from-orange-400 to-red-600",
    bgGradient: "from-orange-500/10 to-red-500/5",
    accent: "#f97316",
    description: "Boost sales and reduce support burden with conversational AI.",
    useCases: [
      "Order Tracking",
      "Return Support",
      "Product Inquiries",
      "Payment Assistance"
    ],
    result: "35% increase in CSAT",
    roi: "3x ROI within 6 months",
    impact: "100K+ orders/month"
  }
];

// Premium solution card component
function SolutionCard({ 
  solution, 
  isSelected, 
  onClick 
}: { 
  solution: typeof solutions[0]; 
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      className="relative group w-full"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <div className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-500 ${
        isSelected 
          ? `border-white/40 bg-gradient-to-br ${solution.bgGradient}` 
          : "border-white/10 bg-white/[0.02] hover:border-white/20"
      } p-8`}>
        
        {/* Animated background accent */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${solution.color}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isSelected ? 0.05 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Icon with hover effect */}
        <div className={`relative z-10 mb-4 w-16 h-16 rounded-2xl flex items-center justify-center text-white transition-all duration-300 ${
          isSelected 
            ? `bg-gradient-to-br ${solution.color} shadow-[0_8px_32px_rgba(6,182,212,0.3)]`
            : "bg-white/10 group-hover:bg-white/20"
        }`}>
          {solution.icon}
        </div>

        {/* Content */}
        <h3 className="relative z-10 text-2xl font-bold mb-2 text-left group-hover:text-cyan-400 transition-colors">
          {solution.title}
        </h3>
        <p className="relative z-10 text-zinc-400 text-sm text-left line-clamp-2">
          {solution.description}
        </p>

        {/* Arrow indicator */}
        <motion.div
          className="relative z-10 mt-4 flex justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isSelected ? 1 : 0.5 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">
            {solution.impact}
          </span>
          <motion.div
            animate={{ x: isSelected ? 4 : 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </motion.div>
        </motion.div>
      </div>
    </motion.button>
  );
}

// Metrics display component
function MetricsDisplay({ solution }: { solution: typeof solutions[0] }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {[
        { label: "Key Result", value: solution.result },
        { label: "ROI", value: solution.roi },
        { label: "Scale", value: solution.impact }
      ].map((metric, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
          className="p-4 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10"
        >
          <p className="text-xs font-semibold text-zinc-500 uppercase mb-1">{metric.label}</p>
          <p className="text-lg font-bold text-cyan-400">{metric.value}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default function SolutionsPage() {
  const [selectedSolution, setSelectedSolution] = useState(solutions[0]);

  return (
    <main className="min-h-screen bg-[#0a0e27] text-white selection:bg-cyan-500/30 overflow-x-hidden">
      <Navbar />

      {/* Premium Hero Section */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-cyan-500/15 blur-[120px]"
            animate={{ y: [0, 30, 0], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-purple-500/15 blur-[120px]"
            animate={{ y: [0, -30, 0], opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/50 text-sm font-semibold text-cyan-400 mb-6">
              ✨ INDUSTRY SOLUTIONS
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.2]">
              Lena Powers Every{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Industry
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-4xl mx-auto">
              From healthcare to e-commerce, Lena delivers proven results across 6 major industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid & Details */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Solutions List */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 space-y-4"
            >
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <SolutionCard
                    solution={solution}
                    isSelected={selectedSolution.id === solution.id}
                    onClick={() => setSelectedSolution(solution)}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Details Panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedSolution.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  {/* Header */}
                  <div>
                    <div className={`inline-flex items-center gap-4 mb-6 p-4 rounded-2xl bg-gradient-to-br ${selectedSolution.bgGradient} border border-white/10`}>
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedSolution.color} flex items-center justify-center text-white`}>
                        {selectedSolution.icon}
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold">{selectedSolution.title}</h2>
                        <p className="text-zinc-400 text-sm">{selectedSolution.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <MetricsDisplay solution={selectedSolution} />

                  {/* Use Cases */}
                  <div>
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                      <span className={`w-1 h-6 rounded-full bg-gradient-to-b ${selectedSolution.color}`} />
                      Key Use Cases
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {selectedSolution.useCases.map((useCase, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-3 p-4 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all"
                        >
                          <CheckCircle2 className={`w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r ${selectedSolution.color} flex-shrink-0 mt-0.5`} />
                          <span className="text-sm font-medium text-zinc-300">{useCase}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 rounded-xl font-bold text-lg bg-gradient-to-r ${selectedSolution.color} text-white shadow-[0_8px_32px_rgba(6,182,212,0.2)] hover:shadow-[0_12px_48px_rgba(6,182,212,0.4)] transition-all flex items-center justify-center gap-2`}
                  >
                    Schedule Demo
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Trusted by <span className="text-cyan-400">Enterprise Leaders</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "Active Deployments", value: "147+" },
              { label: "Conversations/Year", value: "10M+" },
              { label: "Industries Served", value: "6" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-white/20 transition-all"
              >
                <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
                  {stat.value}
                </p>
                <p className="text-zinc-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
