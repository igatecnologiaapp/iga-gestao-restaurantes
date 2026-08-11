import {
  Bar,
  Block,
  Card,
  Chapter,
  DataPanel,
  TermTooltip,
  brl,
} from "@/components/site/primitives";
import { dreRows } from "@/data/illustrative";

/* Seção 9 — Do faturamento ao lucro real */
export function SectionProfit() {
  return (
    <Chapter
      id="lucro"
      number="Seção 09"
      title="Do faturamento ao lucro real"
      kicker="Resultado"
      tone="alt"
    >
      <Block
        eyebrow="DRE gerencial"
        title="A consolidação: receita, custos, despesas e resultado final"
        lead={
          <>
            A{" "}
            <TermTooltip
              term="DRE"
              definition="Demonstração do Resultado em leitura gerencial: organiza receitas, custos e despesas em cascata até chegar ao resultado do período."
            />{" "}
            gerencial reúne em uma única leitura o que foi analisado nas seções
            anteriores.
          </>
        }
        footnote="A abordagem tributária apresentada é de organização, análise, conferência e apoio à decisão. Não substitui o contador responsável pela operação nem constitui orientação fiscal."
      >
        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <DataPanel
            title="DRE gerencial — período ilustrativo"
            note="Estrutura gerencial simplificada, com valores ilustrativos coerentes entre as seções. Não substitui a demonstração contábil elaborada pela contabilidade responsável."
          >
            <table className="w-full text-sm">
              <tbody className="num">
                {dreRows.map((row) => (
                  <tr
                    key={row.label}
                    className={`border-b border-border/70 ${
                      row.strong
                        ? "font-semibold text-foreground"
                        : "text-muted-foreground"
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
          </DataPanel>

          <div className="space-y-4">
            <DataPanel
              title="Ponto de equilíbrio"
              note="Cálculo gerencial simplificado: custos fixos ÷ margem de contribuição percentual. Muda a cada alteração de custo fixo, preço, mix de produtos ou participação dos canais."
            >
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["Custos fixos", brl(55400), "text-foreground"],
                  ["Margem de contribuição", "42%", "text-foreground"],
                  ["Ponto de equilíbrio", brl(132000), "text-brand"],
                ].map(([label, value, tone]) => (
                  <div key={label} className="rounded-md border border-border p-4">
                    <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                      {label}
                    </p>
                    <p className={`num mt-2 text-xl font-semibold ${tone}`}>{value}</p>
                  </div>
                ))}
              </div>
            </DataPanel>

            <DataPanel
              title="Capital de giro — necessidade de caixa"
              note="Cálculo gerencial simplificado e ilustrativo. A necessidade real depende dos prazos praticados com fornecedores e do ciclo de recebimento de cada canal."
            >
              <ul className="space-y-3">
                {[
                  ["Estoque médio", 24500, 0.55],
                  ["Prazo de pagamento a fornecedores", -12000, 0.27],
                  ["Despesas do ciclo", 18000, 0.4],
                  ["Necessidade de capital de giro", 30500, 0.68],
                ].map(([label, value, ratio], i, arr) => (
                  <li key={String(label)} className="space-y-1.5">
                    <div className="flex items-baseline justify-between gap-3 text-sm">
                      <span className="text-muted-foreground">{String(label)}</span>
                      <span className="num font-semibold text-foreground">
                        {brl(Number(value))}
                      </span>
                    </div>
                    <Bar
                      ratio={Number(ratio)}
                      tone={i === arr.length - 1 ? "warning" : "brand"}
                    />
                  </li>
                ))}
              </ul>
            </DataPanel>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Gestão tributária", "Organização, conferência e acompanhamento do peso do tributo sobre a receita."],
                ["Apoio à decisão", "Leitura conjunta com a contabilidade responsável pela operação."],
              ].map(([t, d]) => (
                <Card key={t}>
                  <p className="text-sm font-semibold text-foreground">{t}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{d}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Block>
    </Chapter>
  );
}
