import { useState } from "react";
import { Block, Card, Chapter, CTAButtons, IllustrativeBadge } from "@/components/site/primitives";

const methodology = [
  ["Entender", "Analisamos a operação."],
  ["Organizar", "Estruturamos processos e dados."],
  ["Integrar", "Tecnologia, operação e indicadores."],
  ["Acompanhar", "Transformamos informação em apoio à decisão."],
];

/**
 * Formulário APENAS DEMONSTRATIVO.
 * Não existe backend, banco de dados, e-mail, WhatsApp, CRM ou qualquer
 * integração. Nada é enviado, transmitido ou armazenado, e nenhuma
 * confirmação de envio é exibida.
 */
function ConceptualContactForm() {
  const [touched, setTouched] = useState(false);

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        setTouched(true);
      }}
      className="rounded-md border border-border bg-card p-5 sm:p-6"
    >
      <div className="mb-5 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
        <p className="min-w-0 truncate text-sm font-semibold uppercase tracking-[0.1em] text-muted-foreground">
          Formulário demonstrativo
        </p>
        <IllustrativeBadge className="shrink-0" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {[
          ["Nome", "text", "nome"],
          ["Restaurante", "text", "restaurante"],
          ["Cidade", "text", "cidade"],
          ["Telefone", "tel", "telefone"],
          ["E-mail", "email", "email"],
        ].map(([label, type, name]) => (
          <label key={name} className="block space-y-1.5">
            <span className="text-sm font-medium text-foreground">{label}</span>
            <input
              type={type}
              name={name}
              autoComplete="off"
              className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-brand focus:ring-2 focus:ring-ring/30"
            />
          </label>
        ))}
        <label className="block space-y-1.5 sm:col-span-2">
          <span className="text-sm font-medium text-foreground">
            O que você gostaria de entender sobre a sua operação?
          </span>
          <textarea
            name="mensagem"
            rows={4}
            className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-brand focus:ring-2 focus:ring-ring/30"
          />
        </label>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-strong"
        >
          Enviar solicitação
        </button>
        <span className="text-xs text-muted-foreground">
          Interface demonstrativa · sem transmissão de dados
        </span>
      </div>

      <p className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
        Este formulário é apenas demonstrativo. Ele não envia, não transmite e
        não armazena nenhuma informação. Nenhuma mensagem será recebida pela IGA
        Tecnologia enquanto um meio oficial de recebimento não for definido e
        autorizado.
      </p>

      {touched ? (
        <p className="mt-3 rounded-md border border-signal-warning/40 bg-signal-warning-soft px-4 py-3 text-xs font-medium text-signal-warning">
          Nada foi enviado. Esta interface é demonstrativa e não possui canal de
          recebimento ativo.
        </p>
      ) : null}
    </form>
  );
}

/* Seção 12 — IGA Tecnologia + CTA */
export function SectionIga() {
  return (
    <Chapter
      id="iga"
      number="Seção 12"
      title="IGA Tecnologia — Automação & Tecnologia"
      kicker="Institucional"
    >
      <Block
        id="contato"
        eyebrow="Metodologia e contato"
        title="Vamos entender juntos onde está o resultado da sua operação"
        lead="Gestão inteligente, análise de dados e tecnologia aplicadas à rentabilidade de restaurantes: entender a operação, organizar a informação e apoiar a decisão."
      >
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {methodology.map(([t, d], i) => (
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

        <CTAButtons
          primary="Quero conhecer melhor os números do meu restaurante"
          secondary="Agendar uma apresentação"
        />

        <ConceptualContactForm />

        <p className="max-w-3xl border-l-2 border-border pl-4 text-sm text-muted-foreground">
          Nenhum dado institucional, cliente, case, resultado ou integração é
          apresentado nesta versão sem informação oficial da IGA Tecnologia.
        </p>
      </Block>
    </Chapter>
  );
}
