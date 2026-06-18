import { Metadata } from "next";
import ArticleContent from "./article-content";

export const metadata: Metadata = {
  title: "中医烟熏吸入疗法的古代源流、文献记载与临床应用考证 - 缘融轩",
  description: "系统性地梳理与考证中医烟熏吸入疗法在古代文献中的记载、源流、操作方法及临床应用。",
};

export default function Page() {
  return <ArticleContent />;
}
