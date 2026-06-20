import { notFound } from "next/navigation";
import { productCategories, products } from "../../../data/products";
import DetailContent from "./detail-content";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function CollectionDetailPage({ params }: Props) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return notFound();
  }

  const category = productCategories.find((c) => c.id === product.category);

  return <DetailContent product={product} category={category} />;
}
