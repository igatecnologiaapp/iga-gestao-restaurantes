import {
  Block,
  Card,
  Chapter,
  CTAButtons,
  Statement,
} from "@/components/site/primitives";
import { managementQuestions } from "@/data/illustrative";

const pipeline = [
  ["Dado", "Registro do que acontece na operação."],
  ["Organização", "Informação consolidada e comparável."],
  ["Indicador", "Leitura objetiva de um aspecto do resultado."],
  ["Análise", "Relação de causa e efeito entre indicadores."],
  ["Decisão", "Ação sobre preço, custo, mix, compra ou processo."],
  ["Resultado", "Efeito medido no período seguinte."],
];

export function Chapter6() {
  return (
    <Chapter number="Capítulo 6" title="Da pergunta à decisão">
      {/* 26 */}
      <Block
        eyebrow="Seção 26 · Perguntas da gestão"
        title="As perguntas que a gestão precisa responder"
        lead="Se alguma destas perguntas não tem resposta objetiva hoje, existe uma decisão sendo tomada sem informação."
      >
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {managementQuestions.map((q, i) => (
            <li key={q}>
              <Card className="h-full">
                <span className="num text-xs font-semibold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm text-foreground">{q}</p>
              </Card>
            </li>
          ))}
        </ul>
        <CTAButtons primary="Quero responder essas perguntas com dados" />
      </Block>

      {/* 27 */}
      <Block
        eyebrow="Seção 27 · Do dado à decisão"
        title="O dado só tem valor quando vira decisão"
        lead="Este é o percurso completo. A tecnologia atua nas três primeiras etapas; a decisão continua sendo gerencial."
      >
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {pipeline.map(([t, d], i) => (
            <li key={t}>
              <Card className="h-full border-l-2 border-l-brand">
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
          A tecnologia é o meio. A decisão gerencial é o objetivo.
        </Statement>
      </Block>
    </Chapter>
  );
}
