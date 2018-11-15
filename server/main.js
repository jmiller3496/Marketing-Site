
const express = require('express');
const schedulerRoutes = require('./routes/schedulerAPIRoutes');
const calendarService = require('./services/googleCalendarService');
const fileSystem = require('fs');
const app = express();

app.get('/', function (req, res) {
    res.send('App Started...');
});

schedulerRoutes.initialize(app, new calendarService.CalendarAPIService(fileSystem), fileSystem);

app.listen(3000, () => { console.log("App Started...") })