const express = require("express");
const path = require("path");

const pages = require("./pages.js");

const server = express();

server
  .use(express.urlencoded({ extended: true }))

  .use(express.static("public"))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanage", pages.createOrphanage)
  .post("/save-orphanage", pages.saveOrphanage);

server.listen(5500, () => {
  console.log("Server started");
});



/*
// importar dependencia
const express = require('express');
const path = require('path');
//iniciando o express
const server = express();
server
//utilizando os arquivos estáticos
.use(express.static('public'))
//criar rota

// configurar templete engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

.get('/', (request, response) => {
   // console.log(path.join (__dirname, 'views', 'index.html'))
    
    return response.render('index')
       
}) 


//ligar o servidor 
server.listen(5500);

*/