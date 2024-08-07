<h1 align="center">Boas-vindas ao repositório do Coffee Delivery!</h1>

<div align="center"><img src="public/logo-app.svg"/></div>

<h2 align="center">
  <a href="https://app-coffee-delivery.vercel.app" target="_blank">
    Conheça o Coffee Delivery!
  </a>
</h2>

## Demonstração

<div align="center">
  https://github.com/user-attachments/assets/e928b202-7c40-4222-8837-b100ebff555f
</div>

<br/>

## O que foi desenvolvido?

<strong>Coffee Delivery</strong> é uma aplicação que simula a comercialização de cafés. A página principal exibe todos os cafés disponíveis para compra. Na página de checkout, o cliente preenche seus dados, como CEP, cidade, endereço residencial e forma de pagamento. A aplicação permite adicionar, remover e excluir itens do carrinho. Após a finalização da compra, o usuário é direcionado para uma página de sucesso, que mostra as informações sobre a entrega do produto.

A aplicação foi desenvolvida com Vite (versão 4.4.5), React (versão 18.2.0) e TypeScript. Foi utilizado React Hook Form para lidar com o formulário e Zod para validar as informações. A estilização foi realizada com Styled Components. Outras bibliotecas utilizadas incluem: ESLint, Framer Motion, Immer, React Toastify, Phosphor Icons e Git para controle de versão. Foram realizados testes E2E com a biblioteca Cypress, verificando a presença de elementos na tela e o comportamento correto da aplicação conforme a interação do usuário. Todos os testes estão na pasta <strong>cypress/e2e</strong>.

<strong>➜ A responsividade deste projeto está em desenvolvimento.</strong>

## Linguagens e ferramentas

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Hook Form](https://www.react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Styled Components](https://styled-components.com/)
- [ESLint](https://eslint.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Immer](https://immerjs.github.io/immer/)
- [React Toastify](https://fkhadra.github.io/react-toastify/installation/)
- [Phosphor Icons](https://phosphoricons.com/)
- [Cypress](https://www.cypress.io/)
- [Git](https://git-scm.com/)

## Instalação e execução

### 1 - Clone o repositório:
```
git clone git@github.com:h3zord/coffee-delivery.git
```

### 2 - Entre no repositório
```
cd coffee-delivery
```

### 3 - Instale as dependências:
Caso utilize o npm
```
npm install
```
Caso utilize o yarn
```
yarn install
```

### 4 - Inicie o projeto:

Caso utilize o npm
```
npm run dev
```
Caso utilize o yarn
```
yarn run dev
```

### 5 - Rodando os testes:
Caso utilize o npm
```
npm run cy:run
```
Caso utilize o yarn
```
yarn run cy:run
```

<strong>Vite irá executar a aplicação na porta padrão 5173.</strong>
<br/>
➜ http://localhost:5173
