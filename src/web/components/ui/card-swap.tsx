import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
  ReactNode,
  RefObject,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ============================================================================
// CARD SWAP COMPONENT - 3D Stacked Card Animation
// Inspired by modern SaaS landing pages with GSAP-like animations using Framer Motion
// ============================================================================

export interface CardSwapProps {
  width?: number | string;
  height?: number | string;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  onCardClick?: (idx: number) => void;
  children: ReactNode;
}

export interface SwapCardProps extends React.HTMLAttributes<HTMLDivElement> {
  customClass?: string;
}

export const SwapCard = forwardRef<HTMLDivElement, SwapCardProps>(
  ({ customClass, children, ...rest }, ref) => (
    <div
      ref={ref}
      {...rest}
      className={`absolute rounded-2xl ${customClass ?? ''} ${rest.className ?? ''}`.trim()}
      style={{
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        backfaceVisibility: 'hidden',
        ...rest.style
      }}
    >
      {children}
    </div>
  )
);
SwapCard.displayName = 'SwapCard';

interface CardPosition {
  x: number;
  y: number;
  z: number;
  scale: number;
  opacity: number;
  zIndex: number;
}

const CardSwap: React.FC<CardSwapProps> = ({
  width = 450,
  height = 380,
  cardDistance = 50,
  verticalDistance = 40,
  delay = 4000,
  pauseOnHover = true,
  onCardClick,
  children
}) => {
  const childArr = useMemo(
    () => Children.toArray(children) as ReactElement<SwapCardProps>[],
    [children]
  );
  
  const [order, setOrder] = useState<number[]>(
    Array.from({ length: childArr.length }, (_, i) => i)
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate position for each card based on its index in the stack
  const getCardPosition = (stackIndex: number): CardPosition => {
    const total = childArr.length;
    return {
      x: stackIndex * cardDistance,
      y: -stackIndex * verticalDistance,
      z: -stackIndex * 50,
      scale: 1 - stackIndex * 0.03,
      opacity: 1 - stackIndex * 0.15,
      zIndex: total - stackIndex
    };
  };

  // Swap animation - move front card to back
  const swapCards = () => {
    if (isAnimating || isPaused || childArr.length < 2) return;
    
    setIsAnimating(true);
    
    // After animation completes, update order
    setTimeout(() => {
      setOrder(prev => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
      setIsAnimating(false);
    }, 800);
  };

  // Auto-swap interval
  useEffect(() => {
    const interval = setInterval(swapCards, delay);
    return () => clearInterval(interval);
  }, [delay, isPaused, isAnimating]);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ 
        width, 
        height,
        perspective: '1200px',
        perspectiveOrigin: 'center center'
      }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <AnimatePresence>
        {order.map((cardIndex, stackPosition) => {
          const child = childArr[cardIndex];
          if (!isValidElement<SwapCardProps>(child)) return null;
          
          const pos = getCardPosition(stackPosition);
          const isFront = stackPosition === 0;
          const isLeaving = isAnimating && isFront;
          
          return (
            <motion.div
              key={cardIndex}
              className="absolute left-1/2 top-1/2"
              initial={false}
              animate={{
                x: isLeaving ? pos.x : pos.x,
                y: isLeaving ? 400 : pos.y,
                z: pos.z,
                scale: isLeaving ? 0.8 : pos.scale,
                opacity: isLeaving ? 0 : pos.opacity,
                rotateY: isLeaving ? -15 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1,
              }}
              style={{
                width,
                height,
                zIndex: isLeaving ? 0 : pos.zIndex,
                transformStyle: 'preserve-3d',
                translateX: '-50%',
                translateY: '-50%',
              }}
              onClick={() => onCardClick?.(cardIndex)}
            >
              {cloneElement(child, {
                style: { width: '100%', height: '100%', ...(child.props.style ?? {}) }
              })}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default CardSwap;
