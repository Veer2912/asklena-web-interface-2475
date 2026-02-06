import { motion } from "framer-motion";
import { 
  SiCalendly, 
  SiGooglecalendar, 
  SiGooglemeet, 
  SiZoom, 
  SiGoogledrive, 
  SiGmail, 
  SiHubspot, 
  SiTwilio, 
  SiShopify, 
  SiOdoo 
} from "react-icons/si";
import { Terminal } from "lucide-react";

const integrations = [
  { name: "Calendly", icon: <SiCalendly className="w-8 h-8" /> },
  { name: "Google Calendar", icon: <SiGooglecalendar className="w-8 h-8" /> },
  { name: "Google Meet", icon: <SiGooglemeet className="w-8 h-8" /> },
  { name: "Zoom", icon: <SiZoom className="w-8 h-8" /> },
  { name: "Google Drive", icon: <SiGoogledrive className="w-8 h-8" /> },
  { name: "Gmail", icon: <SiGmail className="w-8 h-8" /> },
  { name: "HubSpot", icon: <SiHubspot className="w-8 h-8" /> },
  { name: "Twilio", icon: <SiTwilio className="w-8 h-8" /> },
  { name: "Shopify", icon: <SiShopify className="w-8 h-8" /> },
  { name: "Odoo", icon: <SiOdoo className="w-8 h-8" /> },
  { name: "API", icon: <Terminal className="w-8 h-8" /> },
];

export function IntegrationShowcase() {
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
            Works with Your Stack
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg max-w-2xl mx-auto"
          >
            Seamlessly integrate Asklena with the tools you already use every day.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {integrations.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              className="relative aspect-square rounded-2xl border border-white/10 bg-white/5 flex flex-col items-center justify-center p-6 group transition-colors"
            >
              <div className="text-zinc-400 group-hover:text-white transition-colors duration-300 mb-2">
                {item.icon}
              </div>
              <span className="text-xs font-medium text-zinc-500 group-hover:text-zinc-300 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-4">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
