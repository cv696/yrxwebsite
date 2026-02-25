"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "首页", href: "/" },
  { label: "品牌缘起", href: "/origin" },
  { label: "臻品系列", href: "/collections" },
  { label: "匠心工艺", href: "/craftsmanship" },
  { label: "科学与养生", href: "/science" },
  { label: "善缘光影", href: "/photography" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-accent/15 bg-primary/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-6 md:py-4 lg:px-8">
          {/* Stamp-style logo */}
          <Link
            href="/"
            className="flex items-center gap-3 md:gap-4"
            onClick={close}
          >
            <div className="flex items-center gap-3 md:gap-4">
              <div className="relative h-8 w-auto md:h-9 lg:h-10">
                <Image
                  src="/缘融轩Logo.png"
                  alt="缘融轩 Logo"
                  width={160}
                  height={40}
                  className="h-full w-auto"
                  priority
                  loading="eager"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-heading text-xs tracking-[0.35em] text-accent md:text-sm lg:text-base">
                  缘融轩香舍
                </span>
                <div className="mt-0.5">
                  <Image
                    src="/标语.png"
                    alt="标语"
                    width={120}
                    height={20}
                    className="h-auto w-auto"
                  />
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-8 text-xs font-body text-accent md:flex md:text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative pb-1 transition-colors hover:text-secondary"
              >
                <span>{item.label}</span>
                <span className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-px origin-center scale-x-0 bg-secondary/80 transition-transform duration-200 ease-out group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 bg-primary/80 text-accent/80 shadow-sm transition-colors hover:bg-secondary/20 active:bg-secondary/30 md:hidden"
            aria-label={open ? "关闭导航" : "打开导航"}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? (
              <X className="h-5 w-5" strokeWidth={1.5} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile zen-style overlay */}
      {open && (
        <div className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm md:hidden">
          <div className="absolute inset-x-0 top-0 rounded-b-3xl bg-primary/98 px-6 pb-10 pt-20 shadow-xl">
            <nav className="space-y-4 text-base font-body text-accent">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className="flex items-center justify-between rounded-lg px-2 py-3 text-[15px] tracking-[0.2em] transition-colors hover:text-secondary active:bg-secondary/10"
                >
                  <span>{item.label}</span>
                  <span className="h-px w-10 bg-secondary/60" />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
