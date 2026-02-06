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
  BarChart3
} from "lucide-react";
import { useState } from "react";

const solutions = [
  {
    id: "healthcare",
    title: "Healthcare",
    icon: <HeartPulse className="w-10 h-10" />,
    color: "cyan",
    accent: "#06b6d4",
    description: "Scale patient support with AI agents that handle bookings and inquiries with empathy.",
    useCases: [
      "24/7 Appointment Scheduling",
      "Medication Reminders",
      "Insurance Verification",
      "Patient Follow-ups"
    ],
    result: "45% fewer no-shows",
    roi: "3 month ROI"
  },
  {
    id: "logistics",
    title: "Logistics",
    icon: <Truck className="w-10 h-10" />,
    color: "blue",
    accent: "#3b82f6",
    description: "Automate shipment tracking and delivery coordination at any scale.",
    useCases: [
      "Real-time Tracking Updates",
      "Delivery Coordination",
      "Driver Support",
      "Inventory Status"
    ],
    result: "80% faster updates",
    roi: "60% cost reduction"
  },
  {
    id: "finance",
    title: "Finance",
    icon: <Wallet className="w-10 h-10" />,
    color: "purple",
    accent: "#a855f7",
    description: "Secure, compliant voice agents for payments and account support.",
    useCases: [
      "Payment Processing",
      "Account Inquiries",
      "Fraud Verification",
      "Loan Status"
    ],
    result: "99.9% Accuracy",
    roi: "2.5x Collection rate"
  },
  {
    id: "education",
    title: "Education",
    icon: <GraduationCap className="w-10 h-10" />,
    color: "emerald",
    accent: "#10b981",
    description: "Support students and faculty with instant administrative assistance.",
    useCases: [
      "Enrollment Support",
      "Course Scheduling",
      "Financial Aid FAQ",
      "Campus Information"
    ],
    result: "92% Student CSAT",
    roi: "50% fewer tickets"
  },
  {
    id: "hr",
    title: "HR & Recruitment",
    icon: <Users2 className="w-10 h-10" />,
    color: "rose",
    accent: "#f43f5e",
    description: "Accelerate hiring with automated screening and interview scheduling.",
    useCases: [
      "Candidate Screening",
      "Interview Scheduling",
      "Onboarding FAQ",
      "Benefits Support"
    ],
    result: "70% faster hiring",
    roi: "20hrs/week saved"
  },
  {
    id: "ecommerce",
    title: "Ecommerce",
    icon: <ShoppingBag className="w-10 h-10" />,
    color: "amber",
    accent: "#f59e0b",
    description: "Drive sales and handle order support across all timezones.",
    useCases: [
      "Order Status Support",
      "Product Recommendations",
      "Returns Processing",
      "Loyalty Program"
    ],
    result: "25% more upsells",
    roi: "15% higher LTV"
  }
];

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState(solutions[0].id);
  const activeSolution = solutions.find(s => s.id === activeTab)!;

  return (
    <main className="min-h-screen bg-[#0a0e27] text-white selection:bg-cyan-500/30 overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Solutions</span> for Every Industry
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Lena is specialized for each vertical with custom knowledge bases and industry-specific training.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {solutions.map((solution) => (
              <button
                key={solution.id}
                onClick={() => setActiveTab(solution.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 border ${
                  activeTab === solution.id 
                  ? "bg-white/10 border-white/20 text-white shadow-lg" 
                  : "bg-transparent border-white/5 text-zinc-500 hover:text-zinc-300 hover:border-white/10"
                }`}
              >
                <span style={{ color: activeTab === solution.id ? solution.accent : 'inherit' }}>
                  {solution.icon}
                </span>
                <span className="hidden sm:inline">{solution.title}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Info Card */}
              <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8"
                  style={{ backgroundColor: `${activeSolution.accent}20`, color: activeSolution.accent }}
                >
                  {activeSolution.icon}
                </div>
                
                <h2 className="text-4xl font-bold mb-6">{activeSolution.title}</h2>
                <p className="text-zinc-400 text-xl leading-relaxed mb-10">
                  {activeSolution.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  {activeSolution.useCases.map((useCase, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: activeSolution.accent }} />
                      <span className="text-zinc-300 font-medium">{useCase}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Result</div>
                      <div className="font-bold">{activeSolution.result}</div>
                    </div>
                  </div>
                  <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-3">
                    <BarChart3 className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">ROI</div>
                      <div className="font-bold">{activeSolution.roi}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Placeholder */}
              <div className="relative group aspect-square lg:aspect-auto lg:h-full min-h-[400px]">
                <div 
                  className="absolute inset-0 rounded-[2.5rem] opacity-20 blur-[100px]"
                  style={{ backgroundColor: activeSolution.accent }}
                />
                <div className="relative h-full rounded-[2.5rem] border border-white/10 bg-black/40 overflow-hidden flex items-center justify-center p-12">
                   <div className="text-center">
                     <div 
                       className="w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse"
                       style={{ backgroundColor: `${activeSolution.accent}10`, color: activeSolution.accent }}
                     >
                       {activeSolution.icon}
                     </div>
                     <div className="text-2xl font-bold mb-4">Lena for {activeSolution.title}</div>
                     <div className="flex justify-center gap-1 h-12">
                       {[...Array(20)].map((_, i) => (
                         <motion.div
                           key={i}
                           animate={{ height: [10, 40, 10] }}
                           transition={{ duration: 1, repeat: Infinity, delay: i * 0.05 }}
                           className="w-1 bg-white/20 rounded-full"
                           style={{ backgroundColor: i % 3 === 0 ? activeSolution.accent : undefined }}
                         />
                       ))}
                     </div>
                   </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  );
}

