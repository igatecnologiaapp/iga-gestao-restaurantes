import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

/**
 * Área da marca RESERVADA e VAZIA.
 * O arquivo oficial do logotipo da IGA Tecnologia não foi recebido.
 * Ao recebê-lo, basta preencher este contêiner com a imagem original
 * (sem redesenho, sem deformação) — o layout já está dimensionado.
 */
function BrandSlot({ className }: { className?: string }) {
  return (
    <a
      href="#inicio"
      aria-label="IGA Tecnologia — início"
      className={cn(
        "flex h-11 w-[168px] shrink-0 items-center rounded-sm border border-dashed border-border/80",
        className,
      )}
    >
      <span className="sr-only">IGA Tecnologia</span>
    </a>
  );
}

function useScrollState() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 24);
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { scrolled, progress };
}

function useActiveAnchor() {
  const [active, setActive] = useState(navItems[0]?.anchor ?? "inicio");

  useEffect(() => {
    const targets = navItems
      .map((i) => document.getElementById(i.anchor))
      .filter((el): el is HTMLElement => Boolean(el));
    if (targets.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.2, 1] },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return active;
}

export function SiteHeader() {
  const { scrolled, progress } = useScrollState();
  const active = useActiveAnchor();
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur transition-all",
        scrolled ? "py-2" : "py-3",
      )}
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 lg:flex lg:justify-between">
        <BrandSlot />

        <nav className="hidden min-w-0 items-center gap-1 lg:flex" aria-label="Seções da apresentação">
          {navItems.map((item) => (
            <a
              key={item.anchor}
              href={`#${item.anchor}`}
              className={cn(
                "rounded-sm px-2.5 py-1.5 text-[0.82rem] font-medium transition-colors",
                active === item.anchor
                  ? "bg-brand-soft text-brand-strong"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href="#contato"
            className="hidden rounded-md bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-strong sm:inline-flex"
          >
            Solicitar uma análise
          </a>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
          >
            {open ? <Menu className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      {/* barra de progresso */}
      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent">
        <div
          className="h-full bg-brand transition-[width] duration-150"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* painel mobile */}
      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
            <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Seções
            </span>
            <button
              type="button"
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
              className="inline-flex size-9 items-center justify-center rounded-md border border-border"
            >
              <X className="size-4" aria-hidden />
            </button>
          </div>
          <nav className="mx-auto max-w-6xl px-5 pb-5">
            <ul className="grid gap-1">
              {navItems.map((item) => (
                <li key={item.anchor}>
                  <a
                    href={`#${item.anchor}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-sm px-3 py-2.5 text-sm font-medium text-foreground hover:bg-accent"
                  >
                    {item.label}
                    <span className="ml-2 text-xs text-muted-foreground">
                      {item.chapter}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

/** Marcadores verticais discretos — apenas telas grandes. */
export function ScrollRail() {
  const active = useActiveAnchor();
  return (
    <div className="pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 xl:block">
      <ul className="pointer-events-auto space-y-2.5">
        {navItems.map((item) => (
          <li key={item.anchor} className="group flex items-center justify-end gap-2">
            <span className="rounded-sm bg-card px-2 py-0.5 text-[0.7rem] text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
              {item.label}
            </span>
            <a
              href={`#${item.anchor}`}
              aria-label={item.label}
              className={cn(
                "block h-6 w-1 rounded-sm transition-colors",
                active === item.anchor ? "bg-brand" : "bg-border",
              )}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export { BrandSlot };
