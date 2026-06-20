"use client";

import Image from "next/image";
import { useLocale } from "@/components/locale-provider";

interface Product {
  id: string;
  name: string;
  category: string;
  ingredients?: string;
  description: string;
  price?: string;
  collector?: string;
  imageUrl?: string;
}

interface ProductCategory {
  id: string;
  label: string;
  description: string;
}

interface DetailContentProps {
  product: Product;
  category?: ProductCategory;
}

export default function DetailContent({ product, category }: DetailContentProps) {
  const { t } = useLocale();

  return (
    <div className="space-y-10 pb-16">
      <header className="space-y-3">
        {category && (
          <p className="text-[11px] font-body uppercase tracking-[0.24em] text-ink/55">
            {t(category.label)}
          </p>
        )}
        <h1 className="font-heading text-lg tracking-[0.3em] text-sandalwood sm:text-xl">
          {t(product.name)}
        </h1>
        <p className="text-[11px] font-body uppercase tracking-[0.24em] text-ink/50">
          ONE OF A KIND · {t("孤品")}
        </p>
      </header>

      <section className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] lg:items-start">
        <div className="relative w-full overflow-hidden rounded-3xl bg-primary/30 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={product.imageUrl || "/placeholder-product.jpg"}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 92vw, (max-width: 1024px) 80vw, (max-width: 1280px) 60vw, 45vw"
              quality={65}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="text-sm text-foreground/75">
            {product.description.includes("<p") ? (
              <div dangerouslySetInnerHTML={{ __html: t(product.description) }} />
            ) : (
              <p className="leading-loose">{t(product.description)}</p>
            )}
          </div>

          {product.ingredients && (
            <div className="mt-4 flex flex-col gap-1 text-sm text-foreground/60">
              <span className="font-heading tracking-widest text-accent/80">
                {t("配方")}
              </span>
              <span>{t(product.ingredients)}</span>
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            {product.price && product.category !== "incense-moxibustion" && (
              <div className="flex items-center gap-1.5">
                <span className="font-heading tracking-widest text-secondary/90">
                  {t("价格")}
                </span>
                <span className="text-foreground/80">{t(product.price)}</span>
              </div>
            )}
            {product.collector && (
              <div className="flex items-center gap-1.5">
                <span className="font-heading tracking-widest text-accent/80">
                  {t("收藏家")}
                </span>
                <span className="text-foreground/80">{t(product.collector)}</span>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
