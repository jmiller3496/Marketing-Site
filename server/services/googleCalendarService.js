const readline = require('readline');
const { google } = require('googleapis');
const util = require('util');

const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
const TOKEN_PATH = 'token.json';

let fs;

class GoogleCalendarAPIService {

  constructor(fileSystem) {
    fs = fileSystem;
  }

  authorize(credentials, callback) {
    const { client_secret, client_id, redirect_uris } = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

    fs.readFile(TOKEN_PATH, (err, token) => {
      if (err) return this.getAccessToken(oAuth2Client, callback);
      oAuth2Client.setCredentials(JSON.parse(token));
      console.log("AHAHA" + JSON.parse(token));
      callback(oAuth2Client);
    });
  }

  getAccessToken(oAuth2Client, callback) {
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question('Enter the code from that page here: ', (code) => {
      rl.close();
      oAuth2Client.getToken(code, (err, token) => {
        if (err) return console.error('Error retrieving access token', err);
        oAuth2Client.setCredentials(token);

        fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
          if (err) console.error(err);
          console.log('Token stored to', TOKEN_PATH);
        });
        callback(oAuth2Client);
      });
    });
  }

  listEvents(auth, callback) {
    const calendar = google.calendar({ version: 'v3', auth });
    calendar.events.list({
      calendarId: 'primary',
      timeMin: (new Date()).toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    }, (err, res) => {
      if (err) return console.log('The API returned an error: ' + err);
      callback(res.data.items);
    });
  }

  listAvailabilities(auth, date, callback) { //TODO: CHANGE TO LIST AVAILABILITIES INSTEAD OF BUSY TIMES AS IS CURRENTLY
    const calendar = google.calendar({ version: 'v3', auth });
    let dateStart = new Date(date);
    let dateEnd = new Date(date.setDate(date.getDate() + 1));
    dateStart.setHours(0, 0, 0, 0);
    dateEnd.setHours(0, 0, 0, 0);

    console.log((dateStart).toISOString());
    console.log((dateEnd).toISOString());
    const check = {
      auth: auth,
      resource: {
        timeMin: dateStart,
        timeMax: dateEnd,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        items: [{ id: 'primary' }]
      }
    }
    calendar.freebusy.query(check, (err, res) => {
      if (err) return console.log('The API returned an error: ' + err);
      // console.log(JSON.stringify(util.inspect(res.data.calendars.primary)));


      // let events = JSON.parse(JSON.stringify(util.inspect()));

      let freeTimes = [];
      let busyTimes = [ dateStart, ...res.data.calendars.primary.busy.map((event) => event.start), ...res.data.calendars.primary.busy.map((event) => event.end), dateEnd].sort((dateA, dateB) => new Date(dateA).getTime() - new Date(dateB).getTime() );

      // console.log(busyTimes);
      for (let i = 0; i < busyTimes.length / 2 + 1; i++) {
        console.log(i);
        if (i == 0) {
          let freeTimeStart = dateStart;
          let freeTimeEnd = busyTimes[i];
          freeTimes.push({ freeTimeStart, freeTimeEnd });
        } else if (i == busyTimes.length + 1) {
          let freeTimeStart = busyTimes[i * 2];
          let freeTimeEnd = dateEnd;
          freeTimes.push({ freeTimeStart, freeTimeEnd });
        } else {
          if (i * 2 + 1 < busyTimes.length) {
            let freeTimeStart = busyTimes[i * 2];
            let freeTimeEnd = busyTimes[i * 2 + 1];
            freeTimes.push({ freeTimeStart, freeTimeEnd });
          }
        }
        console.log(freeTimes);
      }

      freeTimes = freeTimes.filter((timeRange) => { return new Date(timeRange.freeTimeEnd).getTime() !== new Date(timeRange.freeTimeStart).getTime() });
      console.log(freeTimes);


      callback(freeTimes);
    });
  }

}

exports.CalendarAPIService = GoogleCalendarAPIService;