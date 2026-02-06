import { motion } from "framer-motion";

export const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  const characters = Array.from(title);

  return (
    <div className="mb-16 md:mb-24 text-center">
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-cyan-400 text-sm font-bold uppercase tracking-[0.3em] mb-4 block"
        >
          {subtitle}
        </motion.span>
      )}
      <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter flex flex-wrap justify-center gap-x-3">
        {characters.map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, rotateX: -90, y: 20 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: i * 0.03,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block origin-bottom"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100px" }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="h-1 bg-gradient-to-r from-cyan-500 to-magenta-500 mx-auto mt-8 rounded-full"
      />
    </div>
  );
};
