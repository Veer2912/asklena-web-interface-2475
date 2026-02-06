import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, User, MessageSquare, Play, 
  Pause, RotateCcw, Activity, ShieldCheck, 
  Brain, Smile, AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

const conversation = [
  {
    speaker: "Customer",
    text: "Hi, I'm calling about my order #9021. It was supposed to arrive yesterday but I haven't received it yet.",
    sentiment: "Frustrated",
    sentimentIcon: <AlertCircle className="w-3 h-3 text-red-400" />
  },
  {
    speaker: "Lena",
    text: "I'm sorry for the delay with your order. Let me pull up the real-time tracking data for #9021 immediately.",
    thinking: true,
    sentiment: "Empathetic",
    sentimentIcon: <Smile className="w-3 h-3 text-green-400" />
  },
  {
    speaker: "Lena",
    text: "I see the package is currently at the local sorting facility. It's scheduled for delivery by 2:00 PM today. Would you like me to notify the driver of any specific delivery instructions?",
    sentiment: "Helpful",
    sentimentIcon: <Smile className="w-3 h-3 text-green-400" />
  },
  {
    speaker: "Customer",
    text: "Oh, that's good news. Yes, please ask them to leave it in the package locker at the front of the building.",
    sentiment: "Relieved",
    sentimentIcon: <Smile className="w-3 h-3 text-blue-400" />
  },
  {
    speaker: "Lena",
    text: "Consider it done. I've updated the driver's notes for the package locker delivery. Is there anything else I can assist you with today?",
    sentiment: "Professional",
    sentimentIcon: <ShieldCheck className="w-3 h-3 text-purple-400" />
  }
];

export function ConversationalTimeline() {
  const [activeStep, setActiveStep] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let timeout: Timer;
    if (isPlaying && activeStep < conversation.length - 1) {
      timeout = setTimeout(() => {
        setActiveStep(prev => prev + 1);
      }, 2500);
    } else if (activeStep === conversation.length - 1) {
      setIsPlaying(false);
    }
    return () => clearTimeout(timeout);
  }, [isPlaying, activeStep]);

  const reset = () => {
    setActiveStep(-1);
    setIsPlaying(false);
  };

  return (
    <section className="py-32 bg-black relative overflow-hidden font-sans">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Activity className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">Live Flow Playback</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tighter"
          >
            Neural <span className="text-zinc-500">Dialogue</span>
          </motion.h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Experience how Lena handles complex, multi-turn conversations with contextual awareness and human-like empathy.
          </p>
        </div>

        {/* Playback Controls */}
        <div className="flex justify-center gap-4 mb-12">
          <Button
            onClick={() => setIsPlaying(!isPlaying)}
            className="rounded-full h-14 px-8 bg-white text-black font-bold uppercase tracking-widest text-xs gap-3 hover:bg-zinc-200"
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4 fill-current" />
                Pause Playback
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                {activeStep === -1 ? "Start Playback" : "Continue Playback"}
              </>
            )}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="rounded-full h-14 w-14 border-white/10 text-white hover:bg-white/5"
          >
            <RotateCcw className="w-5 h-5" />
          </Button>
        </div>

        {/* Conversation Interface */}
        <div className="relative p-8 md:p-12 rounded-[3.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl min-h-[600px] flex flex-col">
          <div className="absolute top-0 left-0 right-0 p-8 flex justify-between items-center border-b border-white/5 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 border border-purple-500/30">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm tracking-tight">Active Call #9021</span>
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Duration: 01:24</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-mono text-zinc-500 uppercase">Neural Stream: Active</span>
            </div>
          </div>

          <div className="flex-grow space-y-8 mt-24">
            <AnimatePresence>
              {conversation.slice(0, activeStep + 1).map((turn, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={`flex ${turn.speaker === 'Customer' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] md:max-w-[70%] space-y-2 ${turn.speaker === 'Customer' ? 'items-end' : 'items-start'} flex flex-col`}>
                    <div className="flex items-center gap-2 px-2">
                      <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/5 border border-white/10`}>
                        {turn.sentimentIcon}
                        <span className="text-[8px] font-bold text-zinc-500 uppercase tracking-widest">{turn.sentiment}</span>
                      </div>
                      <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                        {turn.speaker}
                      </span>
                    </div>

                    <div className={`p-6 rounded-3xl relative ${
                      turn.speaker === 'Lena' 
                        ? 'bg-purple-500 text-white shadow-[0_10px_30px_rgba(168,85,247,0.3)]' 
                        : 'bg-zinc-800 text-zinc-300 border border-white/5'
                    }`}>
                      {turn.thinking && i === activeStep && (
                        <div className="flex gap-1 mb-3">
                          {[...Array(3)].map((_, j) => (
                            <motion.div
                              key={j}
                              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 1, 0.3] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: j * 0.1 }}
                              className="w-1.5 h-1.5 rounded-full bg-white"
                            />
                          ))}
                        </div>
                      )}
                      <p className="text-sm md:text-base font-medium leading-relaxed">
                        {turn.text}
                      </p>
                      
                      {turn.speaker === 'Lena' && (
                        <div className="mt-4 flex gap-0.5 items-end h-4">
                          {[...Array(20)].map((_, j) => (
                            <motion.div
                              key={j}
                              animate={{ height: [2, Math.random() * 16 + 2, 2] }}
                              transition={{ duration: 0.5, repeat: Infinity, delay: j * 0.05 }}
                              className="flex-1 bg-white/40 rounded-full"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {/* Thinking Indicator for next step */}
            {isPlaying && activeStep < conversation.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="p-6 rounded-3xl bg-zinc-800/50 border border-white/5 flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
                      className="w-1.5 h-1.5 rounded-full bg-purple-400"
                    />
                  ))}
                  <span className="ml-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Lena is thinking...</span>
                </div>
              </motion.div>
            )}
          </div>

          {activeStep === -1 && !isPlaying && (
            <div className="flex-grow flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-10 h-10 text-zinc-700" />
              </div>
              <h4 className="text-white font-bold text-xl mb-2">Neural Dialogue Sandbox</h4>
              <p className="text-zinc-500 text-sm max-w-xs mx-auto">
                Press play to witness a multi-turn conversation unfolding with real-time sentiment analysis.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
