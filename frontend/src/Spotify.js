import React from 'react';
import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';
import request from 'request';
import './spotify.css';

class Spotify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      tracks: [],
      playingUrl: '',
      audio: null,
      playing: false
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

    const SEARCH_URL  = `https://api.spotify.com/v1/search?q=${this.props.query}&type=artist&limit=1`;
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
          this.props.onChange(artist.popularity, artist.followers.total)
          this.setState({ artist })
        
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


  renderImage() {
    if (this.state.artist.images[0]) {
      return (
        <div>
          <br></br>
        <img
          alt="Profile"
          className="profile-image"
          src={this.state.artist.images[0].url}
        /><br></br>
        </div>
      );
    }
  }
  renderArtist() {
    
    if (this.state.artist) {
        
      return (
        
        <div>
          
        <div className="profile">
          {this.renderImage()}
          <div className="profile-info"><br></br>
            <div className="profile-name">{this.state.artist.name}</div><br></br>
            <div className="profile-followers">
              {/* Followers : {this.state.artist.followers.total} <br></br> */}
              {/* Popularité : {this.state.artist.popularity} / 100 */}
              
            </div>
            <div className="profile-genres">
              Genres musicaux :
              {this.state.artist.genres.map((genre, k) => {
                const genres = this.state.artist.genres;
                genre =
                  genre !== genres[genres.length - 1]
                    ? ` ${genre},`
                    : ` ${genre}`;
                return <span key={k}>{genre}</span>;
              })}
            </div>
          </div>
          
        </div><br></br>
        <div className="track-explanation">Top 10 chansons du moment : </div> <br></br>
        </div>
      );
    }
    return;
  }

  playAudio(track) {
    if (!track.preview_url) {
      return;
    }
    let url = track.preview_url;
    let audio = new Audio(url);
    if (!this.state.playing) {
      audio.play();
      this.setState({
        playing: true,
        playingUrl: url,
        audio,
      });
    } 
    else {
      if (this.state.playingUrl === url) {
        this.state.audio.pause();
        this.setState({
          playing: false,
        });
      } 
      else {
        this.state.audio.pause();
        audio.play();
        this.setState({
          playing: true,
          playingUrl: url,
          audio,
        });
      }
    }
  }

  componentDidMount() {
    this.search();
  }
  

  render() {

    const { tracks } = this.state;

    

    
    return (         

      <div className="Spotify">

        
        <br></br>
        <div className='center'>
          
         <Button onClick={() => this.search()}>Afficher le top 10 des chansons du moment</Button>


          {/* Profile Artist */}
          <div>{this.renderArtist()}</div>

          {/* Gallery albums Artist */}
          <div>
            {tracks.map((track, k) => {
              const image = track.album.images[0].url;
              return (
                <div
                  key={k}
                  className="track"
                  onClick={() => this.playAudio(track)}
                >
                  <p className="track-text">{k+1}. {track.name}</p>
                  <img src={image} className="track-image" alt="track" />
                  <p className="track-popularity">Popularité : {track.popularity} / 100 </p><br></br>
                </div>
              );
            })}
          </div>

          
        </div>
      </div>
    );
  }
}

export default Spotify;

/* Source : https://github.com/sophieklm/music-master */
