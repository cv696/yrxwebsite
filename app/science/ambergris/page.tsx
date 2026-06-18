import { Metadata } from "next";
import ArticleContent from "./article-content";

export const metadata: Metadata = {
  title: "龙涎香 · 海底千年陈化定香剂 - 缘融轩",
  description: "探寻龙涎香的自然奥秘——从鲸体取出到海水陈化，为何白色龙涎香价值昂贵，以及它在香氛中的不可替代作用。",
};

export default function Page() {
  return <ArticleContent />;
}
