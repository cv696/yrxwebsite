"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useLocale } from "@/components/locale-provider";

interface Product {
  id: string;
  name: string;
  description: string;
  ingredients?: string;
  imageUrl?: string;
}

interface Props {
  product: Product;
  theme: string;
  accent: string;
}

export default function SalonFlowerContent({ product, theme, accent }: Props) {
  const { t } = useLocale();

  return (
    <div className="pb-20">
      {/* Accent bar */}
      <div className="h-0.5 w-full" style={{ backgroundColor: accent }} />

      <div className="mx-auto max-w-3xl px-4 pt-12 sm:pt-16">
        {/* Back link */}
        <Link
          href="/salon"
          className="inline-flex items-center gap-1.5 text-xs tracking-[0.18em] text-ink/50 transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-3 w-3" strokeWidth={1.5} />
          {t("返回融香安心法")}
        </Link>

        {/* Header */}
        <header className="mt-8 space-y-3 text-center">
          <p
            className="font-heading text-3xl tracking-[0.4em] sm:text-4xl"
            style={{ color: accent }}
          >
            {t(theme)}
          </p>
          <h1 className="font-heading text-xl tracking-[0.2em] text-ink/70 sm:text-2xl">
            {t(product.name)}
          </h1>
        </header>

        {/* Product image */}
        {product.imageUrl && (
          <div className="mt-10 overflow-hidden rounded-2xl">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={800}
              height={500}
              className="w-full object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>
        )}

        {/* Description */}
        <section className="mt-12 space-y-6 text-sm leading-relaxed text-ink/75 sm:text-base">
          <div dangerouslySetInnerHTML={{ __html: t(product.description) }} />
        </section>

        {/* Ingredients */}
        {product.ingredients && (
          <div className="mt-10 border-t border-sandalwood/10 pt-8">
            <p className="font-heading text-sm tracking-[0.2em] text-accent/80">
              {t("配方")}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              {t(product.ingredients)}
            </p>
          </div>
        )}

        {/* Back CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/salon"
            className="inline-flex items-center gap-2 rounded-full border border-accent/60 px-7 py-2.5 text-sm tracking-[0.18em] text-accent/90 transition-all hover:border-accent hover:text-accent"
          >
            {t("返回融香安心法")}
          </Link>
        </div>
      </div>
    </div>
  );
}
