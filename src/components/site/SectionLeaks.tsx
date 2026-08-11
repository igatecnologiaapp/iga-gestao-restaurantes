import { Bar, Block, Card, Chapter, DataPanel, Statement, brl } from "@/components/site/primitives";
import { CmvSimulator, CmvTheoreticalVsReal } from "@/components/site/CmvBlocks";
import { ProfitDiagnosticTree } from "@/components/site/ProfitDiagnosticTree";
import { lossCategories } from "@/data/illustrative";

/* Seção 7 — Onde o lucro está escapando? */
export function SectionLeaks() {
  return (
    <Chapter
      id="diagnostico"
      number="Seção 07"
      title="Onde o lucro está escapando?"
      kicker="Diagnóstico"
      tone="alt"
    >
      <Block
        eyebrow="Resultado abaixo do esperado"
        title="Quando o resultado cai, a pergunta útil é onde investigar"
        lead="CMV? Perdas? Compras? Estoque? Preço? Despesas? Abra apenas o ramo que corresponde à sua operação."
      >
        <CmvTheoreticalVsReal />
        <ProfitDiagnosticTree />

        <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
          <DataPanel
            title="Onde as perdas podem acontecer?"
            note="Categorias conceituais de perda. O valor e a causa variam conforme a operação e a parametrização do restaurante."
          >
            <ul className="divide-y divide-border">
              {lossCategories.map((cat) => (
                <li
                  key={cat.name}
                  className="grid gap-1 border-l-2 border-l-signal-negative py-2.5 pl-3 sm:grid-cols-[minmax(0,10rem)_minmax(0,1fr)] sm:items-baseline sm:gap-3"
                >
                  <p className="text-sm font-semibold text-foreground">{cat.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {cat.items.join(" • ")}
                  </p>
                </li>
              ))}
            </ul>
          </DataPanel>

          <div className="space-y-4">
            <DataPanel
              title="Compras e estoque — mesmo insumo"
              note="Exemplo ilustrativo. A escolha do fornecedor considera rendimento, prazo e regularidade, não apenas o preço. Metas de giro e cobertura são parametrizadas pelo restaurante."
            >
              <ul className="space-y-2.5">
                {[
                  ["Fornecedor A", "R$ 28,90 / kg", 1],
                  ["Fornecedor B", "R$ 26,40 / kg", 0.91],
                  ["Fornecedor C", "R$ 24,80 / kg", 0.86],
                ].map(([name, price, ratio]) => (
                  <li key={String(name)} className="space-y-1.5">
                    <div className="flex items-baseline justify-between gap-3 text-sm">
                      <span className="text-muted-foreground">{String(name)}</span>
                      <span className="num font-semibold text-foreground">
                        {String(price)}
                      </span>
                    </div>
                    <Bar ratio={Number(ratio)} tone="brand" />
                  </li>
                ))}
              </ul>
              <div className="mt-4 grid gap-3 border-t border-border pt-4 sm:grid-cols-2">
                {[
                  ["Giro de estoque", "4,1×", "text-foreground"],
                  ["Estoque parado", brl(9800), "text-signal-warning"],
                ].map(([label, value, tone]) => (
                  <div key={label} className="rounded-md border border-border p-3.5">
                    <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                      {label}
                    </p>
                    <p className={`num mt-1.5 text-xl font-semibold ${tone}`}>{value}</p>
                  </div>
                ))}
              </div>
            </DataPanel>
            <CmvSimulator />
          </div>
        </div>

        <Statement>
          Números mostram o que aconteceu. A análise ajuda a entender por que
          aconteceu.
        </Statement>
      </Block>
    </Chapter>
  );
}
