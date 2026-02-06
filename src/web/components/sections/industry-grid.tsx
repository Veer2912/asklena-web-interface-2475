import { motion } from "framer-motion";
import { Heart, Truck, Landmark, GraduationCap, Users, ShoppingCart } from "lucide-react";

const industries = [
  {
    name: "Healthcare",
    icon: <Heart className="w-8 h-8" />,
    capability: "HIPAA-compliant appointment booking and patient support.",
    color: "from-rose-500/20 to-orange-500/20",
    border: "group-hover:border-rose-500/50"
  },
  {
    name: "Logistics",
    icon: <Truck className="w-8 h-8" />,
    capability: "Real-time shipment tracking and driver coordination.",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-blue-500/50"
  },
  {
    name: "Finance",
    icon: <Landmark className="w-8 h-8" />,
    capability: "Secure transaction verification and account inquiries.",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/50"
  },
  {
    name: "Education",
    icon: <GraduationCap className="w-8 h-8" />,
    capability: "Automated enrollment assistance and student support.",
    color: "from-violet-500/20 to-purple-500/20",
    border: "group-hover:border-violet-500/50"
  },
  {
    name: "HR & Recruitment",
    icon: <Users className="w-8 h-8" />,
    capability: "Candidate screening and interview scheduling.",
    color: "from-amber-500/20 to-yellow-500/20",
    border: "group-hover:border-amber-500/50"
  },
  {
    name: "Ecommerce",
    icon: <ShoppingCart className="w-8 h-8" />,
    capability: "Order tracking, returns, and personalized shopping.",
    color: "from-fuchsia-500/20 to-pink-500/20",
    border: "group-hover:border-fuchsia-500/50"
  }
];

export function IndustryGrid() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4 font-outfit"
          >
            Industry Power Grid
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg max-w-2xl mx-auto"
          >
            Specialized AI agents trained for your industry's unique challenges.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`h-full p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 ${industry.border} hover:bg-white/10 overflow-hidden`}>
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="mb-6 p-3 w-fit rounded-xl bg-zinc-900/50 border border-white/5 text-white group-hover:scale-110 transition-transform duration-500">
                    {industry.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-outfit">{industry.name}</h3>
                  <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 leading-relaxed">
                    {industry.capability}
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
