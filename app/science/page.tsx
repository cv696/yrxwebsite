"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Activity, Brain, Wind, Sparkles, ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.19, 1, 0.22, 1] as const,
      delay,
    },
  }),
};

const articles = [
  {
    id: "smoke-inhalation-therapy",
    title: "中医烟熏吸入疗法 · 古代源流与临床考证",
    subtitle: "从先秦熏燎到隋唐成熟",
    description: "系统考证烟熏吸入疗法在古代文献中的记载与发展：先秦萌芽、汉代奠基、隋唐成熟，涵盖咳嗽、哮喘等呼吸系统疾病的传统方药与操作规范。",
    href: "/science/smoke-inhalation-therapy",
    icon: "千年疗法",
  },
  {
    id: "ambergris",
    title: "龙涎香 · 海底千年陈化的定香剂",
    subtitle: "白色龙涎香为何价值昂贵",
    description: "从抹香鲸体内取出到海水百年陈化，探寻龙涎香的形成过程与它在香氛中不可替代的定香作用。",
    href: "/science/ambergris",
    icon: "海珍之香",
  },
  {
    id: "smoke-therapy",
    title: "中医古籍中的烟熏疗法与现代医学研究",
    subtitle: "从古籍文献到临床验证",
    description: "从《五十二病方》到《本草纲目》，探寻中医烟熏疗法的历史渊源与现代医学研究支持，含慢性湿疹、艾烟消毒等多项临床研究。",
    href: "/science/smoke-therapy",
    icon: "古籍与现代",
  },
  {
    id: "ancient-wisdom",
    title: "香灸 · 传承千年的中医智慧",
    subtitle: "纯中药吸入疗法的安全之选",
    description: "从《山海经》到《本草纲目》，探寻古籍中的香灸印记，结合现代科学研究，验证纯中药香灸的安全与疗效。",
    href: "/science/ancient-wisdom",
    icon: "古籍传承",
  },
  {
    id: "no-accelerant",
    title: "拒绝助燃剂 · 低温慢燃才养生",
    subtitle: "从燃烧温度看懂致癌风险",
    description: "燃烧温度直接决定是否致癌。缘融轩坚守0添加底线，200~300℃低温慢燃，从根源规避健康风险。",
    href: "/science/no-accelerant",
    icon: "健康安全",
  },
];

export default function SciencePage() {
  return (
    <div className="space-y-20 pb-20">
      {/* Heading */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="space-y-4"
      >
        <div>
          <h1 className="font-heading text-xl tracking-[0.3em] text-accent sm:text-2xl">
            科学与养生
          </h1>
          <p className="mt-2 text-xs font-body uppercase tracking-[0.28em] text-ink/60">
            SCIENCE &amp; WELLNESS
          </p>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/75 sm:text-base">
          缘融轩相信，药香不仅停留在传统与信仰之中，也能被现代科学语言解读——
          从心率变异度（HRV），到迷走神经与嗅觉通路，每一缕香都有其可以被观察的路径。
        </p>
      </motion.section>

      {/* 1. Science of Scent / HRV - 保留完整内容 */}
      <section className="space-y-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-heading text-lg tracking-[0.26em] text-accent sm:text-xl">
                香气的科学 · HRV
              </h2>
              <p className="mt-2 text-sm text-ink/70 sm:text-base">
                通过心率变异度（Heart Rate Variability, HRV）的变化，观察香气对身心放松
                与自主神经系统的调节作用。
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] lg:items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          custom={0.1}
        >
          {/* Diagram: Nose -> Olfactory bulb -> Limbic -> Relax */}
          <div className="space-y-4 rounded-3xl border border-sandalwood/18 bg-paper/95 p-5 shadow-[0_16px_52px_rgba(0,0,0,0.05)]">
            <p className="text-[11px] font-body uppercase tracking-[0.24em] text-ink/55">
              THE PATH OF SCENT
            </p>
            <p className="text-sm leading-relaxed text-ink/75 sm:text-base">
              香气并非只停留在鼻腔，而是通过嗅觉通路，直达与情绪、记忆相关的边缘系统，
              进而影响迷走神经张力与 HRV。
            </p>
            <div className="mt-4 grid gap-4 text-sm text-ink/80 sm:text-base">
              <div className="grid gap-3 sm:grid-cols-4">
                <div className="flex flex-col items-center rounded-2xl bg-ash/40 px-3 py-4 text-center">
                  <Wind className="mb-2 h-5 w-5 text-sandalwood" strokeWidth={1.5} />
                  <p className="font-heading text-[11px] tracking-[0.22em] text-sandalwood">
                    鼻腔
                  </p>
                  <p className="mt-1 text-[11px] text-ink/65">吸入药香分子</p>
                </div>
                <div className="flex flex-col items-center rounded-2xl bg-ash/30 px-3 py-4 text-center">
                  <Brain
                    className="mb-2 h-5 w-5 text-sandalwood"
                    strokeWidth={1.5}
                  />
                  <p className="font-heading text-[11px] tracking-[0.22em] text-sandalwood">
                    嗅球
                  </p>
                  <p className="mt-1 text-[11px] text-ink/65">将信号转换为神经电活动</p>
                </div>
                <div className="flex flex-col items-center rounded-2xl bg-ash/40 px-3 py-4 text-center">
                  <Sparkles
                    className="mb-2 h-5 w-5 text-sandalwood"
                    strokeWidth={1.5}
                  />
                  <p className="font-heading text-[11px] tracking-[0.22em] text-sandalwood">
                    边缘系统
                  </p>
                  <p className="mt-1 text-[11px] text-ink/65">情绪、记忆与安全感中枢</p>
                </div>
                <div className="flex flex-col items-center rounded-2xl bg-ash/30 px-3 py-4 text-center">
                  <Activity
                    className="mb-2 h-5 w-5 text-sandalwood"
                    strokeWidth={1.5}
                  />
                  <p className="font-heading text-[11px] tracking-[0.22em] text-sandalwood">
                    放松 · HRV
                  </p>
                  <p className="mt-1 text-[11px] text-ink/65">提升迷走神经张力、HRV 上升</p>
                </div>
              </div>
            </div>
          </div>

        </motion.div>
      </section>

      {/* 2. 文章列表 */}
      <section className="space-y-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <div>
            <h2 className="font-heading text-lg tracking-[0.26em] text-accent sm:text-xl">
              深度文章
            </h2>
            <p className="mt-2 text-sm text-ink/70 sm:text-base">
              点击文章标题，阅读详细内容。
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          custom={0.1}
        >
          {articles.map((article) => (
            <Link
              key={article.id}
              href={article.href}
              className="group flex items-start justify-between rounded-3xl border border-sandalwood/18 bg-paper/95 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-0.5 hover:border-sandalwood/35 hover:shadow-[0_16px_52px_rgba(0,0,0,0.08)]"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sandalwood/10 text-sandalwood/80">
                  <span className="text-[11px] font-body tracking-wider">{article.icon}</span>
                </div>
                <div>
                  <h3 className="font-heading text-sm tracking-[0.24em] text-accent sm:text-base">
                    {article.title}
                  </h3>
                  <p className="mt-1 text-xs text-ink/60 sm:text-sm">
                    {article.subtitle}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70 sm:text-base">
                    {article.description}
                  </p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 flex-shrink-0 text-sandalwood/50 transition-colors group-hover:translate-x-1 group-hover:text-sandalwood/80" strokeWidth={1.5} />
            </Link>
          ))}
        </motion.div>
      </section>
    </div>
  );
}