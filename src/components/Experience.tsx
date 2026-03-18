import { motion } from 'motion/react';

const educations = [
  {
    id: 'edu-1',
    school: "英国伯明翰大学",
    major: "投资学",
    degree: "硕士",
    period: "2018.10 - 2019.12"
  },
  {
    id: 'edu-2',
    school: "江西财经大学",
    major: "管理会计",
    degree: "本科",
    period: "2014.09 - 2018.07"
  }
];

const experiences = [
  {
    id: 1,
    role: "高级产品经理",
    department: "风险合规BU",
    company: "太保科技有限公司（太平洋保险集团科技子公司）",
    period: "2023.06 - 至今",
    bullets: [
      "负责量化资本管理系统的需求分析，支持偿付能力监控、分红策略及资本池管理，提升风险资本管理精细化水平。",
      "负责风险合规系统需求分析，设计集团对产寿资管等子公司风险监控指标看板。探索LLM在法务与合规中的应用，设计基于知识库的AI Agent，支持系统操作与合规问答场景，通过RAG提升知识检索效率。",
      "主导碳管理系统的产品设计，完成碳管理系统功能与原型设计，支持填报进度跟踪和质量检查，可视化排放分布。推动系统上线并持续优化，项目获上海金融科技优秀解决方案。",
      "负责集团业财一体系统可视化开发，用FineBI搭建8个维度的分析报表，设计图表百余张，实现对业务转化率、资本使用效率等指标的监控，支持经营决策与营销策略调整。",
      "协调完成太保首笔数据资产入表，主导模型调研、评估筛选、数据资产确权及入表方案。"
    ]
  },
  {
    id: 2,
    role: "数据产品经理",
    department: "数据产品部",
    company: "上海恒生聚源数据服务有限公司（恒生电子子公司）",
    period: "2022.04 - 2023.03",
    bullets: [
      "负责宏观经济、ESG、研报数据等投研数据产品的需求分析、产品建设与推广，服务保险资管、公募基金、券商、银行理财等机构客户。",
      "承接前台投研、中台风控及研究支持场景需求，沟通客户需求进行产品路演、满意度评估、产品优化方案、POC测试、报价方案和招投标材料等的输出。",
      "负责第三方数据源评估整合与自研方案评估，丰富行业数据和ESG量化指标，协调客户、销售、研发等多方资源跟进项目进度、新增需求、上线验收和持续迭代。"
    ]
  },
  {
    id: 3,
    role: "项目经理",
    department: "绿色金融服务部",
    company: "深圳绿色交易所有限公司",
    period: "2020.11 - 2022.03",
    bullets: [
      "碳交易研究：深度参与碳交易研究，碳配额交易数据分析，创新碳资产衍生品，完成政府课题报告撰写支持碳交易市场完善。",
      "投融资对接：调研 100+ 低碳项目与协会，完善评价标准与筛选流程，组织多场政银企对接会促进产融结合。"
    ]
  }
];

export default function Experience() {
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
            Background
          </h2>
          <div className="h-[1px] flex-1 bg-[var(--color-morandi-sand)]/50"></div>
        </div>

        <div className="mb-20">
          <h3 className="text-xl font-serif italic text-[var(--color-morandi-pink)] mb-8">工作经历</h3>
          <div className="border-t border-[var(--color-morandi-sand)]/50">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="py-10 border-b border-[var(--color-morandi-sand)]/50 flex flex-col md:flex-row gap-6 md:gap-12 hover:bg-white/20 transition-colors px-6 -mx-6 rounded-2xl"
              >
                <div className="md:w-1/3 shrink-0">
                  <div className="text-sm font-mono text-[var(--color-morandi-muted)] mb-3">{exp.period}</div>
                  <h4 className="text-xl font-bold text-[var(--color-morandi-dark)] leading-snug">{exp.company}</h4>
                  <div className="text-base font-serif italic text-[var(--color-morandi-blue)] mt-2">
                    {exp.department} · {exp.role}
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="space-y-4 text-[var(--color-morandi-muted)] text-base leading-relaxed text-justify">
                    {exp.bullets.map((bullet, bIdx) => (
                      <p key={bIdx}>{bullet}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-serif italic text-[var(--color-morandi-pink)] mb-8">教育背景</h3>
          <div className="border-t border-[var(--color-morandi-sand)]/50">
            {educations.map((edu, index) => (
              <motion.div 
                key={edu.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="py-8 border-b border-[var(--color-morandi-sand)]/50 flex flex-col md:flex-row gap-6 md:gap-12 hover:bg-white/20 transition-colors px-6 -mx-6 rounded-2xl items-baseline"
              >
                <div className="md:w-1/3 shrink-0">
                  <div className="text-sm font-mono text-[var(--color-morandi-muted)] mb-2 md:mb-0">{edu.period}</div>
                </div>
                <div className="md:w-2/3 flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
                  <h4 className="text-lg font-bold text-[var(--color-morandi-dark)]">{edu.school}</h4>
                  <p className="text-[var(--color-morandi-muted)] mt-1 sm:mt-0 font-serif italic">{edu.major} · {edu.degree}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
