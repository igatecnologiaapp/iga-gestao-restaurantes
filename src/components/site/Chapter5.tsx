import {
  Bar,
  Block,
  Card,
  Chapter,
  DataPanel,
  Statement,
  TermTooltip,
  brl,
} from "@/components/site/primitives";
import { dreRows, kpis } from "@/data/illustrative";

const relations = [
  {
    hypothesis: "Custo de compra aumentou?",
    leaves: ["Fornecedor", "Preço do ingrediente", "Condição comercial", "Frequência de compra"],
  },
  {
    hypothesis: "Consumo aumentou?",
    leaves: ["Porcionamento", "Desperdício", "Erro de receita", "Falta de padronização"],
  },
  {
    hypothesis: "Preço de venda não acompanhou o custo?",
    leaves: ["Preço desatualizado", "Promoção", "Desconto", "Erro de precificação"],
  },
];

const alerts = [
  { level: "Atenção", text: "Percentual de CMV acima da meta definida", tone: "border-l-signal-negative" },
  { level: "Atenção", text: "Margem de contribuição em queda por dois períodos", tone: "border-l-signal-negative" },
  { level: "Observar", text: "Estoque parado acima do parâmetro informado", tone: "border-l-signal-warning" },
  { level: "Observar", text: "Itens em ruptura recorrente no cardápio", tone: "border-l-signal-warning" },
  { level: "Positivo", text: "Ticket Médio em evolução com margem estável", tone: "border-l-signal-positive" },
];

export function Chapter5() {
  return (
    <Chapter id="indicadores" number="Capítulo 5" title="DRE e indicadores" tone="alt">
      {/* 21 */}
      <Block
        eyebrow="Seção 21 · DRE gerencial"
        title="A consolidação: do faturamento ao resultado final"
        lead={
          <>
            A{" "}
            <TermTooltip
              term="DRE"
              definition="Demonstração do Resultado do Exercício em leitura gerencial: organiza receitas, custos e despesas em cascata até chegar ao resultado do período."
            />{" "}
            gerencial reúne, em uma única leitura, tudo o que foi analisado
            separadamente nos capítulos anteriores.
          </>
        }
      >
        <DataPanel
          title="DRE gerencial — período ilustrativo"
          note="Estrutura gerencial simplificada, com valores ilustrativos coerentes entre as seções. Não substitui a demonstração contábil elaborada pela contabilidade responsável."
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[420px] text-sm">
              <tbody className="num">
                {dreRows.map((row) => (
                  <tr
                    key={row.label}
                    className={`border-b border-border/70 ${
                      row.strong ? "font-semibold text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    <td className={`py-2 ${row.level === 1 ? "pl-4" : ""}`}>
                      {row.label}
                    </td>
                    <td className="py-2 text-right">{brl(row.value)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DataPanel>
      </Block>

      {/* 22 */}
      <Block
        eyebrow="Seção 22 · Indicadores"
        title="Um painel existe para orientar decisão, não para exibir números"
        lead="Cada indicador responde a uma pergunta específica. Lidos em conjunto, eles indicam onde investigar."
      >
        <DataPanel
          title="Painel demonstrativo de indicadores"
          note="Painel demonstrativo e estático, com dados ilustrativos. Variações apresentadas apenas para exemplificar a leitura comparativa entre períodos."
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
              </li>
            ))}
          </ul>
        </DataPanel>
      </Block>

      {/* 23 */}
      <Block
        eyebrow="Seção 23 · Comparação entre períodos"
        title="A evolução só faz sentido quando comparada"
        lead="Dia, semana, mês e ano contam histórias diferentes sobre a mesma operação."
      >
        <DataPanel
          title="Faturamento × margem por período"
          note="Comparação ilustrativa. A leitura correta exige períodos equivalentes e atenção à sazonalidade da operação."
        >
          <ul className="space-y-4">
            {[
              ["Hoje", 0.72, 0.44],
              ["Semana", 0.81, 0.42],
              ["Mês", 0.88, 0.4],
              ["Ano", 0.94, 0.38],
            ].map(([label, rev, margin]) => (
              <li key={String(label)} className="space-y-2">
                <p className="text-sm font-medium text-foreground">{String(label)}</p>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Faturamento</p>
                  <Bar ratio={Number(rev)} tone="brand" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Margem</p>
                  <Bar ratio={Number(margin)} tone="negative" />
                </div>
              </li>
            ))}
          </ul>
        </DataPanel>
        <Statement>
          Seu faturamento aumentou, porém sua margem caiu. O próximo passo é
          descobrir por quê.
        </Statement>
      </Block>

      {/* 24 */}
      <Block
        eyebrow="Seção 24 · Relação entre indicadores"
        title="Percentual de CMV aumentou → margem caiu"
        lead="Indicadores não são leituras isoladas. Um movimento explica o outro, e a investigação segue um caminho."
      >
        <div className="grid gap-3 lg:grid-cols-3">
          {relations.map((r) => (
            <Card key={r.hypothesis} className="h-full border-l-2 border-l-brand">
              <p className="text-base font-semibold text-foreground">
                {r.hypothesis}
              </p>
              <ul className="mt-2 space-y-1">
                {r.leaves.map((l) => (
                  <li key={l} className="text-sm text-muted-foreground">
                    {l}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <Statement>
          Números mostram o que aconteceu. A análise ajuda a entender por que
          aconteceu.
        </Statement>
      </Block>

      {/* 25 */}
      <Block
        eyebrow="Seção 25 · Alertas"
        title="Gestão por exceção: olhar primeiro o que saiu do parâmetro"
        lead="O alerta não substitui a análise. Ele indica onde a atenção deve começar."
        footnote="Toda meta é parametrizada pelo próprio restaurante. Sem definição prévia de meta, o alerta não é aplicável — não existe padrão de mercado adotado por esta apresentação."
      >
        <ul className="grid gap-3 sm:grid-cols-2">
          {alerts.map((a) => (
            <li key={a.text}>
              <Card className={`h-full border-l-2 ${a.tone}`}>
                <p className="text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">
                  {a.level}
                </p>
                <p className="mt-1 text-sm text-foreground">{a.text}</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Meta parametrizada pelo restaurante · não aplicável sem
                  definição prévia
                </p>
              </Card>
            </li>
          ))}
        </ul>
      </Block>
    </Chapter>
  );
}
