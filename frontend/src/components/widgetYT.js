import React from 'react';
import axios from 'axios';

const API_KEY = "AIzaSyCDz_op7k_0Qax9H117cniR2jJptLbIIGY";

class WidgetYT extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subscriberCount: undefined,
      viewCount: undefined,
      videoCount: undefined,
      title: undefined,
      ppurl: undefined,                       //profile picture  
      recherche: 'AdeleVEVO',                     //Adele by default
      id: 'adele',       //Adele youtube channel ID by default
    }
  }

  termeRecherche(e) {
    this.setState({ recherche: e.target.value })      //channel name
  }

  getall() {
    axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&forUsername=${this.state.recherche}&fields=items(snippet%2Ftitle)&key=${API_KEY}`)
      .then(res => {
        const nvtitle = res.data;
        Object.entries(nvtitle).length !== 0 ? this.setState({ title: nvtitle.items[0].snippet.title }) : this.setState({ title: 'No match, you need the channel username, not the title' })
      });

    axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=statistics&forUsername=${this.state.recherche}&fields=items(statistics%2FsubscriberCount)&key=${API_KEY}`)
      .then(res => {
        const nvsubscriberCount = res.data;
        //console.log(nvsubscriberCount);
        console.log(nvsubscriberCount.items[0].statistics.subscriberCount)
        Object.entries(nvsubscriberCount).length !== 0 ? this.setState({ subscriberCount: nvsubscriberCount.items[0].statistics.subscriberCount } ): this.setState({ subscriberCount: ' ' });
        Object.entries(nvsubscriberCount).length !== 0 && (this.props.onChangeYT(nvsubscriberCount.items[0].statistics.subscriberCount))
      });
    axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=statistics&forUsername=${this.state.recherche}&fields=items(statistics%2FviewCount)&key=${API_KEY}`)
      .then(res => {
        const nvviewCount = res.data;
        //console.log(nvviewCount);
        Object.entries(nvviewCount).length !== 0 ? this.setState({ viewCount: nvviewCount.items[0].statistics.viewCount }) : this.setState({ viewCount: ' ' })   //
      })
    axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=statistics&forUsername=${this.state.recherche}&fields=items(statistics%2FvideoCount)&key=${API_KEY}`)
      .then(res => {
        const nvvideoCount = res.data;
        Object.entries(nvvideoCount).length !== 0 ? this.setState({ videoCount: nvvideoCount.items[0].statistics.videoCount }) : this.setState({ videoCount: ' ' })    //
      })
    axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&forUsername=${this.state.recherche}&fields=items(id)&key=${API_KEY}`)
      .then(res => {
        const id = res.data;
        Object.entries(id).length !==0  ? this.setState({ id }) : this.setState({ id: ' ' })
      })
    axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&forUsername=${this.state.recherche}&fields=items(snippet%2Fthumbnails%2Fdefault%2Furl)&key=${API_KEY}`)
      .then(res => {
        const nvPPurl = res.data;       //.items.snippet.thumbnails.high.url
        //console.log(nvPPurl.items[0].snippet.thumbnails.default.url);
        Object.entries(nvPPurl).length !==0  ? this.setState({ ppurl: nvPPurl.items[0].snippet.thumbnails.default.url }) : this.setState({ ppurl: 'https://wtmatter.com/wp-content/uploads/2019/10/YouTube-Unique-Channel-URL.png' })
      })
    console.log(this.state.title);
  }

componentDidMount() {
  this.getall();
}

render() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <p className="card-title">Youtube Details</p>
          <p className="font-weight-500">Entrez le nom d'une chaine YouTube</p>

          <div className="input-group">
            <div className="input-group-prepend hover-cursor" id="navbar-search-icon">
              <span className="input-group-text" id="search">
                <i className="icon-search" onClick={() => this.getall()} ></i>
              </span>
            </div>
            <input type="text" className="form-control" id="navbar-search-input" placeholder="AdeleVEVO" aria-label="search" aria-describedby="search" onChange={(e) => this.termeRecherche(e)} onKeyPress={(e) => { if (e.key === 'Enter') this.getall() }} />
          </div>
          <div className="row mt-3 ml-1 d-flex align-items-center">
            <img className="photoProfil mr-3" src={this.state.ppurl}></img>
            <h1 className="text-primary">{this.state.title}</h1>
          </div>

          <div className="d-flex flex-wrap mb-5">
            <div className="mr-5 mt-3">
              <p className="text-muted">Subscribers </p>
              <h3 className="text-primary fs-30 font-weight-medium">{this.state.subscriberCount}</h3>
            </div>
            <div className="mr-5 mt-3">
              <p className="text-muted">Views</p>
              <h3 className="text-primary fs-30 font-weight-medium">{this.state.viewCount}</h3>
            </div>
            <div className="mr-5 mt-3">
              <p className="text-muted">Videos</p>
              <h3 className="text-primary fs-30 font-weight-medium">{this.state.videoCount}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default WidgetYT;