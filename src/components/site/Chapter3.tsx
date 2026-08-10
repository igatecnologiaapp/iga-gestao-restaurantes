import {
  Bar,
  Block,
  Card,
  Chapter,
  DataPanel,
  Statement,
  brl,
} from "@/components/site/primitives";
import { lossCategories } from "@/data/illustrative";

export function Chapter3() {
  return (
    <Chapter id="perdas" number="Capítulo 3" title="Perdas, estoque e giro" tone="alt">
      {/* 13 */}
      <Block
        eyebrow="Seção 13 · Perdas e desperdícios"
        title="A perda raramente aparece na conta. Ela aparece no resultado."
        lead="Perda não é apenas alimento descartado. Ela se distribui em cinco frentes, e cada uma exige um registro diferente para ser medida."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {lossCategories.map((cat) => (
            <Card key={cat.name} className="h-full border-l-2 border-l-signal-negative">
              <p className="text-base font-semibold text-foreground">{cat.name}</p>
              <ul className="mt-2 space-y-1">
                {cat.items.map((i) => (
                  <li key={i} className="text-sm text-muted-foreground">
                    {i}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <Statement>
          O que não é registrado não é medido. O que não é medido não pode ser
          reduzido.
        </Statement>
      </Block>

      {/* 14 */}
      <Block
        eyebrow="Seção 14 · Compras e fornecedores"
        title="Comprar melhor é margem, não apenas economia"
        lead="A comparação relevante não é o menor preço unitário, mas o custo total: preço, rendimento, prazo, frequência de entrega e confiabilidade."
      >
        <DataPanel
          title="Comparação entre fornecedores — mesmo insumo"
          note="Exemplo ilustrativo. A escolha do fornecedor deve considerar rendimento, padrão de qualidade, prazo de pagamento e regularidade de entrega, não apenas o preço."
        >
          <ul className="space-y-3">
            {[
              ["Fornecedor A", 28.9, 1],
              ["Fornecedor B", 26.4, 0.91],
              ["Fornecedor C", 24.8, 0.86],
            ].map(([name, price, ratio]) => (
              <li key={String(name)} className="space-y-1.5">
                <div className="flex items-baseline justify-between gap-3 text-sm">
                  <span className="text-muted-foreground">{String(name)}</span>
                  <span className="num font-semibold text-foreground">
                    R$ {Number(price).toFixed(2).replace(".", ",")} / kg
                  </span>
                </div>
                <Bar ratio={Number(ratio)} tone="brand" />
              </li>
            ))}
          </ul>
        </DataPanel>
      </Block>

      {/* 15 */}
      <Block
        eyebrow="Seção 15 · Estoque inteligente"
        title="Estoque é dinheiro parado em forma de mercadoria"
        lead="Um estoque bem gerido equilibra quatro leituras: giro, cobertura, validade e ruptura. Erro em qualquer uma delas aparece no CMV."
      >
        <DataPanel
          title="Painel de estoque"
          note="Indicadores ilustrativos. As metas de giro e cobertura devem ser parametrizadas pelo próprio restaurante, conforme formato, cardápio e logística de compras."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Giro de estoque", "4,1×", "text-foreground"],
              ["Cobertura", "7,3 dias", "text-foreground"],
              ["Estoque parado", brl(9800), "text-signal-warning"],
              ["Itens em ruptura", "6", "text-signal-negative"],
            ].map(([label, value, tone]) => (
              <div key={label} className="rounded-md border border-border p-4">
                <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  {label}
                </p>
                <p className={`num mt-2 text-2xl font-semibold ${tone}`}>{value}</p>
              </div>
            ))}
          </div>
        </DataPanel>
      </Block>

      {/* 16 */}
      <Block
        eyebrow="Seção 16 · Capital de giro"
        title="Estoque e prazos definem quanto de caixa a operação precisa"
        lead="A necessidade de capital de giro nasce da soma entre mercadoria parada, prazos de pagamento e despesas do ciclo. É por isso que um restaurante lucrativo pode ficar sem caixa."
      >
        <DataPanel
          title="Composição da necessidade de caixa"
          note="Cálculo gerencial simplificado e ilustrativo. A necessidade real depende dos prazos praticados com fornecedores e do ciclo de recebimento de cada canal de venda."
        >
          <ul className="space-y-3">
            {[
              ["Estoque médio", 24500, 0.55],
              ["Prazo de pagamento a fornecedores", -12000, 0.27],
              ["Despesas do ciclo", 18000, 0.4],
              ["Necessidade de capital de giro", 30500, 0.68],
            ].map(([label, value, ratio], i, arr) => (
              <li key={String(label)} className="space-y-1.5">
                <div className="flex items-baseline justify-between gap-3 text-sm">
                  <span className="text-muted-foreground">{String(label)}</span>
                  <span className="num font-semibold text-foreground">
                    {brl(Number(value))}
                  </span>
                </div>
                <Bar
                  ratio={Number(ratio)}
                  tone={i === arr.length - 1 ? "warning" : "brand"}
                />
              </li>
            ))}
          </ul>
        </DataPanel>
      </Block>
    </Chapter>
  );
}
