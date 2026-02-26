"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Feather, Leaf, HeartHandshake, Mountain, ArrowRight } from "lucide-react";
import { useEffect } from "react";

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

const fiveValues = [
  {
    title: "圣缘",
    subtitle: "Sacred Fate",
    description: "源自元旦仁波切与擦擦模具的圣物缘起，将修行愿力融入一珠一粒。",
    icon: Sparkles,
  },
  {
    title: "古艺",
    subtitle: "Ancient Art",
    description: "以明清时期擦擦模具为蓝本，考古复原失传工艺，重现宫廷香道仪轨。",
    icon: Feather,
  },
  {
    title: "香疗",
    subtitle: "Incense Therapy",
    description: "“以药为泥”，以珍稀药材代替泥土，让每一缕香烟承载草本养生智慧。",
    icon: Leaf,
  },
  {
    title: "匠心",
    subtitle: "Craftsmanship",
    description: "以老蜂蜜手工和合，不加化学胶黏，一捻一塑皆由匠人指尖完成。",
    icon: HeartHandshake,
  },
  {
    title: "使命",
    subtitle: "Mission",
    description: "让雪域高原的圣物文化，走入当代日常，成为连接古老信仰与现代生活的桥梁。",
    icon: Mountain,
  },
] as const;

export default function Home() {
  // 8秒后自动跳转到臻品系列页面
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/collections';
    }, 8000);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);
  
  return (
    <div className="space-y-24 pb-28">
      {/* Hero Section */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden rounded-3xl md:min-h-[88vh]">
        {/* 模糊背景 */}
        <div className="absolute inset-0 bg-[url('/homepage-background.jpg')] bg-cover bg-center bg-no-repeat blur-sm" />
        <div className="absolute inset-0 bg-ash/30" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/45 via-black/25 to-black/55 mix-blend-multiply" />

        <div className="relative z-10 flex w-full max-w-4xl flex-col items-center justify-between gap-12 md:flex-row">
          {/* Vertical title block */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <div className="inline-flex items-center gap-3 rounded-full border border-ash/60 bg-black/20 px-4 py-1 text-[11px] font-body tracking-[0.3em] text-ash/80">
              <span>YUAN RONG XUAN</span>
            </div>

            <div className="flex items-center gap-6">
              {/* 竖排主标题 */}
              <div className="flex h-52 items-center justify-center px-4 py-6 md:h-64 md:px-6">
                <img 
                  src="/yuanrongxuan-final.svg" 
                  alt="缘融轩香舍" 
                  className="h-full w-auto object-contain"
                />
              </div>

              {/* 横排说明 */}
              <div className="max-w-xs space-y-5 text-ash/85 md:max-w-sm">
                <p className="text-[15px] font-body tracking-[0.2em] text-ash/80 md:text-[16px]">
                  集稀世珍材，承佛道香药正统
                </p>
                <p className="text-xs leading-loose text-ash/75 md:text-sm">
                  缘融轩集稀世珍材，承佛道香药正统。以顶级本草配伍甘露愿力，雕琢收藏级药香传世。于呼吸间调和身心，延续古今风雅。
                </p>
              </div>
            </div>

            {/* 行动按钮 */}
            <Link href="/collections" className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-ash/70 bg-black/10 px-7 py-2.5 text-xs font-body tracking-[0.18em] text-ash/90 backdrop-blur-sm transition-colors hover:border-cinnabar/90 hover:text-cinnabar md:text-sm">
              探索臻品系列
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Five-Dimensional Value Section */}
      <section className="space-y-8">
        <div>
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-heading text-xl tracking-[0.3em] text-accent sm:text-2xl">
                五维价值
              </h2>
              <p className="mt-2 text-xs font-body uppercase tracking-[0.28em] text-foreground/60">
                FIVE DIMENSIONS OF VALUE
              </p>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-foreground/70 sm:text-sm">
              缘融轩·药香珠并非单一产品，而是跨越信仰、工艺、疗愈与文化使命的
              立体载体，在日常供奉与佩戴之中，完成身心与时间的缓慢对话。
            </p>
          </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {fiveValues.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="group flex flex-col justify-between rounded-2xl border border-accent/12 bg-primary/80 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.04)] sm:p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-heading text-sm tracking-[0.28em] text-accent">
                        {item.title}
                      </h3>
                      <span className="text-[10px] font-body uppercase tracking-[0.2em] text-foreground/50">
                        {item.subtitle}
                      </span>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-foreground/75">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/25 bg-primary/40 text-accent/90">
                    <Icon className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Journey cards: Origin / Craftsmanship / Science */}
      <section className="space-y-6">
        <div>
          <h2 className="font-heading text-sm tracking-[0.26em] text-accent sm:text-base">
            一条缓慢的体验路径
          </h2>
          <p className="mt-2 max-w-2xl text-xs leading-relaxed text-foreground/70 sm:text-sm">
            若你愿意，可以循着“缘起—匠心—科学”的顺序，缓慢走完一遍缘融轩：
            先理解故事，再触摸工艺与药材，最后以科学语言回望自身身心变化。
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Link
            href="/origin"
            className="group flex flex-col justify-between rounded-3xl border border-accent/18 bg-primary/95 p-4 shadow-[0_14px_46px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-0.5 sm:p-5"
          >
            <div className="space-y-2">
              <p className="text-[11px] font-body uppercase tracking-[0.24em] text-foreground/55">
                STEP 01
              </p>
              <h3 className="font-heading text-sm tracking-[0.26em] text-accent">
                品牌缘起
              </h3>
              <p className="text-xs leading-relaxed text-foreground/75 sm:text-sm">
                从塔尔寺的擦擦，到明清古模与“以药为泥”的发心，理解一粒药香珠
                背后所承载的故事与初心。
              </p>
            </div>
            <p className="mt-4 text-[11px] font-body uppercase tracking-[0.22em] text-accent/80">
              ENTER ORIGIN STORY →
            </p>
          </Link>

          <Link
            href="/craftsmanship"
            className="group flex flex-col justify-between rounded-3xl border border-accent/18 bg-primary/95 p-4 shadow-[0_14px_46px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-0.5 sm:p-5"
          >
            <div className="space-y-2">
              <p className="text-[11px] font-body uppercase tracking-[0.24em] text-foreground/55">
                STEP 02
              </p>
              <h3 className="font-heading text-sm tracking-[0.26em] text-accent">
                匠心工艺
              </h3>
              <p className="text-xs leading-relaxed text-foreground/75 sm:text-sm">
                深入了解缘融轩的手工制香工艺、选药标准与炮制方法，触摸
                每一粒药香珠背后的时间与匠心。
              </p>
            </div>
            <p className="mt-4 text-[11px] font-body uppercase tracking-[0.22em] text-accent/80">
              EXPLORE CRAFTSMANSHIP →
            </p>
          </Link>

          <Link
            href="/science"
            className="group flex flex-col justify-between rounded-3xl border border-accent/18 bg-primary/95 p-4 shadow-[0_14px_46px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-0.5 sm:p-5"
          >
            <div className="space-y-2">
              <p className="text-[11px] font-body uppercase tracking-[0.24em] text-foreground/55">
                STEP 03
              </p>
              <h3 className="font-heading text-sm tracking-[0.26em] text-accent">
                科学视角
              </h3>
              <p className="text-xs leading-relaxed text-foreground/75 sm:text-sm">
                以现代科学语言解读传统香药的身心调理作用，
                理解药香如何通过呼吸与皮肤，与现代生活达成和解。
              </p>
            </div>
            <p className="mt-4 text-[11px] font-body uppercase tracking-[0.22em] text-accent/80">
              DISCOVER THE SCIENCE →
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}

