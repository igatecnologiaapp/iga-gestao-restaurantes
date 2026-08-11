import { CTAButtons, Eyebrow, IllustrativeBadge } from "@/components/site/primitives";
import { FlowChain, PillRow, ScopeNote } from "@/components/site/blocks";
import heroImage from "@/assets/hero-gestao-restaurante.jpg.asset.json";

const systemModules = [
  "Compras",
  "Estoque",
  "Ficha técnica",
  "Produção",
  "Mesas",
  "Vendas",
  "Caixa",
  "Fiscal",
  "Financeiro",
];

const analyticsModules = [
  "CMV",
  "Ticket Médio",
  "Perdas",
  "Margens",
  "Rentabilidade",
  "DRE",
  "Indicadores",
  "Alertas",
  "Lucro real",
];

/* Seção 1 — Hero */
export function Hero() {
  return (
    <section
      id="inicio"
      className="border-b border-border bg-surface pb-16 pt-28 sm:pb-20 sm:pt-32"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-7">
          <Eyebrow>Sistema de gestão · Análise de dados · Tecnologia</Eyebrow>
          <h1 className="text-balance text-3xl font-semibold leading-[1.1] text-foreground sm:text-5xl">
            Gestão completa para restaurantes — da compra ao lucro real
          </h1>
          <p className="max-w-xl text-pretty text-lg text-muted-foreground">
            Controle a operação. Conheça os custos. Reduza perdas. Entenda suas
            margens. Tome decisões com dados.
          </p>
          <p className="max-w-xl border-l-4 border-brand bg-brand-soft px-5 py-4 text-base font-medium text-brand-strong">
            O sistema registra o que acontece. A análise mostra o que isso
            significa. A gestão transforma a informação em decisão.
          </p>
          <CTAButtons primary="Quero conhecer melhor os números do meu restaurante" secondary="Agendar uma apresentação" />
        </div>

        <div className="space-y-4">
          <figure className="overflow-hidden rounded-md border border-border bg-card">
            <img
              src={heroImage.url}
              alt="Salão de restaurante ao fundo e, em primeiro plano, notebook e tablet com relatórios de gestão sobre um balcão de madeira"
              width={1600}
              height={1200}
              className="h-36 w-full object-cover sm:h-44"
            />
          </figure>

          <div className="grid gap-3">
            <div className="rounded-md border border-border bg-card p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">
                1 · Sistema de gestão para restaurantes
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Controla e registra a operação.
              </p>
              <div className="mt-3">
                <PillRow items={systemModules} />
              </div>
            </div>

            <div className="rounded-md border border-brand/40 bg-brand-soft/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">
                2 · Gestão inteligente e análise de dados
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Transforma os dados da operação em informação para decidir.
              </p>
              <div className="mt-3">
                <PillRow items={analyticsModules} tone="brand" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 w-full max-w-6xl px-5 sm:px-8">
        <div className="rounded-md border border-border bg-card p-5 sm:p-6">
          <div className="mb-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
            <p className="min-w-0 text-sm font-semibold uppercase tracking-[0.1em] text-muted-foreground">
              A integração das duas camadas
            </p>
            <IllustrativeBadge className="shrink-0" />
          </div>
          <FlowChain
            numbered={false}
            steps={["Operação", "Dados", "Análise", "Decisão", "Resultado"]}
          />
          <div className="mt-4">
            <ScopeNote />
          </div>
        </div>
      </div>
    </section>
  );
}
