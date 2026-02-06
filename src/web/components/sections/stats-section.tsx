import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { Languages, Users, PhoneCall, MessageSquare } from "lucide-react";

const stats = [
  {
    label: "Languages",
    value: 40,
    suffix: "+",
    icon: <Languages className="w-6 h-6 text-purple-400" />,
  },
  {
    label: "Active Agents",
    value: 147,
    suffix: "",
    icon: <Users className="w-6 h-6 text-indigo-400" />,
  },
  {
    label: "Calls Today",
    value: 2431,
    suffix: "",
    icon: <PhoneCall className="w-6 h-6 text-blue-400" />,
  },
  {
    label: "Conversations Handled",
    value: 10,
    suffix: "M+",
    icon: <MessageSquare className="w-6 h-6 text-cyan-400" />,
  },
];

function Counter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setDisplayValue(end);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{displayValue.toLocaleString()}</span>;
}

export function StatsSection() {
  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex flex-col items-center text-center group hover:bg-white/10 transition-colors"
            >
              <div className="mb-4 p-3 rounded-xl bg-zinc-900/50 border border-white/5 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-5xl font-bold text-white mb-2 font-outfit">
                <Counter value={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-zinc-500 font-medium tracking-wide uppercase text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
