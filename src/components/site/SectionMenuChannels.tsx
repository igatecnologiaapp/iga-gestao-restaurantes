import { Bar, Block, Card, Chapter, DataPanel, Statement, brl } from "@/components/site/primitives";
import { ScopeNote } from "@/components/site/blocks";

const menuMatrix = [
  {
    quadrant: "Estrelas",
    desc: "Alta venda e alta margem. Proteger, destacar e padronizar.",
    tone: "border-l-signal-positive",
  },
  {
    quadrant: "Populares",
    desc: "Alta venda e margem baixa. Revisar custo, ficha técnica e preço.",
    tone: "border-l-signal-warning",
  },
  {
    quadrant: "Oportunidades",
    desc: "Baixa venda e alta margem. Trabalhar exposição e venda sugestiva.",
    tone: "border-l-brand",
  },
  {
    quadrant: "Atenção",
    desc: "Baixa venda e baixa margem. Reformular, reprecificar ou retirar.",
    tone: "border-l-signal-negative",
  },
];

const channelStructure = [
  ["Venda", "Preço praticado no canal"],
  ["− Custo dos insumos", "Ficha técnica do item"],
  ["− Embalagem", "Quando aplicável"],
  ["− Taxas / comissões", "Quando aplicável, conforme contrato"],
  ["− Logística", "Quando aplicável"],
  ["= Margem do canal", "Resultado da venda naquele canal"],
];

/* Seção 8 — Rentabilidade do cardápio e dos canais */
export function SectionMenuChannels() {
  return (
    <Chapter
      id="rentabilidade"
      number="Seção 08"
      title="Rentabilidade do cardápio e dos canais"
      kicker="Margem"
    >
      <Block
        eyebrow="Cardápio e canais"
        title="Nem tudo que vende mais é o que gera mais resultado"
        lead="A ficha técnica define o custo. A engenharia de cardápio cruza volume de venda e margem. O canal altera a margem do mesmo prato."
      >
        <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <DataPanel
            title="Custo e margem de um prato"
            note="Exemplo ilustrativo. O custo real depende de rendimento, perdas de manipulação, embalagem e condições de compra de cada operação."
          >
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Preço de venda", brl(50)],
                ["Ingredientes", brl(18)],
                ["Percentual de CMV", "36%"],
                ["Margem bruta do prato", brl(32)],
              ].map(([label, value]) => (
                <div key={label} className="rounded-md border border-border p-4">
                  <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    {label}
                  </p>
                  <p className="num mt-2 text-xl font-semibold text-foreground">
                    {value}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-5 space-y-3 border-t border-border pt-4">
              <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                Margem de contribuição por categoria
              </p>
              {[
                ["Bebidas", 68],
                ["Sobremesas", 61],
                ["Pratos principais", 44],
                ["Combos promocionais", 31],
              ].map(([label, pct]) => (
                <div key={String(label)} className="space-y-1.5">
                  <div className="flex items-baseline justify-between gap-3 text-sm">
                    <span className="text-muted-foreground">{String(label)}</span>
                    <span className="num font-semibold text-foreground">{pct}%</span>
                  </div>
                  <Bar ratio={Number(pct) / 100} tone="brand" />
                </div>
              ))}
            </div>
          </DataPanel>

          <div className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-2">
              {menuMatrix.map((q) => (
                <Card key={q.quadrant} className={`border-l-2 ${q.tone}`}>
                  <p className="text-sm font-semibold text-foreground">
                    {q.quadrant}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{q.desc}</p>
                </Card>
              ))}
            </div>

            <DataPanel
              title="Comparação entre canais — estrutura de cálculo"
              note="Estrutura de comparação, sem percentuais de taxa atribuídos. Taxas, comissões, embalagem e logística variam conforme o canal, o contrato e a região."
            >
              <ul className="mb-4 flex flex-wrap gap-2">
                {["Salão", "Retirada", "Delivery próprio", "Aplicativos"].map((c) => (
                  <li
                    key={c}
                    className="rounded-sm border border-border bg-surface-alt px-2.5 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-foreground"
                  >
                    {c}
                  </li>
                ))}
              </ul>
              <ul className="divide-y divide-border">
                {channelStructure.map(([line, note], i, arr) => (
                  <li
                    key={line}
                    className={`grid grid-cols-[minmax(0,1fr)_auto] gap-3 py-2.5 text-sm ${
                      i === arr.length - 1
                        ? "font-semibold text-brand-strong"
                        : "text-muted-foreground"
                    }`}
                  >
                    <span className="min-w-0">{line}</span>
                    <span className="shrink-0 text-right text-xs text-muted-foreground">
                      {note}
                    </span>
                  </li>
                ))}
              </ul>
            </DataPanel>
            <ScopeNote />
          </div>
        </div>

        <Statement>
          O cardápio é uma ferramenta de rentabilidade, não apenas uma lista de
          pratos.
        </Statement>
      </Block>
    </Chapter>
  );
}
