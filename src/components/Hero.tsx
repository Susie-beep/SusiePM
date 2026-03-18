import { motion } from 'motion/react';
import { Mail, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6 pt-10 max-w-5xl mx-auto relative">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full relative z-10"
      >
        <h1 className="text-7xl md:text-9xl font-bold mb-6 text-[var(--color-morandi-dark)] tracking-tighter">
          涂诗
        </h1>
        <h2 className="text-2xl md:text-3xl mb-12 text-[var(--color-morandi-blue)] font-serif italic font-light">
          高级产品经理 / 数据产品经理
        </h2>
        
        <p className="text-lg md:text-xl leading-relaxed mb-16 text-[var(--color-morandi-muted)] max-w-3xl mx-auto">
          5年金融行业数据与系统产品经验，覆盖投研数据、风险管理、资本管理及ESG数据产品建设。熟悉保险及资管业务链条（资产配置、风险控制、资本管理），具备B端产品设计、BI报表开发与vibe coding能力，具备AI在投研与企业系统中应用探索经验，包括LLM知识问答与数据分析场景，跨部门协作能力强。
        </p>

        <div className="flex flex-wrap justify-center gap-8 text-[var(--color-morandi-dark)]">
          <a href="mailto:MSTushi@outlook.com" className="group flex items-center gap-3 hover:text-[var(--color-morandi-pink)] transition-colors">
            <div className="w-10 h-10 rounded-full border border-[var(--color-morandi-sand)] flex items-center justify-center group-hover:border-[var(--color-morandi-pink)] transition-colors">
              <Mail size={18} />
            </div>
            <span className="text-base font-medium tracking-wide">MSTushi@outlook.com</span>
          </a>
          <div className="group flex items-center gap-3 hover:text-[var(--color-morandi-green)] transition-colors cursor-default">
            <div className="w-10 h-10 rounded-full border border-[var(--color-morandi-sand)] flex items-center justify-center group-hover:border-[var(--color-morandi-green)] transition-colors">
              <Phone size={18} />
            </div>
            <span className="text-base font-medium tracking-wide">182-7911-5589</span>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-morandi-muted)]/50"
      >
        <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--color-morandi-muted)]/50 to-transparent"></div>
      </motion.div>
    </section>
  );
}
