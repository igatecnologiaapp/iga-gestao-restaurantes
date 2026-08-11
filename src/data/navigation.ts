export type NavItem = {
  label: string;
  anchor: string;
  chapter: string;
};

/** Menu reduzido — âncoras das grandes seções da Home única. */
export const navItems: NavItem[] = [
  { label: "Início", anchor: "inicio", chapter: "Gestão completa" },
  { label: "Sistema", anchor: "sistema", chapter: "Da compra à venda" },
  { label: "Gestão inteligente", anchor: "analise", chapter: "Da operação à decisão" },
  { label: "Indicadores", anchor: "indicadores", chapter: "Saúde do restaurante" },
  { label: "Rentabilidade", anchor: "rentabilidade", chapter: "Cardápio e canais" },
  { label: "Resultados", anchor: "lucro", chapter: "Do faturamento ao lucro" },
  { label: "Contato", anchor: "iga", chapter: "IGA Tecnologia" },
];
