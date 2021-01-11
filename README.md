<h2 align="center">
   DSDeliver - Semana DevSuperior 2.0
</h2>

<div align="center">
   <img alt="DSDeliver" title="#DSDeliver" src=".github/img/DSDeliver.png" width="75%" />
</div>

<h3 align="center">
   <a href="https://github.com/mathrb22">
      <img alt="Made by mathrb22" src="https://img.shields.io/badge/made%20by-mathrb22-yellow">
   </a>

   <img alt="GitHub Repo Size" src="https://img.shields.io/github/repo-size/mathrb22/DSDeliver-sds2">

   <img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/mathrb22/DSDeliver-sds2">

   <a href="https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V14.md#14.15.0">
      <img alt="Nodejs Version" src="https://img.shields.io/badge/node.js-v14.15.0-informational?logo=Node.JS">
   </a>

   <a aria-label="React Version" href="https://github.com/facebook/react/blob/master/CHANGELOG.md#1701-october-22-2020">
      <img src="https://img.shields.io/badge/react-%5E17.0.1-informational?logo=react"></img>
   </a>

   <a href="https://github.com/mathrb22/DSDeliver-sds2/commits/main">
      <img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/mathrb22/DSDeliver-sds2">
   </a>

   <a href="https://github.com/mathrb22/DSDeliver-sds2/issues">
      <img alt="GitHub Issues" src="https://img.shields.io/github/issues/mathrb22/DSDeliver-sds2">
   </a>

   <a href="https://github.com/mathrb22/DSDeliver-sds2/pulls">
      <img alt="Pull Requests Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square">
   </a>

   <a href="https://github.com/mathrb22/DSDeliver-sds2/blob/master/LICENSE">
      <img alt="GitHub License" src="https://img.shields.io/github/license/mathrb22/DSDeliver-sds2">
   </a>
   </br>
   </br>

   <a href="#-tecnologias-utilizadas">
      <img alt="Java" src="https://img.shields.io/badge/java-%23ED8B00.svg?&style=for-the-badge&logo=java&logoColor=white">
      <img alt="Spring" src="https://img.shields.io/badge/spring%20-%236DB33F.svg?&style=for-the-badge&logo=spring&logoColor=white">
      <img alt="Postgres" src="https://img.shields.io/badge/postgres-%23316192.svg?&style=for-the-badge&logo=postgresql&logoColor=white">
      <img alt="Heroku" src="https://img.shields.io/badge/heroku%20-%23430098.svg?&style=for-the-badge&logo=heroku&logoColor=white">
      <img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E">
      <img alt="TypeScript" src="https://img.shields.io/badge/typescript%20-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white">
      <img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB">
      <img alt="React Native" src="https://img.shields.io/badge/react_native%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB">
   </a>
</h3>

<div align="center">

[**Sobre**](#-sobre) &nbsp;&nbsp;**|**&nbsp;&nbsp;
[**Features**](#-features) &nbsp;&nbsp;**|**&nbsp;&nbsp;
[**Netlify**](#-aplicação-web-no-netlify) &nbsp;&nbsp;**|**&nbsp;&nbsp;
[**Tecnologias utilizadas**](#-tecnologias-utilizadas) &nbsp;&nbsp;**|**&nbsp;&nbsp;
[**Layout**](#-layout) &nbsp;&nbsp;**|**&nbsp;&nbsp;
[**Instalação e execução**](#-instalação-e-execução) &nbsp;&nbsp;**|**&nbsp;&nbsp;
[**Como contribuir**](#-como-contribuir) &nbsp;&nbsp;**|**&nbsp;&nbsp;
[**Contato**](#-contato) &nbsp;&nbsp;**|**&nbsp;&nbsp;
[**Licença**](#-licença)

</div>

## 📃 Sobre

**DSDeliver** é o projeto desenvolvido durante a **Semana DevSuperior 2.0**, um evento online produzido pela [**DevSuperior**](https://github.com/devsuperior) com duração de uma semana, onde serão desenvolvidos o back-end, front-end web, e o aplicativo mobile.

Esta é uma aplicação que registra os pedidos realizados pelos clientes dos restaurantes e organiza as entregas para os endereços informados.

## ✨ Features

✔ Listagem de produtos via API (backend), hospedada no Heroku

✔ Seleção de items do pedido

✔ Busca de endereços através de um mapa interativo e dinâmico

✔ Validação e finalização de pedidos

✔ Layout responsivo

✔ Página de erro 404 personalizada para rotas inexistentes

- [ ] Acompanhamento de pedidos pendentes pelo app mobile (em desenvolvimento)
- [ ] Criação de rotas de navegação GPS - app mobile (em desenvolvimento)
- [ ] Confirmação das entregas - app mobile (em desenvolvimento)

## 🌎 Aplicação Web no Netlify

Link para acessar a aplicação hospedada no Netlify:

**https://mathrb22-sds2.netlify.app/**

> Obs.: na primeira vez que é executada, é possível que levem alguns segundos para que os produtos sejam carregados, devido ao tempo de inatividade do servidor do Heroku.

## 🚀 Tecnologias utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:

- [**JDK 11**](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html): Java Development Kit 11 - um kit de desenvolvimento para construção de aplicações e componentes usando a linguagem de programação Java;

- [**STS (Spring Tool Suite)**](https://spring.io/tools): um ambiente de desenvolvimento baseado em Eclipse, personalizado para desenvolvimento de aplicações Spring;

- [**Postman**](https://www.postman.com/): uma ferramenta que tem como objetivo testar serviços RESTful (Web APIs) por meio do envio de requisições HTTP e da análise do seu retorno;

  > A workspace do Postman com as requisições está disponível para download neste repositório. Baixe e importe o arquivo **`DSDeliver.postman_collection.json`** em seu Postman.

- [**Postgresql 12**](https://www.postgresql.org/download/): um sistema gerenciador de banco de dados objeto relacional (SGBD), desenvolvido como projeto de código aberto;

- [**pgAdmin**](https://www.pgadmin.org/): ferramenta para administração do Postgresql, permite fazer realizar as tarefas necessárias para administração do banco de dados;

- [**Heroku CLI**](https://devcenter.heroku.com/articles/heroku-cli): interface de linha de comando do Heroku que facilita a criação e gerenciamento de seus apps no Heroku diretamente de um terminal;

- [**Git**](https://git-scm.com/downloads): o sistema de controle de versão distribuído de código aberto mais utilizado;

- [**Visual Studio Code**](https://code.visualstudio.com/): um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS, recomendado para o desenvolvimento de aplicações web;

- [**Node.js**](https://nodejs.org/en/): um interpretador de JavaScript assíncrono com código aberto orientado a eventos;

- [**TypeScript**](https://www.typescriptlang.org/): um super conjunto da linguagem JavaScript que fornece classes, interfaces e tipagem estática opcional. Utilizado em conjunto com React no frontend web;

- [**React**](https://reactjs.org): uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário (frontend) em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros;

- [**React Native**](https://facebook.github.io/react-native/): uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e IOS de forma nativa;

## 📟 Layout

O layout das telas da aplicação **DSDeliver** foi desenvolvido pela equipe da [**DevSuperior**](https://github.com/DevSuperior/) através da ferramenta online [**Figma**](https://www.figma.com), um software de prototipação voltado para **UI Design (design de interface)**.
Você pode acessar o layout através deste link: [**DSDeliver**](https://www.figma.com/file/LAIvIzyaJsSl2A9NMrnR7W/DSDeliver01).

<figure>
<div align="center">
  <img src=".github/img/DSDeliver-Layouts.png"  alt="Layouts">
  <figcaption>Layout das telas da aplicação</figcaption>
</div>
</figure>

<figure>
<div align="center">
  <img src=".github/img/DSDeliver-Home.png"  alt="Página inicial">
  <figcaption>Página inicial</figcaption>
</div>
</figure>

<figure>
<div align="center">
  <img src=".github/img/DSDeliver-Orders.png"  alt="Página de pedidos">
  <figcaption>Página de pedidos</figcaption>
</div>
</figure>

<figure>
<div align="center">
  <img src=".github/img/DSDeliver-404.png"  alt="Página de erro 404">
  <figcaption>Página de erro 404</figcaption>
</div>
</figure>

## 🔧 Instalação e execução

Para baixar o código-fonte do projeto em sua máquina, primeiramente terá que ter instalado o [**Git**](https://git-scm.com/).

Com o Git instalado, em seu terminal execute o seguinte comando:

```bash
$ git clone https://github.com/mathrb22/DSDeliver-sds2.git
```

### Backend

- Com o projeto baixado, abra-o em sua IDE (Spring Tool Suite).
- Como será executado localmente em sua máquina, abra o arquivo **`application.properties`** e altere o perfil ativo de **`prod`** para **`test`**:
- Execute o arquivo **`DsdeliverApplication.java`**.
- A aplicação Spring Boot será executada no endereço: _**`http://localhost:8080/`**_.

---

### Frontend web

Para instalar e executar o frontend-web do DSDeliver, terá que ter instalado em sua máquina também o [**Node.js**](https://nodejs.org/en/).

1. Vá até a pasta front-web do repositório:
   ```bash
   $ cd front-web
   ```
2. Instale as dependências do projeto:
   ```bash
   $ npm install
   ```
   Atenção, antes de executar a aplicação React:

> Para a busca de endereços no mapa, foi utilizado o [**Mapbox**](https://www.mapbox.com/), uma plataforma de mapeamento que permite que seus clientes criem soluções de mapeamento personalizadas.

- Então, se deseja carregar os endereços no mapa, você precisará [**criar uma conta gratuita na plataforma**](https://account.mapbox.com/auth/signup/) e utilizar seu token pessoal de acesso à API.
- Após a criação da sua conta, na página principal do MapBox, clique em “Account”. Em configurações, clique em **“API access tokens”** e depois em “Create a new token”;
- Copie o token gerado, e dentro da pasta **`front-web`**, crie um arquivo com a extensão **`.env`**, onde serão definidas as variáveis de ambiente do projeto.
- Adicione o seguinte conteúdo ao seu arquivo, substituindo **`token`** pelo seu token copiado:

  ```
  REACT_APP_ACCESS_TOKEN_MAP_BOX=token
  REACT_APP_API_URL=http://localhost:8080
  ```

- Inicie a aplicação React:
  ```bash
  $ npm start
  ```
- Acesse a aplicação pelo endereço: _**`http://localhost:3000/`**_.

---

### Mobile

🚧 Em desenvolvimento... 🚧

## 💡 Como contribuir

- Faça um **_fork_** desse repositório;
- Crie um **branch** para a sua feature: `git checkout -b minha-feature`;
- Faça um **commit** com suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça um **push** para o seu branch: `git push origin minha-feature`;
- Faça um **pull request** com sua feature;

Pull requests são sempre bem-vindos. Em caso de dúvidas ou sugestões, crie uma _**issue**_ ou entre em contato comigo.

## 📲 Contato

Entre em contato comigo por e-mail ou pelo meu LinkedIn:

<a href="mailto:mathribe2020@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail"/></a>
<a href="https://www.linkedin.com/in/matheus-ribeiro-dev/"><img src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>

## 📝 Licença

<a href="https://github.com/mathrb22/DSDeliver-sds2/blob/main/LICENSE">
    <img alt="GitHub License" src="https://img.shields.io/github/license/mathrb22/DSDeliver-sds2">
</a>

Esse projeto está sob a licença **MIT**. Veja o arquivo _**LICENSE**_ para mais detalhes.

---

<h5 align="center">
  &copy;2021 - <a href="https://github.com/mathrb22/">Matheus Ribeiro</a>
</h5>
