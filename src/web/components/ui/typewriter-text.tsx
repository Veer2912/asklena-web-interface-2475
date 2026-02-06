import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayedText, setDisplayedText] = useState("");
  const controls = useAnimation();

  useEffect(() => {
    if (text) {
      setDisplayedText("");
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i >= text.length) clearInterval(interval);
      }, 30);
      return () => clearInterval(interval);
    }
  }, [text]);

  return (
    <span className="inline-block min-h-[1.5em]">
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-1 h-[1em] bg-cyan-500 ml-1 align-middle"
      />
    </span>
  );
};
