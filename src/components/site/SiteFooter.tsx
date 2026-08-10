import { BrandSlot } from "@/components/site/SiteHeader";

export function SiteFooter() {
  return (
    <footer className="bg-surface-alt py-12">
      <div className="mx-auto w-full max-w-6xl space-y-8 px-5 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-start">
          <BrandSlot />
          <div className="min-w-0 space-y-2">
            <p className="text-sm font-semibold text-foreground">
              IGA Tecnologia — Automação &amp; Tecnologia
            </p>
            <p className="max-w-2xl text-sm text-muted-foreground">
              Gestão inteligente, análise de dados e tecnologia para
              restaurantes. Apresentação comercial consultiva.
            </p>
          </div>
        </div>

        <p className="border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
          <strong className="font-semibold text-foreground">
            Aviso — dados ilustrativos:
          </strong>{" "}
          todos os números, indicadores, gráficos, simulações, comparações e
          demonstrações apresentados nesta página são exemplos criados
          exclusivamente para fins de demonstração gerencial. Não representam
          dados reais, clientes, resultados obtidos, médias de mercado ou
          garantia de desempenho. Qualquer efeito indicado é potencial e está
          sujeito às demais despesas e às condições específicas de cada
          operação. As análises tributárias apresentadas não substituem o
          contador responsável.
        </p>

        <p className="text-xs text-muted-foreground">
          A tecnologia é o meio. A decisão gerencial é o objetivo.
        </p>
      </div>
    </footer>
  );
}
