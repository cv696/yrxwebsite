"use client";

import { motion } from "framer-motion";
import { Activity, Brain, BookOpenCheck, Wind, Sparkles } from "lucide-react";

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
          <h1 className="font-heading text-xl tracking-[0.3em] text-sandalwood sm:text-2xl">
            香气与科学
          </h1>
          <p className="mt-2 text-xs font-body uppercase tracking-[0.28em] text-ink/60">
            SCIENCE &amp; CULTURE
          </p>
        </div>
        <p className="max-w-2xl text-xs leading-relaxed text-ink/75 sm:text-sm">
          缘融轩希望，药香不仅停留在传统与信仰之中，也能在现代科学的语言下被理解——
          从心率变异度（HRV），到迷走神经与嗅觉通路，每一缕香都有其可以被观察的路径。
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
              <h2 className="font-heading text-sm tracking-[0.26em] text-sandalwood sm:text-base">
                香气的科学 · HRV
              </h2>
              <p className="mt-2 text-xs text-ink/70 sm:text-sm">
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
            <p className="text-xs leading-relaxed text-ink/75 sm:text-sm">
              香气并非只停留在鼻腔，而是通过嗅觉通路，直达与情绪、记忆相关的边缘系统，
              进而影响迷走神经张力与 HRV。
            </p>
            <div className="mt-4 grid gap-4 text-xs text-ink/80 sm:text-sm">
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

          {/* Text: Musk & Saffron, BBB & Vagus Nerve */}
          <div className="space-y-6 rounded-3xl border border-sandalwood/18 bg-paper/95 p-5">
            <div className="space-y-2">
              <h3 className="font-heading text-sm tracking-[0.24em] text-sandalwood">
                麝香与藏红花 · 自主神经的温柔调节
              </h3>
              <p className="text-xs leading-relaxed text-ink/75 sm:text-sm">
                在传统本草记载与现代研究中，麝香与藏红花常被视为具有安神、活血与调节
                中枢神经的关键药材。当其以香气形式吸入时，一部分分子通过嗅粘膜进入局部
                血流，有机会跨越血脑屏障（Blood-Brain Barrier），影响脑内神经递质平衡。
              </p>
            </div>

            <div className="space-y-2 text-xs leading-relaxed text-ink/75 sm:text-sm">
              <p>
                同时，嗅觉信号与呼吸节律的改变，也会通过迷走神经（Vagus
                Nerve）向下传导，调节心脏节律与内脏张力。当迷走神经张力上升时，
                交感神经相对平衡，心率变异度（HRV）往往同步提升，代表身体处于
                更具恢复力的放松状态。
              </p>
              <p>
                因此，我们将麝香、藏红花等药材纳入药香配伍，并在真实使用情境中观察
                HRV 的变化，以科学语言佐证古老香疗对情绪稳定与睡眠质量的潜在帮助。
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. Incense Moxibustion Logic */}
      <section className="space-y-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-heading text-sm tracking-[0.26em] text-sandalwood sm:text-base">
                香灸 · 本草养生调理香疗
              </h2>
              <p className="mt-2 text-xs text-ink/70 sm:text-sm">
                以传统养生智慧为基础，将“灸”与“香”合一，让本草通过温和烟气，
                与呼吸、经络和情志缓慢对话，为日常调养提供自然选择。
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
          <div className="space-y-4 rounded-3xl border border-sandalwood/18 bg-paper/95 p-5 shadow-[0_16px_52px_rgba(0,0,0,0.05)]">
            <p className="text-[11px] font-body uppercase tracking-[0.24em] text-ink/55">
              HERBAL WELLNESS AROMATHERAPY
            </p>
            <p className="text-xs leading-relaxed text-ink/75 sm:text-sm">
              缘融轩所提出的“香灸”，本质上是一种 " 
              <span className="font-semibold text-sandalwood">
                本草养生香疗
              </span>
              " 
              ：以艾绒为体，以药香本草为用，通过温热烟气进入上呼吸道，
              为日常调养提供自然的香疗体验。
            </p>
            <div className="mt-3 space-y-2 text-xs leading-relaxed text-ink/75 sm:text-sm">
              <p>
                与传统线香不同，香灸条更接近“可以被引导的药气”——
                通过特定部位的温和熏疗，使本草挥发分在
                局部自然扩散，再随呼吸进入肺与全身循环，为日常调养增添一份自然呵护。
              </p>
            </div>
          </div>

          <div className="space-y-4 rounded-3xl border border-sandalwood/18 bg-paper/95 p-5">
            <div className="flex items-center gap-2">
              <BookOpenCheck
                className="h-4 w-4 text-sandalwood"
                strokeWidth={1.5}
              />
              <p className="text-[11px] font-body uppercase tracking-[0.24em] text-ink/60">
                HERITAGE · COMPENDIUM OF MATERIA MEDICA
              </p>
            </div>
            <p className="text-xs leading-relaxed text-ink/75 sm:text-sm">
              《本草纲目》等典籍中，对艾叶、檀香、沉香等药材的特性与熏蒸用法
              早有详尽记载，用于日常调养、舒缓身心、改善环境气场。缘融轩的香灸配方，
              正是在此基础上，结合现代生活需求重新组合。
            </p>
            <div className="mt-3 grid gap-3 text-xs leading-relaxed text-ink/75 sm:text-sm">
              <div>
                <p className="font-heading text-[11px] tracking-[0.22em] text-sandalwood">
                  安全与节制
                </p>
                <p className="mt-1">
                  选材上严格限定为传统医籍与临床实践中已被广泛使用的本草，
                  控制用量与燃烧时间，避免过热、过烈与刺激性烟雾。
                </p>
              </div>
              <div>
                <p className="font-heading text-[11px] tracking-[0.22em] text-sandalwood">
                  文化与当代生活的桥梁
                </p>
                <p className="mt-1">
                  通过对香灸形制与使用方式的重新设计，让原本只存在于诊室或寺院的
                  香疗经验，走进现代居家空间，以更温柔、更可持续的方式被日常化。
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

