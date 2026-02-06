import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { 
  HeartPulse, 
  Truck, 
  Wallet, 
  GraduationCap, 
  Users2, 
  ShoppingBag,
  ArrowRight,
  ChevronRight,
  Maximize2,
  Sparkles
} from "lucide-react";
import { useState, useRef } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { SolutionModal } from "@/components/ui/solution-modal";

const solutions = [
  {
    id: "healthcare",
    title: "Healthcare",
    icon: <HeartPulse className="w-12 h-12" />,
    color: "from-emerald-500 to-teal-500",
    accent: "text-emerald-400",
    description: "Scale your patient support without compromising on empathy or accuracy.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80",
    useCases: [
      "24/7 Appointment Scheduling",
      "Medication Reminders & Follow-ups",
      "Insurance Eligibility Verification",
      "Symptom-based Triage"
    ],
    metrics: "45% reduction in no-shows",
    roi: "Payback in 3 months",
    testimonial: "Lena has transformed how we handle patient bookings. Our staff is happier and our patients never wait.",
    company: "City Health Partners"
  },
  {
    id: "logistics",
    title: "Logistics",
    icon: <Truck className="w-12 h-12" />,
    color: "from-blue-500 to-indigo-500",
    accent: "text-blue-400",
    description: "Streamline your supply chain communication with automated tracking and coordination.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80",
    useCases: [
      "Real-time Shipment Tracking",
      "Delivery Coordination",
      "Proof of Delivery Capture",
      "Driver Support & Routing"
    ],
    metrics: "80% faster delivery updates",
    roi: "65% lower support costs",
    testimonial: "Automating tracking calls allowed our team to focus on resolving actual delivery issues.",
    company: "Global Freight Solutions"
  },
  {
    id: "finance",
    title: "Finance",
    icon: <Wallet className="w-12 h-12" />,
    color: "from-amber-500 to-orange-500",
    accent: "text-amber-400",
    description: "Secure, compliant, and efficient voice agents for modern financial services.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
    useCases: [
      "Secure Payment Processing",
      "Account Balance Inquiries",
      "Fraud Alert Verification",
      "Loan Application Support"
    ],
    metrics: "99.9% processing accuracy",
    roi: "3x increase in collections",
    testimonial: "Security was our top priority. Asklena exceeded our compliance requirements while delivering a great experience.",
    company: "Nordic Bank"
  },
  {
    id: "education",
    title: "Education",
    icon: <GraduationCap className="w-12 h-12" />,
    color: "from-purple-500 to-fuchsia-500",
    accent: "text-purple-400",
    description: "Support students and faculty with instant answers to complex administrative questions.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80",
    useCases: [
      "Student Inquiry Resolution",
      "Enrollment & Admissions Support",
      "Course Scheduling Assistant",
      "Financial Aid Guidance"
    ],
    metrics: "92% student satisfaction",
    roi: "50% fewer support tickets",
    testimonial: "During peak enrollment, Lena handled more queries than our entire team combined.",
    company: "EduTech University"
  },
  {
    id: "hr",
    title: "HR & Recruitment",
    icon: <Users2 className="w-12 h-12" />,
    color: "from-rose-500 to-pink-500",
    accent: "text-rose-400",
    description: "Accelerate your hiring pipeline with intelligent candidate screening and onboarding.",
    image: "https://images.unsplash.com/photo-1521791136364-703a1d40f940?auto=format&fit=crop&q=80",
    useCases: [
      "Initial Candidate Screening",
      "Interview Scheduling",
      "Onboarding FAQ Assistant",
      "Employee Benefits Support"
    ],
    metrics: "70% reduction in time-to-hire",
    roi: "Save 20 hours/week per recruiter",
    testimonial: "We can now screen 500 candidates in the time it used to take to screen 10.",
    company: "TalentFirst Inc"
  },
  {
    id: "ecommerce",
    title: "Ecommerce",
    icon: <ShoppingBag className="w-12 h-12" />,
    color: "from-cyan-500 to-blue-500",
    accent: "text-cyan-400",
    description: "Drive sales and loyalty with personalized voice assistance throughout the buyer journey.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
    useCases: [
      "Post-purchase Order Support",
      "Product Recommendations",
      "Returns & Exchanges Processing",
      "Loyalty Program Management"
    ],
    metrics: "25% increase in upsells",
    roi: "15% higher LTV",
    testimonial: "Lena's ability to recommend products based on conversation context is a game-changer.",
    company: "LuxStore Online"
  }
];

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState(solutions[0].id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const activeSolution = solutions.find(s => s.id === activeTab);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30 overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionHeader 
            title="Industry Specific Intelligence" 
            subtitle="Built for your domain"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-zinc-400 text-xl max-w-3xl mx-auto font-light leading-relaxed mb-16"
          >
            One size does not fit all. Lena is specialized for each vertical with custom 
            knowledge bases and industry-specific emotional intelligence.
          </motion.p>
        </div>

        {/* Industry Tabs */}
        <div className="max-w-6xl mx-auto px-6 mb-20">
          <div className="flex flex-wrap justify-center gap-4 p-2 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-2xl">
            {solutions.map((solution) => (
              <button
                key={solution.id}
                onClick={() => setActiveTab(solution.id)}
                className={`flex items-center gap-3 px-8 py-4 rounded-3xl font-bold transition-all duration-500 ${
                  activeTab === solution.id 
                  ? `bg-gradient-to-br ${solution.color} text-white shadow-2xl scale-105` 
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <div className={activeTab === solution.id ? "text-white" : solution.accent}>
                  {activeTab === solution.id ? solution.icon : <div className="w-6 h-6">{solution.icon}</div>}
                </div>
                {solution.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Solution Display */}
      <section className="py-20 relative z-10 min-h-[800px]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            {activeSolution && (
              <motion.div
                key={activeSolution.id}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
              >
                {/* Left Content */}
                <div className="lg:col-span-5">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 ${activeSolution.accent} text-xs font-black uppercase tracking-widest mb-8`}
                  >
                    <Sparkles className="w-3 h-3" /> Industry Leader
                  </motion.div>
                  <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
                    {activeSolution.title}
                  </h2>
                  <p className="text-zinc-400 text-xl font-light leading-relaxed mb-10">
                    {activeSolution.description}
                  </p>
                  
                  <div className="space-y-6 mb-12">
                    {activeSolution.useCases.slice(0, 3).map((useCase, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                        <div className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform ${activeSolution.accent}`}>
                          <ChevronRight className="w-5 h-5" />
                        </div>
                        <span className="text-zinc-200 font-medium">{useCase}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className={`flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-br ${activeSolution.color} text-white font-black hover:scale-105 transition-all shadow-2xl active:scale-95 group`}
                  >
                    Explore 360° View <Maximize2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </button>
                </div>

                {/* Right Visual */}
                <div className="lg:col-span-7">
                  <div className="relative group">
                    {/* Decorative Rings */}
                    <div className={`absolute -inset-10 bg-gradient-to-br ${activeSolution.color} opacity-20 blur-[80px] rounded-full group-hover:opacity-40 transition-opacity duration-1000`} />
                    
                    <div className="relative rounded-[4rem] overflow-hidden border border-white/10 aspect-[4/3] shadow-2xl">
                      <img 
                        src={activeSolution.image} 
                        alt={activeSolution.title}
                        className="w-full h-full object-cover transition-transform duration-2000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                      
                      {/* Floating Metric Badge */}
                      <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="absolute bottom-8 left-8 right-8 p-8 rounded-[2.5rem] bg-black/40 backdrop-blur-3xl border border-white/10 flex items-center justify-between"
                      >
                        <div>
                          <div className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-1">Average Impact</div>
                          <div className={`text-3xl font-black ${activeSolution.accent}`}>{activeSolution.metrics}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-1">ROI Speed</div>
                          <div className="text-2xl font-black text-white">{activeSolution.roi}</div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Testimonial Bubble */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                      className="absolute -top-10 -right-10 hidden xl:block w-72 p-6 rounded-3xl bg-white/5 backdrop-blur-3xl border border-white/10 shadow-2xl italic text-sm text-zinc-300"
                    >
                      "{activeSolution.testimonial}"
                      <div className="mt-4 not-italic font-bold text-white flex items-center gap-2">
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${activeSolution.color}`} />
                        {activeSolution.company}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Adaptive Parallax Background Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${activeSolution?.accent.replace('text', 'bg') || 'bg-white'}`}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%", 
              opacity: Math.random() * 0.5 
            }}
            animate={{
              y: ["-10%", "110%"],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
          />
        ))}
      </div>

      <SolutionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        solution={activeSolution} 
      />

      {/* CTA Section */}
      <section className="py-40 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionHeader 
            title="Beyond Boundaries" 
            subtitle="Custom Solutions"
          />
          <p className="text-zinc-400 text-xl max-w-2xl mx-auto mb-16 font-light leading-relaxed">
            Don't see your specific use case? Lena's neural architecture allows for rapid 
            adaptation to any industry workflow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="h-20 px-16 bg-white text-black font-black text-xl rounded-2xl hover:bg-cyan-50 transition-all hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(255,255,255,0.2)] flex items-center gap-3">
              Build My Agent <ArrowRight className="w-6 h-6" />
            </button>
            <button className="h-20 px-16 bg-white/5 border border-white/20 text-white font-black text-xl rounded-2xl hover:bg-white/10 transition-all active:scale-95">
              Talk to Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

