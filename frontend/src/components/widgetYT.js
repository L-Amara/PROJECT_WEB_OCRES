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
      recherche: 'DrakeOfficial',                     //drake by default
      id: 'UCNTQH0uJzryQB4rRLGlv-Ww',       //drake youtube channel ID by default
    }
  }

  termeRecherche(e) {
    this.setState({ recherche: e.target.value })      //channel name
  }

  getall() {
    let etat = undefined;
    axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&forUsername=${this.state.recherche}&key=${API_KEY}`)
      .then(res => {
        const nvinfo = res.data;
        console.log(nvinfo.pageInfo.totalResults);
        etat = nvinfo.pageInfo.totalResults;
      });
      console.log("etat "+ etat);
      if(etat === 0){
        this.setState({title : "Sorry, wrong channel title"});
        this.setState({subscriberCount : "0"});
        this.setState({viewCount : "0"});
        this.setState({videoCount : "0"});
        
      }
      else{

        axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&forUsername=${this.state.recherche}&fields=items(snippet%2Ftitle)&key=${API_KEY}`)
    .then(res => {
      const nvtitle = res.data;
      //console.log(nvtitle.items[0].snippet.title);
      this.setState({ title: nvtitle.items[0].snippet.title });
    });
  
  axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=statistics&forUsername=${this.state.recherche}&fields=items(statistics%2FsubscriberCount)&key=${API_KEY}`)
    .then(res => {
      const nvsubscriberCount = res.data;
      //console.log(nvsubscriberCount);
      this.setState({ subscriberCount: nvsubscriberCount.items[0].statistics.subscriberCount });    //
    });
  axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=statistics&forUsername=${this.state.recherche}&fields=items(statistics%2FviewCount)&key=${API_KEY}`)
    .then(res => {
      const nvviewCount = res.data;
      //console.log(nvviewCount);
      this.setState({ viewCount: nvviewCount.items[0].statistics.viewCount });    //
    })
    axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=statistics&forUsername=${this.state.recherche}&fields=items(statistics%2FvideoCount)&key=${API_KEY}`)
    .then(res => {
      const nvvideoCount = res.data;
      //console.log(nvvideoCount);
      this.setState({ videoCount: nvvideoCount.items[0].statistics.videoCount });    //
    })
  axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&forUsername=${this.state.recherche}&fields=items(id)&key=${API_KEY}`)
    .then(res => {
      const id = res.data;
      this.setState({ id });
    })
  axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&forUsername=${this.state.recherche}&fields=items(snippet%2Fthumbnails%2Fdefault%2Furl)&key=${API_KEY}`)
    .then(res => {
      const nvPPurl = res.data;       //.items.snippet.thumbnails.high.url
      //console.log(nvPPurl.items[0].snippet.thumbnails.default.url);
      this.setState({ ppurl: nvPPurl.items[0].snippet.thumbnails.default.url });
    })
    console.log(this.state.title);
      }
      
  }

  componentDidMount()
  {
    this.getall();
  }

  render() {
    return (
      <div className="container">


        <div className="card">
          <div className="card-body">
            <p className="card-title">youtube Details</p>
            <p className="font-weight-500">Type the name of the youtube channel</p>

            <div className="input-group">
              <div className="input-group-prepend hover-cursor" id="navbar-search-icon">
                <span className="input-group-text" id="search">
                  <i className="icon-search"  onClick={() => this.getall()} ></i>
                </span>
              </div>
              <input type="text" className="form-control" id="navbar-search-input" placeholder="DrakeOfficial" aria-label="search" aria-describedby="search" onChange={(e) => this.termeRecherche(e)} onKeyPress={(e) => { if (e.key === 'Enter') this.getall() }}/>
            </div>
            <div className ="row mt-3 ml-1 d-flex align-items-center">
            <img className="photoProfil mr-3" src={this.state.ppurl}></img>
            <h1 className ="text-primary">{this.state.title}</h1>

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
            
            <canvas id="order-chart"></canvas>
          </div>
        </div>
      </div>


    );
  }
}

export default WidgetYT;