import { Metadata } from "next";
import ArticleContent from "./article-content";

export const metadata: Metadata = {
  title: "中医古籍中的烟熏疗法与现代医学研究 - 缘融轩",
  description: "从《五十二病方》到《本草纲目》，探寻中医烟熏疗法的历史渊源与现代医学研究支持。",
};

export default function SmokeTherapyPage() {
  return <ArticleContent />;
}
