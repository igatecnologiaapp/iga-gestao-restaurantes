import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { diagnosticBranches } from "@/data/illustrative";
import { cn } from "@/lib/utils";

/**
 * Árvore de diagnóstico do lucro (seção 7).
 * Três níveis: hipótese → ramo → verificação. Começa recolhida e mantém
 * apenas um ramo aberto por vez, para uso em apresentação comercial.
 */
export function ProfitDiagnosticTree() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="rounded-md border border-border bg-card">
      <div className="border-b border-border bg-muted px-5 py-4">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground">
          Lucro caiu. Investigar:
        </p>
      </div>

      <ul className="divide-y divide-border">
        {diagnosticBranches.map((branch) => {
          const isOpen = open === branch.id;
          return (
            <li key={branch.id}>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : branch.id)}
                className={cn(
                  "grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-4 text-left transition-colors hover:bg-accent",
                  isOpen && "bg-brand-soft",
                )}
              >
                <span
                  className={cn(
                    "min-w-0 text-base font-medium",
                    isOpen ? "text-brand-strong" : "text-foreground",
                  )}
                >
                  {branch.question}
                </span>
                <ChevronDown
                  aria-hidden
                  className={cn(
                    "size-4 shrink-0 text-muted-foreground transition-transform",
                    isOpen && "rotate-180",
                  )}
                />
              </button>

              {isOpen ? (
                <ul className="grid gap-2 border-t border-border bg-surface-alt px-5 py-4 sm:grid-cols-2 lg:grid-cols-3">
                  {branch.leaves.map((leaf) => (
                    <li
                      key={leaf.label}
                      className="rounded-sm border border-border bg-card p-3"
                    >
                      <p className="text-sm font-semibold text-foreground">
                        {leaf.label}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {leaf.check}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
