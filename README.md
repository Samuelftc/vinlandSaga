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
│   │   ├── Header.tsx        # Navegação com efeito de scroll dinâmico
│   │   └── Footer.tsx        # Rodapé com links e contato
│   ├── sectionsHome/
│   │   ├── SecaoPersonagens.tsx
│   │   ├── SecaoEpisodios.tsx
│   │   ├── SecaoArcos.tsx
│   │   ├── SecaoIdeologias.tsx
│   │   ├── SecaoCartografia.tsx
│   │   └── SecaoReflexoes.tsx
│   └── Banner.tsx             # Carrossel principal (Swiper)
├── data/
│   └── Personagens.ts         # Dados mockados
├── types/
│   └── Personagem.ts          # Interfaces TypeScript
├── styles/
│   ├── Variables.css          # Paleta de cores centralizada
│   ├── Global.css             # Fontes e configurações globais
│   ├── Reset.css              # CSS Reset
│   ├── Header.css
│   ├── Footer.css
│   ├── Banner.css
│   └── secoesHome/             # CSS individual de cada seção
├── main.tsx
└── App.css
```

---

## Funcionalidades

### Home
- **Banner em carrossel** com Swiper (autoplay, navegação e paginação), texto fixo sobreposto às imagens
- **Header dinâmico** — transparente no topo da página, torna-se fixo com fundo sólido ao rolar a tela (com transição suave via `cubic-bezier`)
- **Personagens em destaque** — cards com imagem, descrição e temporadas de aparição
- **Episódios** — lista navegável por temporada, com sinopse de cada episódio
- **Arcos narrativos** — resumo dos arcos do mangá/anime com capítulos e temporadas correspondentes
- **Duelo de ideologias** — comparação visual entre a filosofia de Thorfinn (pacifismo) e Canuto (poder absoluto)
- **Cartografia nórdica** — grid de locais-chave da história (Islândia, York, Jutlândia, Constantinopla, Vinland) com ícones contextuais
- **Footer** com navegação rápida e informações de contato

### Design System
- Paleta de cores centralizada em `Variables.css`, facilitando manutenção e futura implementação de temas (dark/light)
- Tipografia dupla: **Epilogue** (títulos, em caixa alta e peso 900) e **Inter** (corpo de texto)
- Microinterações consistentes: hover states com `translateY`, `scale` e `box-shadow` temático

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

- [ ] Responsividade completa (mobile-first)
- [ ] Páginas individuais de personagens, episódios e arcos
- [ ] Seção de Reflexões como página dedicada
- [ ] Acessibilidade (aria-labels, navegação por teclado)
- [ ] Dark/Light mode aproveitando as CSS variables já estruturadas
- [ ] Migração dos dados mockados para uma fonte externa/API

---

## Créditos

Projeto de fã, sem fins lucrativos, baseado na obra de **Makoto Yukimura**. Todos os direitos sobre Vinland Saga pertencem aos seus respectivos criadores e detentores.

---

## Autor

Desenvolvido por Samuel como projeto de estudo e portfólio.
