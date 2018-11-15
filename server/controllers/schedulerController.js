exports.GetScheduleEvents = (request, response, calendarService, fileSystem) => {
    fileSystem.readFile('./credentials.json', (error, data) => 
    {
        calendarService.authorize(JSON.parse(data), (authentication) => 
        {
            calendarService.listAvailabilities(authentication, new Date(), (events) => {
                response.send(`${JSON.stringify(events)}`);
            });
        });
    });
}