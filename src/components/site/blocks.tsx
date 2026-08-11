import type { ReactNode } from "react";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { Card } from "@/components/site/primitives";
import { cn } from "@/lib/utils";

/** Selo de disponibilidade — evita apresentar recurso como concluído. */
export function ScopeNote({ children }: { children?: ReactNode }) {
  return (
    <p className="text-xs leading-relaxed text-muted-foreground">
      {children ?? (
        <>
          Recursos apresentados de forma conceitual e disponíveis conforme
          configuração, parametrização e módulos contratados.
        </>
      )}
    </p>
  );
}

/** Fluxo em etapas, com setas — vertical no mobile, horizontal no notebook. */
export function FlowChain({
  steps,
  emphasisLast = true,
  numbered = true,
  className,
}: {
  steps: string[];
  emphasisLast?: boolean;
  numbered?: boolean;
  className?: string;
}) {
  return (
    <ol
      className={cn(
        "flex flex-col items-stretch gap-2 sm:flex-row sm:flex-wrap sm:items-center",
        className,
      )}
    >
      {steps.map((step, i) => {
        const last = i === steps.length - 1;
        return (
          <li key={step} className="flex items-center gap-2">
            <span
              className={cn(
                "num inline-flex items-center gap-2 rounded-sm border px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em]",
                last && emphasisLast
                  ? "border-brand bg-brand-soft text-brand-strong"
                  : "border-border bg-card text-foreground",
              )}
            >
              {numbered ? (
                <span className="text-[0.65rem] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              ) : null}
              {step}
            </span>
            {!last ? (
              <ArrowRight
                aria-hidden
                className="size-4 shrink-0 rotate-90 text-brand sm:rotate-0"
              />
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}

/** Card de recurso: lista de itens + benefício gerencial opcional. */
export function FeatureCard({
  icon: Icon,
  title,
  items,
  benefit,
}: {
  icon: typeof ShoppingCart;
  title: string;
  items: string[];
  benefit?: string;
}) {
  return (
    <Card className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-sm bg-brand-soft text-brand-strong">
          <Icon aria-hidden className="size-4.5" />
        </span>
        <h4 className="text-base font-semibold text-foreground">{title}</h4>
      </div>
      <ul className="grid gap-1.5">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-2 text-sm leading-snug text-muted-foreground"
          >
            <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-brand" />
            {item}
          </li>
        ))}
      </ul>
      {benefit ? (
        <p className="mt-auto border-l-2 border-brand bg-brand-soft px-3 py-2 text-sm font-medium text-brand-strong">
          {benefit}
        </p>
      ) : null}
    </Card>
  );
}

/** Mini demonstração de tela (mock estático, sem dados reais). */
export function ScreenMock({
  title,
  rows,
  total,
}: {
  title: string;
  rows: { label: string; value: string }[];
  total?: { label: string; value: string };
}) {
  return (
    <div className="overflow-hidden rounded-md border border-border bg-card">
      <div className="flex items-center gap-2 border-b border-border bg-surface-alt px-4 py-2.5">
        <span aria-hidden className="size-2 rounded-full bg-brand" />
        <p className="truncate text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          {title}
        </p>
      </div>
      <ul className="divide-y divide-border">
        {rows.map((r) => (
          <li
            key={r.label}
            className="grid grid-cols-[minmax(0,1fr)_auto] gap-3 px-4 py-2.5 text-sm"
          >
            <span className="min-w-0 truncate text-muted-foreground">{r.label}</span>
            <span className="num shrink-0 font-medium text-foreground">{r.value}</span>
          </li>
        ))}
      </ul>
      {total ? (
        <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-3 border-t border-border bg-brand-soft px-4 py-3 text-sm">
          <span className="min-w-0 truncate font-semibold text-brand-strong">
            {total.label}
          </span>
          <span className="num shrink-0 font-semibold text-brand-strong">
            {total.value}
          </span>
        </div>
      ) : null}
    </div>
  );
}

/** Linha de etiquetas (módulos, indicadores, canais). */
export function PillRow({
  items,
  tone = "neutral",
}: {
  items: string[];
  tone?: "neutral" | "brand";
}) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((i) => (
        <li
          key={i}
          className={cn(
            "rounded-sm border px-2.5 py-1.5 text-xs font-semibold uppercase tracking-[0.08em]",
            tone === "brand"
              ? "border-brand bg-brand-soft text-brand-strong"
              : "border-border bg-surface-alt text-foreground",
          )}
        >
          {i}
        </li>
      ))}
    </ul>
  );
}
