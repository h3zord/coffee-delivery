<h1 align="center">Boas-vindas ao repositório do Coffee Delivery!</h1>

## O que foi desenvolvido?

O <strong>Coffee Delivery</strong> é uma aplicação que simula a comercialização de cafés, onde existe uma página principal com todos os cafés disponíveis para a compra,
uma página de checkout onde o cliente preenche com seus dados, como endereço residêncial e forma de pagamento, conta também com a opção de adicionar ou remover mais itens ao
seu carrinho, e por fim caso a compra seja realizada, há uma página de sucesso, mostrando informações sobre a entrega do produto.
A aplicação foi desenvolvida com react e typescript, zod para validar informações do formulário e json server para simular requisições. A estilização foi realizada com a ferramenta styled-components. Foram feitos testes E2E com a bibilioteca
Cypress, verificando se os elementos estão presentes em tela, e conferindo se a requisição que busca todos os cafés se comporta de maneira adequada. Todos os testes estão presentes na pasta
<strong>cypress/e2e</strong>.

## Linguagens e ferramentas

- Vite
- React
- Typescript
- Styled Components
- Zod
- Json Server
- Eslint

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

### 4 - Inicie o json server:
Caso utilize o npm
```
npm run dev:server
```
Caso utilize o yarn
```
yarn run dev:server
```


### 5 - Inicie o projeto:
#### ➜ Abra outro terminal

Caso utilize o npm
```
npm run dev
```
Caso utilize o yarn
```
yarn run dev
```

<strong>O react irá executar a aplicação na porta padrão 5173.</strong>
<br/>
➜ http://localhost:5173/
<br/>
<br/>
<strong>O json server irá executar na porta 3333. O endpoint é "coffees".</strong>
<br/>
➜ http://localhost:3333/coffees