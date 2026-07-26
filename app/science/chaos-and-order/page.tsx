import { Metadata } from "next";
import ArticleContent from "./article-content";

export const metadata: Metadata = {
  title: "青烟里的乱与序 - 缘融轩",
  description:
    "疫情调元香狂潮下，李国荣医生的孤行与坚守——从市场乱象到功效型香方的科学化之路。",
};

export default function ChaosAndOrderPage() {
  return <ArticleContent />;
}
