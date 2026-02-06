import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Heart, AlertTriangle, HelpCircle, CheckCircle, Flame } from "lucide-react";

const emotions = [
  { id: "frustrated", label: "Frustrated", color: "from-red-500 to-orange-500", icon: <AlertTriangle />, angle: -120 },
  { id: "urgent", label: "Urgent", color: "from-orange-500 to-yellow-500", icon: <Flame />, angle: -60 },
  { id: "confused", label: "Confused", color: "from-yellow-500 to-blue-500", icon: <HelpCircle />, angle: 0 },
  { id: "happy", label: "Happy", color: "from-blue-500 to-green-500", icon: <Heart />, angle: 60 },
  { id: "satisfied", label: "Satisfied", color: "from-green-500 to-emerald-500", icon: <CheckCircle />, angle: 120 },
];

export function EmotionalIntelligence() {
  const [currentEmotion, setCurrentEmotion] = useState(emotions[0]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev + 1) % 100);
      if (progress < 40) setCurrentEmotion(emotions[0]);
      else if (progress < 60) setCurrentEmotion(emotions[2]);
      else if (progress < 80) setCurrentEmotion(emotions[3]);
      else setCurrentEmotion(emotions[4]);
    }, 100);
    return () => clearInterval(interval);
  }, [progress]);

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Emotional Intelligence
          </motion.h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Lena doesn't just hear words; she understands feelings. 
            Real-time sentiment analysis allows Lena to adapt her tone to the caller's emotional state.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Gauge Column */}
          <div className="relative flex items-center justify-center aspect-square max-w-[500px] mx-auto w-full">
            {/* Background Meter */}
            <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
              <circle
                cx="50" cy="50" r="45"
                fill="none"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="8"
                strokeDasharray="282.7"
                strokeDashoffset="70.7"
                strokeLinecap="round"
              />
              {/* Active Segment */}
              <motion.circle
                cx="50" cy="50" r="45"
                fill="none"
                stroke="url(#emotionGradient)"
                strokeWidth="8"
                strokeDasharray="282.7"
                animate={{ strokeDashoffset: 282.7 - (progress * 2.12) }}
                strokeLinecap="round"
                transition={{ type: "spring", stiffness: 50 }}
              />
              <defs>
                <linearGradient id="emotionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </svg>

            {/* Needle */}
            <motion.div 
              className="absolute w-1 h-[45%] bg-white origin-bottom bottom-1/2 left-1/2 -translate-x-1/2"
              animate={{ rotate: currentEmotion.angle }}
              transition={{ type: "spring", stiffness: 60 }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
            </motion.div>

            {/* Center Info */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
               <motion.div
                 key={currentEmotion.id}
                 initial={{ scale: 0.8, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 className={`w-20 h-20 rounded-full bg-gradient-to-br ${currentEmotion.color} flex items-center justify-center text-white mb-4 shadow-lg`}
               >
                 {currentEmotion.icon}
               </motion.div>
               <span className="text-3xl font-bold text-white tracking-tight">{currentEmotion.label}</span>
               <span className="text-zinc-500 font-mono mt-1">{progress}% Intensity</span>
            </div>

            {/* Labels */}
            {emotions.map((em, i) => (
              <div 
                key={i}
                className="absolute text-[10px] font-bold text-zinc-600 uppercase tracking-widest"
                style={{
                  transform: `rotate(${em.angle}deg) translateY(-180px) rotate(${-em.angle}deg)`
                }}
              >
                {em.label}
              </div>
            ))}
          </div>

          {/* Info Column */}
          <div className="space-y-8">
            <div className="p-8 rounded-[2rem] bg-zinc-900/50 border border-white/5 backdrop-blur-xl">
               <h3 className="text-2xl font-bold text-white mb-4">Sentiment Shift Case Study</h3>
               <div className="space-y-6">
                 <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center text-red-400">
                       <AlertTriangle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white font-bold">Initial State: Frustrated (60%)</p>
                      <p className="text-zinc-500 text-sm">Customer called regarding a late delivery with a high-pitched, fast-paced tone.</p>
                    </div>
                 </div>

                 <div className="relative h-12 flex items-center px-2">
                    <div className="absolute left-0 right-0 h-1 bg-zinc-800 rounded-full" />
                    <motion.div 
                      className="absolute left-0 h-1 bg-gradient-to-r from-red-500 via-blue-500 to-green-500 rounded-full"
                      animate={{ width: `${progress}%` }}
                    />
                    <motion.div 
                      className="absolute w-4 h-4 bg-white rounded-full shadow-lg"
                      animate={{ left: `${progress}%` }}
                    />
                 </div>

                 <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center text-green-400">
                       <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white font-bold">Final State: Satisfied (85%)</p>
                      <p className="text-zinc-500 text-sm">After Lena provided a resolution and discount, the customer's tone calmed and normalized.</p>
                    </div>
                 </div>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               {[
                 { label: "Vocal Inflection", value: "Real-time" },
                 { label: "Emotion Detection", value: "92% Accuracy" },
                 { label: "Adaptive Response", value: "Instant" },
                 { label: "Contextual EQ", value: "Built-in" }
               ].map((item, i) => (
                 <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <span className="block text-zinc-500 text-[10px] uppercase font-bold tracking-widest mb-1">{item.label}</span>
                    <span className="text-white font-bold">{item.value}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
