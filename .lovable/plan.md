# Proposta Técnica e Funcional do Site — IGA Tecnologia | Gestão Inteligente para Restaurantes

## 0. Pendência bloqueante: o logotipo

O arquivo do logotipo **não chegou junto com a solicitação** (nenhum anexo foi recebido). Como o briefing determina que o logo original é o ativo oficial e não pode ser redesenhado, recriado ou substituído, preciso que você envie o arquivo (PNG com fundo transparente ou SVG) antes da construção do cabeçalho/rodapé.

Enquanto o arquivo não chegar, duas opções:
- **A (recomendada)** — você envia o logo agora e eu construo tudo já com a identidade final.
- **B** — construo o site com um espaço reservado neutro ("IGA Tecnologia" em texto), e o logo é encaixado depois sem retrabalho de layout.

Também não inventarei nenhuma informação institucional (fundação, número de clientes, cases, endereço, telefone, e-mail, CNPJ, redes sociais). Preciso desses dados para a seção institucional e o rodapé; sem eles, deixo campos neutros.

## 1. Estratégia visual

- **Base:** fundo branco, azul institucional como cor de marca, cinzas neutros para texto, uma cor de sinal (âmbar/vermelho discretos) apenas para indicadores de perda/atenção.
- **Tom:** corporativo-analítico, tipo painel financeiro. Sem gradientes chamativos, sem roxo, sem aparência de template genérico.
- **Tipografia:** uma família geométrica/neutra para títulos e uma humanista de alta legibilidade para corpo; números em variante tabular para alinhamento em cards e tabelas.
- **Estrutura:** grid amplo, blocos com respiro generoso, cartões de indicador com borda fina em vez de sombras pesadas, cantos levemente arredondados.
- **Legibilidade de apresentação:** corpo de texto e números maiores do que o padrão web, contraste alto, cada seção legível a ~1 metro de distância em notebook.
- **Movimento:** apenas revelação suave ao rolar e transições curtas em hover. Nada de parallax ou animação decorativa.
- **Tokens:** todas as cores, sombras, raios e fontes definidos como tokens semânticos no design system (`src/styles.css`), nunca cores fixas nos componentes. Tema claro apenas — sem alternador de tema.

## 2. Arquitetura de navegação

Menu fixo simplificado, com 8 itens conforme o briefing, cada um levando a uma rota própria (melhor para SEO, compartilhamento e para o representante abrir uma seção direto na apresentação):

| Menu | Rota | Contém as seções do briefing |
|---|---|---|
| Início | `/` | 2 (hero), 3 (o desafio), 4 (mapa do dinheiro), 24 (dado à decisão), 28 (chamada final) |
| Perdas | `/perdas` | 8 (controle de perdas), 12 (estoque inteligente), 13 (capital de giro) |
| CMV | `/cmv` | 5 (CMV + simulador), 9 (ficha técnica), 10 (engenharia de cardápio), 11 (compras e fornecedores) |
| Lucro | `/lucro` | 6 (ticket médio), 7 (lucro real), 14 (ponto de equilíbrio), 15 (margem de contribuição), 16 (delivery), 17 (tributário), 18 (DRE gerencial) |
| Indicadores | `/indicadores` | 19 (painel), 20 (comparação de períodos), 21 (central de alertas), 22 (perguntas da gestão) |
| Tecnologia | `/tecnologia` | 23 (tecnologia personalizada), 25 (antes × depois) |
| IGA Tecnologia | `/iga-tecnologia` | 26 (metodologia), 27 (posicionamento) |
| Contato | `/contato` | Formulário de solicitação de análise + CTAs |

Cada rota tem seu próprio `head()` com título, descrição e metadados sociais próprios. Cabeçalho fixo com logo à esquerda, navegação central, CTA "Solicitar uma análise" à direita; menu deslizante no mobile.

## 3. Componentes a criar

**Estruturais:** `SiteHeader` (fixo, com estado ativo), `SiteFooter`, `Section` (título + subtítulo + corpo padronizados), `SectionEyebrow`, `CTAButtons` (CTA primário + secundário reutilizáveis).

**Didáticos / de dados (todos alimentados por dados estáticos ilustrativos em `src/data/`):**
- `IllustrativeBadge` — selo "DADOS ILUSTRATIVOS" aplicado a **todo** gráfico, card numérico, simulação e painel.
- `EquationBlock` — soma visual de fatores com resultado (usado nas seções 3, 9, 14, 16).
- `MoneyFlow` — cascata vertical do faturamento até o lucro real, com faixas proporcionais (seção 4).
- `CmvSimulator` — dois controles (faturamento mensal, % de CMV) mostrando custo, diferença potencial e aviso explícito de que impacto potencial não é lucro garantido. 100% client-side, sem backend.
- `DishCostCard` — prato: ingredientes, custo, preço, CMV, margem (seções 5 e 9).
- `MenuMatrix` — matriz 2×2 Estrelas / Populares / Oportunidades / Itens de Atenção com pontos posicionados (seção 10).
- `SupplierCompare` — barras comparando preço do mesmo produto entre fornecedores (seção 11).
- `LossCategoryGrid` — 5 categorias de perdas com seus itens, mais um painel de indicadores de perda.
- `KpiCard` + `KpiGrid` — valor, variação, tendência (seção 19).
- `PeriodCompare` — tabela hoje/semana/mês/ano com setas e a leitura analítica "faturamento aumentou, porém a margem caiu".
- `AlertFeed` — lista de alertas inteligentes com severidade (seção 21).
- `QuestionCards` — as 15 perguntas da gestão em grade clicável/expansível.
- `DreTable` — DRE gerencial em cascata, da receita bruta ao resultado final.
- `BeforeAfter` — duas colunas contrastadas (seção 25).
- `MethodologySteps` — jornada numerada de 6 etapas (seção 26).
- `PipelineFlow` — dados → organização → indicadores → análise → alertas → decisão → ação → resultado.
- `CapabilityGrid` — capacidades de tecnologia personalizada, com nota de "sujeito à análise do ambiente".

Gráficos feitos com SVG/CSS próprios (leves, sem dependência de biblioteca de charts), consistentes com o design system.

## 4. Conformidade com os cuidados do briefing (seção 30)

- Selo "DADOS ILUSTRATIVOS" visível em cada bloco numérico, mais uma nota permanente no rodapé.
- Nenhum depoimento, logo de cliente, case ou empresa cliente — reais ou fictícios.
- Nenhum percentual de redução de custo ou aumento de lucro apresentado como garantia; a linguagem é sempre "impacto potencial, sujeito às demais despesas e condições da operação".
- Seção tributária traz aviso explícito de que a ferramenta apoia — e não substitui — o contador.
- Nenhuma integração específica afirmada como disponível; tudo apresentado como possibilidade sujeita a análise.

## 5. Formulário de contato

Nesta etapa, o formulário de contato é apenas de interface (campos: nome, restaurante, cidade, telefone, e-mail, mensagem) com validação no cliente e mensagem de confirmação — **sem** envio de e-mail, sem banco de dados, sem WhatsApp, conforme a orientação de não implementar integrações não autorizadas. Se você quiser que os pedidos de análise sejam efetivamente gravados/recebidos, isso exige o backend (Lovable Cloud) e eu aguardo sua autorização expressa.

## 6. Arquitetura para evolução (seção 31)

- Rotas independentes por tema, com seções isoladas em componentes — uma nova seção entra sem tocar nas demais.
- Todo conteúdo (textos, números, listas, alertas, pratos, fornecedores) em módulos de dados em `src/data/`, separados da apresentação; trocar dados ilustrativos por dados reais ou por uma API futura não altera os componentes.
- O simulador de CMV já nasce como componente de estado isolado, pronto para virar o simulador avançado.
- Ganchos previstos, não implementados: diagnóstico online, geração de relatório, WhatsApp, área de demonstração, dashboards interativos, captação de leads.

## 7. Sugestões de melhoria

1. **Modo apresentação** — atalhos de teclado (setas) para avançar seção a seção durante a reunião presencial. Baixo custo, alto valor comercial.
2. **Índice lateral de progresso** nas páginas longas, indicando a seção atual — ajuda o representante a se orientar.
3. **Glossário de indicadores** (CMV, margem de contribuição, ponto de equilíbrio) em uma página de apoio, útil para gestores menos familiarizados.
4. **Versão para impressão/PDF** da página inicial, para deixar com o cliente ao final da visita.

Diga se quer alguma delas incluída; por padrão implemento só a nº 1 e a nº 2 se você aprovar.

## 8. Requisitos ambíguos a confirmar

1. **Logotipo** — ainda não recebido (ver item 0).
2. **Dados institucionais e de contato** — telefone, e-mail, WhatsApp, cidade, redes sociais. Sem eles o rodapé e a página de contato ficam incompletos.
3. **Imagens** — usar fotografia de restaurante (gerada) nas aberturas de seção, ou manter o site puramente gráfico/analítico, sem fotos? Minha recomendação: uma única imagem sóbria no topo da home e o restante gráfico.
4. **Uma página ou oito rotas** — a proposta acima usa 8 rotas conforme o menu. Se você preferir uma única página longa rolável para a apresentação presencial, faço tudo em `/` com âncoras. Escolha sua.
5. **Idioma** — assumo português do Brasil apenas.
6. **Valores das simulações** — mantenho os exemplos do briefing (R$ 150.000 de faturamento, CMV 38% → 34%, prato de R$ 50 com R$ 18 de custo). Confirmo?

## 9. Detalhes técnicos

- TanStack Start (React 19) + Tailwind v4, tema definido em `src/styles.css` via tokens `oklch`.
- Uma rota por item de menu em `src/routes/`, cada uma com `head()` próprio (título, descrição, og/twitter).
- Sem backend, sem banco, sem chamadas externas nesta etapa. Site totalmente estático e renderizado no servidor — carregamento rápido em rede de cliente.
- Gráficos em SVG/CSS próprios; animações via CSS e Intersection Observer, respeitando `prefers-reduced-motion`.
- Favicon derivado do logotipo, assim que o arquivo for enviado.
- Mobile-first, com verificação em três larguras: celular, tablet e notebook (1280–1440px, alvo da apresentação).

## 10. Próximo passo

**Nada foi implementado.** Aguardo sua aprovação expressa, o arquivo do logotipo e as respostas do item 8 para iniciar a construção.
