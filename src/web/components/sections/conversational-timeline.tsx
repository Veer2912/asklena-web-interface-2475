import { motion } from "framer-motion";
import { MessageSquare, Phone, CheckCircle2, Clock, Play } from "lucide-react";

const caseStudies = [
  {
    company: "MediCare Plus",
    industry: "Healthcare",
    summary: "Automated appointment scheduling and patient verification.",
    result: "Appointment scheduled in 1m 20s",
    transcript: [
      { speaker: "Customer", text: "Hi, I need to see Dr. Miller about my test results.", time: "10:02:15 AM" },
      { speaker: "Lena Agent", text: "I can help with that. I see Dr. Miller has an opening tomorrow at 11 AM or Friday at 3 PM. Would one of those work?", time: "10:02:16 AM" },
      { speaker: "Customer", text: "Friday at 3 PM is better for me.", time: "10:02:25 AM" },
      { speaker: "Lena Agent", text: "Perfect. I've booked your appointment for Friday at 3 PM. You'll receive a confirmation text shortly.", time: "10:02:27 AM" }
    ]
  },
  {
    company: "SwiftLogistics",
    industry: "Logistics",
    summary: "Real-time package tracking and delivery redirection.",
    result: "Delivery address updated successfully",
    transcript: [
      { speaker: "Customer", text: "Where is my package? It was supposed to be here by now.", time: "02:15:40 PM" },
      { speaker: "Lena Agent", text: "Checking that for you. Package #8291 is currently 5 minutes away. Would you like to leave instructions for the driver?", time: "02:15:41 PM" },
      { speaker: "Customer", text: "Yes, please ask them to leave it at the side door.", time: "02:15:52 PM" },
      { speaker: "Lena Agent", text: "Done. I've notified the driver to leave the package at the side door. Is there anything else?", time: "02:15:53 PM" }
    ]
  },
  {
    company: "GlobalFinance",
    industry: "Finance",
    summary: "Suspicious activity reporting and card management.",
    result: "Card secured and new one issued",
    transcript: [
      { speaker: "Customer", text: "I think my card was stolen. I see a charge I didn't make.", time: "11:45:10 AM" },
      { speaker: "Lena Agent", text: "I'm sorry to hear that. I've located a $420 charge from an hour ago. Shall I freeze your card now?", time: "11:45:11 AM" },
      { speaker: "Customer", text: "Yes, please. And I need a new card.", time: "11:45:22 AM" },
      { speaker: "Lena Agent", text: "Your card is now frozen. A replacement card will arrive at your registered address in 3-5 business days.", time: "11:45:24 AM" }
    ]
  }
];

export function ConversationalTimeline() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Conversational Timeline
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
            Step into the flow of real-world interactions. See how Lena handles complex enterprise scenarios with grace and speed.
          </p>
        </div>

        <div className="space-y-24">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.company}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              {/* Timeline Stem */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/5 to-transparent -translate-x-1/2 hidden md:block" />

              <div className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Info Card */}
                <div className="flex-1 w-full">
                  <div className="p-8 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center border border-white/5">
                        <Phone className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{study.company}</h3>
                        <p className="text-sm text-cyan-400 font-medium uppercase tracking-widest">{study.industry}</p>
                      </div>
                    </div>
                    <p className="text-zinc-400 mb-8 leading-relaxed italic">
                      "{study.summary}"
                    </p>
                    <div className="flex items-center gap-3 p-4 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-400">
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="text-sm font-bold">{study.result}</span>
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10 hidden md:block">
                  <div className="w-12 h-12 rounded-full bg-black border-4 border-zinc-900 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" />
                  </div>
                </div>

                {/* Transcript Card */}
                <div className="flex-1 w-full">
                  <div className="space-y-4">
                    {study.transcript.map((line, lIdx) => (
                      <motion.div
                        key={lIdx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: lIdx * 0.1 }}
                        className={`flex flex-col ${line.speaker === 'Customer' ? 'items-end' : 'items-start'}`}
                      >
                        <div className="flex items-center gap-2 mb-1 px-2">
                           {line.speaker === 'Lena Agent' && (
                             <div className="flex gap-0.5 h-2 items-center">
                               {[...Array(3)].map((_, i) => (
                                 <div key={i} className="w-0.5 h-full bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                               ))}
                             </div>
                           )}
                           <span className={`text-[10px] font-bold uppercase tracking-widest ${line.speaker === 'Lena Agent' ? 'text-cyan-400' : 'text-zinc-500'}`}>
                             {line.speaker}
                           </span>
                           <Clock className="w-3 h-3 text-zinc-600" />
                           <span className="text-[10px] text-zinc-600 font-mono">{line.time.split(' ')[0]}</span>
                        </div>
                        <div className={`p-4 rounded-2xl text-sm ${
                          line.speaker === 'Lena Agent' 
                            ? 'bg-white/5 border border-white/10 text-white rounded-tl-none' 
                            : 'bg-zinc-900/80 border border-white/5 text-zinc-400 rounded-tr-none'
                        }`}>
                          {line.text}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-32 text-center">
           <motion.button
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="px-8 py-4 rounded-full bg-white text-black font-bold flex items-center gap-3 mx-auto"
           >
             <Play className="w-5 h-5 fill-current" />
             Listen to Full Case Studies
           </motion.button>
        </div>
      </div>
    </section>
  );
}
