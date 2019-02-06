const Express = require('express');
const SQLRoutes = require('./routes/sql-routes').SqlRoutes;
const SQLService = require('./services/sql-service').SqlService;
const SQL = require('mssql');
const FileSystem = require('fs');
const App = Express();
const CORS = require("cors");
const Port = 8080;

let sqlService = new SQLService(App, FileSystem, SQL);
let sqlRoutes = new SQLRoutes(App, sqlService);

App.use(CORS());

App.get('/', (request, response) => {
    response.send('App Running...');
});

sqlRoutes.RegisterRoutes();

App.use(Express.static(__dirname + "/../.tmp")).listen(Port, () => { console.log(`App Started listening on Port ${Port}...`) });