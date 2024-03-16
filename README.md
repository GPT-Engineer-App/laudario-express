# laudario-express

O Laudário é uma aplicação web que permite aos radiologistas criar laudos estruturados de forma eficiente, selecionando achados relevantes a partir de um menu de opções pré-definidas. Ao selecionar um achado, uma descrição padrão correspondente é automaticamente inserida no laudo, que pode então ser editada conforme necessário. O objetivo é agilizar o processo de laudagem, garantindo consistência e completude dos laudos.

Design e Interface do Usuário:
A interface deve ser limpa, intuitiva e fácil de navegar. O layout será responsivo, adaptando-se perfeitamente a diferentes tamanhos de tela (desktop, tablet, celular).

A página principal terá um cabeçalho com o logo do Laudário e um menu de navegação simples. O corpo da página será dividido em duas colunas:

Um formulário com campos para seleção de achados, divididos por órgão/sistema. Cada achado terá uma caixa de seleção associada e, ao ser selecionado, uma caixa de texto aparecerá abaixo com a descrição padrão.
Uma área de pré-visualização do laudo, que será atualizada em tempo real conforme os achados são selecionados e editados.
Um rodapé terá informações de contato, links para termos de uso e política de privacidade.

Paleta de cores: Usar tons de azul e branco para transmitir profissionalismo e confiabilidade. Destaques em verde para botões de ação primária.

Tipografia: Uma fonte sem serifa, como Roboto ou Open Sans, para facilitar a leitura em telas.

Funcionalidades:

Seleção de achados: Permitir ao usuário selecionar múltiplos achados relevantes para cada órgão/sistema.
Geração automática de descrição: Ao selecionar um achado, uma descrição padrão pré-definida é inserida na área de pré-visualização do laudo.
Edição de descrições: Permitir que o usuário edite as descrições padrão para adicionar detalhes específicos do caso.
Geração de laudo: Gerar um laudo estruturado completo, incluindo cabeçalho com informações do paciente e exame, corpo com achados e impressão, e rodapé com informações do radiologista.
Exportação de laudo: Permitir que o laudo seja exportado em formatos comuns (PDF, DOC, etc) para fácil compartilhamento e integração com sistemas de informação hospitalar.
Armazenamento de laudos: Armazenar uma cópia dos laudos gerados para referência futura e análise de dados.
Recurso de busca: Permitir ao usuário buscar e filtrar laudos anteriores com base em critérios como ID do paciente, data, tipo de exame, achados, etc.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/laudario-express.git
cd laudario-express
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
