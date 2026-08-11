import { useEffect, useRef, useState, type ReactNode } from "react";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Revelação suave ao entrar na viewport                               */
/* ------------------------------------------------------------------ */

export function Reveal({
  children,
  className,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "li";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "-8% 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = As as "div";
  return (
    <Comp
      ref={ref as never}
      className={cn("reveal", visible && "reveal-in", className)}
    >
      {children}
    </Comp>
  );
}

/* ------------------------------------------------------------------ */
/* Estrutura de capítulo e de seção                                    */
/* ------------------------------------------------------------------ */

export function Chapter({
  id,
  number,
  title,
  kicker = "Seção",
  tone = "plain",
  children,
}: {
  id?: string;
  number: string;
  title: string;
  kicker?: string;
  tone?: "plain" | "alt";
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "border-b border-border py-16 sm:py-20",
        tone === "alt" ? "bg-surface-alt" : "bg-surface",
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="mb-10 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border pb-4 sm:flex sm:justify-between">
          <div className="flex min-w-0 items-baseline gap-3">
            <span className="num shrink-0 text-sm font-semibold text-brand">
              {number}
            </span>
            <h2 className="text-balance text-lg font-semibold tracking-tight text-foreground sm:text-xl">
              {title}
            </h2>
          </div>
          <span className="shrink-0 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
            {kicker}
          </span>
        </div>
        <div className="space-y-12 sm:space-y-14">{children}</div>
      </div>
    </section>
  );
}


export function Block({
  id,
  eyebrow,
  title,
  lead,
  children,
  footnote,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  lead?: ReactNode;
  children?: ReactNode;
  footnote?: ReactNode;
}) {
  return (
    <Reveal as="div" className="scroll-mt-28">
      <div id={id} className="space-y-6">
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h3 className="max-w-3xl text-balance text-2xl font-semibold leading-tight text-foreground sm:text-[2rem]">
          {title}
        </h3>
        {lead ? (
          <div className="max-w-3xl text-pretty text-base text-muted-foreground sm:text-lg">
            {lead}
          </div>
        ) : null}
        {children}
        {footnote ? (
          <p className="max-w-3xl border-l-2 border-border pl-4 text-sm text-muted-foreground">
            {footnote}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand">
      {children}
    </p>
  );
}

export function Card({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-md border border-border bg-card p-5 transition-colors",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Statement({ children }: { children: ReactNode }) {
  return (
    <p className="max-w-3xl border-l-4 border-brand bg-brand-soft px-5 py-4 text-base font-medium text-brand-strong sm:text-lg">
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/* Selo de dados ilustrativos                                          */
/* ------------------------------------------------------------------ */

export function IllustrativeBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 whitespace-nowrap rounded-sm border border-border bg-muted px-2 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground",
        className,
      )}
    >
      Dados ilustrativos
    </span>
  );
}

/** Painel numérico: sempre acompanhado do selo e de nota opcional. */
export function DataPanel({
  title,
  note,
  children,
  className,
}: {
  title?: string;
  note?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-md border border-border bg-card p-5 sm:p-6",
        className,
      )}
    >
      <div className="mb-5 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
        <p className="min-w-0 truncate text-sm font-semibold uppercase tracking-[0.1em] text-muted-foreground">
          {title ?? "Demonstração"}
        </p>
        <IllustrativeBadge className="shrink-0" />
      </div>
      {children}
      {note ? (
        <p className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
          {note}
        </p>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Glossário em camada — "O que significa?"                            */
/* ------------------------------------------------------------------ */

export function TermTooltip({
  term,
  definition,
}: {
  term: string;
  definition: string;
}) {
  return (
    <TooltipProvider delayDuration={120}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            aria-label={`O que significa ${term}?`}
            className="inline-flex items-baseline gap-1 border-b border-dashed border-brand/60 font-medium text-brand-strong"
          >
            {term}
            <Info aria-hidden className="size-3.5 shrink-0 translate-y-0.5" />
          </button>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs text-sm leading-relaxed">
          <span className="block font-semibold">{term}</span>
          {definition}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

/* ------------------------------------------------------------------ */
/* Utilitários visuais de dados                                        */
/* ------------------------------------------------------------------ */

export function Metric({
  label,
  value,
  hint,
  tone = "neutral",
}: {
  label: string;
  value: string;
  hint?: string;
  tone?: "neutral" | "brand" | "negative" | "positive" | "warning";
}) {
  const toneClass = {
    neutral: "text-foreground",
    brand: "text-brand",
    negative: "text-signal-negative",
    positive: "text-signal-positive",
    warning: "text-signal-warning",
  }[tone];

  return (
    <div className="rounded-md border border-border bg-card p-4">
      <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
        {label}
      </p>
      <p className={cn("num mt-2 text-2xl font-semibold sm:text-[1.75rem]", toneClass)}>
        {value}
      </p>
      {hint ? (
        <p className="mt-1 text-xs text-muted-foreground">{hint}</p>
      ) : null}
    </div>
  );
}

export function Bar({
  ratio,
  tone = "brand",
  className,
}: {
  ratio: number;
  tone?: "brand" | "negative" | "positive" | "neutral" | "warning";
  className?: string;
}) {
  const toneClass = {
    brand: "bg-brand",
    negative: "bg-signal-negative",
    positive: "bg-signal-positive",
    warning: "bg-signal-warning",
    neutral: "bg-muted-foreground",
  }[tone];

  return (
    <div
      className={cn("h-2.5 w-full overflow-hidden rounded-sm bg-muted", className)}
    >
      <div
        className={cn("h-full rounded-sm transition-[width] duration-500", toneClass)}
        style={{ width: `${Math.max(0, Math.min(100, ratio * 100))}%` }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Chamadas para ação (4 pontos da página, todas internas)             */
/* ------------------------------------------------------------------ */

export function CTAButtons({
  primary = "Quero entender os números do meu restaurante",
  secondary = "Solicitar uma análise da operação",
  className,
}: {
  primary?: string;
  secondary?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <a
        href="#contato"
        className="inline-flex items-center justify-center rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-strong"
      >
        {primary}
      </a>
      <a
        href="#contato"
        className="inline-flex items-center justify-center rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
      >
        {secondary}
      </a>
    </div>
  );
}

export const brl = (value: number) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });
