# App pássaro urbano

```javascript
@Author Johnny Carvalho
@Date 2022-10-11
```

# Iniciar Projeto

Para iniciar o projeto é necessário a instalação de algumas ferramentas, são elas:

``` npm install ```

``` npm install --save bootstrap ```

``` npm install --save popper.js ```

``` npm install --save jquery ```

``` npm install -g json-server ```

Em seguida, no arquivo ```angular.json``` deve-se fazer as seguites auterações:

```javascript
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

Com tudo concluído, abra o navegador no enderaço ```http://localhost:4200```