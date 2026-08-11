import {
  Block,
  Chapter,
  DataPanel,
  TermTooltip,
} from "@/components/site/primitives";
import { FlowChain } from "@/components/site/blocks";
import { kpis } from "@/data/illustrative";

const glossary: Record<string, string> = {
  "Percentual de CMV":
    "Custo da Mercadoria Vendida como percentual do faturamento: quanto da receita é consumido pela própria mercadoria vendida no período.",
  "Ticket Médio":
    "Ticket Médio = Faturamento ÷ número de pedidos/vendas. Indica o valor médio de cada pedido, não a margem gerada por ele.",
  "Margem de contribuição":
    "Quanto sobra da venda depois dos custos diretamente ligados a ela. É esse valor que paga os custos fixos e forma o resultado.",
  "Ponto de equilíbrio":
    "Faturamento necessário para cobrir todos os custos e despesas, sem lucro e sem prejuízo: custos fixos ÷ margem de contribuição percentual.",
  Faturamento: "Total que entra pela venda no período, antes de qualquer custo.",
  Resultado:
    "O que permanece depois de mercadoria, perdas, taxas, pessoas, estrutura e despesas do período.",
  "Giro de estoque":
    "Quantas vezes o estoque foi renovado no período. Giro baixo indica capital parado em mercadoria.",
  "Perdas identificadas":
    "Valor das perdas registradas na operação: estoque, produção, comercial, financeira e tributária.",
};

/* Seção 5 — Faixa de transição: da operação à inteligência */
export function SectionAnalytics() {
  return (
    <section id="analise" className="scroll-mt-24 border-b border-border bg-surface-alt py-8">
      <div className="mx-auto grid w-full max-w-6xl gap-4 px-5 sm:px-8 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-center">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand">
          Da operação à inteligência
        </p>
        <FlowChain
          numbered={false}
          steps={["Operação", "Dados", "Indicadores", "Análise", "Alertas", "Decisão"]}
        />
        <p className="text-sm text-muted-foreground lg:col-span-2">
          Os registros da operação alimentam a análise gerencial e ajudam a
          transformar informação em decisão.
        </p>
      </div>
    </section>
  );
}

/* Seção 6 — Indicadores que mostram a saúde do restaurante */
export function SectionIndicators() {
  return (
    <Chapter
      id="indicadores"
      number="Seção 06"
      title="Indicadores que mostram a saúde do restaurante"
      kicker="Painel"
    >
      <Block
        eyebrow="Painel único"
        title="Um painel existe para orientar decisão, não para exibir números"
        lead="Cada indicador responde a uma pergunta. Lidos em conjunto, indicam onde investigar."
      >
        <DataPanel
          title="Painel demonstrativo de indicadores"
          note="Painel demonstrativo e estático, com dados ilustrativos. Variações apresentadas apenas para exemplificar a leitura comparativa entre períodos. Metas são parametrizadas pelo próprio restaurante."
        >
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {kpis.map((k) => (
              <li key={k.label} className="rounded-md border border-border p-4">
                <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  {k.label}
                </p>
                <p className="num mt-2 text-2xl font-semibold text-foreground">
                  {k.value}
                </p>
                <p
                  className={`num mt-1 text-xs font-semibold ${
                    k.tone === "positive"
                      ? "text-signal-positive"
                      : k.tone === "negative"
                        ? "text-signal-negative"
                        : "text-signal-warning"
                  }`}
                >
                  {k.variation}
                </p>
                {glossary[k.label] ? (
                  <p className="mt-2 text-xs">
                    <TermTooltip
                      term="O que significa?"
                      definition={glossary[k.label]!}
                    />
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </DataPanel>
      </Block>
    </Chapter>
  );
}
