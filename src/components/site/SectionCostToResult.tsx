import {
  Bar,
  Block,
  Chapter,
  DataPanel,
  Statement,
  TermTooltip,
  brl,
} from "@/components/site/primitives";
import { FlowChain } from "@/components/site/blocks";
import { moneyFlow, scenarios } from "@/data/illustrative";

const costTrace = [
  "Compra do insumo",
  "Custo no estoque",
  "Ficha técnica",
  "Consumo / produção",
  "Custo do prato",
  "Venda",
  "Tributos / taxas",
  "Margem",
  "Resultado",
];

/* Seção 4 — Do custo da compra ao resultado da venda */
export function SectionCostToResult() {
  return (
    <Chapter
      id="custos"
      number="Seção 04"
      title="Do custo da compra ao resultado da venda"
      kicker="Rastreamento"
    >
      <Block
        eyebrow="Faturamento não é lucro"
        title="O mesmo insumo comprado é acompanhado até virar resultado"
        lead="Faturamento é o total que entra. Lucro é o que resta depois de mercadoria, pessoas, estrutura, tributos, taxas e perdas."
        footnote="As perdas representadas no fluxo financeiro correspondem ao valor identificado nesse fluxo. Quando parte delas já estiver explicada pelo desvio entre CMV teórico e real, as leituras se complementam — o mesmo valor não é contabilizado duas vezes."
      >
        <div className="rounded-md border border-brand/40 bg-brand-soft/40 p-5 sm:p-6">
          <FlowChain steps={costTrace} />
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <DataPanel
            title="Faturamento → Resultado"
            note="Cascata gerencial simplificada, com valores ilustrativos e coerentes entre si. A composição real varia conforme o porte, o formato e o regime tributário da operação."
          >
            <ul className="space-y-2.5">
              {moneyFlow.map((step) => (
                <li key={step.label} className="space-y-1.5">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3 text-sm">
                    <span className="min-w-0 truncate text-muted-foreground">
                      {step.label}
                    </span>
                    <span className="num shrink-0 font-semibold text-foreground">
                      {step.subtracted ? `− ${brl(step.subtracted)}` : brl(step.remaining)}
                    </span>
                  </div>
                  <Bar
                    ratio={step.remaining / moneyFlow[0]!.remaining}
                    tone={step.label === "Resultado" ? "positive" : "brand"}
                  />
                </li>
              ))}
            </ul>
          </DataPanel>

          <div className="space-y-4">
            <DataPanel
              title="Venda × margem × resultado"
              note="Comparação gerencial simplificada. A margem de contribuição gerada não equivale a lucro líquido: o resultado final depende das demais despesas e das condições da operação."
            >
              <p className="mb-4 max-w-md text-sm text-muted-foreground">
                Dois cenários do mesmo restaurante. A única diferença está na{" "}
                <TermTooltip
                  term="margem"
                  definition="Percentual do faturamento que permanece após os custos diretamente ligados à venda. Quando a margem cai, cada real vendido contribui menos para pagar a estrutura."
                />{" "}
                praticada.
              </p>
              <ul className="space-y-4">
                {scenarios.map((s) => (
                  <li key={s.name} className="space-y-2 border-t border-border pt-4 first:border-t-0 first:pt-0">
                    <p className="text-sm font-semibold text-foreground">{s.name}</p>
                    <div className="flex items-baseline justify-between gap-3 text-sm">
                      <span className="text-muted-foreground">Faturamento</span>
                      <span className="num font-semibold text-foreground">
                        {brl(s.revenue)}
                      </span>
                    </div>
                    <Bar ratio={s.revenue / 120000} tone="brand" />
                    <div className="flex items-baseline justify-between gap-3 text-sm">
                      <span className="text-muted-foreground">Margem</span>
                      <span className="num font-semibold text-foreground">
                        {s.margin}%
                      </span>
                    </div>
                    <Bar ratio={s.margin / 20} tone="neutral" />
                    <div className="flex items-baseline justify-between gap-3 text-sm">
                      <span className="text-muted-foreground">
                        Margem de contribuição gerada
                      </span>
                      <span
                        className={`num font-semibold ${
                          s.highlight === "negative"
                            ? "text-signal-negative"
                            : "text-signal-positive"
                        }`}
                      >
                        {brl(s.contribution)}
                      </span>
                    </div>
                    <Bar
                      ratio={s.contribution / 20000}
                      tone={s.highlight === "negative" ? "negative" : "positive"}
                    />
                  </li>
                ))}
              </ul>
            </DataPanel>
            <Statement>
              O restaurante vendeu mais, mas gerou menos margem de contribuição.
            </Statement>
          </div>
        </div>
      </Block>
    </Chapter>
  );
}
