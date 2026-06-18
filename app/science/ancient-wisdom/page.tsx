import { Metadata } from "next";
import ArticleContent from "./article-content";

export const metadata: Metadata = {
  title: "香灸 · 传承千年的中医智慧 - 缘融轩",
  description:
    "从《山海经》到《本草纲目》，探寻古籍中的香灸印记，结合现代科学研究，验证纯中药香灸的安全与疗效。",
};

export default function AncientWisdomPage() {
  return <ArticleContent />;
}
