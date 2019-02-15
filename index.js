const path = require('path');
const Express = require('express');
const SQLRoutes = require('./server/routes/sql-routes').SqlRoutes;
const SQLService = require('./server/services/sql-service').SqlService;
const SQL = require('mssql');
const FileSystem = require('fs');
const App = Express();
const CORS = require("cors");
const Port = process.env.PORT || 8080;

let sqlService = new SQLService(App, FileSystem, SQL);
let sqlRoutes = new SQLRoutes(App, sqlService);

App.use(CORS());
App.use(Express.static(path.join(__dirname, 'build')));

App.get('/API', (request, response) => {
    response.send('App Running...');
});

sqlRoutes.RegisterRoutes();

// Handles any requests that don't match the ones above
App.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/build/index.html'));
});

App.listen(Port, () => { console.log(`App Started listening on Port ${Port}...`) });