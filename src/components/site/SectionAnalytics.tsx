import {
  Block,
  Chapter,
  DataPanel,
  Statement,
  TermTooltip,
} from "@/components/site/primitives";
import { FlowChain, ScopeNote } from "@/components/site/blocks";
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

/* Seção 5 — Gestão inteligente e análise de dados (a virada) */
export function SectionAnalytics() {
  return (
    <Chapter
      id="analise"
      number="Seção 05"
      title="Gestão inteligente e análise de dados"
      kicker="A virada"
      tone="alt"
    >
      <Block
        eyebrow="Da operação à decisão"
        title="Controlar a operação é o primeiro passo. O próximo é entender o que os dados estão dizendo."
        lead="Os registros feitos na operação alimentam a visão gerencial: não é preciso recomeçar em planilhas paralelas para acompanhar o resultado."
      >
        <div className="rounded-md border border-brand/40 bg-brand-soft/40 p-5 sm:p-6">
          <FlowChain
            numbered={false}
            steps={["Operação", "Dados", "Indicadores", "Análise", "Alertas", "Decisão"]}
          />
        </div>
        <Statement>
          O sistema registra o que acontece. A análise mostra o que isso
          significa. A gestão transforma a informação em decisão.
        </Statement>
        <ScopeNote />
      </Block>
    </Chapter>
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
