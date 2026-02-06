import { motion } from "framer-motion";

export const GlitchText = ({ text }: { text: string }) => {
  return (
    <div className="relative inline-block group">
      <span className="relative z-10">{text}</span>
      <motion.span
        className="absolute top-0 left-0 -z-10 text-cyan-500 opacity-70"
        animate={{
          x: [0, -2, 2, -1, 0],
          y: [0, 1, -1, 2, 0],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "linear",
        }}
        style={{ clipPath: "inset(10% 0 30% 0)" }}
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute top-0 left-0 -z-10 text-magenta-500 opacity-70"
        animate={{
          x: [0, 2, -2, 1, 0],
          y: [0, -1, 1, -2, 0],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "linear",
          delay: 0.1,
        }}
        style={{ clipPath: "inset(40% 0 10% 0)" }}
      >
        {text}
      </motion.span>
    </div>
  );
};
