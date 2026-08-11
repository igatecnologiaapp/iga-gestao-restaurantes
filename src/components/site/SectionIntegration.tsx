import { Block, Card, Chapter, Statement } from "@/components/site/primitives";
import { PillRow, ScopeNote } from "@/components/site/blocks";

const layers = [
  {
    title: "Sistema de gestão",
    verbs: ["Registra", "Controla", "Organiza", "Movimenta"],
    tone: "border-t-border",
  },
  {
    title: "Análise de dados",
    verbs: ["Compara", "Identifica", "Interpreta", "Alerta"],
    tone: "border-t-border",
  },
  {
    title: "Gestão inteligente",
    verbs: ["Decide", "Corrige", "Acompanha", "Melhora"],
    tone: "border-t-brand",
  },
];

const integrationExamples = [
  ["Compra registrada", "atualiza o custo do insumo"],
  ["Custo atualizado", "altera o custo da ficha técnica"],
  ["Venda realizada", "baixa o estoque"],
  ["Estoque real × teórico", "identifica o desvio"],
  ["Venda + custo", "calcula a margem"],
  ["Operação + financeiro", "permite analisar o resultado"],
  ["Dados históricos", "permitem comparação e alertas"],
];

const beforeAfter = [
  ["Resultado conhecido apenas no fim do mês", "Acompanhamento contínuo do resultado"],
  ["Preço definido por percepção", "Preço definido por custo e margem"],
  ["Perda percebida, não medida", "Perda registrada e quantificada"],
  ["Informação dispersa em planilhas", "Informação consolidada e comparável"],
  ["Decisão por intuição", "Decisão por indicador e análise"],
];

/* Seção 11 — O ganho da integração */
export function SectionIntegration() {
  return (
    <Chapter
      id="integracao"
      number="Seção 11"
      title="O ganho da integração"
      kicker="Valor"
      tone="alt"
    >
      <Block
        eyebrow="Duas camadas, uma gestão"
        title="O valor está na integração"
        lead="O sistema registra o que acontece. A análise mostra o que isso significa. A gestão transforma a informação em decisão."
      >
        <div className="grid items-stretch gap-3 lg:grid-cols-3">
          {layers.map((l) => (
            <Card key={l.title} className={`h-full border-t-2 ${l.tone}`}>
              <p className="text-base font-semibold text-foreground">{l.title}</p>
              <div className="mt-3">
                <PillRow items={l.verbs} />
              </div>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-md border border-border bg-card p-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Exemplos de integração
            </p>
            <ul className="divide-y divide-border">
              {integrationExamples.map(([a, b]) => (
                <li key={a} className="grid gap-1 py-2.5 sm:grid-cols-2 sm:gap-3">
                  <span className="text-sm font-medium text-foreground">{a}</span>
                  <span className="text-sm text-muted-foreground">→ {b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden rounded-md border border-border">
              <div className="grid grid-cols-2 border-b border-border bg-muted text-xs uppercase tracking-[0.12em] text-muted-foreground">
                <p className="px-4 py-3">Gestão sem informação</p>
                <p className="border-l border-border px-4 py-3">
                  Gestão com informação
                </p>
              </div>
              <ul>
                {beforeAfter.map(([before, after]) => (
                  <li
                    key={before}
                    className="grid grid-cols-2 border-b border-border last:border-b-0"
                  >
                    <p className="px-4 py-3 text-sm text-muted-foreground">{before}</p>
                    <p className="border-l border-border px-4 py-3 text-sm font-medium text-foreground">
                      {after}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <ScopeNote>
              Tecnologia, automações e integrações dependem da análise prévia do
              ambiente tecnológico do restaurante e seguem a configuração,
              parametrização e os módulos contratados. Melhor controle e melhores
              informações criam melhores condições de decisão — não há promessa
              de aumento garantido de lucro.
            </ScopeNote>
          </div>
        </div>

        <Statement>
          Dado → organização → indicador → análise → decisão → resultado.
        </Statement>
      </Block>
    </Chapter>
  );
}
