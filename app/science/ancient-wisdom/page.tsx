import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "香灸 · 传承千年的中医智慧 - 缘融轩",
  description: "从《山海经》到《本草纲目》，探寻古籍中的香灸印记，结合现代科学研究，验证纯中药香灸的安全与疗效。",
};

export default function AncientWisdomPage() {
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
          香灸 · 传承千年的中医智慧
        </h1>
        <p className="text-sm text-ink/60">纯中药吸入疗法的安全之选</p>
      </header>

      {/* 文章正文 */}
      <article className="space-y-6 rounded-3xl border border-sandalwood/18 bg-paper/95 p-6 shadow-[0_16px_52px_rgba(0,0,0,0.05)]">
        <div className="space-y-4 text-sm leading-loose text-ink/80 sm:text-base">

          <h2 className="font-heading text-base tracking-[0.24em] text-accent pt-4">
            千年传承：古籍中的香灸印记
          </h2>
          <p>
            在中华文明的悠久历史中，香灸作为一种独特的纯中药吸入疗法，早已成为传统医学的瑰宝。
            它以天然草本为基，通过温和燃烧释放精油，直接作用于呼吸系统和微血管，帮助调理咽喉炎、
            肺部感染及心血管问题，同时为重度吸烟者提供健康过渡方式。不同于现代化学制品，香灸坚持
            "纯中药、无添加"的原则，历经古籍验证和现代研究，已被证明安全有效。
          </p>
          <p>
            香灸的根源可追溯至先秦时代。《山海经》作为我国最早的奇书之一，已记载佩戴"薰草"
            （一种芳香植物）可"已疠"，即预防疫病。这是最早的香疗记载，强调芳香药物通过吸入或
            佩戴方式驱邪防疫。
          </p>
          <p>
            华佗作为外科鼻祖，曾用丁香、百部等芳香药制成香囊，悬挂室内预防传染病，体现了香疗
            在汉代的实际应用。张仲景的《伤寒杂病论》虽未直接论香灸，但其辨证论治体系影响深远，
            后世香疗多以此为基础，结合芳香药如艾叶治疗寒湿之症。
          </p>
          <p>
            宋代是香疗发展的鼎盛期。《药方帖》记载"婴香方"，以角沉、丁香、龙脑、麝香等调配，
            强调香药"恬淡寂寞，非世所尚"，用于清净身心、治疗疾病，显示香灸的温和无害。
            《太平惠民和剂局方》作为官方药典，收录"檀香汤"等方剂，檀香用于理气止痛、心血管调理，
            证明香药在呼吸和心脑血管疾病中的疗效，且无毒副作用。这些古方选材精良，燃烧后不产生有害物。
          </p>
          <p>
            明代李时珍在《本草纲目》中盛赞艾叶等香药："艾叶取太阳真火，可以回垂绝元阳……
            逐一切寒湿，转肃杀之气为融和。"这直接支持香灸的纯阳之性，用于呼吸系统疾病，
            无毒且可长期使用。清代王士禛《香乘》详述香品调配，如降真香（紫藤香）用于辟邪，
            强调香疗的养生益处，无害于身。这些记载并非孤例，而是历代医家传承的精华，
            关键在于配方组合。
          </p>

          <h2 className="font-heading text-base tracking-[0.24em] text-accent pt-4">
            现代实证：科学验证香灸的安全与疗效
          </h2>
          <p>
            当代研究进一步印证了香灸的可靠性。2020年版《中华人民共和国药典》收载川芎、白芷等
            常用香药，用于活血止痛、祛风通窍，支持其在咽喉炎和呼吸感染中的应用，且标准明确，
            无毒副作用。
          </p>
          <p>
            临床观察显示，中药烟吸入治疗急性咽炎有效率高，改善症状如咽痛、
            咳嗽，安全无明显不良反应。研究辛夷苍耳子挥发油对过敏性鼻炎大鼠模型的作用，
            证明其抗炎机制，通过抑制炎症因子，直接作用于呼吸道。
          </p>
          <p>
            Meta分析鱼腥草提取物雾化吸入辅助治疗小儿支气管肺炎，疗效优于单纯西药，
            减少肺部炎症，促进恢复，且安全性高。芳香中药研究进展指出，苏合香、薄荷、
            石菖蒲等含有柠檬烯、α-蒎烯等活性成分，提神醒脑、改善心血管，无毒副作用，支持香灸的
            直接吸收优势。
          </p>
          <p>
            这些证据显示，纯中药香灸燃烧不产生有害物质（如焦油），而是释放有益精油，绕过肝脏代谢，
            直达肺部微血管，疗效更直接。
          </p>

          <h2 className="font-heading text-base tracking-[0.24em] text-accent pt-4">
            安全为本：纯中药的刚需选择
          </h2>
          <p>
            "一般人考虑燃烧的物质有害，应该说这样考虑也是对的，但是他们不知道我们选用什么东西嘛。"
            缘融轩灸精选无毒草本，每一剂量经百余文献筛选，确保燃烧后特性温和。古籍如《本草纲目》
            强调"纯阳无毒"，现代药典和临床研究均未见毒性报告。
          </p>
          <p>
            针对戒烟群体，香灸维持吸入习惯，却杜绝尼古丁危害，提供治疗+过渡的双效刚需。
            香灸不是简单的替代，而是中医智慧的现代化体现。它传承古方，融合实证，安全可靠，
            帮助您重获健康。选择香灸，就是选择千年传承的安心之选——纯中药，无化学，疗效直达。
          </p>

        </div>
      </article>
    </div>
  );
}