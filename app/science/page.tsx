"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Activity, Brain, Wind, Sparkles, ChevronRight } from "lucide-react";
import { useLocale } from "@/components/locale-provider";

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

export default function SciencePage() {
  const { t } = useLocale();

  const articles = [
    {
      id: "chaos-and-order",
      title: t("青烟里的乱与序"),
      subtitle: t("疫情调元香狂潮下，一位香疗学者的孤行"),
      description: t("从市场乱象到功效型香方的科学化之路，透视疫情期间调元香狂潮背后的灰色地带，与李国荣医生五十年孤行实践的对比。"),
      href: "/science/chaos-and-order",
      icon: t("乱与序"),
    },
    {
      id: "ningxin-dingzhi",
      title: t("宁神定志香 · 一炷有深度的情绪与血管调节剂"),
      subtitle: t("37味药材 · 三条靶向通路的科学合香"),
      description: t("以现代药理学的GABA能通路、BDNF-CREB信号通路和NF-κB炎症通路为蓝图，反向设计组方，形成专为吸入式给药打造的全新香药复方。"),
      href: "/science/ningxin-dingzhi",
      icon: t("科学合香"),
    },
    {
      id: "smoke-inhalation-therapy",
      title: t("中医烟熏吸入疗法 · 古代源流与临床考证"),
      subtitle: t("从先秦熏燎到隋唐成熟"),
      description: t("系统考证烟熏吸入疗法在古代文献中的记载与发展：先秦萌芽、汉代奠基、隋唐成熟，涵盖咳嗽、哮喘等呼吸系统疾病的传统方药与操作规范。"),
      href: "/science/smoke-inhalation-therapy",
      icon: t("千年疗法"),
    },
    {
      id: "ambergris",
      title: t("龙涎香 · 海底千年陈化的定香剂"),
      subtitle: t("白色龙涎香为何价值昂贵"),
      description: t("从抹香鲸体内取出到海水百年陈化，探寻龙涎香的形成过程与它在香氛中不可替代的定香作用。"),
      href: "/science/ambergris",
      icon: t("海珍之香"),
    },
    {
      id: "smoke-therapy",
      title: t("中医古籍中的烟熏疗法与现代医学研究"),
      subtitle: t("从古籍文献到临床验证"),
      description: t("从《五十二病方》到《本草纲目》，探寻中医烟熏疗法的历史渊源与现代医学研究支持，含慢性湿疹、艾烟消毒等多项临床研究。"),
      href: "/science/smoke-therapy",
      icon: t("古籍与现代"),
    },
    {
      id: "ancient-wisdom",
      title: t("调元香 · 传承千年的中医智慧"),
      subtitle: t("纯中药吸入疗法的安全之选"),
      description: t("从《山海经》到《本草纲目》，探寻古籍中的调元香印记，结合现代科学研究，验证纯中药调元香的安全与疗效。"),
      href: "/science/ancient-wisdom",
      icon: t("古籍传承"),
    },
    {
      id: "no-accelerant",
      title: t("拒绝助燃剂 · 低温慢燃才养生"),
      subtitle: t("从燃烧温度看懂致癌风险"),
      description: t("燃烧温度直接决定是否致癌。缘融轩坚守0添加底线，200~300℃低温慢燃，从根源规避健康风险。"),
      href: "/science/no-accelerant",
      icon: t("健康安全"),
    },
  ];

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
            {t("科学与养生")}
          </h1>
          <p className="mt-2 text-xs font-body uppercase tracking-[0.28em] text-ink/60">
            SCIENCE &amp; WELLNESS
          </p>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/75 sm:text-base">
          {t("缘融轩相信，药香不仅停留在传统与信仰之中，也能被现代科学语言解读——从心率变异度（HRV），到迷走神经与嗅觉通路，每一缕香都有其可以被观察的路径。")}
        </p>
      </motion.section>

      {/* 1. Science of Scent / HRV */}
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
                {t("香气的科学 · HRV")}
              </h2>
              <p className="mt-2 text-sm text-ink/70 sm:text-base">
                {t("通过心率变异度（Heart Rate Variability, HRV）的变化，观察香气对身心放松与自主神经系统的调节作用。")}
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
              {t("香气并非只停留在鼻腔，而是通过嗅觉通路，直达与情绪、记忆相关的边缘系统，进而影响迷走神经张力与 HRV。")}
            </p>
            <div className="mt-4 grid gap-4 text-sm text-ink/80 sm:text-base">
              <div className="grid gap-3 sm:grid-cols-4">
                <div className="flex flex-col items-center rounded-2xl bg-ash/40 px-3 py-4 text-center">
                  <Wind className="mb-2 h-5 w-5 text-sandalwood" strokeWidth={1.5} />
                  <p className="font-heading text-[11px] tracking-[0.22em] text-sandalwood">
                    {t("鼻腔")}
                  </p>
                  <p className="mt-1 text-[11px] text-ink/65">{t("吸入药香分子")}</p>
                </div>
                <div className="flex flex-col items-center rounded-2xl bg-ash/30 px-3 py-4 text-center">
                  <Brain className="mb-2 h-5 w-5 text-sandalwood" strokeWidth={1.5} />
                  <p className="font-heading text-[11px] tracking-[0.22em] text-sandalwood">
                    {t("嗅球")}
                  </p>
                  <p className="mt-1 text-[11px] text-ink/65">{t("将信号转换为神经电活动")}</p>
                </div>
                <div className="flex flex-col items-center rounded-2xl bg-ash/40 px-3 py-4 text-center">
                  <Sparkles className="mb-2 h-5 w-5 text-sandalwood" strokeWidth={1.5} />
                  <p className="font-heading text-[11px] tracking-[0.22em] text-sandalwood">
                    {t("边缘系统")}
                  </p>
                  <p className="mt-1 text-[11px] text-ink/65">{t("情绪、记忆与安全感中枢")}</p>
                </div>
                <div className="flex flex-col items-center rounded-2xl bg-ash/30 px-3 py-4 text-center">
                  <Activity className="mb-2 h-5 w-5 text-sandalwood" strokeWidth={1.5} />
                  <p className="font-heading text-[11px] tracking-[0.22em] text-sandalwood">
                    {t("放松 · HRV")}
                  </p>
                  <p className="mt-1 text-[11px] text-ink/65">{t("提升迷走神经张力、HRV 上升")}</p>
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
              {t("深度文章")}
            </h2>
            <p className="mt-2 text-sm text-ink/70 sm:text-base">
              {t("点击文章标题，阅读详细内容。")}
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
