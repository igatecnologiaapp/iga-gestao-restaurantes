import { useState } from "react";
import { Bar, DataPanel, IllustrativeBadge, brl } from "@/components/site/primitives";

/** Simulador de percentual de CMV (seção 8). Estado próprio, sem backend. */
export function CmvSimulator() {
  const [revenue, setRevenue] = useState(150000);
  const [current, setCurrent] = useState(38);
  const [target, setTarget] = useState(34);

  const currentCost = (revenue * current) / 100;
  const targetCost = (revenue * target) / 100;
  const difference = currentCost - targetCost;

  return (
    <DataPanel
      title="Simulador de percentual de CMV"
      note="Impacto potencial, não lucro garantido: o resultado final está sujeito às demais despesas e às condições da operação. Os valores servem apenas para demonstrar a relação entre percentual de CMV e custo de mercadoria."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          <label className="block space-y-2">
            <span className="text-sm font-medium text-foreground">
              Faturamento mensal
            </span>
            <input
              type="range"
              min={50000}
              max={400000}
              step={5000}
              value={revenue}
              onChange={(e) => setRevenue(Number(e.target.value))}
              className="w-full accent-[var(--brand)]"
            />
            <span className="num block text-lg font-semibold text-foreground">
              {brl(revenue)}
            </span>
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-medium text-foreground">
              Percentual de CMV atual
            </span>
            <input
              type="range"
              min={20}
              max={55}
              step={1}
              value={current}
              onChange={(e) => setCurrent(Number(e.target.value))}
              className="w-full accent-[var(--brand)]"
            />
            <span className="num block text-lg font-semibold text-signal-negative">
              {current}%
            </span>
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-medium text-foreground">
              Percentual de CMV trabalhado
            </span>
            <input
              type="range"
              min={20}
              max={55}
              step={1}
              value={target}
              onChange={(e) => setTarget(Number(e.target.value))}
              className="w-full accent-[var(--brand)]"
            />
            <span className="num block text-lg font-semibold text-signal-positive">
              {target}%
            </span>
          </label>
        </div>

        <div className="space-y-4">
          <div className="space-y-1.5">
            <div className="flex items-baseline justify-between gap-3 text-sm">
              <span className="text-muted-foreground">
                Custo de mercadoria — {current}%
              </span>
              <span className="num font-semibold text-foreground">
                {brl(currentCost)}
              </span>
            </div>
            <Bar ratio={current / 55} tone="negative" />
          </div>

          <div className="space-y-1.5">
            <div className="flex items-baseline justify-between gap-3 text-sm">
              <span className="text-muted-foreground">
                Custo de mercadoria — {target}%
              </span>
              <span className="num font-semibold text-foreground">
                {brl(targetCost)}
              </span>
            </div>
            <Bar ratio={target / 55} tone="positive" />
          </div>

          <div className="rounded-md border border-border bg-brand-soft p-4">
            <p className="text-xs uppercase tracking-[0.12em] text-brand-strong">
              Diferença potencial no mês
            </p>
            <p className="num mt-1 text-3xl font-semibold text-brand-strong">
              {brl(Math.abs(difference))}
            </p>
            <p className="mt-1 text-xs text-brand-strong/80">
              {difference >= 0
                ? "Valor que deixaria de ser consumido pela mercadoria."
                : "O percentual trabalhado está acima do atual neste ajuste."}
            </p>
          </div>
        </div>
      </div>
    </DataPanel>
  );
}

/** CMV teórico × CMV real × desvio (seção 8). */
export function CmvTheoreticalVsReal() {
  const revenue = 150000;
  const theoretical = 34;
  const real = 38;
  const deviation = real - theoretical;

  return (
    <div className="rounded-md border border-border bg-card p-5 sm:p-6">
      <div className="mb-5 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
        <p className="min-w-0 truncate text-sm font-semibold uppercase tracking-[0.1em] text-muted-foreground">
          CMV teórico × CMV real × desvio
        </p>
        <IllustrativeBadge className="shrink-0" />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-md border border-border p-4">
          <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
            CMV teórico
          </p>
          <p className="num mt-2 text-3xl font-semibold text-foreground">
            {theoretical}%
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Custo esperado, calculado pela ficha técnica.
          </p>
          <p className="num mt-3 text-sm text-muted-foreground">
            {brl((revenue * theoretical) / 100)}
          </p>
        </div>

        <div className="rounded-md border border-border p-4">
          <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
            CMV real
          </p>
          <p className="num mt-2 text-3xl font-semibold text-foreground">
            {real}%
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Resultado observado na operação do período.
          </p>
          <p className="num mt-3 text-sm text-muted-foreground">
            {brl((revenue * real) / 100)}
          </p>
        </div>

        <div className="rounded-md border border-signal-negative/40 bg-signal-negative-soft p-4">
          <p className="text-xs uppercase tracking-[0.12em] text-signal-negative">
            Desvio
          </p>
          <p className="num mt-2 text-3xl font-semibold text-signal-negative">
            {deviation} p.p.
          </p>
          <p className="mt-1 text-xs text-signal-negative/90">
            Diferença a ser explicada e investigada.
          </p>
          <p className="num mt-3 text-sm text-signal-negative">
            {brl((revenue * deviation) / 100)}
          </p>
        </div>
      </div>

      <p className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
        O desvio pode ser explicado por perdas, desperdício, porcionamento,
        divergência de estoque ou diferença de preço de compra. Quando essas
        perdas já estão mensuradas dentro do desvio, elas não são contabilizadas
        novamente como item separado no fluxo financeiro do mapa do dinheiro.
      </p>
    </div>
  );
}
