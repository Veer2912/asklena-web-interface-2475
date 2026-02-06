import { motion } from "framer-motion";
import { useState, useRef, MouseEvent, ReactNode } from "react";

interface RippleButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const RippleButton = ({ children, onClick, className = "" }: RippleButtonProps) => {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  const nextId = useRef(0);

  const addRipple = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const id = nextId.current++;
    setRipples(prev => [...prev, { x, y, id }]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== id));
    }, 1000);

    if (onClick) onClick();
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.02 }}
      onClick={addRipple}
      className={`relative overflow-hidden cursor-pointer ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {ripples.map(ripple => (
        <motion.span
          key={ripple.id}
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute bg-white/20 rounded-full pointer-events-none"
          style={{
            left: ripple.x - 20,
            top: ripple.y - 20,
            width: 40,
            height: 40,
          }}
        />
      ))}
    </motion.button>
  );
};
