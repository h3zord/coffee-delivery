<h1 align="center">Boas-vindas ao repositório do Coffee Delivery!</h1>
<div align="center">☕</div>

## O que foi desenvolvido?

O <strong>Coffee Delivery</strong> é uma aplicação que simula a comercialização de cafés, onde existe uma página principal com todos os cafés disponíveis para a compra,
uma página de checkout onde o cliente preenche seus dados, como: cep, cidade, endereço residêncial e forma de pagamento. Conta também com a opção de adicionar e remover itens do
seu carrinho, ou se o usuário desejar, removê-los. Por fim caso a compra seja realizada, ocorre o direcionamento para a página de sucesso, mostrando informações sobre a entrega do produto.

A aplicação foi desenvolvida com Vite, React e Typescript, foi utilizado React Hook Form para lidar com o formulário e o Zod para validar essas informações. A estilização foi realizada com a ferramenta Styled Components. Mais algumas bibliotecas foram usadas, como: Eslint, Framer Motion, Immer, React Toastify e Phosphor Icons. Foram feitos testes E2E com a bibilioteca Cypress, verificando se os elementos estão presentes em tela, e se de acordo com a interação do usuário a aplicação se comporta de maneira correta. Todos os testes estão presentes na pasta <strong>cypress/e2e</strong>.

➜ <strong>A responsividade desse projeto está em desenvolvimento.</strong>

## Linguagens e ferramentas

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [React Hook Form](https://www.react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Cypress](https://www.cypress.io/)
- [Framer Motion](https://www.framer.com/motion/)
- [Immer](https://immerjs.github.io/immer/)
- [React Toastify](https://fkhadra.github.io/react-toastify/installation/)
- [Phosphor Icons](https://phosphoricons.com/)
- [Eslint](https://eslint.org/)

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

<strong>O vite irá executar a aplicação na porta padrão 5173.</strong>
<br/>
➜ http://localhost:5173
<br/>