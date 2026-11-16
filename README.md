# Proffy Web

Plataforma de estudos online. Este repositório contém a implementação do fluxo **Dar aulas**, desenvolvido com React, TypeScript e Vite.

## Funcionalidades

- **Página inicial** (`/`): acesso ao fluxo de cadastro de professores.
- **Cadastro de professores** (`/give-classes`): preenchimento de informações pessoais, profissionais, matéria, valor da hora/aula e disponibilidade.
- **Confirmação do cadastro** (`/give-classes/completed`): confirmação após o envio das informações.
- **Perfil do professor** (`/profile`): visualização e edição dos dados cadastrados.

### Cadastro de professores

- Campos obrigatórios com validação individual.
- Máscara de telefone no padrão `(47) 98897-1458`.
- Biografia limitada a 300 caracteres, com contador de preenchimento.
- Campo de custo por hora com prefixo `R$` e formatação monetária.
- Seleção de dias da semana e horários em intervalos de uma hora, das 6h às 23h.
- Possibilidade de adicionar e excluir períodos de disponibilidade.
- Validação para garantir que o horário final seja posterior ao inicial.

### Perfil do professor

- Edição de nome, sobrenome, e-mail, WhatsApp e biografia.
- Atualização da matéria e do valor da hora/aula.
- Gerenciamento dos horários disponíveis.
- Alteração da foto de perfil, com limite de 1 MB.
- Confirmação visual após salvar as alterações.

## Tecnologias

- [React 19](https://react.dev) e [TypeScript](https://www.typescriptlang.org)
- [Vite 8](https://vite.dev)
- [Tailwind CSS 4](https://tailwindcss.com)
- [React Router 7](https://reactrouter.com)
- [React Hook Form](https://react-hook-form.com) e [Zod](https://zod.dev)
- `localStorage` para persistência dos dados.

## Como rodar

Requisitos: Node.js 20.19 ou superior (ou 22.12 ou superior) e npm.

```bash
npm install
npm run dev
```

A aplicação ficará disponível em `http://localhost:5173`.

### Outros scripts

| Comando | O que faz |
|---|---|
| `npm run build` | Checa os tipos e gera o build de produção em `dist` |
| `npm run lint` | Executa a análise de código com ESLint |

## Rotas

| Rota | Tela |
|---|---|
| `/` | Página inicial |
| `/give-classes` | Cadastro de professores |
| `/give-classes/completed` | Confirmação do cadastro |
| `/profile` | Perfil do professor |

O fluxo principal é: **Página inicial → Cadastro → Confirmação → Perfil**.

As rotas `/sign-in`, `/sign-up`, `/sign-up/finally-register` e `/study` já existiam no projeto base e foram preservadas.

## Decisões técnicas

- **Componentização:** utilização de componentes reutilizáveis para manter a consistência visual e evitar duplicação de código.
- **Formulário compartilhado:** o componente `TeacherForm` é utilizado tanto no cadastro quanto na edição do perfil, com variações específicas para cada tela.
- **Validação:** o Zod centraliza as regras de validação, integrado ao React Hook Form.
- **Tipagem:** utilização de TypeScript e dos tipos `z.input` e `z.output` para diferenciar os valores dos campos dos dados tratados no envio.
- **Gerenciamento de estado:** os dados do professor são centralizados no `TeacherProvider`, evitando estados duplicados.
- **Persistência:** armazenamento das informações no `localStorage`, utilizando a chave `proffy:teacher`, permitindo manter os dados após atualizar a página.
- **Máscaras:** funções auxiliares para formatação de telefone e valores monetários.
- **Acessibilidade:** utilização de elementos semânticos, mensagens de erro acessíveis com `role="alert"` e botões com tipos definidos.
- **Autenticação:** utilização de um usuário simulado, pois a implementação de autenticação não faz parte desta entrega.

## Estrutura

```text
src/
├── assets/                 # Imagens, ícones e recursos visuais
├── components/             # Componentes reutilizáveis
│   └── teacher-form/       # Componentes do formulário de professores
├── contexts/               # Contexto global dos dados do professor
├── data/                   # Matérias, dias da semana e usuário simulado
├── hooks/                  # Hooks personalizados
├── lib/                    # Máscaras e funções auxiliares
├── pages/
│   └── app/                # Páginas do fluxo de professores
├── schemas/                # Schemas e validações com Zod
└── index.css               # Estilos globais e identidade visual
```

## Observações

O projeto não possui integração com API ou banco de dados nesta etapa. Para testar um novo cadastro, é possível remover a chave `proffy:teacher` em **DevTools → Application → Local Storage** e atualizar a página.