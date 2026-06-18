import { Metadata } from "next";
import ArticleContent from "./article-content";

export const metadata: Metadata = {
  title: "拒绝助燃剂 · 低温慢燃才养生 - 缘融轩",
  description:
    "燃烧温度直接决定是否致癌。缘融轩坚守0添加底线，200~300℃低温慢燃，从根源规避健康风险。",
};

export default function NoAccelerantPage() {
  return <ArticleContent />;
}
