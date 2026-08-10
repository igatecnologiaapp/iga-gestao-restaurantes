/**
 * DADOS ILUSTRATIVOS
 * Todos os números deste módulo são exemplos criados apenas para
 * demonstração gerencial. Não representam clientes, resultados,
 * médias de mercado ou dados reais de nenhuma operação.
 * Base aprovada: faturamento mensal R$ 150.000; percentual de CMV
 * 38% × 34%; prato de R$ 50 com custo de ingredientes de R$ 18.
 */

export const BASE_REVENUE = 150000;

export type FlowStep = {
  label: string;
  subtracted?: number;
  remaining: number;
};

export const moneyFlow: FlowStep[] = [
  { label: "Faturamento", remaining: 150000 },
  { label: "Descontos", subtracted: 3000, remaining: 147000 },
  { label: "Tributos", subtracted: 8800, remaining: 138200 },
  { label: "CMV", subtracted: 57000, remaining: 81200 },
  { label: "Perdas e desperdícios", subtracted: 3600, remaining: 77600 },
  { label: "Taxas e comissões", subtracted: 6200, remaining: 71400 },
  { label: "Folha", subtracted: 34000, remaining: 37400 },
  { label: "Custos fixos", subtracted: 12500, remaining: 24900 },
  { label: "Custos variáveis", subtracted: 5400, remaining: 19500 },
  { label: "Despesas operacionais", subtracted: 6000, remaining: 13500 },
  { label: "Resultado", remaining: 13500 },
];

export type Scenario = {
  name: string;
  revenue: number;
  margin: number;
  contribution: number;
  highlight: "positive" | "negative";
};

export const scenarios: Scenario[] = [
  {
    name: "Cenário A",
    revenue: 100000,
    margin: 20,
    contribution: 20000,
    highlight: "positive",
  },
  {
    name: "Cenário B",
    revenue: 120000,
    margin: 14,
    contribution: 16800,
    highlight: "negative",
  },
];

export type TreeBranch = {
  id: string;
  question: string;
  leaves: { label: string; check: string }[];
};

export const diagnosticBranches: TreeBranch[] = [
  {
    id: "faturamento",
    question: "Faturamento caiu?",
    leaves: [
      { label: "Nº de clientes/pedidos", check: "Comparar a quantidade de pedidos entre períodos equivalentes." },
      { label: "Ticket Médio", check: "Verificar faturamento dividido pelo número de pedidos/vendas." },
      { label: "Canal", check: "Separar salão, balcão e delivery antes de concluir." },
      { label: "Sazonalidade", check: "Comparar o mesmo período do ano anterior, não apenas o mês anterior." },
      { label: "Mix de produtos", check: "Observar quais categorias perderam participação nas vendas." },
    ],
  },
  {
    id: "custos",
    question: "Custos aumentaram?",
    leaves: [
      { label: "Fornecedor", check: "Comparar preços praticados pelo mesmo item entre fornecedores." },
      { label: "Ingredientes", check: "Acompanhar a variação de preço dos insumos de maior peso." },
      { label: "Compras", check: "Revisar frequência, volume e condição comercial das compras." },
      { label: "Desperdício", check: "Registrar o que foi perdido, onde e por qual motivo." },
      { label: "Porcionamento", check: "Confrontar o consumo real com a ficha técnica." },
    ],
  },
  {
    id: "margem",
    question: "Margem diminuiu?",
    leaves: [
      { label: "Preço", check: "Verificar se o preço de venda acompanhou a variação de custo." },
      { label: "Descontos", check: "Medir o volume de desconto concedido e seu efeito na margem." },
      { label: "Mix de produtos", check: "Identificar se cresceu a venda de itens de baixa margem." },
      { label: "Promoções", check: "Avaliar a margem gerada durante e após a promoção." },
      { label: "Delivery", check: "Calcular o resultado do pedido já com taxas e embalagem." },
    ],
  },
  {
    id: "despesas",
    question: "Despesas aumentaram?",
    leaves: [
      { label: "Folha", check: "Comparar custo de pessoal com o faturamento do período." },
      { label: "Energia", check: "Acompanhar consumo por período e por turno de operação." },
      { label: "Taxas", check: "Conferir taxas de cartão, canais e serviços contratados." },
      { label: "Aluguel", check: "Medir o peso do aluguel sobre o faturamento." },
      { label: "Serviços", check: "Revisar contratos recorrentes e sua utilização real." },
      { label: "Tributos", check: "Conferir a apuração junto à contabilidade responsável." },
    ],
  },
  {
    id: "perdas",
    question: "Perdas aumentaram?",
    leaves: [
      { label: "Estoque", check: "Confrontar saldo registrado com contagem física." },
      { label: "Produção", check: "Registrar sobras, erros de preparo e retrabalho." },
      { label: "Comercial", check: "Acompanhar cancelamentos, cortesias e devoluções." },
      { label: "Financeira", check: "Revisar divergências de recebimento e conciliação." },
      { label: "Tributária", check: "Verificar créditos e enquadramentos com a contabilidade." },
    ],
  },
];

export const cmvCauses = [
  { cause: "Preço de venda", note: "Não altera o custo, mas altera o percentual de CMV.", branch: "margem" },
  { cause: "Descontos", note: "Reduzem a receita e elevam o percentual de CMV.", branch: "margem" },
  { cause: "Promoções", note: "Elevam o percentual de CMV quando não há ganho de margem.", branch: "margem" },
  { cause: "Preço de compra", note: "Aumenta o custo da mercadoria vendida.", branch: "custos" },
  { cause: "Desperdício", note: "Consome insumo sem gerar receita.", branch: "perdas" },
  { cause: "Erro de porcionamento", note: "Consumo acima do previsto na ficha técnica.", branch: "custos" },
  { cause: "Divergência de estoque", note: "Saldo registrado diferente do saldo físico.", branch: "perdas" },
  { cause: "Ficha técnica desatualizada", note: "Custo esperado deixa de refletir a realidade.", branch: "custos" },
  { cause: "Perdas de produção", note: "Erros de preparo, sobras e retrabalho.", branch: "perdas" },
  { cause: "Compras mal negociadas", note: "Condição comercial pior que a possível.", branch: "custos" },
];

export const lossCategories = [
  {
    name: "Perdas de estoque",
    items: ["Validade vencida", "Armazenagem inadequada", "Divergência de contagem", "Quebra e avaria"],
  },
  {
    name: "Perdas de produção",
    items: ["Erro de preparo", "Sobra de produção", "Retrabalho", "Porcionamento acima da ficha"],
  },
  {
    name: "Perdas comerciais",
    items: ["Cancelamentos", "Cortesias sem controle", "Devoluções", "Descontos não analisados"],
  },
  {
    name: "Perdas financeiras",
    items: ["Divergência de recebimento", "Taxas não conferidas", "Falta de conciliação", "Juros por atraso"],
  },
  {
    name: "Perdas tributárias",
    items: ["Créditos não aproveitados", "Enquadramento inadequado", "Erros de apuração", "Documentos ausentes"],
  },
];

export const kpis = [
  { label: "Faturamento", value: "R$ 150.000", variation: "+4,2%", tone: "positive" as const },
  { label: "Percentual de CMV", value: "38%", variation: "+2,1 p.p.", tone: "negative" as const },
  { label: "Ticket Médio", value: "R$ 62", variation: "+3,1%", tone: "positive" as const },
  { label: "Margem de contribuição", value: "42%", variation: "−2,4 p.p.", tone: "negative" as const },
  { label: "Perdas identificadas", value: "R$ 3.600", variation: "+8,0%", tone: "negative" as const },
  { label: "Ponto de equilíbrio", value: "R$ 132.000", variation: "+1,6%", tone: "warning" as const },
  { label: "Giro de estoque", value: "4,1×", variation: "−0,3×", tone: "warning" as const },
  { label: "Resultado", value: "R$ 13.500", variation: "−6,5%", tone: "negative" as const },
];

export const dreRows = [
  { label: "Receita bruta", value: 150000, level: 0, strong: true },
  { label: "(−) Descontos", value: -3000, level: 1 },
  { label: "(−) Tributos sobre venda", value: -8800, level: 1 },
  { label: "= Receita líquida", value: 138200, level: 0, strong: true },
  { label: "(−) CMV", value: -57000, level: 1 },
  { label: "= Margem bruta", value: 81200, level: 0, strong: true },
  { label: "(−) Perdas e desperdícios", value: -3600, level: 1 },
  { label: "(−) Taxas e comissões", value: -6200, level: 1 },
  { label: "= Margem de contribuição", value: 71400, level: 0, strong: true },
  { label: "(−) Folha", value: -34000, level: 1 },
  { label: "(−) Custos fixos", value: -12500, level: 1 },
  { label: "(−) Custos variáveis", value: -5400, level: 1 },
  { label: "(−) Despesas operacionais", value: -6000, level: 1 },
  { label: "= Resultado", value: 13500, level: 0, strong: true },
];

export const managementQuestions = [
  "Qual é o custo real de cada prato?",
  "Quais produtos sustentam a margem?",
  "Quais produtos apenas ocupam espaço no cardápio?",
  "Qual é o percentual de CMV do período?",
  "Qual é o desvio entre o CMV teórico e o real?",
  "Onde a perda está acontecendo?",
  "Qual é a margem de contribuição por canal?",
  "Quanto precisa ser vendido para pagar as contas?",
  "O Ticket Médio cresceu com margem ou sem margem?",
  "O delivery está contribuindo ou consumindo margem?",
  "Os preços acompanharam a variação de custo?",
  "Quanto de capital está parado em estoque?",
  "Quais fornecedores estão praticando o melhor custo total?",
  "Qual indicador saiu da meta definida pelo restaurante?",
  "Qual decisão precisa ser tomada nesta semana?",
];
