import { motion } from "framer-motion";

export const MeshGradient = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full opacity-50"
      >
        <defs>
          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="50" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="goo"
            />
          </filter>
        </defs>
        <g filter="url(#blur)">
          <motion.circle
            cx="20%"
            cy="20%"
            r="300"
            fill="rgba(6, 182, 212, 0.4)" // Cyan
            animate={{
              cx: ["20%", "40%", "20%"],
              cy: ["20%", "60%", "20%"],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="80%"
            cy="30%"
            r="350"
            fill="rgba(192, 38, 211, 0.3)" // Magenta
            animate={{
              cx: ["80%", "60%", "80%"],
              cy: ["30%", "10%", "30%"],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="50%"
            cy="80%"
            r="400"
            fill="rgba(59, 130, 246, 0.3)" // Blue
            animate={{
              cx: ["50%", "30%", "50%"],
              cy: ["80%", "90%", "80%"],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
        </g>
      </svg>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[100px]" />
    </div>
  );
};
