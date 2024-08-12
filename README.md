## Automação de Serviço e Performance na API ServeRest

### Tecnologias utilizadas

- [Node.js](https://nodejs.org/en) v18.17.1
- [JEST](https://jestjs.io/pt-BR/docs/expect)
- [esLint](https://eslint.org)
- [Babel](https://babeljs.io)

### Documentação da API

A documentação da API ServeRest pode ser consulta [link da documentação](https://serverest.dev/#/)

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

Em breve ....

### Organização dos testes

Dentro da pasta de `__Test__` se encontra as validações e requisições para realizar testes de contrato e serviço da aplicação.

A pasta `coverage` armazena os dados do relatório de execução gerada

A pasta `environemnt` armazena dados fixos a serem usados nos testes

A pasta `api/responseBody` armazena payloads de envio

A pasta `api/schema` armazena os schemas

Na parta `helpers/utils` são funções utilitarias daquele serviço que poderão ser utilizadas em outros repositórios.

Com o arquivo `babel.config.js` irá realizar a "tradução" do ECS6 para o javascript.

Com o arquivo `jest.config.mjs` será feito a configuração dos testes.

```
├── __Test__
    ├── produtos/
    ├── usuarios/
├── api
    ├── responseBody/
        ├── users/
        ├── produtos/
    ├── schema/
        ├── users/
        ├── produtos/
├── coverage
├── environment
├── helpers
    ├── utils/
├── README.md
```
