const scheduler = require('../controllers/schedulerController');

let app;
let calendarService;
let fileSystem;

exports.initialize = (appInstance, calendarServiceInstance, fileSystemInstance) => {
    calendarService = calendarServiceInstance;
    fileSystem = fileSystemInstance;
    app = appInstance;
    app.param('operator', () => {});
    app.route('/api/scheduler').get((request, respsonse) => {
        respsonse.send('Welcome to the Scheduler API!');
    });
    app.route('/api/scheduler/:id').get((request, respsonse) => {
        scheduler.GetScheduleEvents(request, respsonse, calendarService, fileSystem);
    });
}