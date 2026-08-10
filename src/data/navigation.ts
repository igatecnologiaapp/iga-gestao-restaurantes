export type NavItem = {
  label: string;
  anchor: string;
  chapter: string;
};

/** 8 itens de menu -> 8 capítulos visuais da Home única. */
export const navItems: NavItem[] = [
  { label: "Início", anchor: "inicio", chapter: "Diagnóstico financeiro" },
  { label: "CMV", anchor: "cmv", chapter: "CMV e precificação" },
  { label: "Perdas", anchor: "perdas", chapter: "Perdas, estoque e giro" },
  { label: "Lucro", anchor: "lucro", chapter: "Margem, equilíbrio e canais" },
  { label: "Indicadores", anchor: "indicadores", chapter: "DRE e indicadores" },
  { label: "Tecnologia", anchor: "tecnologia", chapter: "Tecnologia e transformação" },
  { label: "IGA Tecnologia", anchor: "iga", chapter: "Institucional" },
  { label: "Contato", anchor: "contato", chapter: "Contato" },
];
