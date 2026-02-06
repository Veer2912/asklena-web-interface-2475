import { motion } from "framer-motion";
import { 
  SiCalendly, SiGooglecalendar, SiGooglemeet, SiZoom, 
  SiGoogledrive, SiGmail, SiHubspot, SiTwilio, 
  SiShopify, SiOdoo, SiSalesforce, SiSlack
} from "react-icons/si";
import { Terminal, Plus, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const integrations = [
  { name: "Calendly", icon: <SiCalendly />, benefit: "Automated booking & rescheduling" },
  { name: "Salesforce", icon: <SiSalesforce />, benefit: "Real-time CRM data sync" },
  { name: "HubSpot", icon: <SiHubspot />, benefit: "Lead qualification & tracking" },
  { name: "Twilio", icon: <SiTwilio />, benefit: "Global SIP/PSTN connectivity" },
  { name: "Google Calendar", icon: <SiGooglecalendar />, benefit: "Native event management" },
  { name: "Slack", icon: <SiSlack />, benefit: "Instant team notifications" },
  { name: "Shopify", icon: <SiShopify />, benefit: "Order status & refund automation" },
  { name: "Zoom", icon: <SiZoom />, benefit: "Seamless video hand-off" },
  { name: "Odoo", icon: <SiOdoo />, benefit: "ERP & inventory coordination" },
  { name: "Gmail", icon: <SiGmail />, benefit: "Automated follow-up emails" },
  { name: "REST API", icon: <Terminal />, benefit: "Custom enterprise workflows" },
];

export function IntegrationShowcase() {
  return (
    <section className="py-32 bg-black relative overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-purple-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tighter"
          >
            Connected <span className="text-zinc-500">Ecosystem</span>
          </motion.h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Asklena lives where your business does. We integrate natively with the world's leading platforms to provide a seamless data flow.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {integrations.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="p-6 rounded-[2rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl flex items-center gap-4 transition-all duration-300 hover:border-white/20 hover:bg-zinc-900/60 overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-white/10 transition-all text-2xl">
                  {item.icon}
                </div>
                
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm tracking-tight">{item.name}</span>
                  <span className="text-[10px] text-zinc-500 font-medium uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-3 left-22">
                    {item.benefit}
                  </span>
                </div>

                {/* Hover Slide Up Benefit */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-md flex items-center px-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-sm mb-1">{item.name}</span>
                    <span className="text-[10px] text-zinc-300 font-medium uppercase tracking-tight">{item.benefit}</span>
                  </div>
                  <ArrowUpRight className="ml-auto w-4 h-4 text-white opacity-50" />
                </div>
              </div>
            </motion.div>
          ))}

          {/* Request Integration Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="group relative"
          >
            <button className="p-6 rounded-[2rem] bg-purple-600/10 border border-purple-500/20 backdrop-blur-xl flex items-center gap-4 transition-all duration-300 hover:bg-purple-600/20 hover:border-purple-500/40">
              <div className="w-12 h-12 rounded-xl bg-purple-500 flex items-center justify-center text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                <Plus className="w-6 h-6" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-white font-bold text-sm tracking-tight">Custom App?</span>
                <span className="text-[10px] text-purple-400 font-bold uppercase tracking-widest">Request Integration</span>
              </div>
            </button>
          </motion.div>
        </div>

        <div className="mt-24 flex flex-col md:flex-row items-center justify-center gap-12 pt-12 border-t border-white/5 text-center md:text-left">
          <div className="flex flex-col">
            <span className="text-white font-bold text-3xl mb-2">Build your own</span>
            <span className="text-zinc-500 text-lg">Use our robust REST API and Webhooks</span>
          </div>
          <Button className="rounded-2xl h-14 px-8 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-zinc-200 transition-all">
            Explore API Docs
          </Button>
        </div>
      </div>
    </section>
  );
}
