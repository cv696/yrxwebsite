"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLocale } from "@/components/locale-provider";

export default function ArticleContent() {
  const { t } = useLocale();

  return (
    <div className="space-y-10 pb-16">
      {/* 返回链接 */}
      <Link
        href="/science"
        className="inline-flex items-center gap-2 text-sm text-ink/60 transition-colors hover:text-sandalwood/80"
      >
        <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
        <span>{t("返回科学与养生")}</span>
      </Link>

      {/* 文章头部 */}
      <header className="space-y-4">
        <p className="text-[11px] font-body uppercase tracking-[0.24em] text-ink/55">
          {t("深度文章")}
        </p>
        <h1 className="font-heading text-xl tracking-[0.3em] text-sandalwood sm:text-2xl">
          {t("中医古籍中的烟熏疗法与现代医学研究")}
        </h1>
        <p className="text-sm text-ink/60">
          {t("从古籍文献到临床验证，探寻千年烟熏疗法的科学依据")}
        </p>
      </header>

      {/* 文章正文 */}
      <article className="space-y-6 rounded-3xl border border-sandalwood/18 bg-paper/95 p-6 shadow-[0_16px_52px_rgba(0,0,0,0.05)]">
        <div className="space-y-4 text-sm leading-loose text-ink/80 sm:text-base">

          <h2 className="font-heading text-base tracking-[0.24em] text-accent pt-4">
            {t("一、中医古籍中的烟熏疗法记载")}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-sandalwood/20">
                  <th className="py-2 text-left font-heading text-[11px] tracking-[0.2em] text-ink/70">{t("古籍名称")}</th>
                  <th className="py-2 text-left font-heading text-[11px] tracking-[0.2em] text-ink/70">{t("内容概要")}</th>
                  <th className="py-2 text-left font-heading text-[11px] tracking-[0.2em] text-ink/70">{t("年代")}</th>
                </tr>
              </thead>
              <tbody className="text-ink/70">
                <tr className="border-b border-sandalwood/10">
                  <td className="py-2 pr-4 font-semibold">{t("《五十二病方》")}</td>
                  <td className="py-2 pr-4">{t("首次记载熏蒸方法，记载了燃烧药物熏治牲畜及\"骆阮烧烟熏治牝痔\"等内容")}</td>
                  <td className="py-2 pr-4">{t("战国时代（公元前20世纪）")}</td>
                </tr>
                <tr className="border-b border-sandalwood/10">
                  <td className="py-2 pr-4 font-semibold">{t("《本草纲目》")}</td>
                  <td className="py-2 pr-4">{t("记载使用草药烟雾排出\"邪气\"和有害病原体")}</td>
                  <td className="py-2 pr-4">{t("1518-1593年，李时珍")}</td>
                </tr>
                <tr className="border-b border-sandalwood/10">
                  <td className="py-2 pr-4 font-semibold">{t("《理瀹骈文》")}</td>
                  <td className="py-2 pr-4">{t("清代外治宗师吴尚先所著，系统阐述熏洗疗法的理论基础、作用机理、辨证施治、药物选择、使用方法、主治功效、注意事项等，是熏洗疗法发展史上的里程碑")}</td>
                  <td className="py-2 pr-4">{t("清代")}</td>
                </tr>
                <tr className="border-b border-sandalwood/10">
                  <td className="py-2 pr-4 font-semibold">{t("《证治要诀》《医方摘要》《伤寒蕴要》")}</td>
                  <td className="py-2 pr-4">{t("记载熏烟疗法用于喉痹、牙痛、呃逆、头痛等症状治疗")}</td>
                  <td className="py-2 pr-4">{t("古代")}</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">{t("《黄帝内经》")}</td>
                  <td className="py-2 pr-4">{t("记载鼻腔给药进行急救")}</td>
                  <td className="py-2 pr-4">{t("古代")}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-heading text-base tracking-[0.24em] text-accent pt-4">
            {t("二、国家中医药标准定义")}
          </h2>
          <p>
            {t("根据")}<strong>{t("国家卫生健康委员会和国家中医药管理局")}</strong>{t("发布的《中医临床诊疗术语》：")}
          </p>
          <p className="rounded-xl bg-sandalwood/5 p-4 italic">
            <strong>{t("烟熏疗法定义：")}</strong>{t("将具有杀虫灭菌或开窍醒神、止咳平喘、祛风燥湿等作用的中药烟熏剂燃着后，")}
            <strong>{t("用烟气熏罨体表治疗部位或吸入口鼻")}</strong>{t("，以防治疾病的一种外治疗法。")}
          </p>
          <p><strong>{t("常用范围：")}</strong>{t("流行性疾病、肺系病、皮肤黏膜病、女性前阴病等")}</p>

          <h2 className="font-heading text-base tracking-[0.24em] text-accent pt-4">
            {t("三、现代医学研究资料")}
          </h2>
          
          <h3 className="font-heading text-[13px] tracking-[0.22em] text-sandalwood/80">{t("（一）慢性湿疹治疗研究")}</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-sandalwood/20">
                  <th className="py-2 text-left font-heading text-[11px] tracking-[0.2em] text-ink/70">{t("研究名称")}</th>
                  <th className="py-2 text-left font-heading text-[11px] tracking-[0.2em] text-ink/70">{t("样本量")}</th>
                  <th className="py-2 text-left font-heading text-[11px] tracking-[0.2em] text-ink/70">{t("有效率")}</th>
                  <th className="py-2 text-left font-heading text-[11px] tracking-[0.2em] text-ink/70">{t("安全性")}</th>
                </tr>
              </thead>
              <tbody className="text-ink/70">
                <tr className="border-b border-sandalwood/10">
                  <td className="py-2 pr-4">{t("《中药烟熏疗法治疗慢性湿疹（脾虚湿困型）的临床研究》")}</td>
                  <td className="py-2 pr-4">{t("72例（2022-2023年）")}</td>
                  <td className="py-2 pr-4">{t("91.43%")}</td>
                  <td className="py-2 pr-4">{t("无不良反应")}</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">{t("《中药药烟熏灸治疗局限性慢性湿疹临床研究》")}</td>
                  <td className="py-2 pr-4">{t("60例")}</td>
                  <td className="py-2 pr-4 text-green-600/80">{t("96.7%（烟熏组）vs 73.3%（对照组）")}</td>
                  <td className="py-2 pr-4">{t("痊愈时间更短、复发率更低")}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="font-heading text-[13px] tracking-[0.22em] text-sandalwood/80">{t("（二）艾烟熏灸法古今文献研究")}</h3>
          <p><strong>{t("研究结果")}</strong>{t("（2020年）：")}</p>
          <ul className="list-inside space-y-1">
            <li>{t("涉及医学古籍")}<strong>{t("67部")}</strong>{t("，古代文献录入条文")}<strong>{t("167条")}</strong>{t("，现代文献录入")}<strong>{t("196篇")}</strong></li>
            <li>{t("古代艾烟熏灸法治疗范围广泛：")}
              <ul className="ml-4 list-inside list-disc space-y-1">
                <li>{t("痔疮类疾病（肛门生虫瘙痒、痔漏疼痛、痔疮出血）")}</li>
                <li>{t("疮疡类疾病（疥疮、杨梅疮、附骨疽、痘疮瘙痒、虫咬伤疮）")}</li>
                <li>{t("内科疾病（头痛、风虫牙痛、咳嗽等）")}</li>
                <li>{t("妇科外阴瘙痒症")}</li>
                <li>{t("疫病防治")}</li>
              </ul>
            </li>
          </ul>

          <h2 className="font-heading text-base tracking-[0.24em] text-accent pt-4">
            {t("四、苍术、艾叶烟熏消毒研究")}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-sandalwood/20">
                  <th className="py-2 text-left font-heading text-[11px] tracking-[0.2em] text-ink/70">{t("研究名称")}</th>
                  <th className="py-2 text-left font-heading text-[11px] tracking-[0.2em] text-ink/70">{t("研究内容")}</th>
                  <th className="py-2 text-left font-heading text-[11px] tracking-[0.2em] text-ink/70">{t("结果")}</th>
                </tr>
              </thead>
              <tbody className="text-ink/70">
                <tr className="border-b border-sandalwood/10">
                  <td className="py-2 pr-4">{t("《中药苍术、艾叶烟熏对空间消毒有良好的效果》")}</td>
                  <td className="py-2 pr-4">{t("1959年开始实验，筛选烟熏有效药物，研究剂量和时间")}</td>
                  <td className="py-2 pr-4 text-green-600/80">{t("烟熏消毒效果良好，4-6小时内保持消毒效果")}</td>
                </tr>
                <tr className="border-b border-sandalwood/10">
                  <td className="py-2 pr-4">{t("《苍术熏蒸对房间空气消毒效果的研究》")}</td>
                  <td className="py-2 pr-4">{t("研究苍术熏蒸对房间空气的消毒效果")}</td>
                  <td className="py-2 pr-4 text-green-600/80">{t("有效杀灭多种细菌")}</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">{t("《艾烟熏灸法的古今文献研究》")}</td>
                  <td className="py-2 pr-4">{t("艾烟对大肠杆菌、结核杆菌、绿脓杆菌、金葡菌等具有显著杀灭作用")}</td>
                  <td className="py-2 pr-4 text-green-600/80">{t("艾烟可抑制或杀灭多种细菌、真菌、病毒")}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-heading text-base tracking-[0.24em] text-accent pt-4">
            {t("五、吸入治疗方式的现代研究")}
          </h2>
          <p>{t("根据《吸入治疗慢性肺部疾病的现代研究及应用特点分析》（2025年）：")}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-sandalwood/20">
                  <th className="py-2 text-left font-heading text-[11px] tracking-[0.2em] text-ink/70">{t("吸入方式")}</th>
                  <th className="py-2 text-left font-heading text-[11px] tracking-[0.2em] text-ink/70">{t("历史渊源")}</th>
                </tr>
              </thead>
              <tbody className="text-ink/70">
                <tr className="border-b border-sandalwood/10">
                  <td className="py-2 pr-4 font-semibold">{t("中药雾化吸入")}</td>
                  <td className="py-2 pr-4">{t("始于20世纪80年代末，仍需进一步探讨安全性和有效性")}</td>
                </tr>
                <tr className="border-b border-sandalwood/10">
                  <td className="py-2 pr-4 font-semibold">{t("烟熏吸入")}</td>
                  <td className="py-2 pr-4">{t("古代就有记载")}</td>
                </tr>
                <tr className="border-b border-sandalwood/10">
                  <td className="py-2 pr-4 font-semibold">{t("蒸气吸入")}</td>
                  <td className="py-2 pr-4">{t("古代应用")}</td>
                </tr>
                <tr className="border-b border-sandalwood/10">
                  <td className="py-2 pr-4 font-semibold">{t("香薰吸入")}</td>
                  <td className="py-2 pr-4">{t("传统方法")}</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">{t("闻香吸入")}</td>
                  <td className="py-2 pr-4">{t("传统方法")}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>{t("古籍记载：《五十二病方》《伤寒杂病论》《肘后备急方》《本草纲目》等记载了")}<strong>{t("100多种")}</strong>{t("熏蒸、鼻疗的药物，主要包含蒸气、香囊、药枕、烟雾等方法和")}<strong>{t("50多种制剂")}</strong>{t("。")}</p>

          <h2 className="font-heading text-base tracking-[0.24em] text-accent pt-4">
            {t("六、安全性说明")}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-sandalwood/20">
                  <th className="py-2 text-left font-heading text-[11px] tracking-[0.2em] text-ink/70">{t("事项")}</th>
                  <th className="py-2 text-left font-heading text-[11px] tracking-[0.2em] text-ink/70">{t("说明")}</th>
                </tr>
              </thead>
              <tbody className="text-ink/70">
                <tr className="border-b border-sandalwood/10">
                  <td className="py-2 pr-4 font-semibold">{t("治疗效果")}</td>
                  <td className="py-2 pr-4">{t("部分研究显示中药烟熏疗法疗效确切，安全性高")}</td>
                </tr>
                <tr className="border-b border-sandalwood/10">
                  <td className="py-2 pr-4 font-semibold">{t("不良反应")}</td>
                  <td className="py-2 pr-4">{t("治疗过程中两组患者均未出现明显不良反应")}</td>
                </tr>
                <tr className="border-b border-sandalwood/10">
                  <td className="py-2 pr-4 font-semibold">{t("注意事项")}</td>
                  <td className="py-2 pr-4">{t("需专业指导下进行，注意通风、控制烟雾浓度、避免过度吸入")}</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">{t("现代研究局限")}</td>
                  <td className="py-2 pr-4">{t("中药成分复杂，其雾化吸入的安全性和有效性仍需进一步探讨，包括质量控制、不良反应监测等")}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-heading text-base tracking-[0.24em] text-accent pt-4">
            {t("结论")}
          </h2>
          <div className="space-y-3 rounded-xl bg-sandalwood/5 p-4">
            <p><strong>{t("中医烟熏疗法确实有明确的历史文献记载和现代医学研究支持：")}</strong></p>
            <div className="space-y-2">
              <p><strong>{t("古籍记载：")}</strong></p>
              <ul className="ml-4 list-inside list-disc space-y-1">
                <li>{t("《五十二病方》（战国时代）首次记载熏蒸方法")}</li>
                <li>{t("《本草纲目》记载草药烟雾治疗")}</li>
                <li>{t("《理瀹骈文》系统阐述熏洗疗法理论")}</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p><strong>{t("现代研究：")}</strong></p>
              <ul className="ml-4 list-inside list-disc space-y-1">
                <li>{t("慢性湿疹治疗：有效率91.43%-96.7%，安全性良好")}</li>
                <li>{t("艾烟消毒：对多种细菌、真菌、病毒有杀灭作用")}</li>
                <li>{t("临床应用：国家中医药标准将烟熏疗法列为规范外治疗法")}</li>
              </ul>
            </div>
            <p className="pt-2">{t("烟熏疗法包括")}<strong>{t("体表熏蒸")}</strong>{t("和")}<strong>{t("吸入口鼻")}</strong>{t("两种使用方式，古籍记载的吸入治疗已有")}<strong>{t("2000多年历史")}</strong>{t("。")}</p>
          </div>

        </div>
      </article>
    </div>
  );
}
