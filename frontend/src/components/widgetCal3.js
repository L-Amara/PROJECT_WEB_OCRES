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
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">
              Ajouter un événement
            </button>


            <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close">X</button>
                  </div>
                  <div class="modal-body">
                    <div class="card">
                      <div class="card-body">

                        <form class="forms-sample" onSubmit={this.handleSubmit}>
                          <div class="form-group row">
                            <label>Name of the Event</label>

                            <input type="text" class="form-control" id='eventName' />

                          </div>
                          <div class="form-group row">
                            <label>Start date of the event</label>
                            <input class="form-control" placeholder="dd/mm/yyyy" id='eventDate' />
                          </div>
                          <div class="form-group row">
                            <label>Start time of the event</label>
                            <input class="form-control" placeholder="hh:mm:ss" id='startTime' />
                          </div>
                          <div class="form-group row">
                            <label>End date of the event</label>
                            <input class="form-control" placeholder="dd/mm/yyyy" id='endDate' />
                          </div>
                          <div class="form-group row">
                            <label>End time of the event</label>
                            <input class="form-control" placeholder="hh:mm:ss" id='endTime' />
                          </div>

                          <button type="submit" class="btn btn-primary mr-2">Submit</button>
                          <button class="btn btn-light" data-dismiss="modal">Cancel</button>
                        </form>
                      </div>
                    </div>

                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary" id='submit' >Understood</button>
                  </div>
                </div>
              </div>
            </div>


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
                        <td>{this.state.events[this.state.events.length-1]?.summary}</td>
                        <td>{new Date(this.state.events[this.state.events.length-1]?.start.dateTime).toLocaleDateString(
                            'fr-FR',{weekday : 'long', year : 'numeric', month : 'long', day : 'numeric'})}</td>
                        <td>{new Date(this.state.events[this.state.events.length-1]?.end.dateTime).toLocaleDateString(
                            'fr-FR',{weekday : 'long', year : 'numeric', month : 'long', day : 'numeric'})}</td>
                        
                
                      </tr> 
                      <tr>
                      <td>{this.state.events[this.state.events.length-2]?.summary}</td>
                        <td>{new Date(this.state.events[this.state.events.length-2]?.start.dateTime).toLocaleDateString(
                            'FR',{weekday : 'long', year : 'numeric', month : 'long', day : 'numeric'})}</td>
                        <td>{new Date(this.state.events[this.state.events.length-2]?.end.dateTime).toLocaleDateString(
                            'fr-FR',{weekday : 'long', year : 'numeric', month : 'long', day : 'numeric'})}</td>
                      </tr>
                      <tr>
                      <td>{this.state.events[this.state.events.length-3]?.summary}</td>
                        <td>{new Date(this.state.events[this.state.events.length-3]?.start.dateTime).toLocaleDateString(
                            'fr-FR',{weekday : 'long', year : 'numeric', month : 'long', day : 'numeric'})}</td>
                        <td>{new Date(this.state.events[this.state.events.length-3]?.end.dateTime).toLocaleDateString(
                            'fr-FR',{weekday : 'long', year : 'numeric', month : 'long', day : 'numeric'})}</td>
                      </tr>
                      <tr>
                      <td>{this.state.events[this.state.events.length-4]?.summary}</td>
                        <td>{new Date(this.state.events[this.state.events.length-4]?.start.dateTime).toLocaleDateString(
                            'fr-FR',{weekday : 'long', year : 'numeric', month : 'long', day : 'numeric'})}</td>
                        <td>{new Date(this.state.events[this.state.events.length-4]?.end.dateTime).toLocaleDateString(
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