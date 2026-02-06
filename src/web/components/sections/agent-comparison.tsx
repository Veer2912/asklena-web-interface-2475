import { motion } from "framer-motion";
import { Check, PhoneIncoming, PhoneOutgoing } from "lucide-react";

const inboundFeatures = [
  "24/7 Customer Support",
  "Instant Response Time",
  "Multilingual Support (40+)",
  "Seamless Live Transfer",
  "CRM Integration",
  "Contextual Understanding"
];

const outboundFeatures = [
  "Proactive Lead Qualification",
  "Appointment Scheduling",
  "Payment Reminders",
  "Automated Follow-ups",
  "High Conversion Rates",
  "Scalable Outreach"
];

export function AgentComparison() {
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
            Inbound vs Outbound
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg max-w-2xl mx-auto"
          >
            Choose the right agent for your business needs or deploy both for maximum impact.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Inbound Agents */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 p-8">
              <PhoneIncoming className="w-12 h-12 text-purple-500/20 group-hover:text-purple-500/40 transition-colors" />
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-6 font-outfit flex items-center gap-3">
              <span className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                <PhoneIncoming className="w-6 h-6" />
              </span>
              Inbound Agents
            </h3>
            <p className="text-zinc-400 mb-8 text-lg">
              Handle incoming customer inquiries, support requests, and bookings with human-like precision.
            </p>
            
            <ul className="space-y-4">
              {inboundFeatures.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-purple-400" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Outbound Agents */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 p-8">
              <PhoneOutgoing className="w-12 h-12 text-blue-500/20 group-hover:text-blue-500/40 transition-colors" />
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-6 font-outfit flex items-center gap-3">
              <span className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                <PhoneOutgoing className="w-6 h-6" />
              </span>
              Outbound Agents
            </h3>
            <p className="text-zinc-400 mb-8 text-lg">
              Proactively reach out to leads, confirm appointments, and drive sales through intelligent outreach.
            </p>
            
            <ul className="space-y-4">
              {outboundFeatures.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-blue-400" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
