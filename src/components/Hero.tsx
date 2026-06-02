import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center text-center px-6 pt-16 pb-8 max-w-3xl mx-auto relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide text-[#5C6BC0]">
          我的作品
        </h1>
        
        <p className="text-lg md:text-xl text-[var(--color-morandi-muted)] font-sans">
          专注于AI与商业场景结合，通过Vibe Coding快速验证产品想法
        </p>
      </motion.div>
    </section>
  );
}
