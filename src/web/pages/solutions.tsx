import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { 
  HeartPulse, 
  Truck, 
  Wallet, 
  GraduationCap, 
  Users2, 
  ShoppingBag,
  ArrowRight
} from "lucide-react";

const solutions = [
  {
    id: "healthcare",
    title: "Healthcare",
    icon: <HeartPulse className="w-10 h-10" />,
    color: "from-emerald-500 to-teal-500",
    accent: "text-emerald-400",
    description: "Scale your patient support without compromising on empathy or accuracy.",
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
    icon: <Truck className="w-10 h-10" />,
    color: "from-blue-500 to-indigo-500",
    accent: "text-blue-400",
    description: "Streamline your supply chain communication with automated tracking and coordination.",
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
    icon: <Wallet className="w-10 h-10" />,
    color: "from-amber-500 to-orange-500",
    accent: "text-amber-400",
    description: "Secure, compliant, and efficient voice agents for modern financial services.",
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
    icon: <GraduationCap className="w-10 h-10" />,
    color: "from-purple-500 to-fuchsia-500",
    accent: "text-purple-400",
    description: "Support students and faculty with instant answers to complex administrative questions.",
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
    icon: <Users2 className="w-10 h-10" />,
    color: "from-rose-500 to-pink-500",
    accent: "text-rose-400",
    description: "Accelerate your hiring pipeline with intelligent candidate screening and onboarding.",
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
    icon: <ShoppingBag className="w-10 h-10" />,
    color: "from-cyan-500 to-blue-500",
    accent: "text-cyan-400",
    description: "Drive sales and loyalty with personalized voice assistance throughout the buyer journey.",
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
  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
              Built for your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Industry</span>
            </h1>
            <p className="text-zinc-400 text-xl font-light leading-relaxed">
              Every industry has unique challenges. Our voice agents are purpose-built 
              with the domain knowledge and compliance standards your business requires.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-32">
            {solutions.map((solution, index) => (
              <SolutionSection key={solution.id} solution={solution} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8">Don't see your industry?</h2>
          <p className="text-zinc-400 text-xl max-w-2xl mx-auto mb-12 font-light">
            Lena is highly adaptable. Our team can build a custom solution tailored to your specific needs in record time.
          </p>
          <button className="px-12 py-5 bg-white text-black font-black rounded-full hover:bg-cyan-50 transition-all flex items-center gap-2 mx-auto">
            Talk to an Expert <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function SolutionSection({ solution, index }: { solution: typeof solutions[0], index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
      <motion.div 
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1"
      >
        <div className={`inline-flex items-center gap-3 p-4 rounded-3xl bg-gradient-to-br ${solution.color} mb-8 shadow-2xl`}>
          {solution.icon}
        </div>
        <h2 className="text-4xl md:text-5xl font-black mb-6">{solution.title}</h2>
        <p className="text-zinc-400 text-lg mb-8 leading-relaxed font-light">
          {solution.description}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {solution.useCases.map((useCase, i) => (
            <div key={i} className="flex items-center gap-3 text-zinc-300">
              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${solution.color}`} />
              <span className="text-sm font-medium">{useCase}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-2xl transition-all flex items-center gap-2 group">
            Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 w-full"
      >
        <div className="relative p-1 rounded-[3rem] bg-gradient-to-br from-white/10 to-transparent">
          <div className="bg-zinc-950 rounded-[2.9rem] p-10 overflow-hidden relative">
            {/* Background Accent */}
            <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${solution.color} blur-[100px] opacity-20`} />
            
            <div className="relative z-10">
              <div className="mb-10">
                <div className="text-zinc-500 text-xs uppercase tracking-widest font-bold mb-4">Results</div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className={`text-2xl md:text-3xl font-black ${solution.accent} mb-1`}>{solution.metrics.split(' ')[0]}</div>
                    <div className="text-xs text-zinc-400 uppercase">{solution.metrics.split(' ').slice(1).join(' ')}</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-black text-white mb-1">{solution.roi.split(' ')[0]}</div>
                    <div className="text-xs text-zinc-400 uppercase">{solution.roi.split(' ').slice(1).join(' ')}</div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 relative italic text-zinc-300 text-sm leading-relaxed">
                "{solution.testimonial}"
                <div className="mt-4 not-italic flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${solution.color}`} />
                  <div>
                    <div className="text-xs font-bold text-white">{solution.company}</div>
                    <div className="text-[10px] text-zinc-500">Industry Partner</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
