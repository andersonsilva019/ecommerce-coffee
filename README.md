<h1 align="center">
    <img width=300 alt="ecommerce-coffee" src="https://res.cloudinary.com/drsxhihfr/image/upload/v1658963354/images/logo_iaibgp.svg" />
    <br>
    Encontre o café perfeito para qualquer hora do dia
</h1>




<p align="center">

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/andersonsilva019/ecommerce-coffee"/>



  <img alt="Repository size" src="https://img.shields.io/github/repo-size/andersonsilva019/ecommerce-coffee">

  <a href="https://github.com/andersonsilva019/ecommerce-coffee/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/andersonsilva019/ecommerce-coffee">
  </a>

  <a href="https://github.com/andersonsilva019/ecommerce-coffee/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/andersonsilva019/ecommerce-coffee">
  </a>

  <a href="https://github.com/andersonsilva019/ecommerce-coffee/pulls">
    <img alt="GitHub closed pull requests" src="https://img.shields.io/github/issues-pr-closed/andersonsilva019/ecommerce-coffee">
  </a>

</p>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>
</p>

<img src="https://res.cloudinary.com/drsxhihfr/image/upload/v1658962915/images/banner_ysirkh.png">

## :computer: Ecommerce Coffee

Esse projeto tem por finalidade aprimorar o desenvolvimento de um projeto de e-commerce com o React. Toda a estilização do projeto foi feita pelo styled-components. Para a parte do formulário de endereço de entrega, foi utilizado a biblioteca formik. Escolhi o formik para poder testar essa ferramenta.

Para realizar a simulação de chamadas a API, foi utilizado o json-server configurado para gerar uma latência de `750ms`.

```json
//package.json
"scripts": {
    ...
    "server": "json-server db.json -w -d 750 -p 3333"
  }
```
## :rocket: Tecnologias
- React
- Styled-components
- Formik
- React Router
- Json-server
- Yup