export type NavItem = {
  label: string;
  anchor: string;
  chapter: string;
};

/** Menu reduzido — âncoras das grandes seções da Home única. */
export const navItems: NavItem[] = [
  { label: "Início", anchor: "inicio", chapter: "Gestão completa" },
  { label: "Sistema", anchor: "sistema", chapter: "Da compra à venda" },
  { label: "Operação", anchor: "operacao", chapter: "Operação na prática" },
  { label: "Custo → Resultado", anchor: "custos", chapter: "Do custo ao resultado" },
  { label: "Análise", anchor: "analise", chapter: "Gestão inteligente" },
  { label: "Indicadores", anchor: "indicadores", chapter: "Saúde do restaurante" },
  { label: "Rentabilidade", anchor: "rentabilidade", chapter: "Cardápio e canais" },
  { label: "Lucro real", anchor: "lucro", chapter: "Do faturamento ao lucro" },
  { label: "Integração", anchor: "integracao", chapter: "O ganho da integração" },
  { label: "Contato", anchor: "iga", chapter: "IGA Tecnologia" },
];
