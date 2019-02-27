var App;
var SQL;
var FS;

class SqlService {

    constructor(app, fileSystem, sql) {
        App = app;
        SQL = sql;
        FS = fileSystem;
    }

    async GetArticles(request, response) {
        let credentials = {};
        FS.readFile('./credentials.json', async (error, data) => {
            if (error) {
                response.send('ERROR: ' + error.message);
                return;
            }
            credentials = JSON.parse(data.toString());
            try {
                await SQL.connect(`mssql://${credentials.username}:${credentials.password}@${credentials.host}/${credentials.database}?encrypt=true`);
                let result = [];
                if (request.query.typeId) {

                    result = await SQL.query(`SELECT * FROM Article WHERE ArticleType = '${request.query.typeId}' AND Enabled = 1`);
                }
                else {
                    result = await SQL.query(`SELECT * FROM Article WHERE Enabled = 1`);

                }
                response.send(result);
            } catch (error) {
                if (error) {
                    response.send('ERROR: ' + error.message);
                }
            } finally {
                SQL.close();
            }
        });
    }

}

exports.SqlService = SqlService;