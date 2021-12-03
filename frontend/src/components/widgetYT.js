import React from 'react';
import axios from 'axios';

const API_KEY = "AIzaSyCDz_op7k_0Qax9H117cniR2jJptLbIIGY";

class WidgetYT extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            subscriberCount : undefined,
            viewCount : undefined,
            title : 'oui',
            ppurl : undefined,                       //profile picture  
            recherche: 'DrakeOfficial',                     //drake by default
            id : 'UCNTQH0uJzryQB4rRLGlv-Ww',       //drake youtube channel ID by default
            status : 'false'
        }
    }

    termeRecherche(e)
    {
      this.setState({recherche: e.target.value})      //channel name
    }

    getall()
    {
      
        axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&forUsername=${this.state.recherche}&fields=items(snippet%2Ftitle)&key=${API_KEY}`)
        .then(res => {
          const nvtitle = res.data;
          console.log(nvtitle.items[0].snippet.title);        
          this.setState({ title : nvtitle.items[0].snippet.title});
        });
        console.log(this.state.title);
        axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=statistics&forUsername=${this.state.recherche}&fields=items(statistics%2FsubscriberCount)&key=${API_KEY}`)
        .then(res => {
          const nvsubscriberCount = res.data;
          console.log(nvsubscriberCount);
          this.setState({ subscriberCount : nvsubscriberCount.items[0].statistics.subscriberCount});    //
        });
        axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=statistics&forUsername=${this.state.recherche}&fields=items(statistics%2FviewCount)&key=${API_KEY}`)
        .then(res => {
          const nvviewCount = res.data;
          console.log(nvviewCount);
          this.setState({ viewCount : nvviewCount.items[0].statistics.viewCount});    //
        })
        axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&forUsername=${this.state.recherche}&fields=items(id)&key=${API_KEY}`)
        .then(res => {
          const {id} = res.data;
          this.setState({ id});
        })
        axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&forUsername=${this.state.recherche}&fields=items(snippet%2Fthumbnails%2Fdefault%2Furl)&key=${API_KEY}`)
        .then(res => {
          const nvPPurl = res.data;       //.items.snippet.thumbnails.high.url
          console.log(nvPPurl.items[0].snippet.thumbnails.default.url);
          this.setState({ ppurl: nvPPurl.items[0].snippet.thumbnails.default.url});
        })
        this.setState({status : 'true'});
    }

    /*componentDidMount()
    {
      this.getall();
    }*/


    render()
    {
        return(
            <div className="Widget">
                <div className="divWidget">
                    <input type="text" className="barreRech" value = {this.state.recherche} onChange={(e)=>this.termeRecherche(e)} onKeyPress={(e)=>{if(e.key==='Enter')this.getall()}}></input>
                    <button className ="btnRech" onClick={()=>this.getall()}>Recherche</button>
                </div>
                <hr></hr>
                  
                  <div className="infoUser">
                    <div>
                      <img className="photoProfil" src={this.state.ppurl}></img>
                    </div>
                    <div className="detailProfil">
                      <p>status : {this.state.status}</p>
                      <h1>{this.state.title}</h1>
                      <p>Nombre d'abonnés : {this.state.subscriberCount}</p>
                    </div>
                    <div className="detailProfil">
                      <p>Nombre de vues : {this.state.viewCount}</p>
                    </div>
                    <div className="detailProfil">
                      <p>ID: {this.state.id}</p>
                    </div>
                  </div>
                  
                
                
                <hr></hr>     
            </div>
        );
    }
} 

export default WidgetYT;