# Automação de Serviço e Performance na API ServeRest

## Documentação da API

A documentação da API ServeRest pode ser consulta [link da documentação](https://serverest.dev/#/)

## Tecnologias utilizadas


![Babel](https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![GithubAction](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)


## Como configurar e rodar o projeto

- Instale todas as dependencias

```
    yarn
```

- Rode os testes com o comando abaixo

```
  yarn test
```

## Acesse o report 

Em breve ....

## Organização dos testes

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
