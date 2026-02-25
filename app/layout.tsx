import type { Metadata } from "next";
import { Ma_Shan_Zheng, Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

const headingFont = Ma_Shan_Zheng({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400"],
});

const bodyFont = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "缘融轩 Yuan Rong Xuan",
  description:
    "缘融轩 | 以中医、佛学香道与匠心工艺交融，打造静心、尊贵的养生生活方式。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} font-body bg-paper text-ink antialiased`}
      >
        <SiteHeader />
        <main className="mx-auto min-h-screen max-w-6xl px-5 pb-16 pt-6 md:px-6 md:pt-8 lg:px-8">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
