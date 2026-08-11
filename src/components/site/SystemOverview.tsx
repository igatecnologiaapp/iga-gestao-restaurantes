import type { ReactNode } from "react";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  ClipboardList,
  CreditCard,
  FileSpreadsheet,
  Landmark,
  Layers,
  Receipt,
  RefreshCcw,
  ShoppingCart,
  Smartphone,
  Utensils,
  Wallet,
} from "lucide-react";
import { Block, Card, Eyebrow, Reveal, Statement } from "@/components/site/primitives";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Peças visuais locais desta área (apresentação comercial)            */
/* ------------------------------------------------------------------ */

/** Selo de disponibilidade — evita apresentar recurso como concluído. */
function ScopeNote({ children }: { children?: ReactNode }) {
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
function FlowChain({
  steps,
  emphasisLast = true,
  className,
}: {
  steps: string[];
  emphasisLast?: boolean;
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
              <span className="text-[0.65rem] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
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

/** Card de recurso: lista de itens + benefício gerencial. */
function FeatureCard({
  icon: Icon,
  title,
  items,
  benefit,
}: {
  icon: typeof ShoppingCart;
  title: string;
  items: string[];
  benefit: string;
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
      <p className="mt-auto border-l-2 border-brand bg-brand-soft px-3 py-2 text-sm font-medium text-brand-strong">
        {benefit}
      </p>
    </Card>
  );
}

/** Mini demonstração de tela (mock estático, sem dados reais). */
function ScreenMock({
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

/* ------------------------------------------------------------------ */
/* Área: Sistema Gerencial para Restaurantes                           */
/* ------------------------------------------------------------------ */

const mainFlow = [
  "Compra",
  "Entrada no estoque",
  "Atualização do custo",
  "Ficha técnica",
  "Produção / venda",
  "Baixa automática do estoque",
  "Atendimento",
  "Fechamento da conta",
  "Tributação",
  "Resultado / lucro real",
  "Análise gerencial",
];

const costTrace = [
  "Compra do insumo",
  "Custo no estoque",
  "Consumo na receita",
  "Custo do prato",
  "Preço de venda",
  "Tributos / taxas",
  "Margem",
  "Resultado",
];

const integratedModules = [
  "Compras",
  "Estoque",
  "Ficha técnica",
  "Produção",
  "Vendas",
  "Mesas",
  "Caixa",
  "Tributação",
  "Financeiro",
  "Análise de dados",
];

const analyticBridge = [
  "CMV",
  "Ticket Médio",
  "Perdas",
  "Margens",
  "Estoque",
  "Compras",
  "Delivery",
  "DRE",
  "Lucro Real",
  "Alertas",
  "Indicadores",
];

export function SystemOverview() {
  return (
    <section
      id="sistema"
      className="border-b border-border bg-surface py-16 sm:py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="mb-10 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border pb-4 sm:flex sm:justify-between">
          <div className="flex min-w-0 items-baseline gap-3">
            <span className="num shrink-0 text-sm font-semibold text-brand">
              Sistema
            </span>
            <h2 className="text-balance text-lg font-semibold tracking-tight text-foreground sm:text-xl">
              Sistema gerencial para restaurantes — da compra ao lucro real
            </h2>
          </div>
          <span className="shrink-0 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
            Operação
          </span>
        </div>

        <div className="space-y-16 sm:space-y-20">
          {/* 1 — Fluxo principal */}
          <Block
            eyebrow="Fluxo principal"
            title="Cada movimentação da operação alimenta a etapa seguinte"
            lead="Do produto comprado ao resultado da venda, o sistema acompanha o caminho completo da operação."
          >
            <FlowChain steps={mainFlow} />
            <Statement>
              Do produto comprado ao resultado da venda, cada movimentação gera
              informação para a gestão.
            </Statement>
            <ScopeNote />
          </Block>

          {/* 2 a 4 — Compras, estoque, ficha técnica */}
          <Block
            eyebrow="Operações"
            title="Compras, estoque e ficha técnica: a base do custo"
            lead="É nessas três frentes que o custo real do prato se forma — antes de qualquer análise de margem."
          >
            <div className="grid gap-4 lg:grid-cols-3">
              <FeatureCard
                icon={ShoppingCart}
                title="Compras e custos"
                items={[
                  "Registro ou importação das compras",
                  "Identificação dos produtos adquiridos",
                  "Fornecedor, quantidade e valor pago",
                  "Custo unitário e histórico de preços",
                  "Atualização do custo dos insumos",
                  "Comparação das variações de custo",
                ]}
                benefit="O gestor acompanha quanto está pagando e identifica aumentos que podem reduzir a margem dos pratos."
              />
              <FeatureCard
                icon={Boxes}
                title="Estoque"
                items={[
                  "Entrada automática ou assistida das mercadorias compradas",
                  "Saldo por produto e movimentações de entrada e saída",
                  "Estoque mínimo e produtos parados",
                  "Validade e perdas",
                  "Inventário",
                  "Rastreamento das movimentações",
                ]}
                benefit="Mais controle sobre o que entrou, o que foi consumido, o que foi vendido e o que ainda deveria estar no estoque."
              />
              <FeatureCard
                icon={FileSpreadsheet}
                title="Ficha técnica e custo real"
                items={[
                  "Ingredientes, quantidades e rendimento",
                  "Custo de cada ingrediente",
                  "Custo da receita e custo por porção",
                  "Preço de venda",
                  "Percentual de CMV",
                  "Margem de contribuição",
                ]}
                benefit="Quando o preço dos ingredientes muda, o gestor consegue identificar o impacto no custo e na margem do prato."
              />
            </div>

            <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="rounded-md border border-border bg-card p-5">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Exemplo conceitual · composição de um item
                </p>
                <p className="mb-3 text-base font-semibold text-foreground">
                  Hambúrguer
                </p>
                <ul className="mb-4 flex flex-wrap gap-2">
                  {["Pão", "Carne", "Queijo", "Molho", "Embalagem"].map((i) => (
                    <li
                      key={i}
                      className="rounded-sm border border-border bg-surface-alt px-2.5 py-1 text-xs font-medium text-foreground"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 border-l-2 border-brand bg-brand-soft px-3 py-2 text-sm font-semibold text-brand-strong">
                  <ArrowRight aria-hidden className="size-4 shrink-0 rotate-90" />
                  Custo real da porção
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  Estrutura conceitual da ficha técnica. Sem valores atribuídos.
                </p>
              </div>
              <ScreenMock
                title="Ficha técnica · estrutura de tela"
                rows={[
                  { label: "Ingredientes cadastrados", value: "—" },
                  { label: "Rendimento da receita", value: "—" },
                  { label: "Custo por porção", value: "—" },
                  { label: "Percentual de CMV", value: "—" },
                ]}
                total={{ label: "Margem de contribuição", value: "—" }}
              />
            </div>
            <ScopeNote />
          </Block>

          {/* 5 — Baixa automática */}
          <Block
            eyebrow="Destaque"
            title="Baixa automática do estoque a partir da venda"
            lead="A venda registrada consulta a ficha técnica e movimenta o estoque dos insumos correspondentes."
          >
            <div className="grid gap-4 lg:grid-cols-2">
              <Card className="space-y-4 border-l-2 border-l-brand">
                <p className="text-sm font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                  Produto com ficha técnica
                </p>
                <p className="text-base font-semibold text-foreground">
                  Venda de 1 prato de Strogonoff
                </p>
                <p className="flex items-center gap-2 text-sm text-muted-foreground">
                  <ArrowRight aria-hidden className="size-4 shrink-0 text-brand" />
                  O sistema consulta a ficha técnica e baixa automaticamente:
                </p>
                <ul className="flex flex-wrap gap-2">
                  {[
                    "Carne",
                    "Arroz",
                    "Creme de leite",
                    "Molho",
                    "Demais ingredientes definidos",
                  ].map((i) => (
                    <li
                      key={i}
                      className="rounded-sm border border-border bg-surface-alt px-2.5 py-1 text-xs font-medium text-foreground"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </Card>
              <Card className="space-y-4 border-l-2 border-l-brand">
                <p className="text-sm font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                  Produto vendido por unidade
                </p>
                <p className="text-base font-semibold text-foreground">
                  Venda de 1 refrigerante
                </p>
                <p className="flex items-center gap-2 text-sm text-muted-foreground">
                  <ArrowRight aria-hidden className="size-4 shrink-0 text-brand" />
                  Baixa automática de 1 unidade do estoque.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <RefreshCcw aria-hidden className="size-4 shrink-0 text-brand" />
                  Sem lançamento manual paralelo.
                </div>
              </Card>
            </div>
            <Statement>
              A venda alimenta o controle de estoque sem exigir lançamentos
              manuais repetitivos.
            </Statement>
            <ScopeNote>
              O comportamento da baixa automática depende da correta
              parametrização dos produtos e das fichas técnicas, e está
              disponível conforme configuração e módulos contratados.
            </ScopeNote>
          </Block>

          {/* 6 — Produção e transformação */}
          <Block
            eyebrow="Produção"
            title="Produtos que passam por transformação"
            lead="Insumos consumidos no preparo podem ser relacionados ao produto final vendido."
          >
            <FlowChain
              steps={["Matéria-prima", "Preparo", "Produto final", "Venda"]}
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <FeatureCard
                icon={Utensils}
                title="Acompanhamento da produção"
                items={[
                  "Relacionar insumos consumidos ao produto vendido",
                  "Registro do produto intermediário quando aplicável",
                  "Custo do produto final a partir dos insumos",
                ]}
                benefit="É possível acompanhar quanto custou produzir e quanto a venda efetivamente gerou de margem."
              />
              <ScreenMock
                title="Produção · estrutura de tela"
                rows={[
                  { label: "Insumos consumidos", value: "—" },
                  { label: "Produto final gerado", value: "—" },
                  { label: "Custo de produção", value: "—" },
                ]}
                total={{ label: "Margem na venda", value: "—" }}
              />
            </div>
            <ScopeNote />
          </Block>

          {/* 7 — Rastreamento do custo até a venda */}
          <Block
            eyebrow="Ponte para a análise"
            title="Rastreamento do custo de entrada até o resultado da saída"
            lead="O mesmo insumo comprado é acompanhado até virar margem — e depois resultado."
          >
            <div className="rounded-md border border-brand/40 bg-brand-soft/40 p-5 sm:p-6">
              <FlowChain steps={costTrace} />
            </div>
            <Statement>
              O sistema conecta o custo de entrada ao resultado da saída.
            </Statement>
            <ScopeNote />
          </Block>

          {/* 8 e 9 — App de mesas e fechamento */}
          <Block
            eyebrow="Atendimento"
            title="Do pedido na mesa à conclusão financeira da venda"
            lead="O atendimento registrado no salão segue até o fechamento, sem recomeçar o processo."
          >
            <div className="grid gap-4 lg:grid-cols-2">
              <Card className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-sm bg-brand-soft text-brand-strong">
                    <Smartphone aria-hidden className="size-4.5" />
                  </span>
                  <h4 className="text-base font-semibold text-foreground">
                    App de apoio ao atendimento das mesas
                  </h4>
                </div>
                <FlowChain
                  steps={[
                    "Garçom / atendente",
                    "Seleciona a mesa",
                    "Registra os itens",
                    "Pedido é encaminhado",
                    "Conta da mesa é atualizada",
                  ]}
                  emphasisLast={false}
                />
                <ul className="grid gap-1.5 sm:grid-cols-2">
                  {[
                    "Abertura da mesa",
                    "Inclusão de produtos",
                    "Inclusão de observações",
                    "Acompanhamento dos pedidos",
                    "Transferência de mesa, quando aplicável",
                    "Consulta da conta",
                    "Fechamento",
                  ].map((i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm leading-snug text-muted-foreground"
                    >
                      <span
                        aria-hidden
                        className="mt-2 size-1 shrink-0 rounded-full bg-brand"
                      />
                      {i}
                    </li>
                  ))}
                </ul>
                <p className="border-l-2 border-brand bg-brand-soft px-3 py-2 text-sm font-medium text-brand-strong">
                  Mais agilidade no atendimento e menor dependência de anotações
                  manuais.
                </p>
                <ScopeNote>
                  Apresentação conceitual do uso em dispositivo móvel. Não são
                  afirmadas integrações específicas; disponibilidade conforme
                  configuração e módulos contratados.
                </ScopeNote>
              </Card>

              <Card className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-sm bg-brand-soft text-brand-strong">
                    <Receipt aria-hidden className="size-4.5" />
                  </span>
                  <h4 className="text-base font-semibold text-foreground">
                    Fechamento da conta
                  </h4>
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  {["Fechamento na mesa", "Fechamento no caixa"].map((f) => (
                    <p
                      key={f}
                      className="rounded-sm border border-border bg-surface-alt px-3 py-2 text-center text-xs font-semibold uppercase tracking-[0.08em] text-foreground"
                    >
                      {f}
                    </p>
                  ))}
                </div>
                <ul className="grid gap-1.5 sm:grid-cols-2">
                  {[
                    "Conferência dos itens",
                    "Divisão da conta quando aplicável",
                    "Descontos autorizados",
                    "Acréscimos",
                    "Formas de pagamento",
                    "Conclusão da venda",
                    "Registro financeiro",
                  ].map((i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm leading-snug text-muted-foreground"
                    >
                      <span
                        aria-hidden
                        className="mt-2 size-1 shrink-0 rounded-full bg-brand"
                      />
                      {i}
                    </li>
                  ))}
                </ul>
                <p className="border-l-2 border-brand bg-brand-soft px-3 py-2 text-sm font-medium text-brand-strong">
                  O pedido iniciado na mesa acompanha o cliente até a conclusão
                  financeira da venda.
                </p>
                <ScopeNote />
              </Card>
            </div>
          </Block>

          {/* 10 e 11 — Tributação e financeiro */}
          <Block
            eyebrow="Fiscal e financeiro"
            title="Venda e gestão tributária trabalhando juntas"
            lead="A operação comercial e as regras fiscais aplicáveis são tratadas no mesmo fluxo, reduzindo retrabalho."
          >
            <div className="grid gap-4 lg:grid-cols-2">
              <FeatureCard
                icon={Landmark}
                title="Tributação"
                items={[
                  "Cadastro fiscal dos produtos",
                  "NCM",
                  "CST / CSOSN quando aplicável",
                  "CFOP quando aplicável",
                  "Alíquotas e regras fiscais",
                  "Parametrizações necessárias à emissão fiscal",
                  "Apoio à organização das informações para a contabilidade",
                ]}
                benefit="O objetivo é reduzir erros de parametrização e manter a operação comercial alinhada às regras fiscais aplicáveis."
              />
              <FeatureCard
                icon={Wallet}
                title="Financeiro"
                items={[
                  "Faturamento e recebimentos",
                  "Formas de pagamento",
                  "Contas a receber",
                  "Despesas",
                  "Fluxo financeiro",
                  "Comparação entre receita e custos",
                  "Acompanhamento de resultados",
                ]}
                benefit="O gestor deixa de observar somente o movimento do caixa e passa a acompanhar o resultado da operação."
              />
            </div>
            <ScopeNote>
              Os recursos fiscais apoiam a parametrização e a organização das
              informações conforme os módulos contratados. O sistema não
              substitui o contador nem consultoria tributária.
            </ScopeNote>
          </Block>

          {/* 12 — Gestão completa */}
          <Block
            eyebrow="Visão integrada"
            title="Gestão completa da operação"
            lead="Cada módulo registra uma parte da operação — e é a soma deles que produz leitura gerencial."
          >
            <div className="rounded-md border border-border bg-card p-5 sm:p-6">
              <ul className="flex flex-wrap items-center gap-2">
                {integratedModules.map((m, i) => (
                  <li key={m} className="flex items-center gap-2">
                    <span className="rounded-sm border border-border bg-surface-alt px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-foreground">
                      {m}
                    </span>
                    <span
                      aria-hidden
                      className="text-sm font-semibold text-brand"
                    >
                      {i === integratedModules.length - 1 ? "=" : "+"}
                    </span>
                  </li>
                ))}
                <li className="rounded-sm border border-brand bg-brand-soft px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-brand-strong">
                  Gestão integrada do restaurante
                </li>
              </ul>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <Statement>
                Cada operação registrada alimenta a próxima etapa da gestão.
              </Statement>
              <Statement>
                O objetivo não é apenas registrar vendas. É entender o caminho
                completo do dinheiro, do estoque e da margem.
              </Statement>
            </div>
            <ScopeNote />
          </Block>

          {/* 13 — Transição para a parte analítica */}
          <Reveal as="div" className="scroll-mt-28">
            <div className="rounded-md border border-brand/40 bg-brand-soft/40 p-6 sm:p-8">
              <Eyebrow>Transição</Eyebrow>
              <h3 className="mt-3 max-w-3xl text-balance text-2xl font-semibold leading-tight text-foreground sm:text-[2rem]">
                Depois de controlar a operação, é possível analisar o resultado.
              </h3>
              <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
                <ArrowRight aria-hidden className="size-4 shrink-0 rotate-90 text-brand" />
                <span>O que passa a ser analisado a partir daqui:</span>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {analyticBridge.map((a) => (
                  <li
                    key={a}
                    className="rounded-sm border border-border bg-card px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-foreground"
                  >
                    {a}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#analise"
                  className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-strong"
                >
                  <BarChart3 aria-hidden className="size-4" />
                  Veja como os dados ajudam na tomada de decisão
                </a>
                <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                  <Layers aria-hidden className="size-4 shrink-0" />
                  Segue para o diagnóstico financeiro
                </span>
              </div>
            </div>
          </Reveal>

          {/* Nota geral de escopo */}
          <div className="grid gap-3 rounded-md border border-border bg-surface-alt p-5 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-start">
            <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-sm bg-card text-muted-foreground">
              <ClipboardList aria-hidden className="size-4.5" />
            </span>
            <div className="space-y-1.5">
              <p className="text-sm font-semibold text-foreground">
                Sobre esta apresentação
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Esta área descreve operações e benefícios gerenciais do sistema
                em caráter comercial e conceitual. A disponibilidade de cada
                recurso segue a configuração, a parametrização e os módulos
                contratados; telas exibidas são representações de estrutura, sem
                dados reais. Recursos que dependam de parametrização ou de
                evolução do produto são apresentados como tal, e não como
                comportamento automático garantido.
              </p>
              <p className="flex flex-wrap items-center gap-2 pt-1 text-xs text-muted-foreground">
                <CreditCard aria-hidden className="size-3.5" />
                Formas de pagamento, emissão fiscal e demais recursos regulados
                seguem as regras aplicáveis a cada operação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
