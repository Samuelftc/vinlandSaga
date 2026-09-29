# Vinland Saga & Encyclopedia

Uma enciclopédia digital fã-feita dedicada ao universo de **Vinland Saga**, obra de Makoto Yukimura. O projeto reúne personagens, episódios, arcos narrativos, ideologias e cartografia da saga em uma interface moderna, temática e imersiva.

> Projeto pessoal em desenvolvimento contínuo, construído para estudo e aprofundamento em React, TypeScript e boas práticas de front-end.

---

## Sobre o projeto

O objetivo é catalogar o universo de Vinland Saga de forma rica e visual — personagens, temporadas, arcos do mangá/anime, o confronto ideológico entre Thorfinn e Canuto, e a cartografia dos lugares que marcam a jornada rumo a Vinland.

O design segue uma identidade visual escura e nórdica, com tipografia forte (Epilogue) para títulos épicos e legibilidade (Inter) no corpo de texto, e uma paleta consistente baseada em tons escuros com destaque em vermelho.

---

## Tecnologias

- **[React 19](https://react.dev/)** — biblioteca de UI
- **[TypeScript](https://www.typescriptlang.org/)** — tipagem estática
- **[Vite](https://vitejs.dev/)** — build tool e dev server
- **[Swiper](https://swiperjs.com/)** — carrossel do banner principal
- **[Lucide React](https://lucide.dev/)** — ícones
- **CSS puro** — com variáveis CSS (custom properties) para theming centralizado
- **ESLint** — padronização e qualidade de código

---

## Estrutura do projeto

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx        # Navegação com efeito scroll dinâmico
│   │   └── Footer.tsx        # Rodapé com links
│   ├── sectionsHome/
│   │   ├── SecaoPersonagens.tsx
│   │   ├── SecaoEpisodios.tsx
│   │   ├── SecaoArcos.tsx
│   │   ├── SecaoIdeologias.tsx
│   │   ├── SecaoCartografia.tsx
│   │   └── Banner.tsx        # Carrossel principal (Swiper)
├── pages/
│   ├── PaginaPersonagens.tsx # Listagem com filtros & paginação
│   ├── paginaArcos.tsx       # Detalhes dos 4 arcos narrativos
│   ├── paginaBatalhas.tsx    # 11 confrontos com filtro por arco
│   ├── paginaFilosofias.tsx  # Análise hermenêutica completa
│   └── paginaMundo.tsx       # Cartografia de 6 regiões
├── data/
│   ├── Personagens.ts        # 37 personagens completos
│   ├── Arcos.ts              # 4 arcos da saga
│   ├── Batalhas.ts           # 11 duelos & confrontos
│   ├── Ideologias.ts         # 3 grandes doutrinas
│   ├── Teses.ts              # 4 questões existenciais
│   ├── Reflexoes.ts          # 2 reflexões profundas
│   ├── VozesMorais.ts        # 3 citações épicas
│   └── Regioes.ts            # 6 regiões & cartografia
├── types/
│   ├── Personagem.ts
│   ├── Arco.ts
│   └── Batalha.ts
├── styles/
│   ├── Variables.css         # Paleta centralizada + cores específicas
│   ├── Global.css
│   ├── Reset.css
│   ├── Header.css
│   ├── Footer.css
│   ├── Banner.css
│   ├── secoesHome/
│   └── pages/                # CSS individual de cada página
├── main.tsx
└── App.tsx
```

---

## Funcionalidades

### Home
- **Banner em carrossel** com Swiper (autoplay, navegação, paginação)
- **Header dinâmico** — transparente → fixo ao rolar (transição `cubic-bezier`)
- **Personagens em destaque** — cards com imagem, descrição e temporadas
- **Episódios** — navegável por temporada com sinopses
- **Arcos narrativos** — resumo dos 4 arcos do mangá/anime
- **Duelo de ideologias** — Thorfinn (pacifismo) vs Canuto (poder absoluto)
- **Cartografia nórdica** — locais-chave com ícones contextuais
- **Footer** com navegação rápida

### Página de Personagens
- **Listagem de 37 personagens** completos com imagem, descrição e temporadas
- **Filtros funcionais:**
  - Por afiliação (6 facções)
  - Por temporada (S1, S2, Mangá)
  - Por status (Vivo/Morto)
- **Paginação dinâmica** (12 personagens por página)
- **Reset automático** ao mudar filtros
- Grid responsivo (4→3→2→1 colunas)

### Página de Batalhas
- **11 confrontos catalogados** com análise tática completa
- **Filtro por arco narrativo:**
  - Prólogo (4 duelos)
  - Fazenda de Ketil (3 duelos)
  - Expedição ao Leste (3 duelos)
  - Saga de Vinland (1 confronto final)
- **Detalhes de cada batalha:**
  - Defesa vs Ataque (forças em confronto)
  - Dinâmica do confronto
  - Tática dominante
  - Perguntas/respostas resumidas
- **Layout 2 colunas responsivo**

### Página de Arcos
- **4 arcos narrativos detalhados:**
  - Prólogo (Guerra na Inglaterra)
  - Escravidão (Fazenda de Ketil)
  - Expedição ao Leste (Rota comercial)
  - Saga de Vinland (Reta final)
- **Cronologia visual** com cards de progresso
- **Ficha completa** de cada arco com personagens, filosofias, clímax e resultados
- Cores específicas para destaque temático

### Página de Filosofias
- **Triângulo Ideológico Fundamental:** 3 grandes doutrinas
  - Norse Belicismo (Thorkell, Jomsvikings)
  - Realpolitik Coercitiva (Canute, poder estatal)
  - Pacifismo Radical (Thorfinn, Thors)
- **Dossié Hermenêutico Profundo:** 2 reflexões filosóficas
  - O Vazio da Vingança vs Pacto com Hild
  - Filosofia de Arnheid e Crítica da Servidão
- **4 Grandes Questões Existenciais de Yukimura:**
  - O Enigma do Padre Willibald (Amor discriminatório)
  - Corrupção da Coroa & Espectro de Sweyn
  - Ilusão da Honra Mercenária & Askeladd
  - Fronteira de Vinland & Dilema da Coexistência
- **Mural das Vozes Morais:** 3 citações épicas
- **Conclusão Dialética:** Superação definitiva da espiral de destruição

### Página de Mundo
- **Grande Atlas Interativo:** 6 regiões detalhadas
  - Islândia (Prólogo & Partida)
  - Inglaterra & Jórvík (Guerra Saxônica)
  - Jutlândia & Ketil (Redenção & Servidão)
  - Ilhas Orkney (Refúgio Operacional)
  - Miklagard (Expedição do Leste)
  - Vinland (Terra Prometida & Clímax)
- **Cartografia completa:** coordenadas, clima, importância na trama
- **Figuras-chave por região** com destaque a personagens principais
- **Status de acesso** com badges especiais para zonas de guerra
- **Notas adicionais** com contexto geográfico e político

### Design System
- **Paleta centralizada** em `Variables.css` com cores nórdicas
- **Tipografia dupla:** Epilogue (títulos, peso 900) + Inter (corpo)
- **Microinterações:** hover states com `translateY`, `scale`, shadows
- **CSS refatorado:** naming em português simples (kebab-case)
- **Variáveis temáticas específicas:** cores de arcos, ideologias e batalhas
- **Grid responsivo** em todas as páginas (4→3→2→1 colunas)

---

## Como rodar o projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) 18+
- npm (ou outro gerenciador de pacotes compatível)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Samuelftc/vinlandSaga.git
cd vinlandSaga

# Instale as dependências
npm install
```

### Scripts disponíveis

```bash
npm run dev       # Inicia o servidor de desenvolvimento (Vite)
npm run build     # Gera build de produção (TypeScript + Vite)
npm run lint      # Executa o ESLint
npm run preview   # Pré-visualiza o build de produção
```

O projeto estará disponível em `http://localhost:5173` (ou próxima porta livre).

---

## Roadmap

### Concluído
- [x] Home com 5+ seções temáticas
- [x] Página de Personagens com filtros & paginação (37 personagens)
- [x] Página de Arcos (4 arcos com 40+ campos de dados)
- [x] Página de Batalhas (11 confrontos com filtro por arco)
- [x] Página de Filosofias (análise hermenêutica completa)
- [x] Página de Mundo (6 regiões com cartografia interativa)
- [x] TypeScript com interfaces para todos os dados
- [x] CSS refatorado com nomes em português (kebab-case)
- [x] Variáveis CSS centralizadas + cores específicas por seção
- [x] Header dinâmico com scroll behavior
- [x] Grid responsivo (4→3→2→1 colunas)

### Próximas Prioridades
- [ ] Responsividade completa em mobile (media queries finais em Arcos/Batalhas)
- [ ] Páginas individuais de personagens (`/personagens/:id`)
- [ ] Páginas individuais de arcos (`/arcos/:id`)
- [ ] Acessibilidade (aria-labels, navegação por teclado)
- [ ] Dark/Light mode (estrutura CSS pronta, só falta toggle)
- [ ] Migração dos dados mockados para API/Backend
- [ ] Testes unitários & E2E

---

## Créditos

Projeto de fã, sem fins lucrativos, baseado na obra de **Makoto Yukimura**. Todos os direitos sobre Vinland Saga pertencem aos seus respectivos criadores e detentores.

---

## Autor

Desenvolvido por Samuel como projeto de estudo e portfólio.