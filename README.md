# Sistema de Agenda Pessoal (Front-end)

Aplicativo web responsivo para gerenciamento de contatos pessoais.

## Objetivo do projeto

Este projeto implementa o front-end de um sistema de agenda pessoal, onde o usuario pode:

- se autenticar (temporariamente no front-end);
- acessar um dashboard protegido;
- cadastrar, editar, listar e excluir contatos;
- manter os dados salvos localmente no navegador.

Na proxima etapa, o backend sera integrado com Supabase.

## Stack utilizada

- React
- TypeScript
- Vite
- React Router DOM
- CSS com Flexbox (layout responsivo)

## Funcionalidades atuais

- `Home`: pagina inicial com chamada para acao.
- `Login`: autenticacao front-end temporaria.
- `Dashboard`: CRUD completo de contatos:
  - nome
  - sobrenome
  - telefone-1
  - telefone-2
  - e-mail
  - endereco

## Requisitos

- Node.js 20+ (recomendado)
- npm 10+ (ou compatível)

## Como rodar localmente

```bash
# 1) Instalar dependencias
npm install

# 2) Iniciar servidor de desenvolvimento
npm run dev

# 3) Executar lint
npm run lint

# 4) Gerar build de producao
npm run build

# 5) Previsualizar build localmente
npm run preview
```

## Comandos executados para criacao do projeto (historico)

```bash
# Criar o projeto React + TypeScript com Vite na pasta atual
npm create vite@latest . -- --template react-ts

# Instalar as dependencias iniciais do template
npm install

# Adicionar roteamento para paginas (home, login, dashboard)
npm install react-router-dom

# Validar qualidade de codigo com ESLint
npm run lint

# Validar compilacao TypeScript e empacotamento Vite
npm run build

# Revalidar apos ajustes finais
npm run lint && npm run build
```

## Estrutura principal

```text
src/
  components/
    Layout.tsx
    ProtectedRoute.tsx
    ContactForm.tsx
    ContactList.tsx
  pages/
    HomePage.tsx
    LoginPage.tsx
    DashboardPage.tsx
  services/
    contactStorage.ts
  types/
    contact.ts
  App.tsx
  main.tsx
  index.css
```

## Publicar no GitHub (passo a passo)

### 1) Criar repositorio no GitHub (site)

Crie um novo repositorio vazio, por exemplo: `sistema-agenda-pessoal`.

### 2) Inicializar Git local e subir projeto

> Substitua `SEU_USUARIO` e `NOME_REPO` pelos valores corretos.

```bash
# Inicializa repositorio local
git init

# Define branch principal
git branch -M main

# Adiciona todos os arquivos
git add .

# Primeiro commit
git commit -m "chore: estrutura inicial do front-end da agenda pessoal"

# Conecta com repositorio remoto
git remote add origin https://github.com/SEU_USUARIO/NOME_REPO.git

# Envia para o GitHub
git push -u origin main
```

## Proximos passos (backend)

- Integrar autenticacao real com Supabase Auth.
- Persistir contatos em banco (PostgreSQL via Supabase).
- Ajustar regras de seguranca (RLS) para cada usuario ver apenas a propria agenda.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
