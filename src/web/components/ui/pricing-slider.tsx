import { motion } from "framer-motion";

export const PricingSlider = ({ value, onChange, min = 100, max = 50000 }: { value: number; onChange: (v: number) => void; min?: number; max?: number }) => {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="relative w-full h-12 flex items-center group">
      <div className="absolute w-full h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          className="h-full bg-gradient-to-r from-cyan-500 to-magenta-500"
        />
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={100}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="absolute w-full h-full opacity-0 cursor-pointer z-10"
      />
      <motion.div
        animate={{ left: `${percentage}%` }}
        className="absolute w-6 h-6 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.5)] border-4 border-black pointer-events-none -ml-3"
      >
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-black px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {value.toLocaleString()} mins
        </div>
      </motion.div>
    </div>
  );
};
