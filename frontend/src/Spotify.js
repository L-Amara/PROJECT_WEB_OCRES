import React from 'react';
import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';
import request from 'request';
import Profile from './Profile';
import Gallery from './Gallery';
import './spotify.css';

class Spotify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      tracks: [],
    };
  }

  search() {
    const client_id = process.env.REACT_APP_CLIENT_ID;
    const client_secret = process.env.REACT_APP_CLIENT_SECRET;

    const auth = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        grant_type: 'client_credentials',
      },
      json: true,
      headers: {
        Authorization:
          'Basic ' +
          new Buffer(client_id + ':' + client_secret).toString('base64'),
      },
    };

    const SEARCH_URL  = `https://api.spotify.com/v1/search?q=${this.state.query}&type=artist&limit=1`;
    const ARTISTS_URL = 'https://api.spotify.com/v1/artists';

    request.post(auth, async (error, response, body) => {

      if (!error && response.statusCode === 200) {
        // use the access token to access the Spotify Web API
        const token = body.access_token;
        const options = {
          url: SEARCH_URL,
          headers: {
            Authorization: 'Bearer ' + token,
          },
          json: true,
        };

        request.get(options, (error, response, body) => {
          const artist = body.artists.items[0];
          this.setState({ artist });
          let new_options = { ...options };

          const NEW_URL = `${ARTISTS_URL}/${artist.id}/top-tracks?country=FR`;
          new_options.url = NEW_URL;
          request.get(new_options, (error, response, res) => {
            const tracks = res.tracks;
            this.setState({ tracks });
          });
        });
      }
    });
  }

  render() {
    return (
      <div className="Spotify">
        {/* <header className="App-header">Spotify Music Master</header> */}
        <br></br>
        <div>
          <FormGroup>
            <InputGroup>
              <FormControl
                value={this.state.query}
                onChange={(event) => {
                  this.setState({ query: event.target.value });
                }}
                onKeyPress={(event) => {
                  if (event.key === 'Enter') {
                    this.search();
                  }
                }}
                type="text"
                placeholder="Entrer un artiste"
              />
              <Button onClick={() => this.search()}>Rechercher</Button>
            </InputGroup>
          </FormGroup>

          <Profile artist={this.state.artist} />
        
          <Gallery tracks={this.state.tracks} />
          
        </div>
      </div>
    );
  }
}

export default Spotify;
