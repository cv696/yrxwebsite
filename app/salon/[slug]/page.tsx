import { products } from "@/data/products";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SalonFlowerContent from "./content";

const slugMap: Record<string, { productId: string; theme: string; accent: string }> = {
  baiyulan: { productId: "incense-moxibustion-05", theme: "绽放", accent: "#C8D6C0" },
  youmei:   { productId: "incense-moxibustion-07", theme: "悦纳", accent: "#D4A0A0" },
  qiuyun:   { productId: "incense-moxibustion-06", theme: "安和", accent: "#D4AF37" },
  lamei:    { productId: "incense-moxibustion-04", theme: "静夜", accent: "#A0B4C8" },
};

export function generateStaticParams() {
  return Object.keys(slugMap).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const config = slugMap[slug];
  if (!config) return {};
  const product = products.find((p) => p.id === config.productId);
  return {
    title: `${product?.name ?? slug} · ${config.theme} — 融香安心法`,
  };
}

export default async function SalonFlowerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const config = slugMap[slug];
  if (!config) notFound();

  const product = products.find((p) => p.id === config.productId);
  if (!product) notFound();

  return (
    <SalonFlowerContent
      product={{
        id: product.id,
        name: product.name,
        description: product.description,
        ingredients: product.ingredients,
        imageUrl: product.imageUrl,
      }}
      theme={config.theme}
      accent={config.accent}
    />
  );
}
