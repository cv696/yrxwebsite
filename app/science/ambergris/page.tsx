import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "龙涎香 · 海底千年陈化定香剂 - 缘融轩",
  description: "探寻龙涎香的自然奥秘——从鲸体取出到海水陈化，为何白色龙涎香价值昂贵，以及它在香氛中的不可替代作用。",
};

export default function AmbergrisPage() {
  return (
    <div className="space-y-10 pb-16">
      {/* 返回链接 */}
      <Link
        href="/science"
        className="inline-flex items-center gap-2 text-sm text-ink/60 transition-colors hover:text-sandalwood/80"
      >
        <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
        <span>返回科学与养生</span>
      </Link>

      {/* 文章头部 */}
      <header className="space-y-4">
        <p className="text-[11px] font-body uppercase tracking-[0.24em] text-ink/55">
          深度文章
        </p>
        <h1 className="font-heading text-xl tracking-[0.3em] text-sandalwood sm:text-2xl">
          龙涎香 · 海底千年陈化的定香剂
        </h1>
        <p className="text-sm text-ink/60">为何白色龙涎香价值昂贵？它如何成为香氛中的灵魂？</p>
      </header>

      {/* 文章正文 */}
      <article className="space-y-6 rounded-3xl border border-sandalwood/18 bg-paper/95 p-6 shadow-[0_16px_52px_rgba(0,0,0,0.05)]">
        <div className="space-y-4 text-sm leading-loose text-ink/80 sm:text-base">

          <h2 className="font-heading text-base tracking-[0.24em] text-accent pt-4">
            一块石头的百年蜕变：龙涎香的形成与等级
          </h2>
          <p>
            龙涎香，抹香鲸肠胃的分泌物，业内称之为"漂浮的黄金"。它并非一出生就是白色的宝物，
            而是需要经历漫长的自然陈化，方能成就其独特价值。
          </p>
          <div className="space-y-3">
            <div className="rounded-xl bg-sandalwood/5 p-4">
              <p className="font-heading text-[11px] tracking-[0.22em] text-sandalwood/80 mb-2">
                从鲸体取出 vs 自然排出
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-ink/70">从抹香鲸体内取出：</span>
                  <span className="text-ink/70">黑色、质地柔软、气味难闻，未经自然陈化，内部杂质未析出，龙涎香醇未充分转化，<strong>价值较低</strong>。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-ink/70">抹香鲸自然排出体外：</span>
                  <span className="text-ink/70">在海水中经历漫长浸泡与氧化，逐渐由浅黑变为灰色、浅灰，最终成为白色，<strong>价值高昂</strong>。</span>
                </li>
              </ul>
            </div>
          </div>
          <p>
            海水的咸度会促使龙涎香中的脂肪类物质发生皂化反应，这是颜色转变的关键。
            而白色龙涎香之所以成为上品，是因为它往往需要经过<strong>百年以上</strong>海水的浸泡，
            将杂质完全漂出，龙涎香醇含量也更高，香气浓郁持久。
          </p>

          <h2 className="font-heading text-base tracking-[0.24em] text-accent pt-4">
            二、香氛中的"定香剂"：龙涎香的不可替代性
          </h2>
          <p>
            龙涎香被称为香氛中的"定香剂"。在液体香水中，它只需极微量的万分之一，
            就能牢牢锁住主香的韵味，让香气持久不散。
          </p>
          <div className="space-y-3">
            <div className="rounded-xl border border-sandalwood/15 bg-primary/50 p-4">
              <p className="font-heading text-[11px] tracking-[0.22em] text-sandalwood/80 mb-3">
                龙涎香的三大作用
              </p>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-sandalwood/15 text-[10px] font-bold text-sandalwood/80">1</span>
                  <div>
                    <p className="font-semibold text-ink/80">固定香气</p>
                    <p className="text-ink/65">锁住主香韵味，防止香气挥发消散</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-sandalwood/15 text-[10px] font-bold text-sandalwood/80">2</span>
                  <div>
                    <p className="font-semibold text-ink/80">催香升华</p>
                    <p className="text-ink/65">与主香交融、升华，催生出比单纯主香更高级、更醇美的复合香气</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-sandalwood/15 text-[10px] font-bold text-sandalwood/80">3</span>
                  <div>
                    <p className="font-semibold text-ink/80">越陈越醇</p>
                    <p className="text-ink/65">存放越久，香气越显温润醇厚</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
          <p>
            如果缺少龙涎香，主香就容易和其他香材的气味混杂，变得杂乱不纯净，
            香味也无法稳定，一段时间后最初的芬芳便会消散。
          </p>

          <h2 className="font-heading text-base tracking-[0.24em] text-accent pt-4">
            三、龙涎香的本质：高级香水里的"稀土"
          </h2>
          <p>
            龙涎香本身几乎没有什么明显的香味，它的作用不是提供自己的气味，
            而是在香水中起到"化学键"般的作用——用量极微，却能将所有香材牢牢聚合在一起。
          </p>
          <p className="rounded-xl bg-sandalwood/5 p-4 italic">
            若用现代工业来比喻，龙涎香就如同高级香水里的"稀土"——用量极微，却不可或缺。
          </p>
          <p>
            正因如此，任何一款真正的高级香水，加入龙涎香的首要目的就是<strong>"定香"</strong>。
            它不喧宾夺主，却能让整支香水的灵魂得以完整保留，贯穿时间，始终如一。
          </p>

          <h2 className="font-heading text-base tracking-[0.24em] text-accent pt-4">
            四、缘融轩与龙涎香的深厚渊源
          </h2>
          <p>
            缘融轩在制作的各种产品中，几乎都有加入极品的龙涎香。这归功于品牌创始人
            <strong>李国荣教授</strong>的收藏家身份——作为国内极少数的中医传统香疗专家，
            收集各种稀有香料，是李教授多年来的兴趣与使命。
          </p>
          <p>
            多年的收藏与研究，让李教授对龙涎香的品鉴与运用积累了深厚经验。
            缘融轩产品中的每一份龙涎香，都经过李教授亲自甄选，确保品质上乘，
            让每一位使用者都能体验到这海底珍宝的独特魅力。
          </p>

          <h2 className="font-heading text-base tracking-[0.24em] text-accent pt-4">
            五、天然龙涎香的药物功效
          </h2>
          <p>龙涎香不仅在香氛中价值斐然，在中医传统中也有着广泛的应用：</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-sandalwood/15 bg-primary/50 p-4">
              <p className="font-heading text-[11px] tracking-[0.22em] text-sandalwood/80 mb-2">行气活血</p>
              <p className="text-ink/70">专治因气滞血瘀导致的心腹疼痛、胸闷气结等问题。</p>
            </div>
            <div className="rounded-xl border border-sandalwood/15 bg-primary/50 p-4">
              <p className="font-heading text-[11px] tracking-[0.22em] text-sandalwood/80 mb-2">化痰止咳</p>
              <p className="text-ink/70">能作用于肺经，有效化痰平喘，可用于缓解咳嗽、气喘等症。</p>
            </div>
            <div className="rounded-xl border border-sandalwood/15 bg-primary/50 p-4">
              <p className="font-heading text-[11px] tracking-[0.22em] text-sandalwood/80 mb-2">散结止痛</p>
              <p className="text-ink/70">被中医认为有助于"散癥结，消气结"，可缓解因气血不通产生的各类疼痛。</p>
            </div>
            <div className="rounded-xl border border-sandalwood/15 bg-primary/50 p-4">
              <p className="font-heading text-[11px] tracking-[0.22em] text-sandalwood/80 mb-2">补益肾阳</p>
              <p className="text-ink/70">传统医学记载其能"益精髓，助阳道"，有助于改善因肾虚引起的阳痿、早泄等问题。</p>
            </div>
            <div className="rounded-xl border border-sandalwood/15 bg-primary/50 p-4 sm:col-span-2">
              <p className="font-heading text-[11px] tracking-[0.22em] text-sandalwood/80 mb-2">镇静安神</p>
              <p className="text-ink/70">现代药理证实，龙涎香的香气能有效缓解压力、焦虑，帮助放松心情。</p>
            </div>
          </div>

          <h3 className="font-heading text-[13px] tracking-[0.22em] text-sandalwood/80 pt-4">
            现代药理研究
          </h3>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-sandalwood/10 text-[10px] font-bold text-sandalwood/80">1</div>
              <div>
                <p className="font-semibold text-ink/80">对中枢神经系统</p>
                <p className="text-ink/65">作用类似麝香，小剂量使用有兴奋作用，大剂量则有抑制作用。</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-sandalwood/10 text-[10px] font-bold text-sandalwood/80">2</div>
              <div>
                <p className="font-semibold text-ink/80">对心血管系统</p>
                <p className="text-ink/65">能作用于心脏，产生强心和降血压的效果。</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-sandalwood/10 text-[10px] font-bold text-sandalwood/80">3</div>
              <div>
                <p className="font-semibold text-ink/80">抗菌活性</p>
                <p className="text-ink/65">研究证实，熏香气雾能抑制多种细菌和真菌。</p>
              </div>
            </div>
          </div>

          <h2 className="font-heading text-base tracking-[0.24em] text-accent pt-4">
            六、龙涎香在缘融轩香灸中的应用
          </h2>
          <p>
            龙涎香用在缘融轩香灸与香疗里，主要扮演的是
            <strong>"定香剂"</strong>和<strong>"氛围放大器"</strong>的角色。
          </p>
          <div className="rounded-xl bg-sandalwood/5 p-4 space-y-2">
            <p className="text-ink/80">
              <strong>定香剂：</strong>让香气更稳定，防止挥发消散，使整支香的韵味持久绵长。
            </p>
            <p className="text-ink/80">
              <strong>氛围放大器：</strong>在传统合香中，用它来"调和诸香"，让整体的香气变得柔和而深邃，
              将其他香材的优点进一步升华。
            </p>
          </div>
          <p>
            这也是缘融轩香灸能够带来独特体验的关键所在——每一缕香气，
            都在龙涎香的调和下，得以最大程度地发挥其本质魅力。
          </p>

        </div>
      </article>
    </div>
  );
}