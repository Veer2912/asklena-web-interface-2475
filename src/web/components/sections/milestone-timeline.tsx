import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Flag, Rocket, Users, Globe, ShieldCheck, Briefcase, Star } from "lucide-react";

const milestones = [
  {
    year: "2022",
    title: "Founded",
    description: "Asklena was born with the mission to humanize AI conversations.",
    icon: <Flag className="w-6 h-6" />,
    color: "cyan"
  },
  {
    year: "2023 Q1",
    title: "First Agent Live",
    description: "Our first enterprise voice agent deployed in a Fortune 500 company.",
    icon: <Rocket className="w-6 h-6" />,
    color: "blue"
  },
  {
    year: "2023 Q3",
    title: "1M Conversations",
    description: "Reached the milestone of one million successful customer interactions.",
    icon: <Users className="w-6 h-6" />,
    color: "indigo"
  },
  {
    year: "2024 Q1",
    title: "40+ Languages",
    description: "Global expansion with support for over 40 languages and dialects.",
    icon: <Globe className="w-6 h-6" />,
    color: "purple"
  },
  {
    year: "2024 Q2",
    title: "SOC 2 Certified",
    description: "Achieved the highest standard for data security and privacy.",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "pink"
  },
  {
    year: "2024 Q4",
    title: "10M Conversations",
    description: "Processing over 10 million conversations with sub-200ms latency.",
    icon: <Star className="w-6 h-6" />,
    color: "magenta"
  },
  {
    year: "Today",
    title: "Enterprise Choice",
    description: "Preferred partner for the world's most demanding enterprises.",
    icon: <Briefcase className="w-6 h-6" />,
    color: "cyan"
  }
];

const colorMap: Record<string, string> = {
  cyan: "from-cyan-500 to-cyan-400",
  blue: "from-blue-500 to-blue-400",
  indigo: "from-indigo-500 to-indigo-400",
  purple: "from-purple-500 to-purple-400",
  pink: "from-pink-500 to-pink-400",
  magenta: "from-fuchsia-500 to-fuchsia-400"
};

const shadowMap: Record<string, string> = {
  cyan: "shadow-cyan-500/50",
  blue: "shadow-blue-500/50",
  indigo: "shadow-indigo-500/50",
  purple: "shadow-purple-500/50",
  pink: "shadow-pink-500/50",
  magenta: "shadow-fuchsia-500/50"
};

export function MilestoneTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <section 
      ref={containerRef}
      className="py-32 bg-black relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tighter"
          >
            The Journey to Intelligence
          </motion.h2>
          <p className="text-zinc-500 text-lg max-w-xl mx-auto">
            From a bold vision to an industry leader. We're building the future of communication, one conversation at a time.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          <motion.div 
            style={{ scaleY: pathLength, originY: 0 }}
            className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-400 -translate-x-1/2"
          />

          <div className="space-y-32">
            {milestones.map((item, idx) => (
              <TimelineItem key={idx} item={item} idx={idx} />
            ))}
          </div>

          {/* Future Milestone */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-40 text-center relative"
          >
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-400 animate-ping" />
             <h3 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">
               The Future: Your AI Team
             </h3>
             <p className="text-zinc-400">Be part of the next chapter.</p>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(6,182,212,0.05),transparent_50%)] pointer-events-none" />
    </section>
  );
}

function TimelineItem({ item, idx }: { item: typeof milestones[0], idx: number }) {
  const isEven = idx % 2 === 0;

  return (
    <div className={`relative flex items-center justify-center ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
      {/* Marker */}
      <div className="absolute left-1/2 -translate-x-1/2 z-20">
         <motion.div
           initial={{ scale: 0 }}
           whileInView={{ scale: 1 }}
           className={`w-12 h-12 rounded-full bg-black border-2 border-white/10 flex items-center justify-center ${shadowMap[item.color]} shadow-lg`}
         >
            <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${colorMap[item.color]}`} />
         </motion.div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`w-full md:w-[45%] p-8 rounded-[2.5rem] bg-zinc-900/50 border border-white/5 backdrop-blur-xl group hover:border-white/20 transition-all ${isEven ? 'text-right' : 'text-left'}`}
      >
        <div className={`flex items-center gap-4 mb-4 ${isEven ? 'flex-row-reverse' : 'flex-row'}`}>
          <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
             {item.icon}
          </div>
          <span className="text-cyan-400 font-mono font-bold tracking-widest">{item.year}</span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
        <p className="text-zinc-500 leading-relaxed">{item.description}</p>
        
        {/* Glow behind */}
        <div className={`absolute -inset-2 bg-gradient-to-br ${colorMap[item.color]} blur-2xl opacity-0 group-hover:opacity-10 transition-opacity rounded-full`} />
      </motion.div>
    </div>
  );
}
