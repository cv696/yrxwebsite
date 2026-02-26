"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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

export function AboutOriginSection() {
  // 轮播状态管理
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // 轮播图片数据
  const slides = [
    {
      src: "/deng-pufang.jpg",
      alt: "邓朴方与李国荣医师",
      title: "与邓朴方先生",
      description: "前残联会荣誉主席邓朴方与李国荣医师"
    },
    {
      src: "/duoji-cairang.jpg",
      alt: "多吉才让与李国荣医师",
      title: "与多吉才让先生",
      description: "前民政部长多吉才让与李国荣医师"
    },
    {
      src: "/tang-xiaoquan.jpg",
      alt: "汤小泉与李国荣医师",
      title: "与汤小泉女士",
      description: "前残联会副主席汤小泉与李国荣医师"
    },
    {
      src: "/lama-yuan-dan.jpg",
      alt: "元旦坚赞仁波切与李国荣医师",
      title: "与元旦坚赞仁波切",
      description: "元旦坚赞仁波切与李国荣医师"
    }
  ];
  
  // 切换到下一张
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  // 切换到上一张
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  
  // 自动轮播逻辑
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 每5秒切换一次
    
    return () => {
      clearInterval(interval);
    };
  }, []);
  
  return (
    <section className="mx-auto max-w-6xl space-y-12 rounded-3xl bg-primary/80 px-5 py-10 shadow-[0_18px_60px_rgba(0,0,0,0.06)] md:space-y-14 md:px-8 md:py-14">
      {/* 标题 */}
      <div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-heading text-xl tracking-[0.3em] text-accent sm:text-2xl">
              缘起与初心
            </h2>
            <p className="mt-2 text-xs font-body uppercase tracking-[0.28em] text-foreground/60">
              ORIGIN STORY
            </p>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-foreground/70 sm:text-sm">
            缘融轩·药香珠的诞生，源自一位中医师、一位仁波切与几枚尘封百年的
            擦擦模具，在时代的缝隙中完成的相遇。
          </p>
        </div>
      </div>

      {/* 左右分栏 */}
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1.2fr)] md:items-start">
        {/* 左侧：创始人 / 模具影像 */}
        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-3xl border border-accent/18 bg-primary/40">
            {/* 轮播图容器 */}
            <div className="relative aspect-[4/5] w-full">
              {/* 轮播图片 */}
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 320px, (min-width: 768px) 45vw, 100vw"
                    loading="lazy"
                  />
                  {/* 图片说明 */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent px-5 pb-4 pt-10">
                    <p className="text-[11px] font-body uppercase tracking-[0.28em] text-foreground/70">
                      FOUNDER · DR. LI GUORONG
                    </p>
                    <p className="mt-1 font-heading text-sm tracking-[0.3em] text-foreground">
                      {slide.title}
                    </p>
                    <p className="mt-2 text-xs text-foreground/80">
                      {slide.description}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* 轮播导航按钮 */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50 transition-colors"
                aria-label="上一张"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50 transition-colors"
                aria-label="下一张"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* 轮播指示器 */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1.5 w-1.5 rounded-full transition-all ${index === currentSlide ? 'bg-white w-6' : 'bg-white/50'}`}
                    aria-label={`切换到第${index + 1}张图片`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-3 rounded-2xl border border-accent/15 bg-primary/90 p-4">
            <p className="text-xs font-body uppercase tracking-[0.25em] text-foreground/55">
              FOUNDER PROFILE
            </p>
            <div className="space-y-2 text-xs leading-relaxed text-foreground/80">
              <p>李国荣医师 是一位在医学、传统文化与艺术领域均有深厚造诣的大家。</p>
              <p><span className="font-bold">医学创新者</span> ：研发的瘫痪治疗方案，荣获国家发明专利及第29届日内瓦国际发明博览会银奖。</p>
              <p><span className="font-bold">道医传承人</span> ：潜心挖掘传统道医丹药，收集整理上百种古代秘方及稀有香药材。</p>
              <p><span className="font-bold">资深收藏家</span> ：经年累月珍藏古董文物，其藏品体系完整、数量庞大，可比肩专业博物馆。</p>
              <p><span className="font-bold">人文摄影家</span> ：镜头始终对准基层，以纪实手法捕捉普通人的真实瞬间，作品充满人文关怀。</p>
            </div>
          </div>

          <div className="space-y-3 rounded-2xl border border-secondary/20 bg-secondary/3 p-4">
            <p className="text-xs font-body uppercase tracking-[0.25em] text-secondary/80">
              FOUNDER'S WORDS
            </p>
            <p className="font-heading text-xs leading-relaxed tracking-[0.24em] text-accent">
              "元旦坚赞仁波切赠我以缘，历史赠我以模，而我愿以『药香佛印』延续这段千年对话。"
            </p>
          </div>
        </div>

        {/* 右侧：品牌故事 */}
        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="font-heading text-sm tracking-[0.26em] text-accent sm:text-base">
              缘融轩香舍：于呼吸间，对话千载风雅
            </h3>
          </div>

          <div className="space-y-4 text-xs leading-relaxed text-foreground/75 sm:text-[13px]">
            <p>
              有些缘分，穿越时光而来。2017年，李国荣医师于塔尔寺偶遇元旦坚赞仁波切出关，获赠几枚带着闭关清寂的泥擦擦。这一递，接通了与古老佛艺的善缘，也开启了缘融轩"药香佛印"的千年因缘。
            </p>
            <p>
              身为中医丹药大家与古董藏家，李医师不忍明清古模蒙尘，亦不愿香疗智慧流失。他以《四部医典》《明清香药秘方》《本草纲目》为引，不取泥、不涉土，而以绿奇楠沉香、三千年古柏沉香、顶级藏红花及天然麝香等数十种稀世药材为体，以甘露丸为魂，经百日合香、繁复炮制，创研出兼具药理与禅韵的"药香佛印"药擦擦。
            </p>
            <p>
              此心未止。缘融轩继而推出"一珠一名"药香珠手串，每颗皆天然手作，于佩戴间调畅气机、安神护心。更以道医为根基，深掘佛道两家"香为信使"之文化源流，所制药香牌融炼丹传统与辛香走窜之性于一体，让香药化为身心道场，备受高僧与道长认可。近期亦开发香灸系列，以纯中药吸入法，予人"呼吸的调养"。
            </p>
            <p>
              从一方药擦至多元香藏，缘融轩恪守药性完整、拒绝科技与速成。未来，我们仍将以稀世之材雕琢传世之香，让古老香药文化，在当代人的呼吸间，完成最美重塑。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

