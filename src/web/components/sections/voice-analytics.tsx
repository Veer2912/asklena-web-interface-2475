import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Activity, BarChart3, Globe2, PhoneCall, 
  Smile, Zap, LayoutDashboard, Database, 
  ChevronUp, ChevronDown
} from "lucide-react";

export function VoiceAnalytics() {
  const [callVolume, setCallVolume] = useState(2431);
  const [avgSentiment, setAvgSentiment] = useState(88);
  const [peakConcurrency, setPeakConcurrency] = useState(1472);
  const [languageDistribution, setLanguageDistribution] = useState([
    { lang: "English", value: 45 },
    { lang: "Spanish", value: 20 },
    { lang: "French", value: 15 },
    { lang: "German", value: 12 },
    { lang: "Others", value: 8 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCallVolume(prev => prev + Math.floor(Math.random() * 5));
      setAvgSentiment(prev => Math.max(85, Math.min(95, prev + (Math.random() > 0.5 ? 1 : -1))));
      setPeakConcurrency(prev => Math.max(1400, Math.min(1600, prev + (Math.random() > 0.5 ? 10 : -10))));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 bg-black relative overflow-hidden font-sans">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)", backgroundSize: "40px 40px" }} />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
          >
            <LayoutDashboard className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Global Analytics Console</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tighter"
          >
            Real-time <span className="text-zinc-500">Intelligence</span>
          </motion.h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Deep insights into every conversation. Monitor performance, sentiment, and global deployment from a single unified command center.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Dashboard Panel */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Call Volume */}
            <div className="p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl relative overflow-hidden group">
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-1 text-green-400 text-xs font-bold">
                  <ChevronUp className="w-3 h-3" />
                  <span>12.4%</span>
                </div>
              </div>
              <span className="block text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-2">Daily Call Volume</span>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-white font-mono">{callVolume.toLocaleString()}</span>
                <span className="text-zinc-500 text-sm">TOTAL</span>
              </div>
              
              {/* Mini Bar Chart */}
              <div className="mt-8 flex items-end gap-1.5 h-16">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${20 + Math.random() * 80}%` }}
                    transition={{ duration: 1, delay: i * 0.05 }}
                    className="flex-1 bg-blue-500/20 rounded-t-sm group-hover:bg-blue-500/40 transition-colors"
                  />
                ))}
              </div>
            </div>

            {/* Peak Concurrency */}
            <div className="p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl relative overflow-hidden group">
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-1 text-blue-400 text-xs font-bold">
                  <Activity className="w-3 h-3" />
                  <span>STABLE</span>
                </div>
              </div>
              <span className="block text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-2">Peak Concurrency</span>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-white font-mono">{peakConcurrency.toLocaleString()}</span>
                <span className="text-zinc-500 text-sm">ACTIVE</span>
              </div>

              {/* Animated Waveform */}
              <div className="mt-8 h-16 flex items-center">
                <svg viewBox="0 0 200 60" className="w-full h-full overflow-visible">
                  <motion.path
                    d="M0,30 Q25,0 50,30 T100,30 T150,30 T200,30"
                    fill="none"
                    stroke="#a855f7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1, x: [-20, 0] }}
                    transition={{ 
                      pathLength: { duration: 2 },
                      x: { duration: 2, repeat: Infinity, ease: "linear" }
                    }}
                  />
                </svg>
              </div>
            </div>

            {/* Average Sentiment */}
            <div className="p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl relative overflow-hidden group md:col-span-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-400 border border-pink-500/20">
                    <Smile className="w-6 h-6" />
                  </div>
                  <span className="block text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-2">Avg Sentiment Score</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-bold text-white font-mono">{avgSentiment}%</span>
                    <span className="text-green-400 text-xs font-bold font-mono">POSITIVE</span>
                  </div>
                </div>

                {/* Sentiment Progress Ring */}
                <div className="relative w-40 h-40">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50" cy="50" r="40"
                      stroke="rgba(255,255,255,0.05)"
                      strokeWidth="8"
                      fill="none"
                    />
                    <motion.circle
                      cx="50" cy="50" r="40"
                      stroke="#ec4899"
                      strokeWidth="8"
                      strokeDasharray="251.2"
                      initial={{ strokeDashoffset: 251.2 }}
                      animate={{ strokeDashoffset: 251.2 - (251.2 * avgSentiment) / 100 }}
                      strokeLinecap="round"
                      fill="none"
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <Activity className="w-6 h-6 text-pink-400 mb-1" />
                    <span className="text-[8px] text-zinc-500 uppercase font-bold tracking-tighter">Live EQ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Panel: Language Distribution */}
          <div className="lg:col-span-4 p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl flex flex-col h-full overflow-hidden group">
            <div className="flex items-center gap-3 mb-10">
              <Globe2 className="w-5 h-5 text-blue-400" />
              <h3 className="text-xl font-bold text-white uppercase tracking-tighter">Language Reach</h3>
            </div>

            <div className="space-y-8 flex-grow">
              {languageDistribution.map((lang, i) => (
                <div key={lang.lang} className="space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-white font-bold">{lang.lang}</span>
                    <span className="text-zinc-500 font-mono">{lang.value}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.value}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-3xl bg-white/5 border border-white/5 space-y-4">
              <div className="flex items-center gap-3">
                <Database className="w-4 h-4 text-zinc-500" />
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Storage Status</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white font-bold text-sm">99.9% Uptime</span>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] text-green-500 font-bold uppercase">Healthy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
