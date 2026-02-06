import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Play, User, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const demos = {
  Healthcare: [
    { role: "customer", text: "Hi, I'd like to book an appointment with Dr. Smith for next Tuesday." },
    { role: "agent", text: "Hello! I can help with that. Dr. Smith has openings at 10:00 AM and 2:30 PM next Tuesday. Which works best for you?" },
    { role: "customer", text: "2:30 PM sounds perfect." },
    { role: "agent", text: "Great! I've scheduled your appointment for Tuesday at 2:30 PM. You'll receive a confirmation SMS shortly. Anything else I can help with?" }
  ],
  Logistics: [
    { role: "customer", text: "Where is my package #45219? It was supposed to arrive today." },
    { role: "agent", text: "Let me check that for you. Package #45219 is currently out for delivery and should reach you by 5:00 PM today." },
    { role: "customer", text: "Can I change the delivery instructions?" },
    { role: "agent", text: "Yes, I can update that. Please tell me the new instructions and I'll notify the driver immediately." }
  ],
  Finance: [
    { role: "customer", text: "I noticed an unrecognized charge on my account." },
    { role: "agent", text: "I understand your concern. Could you please provide the date and amount of the transaction so I can investigate?" },
    { role: "customer", text: "It was $45.99 on October 12th from 'TechGear'." },
    { role: "agent", text: "Thank you. I've located the charge. Would you like me to temporarily freeze your card while we dispute this?" }
  ]
};

export function LiveDemo() {
  const [activeDemo, setActiveDemo] = useState<keyof typeof demos>("Healthcare");
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying && visibleMessages < demos[activeDemo].length) {
      const timer = setTimeout(() => {
        setVisibleMessages(prev => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    } else if (visibleMessages === demos[activeDemo].length) {
      setIsPlaying(false);
    }
  }, [isPlaying, visibleMessages, activeDemo]);

  const handleStart = () => {
    setVisibleMessages(0);
    setIsPlaying(true);
  };

  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 font-outfit"
          >
            Experience the Future
          </motion.h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="relative inline-block">
              <select 
                value={activeDemo}
                onChange={(e) => {
                  setActiveDemo(e.target.value as keyof typeof demos);
                  setVisibleMessages(0);
                  setIsPlaying(false);
                }}
                className="appearance-none bg-zinc-900 border border-zinc-800 text-white px-6 py-2.5 rounded-full pr-12 focus:outline-none focus:ring-2 focus:ring-purple-500/50 cursor-pointer hover:bg-zinc-800 transition-colors"
              >
                {Object.keys(demos).map(key => (
                  <option key={key} value={key}>{key} Demo</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
            </div>
            
            <Button 
              onClick={handleStart} 
              disabled={isPlaying}
              className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8"
            >
              <Play className="w-4 h-4 mr-2 fill-current" />
              {visibleMessages > 0 ? "Restart Demo" : "Start Live Demo"}
            </Button>
          </div>
        </div>

        <div className="relative min-h-[400px] rounded-3xl border border-white/10 bg-zinc-950 p-6 md:p-10 shadow-2xl overflow-hidden">
          {/* Interface Header */}
          <div className="absolute top-0 left-0 right-0 h-14 bg-zinc-900/50 border-b border-white/5 flex items-center px-6 justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Live Agent Interaction</div>
            <div className="w-12" />
          </div>

          <div className="mt-12 space-y-6">
            <AnimatePresence mode="popLayout">
              {demos[activeDemo].slice(0, visibleMessages).map((msg, i) => (
                <motion.div
                  key={`${activeDemo}-${i}`}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={`flex ${msg.role === 'customer' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-3 max-w-[80%] ${msg.role === 'customer' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.role === 'customer' ? 'bg-zinc-800' : 'bg-purple-600'}`}>
                      {msg.role === 'customer' ? <User className="w-4 h-4 text-zinc-400" /> : <Bot className="w-4 h-4 text-white" />}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm md:text-base ${
                      msg.role === 'customer' 
                        ? 'bg-zinc-800 text-zinc-200 rounded-tr-none' 
                        : 'bg-purple-600/10 border border-purple-500/20 text-white rounded-tl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {visibleMessages === 0 && !isPlaying && (
              <div className="flex flex-col items-center justify-center h-64 text-zinc-600">
                <Play className="w-12 h-12 mb-4 opacity-20" />
                <p>Click "Start Live Demo" to see {activeDemo} in action</p>
              </div>
            )}
            
            {isPlaying && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start pl-11"
              >
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: '0s' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: '0.2s' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: '0.4s' }} />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
