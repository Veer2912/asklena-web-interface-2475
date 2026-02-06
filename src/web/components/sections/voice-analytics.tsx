import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Activity, Zap, Shield, PhoneCall, TrendingUp, Sparkles } from "lucide-react";

export function VoiceAnalytics() {
  const [activeCalls, setActiveCalls] = useState(147);
  const [responseTime, setResponseTime] = useState(180);
  const [clarity, setClarity] = useState(98.7);
  const [successRate, setSuccessRate] = useState(94.2);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCalls(prev => prev + (Math.random() > 0.5 ? 1 : -1));
      setResponseTime(prev => Math.max(150, Math.min(220, prev + (Math.random() > 0.5 ? 2 : -2))));
      setClarity(prev => Math.max(97, Math.min(99.9, prev + (Math.random() > 0.5 ? 0.1 : -0.1))));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold uppercase tracking-widest mb-6"
          >
            <Activity className="w-4 h-4" />
            Live Network Status
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Real-time Performance
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
            Monitoring thousands of concurrent voice conversations with millisecond precision and unmatched clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Active Calls */}
          <MetricCard 
            title="Active Calls" 
            value={activeCalls} 
            unit="" 
            icon={<PhoneCall className="w-6 h-6" />}
            color="cyan"
            description="Concurrent live agents"
          />
          
          {/* Response Time */}
          <MetricCard 
            title="Avg Latency" 
            value={responseTime} 
            unit="ms" 
            icon={<Zap className="w-6 h-6" />}
            color="magenta"
            description="Global average response"
            gauge={true}
          />

          {/* Voice Clarity */}
          <MetricCard 
            title="Voice Clarity" 
            value={clarity} 
            unit="%" 
            icon={<Shield className="w-6 h-6" />}
            color="purple"
            description="Neural audio quality"
            progress={true}
          />

          {/* Success Rate */}
          <MetricCard 
            title="Success Rate" 
            value={successRate} 
            unit="%" 
            icon={<TrendingUp className="w-6 h-6" />}
            color="teal"
            description="Resolution on first call"
          />
        </div>

        {/* Central Hub Visualization */}
        <div className="mt-20 relative h-64 md:h-96 rounded-[3rem] border border-white/5 bg-gradient-to-b from-white/5 to-transparent overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Animated Data Streams */}
            <svg className="w-full h-full opacity-30">
              {[...Array(6)].map((_, i) => (
                <motion.path
                  key={i}
                  d={`M ${10 + i * 15}% 100% Q 50% 50% ${90 - i * 15}% 0%`}
                  fill="none"
                  stroke={i % 2 === 0 ? "#22d3ee" : "#d946ef"}
                  strokeWidth="2"
                  strokeDasharray="10, 20"
                  animate={{
                    strokeDashoffset: [-100, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.8
                  }}
                />
              ))}
            </svg>
            
            <div className="relative z-10 flex flex-col items-center">
               <div className="w-32 h-32 rounded-full border-2 border-cyan-500/20 flex items-center justify-center animate-pulse">
                  <div className="w-24 h-24 rounded-full border border-magenta-500/20 flex items-center justify-center">
                    <Activity className="w-10 h-10 text-white animate-bounce" />
                  </div>
               </div>
               <div className="mt-6 text-white font-mono text-xs uppercase tracking-[0.3em]">Neural Core Active</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({ title, value, unit, icon, color, description, gauge, progress }: any) {
  const colors: any = {
    cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    magenta: "text-magenta-400 bg-magenta-500/10 border-magenta-500/20",
    purple: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    teal: "text-teal-400 bg-teal-500/10 border-teal-500/20",
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-8 rounded-[2rem] border border-white/5 bg-white/5 backdrop-blur-xl relative overflow-hidden group"
    >
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${colors[color]}`}>
        {icon}
      </div>
      
      <div className="flex items-baseline gap-1 mb-2">
        <motion.span 
          key={value}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white font-mono"
        >
          {typeof value === 'number' && !Number.isInteger(value) ? value.toFixed(1) : value}
        </motion.span>
        <span className="text-xl font-medium text-zinc-500">{unit}</span>
        <motion.div
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 1] }}
          key={`sparkle-${value}`}
          className="ml-2"
        >
          <Sparkles className={`w-4 h-4 ${color === 'cyan' ? 'text-cyan-400' : 'text-magenta-400'}`} />
        </motion.div>
      </div>

      <div className="text-sm font-bold text-white mb-1 uppercase tracking-wider">{title}</div>
      <div className="text-xs text-zinc-500 leading-relaxed">{description}</div>

      {progress && (
        <div className="mt-6 h-1 w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${value}%` }}
            className={`h-full ${color === 'purple' ? 'bg-purple-500' : 'bg-cyan-500'}`}
          />
        </div>
      )}

      {gauge && (
        <div className="mt-6 flex gap-1">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i} 
              className={`h-1 flex-1 rounded-full ${i < 4 ? 'bg-magenta-500' : 'bg-white/5'}`} 
            />
          ))}
        </div>
      )}

      {/* Hover Background Glow */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-br from-${color}-500 to-transparent`} />
    </motion.div>
  );
}
