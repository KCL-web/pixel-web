# AI Context — Projeto Frontend

Este documento define as regras de arquitetura, padrões de desenvolvimento e boas práticas que devem ser seguidas ao gerar código para este projeto.

O objetivo é garantir consistência, escalabilidade e qualidade no código gerado.

---

# Stack do Projeto

Tecnologias utilizadas:

- React
- TypeScript
- SCSS (SCSS Modules)

Todo código gerado deve ser compatível com esse stack.

---

# Padrões obrigatórios de componentes

Sempre que criar um componente:

1. Separar estrutura e estilo
2. Utilizar arquivos separados

Exemplo obrigatório:

components/
ExampleComponent/
ExampleComponent.tsx
ExampleComponent.module.scss

Não misturar estilos dentro do arquivo TSX.

Sempre usar **SCSS Modules**.

---

# Responsividade

Todos os componentes devem ser desenvolvidos utilizando abordagem:

**Mobile-first**

Ordem recomendada:

1. Estilo base para mobile
2. Media queries para tablets
3. Media queries para desktop

Evitar desenvolver primeiro para desktop.

---

# SEO

Todas as páginas devem seguir boas práticas de SEO:

- Estrutura semântica correta (header, main, section, article, footer)
- Uso correto de headings (h1, h2, h3...)
- Uso de atributos alt em imagens
- Links acessíveis
- HTML semântico sempre que possível

Evitar divs desnecessárias quando elementos semânticos existem.

---

# Estrutura de Pastas

A estrutura do projeto deve ser respeitada.

src/
components/
layout/
ui/

hooks/
hooks globais reutilizáveis

utils/
funções utilitárias reutilizáveis

pages/
páginas da aplicação

routes/
configuração de rotas utilizando react-router-dom

styles/
variables.scss

---

# Regras de Componentes

Componentes devem seguir as seguintes regras:

- Usar TypeScript
- Usar Props tipadas
- Evitar lógica pesada dentro do componente
- Lógica reutilizável deve ir para hooks
- Componentes devem ser reutilizáveis

Nomenclatura:

Componentes → PascalCase
Hooks → camelCase iniciando com "use"

Exemplo:

useWindowSize
useScrollPosition

---

# Estilos e Design System

Antes de utilizar qualquer cor em um novo componente:

Verificar se ela já existe em:

styles/variables.scss

Se a cor já existir:

Utilizar a variável SCSS existente.

Exemplo correto:

color: $color-primary;

Evitar cores hardcoded.

---

# Estrutura de Layout

Componentes globais de layout devem ficar em:

components/layout/

Exemplos:

Navbar
Footer
AppLayout

Componentes visuais reutilizáveis devem ficar em:

components/ui/

Exemplos:

Button
Card
Badge
Modal

---

# Boas práticas de código

Seguir sempre:

- Clean Code
- Componentes pequenos
- Reutilização de código
- Tipagem forte com TypeScript
- Evitar duplicação de lógica

---

# Antes de finalizar qualquer código gerado

Sempre verificar:

1. Se os estilos estão em module.scss
2. Se as cores utilizadas estão em variables.scss
3. Se o componente é responsivo (mobile-first)
4. Se o código segue a estrutura de pastas do projeto
5. Se boas práticas de SEO foram aplicadas quando aplicável

---

# Objetivo do Projeto

Manter um código:

- escalável
- organizado
- reutilizável
- otimizado para SEO
- responsivo
- fácil de manter
