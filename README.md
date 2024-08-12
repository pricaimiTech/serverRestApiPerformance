## Automação de Serviço [![Run Tests](https://github.com/pricaimiTech/geographqlJestAPI/actions/workflows/main.yml/badge.svg)](https://github.com/pricaimiTech/geographqlJestAPI/actions/workflows/main.yml)

### Tecnologias utilizadas

- [Node.js](https://nodejs.org/en) v18.17.1
- [JEST](https://jestjs.io/pt-BR/docs/expect)
- [esLint](https://eslint.org)
- [Babel](https://babeljs.io)

### Documentação da API

A documentação da API geographql pode ser consulta [link da documentação](https://geographql.netlify.app/docs/queries/country)

### Como configurar e rodar o projeto

- Instale todas as dependencias

```
    yarn
```

- Rode os testes com o comando abaixo

```
  yarn test
```

### Acesse o report 

Para acessar o report da última execução click no [link](https://pricaimitech.github.io/geographqlJestAPI/docs/lcov-report/index.html)

### Organização dos testes

Dentro da pasta de `__Test__` se encontra as validações e requisições para realizar testes de contrato e serviço da aplicação.

A pasta `coverage` armazena os dados do relatório de execução gerada

A pasta `environemnt` armazena dados fixos a serem usados nos testes

A pasta `graphql/query` armazena as querys e variabels

A pasta `graphql/schema` armazena os schemas

Na parta `helpers/date` estão armazenadas as listas de massa de teste

Na parta `helpers/utils` são funções utilitarias daquele serviço que poderão ser utilizadas em outros repositórios.

Com o arquivo `babel.config.js` irá realizar a "tradução" do ECS6 para o javascript.

Com o arquivo `jest.config.mjs` será feito a configuração dos testes.

```
├── __Test__
├── coverage
├── environment
├── graphql
    ├── query/
    ├── schema/
├── helpers
    ├── date/
    ├── utils/
├── README.md
```
