import { motion } from "framer-motion";
import { Headphones, Calendar, Target, ArrowRight } from "lucide-react";

const useCases = [
  {
    title: "Customer Support",
    description: "Automate routine inquiries and provide instant resolutions 24/7. Handle millions of calls without increasing headcount.",
    metric: "2M+ calls handled",
    icon: <Headphones className="w-8 h-8 text-purple-400" />,
  },
  {
    title: "Appointment Scheduling",
    description: "Intelligent agents that sync with your calendar to book, reschedule, and confirm appointments without human intervention.",
    metric: "Zero double-bookings",
    icon: <Calendar className="w-8 h-8 text-indigo-400" />,
  },
  {
    title: "Sales & Lead Qualification",
    description: "Reach out to leads instantly, qualify them based on your criteria, and book demos for your sales team.",
    metric: "3x conversion rate",
    icon: <Target className="w-8 h-8 text-blue-400" />,
  },
];

export function UseCases() {
  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4 font-outfit"
          >
            Use Cases in Action
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg max-w-2xl mx-auto"
          >
            Real-world applications where Asklena agents drive significant business value.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 flex flex-col h-full"
            >
              <div className="mb-6 p-4 w-fit rounded-2xl bg-zinc-900/50 border border-white/5 text-white group-hover:scale-110 transition-transform">
                {useCase.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-outfit">{useCase.title}</h3>
              <p className="text-zinc-400 mb-6 flex-grow leading-relaxed">
                {useCase.description}
              </p>
              <div className="pt-6 border-t border-white/5 mt-auto">
                <div className="text-sm font-medium text-purple-400 mb-4 uppercase tracking-wider">
                  {useCase.metric}
                </div>
                <a 
                  href="#" 
                  className="inline-flex items-center text-white hover:text-purple-400 transition-colors font-medium group/link"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
