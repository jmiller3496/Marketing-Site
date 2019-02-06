var App;
var SQLService;

class SqlRoutes {

    constructor(app, sqlService) {
        App = app;
        SQLService = sqlService;
    }

    RegisterRoutes() {
        App.get('/GetArticles', (request, response) => {
            SQLService.GetArticles(request, response);
        });
    }
}

exports.SqlRoutes = SqlRoutes;