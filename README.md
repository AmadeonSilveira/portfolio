# Portfólio — Karin Andrade Silveira

Este repositório apresenta o meu portfólio.  
Construído com **Next.js 14**, **React**, **TypeScript** e **CSS puro**.  

---

## Acesso ao Projeto

Produção:  
https://amadeon.com.br

Deploy contínuo configurado via Vercel.

---

## Tecnologias Utilizadas

- Next.js 14 (App Router)
- React
- TypeScript
- CSS puro
- Vercel

---

## Principais Recursos

- Tema claro e escuro com persistência e aplicação antes da hidratação
- Estrutura semântica revisada para SEO
- Layout responsivo com microinterações leves
- Navbar com comportamento dinâmico
- Código dividido em componentes independentes
- Dados externos fornecidos via JSON

---

## Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── SkillsGrid.tsx
│   └── ProjectCard.tsx
│
├── data/
│   ├── skills.json
│   └── projects.json
│
└── styles/
    └── globals.css
```
---

## Instalação e Uso

Instalar dependências:

```bash
npm install
```

Rodar o ambiente de desenvolvimento:

```bash
npm run dev
```

Gerar o build de produção:

```bash
npm run build
```

Executar o build gerado:

```bash
npm start
```

---

## Deploy

O deploy é gerenciado pela Vercel.  
A cada push na branch `main`, uma nova versão é publicada automaticamente.

---

## Desenvolvimento com Auxílio de IA

Ferramentas de IA foram utilizadas como suporte para revisão e análise.