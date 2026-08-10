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

export function Chapter4() {
  return (
    <Chapter id="lucro" number="Capítulo 4" title="Margem, equilíbrio e canais">
      {/* 17 */}
      <Block
        eyebrow="Seção 17 · Margem de contribuição"
        title="Quanto cada produto contribui para pagar a estrutura"
        lead={
          <>
            A{" "}
            <TermTooltip
              term="margem de contribuição"
              definition="Quanto sobra da venda de um item depois dos custos diretamente ligados a ele. É esse valor que paga os custos fixos e forma o resultado."
            />{" "}
            é a leitura que permite comparar pratos, categorias, canais e
            períodos com o mesmo critério.
          </>
        }
      >
        <DataPanel
          title="Margem de contribuição por categoria"
          note="Percentuais ilustrativos. A margem real depende da ficha técnica, do preço praticado e das taxas de cada canal."
        >
          <ul className="space-y-3">
            {[
              ["Bebidas", 68],
              ["Sobremesas", 61],
              ["Pratos principais", 44],
              ["Combos promocionais", 31],
            ].map(([label, pct]) => (
              <li key={String(label)} className="space-y-1.5">
                <div className="flex items-baseline justify-between gap-3 text-sm">
                  <span className="text-muted-foreground">{String(label)}</span>
                  <span className="num font-semibold text-foreground">{pct}%</span>
                </div>
                <Bar ratio={Number(pct) / 100} tone="brand" />
              </li>
            ))}
          </ul>
        </DataPanel>
      </Block>

      {/* 18 */}
      <Block
        eyebrow="Seção 18 · Ponto de equilíbrio"
        title="Quanto precisa ser vendido apenas para pagar as contas"
        lead={
          <>
            <TermTooltip
              term="Ponto de equilíbrio"
              definition="Faturamento necessário para cobrir todos os custos e despesas, sem lucro e sem prejuízo. Calculado dividindo os custos fixos pela margem de contribuição percentual."
            />{" "}
            = custos fixos ÷ margem de contribuição percentual.
          </>
        }
      >
        <DataPanel
          title="Cálculo ilustrativo"
          note="Cálculo gerencial simplificado. O ponto de equilíbrio muda a cada alteração de custo fixo, de preço, de mix de produtos ou de participação dos canais."
        >
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Custos fixos", brl(55400), "text-foreground"],
              ["Margem de contribuição", "42%", "text-foreground"],
              ["Ponto de equilíbrio", brl(132000), "text-brand"],
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
        <Statement>
          Antes de discutir crescimento, é preciso saber onde está a linha do
          equilíbrio.
        </Statement>
      </Block>

      {/* 19 */}
      <Block
        eyebrow="Seção 19 · Delivery"
        title="O delivery precisa ser avaliado por pedido e por canal"
        lead="O mesmo prato pode ter resultados diferentes no salão e no delivery. Taxa de canal, embalagem e logística alteram a margem gerada."
      >
        <DataPanel
          title="Resultado de um pedido — comparação estrutural"
          note="Estrutura de comparação ilustrativa. Percentuais de taxa, custo de embalagem e logística variam conforme o canal, o contrato e a região."
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] text-sm">
              <thead>
                <tr className="border-b border-border text-left text-xs uppercase tracking-[0.1em] text-muted-foreground">
                  <th className="py-2 pr-4 font-medium">Componente</th>
                  <th className="py-2 pr-4 text-right font-medium">Salão</th>
                  <th className="py-2 text-right font-medium">Delivery</th>
                </tr>
              </thead>
              <tbody className="num">
                {[
                  ["Preço do pedido", brl(62), brl(62)],
                  ["Custo dos insumos", `− ${brl(22)}`, `− ${brl(22)}`],
                  ["Embalagem", "—", `− ${brl(3)}`],
                  ["Taxa do canal", "—", `− ${brl(15)}`],
                  ["Margem de contribuição", brl(40), brl(22)],
                ].map(([c, a, b], i, arr) => (
                  <tr
                    key={String(c)}
                    className={`border-b border-border/70 ${
                      i === arr.length - 1 ? "font-semibold text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    <td className="py-2 pr-4">{c}</td>
                    <td className="py-2 pr-4 text-right">{a}</td>
                    <td className="py-2 text-right">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DataPanel>
      </Block>

      {/* 20 */}
      <Block
        eyebrow="Seção 20 · Gestão tributária"
        title="Tributos fazem parte da rentabilidade, não apenas da obrigação"
        lead="Organizar informação fiscal, conferir apurações e acompanhar o peso dos tributos sobre a receita é parte da leitura de resultado."
        footnote="A abordagem tributária aqui apresentada é de organização, análise, conferência e apoio à decisão. Não substitui o contador responsável pela operação nem constitui orientação fiscal."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Organização", "Informação fiscal consolidada e conferível."],
            ["Conferência", "Comparação entre o apurado e o registrado na operação."],
            ["Peso sobre a receita", "Acompanhamento do tributo como percentual do faturamento."],
            ["Apoio à decisão", "Leitura conjunta com a contabilidade responsável."],
          ].map(([t, d]) => (
            <Card key={t}>
              <p className="text-sm font-semibold text-foreground">{t}</p>
              <p className="mt-1 text-xs text-muted-foreground">{d}</p>
            </Card>
          ))}
        </div>
      </Block>
    </Chapter>
  );
}
