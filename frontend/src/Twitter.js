import React from 'react';
import axios from 'axios';

/* const fetch = require('node-fetch') */

class Twitter extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      query: '',
      token: '',
      followers: 0
    };
  }

  async getUserByUsername() {

    const TOKEN = 'AAAAAAAAAAAAAAAAAAAAAGNBWgEAAAAAol1dRhWSGndNjHI6uo6uthhUXXk%3DeiLc8IuNhDxkrXBX26aiOK4BNErH857aVqDutJXmi9nN2lRSyZ'

    const body = await axios.get(`https://api.twitter.com/2/users/by/username/${this.props.query}?user.fields=id,name,username,public_metrics`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      }
    })
    console.log(body);

  }



  /*  async getUserByUsername(compteTwitter) {
     const TOKEN = 'AAAAAAAAAAAAAAAAAAAAAGNBWgEAAAAAol1dRhWSGndNjHI6uo6uthhUXXk%3DeiLc8IuNhDxkrXBX26aiOK4BNErH857aVqDutJXmi9nN2lRSyZ'
       const body = await fetch(`https://api.twitter.com/2/users/by/username/${this.props.query}?user.fields=id,name,username,public_metrics`, {
           method: "GET",
           headers: {
             Authorization: `Bearer ${TOKEN}`,
             "Content-type": "application/json"

           },
         })
         console.log(body);
         return body
   } */

  render() {

    /* const API = new Twitter() */
    const compte = this.getUserByUsername(this.props.query)

    console.log(this.props.query);
    /* console.log(compte.data); */

    return (
      <div className="Twitter">
        <p>Account @{this.props.query}</p>

        <p>{compte.data.public_metrics.followers_count}followers</p>

      </div>
    );
  }
}

export default Twitter;