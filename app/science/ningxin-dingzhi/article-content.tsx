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
          {t("宁神定志香 · 一炷有深度的情绪与血管调节剂")}
        </h1>
        <p className="text-sm text-ink/60">
          {t("它不是古方复制，是一次有科学蓝图的全新设计")}
        </p>
      </header>

      {/* 文章正文 */}
      <article className="space-y-6 rounded-3xl border border-sandalwood/18 bg-paper/95 p-6 shadow-[0_16px_52px_rgba(0,0,0,0.05)]">
        <div className="space-y-6 text-sm leading-loose text-ink/80 sm:text-base">

          {/* ========== 开篇：核心定位 ========== */}
          <div className="rounded-xl border border-sandalwood/20 bg-sandalwood/5 p-5 space-y-4">
            <p className="font-heading text-base tracking-[0.22em] text-accent">
              {t("它不是古方复制，是一次有科学蓝图的全新设计")}
            </p>
            <p>
              {t("宁神定志香不是任何古方的翻版或改良，而是一次从零开始的原创设计。它以中医安神定志理念为方向，以现代神经药理学和免疫学的研究成果为工具——先有科学假说，再反向筛选药材、设计组方，形成了一套专为吸入式给药打造的全新香药复方。")}
            </p>
            <p>
              {t("为什么做成闻的？鼻腔背后就是大脑，经肺入血比经过肠胃更快。点燃这炷香，有效成分几十秒内进入循环——这不是玄学，是药物代谢动力学。")}
            </p>
            <p className="text-sandalwood/80">
              {t("更关键的是：这炷香里的每一个作用靶点，都有现代药理学论文的支持。它不是靠经验感觉差不多，而是每一味药材的筛选、每一个组方的搭配，都有明确的科学依据。")}
            </p>
            <p>
              {t("它能做什么？八个字：")}<strong>{t("养生静心，安神护体。")}</strong>{" "}
              {t("无论你是在对抗焦虑抑郁、被失眠困扰，还是在禅修品茗中寻求定境，抑或只是情绪不稳、莫名烦躁——它都在用科学的方式，替你守住身心底线。")}
            </p>
          </div>

          {/* ========== 第一章：闻香治病的历史 ========== */}
          <h2 className="font-heading text-base tracking-[0.24em] text-accent pt-4">
            {t("闻香治病，一门贯穿古今的智慧")}
          </h2>
          <p>
            {t("用香气疗愈身心，是人类最古老的医术之一。从远古防疫到宫廷疗疾，从文人雅趣到医家良方，闻香治病的历史印证了气味与身心之间深刻的联系。让我们沿着时间脉络，看看历代先贤是如何用香气守护生命的——")}
          </p>

          {/* 先秦至汉代 */}
          <h3 className="font-heading text-base tracking-[0.22em] text-accent pt-2">
            {t("先秦至汉代：防疫与宫廷奇香")}
          </h3>
          <p>
            {t("早在先秦时期，人们已用熏香驱虫防疫，《山海经》记载佩之可以已疠（佩戴香草可以防瘟疫）。1972年长沙马王堆汉墓出土了熏囊、香枕、香炉等一系列实物，实证了西汉时期以香疗防治病的习俗。据《汉武故事》记载，汉武帝曾烧兜末香以防疫疠，疫病闻香而止。香，在当时已是国家防疫体系中的重要一环。")}
          </p>

          {/* 魏晋隋唐 */}
          <h3 className="font-heading text-base tracking-[0.22em] text-accent pt-2">
            {t("魏晋隋唐：医家圣手与药王经典")}
          </h3>
          <p>
            {t("晋代葛洪在《肘后备急方》中首次提出了空气消毒法，明确记载以熏香避疫气，阻断病气传播。唐代留下了一则著名的医案：名医许胤宗用黄芪、防风汤热熏，治愈了柳太后中风不语——太后不能服药，许胤宗便以汤药蒸腾的热气熏蒸其口鼻，药气经呼吸而入，竟使太后苏醒能言。")}
          </p>
          <p>
            {t("药王孙思邈在《千金要方》中不仅记载了香囊避疫气，还用香膏治疗鼻塞、头风等症，展现了香气治疗的丰富应用。")}
          </p>

          {/* 宋元明清 */}
          <h3 className="font-heading text-base tracking-[0.22em] text-accent pt-2">
            {t("宋元明清：从文人雅事到温病三宝")}
          </h3>
          <p>
            {t("宋代文人用香极盛，但香气治病并未被遗忘。据载，宋代陈俞在姐姐家染疫时，用苏合香丸点燃熏香，救活了全家。另一则案例：名医陆氏用红花熏蒸救活产后血闷气闭的患者——血闷气闭，药不可入，陆氏以红花汤熏蒸，药气从口鼻而入，患者随即苏醒。")}
          </p>
          <p>
            {t("到了清代，温病学派集大成，创制的温病三宝（安宫牛黄丸、紫雪丹、至宝丹）至今仍是急救名方，其中多味香药通过开窍醒神发挥关键作用。")}
          </p>

          {/* 放眼世界 */}
          <h3 className="font-heading text-base tracking-[0.22em] text-accent pt-2">
            {t("放眼世界：不同文明的共同智慧")}
          </h3>
          <p>
            {t("这并非中国独有。古埃及人用芳香植物入药、祭祀、制作木乃伊，留存至今的埃伯斯纸草文稿中记录了数百种芳香处方。古希腊医学之父希波克拉底倡导用植物精油疗愈身心，提出芳香浴是健康之道。阿拉伯医学家阿维森纳在《医典》中也大量记载了芳香植物的药用价值。")}
          </p>

          <div className="rounded-xl border border-sandalwood/15 bg-primary/50 p-4">
            <p className="text-sandalwood/80">
              {t("闻香从来不只是风雅，它曾被历代医家当作正经的疗愈手段。宁神定志香正是站在这个传统之上——只是我们把传承了千年的经验，升级为可以验证、可以追溯的现代科学。")}
            </p>
          </div>

          {/* ========== 第二章：三条靶向通路 ========== */}
          <h2 className="font-heading text-base tracking-[0.24em] text-accent pt-4">
            {t("37味药材 · 三条靶向通路的科学配伍")}
          </h2>

          {/* 靶向一 */}
          <div className="space-y-3 rounded-xl border border-sandalwood/15 bg-primary/50 p-5">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-sandalwood/15 text-xs font-bold text-sandalwood">
                {t("一")}
              </span>
              <h3 className="font-heading text-base tracking-[0.22em] text-accent">
                {t("靶向一：GABA能通路——调节神经兴奋性，改善睡眠")}
              </h3>
            </div>
            <p>
              {t("大脑的兴奋与抑制由谷氨酸（兴奋）和GABA（抑制）共同维持。GABA系统功能障碍时，神经兴奋性异常增高，表现为入睡困难、思维停不下来、睡眠浅而多梦。")}
            </p>
            <p>
              {t("现代药理学研究表明，多种中药成分可通过激活GABA受体表达、上调谷氨酸脱羧酶（GAD）活性、抑制GABA转氨酶（GABA-T）降解等途径，有效提升中枢GABA水平，恢复兴奋-抑制平衡。本香方中的安神定志类药材正是基于这一机制进行筛选与配伍，针对睡眠障碍的多个节点进行协同调节。")}
            </p>
          </div>

          {/* 靶向二 */}
          <div className="space-y-3 rounded-xl border border-sandalwood/15 bg-primary/50 p-5">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-sandalwood/15 text-xs font-bold text-sandalwood">
                {t("二")}
              </span>
              <h3 className="font-heading text-base tracking-[0.22em] text-accent">
                {t("靶向二：BDNF-CREB信号通路——修复神经可塑性，稳定情绪")}
              </h3>
            </div>
            <p>
              {t("5-羟色胺（5-HT）和脑源性神经营养因子（BDNF）是维持情绪稳定的核心物质。BDNF促进神经元存活与突触可塑性，5-HT调节情绪、食欲与睡眠节律。BDNF信号通路异常已被证实为抑郁症的核心病理机制之一。")}
            </p>
            <p>
              {t("CREB是BDNF基因转录的关键调控因子，中药复方可通过激活CREB磷酸化，上调BDNF表达，进而修复受损的神经可塑性。本香方中的理气化湿类药材靶向该通路，帮助大脑恢复自身情绪调节能力，而非外源性强制干预。")}
            </p>
          </div>

          {/* 靶向三 */}
          <div className="space-y-3 rounded-xl border border-sandalwood/15 bg-primary/50 p-5">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-sandalwood/15 text-xs font-bold text-sandalwood">
                {t("三")}
              </span>
              <h3 className="font-heading text-base tracking-[0.22em] text-accent">
                {t("靶向三：NF-κB炎症通路——抑制神经与血管炎症，降低心血管风险")}
              </h3>
            </div>
            <p>
              {t("长期心理应激可激活NF-κB信号通路，该通路是炎症与免疫应答的核心枢纽。活化后的NF-κB启动大量促炎因子（如TNF-α、IL-6、IL-1β）的转录，诱发血管内皮功能障碍、氧化应激及神经炎症，构成情绪与心血管疾病之间的病理桥梁。")}
            </p>
            <p>
              {t("中药复方可通过多靶点抑制NF-κB活化，减轻炎症级联反应，改善血管内皮功能。本香方中的活血通络类药材靶向此通路，在情绪波动与心血管损伤之间建立一道屏障。")}
            </p>
          </div>

          {/* 协同总结 */}
          <div className="rounded-xl bg-sandalwood/5 p-4">
            <p>
              {t("三者协同，形成")}<strong>{t("神经-情绪-血管的系统性调节")}</strong>{t("——不是单一靶点的干预，而是多靶点、多通路的整体平衡。")}
            </p>
          </div>

          {/* ========== 第三章：与古香和精油的对比 ========== */}
          <h2 className="font-heading text-base tracking-[0.24em] text-accent pt-4">
            {t("它比古香和精油，新在哪里？")}
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-sandalwood/15 bg-primary/50 p-4 space-y-2">
              <p className="font-heading text-base tracking-[0.22em] text-sandalwood/80">
                {t("比古代宫廷香")}
              </p>
              <p className="text-ink/70">
                {t("古香靠经验传承，重雅重避秽。我们是先有科学假说，再找药材验证——从GABA受体、BDNF-CREB通路、NF-κB炎症枢纽出发，反向设计组方。构思严谨，配方组合有科学依据，疗效有可靠的理论支持。")}
              </p>
            </div>
            <div className="rounded-xl border border-sandalwood/15 bg-primary/50 p-4 space-y-2">
              <p className="font-heading text-base tracking-[0.22em] text-sandalwood/80">
                {t("比西方精油")}
              </p>
              <p className="text-ink/70">
                {t("精油多为单方或简方，靶向单一通路。这款香的37味复方同时覆盖神经兴奋性调节、神经可塑性修复、炎症抑制三个层面，形成系统性的调节网络。")}
              </p>
            </div>
          </div>

          {/* ========== 第四章：适合谁 ========== */}
          <h2 className="font-heading text-base tracking-[0.24em] text-accent pt-4">
            {t("适合谁？")}
          </h2>
          <ul className="space-y-2 list-none pl-0">
            {[
              t("焦虑抑郁倾向，情绪像过山车"),
              t("睡眠障碍：入睡难、睡得浅、梦多"),
              t("禅修品茗，需要一炷香帮你沉下来"),
              t("思虑过度，心静不下来"),
              t("血压血脂亮黄灯，医生叮嘱注意情绪管理"),
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sandalwood/60" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* ========== 结语 ========== */}
          <h2 className="font-heading text-base tracking-[0.24em] text-accent pt-4">
            {t("最后一句")}
          </h2>
          <div className="rounded-xl border border-sandalwood/20 bg-sandalwood/5 p-5 space-y-3">
            <p>
              {t("宁神定志香不是古方的影子。每一味药材的筛选、每一个靶点的确认，都经过了现代药理学文献的验证与交叉比对。它是一副37味香药精密配合、三条靶向通路协同作用的科学合香。")}
            </p>
            <p className="text-sandalwood/80">
              {t("当青烟升起，那些被论文反复验证过的分子，正顺着呼吸进入你的身体——调节GABA能系统以恢复睡眠节律，激活BDNF-CREB通路以修复情绪稳态，抑制NF-κB炎症通路以保护血管内皮。")}
            </p>
            <p>
              {t("严谨，透明，经得起追问。点燃它，你吸入的不是玄学，是可溯源的科学。")}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
