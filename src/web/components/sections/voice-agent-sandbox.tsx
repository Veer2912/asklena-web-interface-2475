import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Mic2, Settings2, Sparkles, MessageSquare } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

const SAMPLE_QUERY = "I'd like to book an appointment for a dental checkup.";

const getResponse = (tone: number, speed: number, personality: number) => {
  const isProfessional = tone < 50;
  const isDeliberate = speed < 50;
  const isHuman = personality > 50;

  if (isProfessional) {
    if (isHuman) {
      return isDeliberate 
        ? "I would be pleased to assist you with scheduling your dental examination. We have several morning appointments available next Tuesday. Would that be suitable for you?"
        : "I'd be happy to help you with that. We have several slots available this week. Would you prefer a morning or afternoon appointment?";
    } else {
      return isDeliberate
        ? "APPOINTMENT. SCHEDULING. INITIALIZED. SELECT. PREFERRED. DATE. FROM. THE. FOLLOWING. OPTIONS."
        : "Accessing scheduling database. I have found three available slots for a dental checkup. Please state your preferred time.";
    }
  } else {
    if (isHuman) {
      return isDeliberate
        ? "Sure thing! I can definitely help you get that dental checkup scheduled. Let's take a look at the calendar together. Do you have a specific day in mind?"
        : "No problem at all! Let's get you set up for that checkup. What day works best for your schedule?";
    } else {
      return isDeliberate
        ? "DENTAL. CHECKUP. REQUEST. RECEIVED. WHAT. TIME. DO. YOU. WANT."
        : "Checking for openings now. I see some spots open. When do you want to come in?";
    }
  }
};

export function VoiceAgentSandbox() {
  const [tone, setTone] = useState([30]);
  const [speed, setSpeed] = useState([70]);
  const [personality, setPersonality] = useState([80]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [fullText, setFullText] = useState("");

  useEffect(() => {
    const text = getResponse(tone[0], speed[0], personality[0]);
    setFullText(text);
    setDisplayText("");
    setIsPlaying(false);
  }, [tone, speed, personality]);

  useEffect(() => {
    if (isPlaying) {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayText(fullText.slice(0, i));
        i++;
        if (i > fullText.length) {
          clearInterval(interval);
          setIsPlaying(false);
        }
      }, 1000 / (speed[0] / 2 + 10));
      return () => clearInterval(interval);
    }
  }, [isPlaying, fullText, speed]);

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">Interactive Sandbox</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Customize Your Voice Agent
          </motion.h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Experience the flexibility of Lena. Adjust the parameters below to see how she adapts her voice to your brand's unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-12 p-8 rounded-[2rem] bg-zinc-900/40 border border-white/5 backdrop-blur-sm"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
                    <Settings2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Tone</h3>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider font-mono">
                      {tone[0] < 50 ? "Professional" : "Casual"}
                    </p>
                  </div>
                </div>
                <span className="text-zinc-500 text-sm font-mono">{tone[0]}%</span>
              </div>
              <Slider
                value={tone}
                onValueChange={setTone}
                max={100}
                step={1}
                className="[&_[role=slider]]:bg-purple-500"
              />
              <div className="flex justify-between text-[10px] text-zinc-600 uppercase font-bold tracking-widest">
                <span>Professional</span>
                <span>Casual</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <Mic2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Speed</h3>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider font-mono">
                      {speed[0] < 50 ? "Deliberate" : "Natural"}
                    </p>
                  </div>
                </div>
                <span className="text-zinc-500 text-sm font-mono">{speed[0]}%</span>
              </div>
              <Slider
                value={speed}
                onValueChange={setSpeed}
                max={100}
                step={1}
                className="[&_[role=slider]]:bg-blue-500"
              />
              <div className="flex justify-between text-[10px] text-zinc-600 uppercase font-bold tracking-widest">
                <span>Deliberate</span>
                <span>Natural</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-400">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Personality</h3>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider font-mono">
                      {personality[0] < 50 ? "Robotic" : "Human"}
                    </p>
                  </div>
                </div>
                <span className="text-zinc-500 text-sm font-mono">{personality[0]}%</span>
              </div>
              <Slider
                value={personality}
                onValueChange={setPersonality}
                max={100}
                step={1}
                className="[&_[role=slider]]:bg-pink-500"
              />
              <div className="flex justify-between text-[10px] text-zinc-600 uppercase font-bold tracking-widest">
                <span>Robotic</span>
                <span>Human</span>
              </div>
            </div>
          </motion.div>

          {/* Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="p-8 rounded-[2.5rem] bg-zinc-900/60 border border-white/10 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6">
                <MessageSquare className="w-6 h-6 text-zinc-700" />
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-zinc-500" />
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">Customer</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-zinc-300 text-sm">
                    {SAMPLE_QUERY}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                    <span className="text-[10px] font-bold text-purple-400 uppercase tracking-[0.2em]">Lena (AI)</span>
                  </div>
                  <div className="p-6 rounded-3xl bg-purple-500/10 border border-purple-500/20 min-h-[120px] relative flex flex-col justify-center">
                    <p className="text-white text-lg font-medium leading-relaxed italic">
                      "{displayText || (isPlaying ? "" : fullText)}"
                      {!isPlaying && !displayText && <span className="inline-block w-1.5 h-5 bg-purple-500 ml-1 animate-pulse" />}
                    </p>
                    
                    {/* Visualizer when playing */}
                    <div className="mt-6 flex items-end gap-1 h-8">
                      {[...Array(20)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={isPlaying ? {
                            height: [4, Math.random() * 24 + 4, 4],
                          } : { height: 4 }}
                          transition={{
                            duration: 0.5,
                            repeat: Infinity,
                            delay: i * 0.05,
                          }}
                          className="flex-1 bg-purple-500/40 rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center pt-4">
                  <Button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-20 h-20 rounded-full bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300 group"
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8 fill-current" />
                    ) : (
                      <Play className="w-8 h-8 fill-current translate-x-1" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Status Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400">
                  LATENCY: &lt;200MS
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400 uppercase">
                  MODE: {tone[0] < 50 ? "FORMAL" : "NEUTRAL"}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400 uppercase">
                  ENGINE: v4.2-NEURAL
                </span>
              </div>
            </div>

            {/* Floating particles around preview */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
                className="absolute w-1 h-1 bg-purple-500 rounded-full blur-[1px]"
                style={{
                  top: `${20 + i * 15}%`,
                  right: `${-10 - i * 5}%`,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
