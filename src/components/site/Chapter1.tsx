import {
  Bar,
  Block,
  Card,
  CTAButtons,
  Chapter,
  DataPanel,
  Eyebrow,
  IllustrativeBadge,
  Metric,
  Statement,
  TermTooltip,
  brl,
} from "@/components/site/primitives";
import { ProfitDiagnosticTree } from "@/components/site/ProfitDiagnosticTree";
import { moneyFlow, scenarios } from "@/data/illustrative";

/* Seção 1 — Hero */
export function Hero() {
  return (
    <section
      id="inicio"
      className="border-b border-border bg-surface pb-16 pt-28 sm:pb-20 sm:pt-32"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-7">
          <Eyebrow>Gestão inteligente · Análise de dados · Tecnologia</Eyebrow>
          <h1 className="text-balance text-3xl font-semibold leading-[1.1] text-foreground sm:text-5xl">
            Seu restaurante vende bem. Mas quanto realmente sobra no fim do mês?
          </h1>
          <p className="max-w-xl text-pretty text-lg text-muted-foreground">
            Faturamento alto não significa lucro. Entre a venda e o resultado
            existem custos, perdas, tributos, taxas e decisões de precificação
            que raramente aparecem com clareza. Esta apresentação percorre esse
            caminho, indicador por indicador.
          </p>
          <p className="max-w-xl border-l-4 border-brand bg-brand-soft px-5 py-4 text-base font-medium text-brand-strong">
            A tecnologia é o meio. A decisão gerencial é o objetivo.
          </p>
          <CTAButtons />
        </div>

        <div className="space-y-5">
          <figure className="overflow-hidden rounded-md border border-border bg-card">
            <img
              src={heroImage.url}
              alt="Salão de restaurante ao fundo e, em primeiro plano, notebook e tablet com relatórios de gestão sobre um balcão de madeira"
              width={1600}
              height={1200}
              className="h-40 w-full object-cover sm:h-52"
            />
          </figure>

          <div className="rounded-md border border-border bg-card p-6">

            <p className="text-sm font-semibold uppercase tracking-[0.1em] text-muted-foreground">
              Do faturamento ao resultado
            </p>
            <IllustrativeBadge />
          </div>
          <ul className="space-y-3">
            {[
              { label: "Faturamento", ratio: 1, tone: "brand" as const, value: brl(150000) },
              { label: "Após CMV", ratio: 0.62, tone: "neutral" as const, value: brl(93000) },
              { label: "Após pessoas e taxas", ratio: 0.34, tone: "warning" as const, value: brl(51000) },
              { label: "Resultado", ratio: 0.09, tone: "negative" as const, value: brl(13500) },
            ].map((row) => (
              <li key={row.label} className="space-y-1.5">
                <div className="flex items-baseline justify-between gap-3 text-sm">
                  <span className="text-muted-foreground">{row.label}</span>
                  <span className="num font-semibold text-foreground">{row.value}</span>
                </div>
                <Bar ratio={row.ratio} tone={row.tone} />
              </li>
            ))}
          </ul>
          <p className="mt-5 border-t border-border pt-4 text-xs text-muted-foreground">
            Exemplo puramente ilustrativo, criado para demonstrar a leitura
            gerencial. Não representa dados de nenhum restaurante real.
          </p>
        </div>
      </div>
    </section>
  );
}

/* Capítulo 1 — Diagnóstico financeiro (seções 2 a 7) */
export function Chapter1() {
  return (
    <Chapter number="Capítulo 1" title="Diagnóstico financeiro" tone="alt">
      {/* 2 */}
      <Block
        eyebrow="Seção 2 · Pergunta central"
        title="Vende bem. Mas quanto realmente sobra?"
        lead="A maioria das decisões em restaurantes é tomada a partir do faturamento — o número mais visível e o menos conclusivo. A pergunta gerencial correta não é quanto entrou, mas quanto permaneceu depois de todos os custos."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            "Você sabe qual é o custo real de cada prato do seu cardápio?",
            "Sabe quais produtos sustentam a margem e quais apenas ocupam o cardápio?",
            "Sabe quanto precisa vender por mês apenas para pagar as contas?",
          ].map((q) => (
            <Card key={q}>
              <p className="text-base text-foreground">{q}</p>
            </Card>
          ))}
        </div>
      </Block>

      {/* 3 */}
      <Block
        eyebrow="Seção 3 · Tese"
        title="Faturamento não é lucro"
        lead="Faturamento é o total que entra. Lucro é o que resta depois de mercadoria, pessoas, estrutura, tributos, taxas e perdas. Dois restaurantes com o mesmo faturamento podem ter resultados opostos."
      >
        <Statement>
          Vender mais é uma conquista comercial. Ganhar mais é uma consequência
          de gestão.
        </Statement>
      </Block>

      {/* 4 */}
      <Block
        eyebrow="Seção 4 · O desafio da gestão"
        title="O resultado não cai por um motivo. Ele é corroído por vários."
        lead="Cada fator isolado parece pequeno. Somados, explicam a diferença entre um mês bom e um mês apenas movimentado."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Custo de mercadoria acima do previsto",
            "Desperdício e perdas não medidos",
            "Preços desatualizados frente ao custo",
            "Descontos e promoções sem análise de margem",
            "Estoque parado consumindo capital",
            "Taxas de canais de venda não acompanhadas",
            "Falta de padronização na produção",
            "Decisões tomadas por percepção, não por dado",
            "Informação dispersa entre planilhas e sistemas",
          ].map((f) => (
            <Card key={f} className="border-l-2 border-l-signal-warning">
              <p className="text-sm text-foreground">{f}</p>
            </Card>
          ))}
        </div>
      </Block>

      {/* 5 — Mapa do dinheiro */}
      <Block
        eyebrow="Seção 5 · Mapa do dinheiro"
        title="O caminho completo do dinheiro dentro da operação"
        lead="O faturamento entra inteiro e sai reduzido em cada etapa. Ver esse caminho é a base de qualquer decisão de rentabilidade."
        footnote="As perdas e desperdícios representados aqui correspondem ao valor identificado no fluxo financeiro. Quando parte dessas perdas já estiver explicada pelo desvio entre CMV teórico e CMV real (Capítulo 2), as leituras se complementam — o mesmo valor não é contabilizado duas vezes."
      >
        <DataPanel
          title="Faturamento → Resultado"
          note="Cascata gerencial simplificada, com valores ilustrativos e coerentes entre si. A composição real varia conforme o porte, o formato e o regime tributário da operação."
        >
          <ul className="space-y-2.5">
            {moneyFlow.map((step) => (
              <li key={step.label} className="space-y-1.5">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3 text-sm">
                  <span className="min-w-0 truncate text-muted-foreground">
                    {step.label}
                  </span>
                  <span className="num shrink-0 font-semibold text-foreground">
                    {step.subtracted ? `− ${brl(step.subtracted)}` : brl(step.remaining)}
                  </span>
                </div>
                <Bar
                  ratio={step.remaining / moneyFlow[0]!.remaining}
                  tone={step.label === "Resultado" ? "positive" : "brand"}
                />
                <p className="num text-xs text-muted-foreground">
                  Restante: {brl(step.remaining)}
                </p>
              </li>
            ))}
          </ul>
        </DataPanel>
        <Statement>
          Conhecer o faturamento é apenas o começo. A gestão inteligente
          acompanha o caminho completo do dinheiro.
        </Statement>
      </Block>

      {/* 6 — Venda × Margem × Resultado */}
      <Block
        eyebrow="Seção 6 · Venda × Margem × Resultado"
        title="Vender mais pode gerar menos margem"
        lead={
          <>
            Comparação entre dois cenários do mesmo restaurante. A única
            diferença está na{" "}
            <TermTooltip
              term="margem"
              definition="Percentual do faturamento que permanece após os custos diretamente ligados à venda. Quando a margem cai, cada real vendido passa a contribuir menos para pagar a estrutura."
            />{" "}
            praticada.
          </>
        }
      >
        <div className="grid gap-4 lg:grid-cols-2">
          {scenarios.map((s) => (
            <DataPanel
              key={s.name}
              title={s.name}
              note="Comparação gerencial simplificada. A margem de contribuição gerada não equivale a lucro líquido: o resultado final depende das demais despesas e das condições da operação."
            >
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-baseline justify-between gap-3 text-sm">
                    <span className="text-muted-foreground">Faturamento</span>
                    <span className="num font-semibold text-foreground">
                      {brl(s.revenue)}
                    </span>
                  </div>
                  <Bar ratio={s.revenue / 120000} tone="brand" />
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-baseline justify-between gap-3 text-sm">
                    <span className="text-muted-foreground">Margem</span>
                    <span className="num font-semibold text-foreground">
                      {s.margin}%
                    </span>
                  </div>
                  <Bar ratio={s.margin / 20} tone="neutral" />
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-baseline justify-between gap-3 text-sm">
                    <span className="text-muted-foreground">
                      Margem de contribuição gerada
                    </span>
                    <span
                      className={`num font-semibold ${
                        s.highlight === "negative"
                          ? "text-signal-negative"
                          : "text-signal-positive"
                      }`}
                    >
                      {brl(s.contribution)}
                    </span>
                  </div>
                  <Bar
                    ratio={s.contribution / 20000}
                    tone={s.highlight === "negative" ? "negative" : "positive"}
                  />
                </div>
              </div>
            </DataPanel>
          ))}
        </div>
        <Statement>
          O restaurante vendeu mais, mas gerou menos margem de contribuição.
        </Statement>
      </Block>

      {/* 7 — Árvore de diagnóstico */}
      <Block
        eyebrow="Seção 7 · Árvore de diagnóstico"
        title="O que está causando a queda do lucro?"
        lead="Quando o resultado cai, a pergunta útil não é “o que aconteceu?”, mas “onde investigar?”. Abra apenas o ramo que corresponde à sua operação."
      >
        <ProfitDiagnosticTree />
        <Statement>
          Números mostram o que aconteceu. A análise ajuda a entender por que
          aconteceu.
        </Statement>
      </Block>

      <div className="grid gap-4 sm:grid-cols-3">
        <Metric label="Faturamento mensal" value={brl(150000)} hint="Base ilustrativa" tone="brand" />
        <Metric label="Percentual de CMV" value="38%" hint="Cenário atual ilustrativo" tone="negative" />
        <Metric label="Percentual de CMV" value="34%" hint="Cenário trabalhado ilustrativo" tone="positive" />
      </div>
    </Chapter>
  );
}
