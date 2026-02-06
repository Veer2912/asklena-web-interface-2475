import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Activity, Zap, Shield, HeartPulse, Truck, Landmark, Volume2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const demoData = {
  Healthcare: {
    icon: <HeartPulse className="w-5 h-5" />,
    color: "cyan",
    transcript: [
      { role: "Customer", text: "Hello, I need to schedule an appointment with a cardiologist.", time: "0.2s" },
      { role: "Lena", text: "I can certainly help you with that. Are you a new or returning patient?", time: "0.15s" },
      { role: "Customer", text: "I'm a new patient. My doctor referred me.", time: "0.3s" },
      { role: "Lena", text: "Welcome! We have availability next Tuesday at 9 AM or Thursday at 2 PM. Which one works for you?", time: "0.18s" },
    ],
    stats: { clarity: "99.2%", response: "180ms", confidence: "98%" }
  },
  Logistics: {
    icon: <Truck className="w-5 h-5" />,
    color: "magenta",
    transcript: [
      { role: "Customer", text: "I'm calling about my shipment status for order #8821.", time: "0.25s" },
      { role: "Lena", text: "Let me check that for you. One moment... Your order is currently in transit and is expected to arrive tomorrow by 6 PM.", time: "0.12s" },
      { role: "Customer", text: "Can I redirect it to my office address instead?", time: "0.4s" },
      { role: "Lena", text: "Yes, I can update the delivery address for you. Please provide the new street address.", time: "0.19s" },
    ],
    stats: { clarity: "98.5%", response: "195ms", confidence: "96%" }
  },
  Finance: {
    icon: <Landmark className="w-5 h-5" />,
    color: "purple",
    transcript: [
      { role: "Customer", text: "Hi, I'd like to dispute a transaction on my credit card.", time: "0.3s" },
      { role: "Lena", text: "I understand. I can help initiate that dispute. Which transaction are you referring to?", time: "0.14s" },
      { role: "Customer", text: "It's the one from 'Cloud Services' for $49.99 on the 15th.", time: "0.28s" },
      { role: "Lena", text: "Got it. I've flagged the 'Cloud Services' transaction. Would you like to freeze your card while we investigate?", time: "0.17s" },
    ],
    stats: { clarity: "99.5%", response: "165ms", confidence: "99%" }
  }
};

export function LiveDemo() {
  const [activeTab, setActiveTab] = useState<keyof typeof demoData>("Healthcare");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(-1);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timer: any;
    if (isPlaying) {
      if (currentMessageIndex < demoData[activeTab].transcript.length - 1) {
        timer = setTimeout(() => {
          setCurrentMessageIndex(prev => prev + 1);
        }, 2000);
      } else {
        setIsPlaying(false);
      }
    }
    return () => clearTimeout(timer);
  }, [isPlaying, currentMessageIndex, activeTab]);

  const togglePlay = () => {
    if (currentMessageIndex >= demoData[activeTab].transcript.length - 1) {
      setCurrentMessageIndex(0);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
      if (currentMessageIndex === -1) setCurrentMessageIndex(0);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [currentMessageIndex]);

  const currentStats = demoData[activeTab].stats;

  return (
    <section className="py-32 bg-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Voice Agent Arena
          </motion.h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Experience real human-like interactions. Switch between industries to see how Lena adapts her personality and knowledge.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Industry Sidebar */}
          <div className="lg:col-span-3 flex lg:flex-col gap-4">
            {(Object.keys(demoData) as Array<keyof typeof demoData>).map((key) => (
              <button
                key={key}
                onClick={() => {
                  setActiveTab(key);
                  setCurrentMessageIndex(-1);
                  setIsPlaying(false);
                }}
                className={`flex items-center gap-4 p-4 rounded-2xl transition-all border ${
                  activeTab === key 
                    ? 'bg-white/10 border-white/20 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)]' 
                    : 'bg-transparent border-white/5 text-zinc-500 hover:border-white/10 hover:text-zinc-300'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  activeTab === key ? 'bg-cyan-500 text-black' : 'bg-zinc-900'
                }`}>
                  {demoData[key].icon}
                </div>
                <div className="text-left">
                  <div className="font-bold">{key}</div>
                  <div className="text-xs opacity-60">Voice Agent</div>
                </div>
              </button>
            ))}
          </div>

          {/* Main Stage */}
          <div className="lg:col-span-9">
            <div className="relative aspect-video lg:aspect-auto lg:h-[600px] rounded-[2rem] border border-white/10 bg-zinc-950 overflow-hidden shadow-2xl">
              {/* Stage Header */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-white/5 border-b border-white/5 flex items-center justify-between px-8 backdrop-blur-md z-20">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Live Arena</span>
                  </div>
                  <div className="h-4 w-px bg-white/10" />
                  <span className="text-sm text-white font-medium">{activeTab} Case Study</span>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs text-zinc-400 font-mono">{currentStats.clarity} Clarity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span className="text-xs text-zinc-400 font-mono">{currentStats.response} Latency</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span className="text-xs text-zinc-400 font-mono">{currentStats.confidence} Confidence</span>
                  </div>
                </div>
              </div>

              {/* Waveform Visualization Center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-col items-center justify-center opacity-30 pointer-events-none">
                <div className="flex items-center justify-center gap-2 h-40">
                  {[...Array(40)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 rounded-full bg-gradient-to-t from-cyan-500 to-magenta-500"
                      animate={{ 
                        height: isPlaying ? [
                          "10%", 
                          `${Math.random() * 80 + 20}%`, 
                          "10%"
                        ] : "10%"
                      }}
                      transition={{ 
                        duration: 0.4 + Math.random() * 0.4, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: i * 0.02
                      }}
                    />
                  ))}
                </div>
                <div className="mt-8 flex flex-col items-center">
                   <div className="w-32 h-32 rounded-full border border-white/5 flex items-center justify-center animate-spin-slow">
                      <div className="w-24 h-24 rounded-full border border-cyan-500/20 flex items-center justify-center">
                         <div className="w-16 h-16 rounded-full bg-cyan-500/10 blur-xl" />
                      </div>
                   </div>
                </div>
              </div>

              {/* Transcript Area */}
              <div 
                ref={scrollRef}
                className="absolute inset-0 pt-24 pb-32 px-8 overflow-y-auto scroll-smooth z-10 flex flex-col gap-6"
              >
                <AnimatePresence mode="popLayout">
                  {demoData[activeTab].transcript.slice(0, currentMessageIndex + 1).map((msg, i) => (
                    <motion.div
                      key={`${activeTab}-${i}`}
                      initial={{ opacity: 0, x: msg.role === 'Lena' ? -20 : 20, y: 10 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      className={`flex flex-col ${msg.role === 'Lena' ? 'items-start' : 'items-end'}`}
                    >
                      <div className="flex items-center gap-2 mb-1 px-2">
                        <span className={`text-[10px] font-bold uppercase tracking-widest ${msg.role === 'Lena' ? 'text-cyan-400' : 'text-zinc-500'}`}>
                          {msg.role}
                        </span>
                        <span className="text-[10px] text-zinc-600 font-mono">{msg.time} response</span>
                      </div>
                      <div className={`max-w-[80%] p-4 rounded-2xl text-base ${
                        msg.role === 'Lena' 
                          ? 'bg-white/5 border border-white/10 text-white rounded-tl-none' 
                          : 'bg-zinc-900/80 border border-white/5 text-zinc-300 rounded-tr-none'
                      }`}>
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Stage Controls */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-zinc-950 to-transparent flex items-center justify-center px-8 z-20">
                <div className="flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 p-2 rounded-full">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="w-12 h-12 rounded-full text-white hover:bg-white/10"
                    onClick={togglePlay}
                  >
                    {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current" />}
                  </Button>
                  <div className="h-8 w-px bg-white/10" />
                  <Button 
                    variant="ghost" 
                    className="text-zinc-400 hover:text-white px-4 flex gap-2"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Enable Audio</span>
                  </Button>
                  <Button 
                    className="bg-cyan-500 hover:bg-cyan-400 text-black rounded-full px-6 font-bold text-xs uppercase tracking-wider flex gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Try Live Call
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-magenta-500/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
