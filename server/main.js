const express = require('express');
const schedulerRoutes = require('./routes/schedulerAPIRoutes');
const calendarService = require('./services/googleCalendarService');
const fileSystem = require('fs');
const app = express();
const cors = require("cors");
const port = 7777;

app.use(cors());

app.get('/', function (req, res) {
    res.send('App Started...');
});

schedulerRoutes.initialize(app, new calendarService.CalendarAPIService(fileSystem), fileSystem);

app.use(express.static(__dirname + "/../.tmp")).listen(port, () => { console.log(`App Started listening on Port ${port}...`) });