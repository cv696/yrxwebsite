import { notFound } from "next/navigation";
import { productCategories, products } from "../../../data/products";

type Props = {
  params: { id: string };
};

export default function CollectionDetailPage({ params }: Props) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return notFound();
  }

  const category = productCategories.find((c) => c.id === product.category);

  const ingredientsList = product.ingredients
    .split("·")
    .map((item) => item.trim())
    .filter(Boolean);

  const healthBenefits = [
    "安神静心：适合在冥想、诵读或睡前使用，帮助情绪沉静。",
    "心率变异度（HRV）改善：以柔和香气协助自主神经平衡，支持身心恢复力。",
    "睡眠辅助：营造稳定而不刺激的香氛环境，陪伴入睡与夜间修复。",
  ];

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
        <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-sandalwood/18 bg-ash/40" />

        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="font-heading text-sm tracking-[0.26em] text-sandalwood">
              作品说明
            </h2>
            <p className="text-xs leading-relaxed text-ink/75 sm:text-sm">
              {product.description}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-3 rounded-2xl border border-sandalwood/18 bg-paper/95 p-4">
              <h3 className="font-heading text-xs tracking-[0.24em] text-sandalwood">
                主要药材
              </h3>
              <ul className="mt-1 space-y-1.5 text-xs leading-relaxed text-ink/80">
                {ingredientsList.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 rounded-2xl border border-sandalwood/18 bg-paper/95 p-4">
              <h3 className="font-heading text-xs tracking-[0.24em] text-sandalwood">
                身心益处
              </h3>
              <ul className="mt-1 space-y-1.5 text-xs leading-relaxed text-ink/80">
                {healthBenefits.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

