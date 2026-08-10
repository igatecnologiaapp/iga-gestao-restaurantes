# Proposta Técnica e Funcional Revisada — R2
## IGA Tecnologia | Gestão Inteligente para Restaurantes

Documento revisado conforme a Resposta Formal recebida. **Nenhuma implementação foi realizada** (confirmação formal no item 20).

---

## 1. Entendimento revisado do objetivo comercial

O site é uma **ferramenta de apresentação comercial consultiva**, não um catálogo de recursos de software. Seu papel é conduzir o proprietário ou gestor de restaurante por uma linha de raciocínio financeira sobre a própria operação, até que ele reconheça lacunas no próprio controle. Só ao final a tecnologia da IGA aparece, como meio de resolver o que já foi demonstrado como problema.

Uso primário: reunião presencial, com o representante rolando a página junto do cliente. Uso secundário: divulgação digital e envio de link.

Frase-guia adotada em toda a peça: **“A tecnologia é o meio. A decisão gerencial é o objetivo.”**

Consequências práticas dessa definição:
- rolagem contínua, sem trocas de página que quebrem o raciocínio;
- cada seção sustenta uma única ideia, explicável em 30–60 segundos de fala;
- perguntas gerenciais antes de afirmações sobre produto;
- nenhuma promessa de resultado.

## 2. Arquitetura de página única

Aprovada a alteração. A arquitetura passa a ser:

- **Uma Home única** (`/`), longa, contínua, navegável por âncoras.
- Menu fixo com 8 itens que rolam suavemente até a âncora correspondente.
- Nenhuma rota temática nesta versão. As rotas `/perdas`, `/cmv`, `/lucro` etc. ficam **canceladas nesta etapa** e registradas como evolução futura (item 18).

**Modularidade preservada:** cada uma das 31 seções permanece um componente isolado, com seus dados em módulo próprio. Uma futura página temática de SEO se monta reaproveitando os mesmos componentes, sem reescrita — apenas uma nova rota que importa os blocos desejados.

Rotas efetivamente existentes na v1: `/` e a página 404 do template. Nada mais.

**Âncoras do menu** (8 itens, conforme aprovado):

| Menu | Âncora | Aponta para a seção |
|---|---|---|
| Início | `#inicio` | 1 — Hero |
| Perdas | `#perdas` | 13 — Perdas e desperdícios |
| CMV | `#cmv` | 8 — CMV |
| Lucro | `#lucro` | 10 — Lucro real |
| Indicadores | `#indicadores` | 22 — Indicadores |
| Tecnologia | `#tecnologia` | 27 — Tecnologia personalizada |
| IGA Tecnologia | `#iga` | 29 — Metodologia |
| Contato | `#contato` | 32 — Contato |

## 3. Mapa definitivo das seções e sequência narrativa

Ordem aprovada, com **uma sugestão de ajuste justificada** e duas adições estruturais.

| # | Seção | Papel na narrativa |
|---|---|---|
| 1 | Hero | Abertura + imagem única + CTAs |
| 2 | Pergunta central — “Vende bem. Mas quanto realmente sobra?” | Provocação |
| 3 | Faturamento não é lucro | Tese |
| 4 | O desafio da gestão | Soma de fatores que corroem o resultado |
| 5 | Mapa do dinheiro | Caminho completo do faturamento ao resultado |
| 6 | Venda × Margem × Resultado | Prova numérica de que vender mais ≠ ganhar mais |
| 7 | O que está causando a queda do lucro? | Árvore de diagnóstico — **peça central** |
| 8 | CMV | Primeiro ramo aprofundado |
| 9 | Ticket Médio | Segundo ramo |
| 10 | Lucro real | Faturamento → margem bruta → resultado operacional → lucro |
| 11 | Ficha técnica | Custo real do prato |
| 12 | Engenharia de cardápio | Matriz venda × margem |
| 13 | Perdas e desperdícios | 5 categorias de perda |
| 14 | Compras e fornecedores | Comprar melhor é margem |
| 15 | Estoque inteligente | Giro, parado, validade, ruptura |
| 16 | Capital de giro | Consequência de caixa do estoque e prazos |
| 17 | Margem de contribuição | O que cada produto contribui |
| 18 | Ponto de equilíbrio | Quanto precisa vender para pagar as contas |
| 19 | Delivery | Resultado por pedido e por canal |
| 20 | Gestão tributária | Tributos como parte da rentabilidade |
| 21 | DRE gerencial | Consolidação: do faturamento ao resultado final |
| 22 | Indicadores | Painel demonstrativo |
| 23 | Comparação entre períodos | Evolução e leitura analítica |
| 24 | Relação entre indicadores | **Nova** — ver item 13 |
| 25 | Alertas | Gestão por exceção |
| 26 | Perguntas que a gestão precisa responder | Fechamento do diagnóstico |
| 27 | Do dado à decisão | Ponte para a tecnologia |
| 28 | Tecnologia personalizada | Agrupada por objetivo |
| 29 | Antes × Depois | Contraste de cenário de gestão |
| 30 | Metodologia IGA Tecnologia | 6 etapas |
| 31 | Posicionamento institucional | Quem é a IGA |
| 32 | Chamada final + Contato | CTAs e formulário conceitual |

**Ajustes propostos em relação à ordem de referência, com justificativa:**

1. **“Do dado à decisão” movido de 26 para 27**, imediatamente antes de “Tecnologia personalizada”. Justificativa: o fluxo dados → decisão → ação é exatamente a ponte argumentativa entre a parte de diagnóstico e a parte de solução. Colocá-lo antes de “Perguntas que a gestão precisa responder” encerraria o diagnóstico cedo demais; a lista de perguntas é o momento de maior desconforto produtivo na conversa e deve ser o último golpe antes da virada.
2. **“Antes × Depois” movido para depois de “Tecnologia personalizada”** (29). Justificativa: o contraste só é convincente depois que o cliente sabe o que a IGA faz; antes disso soa como promessa vazia.
3. **Nova seção 24 — Relação entre indicadores**, entre “Comparação entre períodos” e “Alertas”. Justificativa no item 13.
4. **Chamada final e Contato fundidos na seção 32.** Justificativa: separá-los criaria um vale entre o argumento mais forte e a ação; a fusão mantém o CTA imediatamente ao alcance no fim da apresentação.

Se algum desses quatro ajustes não for aceito, a ordem de referência original é implementável sem impacto técnico.

## 4. Estratégia de navegação por âncoras

- Cabeçalho fixo no topo, com altura reduzida ao rolar; logo à esquerda, 8 itens ao centro, CTA “Solicitar uma análise” à direita.
- Rolagem suave nativa (`scroll-behavior: smooth`), com `scroll-margin-top` em cada âncora para compensar a altura do cabeçalho — sem título cortado.
- Item do menu destacado automaticamente conforme a seção visível (Intersection Observer).
- Mobile: menu em painel deslizante que fecha ao escolher a âncora.
- Indicador de progresso: barra fina no topo do cabeçalho + marcadores verticais discretos à direita em telas grandes, com rótulo da seção ao passar o cursor. Nunca sobrepõe conteúdo; oculto no mobile.
- Todas as âncoras funcionam também por URL direta (`/#cmv`), permitindo abrir a apresentação já em um ponto específico.
- `prefers-reduced-motion` desativa rolagem suave e animações.

## 5. Estratégia visual revisada

- **Cores:** branco como fundo dominante; azul institucional (a ser calibrado pelo logo oficial) como cor de marca e de destaque de dados; escala de cinzas neutros para texto e bordas. Cor de sinal âmbar/vermelho contida, exclusiva para indicadores de perda, queda e atenção; verde contido para evolução positiva. Nenhum gradiente decorativo, nenhum roxo.
- **Tom visual:** relatório gerencial impresso de boa qualidade — denso em informação, calmo, com muito branco.
- **Tipografia:** título em família neutra de traço geométrico; corpo em humanista de alta legibilidade; **números sempre em variante tabular**, para alinhamento em cards, tabelas e DRE.
- **Escala de leitura para apresentação:** corpo maior que o padrão web e números com forte destaque, calibrados para leitura a cerca de um metro de um notebook.
- **Superfícies:** cartões com borda de 1px e fundo levemente distinto, sem sombras pesadas; cantos com raio pequeno e constante.
- **Ritmo:** as 32 seções alternam fundo branco e um cinza muito claro, marcando os capítulos da narrativa sem uso de cor.
- **Movimento:** apenas revelação suave ao entrar na viewport e transições curtas de hover.
- **Tokens:** todo valor de cor, raio, sombra, tipografia e espaçamento definido como token semântico em `src/styles.css` (formato `oklch`). Nenhuma cor fixa em componente. Tema claro apenas.

## 6. Utilização do logotipo oficial

- Nenhuma marca provisória será criada. Nenhum texto substituirá o logotipo.
- Enquanto o arquivo não for recebido, a área da marca no cabeçalho e no rodapé permanece **reservada e vazia**, com dimensões já definidas — o encaixe posterior é substituição de arquivo, sem retrabalho de layout.
- Ao receber o arquivo oficial: uso exclusivo do original, sem redesenho, recriação, troca de tipografia, alteração do símbolo, deformação ou recorte. Proporções preservadas em todos os pontos de exibição.
- Área de proteção mínima ao redor da marca, respeitada em cabeçalho, rodapé e favicon.
- O azul institucional do site será calibrado a partir das cores do arquivo oficial, não estimado antes disso.
- Favicon derivado do próprio arquivo, sem redesenho.

## 7. Componentes planejados

**Estruturais:** `SiteHeader`, `SiteFooter`, `SectionShell`, `SectionEyebrow`, `CTAButtons`, `ScrollProgress`, `TermTooltip` (recurso “O que significa?”, item 18 abaixo).

**Narrativos e de dados:**

| Componente | Seção | Responsabilidade |
|---|---|---|
| `IllustrativeBadge` | todas as numéricas | Selo “DADOS ILUSTRATIVOS” |
| `EquationBlock` | 4, 11, 18, 19 | Soma visual de fatores = resultado |
| `MoneyFlow` | 5 | Cascata faturamento → resultado |
| `RevenueMarginComparison` | 6 | **Novo** — Cenário A × Cenário B |
| `ProfitDiagnosticTree` | 7 | **Novo** — árvore de causas da queda de lucro |
| `CmvSimulator` | 8 | Simulador + causas do CMV elevado |
| `CmvCauseList` | 8 | Nove causas possíveis de CMV alto |
| `TicketMedioAnalysis` | 9 | Estrutura de três perguntas |
| `ProfitLadder` | 10 | Faturamento → margem bruta → operacional → lucro |
| `DishCostCard` | 8, 11 | Custo real e margem do prato |
| `MenuMatrix` | 12 | Matriz Estrelas / Populares / Oportunidades / Atenção |
| `LossCategoryGrid` | 13 | Cinco categorias de perda + indicadores |
| `SupplierCompare` | 14 | Comparação de preço entre fornecedores |
| `StockPanel` | 15 | Giro, cobertura, parado, validade, ruptura |
| `WorkingCapitalFlow` | 16 | Estoque + prazos + despesas → necessidade de caixa |
| `ContributionMargin` | 17 | Margem por prato, categoria, canal, período |
| `BreakEvenBlock` | 18 | Fixos ÷ margem de contribuição |
| `DeliveryResult` | 19 | Resultado do pedido e comparação de canais |
| `TaxSection` | 20 | Tributos e margem, com ressalva contábil |
| `DreTable` | 21 | DRE gerencial em cascata |
| `KpiCard` + `KpiGrid` | 22 | Indicadores com valor, variação e tendência |
| `PeriodCompare` | 23 | Hoje/semana/mês/ano + leitura analítica |
| `IndicatorRelation` | 24 | **Novo** — encadeamento causa → efeito |
| `AlertFeed` | 25 | Alertas por severidade |
| `QuestionCards` | 26 | As 15 perguntas da gestão |
| `PipelineFlow` | 27 | Dado → … → resultado |
| `CapabilityGroups` | 28 | Controle / Análise / Automação / Decisão |
| `BeforeAfter` | 29 | Duas colunas contrastadas |
| `MethodologySteps` | 30 | Jornada de 6 etapas |
| `PositioningBlock` | 31 | Posicionamento institucional |
| `FinalCta` + `ContactForm` | 32 | Chamada final e formulário conceitual |

Todos os gráficos em SVG/CSS próprios, sem biblioteca de charts — mais leves e integralmente aderentes ao design system.

## 8. Árvore de diagnóstico do lucro (seção 7)

Componente `ProfitDiagnosticTree`. Estrutura em três níveis, expansível, uma ramificação aberta por vez:

**Nível 1 — LUCRO CAIU. Investigar:** Faturamento caiu? · Custos aumentaram? · Margem diminuiu? · Despesas aumentaram? · Perdas aumentaram?

**Nível 2 — aprofundamento por ramo:**
- *Custos aumentaram* → CMV → Fornecedor · Ingredientes · Compras · Desperdício · Porcionamento
- *Margem diminuiu* → Preço · Descontos · Mix de produtos · Promoções · Delivery
- *Despesas aumentaram* → Folha · Energia · Taxas · Aluguel · Serviços · Tributos
- *Faturamento caiu* → Nº de clientes · Ticket Médio · Canal · Sazonalidade · Mix
- *Perdas aumentaram* → Estoque · Produção · Comercial · Financeira · Tributária

**Nível 3:** cada folha exibe uma frase curta sobre qual informação permite verificar aquela hipótese — sem afirmar que o sistema resolve automaticamente.

Comportamento em apresentação: começa recolhido, permitindo ao representante expandir apenas o ramo que interessa ao cliente. No mobile, vira acordeão vertical. Mensagem de fechamento da seção: **“Números mostram o que aconteceu. A análise ajuda a entender por que aconteceu.”**

## 9. Venda × Margem × Resultado (seção 6)

Componente `RevenueMarginComparison`. Dois cartões lado a lado (empilhados no mobile):

- **Cenário A** — Faturamento R$ 100.000 · Margem 20% · Resultado potencial R$ 20.000
- **Cenário B** — Faturamento R$ 120.000 · Margem 14% · Resultado potencial R$ 16.800

Barras proporcionais tornam o contraste visível antes da leitura dos números. Cenário B com faturamento maior em cor positiva e resultado menor em cor de atenção, na mesma peça.

Mensagem: **“O restaurante vendeu mais, mas gerou menos resultado.”**

Ressalvas obrigatórias no próprio componente: selo “DADOS ILUSTRATIVOS” e nota fixa — comparação gerencial simplificada; margem não equivale a lucro líquido; o resultado final depende das demais despesas e das condições da operação.

## 10. Abordagem revisada de CMV (seção 8)

Três blocos encadeados:

1. **O conceito**, em uma frase e um exemplo — prato de R$ 50, ingredientes R$ 18, CMV 36%.
2. **O simulador** (`CmvSimulator`): faturamento mensal e percentual de CMV ajustáveis; exibe custo em reais, comparação com um segundo percentual e a diferença potencial. Exemplo de partida: R$ 150.000, 38% × 34%, diferença potencial de R$ 6.000. Nota fixa: impacto potencial, não lucro garantido, sujeito às demais despesas.
3. **As causas** (`CmvCauseList`): aumento do preço de compra · desperdício · erro de porcionamento · divergência de estoque · ficha técnica desatualizada · preço de venda inadequado · promoções · perdas de produção · compras mal negociadas. Cada causa remete visualmente ao ramo correspondente da árvore de diagnóstico.

Fecho: reduzir CMV não é comprar mais barato — envolve compras, negociação, estoque, desperdício, padronização, porcionamento, produção, precificação e engenharia de cardápio.

## 11. Abordagem revisada de Ticket Médio (seção 9)

A fórmula aparece uma vez, discretamente. O peso da seção está nas **três perguntas**, apresentadas em sequência:

1. O Ticket Médio aumentou?
2. A margem gerada por esse Ticket também aumentou?
3. Os clientes passaram a comprar produtos mais rentáveis?

Exemplo ilustrativo de leitura combinada: Ticket Médio ↑ e margem ↓ — possível efeito de itens de baixa margem, descontos ou custos elevados na composição do pedido.

Mensagem: **“Ticket maior não significa automaticamente resultado maior.”**

Estratégias de crescimento (combos, adicionais, sobremesas, bebidas, venda sugestiva, complementares, análise de comportamento) aparecem **sempre associadas ao efeito sobre a margem**, nunca como receita isolada de aumento de faturamento.

## 12. Mapa do dinheiro (seção 5)

Mantido como uma das seções centrais, com o fluxo revisado — **Descontos incluídos** logo após o faturamento e o destino final nomeado **RESULTADO**:

Faturamento → Descontos → Tributos → CMV → Perdas e desperdícios → Taxas e comissões → Folha → Custos fixos → Custos variáveis → Despesas operacionais → **RESULTADO**

Representação em cascata vertical, com a faixa estreitando a cada etapa e o valor subtraído indicado ao lado. No mobile permanece vertical, com rótulos empilhados. Encerramento: “Conhecer o faturamento é apenas o começo. A gestão inteligente acompanha o caminho completo do dinheiro.”

## 13. Relação entre indicadores (seção 24 — nova)

Componente `IndicatorRelation`. Demonstra que indicadores não são leituras isoladas.

Encadeamento base exibido: **CMV aumentou → Margem caiu**, com três hipóteses investigativas paralelas:

- **Custo de compra aumentou?** → Fornecedor · Preço do ingrediente · Condição comercial · Frequência de compra
- **Consumo aumentou?** → Porcionamento · Desperdício · Erro de receita · Falta de padronização
- **Preço de venda não acompanhou o custo?** → Preço desatualizado · Promoção · Desconto · Erro de precificação

A seção 23 (Comparação entre períodos) entrega o gatilho — “Seu faturamento aumentou, porém sua margem caiu” — e a seção 24 mostra o caminho de investigação. As duas são lidas em sequência na apresentação.

Mensagem: **“Números mostram o que aconteceu. A análise ajuda a entender por que aconteceu.”**

## 14. Estratégia para dados ilustrativos

- Selo `IllustrativeBadge` em **todo** bloco com número: cards, gráficos, simulador, DRE, painel de indicadores, comparações, alertas.
- Aviso permanente e legível no rodapé, aplicável à página inteira.
- Números aprovados como base: faturamento mensal R$ 150.000; CMV 38% × 34%; prato R$ 50 com custo R$ 18; cenários A e B do item 9. Demais valores derivados desses, mantendo coerência aritmética entre seções.
- Proibições respeitadas: nenhum depoimento, nenhum cliente, nenhum case, nenhum logotipo de terceiros, nenhum número institucional da IGA, nenhum percentual apresentado como resultado garantido.
- Linguagem padrão para todo efeito projetado: “impacto potencial, sujeito às demais despesas e condições da operação”.
- Seção tributária com ressalva explícita: ferramenta de organização, análise, conferência e apoio à decisão — **não substitui o contador**.
- Seção de tecnologia: integrações e automações sempre condicionadas à análise do ambiente tecnológico do cliente.

## 15. Comportamento responsivo

Ordem de prioridade de qualidade, conforme determinado: **1) notebook (apresentação), 2) celular, 3) tablet, 4) desktop amplo**. Desenvolvimento mobile-first; calibragem fina e validação visual priorizando a faixa de notebook.

- **Notebook (1280–1440px)** — faixa de referência. Cada seção pensada para caber em uma ou duas telas de rolagem; tipografia e números dimensionados para leitura a distância de reunião; nenhum elemento essencial exigindo rolagem horizontal ou zoom.
- **Celular** — coluna única; fluxos e árvores em orientação vertical; tabelas (DRE, comparação de períodos) reorganizadas em blocos empilhados, nunca em rolagem horizontal; menu em painel deslizante; indicador lateral de progresso oculto.
- **Tablet** — layout de duas colunas onde couber; alvos de toque ampliados; validado em retrato e paisagem.
- **Desktop amplo** — largura de conteúdo limitada para preservar o comprimento de linha; o excedente vira margem, não mais colunas.

Validação em três larguras antes da entrega da versão implementada.

## 16. Estratégia de CTAs

- **CTA primário:** “Quero conhecer melhor os números do meu restaurante”
- **CTA secundário:** “Solicitar uma análise”
- **CTA da chamada final:** “Quero conhecer melhor meu restaurante” + “Agendar uma apresentação”
- **CTA persistente do cabeçalho:** “Solicitar uma análise”

Posicionamento: hero (1), fim do bloco de diagnóstico (após a seção 26), fim do bloco de tecnologia (após a 30) e chamada final (32). Quatro pontos, sem repetição a cada seção.

Vetado: “Saiba mais”, “Começar agora”, “Conheça nossa solução” e equivalentes genéricos. Todo CTA aponta para o conhecimento da operação do cliente, não para o produto.

Destino: todos rolam até a seção 32 (Contato). Nenhum link externo.

## 17. Limitações desta primeira versão

- Site inteiramente estático: sem backend, sem banco de dados, sem chamadas externas, sem APIs.
- Formulário **apenas conceitual**: campos, validação no cliente e mensagem de confirmação na tela. Sem envio de e-mail, armazenamento, WhatsApp, CRM, automação ou integração de qualquer espécie.
- Sem rotas temáticas — apenas a Home e o 404.
- Sem atalhos de teclado / modo apresentação.
- Sem página de glossário.
- Sem versão para impressão ou PDF.
- Sem dashboards interativos: os painéis são demonstrativos e estáticos.
- Sem área de login, demonstração ou captação de leads.
- Sem dados institucionais e sem logotipo até o envio oficial.
- Uma única imagem fotográfica, no hero (item 19 da resposta formal / diretriz 12): sóbria, profissional, ambiente de restaurante, compatível com apresentação empresarial, não publicitária. Todo o restante é gráfico, diagramático e analítico.
- Idioma único: português do Brasil.

## 18. Itens registrados apenas para evolução futura

Previstos na arquitetura, **não implementados**: páginas temáticas por assunto para SEO e campanhas · modo apresentação com atalhos de teclado · página independente de glossário · versão para impressão / PDF institucional / resumo comercial · simulador avançado de CMV · diagnóstico online do restaurante · formulário de análise inicial com geração de relatório · integração com WhatsApp · área de demonstração · dashboards interativos · estudos de caso · integração com sistemas da IGA · captação e gestão de leads · envio, armazenamento ou automação de contatos.

Preparo estrutural que viabiliza cada um deles sem retrabalho: conteúdo integralmente separado da apresentação em módulos de dados; seções como componentes autônomos e reutilizáveis; simulador já isolado com estado próprio; tokens de design centralizados.

**Recurso “O que significa?” (aprovado nesta versão):** termos como CMV, Ticket Médio, Margem de Contribuição, Ponto de Equilíbrio e DRE recebem um ícone discreto de informação. Ao acionar, exibe explicação curta em camada sobre a própria seção — sem navegação, sem sair do ponto atual. Componente `TermTooltip`. Não é a página de glossário, que permanece vetada.

## 19. Ambiguidades restantes

1. **Ajustes de ordem narrativa** — os quatro ajustes propostos no item 3 (posição de “Do dado à decisão”, de “Antes × Depois”, inserção da seção 24 e fusão de chamada final com contato) precisam de aprovação ou recusa item a item.
2. **Logotipo** — pendente. Sem ele, o azul institucional não pode ser calibrado e o favicon não pode ser gerado.
3. **Dados institucionais** — nenhum campo será exibido sem dado oficial, conforme determinado. Confirmar se o rodapé pode ficar sem qualquer informação de contato, restando apenas o nome da empresa, a nota de dados ilustrativos e o formulário conceitual da seção 32.
4. **Campos do formulário conceitual** — proposta: nome, restaurante, cidade, telefone, e-mail, mensagem. Confirmar a lista e quais são obrigatórios.
5. **Imagem do hero** — não havendo fotografia oficial, ela precisaria ser gerada. Confirmar se isso é autorizado na etapa de implementação ou se a IGA fornecerá a imagem. Alternativa: hero sem fotografia, apenas tipográfico e gráfico.
6. **Comparação de canais na seção 19** — o briefing pede Salão × Retirada × Delivery próprio × Aplicativos. Confirmar se a comparação numérica ilustrativa entre os quatro canais está aprovada, dada a sensibilidade do tema de comissões de plataformas; a alternativa é uma comparação estrutural, sem percentuais.
7. **Metas de referência** — alertas do tipo “CMV acima da meta” pressupõem uma meta. Proposta: apresentá-la como parâmetro definido pelo próprio restaurante, sem sugerir um percentual de mercado. Confirmar.
8. **Nome de exibição no cabeçalho** — enquanto o logotipo não chega, confirma-se que a área ficará vazia (sem texto substituto), conforme o item 10 da resposta formal.

## 20. Confirmação de não implementação

Confirmo formal e expressamente que, nesta rodada, **nenhuma implementação foi realizada**. Não foram criados nem alterados: componentes, rotas, arquivos de código, CSS, tokens de design, gráficos, imagens, formulários, backend, tabelas, banco de dados, integrações, APIs, funções ou conteúdo definitivo.

O projeto permanece exatamente no estado de template inicial. A única entrega desta rodada é este documento.

A implementação permanece bloqueada até manifestação expressa e específica de autorização.
