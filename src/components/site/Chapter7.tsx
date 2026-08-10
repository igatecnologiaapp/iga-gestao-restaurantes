import {
  Block,
  Card,
  Chapter,
  CTAButtons,
  Statement,
} from "@/components/site/primitives";

const capabilities = [
  {
    group: "Controle",
    items: [
      "Ficha técnica e custo por prato",
      "Registro de perdas e desperdícios",
      "Controle de estoque e contagem",
      "Organização de compras e fornecedores",
    ],
  },
  {
    group: "Análise",
    items: [
      "Percentual de CMV, teórico e real",
      "Margem de contribuição por item e canal",
      "Comparação entre períodos",
      "Engenharia de cardápio",
    ],
  },
  {
    group: "Automação",
    items: [
      "Consolidação de informações operacionais",
      "Rotinas recorrentes de conferência",
      "Padronização de registros",
      "Alertas por parâmetro definido",
    ],
  },
  {
    group: "Decisão",
    items: [
      "Painel gerencial de indicadores",
      "DRE gerencial",
      "Leitura de causa e efeito",
      "Apoio à precificação",
    ],
  },
];

const beforeAfter = [
  ["Resultado conhecido apenas no fim do mês", "Acompanhamento contínuo do resultado"],
  ["Preço definido por percepção", "Preço definido por custo e margem"],
  ["Perda percebida, não medida", "Perda registrada e quantificada"],
  ["Informação dispersa em planilhas", "Informação consolidada e comparável"],
  ["Decisão por intuição", "Decisão por indicador e análise"],
  ["Cardápio como lista de pratos", "Cardápio como ferramenta de rentabilidade"],
];

const methodology = [
  ["Diagnóstico", "Entendimento da operação, do cardápio e dos controles existentes."],
  ["Estruturação", "Organização das informações necessárias para medir o resultado."],
  ["Implantação", "Definição de rotinas e registros com a equipe do restaurante."],
  ["Análise", "Leitura conjunta dos indicadores e das relações entre eles."],
  ["Decisão", "Priorização das ações de maior efeito sobre a margem."],
  ["Acompanhamento", "Verificação do efeito das decisões nos períodos seguintes."],
];

export function Chapter7() {
  return (
    <Chapter
      id="tecnologia"
      number="Capítulo 7"
      title="Tecnologia e transformação"
      tone="alt"
    >
      {/* 28 */}
      <Block
        eyebrow="Seção 28 · Tecnologia personalizada"
        title="Tecnologia organizada por objetivo gerencial"
        lead="A tecnologia não é o ponto de partida da conversa. Ela existe para sustentar o controle, a análise e a decisão demonstrados até aqui."
        footnote="Automações e integrações dependem da análise prévia do ambiente tecnológico do restaurante. Nenhuma integração é assumida como disponível antes dessa avaliação."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c) => (
            <Card key={c.group} className="h-full border-t-2 border-t-brand">
              <p className="text-base font-semibold text-foreground">{c.group}</p>
              <ul className="mt-2 space-y-1">
                {c.items.map((i) => (
                  <li key={i} className="text-sm text-muted-foreground">
                    {i}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Block>

      {/* 29 */}
      <Block
        eyebrow="Seção 29 · Antes × Depois"
        title="A mudança está no modo de gerir, não apenas na ferramenta"
        lead="Contraste entre dois cenários de gestão. Não se trata de promessa de resultado, mas de mudança de método."
      >
        <div className="overflow-hidden rounded-md border border-border">
          <div className="grid grid-cols-2 border-b border-border bg-muted text-xs uppercase tracking-[0.12em] text-muted-foreground">
            <p className="px-4 py-3">Gestão sem informação</p>
            <p className="border-l border-border px-4 py-3">Gestão com informação</p>
          </div>
          <ul>
            {beforeAfter.map(([before, after]) => (
              <li key={before} className="grid grid-cols-2 border-b border-border last:border-b-0">
                <p className="px-4 py-3 text-sm text-muted-foreground">{before}</p>
                <p className="border-l border-border px-4 py-3 text-sm font-medium text-foreground">
                  {after}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Block>

      {/* 30 */}
      <Block
        eyebrow="Seção 30 · Metodologia"
        title="Como a IGA Tecnologia conduz o trabalho"
        lead="Seis etapas, na ordem em que produzem efeito sobre o resultado."
      >
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {methodology.map(([t, d], i) => (
            <li key={t}>
              <Card className="h-full">
                <span className="num text-xs font-semibold text-brand">
                  Etapa {i + 1}
                </span>
                <p className="mt-1.5 text-base font-semibold text-foreground">{t}</p>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </Card>
            </li>
          ))}
        </ol>
        <Statement>
          Primeiro entender a operação. Depois medir. Só então decidir.
        </Statement>
        <CTAButtons primary="Quero um diagnóstico da minha operação" />
      </Block>
    </Chapter>
  );
}
