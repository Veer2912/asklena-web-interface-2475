import { motion } from "framer-motion";
import { ShieldCheck, Lock, FileCheck, ShieldAlert, Fingerprint, EyeOff, Key } from "lucide-react";

const compliances = [
  { name: "SOC 2 Type II", desc: "Security & Confidentiality" },
  { name: "HIPAA", desc: "Healthcare Privacy" },
  { name: "GDPR", desc: "Data Protection" },
  { name: "ISO 27001", desc: "Info Security Mgmt" },
  { name: "CCPA", desc: "Consumer Privacy" },
  { name: "PCI DSS", desc: "Payment Security" },
];

export function SecurityTrust() {
  return (
    <section className="py-32 bg-black relative overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content side */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                <ShieldCheck className="w-4 h-4 text-green-400" />
                <span className="text-xs font-bold text-green-400 uppercase tracking-widest">Enterprise Trust</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight uppercase tracking-tighter">
                Security by <br />
                <span className="text-zinc-500">Design.</span>
              </h2>
              
              <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
                We believe privacy is a fundamental right. Asklena is built from the ground up with security as the core priority, not an afterthought.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl"
              >
                <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 mb-6">
                  <EyeOff className="w-6 h-6" />
                </div>
                <h4 className="text-white font-bold mb-3 uppercase tracking-tight">Zero-Data Retention</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  We don't store your customer conversations. Once processed, all sensitive audio and text data is instantly purged from our servers.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
                  <Key className="w-6 h-6" />
                </div>
                <h4 className="text-white font-bold mb-3 uppercase tracking-tight">AES-256 Encryption</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  All data in transit and at rest is protected by military-grade encryption protocols, ensuring end-to-end privacy.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Badges side */}
          <div className="relative">
            {/* Visualizer Background */}
            <div className="absolute inset-0 bg-green-500/5 blur-[100px] animate-pulse" />
            
            <div className="relative grid grid-cols-2 gap-4">
              {compliances.map((badge, idx) => (
                <motion.div
                  key={badge.name}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.2)" }}
                  className="p-8 rounded-[2.5rem] bg-zinc-900/60 border border-white/5 backdrop-blur-md flex flex-col items-center justify-center text-center group"
                >
                  <div className="mb-4 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-zinc-500 group-hover:text-green-400 transition-colors">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <span className="text-white font-bold text-lg mb-1">{badge.name}</span>
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{badge.desc}</span>
                </motion.div>
              ))}
              
              {/* Audited Tag */}
              <div className="col-span-2 mt-4 p-6 rounded-[2rem] bg-white/5 border border-white/5 flex items-center justify-center gap-4">
                <Fingerprint className="w-5 h-5 text-zinc-600" />
                <span className="text-xs font-mono text-zinc-600 uppercase tracking-[0.2em]">Verified by Third-Party Security Audits</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Stack Row */}
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-12 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700">
           <div className="flex items-center gap-2 text-white font-bold text-sm">TLS 1.3</div>
           <div className="flex items-center gap-2 text-white font-bold text-sm">SAML 2.0</div>
           <div className="flex items-center gap-2 text-white font-bold text-sm">RBAC</div>
           <div className="flex items-center gap-2 text-white font-bold text-sm">2FA/MFA</div>
           <div className="flex items-center gap-2 text-white font-bold text-sm">VPC Peering</div>
        </div>
      </div>
    </section>
  );
}
