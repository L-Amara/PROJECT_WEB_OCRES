import React from 'react';
import axios from 'axios';
const API_KEY = "AIzaSyCDz_op7k_0Qax9H117cniR2jJptLbIIGY";

class widgetYT extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            subscriberCount : undefined,
            viewCount : undefined,
            title : undefined,
            ppurl : undefined,                       //profile picture  
            recherche: 'DrakeOfficial',                     //drake by default
            id : 'UCNTQH0uJzryQB4rRLGlv-Ww'       //drake youtube channel ID by default
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
          this.setState({ title: nvtitle });
        });
        axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=statistics&forUsername=${this.state.recherche}&fields=items(statistics%2FsubscriberCount)&key=${API_KEY}`)
        .then(res => {
          const nvsSubCount = res.data;
          this.setState({ subscriberCount: nvsSubCount });
        });
        axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=statistics&forUsername=${this.state.recherche}&fields=items(statistics%2FviewCount)&key=${API_KEY}`)
        .then(res => {
          const nvViewCount = res.data;
          this.setState({ viewCount: nvViewCount});
        })
        axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&forUsername=${this.state.recherche}&fields=items(id)&key=${API_KEY}`)
        .then(res => {
          const nvID = res.data;
          this.setState({ id: nvID});
        })
        axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&forUsername=${this.state.recherche}&fields=items(snippet%2Fthumbnails%2Fhigh%2Furl)&key=${API_KEY}`)
        .then(res => {
          const nvPPurl = res.data;
          this.setState({ ppurl: nvPPurl});
        })
    }

    componentDidMount()
    {
      this.getall();
    }


    render=()=>
    {
        return(
            <div className="Widget">
                <center><h1>LastFM - Personnel</h1></center>
                <div className="divWidget">
                    <input type="text" className="barreRech" value = {this.state.recherche} onChange={(e)=>this.termeRecherche(e)} onKeyPress={(e)=>{if(e.key=='Enter')this.getall()}}></input>
                    <button className ="btnRech" onClick={()=>this.getall()}>Recherche</button>
                </div>
                <hr></hr>
                
                
                  {!!this.state.utilisateur && (<>
                  <div className="infoUser">
                    <div>
                      <img className="photoProfil" src={this.state.ppurl}></img>
                    </div>
                    <div className="detailProfil">
                      <h1>{this.state.title}</h1>
                      <p>Nombre d'abonnés : {this.state.subscriberCount}</p>
                    </div>
                    <div className="detailProfil">
                      <h1>{this.state.title}</h1>
                      <p>Nombre de vues : {this.state.viewCount}</p>
                    </div>
                     
                  </div>
                  </>)}   
                
                <hr></hr>
                <div>
                  <center><h2>Top 5 Titres :</h2></center>
                  {!!this.state.topTitle && (<>
                    {!!this.state.topTitle.toptracks.track[0] && (<><div className="morceau">
                      <p className="informationMorceau">{this.state.topTitle.toptracks.track[0].name}</p>
                      <p className="informationMorceau">{this.state.topTitle.toptracks.track[0].artist.name}</p>
                      <p className="informationMorceau">{this.state.topTitle.toptracks.track[0].playcount} écoutes</p>
                    </div></>)}

                    {!!this.state.topTitle.toptracks.track[1] && (<><div className="morceau">
                      <p className="informationMorceau">{this.state.topTitle.toptracks.track[1].name}</p>
                      <p className="informationMorceau">{this.state.topTitle.toptracks.track[1].artist.name}</p>
                      <p className="informationMorceau">{this.state.topTitle.toptracks.track[1].playcount} écoutes</p>
                    </div></>)}

                    {!!this.state.topTitle.toptracks.track[2] && (<><div className="morceau">
                      <p className="informationMorceau">{this.state.topTitle.toptracks.track[2].name}</p>
                      <p className="informationMorceau">{this.state.topTitle.toptracks.track[2].artist.name}</p>
                      <p className="informationMorceau">{this.state.topTitle.toptracks.track[2].playcount} écoutes</p>
                    </div></>)}

                    {!!this.state.topTitle.toptracks.track[3] && (<><div className="morceau">
                      <p className="informationMorceau">{this.state.topTitle.toptracks.track[3].name}</p>
                      <p className="informationMorceau">{this.state.topTitle.toptracks.track[3].artist.name}</p>
                      <p className="informationMorceau">{this.state.topTitle.toptracks.track[3].playcount} écoutes</p>
                    </div></>)}

                    {!!this.state.topTitle.toptracks.track[4] && (<><div className="morceau">
                      <p className="informationMorceau">{this.state.topTitle.toptracks.track[4].name}</p>
                      <p className="informationMorceau">{this.state.topTitle.toptracks.track[4].artist.name}</p>
                      <p className="informationMorceau">{this.state.topTitle.toptracks.track[4].playcount} écoutes</p>
                    </div></>)}

                  </>)}     
              </div>
              <hr></hr>
              <div>                    
                <center><h2>Top 5 Artistes :</h2></center>
                {!!this.state.topArtist && (<>
                
                  {!!this.state.topArtist.topartists.artist[0] && (<><div className="morceau">
                  <p className="informationMorceau">{this.state.topArtist.topartists.artist[0].name}</p>
                  <p className="informationMorceau">{this.state.topArtist.topartists.artist[0].playcount} écoutes</p>
                </div></>)}
                {!!this.state.topArtist.topartists.artist[1] && (<><div className="morceau">
                  <p className="informationMorceau">{this.state.topArtist.topartists.artist[1].name}</p>
                  <p className="informationMorceau">{this.state.topArtist.topartists.artist[1].playcount} écoutes</p>
                </div></>)}
                {!!this.state.topArtist.topartists.artist[2] && (<><div className="morceau">
                  <p className="informationMorceau">{this.state.topArtist.topartists.artist[2].name}</p>
                  <p className="informationMorceau">{this.state.topArtist.topartists.artist[2].playcount} écoutes</p>
                </div></>)}
                {!!this.state.topArtist.topartists.artist[3] && (<><div className="morceau">
                  <p className="informationMorceau">{this.state.topArtist.topartists.artist[3].name}</p>
                  <p className="informationMorceau">{this.state.topArtist.topartists.artist[3].playcount} écoutes</p>
                </div></>)}
                {!!this.state.topArtist.topartists.artist[4] && (<><div className="morceau">
                  <p className="informationMorceau">{this.state.topArtist.topartists.artist[4].name}</p>
                  <p className="informationMorceau">{this.state.topArtist.topartists.artist[4].playcount} écoutes</p>
                </div></>)}
                
                
                </>)}
              </div>
                    
            </div>
        );
    }
} 

export default Widget2;