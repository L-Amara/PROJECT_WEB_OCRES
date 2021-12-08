
import React from 'react';
/*import { oauth2 } from 'googleapis/build/src/apis/oauth2';
import { OAuth2Client } from 'google-auth-library'; 
//import http2 from 'googleapis-common/build/src/http2.js';


const { google } = require('googleapis');
const { GoogleAuth } = require('google-auth-library');

const { OAuth2 } = google.auth;

const oAUth2Client = new OAuth2('183168940637-1cn3rd91gde932dor17j5glqeipjmuc3.apps.googleusercontent.com',
    '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')

oAUth2Client.setCredentials({
    refresh_token:
        '1//04PQ265kcVd1zCgYIARAAGAQSNwF-L9IrtKgYDDqfACl9N8iZ4sAtyGl6I8CRmd8SyzZqJhYZFi4w6U8j2Qmk-WzqBnKqmBP1e5M'
})

const calendar = google.calendar({ version: 'v3', auth: oAUth2Client })*/

class WidgetCal extends React.Component {
/*
    addEvent(){

        const eventStartTime = new Date()
        eventStartTime.setDate(eventStartTime.getDate() + 2)      //event start tomorrow
        
        const eventEndTime = new Date()
        eventEndTime.setDate(eventEndTime.getDate() + 2)     //end on the same day, but 45min later
        eventEndTime.setMinutes(eventEndTime.getMinutes() + 45)
        
        console.log('Start ', eventStartTime)
        console.log('End ', eventEndTime)
        
        
        const event = {
            summary: 'Meeting test',
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

    }
*/

    render(){
        return (
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Hoverable Table</h4>
                <p class="card-description">
                  Add class <code>.table-hover</code>
                </p>
                <div class="table-responsive">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th>User</th>
                        <th>Product</th>
                        <th>Sale</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Jacob</td>
                        <td>Photoshop</td>
                        <td class="text-danger"> 28.76% <i class="ti-arrow-down"></i></td>
                        <td><label class="badge badge-danger">Pending</label></td>
                      </tr>
                      <tr>
                        <td>Messsy</td>
                        <td>Flash</td>
                        <td class="text-danger"> 21.06% <i class="ti-arrow-down"></i></td>
                        <td><label class="badge badge-warning">In progress</label></td>
                      </tr>
                      <tr>
                        <td>John</td>
                        <td>Premier</td>
                        <td class="text-danger"> 35.00% <i class="ti-arrow-down"></i></td>
                        <td><label class="badge badge-info">Fixed</label></td>
                      </tr>
                      <tr>
                        <td>Peter</td>
                        <td>After effects</td>
                        <td class="text-success"> 82.00% <i class="ti-arrow-up"></i></td>
                        <td><label class="badge badge-success">Completed</label></td>
                      </tr>
                      <tr>
                        <td>Dave</td>
                        <td>53275535</td>
                        <td class="text-success"> 98.05% <i class="ti-arrow-up"></i></td>
                        <td><label class="badge badge-warning">In progress</label></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          
        );
      }
    }
    
    export default WidgetCal;






