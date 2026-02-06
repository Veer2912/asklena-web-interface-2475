import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Phone, CheckCircle2 } from "lucide-react";

const conversations = [
  {
    id: 1,
    industry: "Healthcare",
    color: "cyan",
    messages: [
      { sender: "Customer", text: "I need to reschedule my dental appointment.", time: "10:01:05" },
      { sender: "Lena", text: "I can help with that. Is next Tuesday at 3 PM better?", time: "10:01:06" },
      { sender: "Customer", text: "Yes, that works perfectly. Thank you.", time: "10:01:08" },
      { sender: "Outcome", text: "Appointment Confirmed", status: "success" }
    ]
  },
  {
    id: 2,
    industry: "Logistics",
    color: "blue",
    messages: [
      { sender: "Customer", text: "Where is my shipment #4920?", time: "10:01:02" },
      { sender: "Lena", text: "It's currently in transit. Expected delivery: 2 PM today.", time: "10:01:03" },
      { sender: "Customer", text: "Great, will I need to sign for it?", time: "10:01:05" },
      { sender: "Outcome", text: "Tracking Info Delivered", status: "success" }
    ]
  },
  {
    id: 3,
    industry: "Finance",
    color: "indigo",
    messages: [
      { sender: "Customer", text: "My card was declined at the grocery store.", time: "10:01:10" },
      { sender: "Lena", text: "I see a temporary block. I can verify your identity to lift it.", time: "10:01:12" },
      { sender: "Customer", text: "Okay, let's do it.", time: "10:01:15" },
      { sender: "Outcome", text: "Card Security Verified", status: "success" }
    ]
  },
  {
    id: 4,
    industry: "Ecommerce",
    color: "purple",
    messages: [
      { sender: "Customer", text: "I want to return the shoes I bought last week.", time: "10:01:08" },
      { sender: "Lena", text: "No problem. I've sent a return label to your email.", time: "10:01:10" },
      { sender: "Customer", text: "Can I get a refund or store credit?", time: "10:01:12" },
      { sender: "Outcome", text: "Return Label Processed", status: "success" }
    ]
  },
  {
    id: 5,
    industry: "IT Support",
    color: "pink",
    messages: [
      { sender: "Customer", text: "My internet is down and I have a meeting in 10 mins.", time: "10:01:01" },
      { sender: "Lena", text: "Let's try resetting your router. I'll stay on the line.", time: "10:01:03" },
      { sender: "Customer", text: "It's back! You're a lifesaver.", time: "10:01:09" },
      { sender: "Outcome", text: "Connection Restored", status: "success" }
    ]
  }
];

const colorMap: Record<string, { stream: string, text: string, bg: string, border: string }> = {
  cyan: { stream: "bg-cyan-500/20", text: "text-cyan-400", bg: "bg-cyan-500/5", border: "border-cyan-500/30" },
  blue: { stream: "bg-blue-500/20", text: "text-blue-400", bg: "bg-blue-500/5", border: "border-blue-500/30" },
  indigo: { stream: "bg-indigo-500/20", text: "text-indigo-400", bg: "bg-indigo-500/5", border: "border-indigo-500/30" },
  purple: { stream: "bg-purple-500/20", text: "text-purple-400", bg: "bg-purple-500/5", border: "border-purple-500/30" },
  pink: { stream: "bg-pink-500/20", text: "text-pink-400", bg: "bg-pink-500/5", border: "border-pink-500/30" },
};

export function ConversationWeaver() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={containerRef}
      className="py-32 bg-black relative overflow-hidden min-h-[120vh]"
    >
      {/* Background Scaling Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-5 select-none">
        <span className="text-[30vw] font-bold text-white whitespace-nowrap">
          147 CONCURRENT CALLS
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          style={{ opacity: headerOpacity }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Live at Scale</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase">
            Live Conversation Weaver
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            While you read this, Lena is handling <span className="text-white font-bold">147 concurrent calls</span> across 40+ languages. 
            Real-time, parallel intelligence.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 h-[800px]">
          {conversations.map((conv, idx) => (
             <ConversationStream key={conv.id} conv={conv} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ConversationStream({ conv, idx }: { conv: typeof conversations[0], idx: number }) {
  const colors = colorMap[conv.color];
  const paddingTop = [0, 32, 64, 96, 128][idx % 5];
  
  return (
    <div 
      style={{ paddingTop: `${paddingTop}px` }}
      className="relative h-full flex flex-col gap-4"
    >
      {/* Stream Line */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-px h-full ${colors.stream}`} />
      
      {/* Header for industry */}
      <div className={`relative z-10 self-center px-4 py-1.5 rounded-full ${colors.bg} ${colors.border} border backdrop-blur-md mb-8`}>
        <span className={`text-[10px] font-bold ${colors.text} uppercase tracking-widest`}>{conv.industry}</span>
      </div>

      <div className="space-y-6">
        {conv.messages.map((msg, mIdx) => (
          <motion.div
            key={mIdx}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: idx * 0.2 + mIdx * 0.1 }}
            className={`relative z-10 p-3 rounded-2xl border backdrop-blur-md ${
              msg.sender === "Outcome" 
                ? "bg-green-500/10 border-green-500/50" 
                : msg.sender === "Lena" 
                  ? `${colors.bg} ${colors.border}` 
                  : "bg-white/5 border-white/10"
            }`}
          >
            {msg.sender === "Outcome" ? (
               <div className="flex items-center gap-2">
                 <CheckCircle2 className="w-4 h-4 text-green-400" />
                 <span className="text-xs font-bold text-white">{msg.text}</span>
               </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-1">
                  <span className={`text-[8px] font-bold uppercase tracking-widest ${msg.sender === 'Lena' ? colors.text : 'text-zinc-500'}`}>
                    {msg.sender}
                  </span>
                  <span className="text-[8px] text-zinc-600 font-mono">{msg.time}</span>
                </div>
                <p className="text-[11px] text-zinc-300 leading-tight">{msg.text}</p>
              </>
            )}

            {/* Subtle waveform for Lena's messages */}
            {msg.sender === "Lena" && (
               <div className="mt-2 flex gap-0.5 h-1">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [1, 4, 1] }}
                      transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                      className={`w-0.5 rounded-full ${colors.stream}`}
                    />
                  ))}
               </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Pulsing indicator at the bottom to show active call */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full ${colors.bg} ${colors.border} border-2 flex items-center justify-center`}
      >
        <div className={`w-1 h-1 rounded-full ${colors.text} bg-current`} />
      </motion.div>
    </div>
  );
}
