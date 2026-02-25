"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// 摄影作品数据
const photos = [
  { src: "/pic/mmexport1771677496345.jpg", alt: "摄影作品1" },
  { src: "/pic/mmexport1771677500513.jpg", alt: "摄影作品2" },
  { src: "/pic/mmexport1771677503490.jpg", alt: "摄影作品3" },
  { src: "/pic/mmexport1771677505999.jpg", alt: "摄影作品4" },
  { src: "/pic/mmexport1771677509035.jpg", alt: "摄影作品5" },
  { src: "/pic/mmexport1771677649717.jpg", alt: "摄影作品6" },
  { src: "/pic/mmexport1771677658821.jpg", alt: "摄影作品7" },
  { src: "/pic/mmexport1771677661358.jpg", alt: "摄影作品8" },
  { src: "/pic/mmexport1771677665831.jpg", alt: "摄影作品9" },
  { src: "/pic/mmexport1771677669926.jpg", alt: "摄影作品10" },
  { src: "/pic/mmexport1771677672891.jpg", alt: "摄影作品11" },
  { src: "/pic/mmexport1771677675566.jpg", alt: "摄影作品12" },
  { src: "/pic/mmexport1771677678324.jpg", alt: "摄影作品13" },
  { src: "/pic/mmexport1771677680360.jpg", alt: "摄影作品14" },
  { src: "/pic/mmexport1771677792591.jpg", alt: "摄影作品15" },
  { src: "/pic/mmexport1771677795145.jpg", alt: "摄影作品16" },
  { src: "/pic/mmexport1771677797192.jpg", alt: "摄影作品17" },
  { src: "/pic/mmexport1771677799241.jpg", alt: "摄影作品18" },
  { src: "/pic/mmexport1771677801703.jpg", alt: "摄影作品19" },
  { src: "/pic/mmexport1771677803851.jpg", alt: "摄影作品20" },
  { src: "/pic/mmexport1771677806060.jpg", alt: "摄影作品21" },
  { src: "/pic/mmexport1771677808183.jpg", alt: "摄影作品22" },
  { src: "/pic/mmexport1771678219862.jpg", alt: "摄影作品23" },
  { src: "/pic/mmexport1771678222499.jpg", alt: "摄影作品24" },
  { src: "/pic/mmexport1771678224381.jpg", alt: "摄影作品25" },
  { src: "/pic/mmexport1771678226513.jpg", alt: "摄影作品26" },
  { src: "/pic/mmexport1771678228047.jpg", alt: "摄影作品27" },
  { src: "/pic/mmexport1771678230401.jpg", alt: "摄影作品28" },
  { src: "/pic/mmexport1771678232284.jpg", alt: "摄影作品29" },
  { src: "/pic/mmexport1771678234080.jpg", alt: "摄影作品30" },
];

export default function PhotographyPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // 自动轮播逻辑
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
    }, 5000); // 每5秒切换一次
    
    return () => {
      clearInterval(interval);
    };
  }, []);
  
  // 手动切换到下一张
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };
  
  // 手动切换到上一张
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  return (
    <div className="space-y-16 pb-20">
      {/* 页面标题 */}
      <section className="space-y-6">
        <div>
          <h1 className="font-heading text-xl tracking-[0.3em] text-accent sm:text-2xl">
            善缘光影
          </h1>
          <p className="mt-2 text-xs font-body uppercase tracking-[0.28em] text-foreground/60">
            PHOTOGRAPHY COLLECTION
          </p>
        </div>
        
        {/* 文字介绍 */}
        <div className="max-w-3xl space-y-4 rounded-2xl border border-accent/15 bg-primary/90 p-6 text-xs leading-relaxed text-foreground/80 sm:text-sm">
          <p>
            数十年前，热爱人文摄影的李国荣医师深入藏区采风。他本想记录风土人情，却在镜头之外，看见偏远藏区生活的艰辛，更看见孩子们眼中求知的光与匮乏的现实。
          </p>
          <p>
            归来后，这份触动化作年复一年的坚持。他组织慈善人士，为偏远藏区孩童送去学习与生活物资，持续多年，也因此与当地多位活佛结下殊胜的法缘。
          </p>
          <p>
            偏远藏区的朋友们知道，李医师不仅仁心济世，对天然中草药更有严苛的要求。而他们世代居住的人迹罕至之处，恰好蕴藏着纯净珍稀的药材资源。为感念他的善行，大家常为他采集、寻觅这些自然的馈赠。
          </p>
          <p>
            善意有了回响，珍稀的药材被带到更需要的人身边。如是，善念为因，善行结果，生生不息，循环往复。
          </p>
        </div>
      </section>

      {/* 摄影作品轮播 */}
      <section className="space-y-8">
        <div className="relative max-w-5xl mx-auto overflow-hidden rounded-3xl border border-accent/18 bg-primary/40">
          {/* 轮播图片容器 */}
          <div className="relative aspect-[16/9] w-full">
            {photos.map((photo, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              >
                <div className="absolute inset-0 bg-black flex items-center justify-center">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 800px, (min-width: 768px) 600px, 100vw"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
            
            {/* 轮播导航按钮 */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50 transition-colors"
              aria-label="上一张"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50 transition-colors"
              aria-label="下一张"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* 轮播指示器 */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {photos.map((_, index) => (
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
        
        {/* 图片说明 */}
        <div className="text-center text-xs font-body tracking-[0.2em] text-foreground/70">
          李国荣医师摄影集 · 藏区采风作品
        </div>
      </section>
    </div>
  );
}
