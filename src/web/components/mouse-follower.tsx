import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

export function MouseFollower() {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      const isInteractive = target.closest("button, a, [role='button'], .cursor-pointer");
      setIsHovering(!!isInteractive);
      
      const text = target.closest("[data-cursor]")?.getAttribute("data-cursor") || "";
      setCursorText(text);
    };

    window.addEventListener("mousemove", moveMouse);
    return () => window.removeEventListener("mousemove", moveMouse);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] hidden md:block">
      <motion.div
        className="absolute top-0 left-0 flex items-center justify-center"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 80 : 20,
            height: isHovering ? 80 : 20,
            backgroundColor: isHovering ? "rgba(34, 211, 238, 0.15)" : "rgba(255, 255, 255, 1)",
            borderWidth: isHovering ? 1 : 0,
            borderColor: "rgba(34, 211, 238, 0.5)",
          }}
          className="rounded-full backdrop-blur-[2px] relative flex items-center justify-center transition-colors duration-300"
        >
          <AnimatePresence>
            {cursorText && (
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="text-[10px] font-black uppercase tracking-widest text-cyan-400 whitespace-nowrap"
              >
                {cursorText}
              </motion.span>
            )}
          </AnimatePresence>
          
          <motion.div 
            animate={{
              scale: isHovering ? [1, 1.2, 1] : 1,
              opacity: isHovering ? [0.3, 0.6, 0.3] : 0,
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-[-4px] border border-cyan-500/30 rounded-full"
          />
        </motion.div>
      </motion.div>

      {/* Trailing secondary cursor */}
      <motion.div
        className="absolute top-0 left-0 w-4 h-4 rounded-full bg-magenta-500/20 blur-sm"
        style={{
          x: useSpring(mouseX, { damping: 40, stiffness: 200 }),
          y: useSpring(mouseY, { damping: 40, stiffness: 200 }),
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </div>
  );
}
