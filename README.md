## proffy

<div align="center">
	<img src="assets/img/logo.png" alt="Proffy Banner">
</div>

<div align="center">

  <a href="https://www.w3schools.com/tags/tag_doctype.asp" target="_blank">
    <img alt="HTML" src="https://img.shields.io/badge/HTML-used-blue?style=flat-square&logo=appveyor">
  </a>
  
  <!-- CSS -->
  <a href="https://devdocs.io/css/" target="_blank">
    <img alt="CSS" src="https://img.shields.io/badge/CSS-used-red?style=flat-square&logo=appveyor">
  </a>

  <!-- JavaScript -->
  <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank">
    <img alt="JavaScript" src="https://img.shields.io/badge/Javascript-used-yellow?style=flat-square&logo=appveyor">
  </a>

  <!-- Node.Js -->
  <a href="https://nodejs.org/en/" target="_blank">
    <img alt="NodeJs" src="https://img.shields.io/badge/NodeJS-used-3CB371?style=flat-square&logo=appveyor)">
  </a>

  <!-- SQLite -->
  <a href="https://www.sqlite.org/docs.html" target="_blank">
    <img alt="SQLite" src="https://img.shields.io/badge/SQLite-used-4E94D9?style=flat-square&logo=appveyor">
  </a>

  <!-- RocketSeat -->
  <a href="https://rocketseat.com.br" target="_blank">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%237519C1">
  </a>

</div>

<h3 align=center>
  
Proffy é um projeto desenvolvido na semana **Next Level Week 2.0** da **[Rocketseat][https://rocketseat.com.br]** utilizando as tecnologias **HTML, CSS, JavaScript, Node, React e React Native**.

</h3>

<h1 align=center>
  <img src="assets/img/TelaWeb-Mobile.png" alt="Tela Web-Mobile"/>
</h1>

## :rocket: Objetivo 

<p align=justify> 
  O projeto tem como finalidade <strong>estabelecer uma conexão</strong> entre os <strong>professores</strong> (Proffys) e os <strong>alunos</strong> que desejam um professor com qualificação para dar orientações e aulas sobre determinada matéria. Solucionando então um <strong>problema de comunicação</strong> entre <strong>professores</strong> que queiram dar aulas, e <strong>alunos</strong> que desejam um professor para orientar nos <strong>estudos em diversas áreas</strong>.
</p>


#### :pager: Website ([React][react] + [JavaScript][javascript])

  - **[React Router Dom][react_router_dom]**
  - **[React Icons][react_icons]**
  - **[Axios][axios]**
  - **[Leaflet][leaflet]**
  - **[React Leaflet][react_leaflet]**
  - **[React Dropzone][react_dropzone]**

#### ***:floppy_disk:	 Server ([NodeJS][node] + [JavaScript][javascript])***

  - **[Express][express]**
  - **[CORS][cors]**
  - **[KnexJS][knex]**
  - **[SQLite][sqlite3]**
  - **[ts-node][tsnode]**
  - **[dotENV][dotenv]**


#### ***:iphone: Mobile*** ([React Native][react_native] + [JavaScript][javascript])

  - **[Expo][expo]**
  - **[Expo Google Fonts][expo_google_fonts]**
  - **[React Navigation][react_navigation]**
  - **[Expo Constants][expo_constants]**
  - **[React Native SVG][react_native_svg]**
  - **[Axios][axios]**

#### ***Utilitários***

  - Protótipo: **[Figma](https://www.figma.com/)** &rarr; **<kbd>[Protótipo (Proffy)](https://www.figma.com/file/GHGS126t7WYjnPZdRKChJF/Proffy-Web/duplicate)</kbd>**
  - Editor: **[Visual Studio Code][vscode]** &rarr; Extensions: **<kbd>[SQLite][vscode_sqlite_extension]</kbd>**
  - Markdown: **[StackEdit][stackedit]**, **<kbd>[Markdown Emoji][markdown_emoji]</kbd>**
  - Commit Conventional: **[Commitlint][commitlint]**
  - Teste de API: **[Insomnia][insomnia]**
  - Ícones: **[Feather Icons][feather_icons]**, **[Font Awesome][font_awesome]**
  - Fontes: **[Archivo][font_archivo]**, **[Poopins][font_poopins]**

### ***Configurações Iniciais***

Primeiro, você precisa ter o <kbd>[NodeJS](https://nodejs.org/en/download/)</kbd> instalado na sua máquina. 

Se você estiver utilizando o **Linux**, você pode optar por instalar o **Node** através do gerênciador de versões <kbd>[asdf]</kbd> para facilitar o processo de mudança da versão do **Node**, quando for necessário.

Você pode optar também por utilizar o **yarn** no lugar do **npm**. Você pode instalar clicando nesse <kbd>[link][yarn]</kbd>, ou através do <kbd>[asdf]</kbd>.

Após ter o **Node** instalado, instale as dependências do **React e React Native (Expo)** de forma global, utilizando os comandos:

```sh
# React:
$ npm install create-react-app -g

# Expo (React Native):
$ npm install -g expo-cli 
```
Instale as dependências contidas nos arquivos `package.json` que se encontram na raíz do repositório (para o gerenciamento de commits), no diretório do **server**, no diretório do **website** e no diretório **mobile**. Para instalar as dependências, basta abrir o terminal no diretório e digitar o comando:

```sh
$ npm install

# ou

$ yarn
```

Veja os arquivos **`package.json`** do <kbd>[commitlint](./package.json)</kbd>, <kbd>[server](https://github.com/LuizCarlosVilela/nlw-2-backend/blob/master/package.json)</kbd>, <kbd>[website](https://github.com/LuizCarlosVilela/nlw-2-web/blob/master/package.json)</kbd> e <kbd>[mobile](https://github.com/LuizCarlosVilela/nlw-2-mobile/blob/master/package.json)</kbd>.

### ***Utilizando o Server***

```sh
# Abrindo o terminal no diretório do servidor:
$ cd ./sources/server

# Executando a aplicação em modo de desenvolvimento:
$ npm run dev
```

### ***Utilizando o Mobile***

Instale o aplicativo <kbd>[Expo](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en)</kbd> no seu smartphone Android e <kbd>[Expo](https://apps.apple.com/br/app/expo-client/id982107779)</kbd>.

```sh
# Abrindo o terminal no diretório do mobile:
$ cd ./sources/mobile

# Executando o mobile no modo de desenvolvimento:
$ npm run start
```
### :iphone: Dispositivos

**Android** 
Abra o aplicativo do expo e no modo **LAN** faça o scan do QRCode. 

**iPhone** 
Abra a câmera e escaneie o QRCode.

## :star2: Agradecimento

Agradeço a Rocketseat por nos mostrar que não há limite para a imaginação, por sempre incentivar os novos desenvolvedores e nos proporcionar o conhecimento para que possamos enfrentar novos desafios.

<div align=center>

  <table style="width:100%">
    <tr align=center>
      <th><strong>Rocketseat</strong></th>
      <th><strong>diego3g</strong></th>
      <th><strong>maykbrito</strong></th>
    </tr>
    <tr align=center>
      <td>
        <a href="https://rocketseat.com.br/">
          <img width="200" height="180" src="https://user-images.githubusercontent.com/38081852/83981650-1e2e6680-a8f6-11ea-9f42-6df8fe809e4b.png">
        </a>
      </td>
      <td>
        <a href="https://github.com/diego3g">
          <img width="200" height="180" src="https://user-images.githubusercontent.com/38081852/83981712-b7f61380-a8f6-11ea-9099-bd3677e97e39.jpg">
        </a>
      </td>
      <td>
        <a href="https://github.com/maykbrito">
          <img width="200" height="180" src="https://user-images.githubusercontent.com/38081852/83981753-1de29b00-a8f7-11ea-93cf-23d2ff65fa5c.png">
        </a>
      </td>
    </tr>
  </table>
  
</div>

**Instructors: [Diego Fernandes](https://github.com/diego3g) | [Mayk Brito](https://github.com/maykbrito)** 

`made with 💜 by raionedeveloper © 2020`


