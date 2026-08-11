import {
  Boxes,
  CreditCard,
  FileSpreadsheet,
  Landmark,
  RefreshCcw,
  ShoppingCart,
  Utensils,
} from "lucide-react";
import { Block, Card, Chapter, Statement } from "@/components/site/primitives";
import {
  FeatureCard,
  FlowChain,
  PillRow,
  ScopeNote,
  ScreenMock,
} from "@/components/site/blocks";

const mainFlow = [
  "Compra",
  "Entrada no estoque",
  "Atualização de custo",
  "Ficha técnica",
  "Produção / venda",
  "Baixa automática",
  "Atendimento / mesas",
  "Fechamento",
  "Fiscal",
  "Financeiro",
];

/* Seção 2 — Sistema de gestão: da compra à venda */
export function SectionSystem() {
  return (
    <Chapter
      id="sistema"
      number="Seção 02"
      title="Sistema de gestão — da compra à venda"
      kicker="Operação"
    >
      <Block
        eyebrow="Fluxo operacional"
        title="Cada operação registrada alimenta a próxima etapa da gestão"
        lead="Do insumo comprado ao registro financeiro da venda, a informação segue no mesmo fluxo — sem recomeçar o processo em cada etapa."
      >
        <FlowChain steps={mainFlow} />
        <div className="grid gap-4 lg:grid-cols-2">
          <Card className="space-y-3 border-l-2 border-l-brand">
            <p className="text-sm font-semibold uppercase tracking-[0.1em] text-muted-foreground">
              Venda com ficha técnica
            </p>
            <p className="text-base font-semibold text-foreground">
              1 prato vendido → baixa dos insumos da receita
            </p>
            <PillRow items={["Carne", "Arroz", "Creme de leite", "Molho"]} />
          </Card>
          <Card className="space-y-3 border-l-2 border-l-brand">
            <p className="text-sm font-semibold uppercase tracking-[0.1em] text-muted-foreground">
              Venda por unidade
            </p>
            <p className="text-base font-semibold text-foreground">
              1 refrigerante → baixa de 1 unidade do estoque
            </p>
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <RefreshCcw aria-hidden className="size-4 shrink-0 text-brand" />
              Sem lançamento manual paralelo.
            </p>
          </Card>
        </div>
        <Statement>
          Cada operação registrada alimenta a próxima etapa da gestão.
        </Statement>
        <ScopeNote>
          O comportamento da baixa automática depende da correta parametrização
          dos produtos e das fichas técnicas, e está disponível conforme
          configuração e módulos contratados.
        </ScopeNote>
      </Block>
    </Chapter>
  );
}

/* Seção 3 — Operação na prática (5 grupos) */
export function SectionOperation() {
  return (
    <Chapter
      id="operacao"
      number="Seção 03"
      title="Operação na prática"
      kicker="Módulos"
      tone="alt"
    >
      <Block
        eyebrow="Cinco grupos"
        title="O que o sistema controla, em cinco frentes"
        lead="Os módulos existem para registrar a operação com o mesmo critério todos os dias — é isso que torna a análise possível depois."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={ShoppingCart}
            title="Compras"
            items={["Fornecedores", "Quantidades", "Custos", "Histórico de preços"]}
            benefit="Acompanhar quanto está sendo pago e identificar aumentos que afetam a margem."
          />
          <FeatureCard
            icon={Boxes}
            title="Estoque"
            items={["Entradas", "Saídas", "Saldo", "Validade", "Inventário", "Perdas"]}
            benefit="Saber o que entrou, o que foi consumido e o que deveria estar no estoque."
          />
          <FeatureCard
            icon={FileSpreadsheet}
            title="Produção e ficha técnica"
            items={[
              "Ingredientes e quantidades",
              "Rendimento",
              "Custo da receita",
              "Custo por porção",
              "Baixa automática",
            ]}
            benefit="Custo do prato calculado, não estimado."
          />
          <FeatureCard
            icon={Utensils}
            title="Atendimento e caixa"
            items={[
              "Mesas",
              "Pedidos",
              "Fechamento na mesa ou no caixa",
              "Formas de pagamento",
            ]}
            benefit="O pedido iniciado na mesa segue até a conclusão financeira da venda."
          />
          <FeatureCard
            icon={Landmark}
            title="Fiscal e financeiro"
            items={[
              "Parametrizações tributárias",
              "Registros financeiros",
              "Faturamento",
              "Recebimentos",
              "Despesas",
            ]}
            benefit="Operação comercial alinhada às regras fiscais aplicáveis e ao resultado."
          />
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
        <ScopeNote>
          Telas exibidas são representações de estrutura, sem dados reais. Os
          recursos fiscais apoiam a parametrização e a organização das
          informações conforme os módulos contratados: o sistema não substitui o
          contador nem consultoria tributária.
        </ScopeNote>
        <p className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <CreditCard aria-hidden className="size-3.5" />
          Formas de pagamento, emissão fiscal e demais recursos regulados seguem
          as regras aplicáveis a cada operação.
        </p>
      </Block>
    </Chapter>
  );
}
