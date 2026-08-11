import { Bar, Block, Card, Chapter, DataPanel, Statement } from "@/components/site/primitives";
import { FlowChain } from "@/components/site/blocks";

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
  { level: "Atenção", text: "CMV acima da meta definida", tone: "border-l-signal-negative" },
  { level: "Atenção", text: "Ingrediente aumentou de preço", tone: "border-l-signal-negative" },
  { level: "Atenção", text: "Margem do prato caiu", tone: "border-l-signal-negative" },
  { level: "Observar", text: "Perdas aumentaram no período", tone: "border-l-signal-warning" },
  { level: "Observar", text: "Estoque acima do giro esperado", tone: "border-l-signal-warning" },
];

/* Seção 10 — Inteligência gerencial */
export function SectionIntelligence() {
  return (
    <Chapter
      id="inteligencia"
      number="Seção 10"
      title="Inteligência gerencial"
      kicker="Análise"
    >
      <Block
        eyebrow="Comparação, relação e alerta"
        title="Faturamento subiu, CMV subiu, margem caiu. O que aconteceu?"
        lead="A comparação entre períodos mostra o movimento. A relação entre indicadores indica a causa provável. O alerta aponta onde a atenção deve começar."
        footnote="Toda meta é parametrizada pelo próprio restaurante. Sem definição prévia de meta, o alerta não é aplicável — não existe padrão de mercado adotado por esta apresentação."
      >
        <div className="rounded-md border border-brand/40 bg-brand-soft/40 p-5 sm:p-6">
          <FlowChain
            numbered={false}
            steps={["Faturamento ↑", "CMV ↑", "Margem ↓", "O que aconteceu?", "Análise das causas"]}
          />
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
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
                  <p className="text-xs text-muted-foreground">Faturamento</p>
                  <Bar ratio={Number(rev)} tone="brand" />
                  <p className="text-xs text-muted-foreground">Margem</p>
                  <Bar ratio={Number(margin)} tone="negative" />
                </li>
              ))}
            </ul>
          </DataPanel>

          <div className="space-y-4">
            <div className="grid gap-3">
              {relations.map((r) => (
                <Card key={r.hypothesis} className="border-l-2 border-l-brand">
                  <p className="text-sm font-semibold text-foreground">
                    {r.hypothesis}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {r.leaves.join(" · ")}
                  </p>
                </Card>
              ))}
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {alerts.map((a) => (
                <li key={a.text}>
                  <Card className={`h-full border-l-2 ${a.tone}`}>
                    <p className="text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">
                      {a.level}
                    </p>
                    <p className="mt-1 text-sm text-foreground">{a.text}</p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Meta parametrizada pelo restaurante
                    </p>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Statement>
          O gestor não precisa procurar todos os problemas. A gestão por exceção
          mostra onde sua atenção é necessária.
        </Statement>
      </Block>
    </Chapter>
  );
}
