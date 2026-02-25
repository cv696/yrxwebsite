export default function ContactPage() {
  return (
    <div className="space-y-10 pb-16">
      <section className="space-y-4">
        <div>
          <h1 className="font-heading text-xl tracking-[0.3em] text-sandalwood sm:text-2xl">
            联系与预约
          </h1>
          <p className="mt-2 text-xs font-body uppercase tracking-[0.28em] text-ink/60">
            CONTACT · PRIVATE CONSULTATION
          </p>
        </div>
        <p className="max-w-2xl text-xs leading-relaxed text-ink/75 sm:text-sm">
          缘融轩现阶段以小规模、预约制为主。若你希望了解定制药香珠、药香佛印，
          或洽询香灸体验与身心调理合作，可以通过以下方式与我们联系。
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4 rounded-3xl border border-sandalwood/18 bg-paper/95 p-5 shadow-[0_14px_46px_rgba(0,0,0,0.05)]">
          <h2 className="font-heading text-sm tracking-[0.26em] text-sandalwood">
            私人咨询 · Private
          </h2>
          <p className="text-xs leading-relaxed text-ink/75 sm:text-sm">
            适合对药香珠、药香佛印有深入兴趣，希望结合自身体质与生活节奏，
            进行一对一咨询与搭配建议的来访者。
          </p>
          <ul className="mt-3 space-y-1.5 text-xs leading-relaxed text-ink/80">
            <li>· 咨询时间：每次约 45–60 分钟</li>
            <li>· 形式：线上视频 / 线下会面（视当期安排而定）</li>
            <li>· 内容：体质与作息访谈、用香习惯、个性化组合建议</li>
          </ul>
        </div>

        <div className="space-y-4 rounded-3xl border border-sandalwood/18 bg-paper/95 p-5 shadow-[0_14px_46px_rgba(0,0,0,0.05)]">
          <h2 className="font-heading text-sm tracking-[0.26em] text-sandalwood">
            联系方式 · Contact
          </h2>
          <p className="text-xs leading-relaxed text-ink/75 sm:text-sm">
            缘融轩现阶段以小规模、预约制为主。若你希望了解定制药香珠、药香佛印，
            或洽询香灸体验与身心调理合作，可以通过以下方式与我们联系：
          </p>
          <ul className="mt-3 space-y-1.5 text-xs leading-relaxed text-ink/80">
            <li>· 联系电话：086-18902407215</li>
            <li>· 电子邮件：imtengwei@gmail.com</li>
            <li>· 地址：广东省佛山市湖景路天湖郦都</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

