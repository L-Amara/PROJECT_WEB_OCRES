



const { google } = require('googleapis');
const { GoogleAuth } = require('google-auth-library');

const { OAuth2 } = google.auth;

const oAUth2Client = new OAuth2('183168940637-1cn3rd91gde932dor17j5glqeipjmuc3.apps.googleusercontent.com',
    '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')

oAUth2Client.setCredentials({
    refresh_token:
        '1//04PQ265kcVd1zCgYIARAAGAQSNwF-L9IrtKgYDDqfACl9N8iZ4sAtyGl6I8CRmd8SyzZqJhYZFi4w6U8j2Qmk-WzqBnKqmBP1e5M'
})

const calendar = google.calendar({ version: 'v3', auth: oAUth2Client })



        const eventStartTime = new Date()
        eventStartTime.setDate(eventStartTime.getDate() + 2)      //event start tomorrow
        
        const eventEndTime = new Date()
        eventEndTime.setDate(eventEndTime.getDate() + 2)     //end on the same day, but 45min later
        eventEndTime.setMinutes(eventEndTime.getMinutes() + 45)
        
        console.log('Start ', eventStartTime)
        console.log('End ', eventEndTime)
        
        
        const event = {
            summary: 'Big Show',
            location: '37 Quai de Grenelle, 75015 Paris',
            colorId: 1,
            description: 'super test about new event so hyped :)',
            start: {
                dateTime: eventStartTime,
                timeZone: 'Europe/Paris',
            },
            end: {
                dateTime: eventEndTime,
                timeZone: 'Europe/Paris',
            },
        
        }
        
        calendar.freebusy.query(
            {
                resource: {
                    timeMin: eventStartTime,
                    timeMax: eventEndTime,
                    timeZone: 'Europe/Paris',
                    items: [{ id: 'primary' }],
                },
            },
            (err, res) => {
                if (err) return console.error('Freebusy query error: ', err)
        
                const eventsArray = res.data.calendars.primary.busy
        
                if (eventsArray.length === 0)
                    return calendar.events.insert(
                        { calendarId: 'primary', resource: event },
                        err => {
                            if (err) return console.error('Calendar event creation error: ', err)
        
                            return console.log('Calendar event created')
                        })
                return console.log('Cannot add, busy')
            })







