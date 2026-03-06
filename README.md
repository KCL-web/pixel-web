# KCL Web Project Template

Este repositório é um template para a KCL - Tecnologias, pensado para iniciar novos projetos web com React + TypeScript usando Vite.

Principais objetivos

- Fornecer uma base mínima e moderna (Vite + React + TypeScript).
- Conveções de estilo e tooling (Prettier, ESLint, Husky, lint-staged).
- Estrutura de pastas e tokens SCSS prontos para uso.

Tecnologias principais

- Vite: bundler/dev server rápido (`vite`).
- React 19 + TypeScript: base da aplicação.
- Sass/SCSS: estilos (tokens em `src/styles/variables.scss`).
- ESLint + Prettier: lint e formatação.
- Husky + lint-staged: hooks de commit para garantir qualidade antes do push.
- pnpm: gerenciador de pacotes recomendado (uso do workspace e velocidade).

Arquivos e convenções importantes

- `src/styles/variables.scss` — tokens de tipografia, cores e bordas; expostos globalmente via Vite.
- `src/styles/reset.scss` — reset base do projeto.
- `src/styles/globals.scss` — estilos globais e exportação de tokens para CSS vars.
- `src/styles/main.scss` — ponto único de import para estilos (importado em `src/main.tsx`).
- `vite.config.ts` — aliases (`@`, `@assets`, `@components`, etc.) e configuração SCSS (`additionalData: "@use 'src/styles/variables.scss' as *;"`).
- `tsconfig.json` / `tsconfig.app.json` — paths e baseUrl para resolver aliases no TypeScript.
- `.husky/pre-commit` — chama `npx lint-staged`.
- `package.json` — scripts (dev/build/prepare) e `lint-staged` (configurada para rodar `eslint --fix` + `prettier --write`).

Como começar

1. Instale dependências (recomendado pnpm):

```bash
pnpm install
```

2. Prepare hooks (normalmente já disparado após install):

```bash
pnpm run prepare
```

3. Rodar em desenvolvimento:

```bash
pnpm run dev
```

Build e preview

```bash
pnpm run build
pnpm run preview
```

Lint e formatação

- Checar formatação (Prettier): `pnpm run lint:check`
- Aplicar formatação: `pnpm run lint:fix`
- Rodar ESLint manualmente: `pnpm run lint`

Commit hooks (Husky + lint-staged)

- Os commits acionam o `pre-commit` que executa `lint-staged`.
- `lint-staged` aplica `eslint --fix` e `prettier --write` apenas em arquivos staged que batem com os padrões (evita executar no projeto inteiro).
- Se precisar pular hooks só nesta vez: `git commit -m "msg" --no-verify` (não recomendado rotineiramente).

SCSS global tokens

- As variáveis SCSS estão disponíveis automaticamente em todos os arquivos `.scss` através de `vite.config.ts` (`additionalData`), então você pode usar as variáveis sem importar explicitamente.

Aliases de import

- Use os aliases configurados em `vite.config.ts` e mapeados em `tsconfig.json`, por exemplo:
  - `@/` → `src/`
  - `@assets/` → `src/assets/`
  - `@components/` → `src/components/`

Boas práticas para novos repositórios KCL

- Crie componentes em `src/components` com testes e estilos locais.
- Pages em `src/pages` e rotas em `src/routes`.
- Mantenha `src/styles/variables.scss` com tokens compartilhados entre projetos.

Contribuindo / customizações comuns

- Para habilitar regras TypeScript-aware no ESLint, atualize a configuração e a opção `parserOptions.project` apontando para `tsconfig.app.json`.
- Adapte `lint-staged` caso deseje rodar comandos adicionais (ex.: testes unitários) antes do commit.

Suporte

- Para dúvidas sobre o template, fale com a equipe de front-end da KCL.

Licença

- Este repositório é fornecido pela KCL - Tecnologias para uso interno como template.
