"use client";

import Image from "next/image";
import { useMemo, useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { productCategories, products } from "../../data/products";
import * as OpenCC from 'opencc-js';

// 1. 创建一个子组件来处理所有包含 searchParams 的逻辑
function CollectionsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const [activeCategory, setActiveCategory] = useState<string>(
    (searchParams.get('category') || productCategories[0]?.id) ?? "medicine-incense-beads",
  );
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);
  
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set('category', activeCategory);
    router.replace(`/collections?${params.toString()}`);
  }, [activeCategory, searchParams, router]);

  const filteredProducts = useMemo(
    () => {
      if (isSearching && searchTerm.trim()) {
        // 搜索模式：根据产品名称过滤，支持简繁转换
        const converter = OpenCC.Converter({ from: 'hk', to: 'cn' });
        const simplifiedSearchTerm = converter(searchTerm); // 将繁体字转换为简体字
        return products.filter((p) =>
          p.name.toLowerCase().includes(simplifiedSearchTerm.toLowerCase())
        );
      } else {
        return products.filter((p) =>
          activeCategory === "all" ? true : p.category === activeCategory,
        );
      }
    },
    [activeCategory, isSearching, searchTerm],
  );

  const productsToShow = useMemo(
    () => filteredProducts.slice(0, visibleCount),
    [filteredProducts, visibleCount],
  );

  // 这里放你原本 return 里的所有 HTML 内容
  return (
    <div className="space-y-16 pb-20">
      {/* Heading */}
      <section className="space-y-4">
        <div>
          <h1 className="font-heading text-xl tracking-[0.3em] text-accent sm:text-2xl">
            缘融臻品系列
          </h1>
          <p className="mt-2 text-xs font-body uppercase tracking-[0.28em] text-foreground/60">
            COLLECTIONS · PRODUCT CATALOG
          </p>
        </div>
        <p className="max-w-2xl text-xs leading-relaxed text-foreground/75 sm:text-sm">
          缘融轩香舍之作品皆为稀品，我们使用收藏级别之三千年古稀柏沉香、极品绿奇楠等市面难觅的顶级天然野香药，恪守‘君臣佐使’配伍制药，历经酒浸蜜炙等繁琐炮制。不假胶水之功，唯凭秘制老蜜及配方融合，在百日合香中褪尽燥气，聚敛香韵。因产量稀少，多为资深行家私藏，仅余少量供有缘人传世。
        </p>
      </section>

      {/* Category Tabs with Search */}
      <section className="space-y-6">
        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="搜索产品名称..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  setIsSearching(true);
                  setVisibleCount(6);
                }
              }}
              className="w-full rounded-full border border-accent/20 bg-primary/90 px-4 py-2 pl-10 text-xs font-body tracking-[0.1em] text-foreground/80 focus:outline-none focus:ring-2 focus:ring-accent/50"
            />
            {/* ... 这里省略部分重复的 SVG 图标代码，保持跟你原版一致 ... */}
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchTerm && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setIsSearching(false);
                  setVisibleCount(6);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          
          <div className="flex flex-wrap items-center gap-2 rounded-full border border-accent/20 bg-primary/80 p-1.5">
            {productCategories.map((cat) => {
              const isActive = cat.id === activeCategory;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setIsSearching(false);
                    setSearchTerm('');
                    setVisibleCount(6);
                  }}
                  className={`relative rounded-full px-3.5 py-1.5 text-[11px] font-body tracking-[0.22em] transition-all ${isActive
                    ? "bg-accent text-primary shadow-sm"
                    : "text-foreground/65 hover:bg-secondary/10"
                    }`}
                >
                  {cat.label}
                  {isActive && (
                    <span className="absolute inset-0 -z-10 rounded-full bg-accent/80 blur-[3px]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex flex-col gap-24 px-4 sm:px-0">
          {productsToShow.map((product, index) => (
            <article
              key={product.id}
              className="group flex flex-col items-center gap-8 md:flex-row md:even:flex-row-reverse md:gap-16"
            >
              <div className="relative w-full overflow-hidden rounded-3xl bg-primary/30 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] md:w-1/2">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={product.imageUrl || "/placeholder-product.jpg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 92vw, (max-width: 1024px) 80vw, (max-width: 1280px) 60vw, 45vw"
                    quality={65}
                    priority={index === 0}
                  />
                </div>
              </div>

              <div className="flex w-full flex-col gap-4 md:w-1/2 md:py-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary/80" />
                    <h3 className="font-heading text-lg tracking-[0.2em] text-accent sm:text-xl">
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-[10px] font-body uppercase tracking-[0.24em] text-foreground/50 pl-4.5">
                    ONE OF A KIND · 孤品
                  </p>
                </div>

                <p className="text-sm leading-loose text-foreground/75 md:w-5/6 pl-4.5">
                  {product.description}
                </p>

                <div className="mt-4 flex flex-col gap-1 text-xs text-foreground/60 pl-4.5">
                  <span className="font-heading tracking-widest text-accent/80">
                    配方
                  </span>
                  <span>{product.ingredients}</span>
                </div>

                <div className="mt-4 flex flex-wrap gap-4 text-xs pl-4.5">
                  {product.price && (
                    <div className="flex items-center gap-1.5">
                      <span className="font-heading tracking-widest text-secondary/90">
                        价格
                      </span>
                      <span className="text-foreground/80">{product.price}</span>
                    </div>
                  )}
                  {product.collector && (
                    <div className="flex items-center gap-1.5">
                      <span className="font-heading tracking-widest text-accent/80">
                        收藏家
                      </span>
                      <span className="text-foreground/80">{product.collector}</span>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProducts.length > 6 && (
          <div className="mt-12 flex justify-center">
            {visibleCount < filteredProducts.length ? (
              <button
                type="button"
                onClick={() => setVisibleCount((v) => v + 6)}
                className="rounded-full border border-accent/30 bg-primary/90 px-6 py-2 text-[11px] font-body tracking-[0.22em] text-foreground/80 hover:bg-secondary/20"
              >
                展开更多
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setVisibleCount(6)}
                className="rounded-full border border-accent/30 bg-primary/90 px-6 py-2 text-[11px] font-body tracking-[0.22em] text-foreground/80 hover:bg-secondary/20"
              >
                收起
              </button>
            )}
          </div>
        )}
      </section>
    </div>
  );
}

// 2. 导出的主页面组件：只负责用 Suspense 包裹子组件
export default function CollectionsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen p-20 text-center font-body tracking-widest">正在加载臻品系列...</div>}>
      <CollectionsContent />
    </Suspense>
  );
}