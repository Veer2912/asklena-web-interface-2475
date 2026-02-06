import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Mic, Speaker, Cpu } from 'lucide-react';

export const VoiceStreamVisualizer = () => {
  // We'll create multiple paths for the "streams"
  const streams = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      delay: i * 0.4,
      duration: 2.5 + Math.random() * 1.5,
      yOffset: (i - 5.5) * 15,
      curvature: (Math.random() - 0.5) * 100,
    }));
  }, []);

  return (
    <section className="relative py-32 overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-purple-400">Technical Architecture</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Real-time Voice Processing
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Experience the lightning-fast intelligence of Asklena's neural engine. 
            From audio capture to semantic understanding and speech generation in under 200ms.
          </motion.p>
        </div>

        <div className="relative max-w-6xl mx-auto h-[500px] flex items-center justify-between px-10 md:px-20">
          
          {/* Input - Microphone */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/20 rounded-2xl blur-xl group-hover:bg-cyan-500/40 transition-colors duration-500" />
              <div className="relative w-24 h-24 rounded-2xl bg-gray-950 border border-cyan-500/30 flex items-center justify-center backdrop-blur-2xl shadow-2xl transition-transform duration-500 group-hover:scale-110">
                <Mic className="w-10 h-10 text-cyan-400" />
                
                {/* Visualizer bars on input */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex gap-1 items-end h-8">
                  {[1, 2, 3, 2, 4, 1].map((h, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [h * 4, h * 12, h * 4] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                      className="w-1 bg-cyan-500/50 rounded-full"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="text-center">
              <span className="block text-cyan-400 font-bold text-sm tracking-widest uppercase mb-1">Input</span>
              <span className="text-xs text-gray-500 font-medium uppercase tracking-tighter">Audio Stream</span>
            </div>
          </motion.div>

          {/* Central Processor */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center gap-6"
          >
            <div className="relative">
              {/* Spinning rings around the core */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-40px] border border-purple-500/10 rounded-full border-dashed"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-20px] border border-indigo-500/20 rounded-full border-dashed"
              />
              
              <div className="absolute inset-0 bg-purple-600/20 rounded-full blur-3xl" />
              <div className="relative w-36 h-36 rounded-full bg-gray-950 border border-purple-500/50 flex items-center justify-center backdrop-blur-3xl shadow-[0_0_60px_rgba(168,85,247,0.4)] overflow-hidden">
                <Cpu className="w-16 h-16 text-purple-400 z-10" />
                
                {/* Background energy pulse */}
                <motion.div 
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.1, 0.3]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20"
                />
                
                {/* Radar sweep */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"
                  style={{ originX: "50%", originY: "50%" }}
                />
              </div>
            </div>
            <div className="text-center">
              <span className="block text-purple-400 font-bold text-sm tracking-widest uppercase mb-1">Neural Core</span>
              <span className="text-xs text-gray-500 font-medium uppercase tracking-tighter">Processing...</span>
            </div>
          </motion.div>

          {/* Output - Speaker */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-pink-500/20 rounded-2xl blur-xl group-hover:bg-pink-500/40 transition-colors duration-500" />
              <div className="relative w-24 h-24 rounded-2xl bg-gray-950 border border-pink-500/30 flex items-center justify-center backdrop-blur-2xl shadow-2xl transition-transform duration-500 group-hover:scale-110">
                <Speaker className="w-10 h-10 text-pink-400" />
                
                {/* Audio waves on output */}
                <div className="absolute inset-0 flex items-center justify-center">
                   {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
                      className="absolute w-full h-full border border-pink-500/30 rounded-2xl"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="text-center">
              <span className="block text-pink-400 font-bold text-sm tracking-widest uppercase mb-1">Output</span>
              <span className="text-xs text-gray-500 font-medium uppercase tracking-tighter">Natural Speech</span>
            </div>
          </motion.div>

          {/* SVG Streams (Desktop/Large screens only for best effect) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block" preserveAspectRatio="none">
            <defs>
              <linearGradient id="stream-in" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="stream-out" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#ec4899" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
              </linearGradient>
              <filter id="glow-fx">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Input to Core Streams */}
            {streams.map((stream) => (
              <motion.path
                key={`in-${stream.id}`}
                d={`M 150,${250 + stream.yOffset} C 250,${250 + stream.yOffset + stream.curvature} 350,${250 + stream.curvature} 450,250`}
                fill="none"
                stroke="url(#stream-in)"
                strokeWidth="1.5"
                strokeLinecap="round"
                filter="url(#glow-fx)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 1],
                  pathOffset: [0, 0, 1],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: stream.duration,
                  repeat: Infinity,
                  delay: stream.delay,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Core to Output Streams */}
            {streams.map((stream) => (
              <motion.path
                key={`out-${stream.id}`}
                d={`M 550,250 C 650,${250 + stream.curvature} 750,${250 + stream.yOffset + stream.curvature} 850,${250 + stream.yOffset}`}
                fill="none"
                stroke="url(#stream-out)"
                strokeWidth="1.5"
                strokeLinecap="round"
                filter="url(#glow-fx)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 1],
                  pathOffset: [0, 0, 1],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: stream.duration,
                  repeat: Infinity,
                  delay: stream.delay + 1, // Slight offset
                  ease: "easeInOut"
                }}
              />
            ))}
          </svg>

          {/* Mobile connections (simpler) */}
          <div className="absolute inset-0 flex items-center justify-around md:hidden pointer-events-none opacity-20">
            <div className="w-1/3 h-px bg-gradient-to-r from-cyan-500 to-purple-500" />
            <div className="w-1/3 h-px bg-gradient-to-r from-purple-500 to-pink-500" />
          </div>
        </div>

        {/* Labels / Description of the process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-gray-900/40 border border-white/5 backdrop-blur-sm"
          >
            <h4 className="text-cyan-400 font-bold mb-2">1. Capturing Context</h4>
            <p className="text-sm text-gray-500">Real-time audio streaming with noise cancellation and echo suppression for crystal clear input.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl bg-gray-900/40 border border-white/5 backdrop-blur-sm"
          >
            <h4 className="text-purple-400 font-bold mb-2">2. Neural Synthesis</h4>
            <p className="text-sm text-gray-500">LLM-powered reasoning understands intent, emotion, and technical nuances in 40+ languages.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-2xl bg-gray-900/40 border border-white/5 backdrop-blur-sm"
          >
            <h4 className="text-pink-400 font-bold mb-2">3. Human-like Response</h4>
            <p className="text-sm text-gray-500">Ultra-low latency TTS engine generates emotive, natural-sounding voice with human-like prosody.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
