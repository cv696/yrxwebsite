"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useLocale } from "@/components/locale-provider";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.19, 1, 0.22, 1] as const, delay },
  }),
};

const fourFlowers = [
  {
    slug: "baiyulan", theme: "绽放", name: "白玉兰调元香",
    line: "把压在胸口的气，轻轻呼出去", accent: "#C8D6C0",
    svgPath: "M25 48 C25 30, 18 18, 25 4 C32 18, 25 30, 25 48 M25 28 C20 26, 17 22, 15 18 M25 28 C30 26, 33 22, 35 18 M25 36 C21 34, 18 30, 16 26 M25 36 C29 34, 32 30, 34 26",
    svgViewBox: "0 0 50 52",
  },
  {
    slug: "youmei", theme: "悦纳", name: "幽庭玫瑰灸",
    line: "听见那个对自己温柔的声音", accent: "#D4A0A0",
    svgPath: "M25 42 C22 28, 20 18, 25 6 C30 18, 28 28, 25 42 M25 28 C18 24, 14 16, 16 10 C18 4, 25 6, 25 14 C25 6, 32 4, 34 10 C36 16, 32 24, 25 28",
    svgViewBox: "0 0 50 50",
  },
  {
    slug: "qiuyun", theme: "安和", name: "秋韵桂调元香",
    line: "把散掉的心神，一点一点收回来", accent: "#D4AF37",
    svgPath: "M22 32 L22 14 C20 10, 22 6, 25 6 C28 6, 30 10, 28 14 L28 32 M25 6 L25 2 M18 10 L15 6 M32 10 L35 6 M16 22 L12 20 M34 22 L38 20 M20 40 L20 48 M30 40 L30 48 M25 38 L25 48",
    svgViewBox: "0 0 50 50",
  },
  {
    slug: "lamei", theme: "静夜", name: "腊梅暗调元香",
    line: "想了之后还能放开，就是最好的休息", accent: "#A0B4C8",
    svgPath: "M25 44 C18 28, 20 16, 25 6 C30 16, 32 28, 25 44 M25 20 C20 14, 16 12, 18 8 C20 4, 25 8, 25 14 C25 8, 30 4, 32 8 C34 12, 30 14, 25 20 M14 30 L12 36 M36 30 L38 36 M25 14 L25 6",
    svgViewBox: "0 0 50 50",
  },
];

export default function SalonPage() {
  const { t } = useLocale();

  return (
    <>
      <style>{`
        @keyframes smoke-rise {
          0%   { transform: translateY(0) scaleX(1); opacity: 0; }
          10%  { opacity: 0.6; }
          30%  { opacity: 0.8; }
          70%  { opacity: 0.4; }
          100% { transform: translateY(-260px) scaleX(2.2); opacity: 0; }
        }
      `}</style>

      <div className="pb-20">

        {/* Hero 文字 */}
        <section className="flex flex-col items-center pt-20 pb-10 md:pt-28 md:pb-14">
          <motion.div initial="hidden" animate="visible" className="flex flex-col items-center gap-8 text-center">
            <motion.h1 variants={fadeUp} className="font-heading text-3xl tracking-[0.5em] text-accent sm:text-4xl md:text-5xl">
              {t("融香安心法")}
            </motion.h1>
            <motion.div variants={fadeUp} custom={0.15} className="h-px w-16 bg-accent/40" />
            <motion.p variants={fadeUp} custom={0.3} className="font-heading text-lg tracking-[0.2em] text-ink/80 sm:text-xl">
              {t("一炉香，一口气，回到自己")}
            </motion.p>
            <motion.div variants={fadeUp} custom={0.5} className="space-y-2 text-sm leading-loose text-ink/60 sm:text-base">
              <p>{t("不需要盘腿，不需要基础，不需要「懂香」。")}</p>
              <p>{t("坐下来，闭上眼睛——")}</p>
              <p className="text-ink/80">{t("剩下的，交给那炉香。")}</p>
            </motion.div>
          </motion.div>
        </section>

        {/* 烟 + Hero 大图 */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp} className="relative mx-auto max-w-5xl"
        >
          <div className="pointer-events-none absolute inset-x-0 -top-12 h-80 overflow-hidden">
            <div className="absolute bottom-0 left-[18%] h-48 w-16 rounded-full bg-accent/20 blur-md"
              style={{ animation: "smoke-rise 6s 0s ease-out infinite" }} />
            <div className="absolute bottom-0 left-[40%] h-56 w-20 rounded-full bg-accent/15 blur-md"
              style={{ animation: "smoke-rise 7s 2s ease-out infinite" }} />
            <div className="absolute bottom-0 left-[62%] h-44 w-14 rounded-full bg-accent/20 blur-md"
              style={{ animation: "smoke-rise 6.5s 4s ease-out infinite" }} />
            <div className="absolute bottom-0 left-[80%] h-52 w-18 rounded-full bg-accent/15 blur-md"
              style={{ animation: "smoke-rise 7.5s 1.2s ease-out infinite" }} />
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-sandalwood/12">
            <img src="/rongxiang.jpg" alt={t("香炉飘香 · 融香安心法")} className="w-full h-auto object-cover" />
          </div>
        </motion.div>

        {/* 以香为引 */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp} className="space-y-6 pt-24">
          <h2 className="text-center font-heading text-lg tracking-[0.26em] text-accent sm:text-xl">
            {t("以香为引 · 以息为门")}
          </h2>
          <div className="mx-auto max-w-xl space-y-4 text-center text-sm leading-loose text-ink/70 sm:text-base">
            <p>{t("融香安心法，是缘融轩基于数十年香药研究，提炼出的一套闻香禅定体验。以四款古法花香调元香为引，透过简单的呼吸方式，让天然香材的气息带你沉入内在的安静。")}</p>
            <p>{t("每一款调元香，由李教授以独创的香疗配方，运用多种名贵药材，遵循古法配伍入灸。你所闻到的，不是普通的花香，而是一味经过时间与匠心沉淀的安宁。")}</p>
            <p className="pt-2 text-ink/80">{t("你只需要来，坐下来，闻。")}</p>
          </div>
        </motion.section>

        {/* 四款花香 */}
        <section className="space-y-10 pt-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp} className="text-center">
            <h2 className="font-heading text-lg tracking-[0.26em] text-accent sm:text-xl">
              {t("四炉香，四种与自己相处的方式")}
            </h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp} custom={0.15}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {fourFlowers.map((flower) => (
              <Link key={flower.theme} href={`/salon/${flower.slug}`}
                className="group relative flex flex-col items-center gap-5 rounded-2xl border border-sandalwood/10 bg-paper/90 p-6 transition-all hover:-translate-y-1 hover:border-sandalwood/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
                <div className="absolute inset-x-0 top-0 h-0.5 rounded-t-2xl" style={{ backgroundColor: flower.accent }} />
                <svg viewBox={flower.svgViewBox} className="mt-2 h-20 w-20 transition-transform duration-500 group-hover:scale-110"
                  fill="none" stroke={flower.accent} strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.7">
                  <path d={flower.svgPath} />
                </svg>
                <h3 className="font-heading text-xl tracking-[0.4em]" style={{ color: flower.accent }}>{t(flower.theme)}</h3>
                <p className="-mt-2 text-xs tracking-[0.18em] text-ink/50">{t(flower.name)}</p>
                <p className="text-center text-sm leading-relaxed text-ink/70">{t(flower.line)}</p>
              </Link>
            ))}
          </motion.div>
        </section>

        {/* CTA */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp}
          className="flex flex-col items-center gap-6 pt-24 text-center">
          <div className="h-px w-12 bg-accent/30" />
          <h2 className="font-heading text-xl tracking-[0.3em] text-accent sm:text-2xl">
            {t("预约一场与自己的安静时光")}
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-ink/60 sm:text-base">
            {t("各地沙龙由授权主理人开设，详情请咨询我们。也欢迎有意成为主理人的朋友与我们联系。")}
          </p>
          <Link href="/contact"
            className="mt-2 inline-flex items-center gap-2 rounded-full border border-accent/60 px-7 py-2.5 text-sm font-body tracking-[0.18em] text-accent/90 backdrop-blur-sm transition-all hover:border-accent hover:text-accent hover:shadow-[0_0_24px_rgba(212,175,55,0.12)]">
            <Send className="h-3.5 w-3.5" strokeWidth={1.5} />
            {t("咨询预约")}
          </Link>
        </motion.section>

      </div>
    </>
  );
}
