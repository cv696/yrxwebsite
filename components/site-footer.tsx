import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-accent/15 bg-primary/90">
      <div className="mx-auto max-w-6xl px-5 py-8 md:px-6 md:py-10 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-start">
          {/* 左侧：联系信息 */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <div className="flex items-center gap-3">
              <div className="flex flex-col leading-tight">
                <span className="font-heading text-xs tracking-[0.35em] text-accent md:text-sm">
                  缘融轩香舍
                </span>
              </div>
            </div>
            <div className="space-y-2 text-center text-xs text-foreground/70 md:text-left">
              <p>以缘融心 香为心舍</p>
              <p>联系电话：086-18902407215</p>
              <p>邮箱：imtengwei@gmail.com</p>
              <p>地址：广东省佛山市湖景路天湖郦都</p>
            </div>
          </div>
          
          {/* 右侧：导航链接 */}
          <div className="flex flex-col items-center gap-4 md:items-end">
            <div className="text-center text-xs font-body uppercase tracking-[0.25em] text-foreground/55 md:text-right">
              快速链接
            </div>
            <nav className="flex flex-col gap-2 text-center text-xs text-foreground/70 md:text-right">
              <Link href="/" className="hover:text-accent transition-colors">
                首页
              </Link>
              <Link href="/origin" className="hover:text-accent transition-colors">
                品牌缘起
              </Link>
              <Link href="/collections" className="hover:text-accent transition-colors">
                臻品系列
              </Link>
              <Link href="/craftsmanship" className="hover:text-accent transition-colors">
                匠心工艺
              </Link>
              <Link href="/science" className="hover:text-accent transition-colors">
                科学与养生
              </Link>
              <Link href="/photography" className="hover:text-accent transition-colors">
                善缘光影
              </Link>
              <Link href="/contact" className="hover:text-accent transition-colors font-bold">
                联系与预约
              </Link>
            </nav>
          </div>
        </div>
        
        {/* 底部版权信息 */}
        <div className="mt-8 pt-6 border-t border-accent/10 text-center text-xs text-foreground/50">
          <p>© 2026 缘融轩香舍. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
}
