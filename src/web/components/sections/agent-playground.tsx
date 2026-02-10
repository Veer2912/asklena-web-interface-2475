import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { 
  PhoneIncoming, PhoneOutgoing, Play, Pause, RotateCcw, Volume2,
  HeartPulse, Truck, Building2, ShoppingBag, Bot, User, Phone, 
  CheckCircle, ArrowRight, Sparkles, Mic, MicOff, Activity,
  ChevronRight, Circle, Headphones
} from "lucide-react";

// ============================================================================
// AGENT PLAYGROUND - Live Demo Theater Experience
// Premium split-screen design with real-time conversation visualization
// ============================================================================

type CallDirection = "inbound" | "outbound";

interface AgentDemo {
  id: string;
  name: string;
  industry: string;
  icon: any;
  color: string;
  gradient: string;
  inbound: {
    scenario: string;
    conversation: { speaker: "ai" | "user"; text: string }[];
  };
  outbound: {
    scenario: string;
    conversation: { speaker: "ai" | "user"; text: string }[];
  };
}

const agentDemos: AgentDemo[] = [
  {
    id: "healthcare",
    name: "MedAssist",
    industry: "Healthcare",
    icon: HeartPulse,
    color: "#06b6d4",
    gradient: "from-cyan-500 to-blue-600",
    inbound: {
      scenario: "Appointment Scheduling",
      conversation: [
        { speaker: "ai", text: "Thank you for calling City Medical Center. This is MedAssist. How may I help you today?" },
        { speaker: "user", text: "Hi, I need to schedule an appointment with Dr. Johnson." },
        { speaker: "ai", text: "I'd be happy to help! Dr. Johnson has availability Thursday at 2 PM or Friday at 10 AM. Which works better for you?" },
        { speaker: "user", text: "Thursday at 2 PM works great." },
        { speaker: "ai", text: "Perfect! I've booked your appointment for Thursday at 2 PM with Dr. Johnson. You'll receive a confirmation text shortly. Is there anything else I can help with?" },
      ],
    },
    outbound: {
      scenario: "Appointment Reminder",
      conversation: [
        { speaker: "ai", text: "Hello, this is MedAssist calling from City Medical Center. Am I speaking with Sarah?" },
        { speaker: "user", text: "Yes, this is Sarah." },
        { speaker: "ai", text: "Hi Sarah! I'm calling to remind you about your appointment with Dr. Johnson tomorrow at 2 PM. Will you be able to make it?" },
        { speaker: "user", text: "Yes, I'll definitely be there." },
        { speaker: "ai", text: "Wonderful! Please remember to bring your insurance card and arrive 15 minutes early for check-in. Have a great day!" },
      ],
    },
  },
  {
    id: "logistics",
    name: "TrackBot",
    industry: "Logistics",
    icon: Truck,
    color: "#3b82f6",
    gradient: "from-blue-500 to-indigo-600",
    inbound: {
      scenario: "Package Tracking",
      conversation: [
        { speaker: "ai", text: "Thank you for calling FastShip Logistics. I'm TrackBot, your shipping assistant. How can I help?" },
        { speaker: "user", text: "I want to track my package. The order number is 7829341." },
        { speaker: "ai", text: "I found your package! It's currently at our Chicago distribution center and is scheduled for delivery tomorrow between 2-6 PM." },
        { speaker: "user", text: "Is it possible to change the delivery address?" },
        { speaker: "ai", text: "Absolutely! I can redirect it to a nearby pickup location or update the delivery address. Which would you prefer?" },
      ],
    },
    outbound: {
      scenario: "Delivery Update",
      conversation: [
        { speaker: "ai", text: "Hello! This is TrackBot from FastShip Logistics. I'm calling with an update about your delivery." },
        { speaker: "user", text: "Oh great, I've been waiting for it." },
        { speaker: "ai", text: "Your driver is now 3 stops away and should arrive in approximately 20 minutes. Will someone be available to receive it?" },
        { speaker: "user", text: "Yes, I'm home right now." },
        { speaker: "ai", text: "Perfect! You'll receive a text notification when the driver arrives. Thank you for choosing FastShip!" },
      ],
    },
  },
  {
    id: "finance",
    name: "FinanceAI",
    industry: "Financial Services",
    icon: Building2,
    color: "#a855f7",
    gradient: "from-purple-500 to-pink-600",
    inbound: {
      scenario: "Account Support",
      conversation: [
        { speaker: "ai", text: "Welcome to SecureBank. I'm FinanceAI, your virtual banking assistant. How may I assist you?" },
        { speaker: "user", text: "I need to check on a suspicious transaction." },
        { speaker: "ai", text: "I understand your concern. For your security, could you please verify your account by providing your PIN?" },
        { speaker: "user", text: "It's 4829." },
        { speaker: "ai", text: "Verified. I can see a charge of $127.50 from yesterday. I'll flag this for review and issue a temporary credit within 24 hours." },
      ],
    },
    outbound: {
      scenario: "Fraud Alert",
      conversation: [
        { speaker: "ai", text: "Hello, this is FinanceAI from SecureBank's fraud prevention team. We've detected unusual activity on your account." },
        { speaker: "user", text: "What kind of activity?" },
        { speaker: "ai", text: "There was an attempted purchase of $892 in Florida, but our records show you're located in New York. Did you authorize this transaction?" },
        { speaker: "user", text: "No, that definitely wasn't me!" },
        { speaker: "ai", text: "I've immediately blocked the transaction and secured your account. A new card will arrive in 2-3 business days. Your funds are safe." },
      ],
    },
  },
  {
    id: "ecommerce",
    name: "ShopHelper",
    industry: "E-Commerce",
    icon: ShoppingBag,
    color: "#ec4899",
    gradient: "from-pink-500 to-rose-600",
    inbound: {
      scenario: "Order Support",
      conversation: [
        { speaker: "ai", text: "Thanks for calling TrendyShop! I'm ShopHelper, your personal shopping assistant. How can I help you today?" },
        { speaker: "user", text: "I received the wrong size. I ordered a medium but got a large." },
        { speaker: "ai", text: "I'm so sorry about that mix-up! I'll send you a prepaid return label right away and ship the correct size with express delivery, completely free of charge." },
        { speaker: "user", text: "That would be great, thank you!" },
        { speaker: "ai", text: "You're welcome! I've also added a 20% discount code to your account as an apology. Is there anything else I can help with?" },
      ],
    },
    outbound: {
      scenario: "Cart Recovery",
      conversation: [
        { speaker: "ai", text: "Hi there! This is ShopHelper from TrendyShop. I noticed you left some items in your cart and wanted to see if you had any questions." },
        { speaker: "user", text: "Oh yes, I wasn't sure about the sizing for the jacket." },
        { speaker: "ai", text: "Great question! Based on your previous orders, I'd recommend size M for the jacket. Plus, we offer free returns if it doesn't fit perfectly." },
        { speaker: "user", text: "That's really helpful. I think I'll go ahead and complete my order." },
        { speaker: "ai", text: "Wonderful! I've also applied a special 10% discount to your cart. Happy shopping!" },
      ],
    },
  },
];

// Circular Audio Visualizer
function AudioVisualizer({ isActive, color }: { isActive: boolean; color: string }) {
  const bars = 40;
  return (
    <div className="relative w-32 h-32">
      {/* Center mic icon */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div
          animate={isActive ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 1, repeat: Infinity }}
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ backgroundColor: `${color}30` }}
        >
          {isActive ? (
            <Mic className="w-8 h-8" style={{ color }} />
          ) : (
            <MicOff className="w-8 h-8 text-zinc-600" />
          )}
        </motion.div>
      </div>
      
      {/* Circular bars */}
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {Array.from({ length: bars }).map((_, i) => {
          const angle = (i / bars) * 360;
          const randomHeight = isActive ? 8 + Math.random() * 12 : 4;
          return (
            <motion.line
              key={i}
              x1="50"
              y1="15"
              x2="50"
              y2={15 + randomHeight}
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              style={{
                transformOrigin: '50px 50px',
                transform: `rotate(${angle}deg)`,
              }}
              animate={isActive ? {
                y2: [15 + 4, 15 + 8 + Math.random() * 12, 15 + 4],
                opacity: [0.3, 1, 0.3],
              } : { y2: 19, opacity: 0.2 }}
              transition={{
                duration: 0.2 + Math.random() * 0.2,
                repeat: Infinity,
                delay: i * 0.01,
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}

// Live Transcript Line
function TranscriptLine({ 
  message, 
  isLatest, 
  color,
  index 
}: { 
  message: { speaker: "ai" | "user"; text: string }; 
  isLatest: boolean;
  color: string;
  index: number;
}) {
  const isAI = message.speaker === "ai";
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isAI ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`flex gap-4 ${isAI ? '' : 'flex-row-reverse'}`}
    >
      {/* Speaker indicator */}
      <div className="flex-shrink-0 pt-1">
        <div 
          className={`w-10 h-10 rounded-xl flex items-center justify-center ${
            isAI ? '' : 'bg-zinc-800'
          }`}
          style={isAI ? { backgroundColor: `${color}20` } : {}}
        >
          {isAI ? (
            <Bot className="w-5 h-5" style={{ color }} />
          ) : (
            <User className="w-5 h-5 text-zinc-400" />
          )}
        </div>
      </div>
      
      {/* Message */}
      <div className={`flex-1 ${isAI ? '' : 'text-right'}`}>
        <p className="text-xs font-medium text-zinc-500 mb-1">
          {isAI ? 'Lena AI' : 'Customer'}
        </p>
        <div 
          className={`inline-block px-4 py-3 rounded-2xl max-w-[90%] ${
            isAI 
              ? 'rounded-tl-md text-left' 
              : 'rounded-tr-md bg-zinc-800/80 text-left'
          }`}
          style={isAI ? { 
            backgroundColor: `${color}10`,
            border: `1px solid ${color}20`
          } : {}}
        >
          <p className="text-sm text-zinc-200 leading-relaxed">{message.text}</p>
        </div>
        
        {/* Typing indicator for latest AI message */}
        {isLatest && isAI && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-1 mt-2 ml-4"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: color }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
              />
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

// Industry Tab Button
function IndustryTab({ 
  agent, 
  isSelected, 
  onClick 
}: { 
  agent: AgentDemo; 
  isSelected: boolean; 
  onClick: () => void;
}) {
  const Icon = agent.icon;
  
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`relative flex items-center gap-3 px-5 py-4 rounded-2xl transition-all w-full ${
        isSelected 
          ? 'bg-white/10' 
          : 'bg-white/5 hover:bg-white/8'
      }`}
    >
      {/* Selection indicator */}
      {isSelected && (
        <motion.div
          layoutId="selectedTab"
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `linear-gradient(135deg, ${agent.color}15, transparent)`,
            border: `1px solid ${agent.color}40`,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
      
      <div 
        className="relative w-12 h-12 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: `${agent.color}20` }}
      >
        <Icon className="w-6 h-6" style={{ color: agent.color }} />
      </div>
      
      <div className="relative text-left flex-1">
        <p className="font-bold text-white">{agent.name}</p>
        <p className="text-xs text-zinc-500">{agent.industry}</p>
      </div>
      
      {isSelected && (
        <ChevronRight className="w-5 h-5 relative" style={{ color: agent.color }} />
      )}
    </motion.button>
  );
}

// Main Component
export function AgentPlayground() {
  const [selectedAgent, setSelectedAgent] = useState(agentDemos[0]);
  const [direction, setDirection] = useState<CallDirection>("inbound");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState<typeof selectedAgent.inbound.conversation>([]);
  const [callDuration, setCallDuration] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const conversation = direction === "inbound" 
    ? selectedAgent.inbound.conversation 
    : selectedAgent.outbound.conversation;
  
  const scenario = direction === "inbound" 
    ? selectedAgent.inbound.scenario 
    : selectedAgent.outbound.scenario;
    
  const isComplete = currentIndex >= conversation.length && visibleMessages.length > 0;

  // Reset on agent/direction change
  useEffect(() => {
    setCurrentIndex(0);
    setVisibleMessages([]);
    setIsPlaying(false);
    setCallDuration(0);
  }, [selectedAgent.id, direction]);

  // Auto-advance conversation
  useEffect(() => {
    if (!isPlaying || currentIndex >= conversation.length) return;

    const timer = setTimeout(() => {
      setVisibleMessages(prev => [...prev, conversation[currentIndex]]);
      setCurrentIndex(prev => prev + 1);
    }, currentIndex === 0 ? 800 : 2500);

    return () => clearTimeout(timer);
  }, [isPlaying, currentIndex, conversation]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleMessages]);

  // Call duration timer
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => setCallDuration(d => d + 1), 1000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleReset = () => {
    setCurrentIndex(0);
    setVisibleMessages([]);
    setIsPlaying(false);
    setCallDuration(0);
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section id="playground" className="py-24 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-gradient-radial from-purple-500/10 via-transparent to-transparent rounded-full blur-3xl" />
        <motion.div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[150px]"
          style={{ backgroundColor: `${selectedAgent.color}08` }}
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 mb-6"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </motion.div>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Live Demo</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4"
          >
            Experience{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Lena
              </span>
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </span>
            {" "}in Action
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-400 max-w-2xl mx-auto"
          >
            Watch real AI conversations unfold across different industries
          </motion.p>
        </div>

        {/* Main Demo Interface */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          {/* Outer glow */}
          <div 
            className="absolute -inset-1 rounded-[2rem] opacity-50 blur-xl transition-colors duration-500"
            style={{ backgroundColor: `${selectedAgent.color}20` }}
          />
          
          {/* Main container */}
          <div className="relative bg-zinc-950/90 backdrop-blur-xl rounded-[2rem] border border-white/10 overflow-hidden">
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-sm text-zinc-500 font-medium">Lena Voice Agent Demo</span>
              </div>
              
              {/* Direction toggle */}
              <div className="flex items-center gap-1 p-1 rounded-xl bg-zinc-900/50 border border-white/5">
                <button
                  onClick={() => setDirection("inbound")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    direction === "inbound"
                      ? "bg-cyan-500/20 text-cyan-400"
                      : "text-zinc-500 hover:text-white"
                  }`}
                >
                  <PhoneIncoming className="w-4 h-4" />
                  Inbound
                </button>
                <button
                  onClick={() => setDirection("outbound")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    direction === "outbound"
                      ? "bg-purple-500/20 text-purple-400"
                      : "text-zinc-500 hover:text-white"
                  }`}
                >
                  <PhoneOutgoing className="w-4 h-4" />
                  Outbound
                </button>
              </div>
            </div>

            {/* Content grid */}
            <div className="grid lg:grid-cols-12 min-h-[550px]">
              {/* Left panel - Agent selector */}
              <div className="lg:col-span-3 p-4 border-r border-white/5 bg-zinc-900/30">
                <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 px-2">
                  Select Industry
                </p>
                <div className="space-y-2">
                  {agentDemos.map((agent) => (
                    <IndustryTab
                      key={agent.id}
                      agent={agent}
                      isSelected={selectedAgent.id === agent.id}
                      onClick={() => setSelectedAgent(agent)}
                    />
                  ))}
                </div>
              </div>

              {/* Center panel - Visualization */}
              <div className="lg:col-span-4 p-6 flex flex-col items-center justify-center border-r border-white/5 bg-gradient-to-b from-transparent to-zinc-900/50">
                {/* Call status */}
                <div className="text-center mb-6">
                  <motion.div
                    key={selectedAgent.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-4"
                  >
                    <AudioVisualizer isActive={isPlaying} color={selectedAgent.color} />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-white mb-1">{selectedAgent.name}</h3>
                  <p className="text-sm text-zinc-500 mb-3">{scenario}</p>
                  
                  {/* Status badge */}
                  <div className="flex items-center justify-center gap-2">
                    <motion.div
                      animate={isPlaying ? { scale: [1, 1.3, 1] } : {}}
                      transition={{ duration: 1, repeat: Infinity }}
                      className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-400' : 'bg-zinc-600'}`}
                    />
                    <span className={`text-sm font-medium ${isPlaying ? 'text-green-400' : 'text-zinc-500'}`}>
                      {isPlaying ? `Call Active • ${formatDuration(callDuration)}` : 'Ready'}
                    </span>
                  </div>
                </div>

                {/* Control buttons */}
                <div className="flex items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleReset}
                    className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-shadow"
                    style={{ 
                      backgroundColor: isPlaying ? '#ef4444' : selectedAgent.color,
                      boxShadow: `0 0 40px ${isPlaying ? '#ef444440' : `${selectedAgent.color}40`}`
                    }}
                  >
                    {isPlaying ? (
                      <Pause className="w-7 h-7 text-white" />
                    ) : (
                      <Play className="w-7 h-7 text-white ml-1" />
                    )}
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                  >
                    <Volume2 className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Completion state */}
                <AnimatePresence>
                  {isComplete && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-6"
                    >
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm font-medium text-green-400">Call Completed</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Right panel - Live transcript */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4" style={{ color: selectedAgent.color }} />
                    <span className="text-sm font-bold text-white">Live Transcript</span>
                  </div>
                  <span className="text-xs text-zinc-500">
                    {visibleMessages.length} / {conversation.length} messages
                  </span>
                </div>
                
                <div 
                  ref={scrollRef}
                  className="flex-1 p-5 space-y-4 overflow-y-auto max-h-[400px] scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-800"
                >
                  <AnimatePresence>
                    {visibleMessages.map((msg, i) => (
                      <TranscriptLine 
                        key={i} 
                        message={msg} 
                        isLatest={i === visibleMessages.length - 1 && isPlaying}
                        color={selectedAgent.color}
                        index={i}
                      />
                    ))}
                  </AnimatePresence>
                  
                  {/* Empty state */}
                  {visibleMessages.length === 0 && (
                    <div className="h-full flex flex-col items-center justify-center text-center py-12">
                      <div className="w-16 h-16 rounded-2xl bg-zinc-800/50 flex items-center justify-center mb-4">
                        <Headphones className="w-8 h-8 text-zinc-600" />
                      </div>
                      <p className="text-zinc-500 font-medium mb-1">No conversation yet</p>
                      <p className="text-xs text-zinc-600">Press play to start the demo</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom stats bar */}
            <div className="px-6 py-4 border-t border-white/5 bg-zinc-900/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-xs text-zinc-400">Latency: <span className="text-white font-bold">&lt;200ms</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span className="text-xs text-zinc-400">Languages: <span className="text-white font-bold">40+</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                    <span className="text-xs text-zinc-400">Uptime: <span className="text-white font-bold">99.9%</span></span>
                  </div>
                </div>
                
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-1 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                >
                  Try with your own voice
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="/pricing"
            whileHover={{ scale: 1.03, boxShadow: "0 0 50px rgba(6, 182, 212, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold text-lg shadow-2xl shadow-purple-500/20"
          >
            Deploy Your AI Agent
            <ArrowRight className="w-5 h-5" />
          </motion.a>
          <p className="text-sm text-zinc-500 mt-4">Start free • No credit card required</p>
        </motion.div>
      </div>
    </section>
  );
}
