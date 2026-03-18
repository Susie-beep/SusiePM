import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "塔罗运势",
    description: "基于Web的塔罗牌阵占卜与运势解析应用，提供沉浸式的交互体验与个性化的解读服务。",
    link: "https://destiny5-0.pages.dev/",
    color: "var(--color-morandi-pink)"
  },
  {
    id: 2,
    title: "链上“死了么”",
    description: "一款结合区块链技术的创新Web3应用（Sleme），探索去中心化遗嘱与生命状态预警机制。",
    link: "https://sleme.lovable.app",
    color: "var(--color-morandi-green)"
  }
];

export default function Projects() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-4xl font-serif font-bold text-[var(--color-morandi-dark)]">
            Selected Works
          </h2>
          <div className="h-[1px] flex-1 bg-[var(--color-morandi-sand)]/50"></div>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group block relative p-8 md:p-12 rounded-[2rem] bg-white/30 border border-[var(--color-morandi-sand)]/40 backdrop-blur-sm overflow-hidden hover:bg-white/50 transition-all duration-500"
            >
              {/* Decorative background glow */}
              <div 
                className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl -z-10 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                style={{ backgroundColor: project.color }}
              ></div>
              
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="max-w-2xl">
                  <h3 className="text-3xl md:text-4xl font-bold font-serif text-[var(--color-morandi-dark)] mb-4 group-hover:text-[var(--color-morandi-blue)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-lg text-[var(--color-morandi-muted)] leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-full border border-[var(--color-morandi-dark)] flex items-center justify-center text-[var(--color-morandi-dark)] group-hover:bg-[var(--color-morandi-dark)] group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
