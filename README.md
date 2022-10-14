<h1 align="center">
    App pássaro urbano
</h1>

## Tecnologias utilizadas no projeto

<div style="display: inline_block"><br>
  <img align="center"alt="Johnny-Angular" heigth="45" width="45" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg">
  <img align="center" alt="Johnny-TS" height="40" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg">
  <img align="center" alt="Johnny-Bootstrap" height="50" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg">
</div>

<hr>

```javascript
@Author Johnny Carvalho
@Date 2022-10-11
```

## Descrição do projeto

Este projeto faz parte da etapa de aprendizado do framework Angular, um projeto que aborda muitas funcionalidades do framework, tais como:
- Componentes
- Modulos
- Services com requisição http utilizando o HttpClientModule e o HttpClient
- API fake utilizando o json-server
- Data Binding
- Property Binding
- FormGroup e FormControl
- *ngIf, *ngFor . . .

Entre muitas outras funcionalidades desse framework super moderno de poderoso. Foram utilizados ferramentas como, popper.js, jquery, bootstrap, 
json-server, Angular com TypeScript, como editor foi utilizado o VsCode.

## Iniciar Projeto

Para iniciar o projeto é necessário a instalação de algumas ferramentas, são elas:

``` npm install ```

``` npm install --save bootstrap ```

``` npm install --save popper.js ```

``` npm install --save jquery ```

``` npm install -g json-server ```

Em seguida, no arquivo ```angular.json``` deve-se fazer as seguites auterações:

```json
"styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],
            "scripts": [
              "node_modules/popper.js/dist/umd/popper.min.js",
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
```

Com as implementações efetuadas, deve-se rodar o seguinte comando no terminal:

```ng serve```

Em seguida, abra um novo terminal na pasta back-end, com o terminal aberto insira o seguinte comando:

``` javascript
json-server --watch banco-de-dados.json 
```

Com tudo concluído, abra o navegador no enderaço ```http://localhost:4200```, feito isso é provável que a página principal do sistema
tenha sido iniciada.
