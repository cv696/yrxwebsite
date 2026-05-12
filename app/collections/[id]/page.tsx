import Image from "next/image";
import { notFound } from "next/navigation";
import { productCategories, products } from "../../../data/products";

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

  return (
    <div className="space-y-10 pb-16">
      <header className="space-y-3">
        {category && (
          <p className="text-[11px] font-body uppercase tracking-[0.24em] text-ink/55">
            {category.label}
          </p>
        )}
        <h1 className="font-heading text-lg tracking-[0.3em] text-sandalwood sm:text-xl">
          {product.name}
        </h1>
        <p className="text-[11px] font-body uppercase tracking-[0.24em] text-ink/50">
          ONE OF A KIND · 孤品
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
            {product.description.includes('<p') ? (
              <div dangerouslySetInnerHTML={{ __html: product.description }} />
            ) : (
              <p className="leading-loose">{product.description}</p>
            )}
          </div>

          {product.ingredients && (
            <div className="mt-4 flex flex-col gap-1 text-sm text-foreground/60">
              <span className="font-heading tracking-widest text-accent/80">
                配方
              </span>
              <span>{product.ingredients}</span>
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            {product.price && product.category !== "incense-moxibustion" && (
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
      </section>
    </div>
  );
}

