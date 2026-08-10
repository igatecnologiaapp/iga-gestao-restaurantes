import {
  Bar,
  Block,
  Card,
  Chapter,
  DataPanel,
  Statement,
  TermTooltip,
  brl,
} from "@/components/site/primitives";
import { CmvSimulator, CmvTheoreticalVsReal } from "@/components/site/CmvBlocks";
import { cmvCauses } from "@/data/illustrative";

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

export function Chapter2() {
  return (
    <Chapter id="cmv" number="Capítulo 2" title="CMV e precificação">
      {/* 8 */}
      <Block
        eyebrow="Seção 8 · CMV"
        title="CMV: o primeiro indicador a ser compreendido"
        lead={
          <>
            O{" "}
            <TermTooltip
              term="CMV"
              definition="Custo da Mercadoria Vendida: quanto a operação gastou com insumos para produzir o que foi vendido no período. Costuma ser lido como percentual do faturamento."
            />{" "}
            mostra quanto do faturamento é consumido pela própria mercadoria.
            Exemplo: um prato vendido a {brl(50)} com {brl(18)} de ingredientes
            tem percentual de CMV de 36%.
          </>
        }
      >
        <CmvTheoreticalVsReal />
        <CmvSimulator />

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.1em] text-muted-foreground">
            O que faz o percentual de CMV subir
          </p>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {cmvCauses.map((c) => (
              <li key={c.cause}>
                <Card className="h-full border-l-2 border-l-brand">
                  <p className="text-sm font-semibold text-foreground">{c.cause}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{c.note}</p>
                  <p className="mt-2 text-[0.68rem] uppercase tracking-[0.12em] text-brand">
                    Ramo: {c.branch}
                  </p>
                </Card>
              </li>
            ))}
          </ul>
        </div>

        <Statement>
          Reduzir o percentual de CMV não é apenas comprar mais barato: envolve
          compras, negociação, estoque, desperdício, padronização,
          porcionamento, produção, precificação e engenharia de cardápio.
        </Statement>
      </Block>

      {/* 9 */}
      <Block
        eyebrow="Seção 9 · Ticket Médio"
        title="Ticket maior não significa automaticamente resultado maior"
        lead={
          <>
            <TermTooltip
              term="Ticket Médio"
              definition="Ticket Médio = Faturamento ÷ número de pedidos/vendas. Indica o valor médio de cada pedido, não a margem gerada por ele."
            />{" "}
            é apenas o ponto de partida. A leitura útil combina três perguntas.
          </>
        }
      >
        <ol className="grid gap-3 sm:grid-cols-3">
          {[
            "O Ticket Médio aumentou?",
            "A margem gerada por esse Ticket também aumentou?",
            "Os clientes passaram a comprar produtos mais rentáveis?",
          ].map((q, i) => (
            <li key={q}>
              <Card className="h-full">
                <span className="num text-xs font-semibold text-brand">
                  0{i + 1}
                </span>
                <p className="mt-2 text-base text-foreground">{q}</p>
              </Card>
            </li>
          ))}
        </ol>

        <DataPanel
          title="Leitura combinada"
          note="Exemplo ilustrativo de leitura. Ticket Médio em alta com margem em queda pode indicar itens de baixa margem no pedido, descontos concedidos ou custos elevados na composição."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <div className="flex items-baseline justify-between gap-3 text-sm">
                <span className="text-muted-foreground">Ticket Médio</span>
                <span className="num font-semibold text-signal-positive">
                  {brl(62)} · +3,1%
                </span>
              </div>
              <Bar ratio={0.72} tone="positive" />
            </div>
            <div className="space-y-1.5">
              <div className="flex items-baseline justify-between gap-3 text-sm">
                <span className="text-muted-foreground">
                  Margem de contribuição
                </span>
                <span className="num font-semibold text-signal-negative">
                  42% · −2,4 p.p.
                </span>
              </div>
              <Bar ratio={0.42} tone="negative" />
            </div>
          </div>
        </DataPanel>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Combos", "Ganho de ticket apenas quando a margem do conjunto é medida."],
            ["Adicionais", "Elevam o ticket; verificar o custo do insumo adicional."],
            ["Sobremesas e bebidas", "Costumam ter margem distinta do prato principal."],
            ["Venda sugestiva", "Efeito depende do item sugerido e de sua margem."],
          ].map(([t, d]) => (
            <Card key={t}>
              <p className="text-sm font-semibold text-foreground">{t}</p>
              <p className="mt-1 text-xs text-muted-foreground">{d}</p>
            </Card>
          ))}
        </div>
      </Block>

      {/* 10 */}
      <Block
        id="lucro-real"
        eyebrow="Seção 10 · Lucro real"
        title="Do faturamento ao lucro real, em quatro degraus"
        lead="Cada degrau responde a uma decisão diferente. Confundi-los é a origem de boa parte das decisões equivocadas."
      >
        <DataPanel
          title="Escada do resultado"
          note="Valores ilustrativos coerentes com o mapa do dinheiro. A composição real varia conforme a operação e o regime tributário."
        >
          <ul className="space-y-3">
            {[
              ["Faturamento", 150000, 1],
              ["Margem bruta", 81200, 0.54],
              ["Resultado operacional", 19500, 0.13],
              ["Lucro real", 13500, 0.09],
            ].map(([label, value, ratio]) => (
              <li key={String(label)} className="space-y-1.5">
                <div className="flex items-baseline justify-between gap-3 text-sm">
                  <span className="text-muted-foreground">{String(label)}</span>
                  <span className="num font-semibold text-foreground">
                    {brl(Number(value))}
                  </span>
                </div>
                <Bar ratio={Number(ratio)} tone="brand" />
              </li>
            ))}
          </ul>
        </DataPanel>
      </Block>

      {/* 11 */}
      <Block
        eyebrow="Seção 11 · Ficha técnica"
        title="Sem ficha técnica, o custo do prato é uma estimativa"
        lead="A ficha técnica transforma o preço em decisão: define o custo esperado, sustenta o padrão de produção e permite comparar o consumo real com o previsto."
      >
        <DataPanel
          title="Custo real de um prato"
          note="Exemplo ilustrativo. O custo real depende de rendimento, perdas de manipulação, embalagem e condições de compra de cada operação."
        >
          <div className="grid gap-4 sm:grid-cols-4">
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
                <p className="num mt-2 text-2xl font-semibold text-foreground">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </DataPanel>
      </Block>

      {/* 12 */}
      <Block
        eyebrow="Seção 12 · Engenharia de cardápio"
        title="Cada prato ocupa uma posição entre venda e margem"
        lead="A engenharia de cardápio cruza o volume de venda com a margem de cada item e indica o que proteger, o que revisar e o que reformular."
      >
        <div className="grid gap-3 sm:grid-cols-2">
          {menuMatrix.map((q) => (
            <Card key={q.quadrant} className={`border-l-2 ${q.tone}`}>
              <p className="text-base font-semibold text-foreground">
                {q.quadrant}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{q.desc}</p>
            </Card>
          ))}
        </div>
        <Statement>
          O cardápio é uma ferramenta de rentabilidade, não apenas uma lista de
          pratos.
        </Statement>
      </Block>
    </Chapter>
  );
}
