import React from 'react';
import axios from 'axios';

const PUBLIC_KEY = 'AIzaSyBnNAISIUKe6xdhq1_rjor2rxoI3UlMY7k';
const CALENDAR_ID = 'remi.bertogliati@gmail.com';
const dataUrl = ['https://www.googleapis.com/calendar/v3/calendars/',CALENDAR_ID, '/events?key=', PUBLIC_KEY].join('');

class WidgetCal3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    }
  }

  getall() {
    axios.get(dataUrl)
      .then(res => {
        const events = res.data;
        console.log(res.data.items);
        console.log(res.data.items.length);
        res.data.items.map(index =>  this.state.events.push(index))
        this.setState({ events : res.data.items });
      });
      console.log(this.state.events);
      setTimeout(()=>{console.log(this.state.events[1])},100)
  }

componentDidMount() {
  this.getall();
}

addEvent(eventStartTime, eventEndTime){

}

render() {
  return (
    <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between">
                <h4 class="card-title">Agenda</h4>
                <button type="button" class="btn btn-primary btn-icon-text float-end">
                <i class="mdi mdi-note-plus"></i>
                          Ajouter un événements
                </button>

                </div>
                <p class="card-description">
                  Concerts et événements à venir
                </p>
                <div class="table-responsive">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th>Event</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{this.state.events[0]?.summary}</td>
                        <td>{new Date(this.state.events[0]?.start.dateTime).toLocaleDateString(
                            'fr-FR',{weekday : 'long', year : 'numeric', month : 'long', day : 'numeric'})}</td>
                        <td>{new Date(this.state.events[0]?.end.dateTime).toLocaleDateString(
                            'fr-FR',{weekday : 'long', year : 'numeric', month : 'long', day : 'numeric'})}</td>
                        
                
                      </tr> 
                      <tr>
                      <td>{this.state.events[1]?.summary}</td>
                        <td>{new Date(this.state.events[1]?.start.dateTime).toLocaleDateString(
                            'FR',{weekday : 'long', year : 'numeric', month : 'long', day : 'numeric'})}</td>
                        <td>{new Date(this.state.events[1]?.end.dateTime).toLocaleDateString(
                            'fr-FR',{weekday : 'long', year : 'numeric', month : 'long', day : 'numeric'})}</td>
                      </tr>
                      <tr>
                      <td>{this.state.events[2]?.summary}</td>
                        <td>{new Date(this.state.events[2]?.start.dateTime).toLocaleDateString(
                            'fr-FR',{weekday : 'long', year : 'numeric', month : 'long', day : 'numeric'})}</td>
                        <td>{new Date(this.state.events[2]?.end.dateTime).toLocaleDateString(
                            'fr-FR',{weekday : 'long', year : 'numeric', month : 'long', day : 'numeric'})}</td>
                      </tr>
                      <tr>
                      <td>{this.state.events[3]?.summary}</td>
                        <td>{new Date(this.state.events[3]?.start.dateTime).toLocaleDateString(
                            'fr-FR',{weekday : 'long', year : 'numeric', month : 'long', day : 'numeric'})}</td>
                        <td>{new Date(this.state.events[3]?.end.dateTime).toLocaleDateString(
                            'fr-FR',{weekday : 'long', year : 'numeric', month : 'long', day : 'numeric'})}</td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
  );
}
}

export default WidgetCal3;