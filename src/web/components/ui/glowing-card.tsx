import { motion } from "framer-motion";
import { ReactNode } from "react";

export const GlowingCard = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`group relative p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl overflow-hidden ${className}`}
    >
      {/* Animated Border */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent,transparent,rgba(34,211,238,0.3),transparent)]"
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-[1px] bg-black/80 rounded-[2.4rem] z-1" />
      
      <div className="relative z-10">
        {children}
      </div>

      {/* Hover Glow */}
      <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-cyan-500/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};
