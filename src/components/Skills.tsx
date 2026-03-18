import { motion } from 'motion/react';

const skillCategories = [
  {
    title: "技能",
    items: ["Vibe Coding", "FineBI", "SQL", "Python", "墨刀", "Axure"]
  },
  {
    title: "语言",
    items: ["普通话 (母语)", "英语 (口语流利，雅思7.5)", "韩语 (交换生经验，简单会话)"]
  },
  {
    title: "证书",
    items: ["CFA二级", "基金\\证券\\会计从业资格证", "阿里云ACA", "计算机二级C语言"]
  }
];

export default function Skills() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-6 mb-16">
          <div className="h-[1px] flex-1 bg-[var(--color-morandi-sand)]/50"></div>
          <h2 className="text-4xl font-serif font-bold text-[var(--color-morandi-dark)]">
            Capabilities
          </h2>
        </div>

        <div className="flex flex-col gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col md:flex-row gap-6 md:gap-12 items-start"
            >
              <h3 className="md:w-1/4 text-xl font-serif italic text-[var(--color-morandi-blue)] shrink-0 pt-2">
                {category.title}
              </h3>
              <div className="md:w-3/4 flex flex-wrap gap-3">
                {category.items.map((item, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-5 py-2.5 bg-white/40 backdrop-blur-sm text-[var(--color-morandi-dark)] text-sm rounded-full border border-[var(--color-morandi-sand)]/50 hover:bg-[var(--color-morandi-sand)]/30 hover:border-[var(--color-morandi-blue)]/50 transition-all duration-300 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
