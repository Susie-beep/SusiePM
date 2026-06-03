import { motion } from 'motion/react';
import { ExternalLink, Bot } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  color: string;
  tags: string[];
  imageUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI 营销助手",
    subtitle: "一站式大模型营销神笔",
    description: "一款基于大语言模型的智能营销内容生成与策略辅助工具。旨在帮助营销人员快速实现市场洞察、生成差异化文案，并提供投放策略优化建议，极大提升营销内容的流转效率与质量。",
    link: "https://untitled-893232541259.us-west2.run.app/",
    color: "var(--color-morandi-blue)",
    tags: ["交互Demo", "LLM驱动", "智能文案", "商业洞察"],
    imageUrl: "/ai-marketing.png"
  },
  {
    id: 2,
    title: "保险产品知识助手",
    subtitle: "一线保险业务的可追溯答疑引擎",
    description: "面向大型保险集团多业务系统（CRM、客服工作台等）的可追溯产品知识助手。系统接入千问大模型采取 RAG 架构，仅基于本地产品资料回答，并清晰展示命中文档及相关性分数，帮助一线销售、客服人员快速确认保障范围、适用场景及话术。",
    link: "https://insurance-knowledge-assistant-yk6e.vercel.app/",
    color: "var(--color-morandi-green)",
    tags: ["MVP", "RAG架构", "千问大模型", "样例知识库"],
    imageUrl: "/insurance-assistant.png"
  },
  {
    id: 3,
    title: "顾问成长游戏",
    subtitle: "面向保险代理人的游戏化养成系统",
    description: "一款面向保险代理人的游戏化成长与养成式训练系统。将高压的保险销售流程转化为可练习、可复盘的闯关体验，帮助代理人提前经历真实的客户沟通场景，沉浸式训练临场判断力、表达力与职业专业边界感。",
    link: "https://advisor-growth-game.vercel.app/",
    color: "var(--color-morandi-sand)",
    tags: ["MVP", "游戏化培训", "情景演练", "顾问养成"],
    imageUrl: "/advisor_game.png"
  }
];

export default function Projects() {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
            className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[var(--color-morandi-sand)]/50 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_-10px_rgba(92,107,192,0.3)] hover:border-[#5C6BC0] hover:ring-2 hover:ring-[#5C6BC0]/20 hover:-translate-y-1.5 transition-all duration-300 relative"
          >
            {/* Image Placeholder / App Window Section */}
            <div className="aspect-[16/10] relative bg-slate-50 border-b border-[var(--color-morandi-sand)]/20 overflow-hidden flex flex-col">
              {/* Fake Mac Header */}
              <div className="h-6 w-full bg-white/50 border-b border-[var(--color-morandi-sand)]/20 flex items-center px-4 gap-1.5 shrink-0 z-10">
                <div className="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
                <div className="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-2 h-2 rounded-full bg-[#27c93f]"></div>
              </div>
              
              <div className="flex-1 flex items-center justify-center relative overflow-hidden">
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt={project.title} className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <>
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-br from-transparent to-[var(--color-morandi-blue)]"></div>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-[var(--color-morandi-sand)]/50 flex items-center justify-center text-[var(--color-morandi-blue)] z-10"
                    >
                      <Bot size={28} />
                    </motion.div>
                  </>
                )}

                <div className="absolute top-4 right-4 bg-white p-2 rounded-full text-[var(--color-morandi-dark)] shadow-[0_2px_8px_rgba(0,0,0,0.08)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 border border-[var(--color-morandi-sand)]/50">
                  <ExternalLink size={16} />
                </div>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <div className="mb-8 flex-1">
                <h3 className="text-2xl font-bold text-[var(--color-morandi-dark)] mb-2 group-hover:text-[var(--color-morandi-blue)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[15px] font-medium text-[var(--color-morandi-muted)] mb-4">
                  {project.subtitle}
                </p>
                <div className="w-full h-[1px] bg-[var(--color-morandi-sand)]/30 mb-4"></div>
                <p className="text-[var(--color-morandi-muted)]/90 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="px-3 py-1.5 bg-[var(--color-morandi-blue)]/5 text-[var(--color-morandi-blue)] border border-[var(--color-morandi-blue)]/10 text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
