import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "拒绝助燃剂 · 低温慢燃才养生 - 缘融轩",
  description: "燃烧温度直接决定是否致癌。缘融轩坚守0添加底线，200~300℃低温慢燃，从根源规避健康风险。",
};

export default function NoAccelerantPage() {
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
          拒绝助燃剂 · 低温慢燃才养生
        </h1>
        <p className="text-sm text-ink/60">从燃烧温度看懂致癌风险</p>
      </header>

      {/* 文章正文 */}
      <article className="space-y-6 rounded-3xl border border-sandalwood/18 bg-paper/95 p-6 shadow-[0_16px_52px_rgba(0,0,0,0.05)]">
        <div className="space-y-4 text-sm leading-loose text-ink/80 sm:text-base">

          <h2 className="font-heading text-base tracking-[0.24em] text-accent pt-4">
            燃烧温度决定致癌风险
          </h2>
          <p>
            很多人养生用香灸，却不知道燃烧温度直接决定是否致癌。烟草燃烧研究显示：
            香烟燃烧锥中心温度高达800-900℃，抽吸瞬间峰值超900℃，高温会让烟草发生剧烈热裂解，
            产生苯并芘、亚硝胺、氰化氢、重金属等数十种强致癌物与剧毒气体，这也是吸烟致癌的核心原因。
          </p>
          <p>
            缘融轩香灸坚持纯天然草本中药配方，0助燃剂添加，燃烧温度严格控制在200~300℃低温区间。
            这个温度既能温和释放草本中的有益精油成分，又不会触发高温裂解反应，完全不产生致癌毒性物质，
            从根源规避健康风险。
          </p>
          <p>
            我们放弃助燃剂带来的顺畅吸食感，选择低温慢燃，不是技术不足，而是坚守养生初心：
            入口不顺滑、吸食不轻松，换来的是无致癌物、无有毒气体的安全体验，真正为亚健康人群、
            养生爱好者打造温和无害的草本香灸。
          </p>

          <h2 className="font-heading text-base tracking-[0.24em] text-accent pt-4">
            为什么缘融轩香灸燃烧比香烟慢？
          </h2>
          <p>
            不少人疑惑：为什么缘融轩香灸燃烧速度慢，吸食也没那么顺畅？答案很简单：
            我们完全不添加任何助燃剂。
          </p>
          <p>
            市面上香烟为了提升吸食体验，会添加柠檬酸钾、苹果酸钾等助燃剂，劣质烟甚至违规用硝酸钾（牙硝），
            助燃剂会让燃烧温度飙升至800℃以上，燃烧更快、吸食更顺滑轻松，但代价是高温产生大量致癌物。
          </p>
          <p>
            普通香灸为了模仿顺畅口感，也大多添加助燃剂，燃烧温度多在500-800℃，同样会产生有毒物质。
            缘融轩香灸拒绝助燃剂，只靠天然草本自身特性燃烧，温度仅200-300℃，所以燃烧更慢、入口偏缓。
            这不是缺陷，而是天然草本的本真状态——牺牲短暂的吸食顺滑，守住草本精油的活性与无毒性，
            这才是养生香灸该有的样子。
          </p>

          <h2 className="font-heading text-base tracking-[0.24em] text-accent pt-4">
            三类产品燃烧对比
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-sandalwood/20">
                  <th className="py-2 text-left font-heading text-[11px] tracking-[0.2em] text-ink/70">产品类型</th>
                  <th className="py-2 text-left font-heading text-[11px] tracking-[0.2em] text-ink/70">燃烧温度</th>
                  <th className="py-2 text-left font-heading text-[11px] tracking-[0.2em] text-ink/70">助燃剂</th>
                  <th className="py-2 text-left font-heading text-[11px] tracking-[0.2em] text-ink/70">有害物质</th>
                  <th className="py-2 text-left font-heading text-[11px] tracking-[0.2em] text-ink/70">吸食感受</th>
                </tr>
              </thead>
              <tbody className="text-ink/70">
                <tr className="border-b border-sandalwood/10">
                  <td className="py-2 pr-4">香烟</td>
                  <td className="py-2 pr-4 text-red-500/80">800-900℃，抽吸峰值超900℃</td>
                  <td className="py-2 pr-4">合规有机钾盐 / 劣质烟硝酸钾</td>
                  <td className="py-2 pr-4">苯并芘、亚硝胺、CO、重金属等强致癌物</td>
                  <td className="py-2">顺畅、易吸入</td>
                </tr>
                <tr className="border-b border-sandalwood/10">
                  <td className="py-2 pr-4">其他香灸</td>
                  <td className="py-2 pr-4 text-orange-500/80">多为 500-800℃</td>
                  <td className="py-2 pr-4">普遍添加</td>
                  <td className="py-2 pr-4">高温裂解产生有毒物质</td>
                  <td className="py-2">较顺畅</td>
                </tr>
                <tr className="bg-green-500/5">
                  <td className="py-2 pr-4 font-semibold text-sandalwood">缘融轩香灸</td>
                  <td className="py-2 pr-4 text-green-600/80">200~300℃</td>
                  <td className="py-2 pr-4 text-green-600/80">0 添加</td>
                  <td className="py-2 pr-4">无致癌毒性物质，保留草本精油</td>
                  <td className="py-2">入口偏缓、不顺滑</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            香烟靠助燃剂实现高温快燃，释放剧毒致癌物；多数香灸跟风添加助燃剂，看似养生实则产生有害物质；
            只有缘融轩香灸，坚守纯天然、0助燃剂底线。
          </p>
          <p>
            我们承认，不加助燃剂让吸食不够顺畅，无法像呼吸般轻松吸入，但这是拒绝以健康为代价的选择。
            不迎合虚假的顺滑体验，只做真正无害、保留草本精华的养生香灸，这就是缘融轩与行业乱象的本质区别。
          </p>

        </div>
      </article>
    </div>
  );
}