import React from 'react';

class Profile extends React.Component {
  renderImage() {
    if (this.props.artist.images[0]) {
      return (
        <div>
          <br></br>
        <img
          alt="Profile"
          className="profile-image"
          src={this.props.artist.images[0].url}
        /><br></br>
        </div>
      );
    }
  }
  renderArtist() {
    if (this.props.artist) {
      return (
        <div>
        <div className="profile">
          {this.renderImage()}
          <div className="profile-info"><br></br>
            <div className="profile-name">{this.props.artist.name}</div><br></br>
            <div className="profile-followers">
              Followers : {this.props.artist.followers.total} <br></br>
              Popularité : {this.props.artist.popularity} / 100
            </div>
            <div className="profile-genres">
              Genres musicaux :
              {this.props.artist.genres.map((genre, k) => {
                const genres = this.props.artist.genres;
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

  render() {
    return <div>{this.renderArtist()}</div>;
  }
}

export default Profile;
