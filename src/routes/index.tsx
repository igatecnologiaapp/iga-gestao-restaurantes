import { createFileRoute } from "@tanstack/react-router";
import { ScrollRail, SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Hero } from "@/components/site/Hero";
import { SectionOperation, SectionSystem } from "@/components/site/SectionSystem";
import { SectionCostToResult } from "@/components/site/SectionCostToResult";
import { SectionAnalytics, SectionIndicators } from "@/components/site/SectionAnalytics";
import { SectionLeaks } from "@/components/site/SectionLeaks";
import { SectionMenuChannels } from "@/components/site/SectionMenuChannels";
import { SectionProfit } from "@/components/site/SectionProfit";
import { SectionIntelligence } from "@/components/site/SectionIntelligence";
import { SectionIntegration } from "@/components/site/SectionIntegration";
import { SectionIga } from "@/components/site/SectionIga";

const title =
  "IGA Tecnologia | Gestão completa para restaurantes — da compra ao lucro real";
const description =
  "Sistema de gestão para restaurantes e análise de dados na mesma apresentação: compras, estoque, ficha técnica, CMV, margens, DRE gerencial e indicadores para decidir com informação.";

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
        <SectionSystem />
        <SectionOperation />
        <SectionCostToResult />
        <SectionAnalytics />
        <SectionIndicators />
        <SectionLeaks />
        <SectionMenuChannels />
        <SectionProfit />
        <SectionIntelligence />
        <SectionIntegration />
        <SectionIga />
      </main>
      <SiteFooter />
    </div>
  );
}
