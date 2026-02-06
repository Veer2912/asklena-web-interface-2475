import { motion } from "framer-motion";
import { ShieldCheck, Lock, FileCheck } from "lucide-react";

const compliances = [
  "ISO 27001", "SOC 2", "GDPR", "HITRUST", "CCPA", "AICPA SOC", "PCI DSS"
];

export function SecurityTrust() {
  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-outfit">
                Security & Trust at Scale
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                Your data security is our top priority. Asklena is built on enterprise-grade infrastructure with multi-layered security protocols to ensure your information remains private and protected.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-zinc-300">
                  <Lock className="w-5 h-5 text-purple-400" />
                  <span>End-to-End Encryption</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-300">
                  <FileCheck className="w-5 h-5 text-indigo-400" />
                  <span>Regular External Audits</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-300">
                  <ShieldCheck className="w-5 h-5 text-blue-400" />
                  <span>24/7 Security Monitoring</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {compliances.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-6 rounded-xl border border-white/5 bg-zinc-900/50 flex items-center justify-center text-center hover:bg-zinc-800/80 transition-colors"
                >
                  <span className="text-sm font-bold text-zinc-400 tracking-wider">
                    {item}
                  </span>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="p-6 rounded-xl border border-dashed border-white/20 flex items-center justify-center text-center"
              >
                <span className="text-xs font-medium text-zinc-600 italic">
                  And More...
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
