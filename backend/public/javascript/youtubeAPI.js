const axios = require('axios').default;

// Clé api
const API_KEY = "AIzaSyCDz_op7k_0Qax9H117cniR2jJptLbIIGY";
// Url API


const API_URL_CHANNEL_STAT_BY_ID = "https://youtube.googleapis.com/youtube/v3/channels?part=statistics&id=";
const API_URL_CHANNEL_STAT_BY_NAME = "https://youtube.googleapis.com/youtube/v3/channels?part=statistics&forUsername=";

class youtubeAPI{
    constructor(){
    }
    fetchChannelStatsByID(channelID){
        return axios
            .get(`${API_URL_CHANNEL_STAT_BY_ID}${channelID}&key=${API_KEY}`, {
                crossdomain: true
            })
    }

    fetchChannelStatsByName(channelName){
        return axios
            .get(`${API_URL_CHANNEL_STAT_BY_NAME}${channelName}&key=${API_KEY}`, {
                crossdomain: true
            })
    }
   
}

module.exports = youtubeAPI;