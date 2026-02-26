"use client";

import { motion } from "framer-motion";
import {
  Droplet,
  FlaskConical,
  Leaf,
  Gem,
  Sparkles,
  Shield,
} from "lucide-react";

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

const ingredients = [
  {
    name: "麝香 & 龙涎香",
    en: "Musk & Ambergris",
    icon: Droplet,
    description:
      "香学中的至珍动物性香料，气息悠长深远，用量极微，却能为一粒药香佛印定下气韵基调。",
  },
  {
    name: "三千年古稀柏科沉香",
    en: "3,000-year-old Cypress Agarwood",
    icon: Leaf,
    description:
      "来自古老柏科沉香的珍稀木香，凝聚数千年树龄与岁月之气，焚之清雅，不燥不腻。",
  },
  {
    name: "藏红花 · 珊瑚 · 天珠",
    en: "Saffron, Red Coral, Dzi Beads",
    icon: Gem,
    description:
      "藏红花温养血脉，珊瑚与天珠象征护佑与吉祥，以微量入香，寓意身心与福德的双重圆满。",
  },
  {
    name: "甘露丸",
    en: "Ganlu Wan · Nectar Pills",
    icon: Sparkles,
    description:
      "由活佛加持的甘露丸，被视为具足加持力的圣物，在药香佛印中象征法脉延续与愿力承载。",
  },
] as const;

export default function CraftsmanshipPage() {
  return (
    <div className="space-y-20 pb-20">
      {/* Page Heading */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="space-y-4"
      >
        <div>
          <h1 className="font-heading text-xl tracking-[0.3em] text-sandalwood sm:text-2xl">
            匠心与稀世香药
          </h1>
          <p className="mt-2 text-xs font-body uppercase tracking-[0.28em] text-ink/60">
            CRAFTSMANSHIP &amp; RARE INGREDIENTS
          </p>
        </div>
        <p className="max-w-2xl text-xs leading-relaxed text-ink/75 sm:text-sm">
          缘融轩香舍以稀世香药为墨，以李国荣医师数十年的制香造诣为笔，在炉火纯青之际，凝练出令业内行家争相竞藏的价值。它们不只是香，更是可以佩戴、把玩、传世的立体药香珍藏品。
        </p>
        {/* 添加匠人页面图片 */}
        <div className="relative overflow-hidden rounded-3xl border border-sandalwood/20">
          <img
            src="/products/craftsman-page-1.jpg"
            alt="匠人制作过程"
            className="w-full h-auto object-cover"
          />
        </div>
      </motion.section>

      {/* Rare Ingredients Gallery */}
      <section className="space-y-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="font-heading text-sm tracking-[0.26em] text-sandalwood sm:text-base">
                以稀世香药，雕琢可传世的嗅觉藏品
              </h2>
            </div>
            <div className="space-y-4 text-xs leading-relaxed text-ink/80 sm:text-sm">
              <p>
                在缘融轩香舍，我们出品的每一枚香珠、每一块香牌、每一尊药擦擦佛像，其价值早已超越了香品本身，被视为可遇不可求的收藏级臻品。这份独特价值，源于我们主理人——李国荣医师的双重身份：他既是一位深谙传统文化的收藏家，更是一位承袭古法的丹药制作大家。
              </p>
              <p>
                李医师的收藏之趣，在于对“香魂”的极致追寻。在他的私藏宝库里，不仅有历经岁月淘洗的古董珍玩，更有其倾注数十年心血寻觅而来的绝世香药：
              </p>
              <ul className="space-y-2 pl-4 list-disc">
                <li><span className="font-bold">"木中舍利"绿奇楠</span> ，其香韵层次变幻莫测；</li>
                <li><span className="font-bold">顶级珍稀藏红花</span> ，采自雪域高原，药性纯正；</li>
                <li><span className="font-bold">早期收藏的天然麝香</span> ，其馥郁醇厚，远非人工之物可比；</li>
                <li><span className="font-bold">历经百年光阴的陈年龙涎香</span> ，是海洋与时间共同谱写的香氛史诗；</li>
                <li><span className="font-bold">三千年古稀柏沉香</span> ，吸纳天地灵气，木韵悠长。</li>
                <li><span className="font-bold">塔尔寺以及佐钦大圆满寺之甘露丸</span> ，雪域珍稀药材三年制作一次，完成后七七四十九天，早晚不断诵经加持，具有强大祝福能量的圣物。</li>
              </ul>
              <p>
                这些香材，每一克的价值都远超黄金，是市面上难得一见的“香中珍宝”，即便在资深藏家圈内，也堪称凤毛麟角。正是以这等可遇不可求的稀世香药为墨，以李国荣医师数十年的制香造诣为笔，缘融轩香舍的药香之作，方能在炉火纯青之际，凝练出令业内行家争相竞藏的价值。它们不只是香，更是可以佩戴、把玩、传世的立体药香珍藏品。
              </p>
              {/* 添加龙延香图片 */}
              <div className="mt-6 space-y-2">
                <div className="relative overflow-hidden rounded-3xl border border-sandalwood/20">
                  <img
                    src="/dragon-blood-incense.jpg"
                    alt="李国荣医师展示收藏的极品龙延香"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-xs font-body tracking-[0.2em] text-ink/70 text-center">
                  李国荣医师展示收藏的极品龙延香
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* No-PVA Policy Comparison */}
      <section className="space-y-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="font-heading text-sm tracking-[0.26em] text-sandalwood sm:text-base">
                无 PVA 匠作原则
              </h2>
              <p className="mt-2 text-xs text-ink/70 sm:text-sm">
                在成型效率与手感质地之间，我们选择站在时间与材质自然性的一方。
              </p>
              {/* 添加手工1.jpg图片 */}
              <div className="mt-4 space-y-2">
                <div className="relative overflow-hidden rounded-3xl border border-sandalwood/20">
                  <img
                    src="/handcraft-1.jpg"
                    alt="钟师傅揉香"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-xs font-body tracking-[0.2em] text-ink/70 text-center">
                  钟师傅揉香
                </p>
              </div>
            </div>
            <div className="hidden items-center gap-2 rounded-full border border-sandalwood/20 bg-paper/80 px-3 py-1 text-[11px] font-body tracking-[0.2em] text-ink/60 sm:flex">
              <Shield className="h-3.5 w-3.5" strokeWidth={1.5} />
              <span>NO PVA · ONLY HONEY &amp; HERBS</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid gap-4 lg:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          custom={0.1}
        >
          {/* Market Standard */}
          <article className="relative flex flex-col gap-4 rounded-3xl border border-ash/60 bg-ash/40 p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-body uppercase tracking-[0.26em] text-ink/55">
                  MARKET STANDARD
                </p>
                <h3 className="mt-1 font-heading text-sm tracking-[0.26em] text-ink/80">
                  市场常见香品
                </h3>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-black/5 px-3 py-1 text-[11px] text-ink/60">
                <FlaskConical className="h-3.5 w-3.5" strokeWidth={1.5} />
                <span>含 PVA</span>
              </div>
            </div>

            <div className="grid gap-3 text-xs text-ink/75 sm:grid-cols-2">
              <div>
                <p className="font-body text-[11px] uppercase tracking-[0.2em] text-ink/50">
                  BINDER
                </p>
                <p className="mt-1">以 PVA 等化学胶为主，便于快速成型与大批量生产。</p>
              </div>
              <div>
                <p className="font-body text-[11px] uppercase tracking-[0.2em] text-ink/50">
                  TEXTURE
                </p>
                <p className="mt-1">表面较为平整光滑，手感略带塑料感，缺少随时间变化的纹理。</p>
              </div>
              <div>
                <p className="font-body text-[11px] uppercase tracking-[0.2em] text-ink/50">
                  DRYING
                </p>
                <p className="mt-1">干燥时间短，流程可控，废品率低。</p>
              </div>
              <div>
                <p className="font-body text-[11px] uppercase tracking-[0.2em] text-ink/50">
                  AGING
                </p>
                <p className="mt-1">随时间变化有限，更偏向“稳定商品”的状态。</p>
              </div>
            </div>
          </article>

          {/* Yuan Rong Xuan Method */}
          <article className="relative flex flex-col gap-4 rounded-3xl border border-sandalwood/40 bg-paper/95 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.06)]">
            <div className="absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-gradient-to-r from-sandalwood via-cinnabar to-sandalwood" />
            <div className="flex items-center justify-between gap-3 pt-2">
              <div>
                <p className="text-[11px] font-body uppercase tracking-[0.26em] text-sandalwood/80">
                  YUAN RONG XUAN
                </p>
                <h3 className="mt-1 font-heading text-sm tracking-[0.26em] text-sandalwood">
                  老蜜 · 药粉和合
                </h3>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-ash/60 px-3 py-1 text-[11px] text-sandalwood/90">
                <Leaf className="h-3.5 w-3.5" strokeWidth={1.5} />
                <span>NO PVA</span>
              </div>
            </div>

            <div className="grid gap-3 text-xs text-ink/80 sm:grid-cols-2">
              <div>
                <p className="font-body text-[11px] uppercase tracking-[0.2em] text-ink/55">
                  BINDER
                </p>
                <p className="mt-1">
                  以陈年老蜂蜜为和合剂，辅以 100% 药材粉末，不使用任何 PVA
                  或合成胶黏剂。
                </p>
              </div>
              <div>
                <p className="font-body text-[11px] uppercase tracking-[0.2em] text-ink/55">
                  DRYING &amp; FAILURE RATE
                </p>
                <p className="mt-1">
                  因蜜与药粉比例全凭手感与当日气候，每批次成品均需 1–6
                  个月自然阴干与醒香，废品率远高于工业制程。
                </p>
              </div>
              <div>
                <p className="font-body text-[11px] uppercase tracking-[0.2em] text-ink/55">
                  TEXTURE &amp; FEEL
                </p>
                <p className="mt-1">
                  表面略带细微颗粒与药粉纹理，触感温润，随温度与湿度缓慢变化，呈现朴雅手作感。
                </p>
              </div>
              <div>
                <p className="font-body text-[11px] uppercase tracking-[0.2em] text-ink/55">
                  NATURAL LIFE TRACES
                </p>
                <p className="mt-1">
                  轻微龟裂、色泽深浅不一，皆为天然材质与时间共同留下的生命痕迹，是不加修饰的真实见证。
                </p>
              </div>
            </div>
          </article>
        </motion.div>
      </section>
    </div>
  );
}

