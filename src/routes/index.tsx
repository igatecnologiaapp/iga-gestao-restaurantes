import { createFileRoute } from "@tanstack/react-router";
import { ScrollRail, SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Chapter1, Hero } from "@/components/site/Chapter1";
import { SystemOverview } from "@/components/site/SystemOverview";
import { Chapter2 } from "@/components/site/Chapter2";
import { Chapter3 } from "@/components/site/Chapter3";
import { Chapter4 } from "@/components/site/Chapter4";
import { Chapter5 } from "@/components/site/Chapter5";
import { Chapter6 } from "@/components/site/Chapter6";
import { Chapter7 } from "@/components/site/Chapter7";
import { Chapter8 } from "@/components/site/Chapter8";

const title =
  "IGA Tecnologia | Gestão inteligente e análise de dados para restaurantes";
const description =
  "Faturamento não é lucro. Percorra CMV, perdas, margem de contribuição, ponto de equilíbrio e DRE gerencial para entender onde está o resultado do seu restaurante.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <ScrollRail />
      <main>
        <Hero />
        <Chapter1 />
        <Chapter2 />
        <Chapter3 />
        <Chapter4 />
        <Chapter5 />
        <Chapter6 />
        <Chapter7 />
        <Chapter8 />
      </main>
      <SiteFooter />
    </div>
  );
}
