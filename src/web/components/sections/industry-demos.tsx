import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import { 
  HeartPulse, Truck, Landmark, GraduationCap, Users2, ShoppingBag,
  Bot, User, Phone, Mic, Volume2, Play, Pause, RotateCcw
} from "lucide-react";

// ============================================================================
// HOLOGRAPHIC INDUSTRY THEATER - Interactive demo showcase with live conversations
// Never-before-seen: 3D holographic projector showing live AI conversations
// ============================================================================

const industryDemos = [
  {
    id: "healthcare",
    name: "Healthcare",
    icon: HeartPulse,
    color: "#06b6d4",
    agentName: "Dr. Lena",
    scenario: "Patient Appointment",
    conversation: [
      { speaker: "ai", text: "Good morning! This is Dr. Lena from Wellness Clinic. How can I help you today?" },
      { speaker: "user", text: "Hi, I need to reschedule my appointment for next week." },
      { speaker: "ai", text: "Of course! I can see you have an appointment on Thursday at 2 PM with Dr. Smith. Would you like to move it to a different day?" },
      { speaker: "user", text: "Yes, is Friday morning available?" },
      { speaker: "ai", text: "Let me check... Yes! I have 9 AM and 11 AM available on Friday. Which works better for you?" },
      { speaker: "user", text: "11 AM would be perfect." },
      { speaker: "ai", text: "Wonderful! I've rescheduled your appointment to Friday at 11 AM. You'll receive a confirmation text shortly. Is there anything else I can help with?" },
    ]
  },
  {
    id: "logistics",
    name: "Logistics",
    icon: Truck,
    color: "#3b82f6",
    agentName: "Track Lena",
    scenario: "Shipment Tracking",
    conversation: [
      { speaker: "ai", text: "Hello! This is Track Lena from Swift Logistics. How can I assist you today?" },
      { speaker: "user", text: "I need to check on my package. Order number 847291." },
      { speaker: "ai", text: "Let me look that up for you... I found your order! It's currently in transit from our Chicago warehouse." },
      { speaker: "user", text: "When will it arrive?" },
      { speaker: "ai", text: "Based on current tracking, your package is scheduled to arrive tomorrow between 2 PM and 6 PM. Would you like me to send you real-time updates?" },
      { speaker: "user", text: "Yes please, that would be great." },
      { speaker: "ai", text: "Done! I've enabled SMS notifications for your delivery. You'll get updates at each checkpoint. Anything else I can help with?" },
    ]
  },
  {
    id: "finance",
    name: "Finance",
    icon: Landmark,
    color: "#a855f7",
    agentName: "Fin Lena",
    scenario: "Account Support",
    conversation: [
      { speaker: "ai", text: "Welcome to SecureBank. This is Fin Lena. For security, may I have your account PIN?" },
      { speaker: "user", text: "It's 7842." },
      { speaker: "ai", text: "Thank you, verified! I can see you're calling about your savings account. How can I help?" },
      { speaker: "user", text: "I noticed an unusual transaction on my account." },
      { speaker: "ai", text: "I understand your concern. I can see a $299.99 charge from yesterday. Was this not authorized by you?" },
      { speaker: "user", text: "No, I didn't make that purchase." },
      { speaker: "ai", text: "I've flagged this as potentially fraudulent and temporarily blocked similar transactions. I'm transferring you to our fraud team who will issue a refund within 24 hours. Please hold." },
    ]
  },
  {
    id: "education",
    name: "Education",
    icon: GraduationCap,
    color: "#10b981",
    agentName: "Edu Lena",
    scenario: "Enrollment Help",
    conversation: [
      { speaker: "ai", text: "Hi there! I'm Edu Lena from State University. Are you looking to enroll for the fall semester?" },
      { speaker: "user", text: "Yes, I want to know about the Computer Science program." },
      { speaker: "ai", text: "Great choice! Our CS program is ranked top 20 nationally. Would you like information about admission requirements or course curriculum?" },
      { speaker: "user", text: "What are the admission requirements?" },
      { speaker: "ai", text: "For our CS program, you'll need: a minimum 3.2 GPA, SAT score of 1200+, and two letters of recommendation. Application deadline is March 15th." },
      { speaker: "user", text: "Can I schedule a campus tour?" },
      { speaker: "ai", text: "Absolutely! I have openings this Saturday at 10 AM and 2 PM. Which works better for you?" },
    ]
  },
  {
    id: "hr",
    name: "HR",
    icon: Users2,
    color: "#ec4899",
    agentName: "HR Lena",
    scenario: "Benefits Inquiry",
    conversation: [
      { speaker: "ai", text: "Hello! This is HR Lena from TechCorp HR. How can I assist you today?" },
      { speaker: "user", text: "I have questions about my health insurance options." },
      { speaker: "ai", text: "I'd be happy to help with that! Open enrollment starts next week. Are you looking at individual or family coverage?" },
      { speaker: "user", text: "Family coverage. What plans are available?" },
      { speaker: "ai", text: "We have three family plans: Basic at $200/month, Plus at $350/month with dental, and Premium at $500/month with vision included. Would you like a detailed comparison?" },
      { speaker: "user", text: "Yes, can you email me the details?" },
      { speaker: "ai", text: "Done! I've sent a comprehensive comparison to your work email. You'll also find a calculator to estimate your costs. Need anything else?" },
    ]
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    icon: ShoppingBag,
    color: "#f59e0b",
    agentName: "Shop Lena",
    scenario: "Order Support",
    conversation: [
      { speaker: "ai", text: "Thank you for calling StyleStore! I'm Shop Lena. How can I make your day better?" },
      { speaker: "user", text: "I received the wrong size for my order." },
      { speaker: "ai", text: "I'm so sorry about that! Let me look up your order... I see you ordered the Blue Jacket in Medium but received Large. Is that correct?" },
      { speaker: "user", text: "Yes, exactly." },
      { speaker: "ai", text: "I've initiated an exchange right away. I'm sending you a prepaid return label, and the correct Medium size will ship today with express delivery, free of charge." },
      { speaker: "user", text: "Wow, that's fast! Thank you." },
      { speaker: "ai", text: "You're welcome! As an apology, I've also added a 20% discount code 'SORRY20' to your account for your next purchase. Is there anything else?" },
    ]
  },
];

// Holographic Projector Base
function HolographicBase() {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-xl">
      {/* Base platform */}
      <div className="relative h-4">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent blur-sm" />
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
      </div>
      
      {/* Projection beam */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-0 h-0"
        style={{
          borderLeft: "200px solid transparent",
          borderRight: "200px solid transparent",
          borderBottom: "300px solid rgba(6,182,212,0.05)",
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Scan lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
          style={{
            bottom: 60 + i * 50,
            width: 350 - i * 50,
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scaleX: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            delay: i * 0.2,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}

// Industry Selector Orbit
function IndustryOrbit({ 
  industries, 
  activeIndex, 
  onSelect 
}: { 
  industries: typeof industryDemos;
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="relative w-full h-20 mb-8">
      <div className="absolute inset-0 flex items-center justify-center gap-4">
        {industries.map((industry, i) => {
          const Icon = industry.icon;
          const isActive = i === activeIndex;
          
          return (
            <motion.button
              key={industry.id}
              onClick={() => onSelect(i)}
              animate={{
                scale: isActive ? 1.2 : 1,
                y: isActive ? -10 : 0,
              }}
              whileHover={{ scale: isActive ? 1.2 : 1.1 }}
              className="relative"
            >
              <motion.div
                animate={{
                  boxShadow: isActive 
                    ? `0 0 30px ${industry.color}60, 0 0 60px ${industry.color}30`
                    : "none",
                  borderColor: isActive ? industry.color : "rgba(255,255,255,0.1)",
                }}
                className="w-14 h-14 rounded-2xl border-2 flex items-center justify-center backdrop-blur-sm transition-all"
                style={{
                  backgroundColor: isActive ? `${industry.color}20` : "rgba(255,255,255,0.05)",
                }}
              >
                <Icon className="w-6 h-6" style={{ color: isActive ? industry.color : "#71717a" }} />
              </motion.div>
              
              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                  style={{ backgroundColor: industry.color }}
                />
              )}
              
              {/* Label */}
              <motion.span
                animate={{ opacity: isActive ? 1 : 0 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-bold whitespace-nowrap"
                style={{ color: industry.color }}
              >
                {industry.name}
              </motion.span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// Voice Waveform Visualizer
function VoiceWaveform({ isActive, color }: { isActive: boolean; color: string }) {
  return (
    <div className="flex items-center gap-[2px] h-6">
      {[...Array(16)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1 rounded-full"
          style={{ backgroundColor: color }}
          animate={isActive ? {
            height: [4, 12 + Math.random() * 12, 4],
            opacity: [0.5, 1, 0.5],
          } : { height: 4, opacity: 0.3 }}
          transition={{
            duration: 0.3,
            delay: i * 0.02,
            repeat: isActive ? Infinity : 0,
          }}
        />
      ))}
    </div>
  );
}

// Conversation Message Bubble
function MessageBubble({ 
  message, 
  isAI, 
  color,
  isActive,
  index,
}: { 
  message: string;
  isAI: boolean;
  color: string;
  isActive: boolean;
  index: number;
}) {
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    if (!isActive) {
      setDisplayedText(message);
      return;
    }
    
    let i = 0;
    setDisplayedText("");
    const interval = setInterval(() => {
      if (i < message.length) {
        setDisplayedText(message.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 20);
    
    return () => clearInterval(interval);
  }, [message, isActive]);

  return (
    <motion.div
      initial={{ opacity: 0, x: isAI ? -20 : 20, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      className={`flex items-start gap-3 ${isAI ? "" : "flex-row-reverse"}`}
    >
      {/* Avatar */}
      <motion.div
        animate={isActive ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 0.5, repeat: isActive ? Infinity : 0 }}
        className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
          isAI ? "bg-gradient-to-br" : "bg-zinc-800"
        }`}
        style={isAI ? { background: `linear-gradient(135deg, ${color}40, ${color}20)` } : {}}
      >
        {isAI ? (
          <Bot className="w-5 h-5" style={{ color }} />
        ) : (
          <User className="w-5 h-5 text-zinc-400" />
        )}
      </motion.div>
      
      {/* Message */}
      <div className={`max-w-[280px] ${isAI ? "" : "text-right"}`}>
        <div
          className={`px-4 py-3 rounded-2xl ${
            isAI 
              ? "rounded-tl-none bg-zinc-900/80 border"
              : "rounded-tr-none bg-zinc-800"
          }`}
          style={isAI ? { borderColor: `${color}30` } : {}}
        >
          <p className="text-sm text-zinc-300 leading-relaxed">
            {displayedText}
            {isActive && displayedText.length < message.length && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.3, repeat: Infinity }}
                className="text-cyan-400"
              >
                |
              </motion.span>
            )}
          </p>
        </div>
        
        {/* Voice indicator */}
        {isActive && (
          <div className={`mt-2 ${isAI ? "" : "flex justify-end"}`}>
            <VoiceWaveform isActive={true} color={isAI ? color : "#71717a"} />
          </div>
        )}
      </div>
    </motion.div>
  );
}

// Main Demo Theater
function DemoTheater({ demo }: { demo: typeof industryDemos[0] }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState<typeof demo.conversation>([]);

  useEffect(() => {
    // Reset when demo changes
    setCurrentMessageIndex(0);
    setVisibleMessages([]);
    setIsPlaying(true);
  }, [demo.id]);

  useEffect(() => {
    if (!isPlaying || currentMessageIndex >= demo.conversation.length) return;

    const timer = setTimeout(() => {
      setVisibleMessages(prev => [...prev, demo.conversation[currentMessageIndex]]);
      setCurrentMessageIndex(prev => prev + 1);
    }, currentMessageIndex === 0 ? 500 : 2500);

    return () => clearTimeout(timer);
  }, [currentMessageIndex, isPlaying, demo]);

  const handleReset = () => {
    setCurrentMessageIndex(0);
    setVisibleMessages([]);
    setIsPlaying(true);
  };

  const Icon = demo.icon;

  return (
    <div className="relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <motion.div
            animate={{
              boxShadow: `0 0 20px ${demo.color}40`,
            }}
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${demo.color}20` }}
          >
            <Icon className="w-6 h-6" style={{ color: demo.color }} />
          </motion.div>
          <div>
            <h3 className="text-lg font-bold text-white">{demo.agentName}</h3>
            <p className="text-xs text-zinc-500 uppercase tracking-widest">{demo.scenario}</p>
          </div>
        </div>
        
        {/* Controls */}
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleReset}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"
          >
            <RotateCcw className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
      
      {/* Call status */}
      <div className="flex items-center gap-3 mb-6 p-3 rounded-xl bg-green-500/10 border border-green-500/20">
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="w-3 h-3 rounded-full bg-green-500"
        />
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-green-400" />
          <span className="text-sm text-green-400 font-medium">Live Call in Progress</span>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Mic className="w-4 h-4 text-green-400" />
          <Volume2 className="w-4 h-4 text-green-400" />
        </div>
      </div>
      
      {/* Conversation area */}
      <div className="h-[350px] overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-zinc-800">
        <AnimatePresence>
          {visibleMessages.map((msg, i) => (
            <MessageBubble
              key={i}
              message={msg.text}
              isAI={msg.speaker === "ai"}
              color={demo.color}
              isActive={i === visibleMessages.length - 1 && isPlaying}
              index={i}
            />
          ))}
        </AnimatePresence>
        
        {/* Completion message */}
        {currentMessageIndex >= demo.conversation.length && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-4"
          >
            <p className="text-sm text-zinc-500">Call completed successfully</p>
            <button
              onClick={handleReset}
              className="mt-2 text-sm font-medium hover:underline"
              style={{ color: demo.color }}
            >
              Replay Demo
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export function IndustryDemos() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeDemo = industryDemos[activeIndex];

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{ backgroundColor: activeDemo.color }}
          animate={{
            opacity: [0.03, 0.06, 0.03],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6"
          >
            <Bot className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">Live Demos</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Holographic{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Demo Theater
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-400 max-w-2xl mx-auto"
          >
            Experience live conversations across industries. Watch how Lena handles real customer scenarios.
          </motion.p>
        </div>

        {/* Industry selector */}
        <IndustryOrbit 
          industries={industryDemos} 
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
        />

        {/* Demo theater */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-2xl mx-auto"
        >
          {/* Holographic frame */}
          <div 
            className="relative p-8 rounded-3xl border backdrop-blur-xl"
            style={{
              borderColor: `${activeDemo.color}30`,
              background: `linear-gradient(135deg, ${activeDemo.color}08, transparent)`,
              boxShadow: `0 0 60px ${activeDemo.color}10, inset 0 0 60px ${activeDemo.color}05`,
            }}
          >
            {/* Corner decorations */}
            {[
              "top-0 left-0 border-t border-l rounded-tl-3xl",
              "top-0 right-0 border-t border-r rounded-tr-3xl",
              "bottom-0 left-0 border-b border-l rounded-bl-3xl",
              "bottom-0 right-0 border-b border-r rounded-br-3xl",
            ].map((classes, i) => (
              <div
                key={i}
                className={`absolute w-8 h-8 ${classes}`}
                style={{ borderColor: activeDemo.color }}
              />
            ))}
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDemo.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <DemoTheater demo={activeDemo} />
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Holographic base */}
          <HolographicBase />
        </motion.div>
      </div>
    </section>
  );
}
