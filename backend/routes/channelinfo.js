let express = require('express');
let router = express.Router();
const _ = require('lodash');
/* const youtubeAPI = require('../public/javascripts/youtubeAPI'); */



router.get('/name/:name', function (req, res) {
    let youtubeAPI = new youtubeAPI();
    const name = req.params.name;

    if (req.params.length > 0)
        res.status(404).json({
            message: `name: ${name}`
        });

    if(name){
        youtubeAPI.fetchChannelStatsByName(name).then(function (response) {
            // Get data from the API
            const data = response.data;

            const id = data.id;
            const viewCount = data.viewCount;
            const subscriberCount = data.subscriberCount;
            const videoCount = data.videoCount;

            // Get the main data
            res.status(200).json({
                channel: [
                    {
                        message: 'Channel Stats found',
                        id :id,
                        viewCount : viewCount,
                        subscriberCount : subscriberCount,
                        videoCount : videoCount
                    }]
            });
            
        })
    }
    else {
        res.status(404).json({
            message: 'ID tag parameter can not be empty! Please refer an id in the request'
        });
    }

});


/* GET movie by ID */
router.get('/id/:id', function (req, res) {
    let riotAPI = new API_riot();
    const id = req.params.id;

    if (req.params.length > 0)
        res.status(404).json({
            message: `id: ${id}`
        });

    if(id){
        youtubeAPI.fetchChannelStatsByID(id).then(function (response) {
            // Get data from the API
            const data = response.data;

            const id = data.id;
            const viewCount = data.viewCount;
            const subscriberCount = data.subscriberCount;
            const videoCount = data.videoCount;

            // Get the main data
            res.status(200).json({
                channel: [
                    {
                        message: 'Channel Stats found',
                        id :id,
                        viewCount : viewCount,
                        subscriberCount : subscriberCount,
                        videoCount : videoCount
                    
                    }]
            });
        })
    }
    else {
        res.status(404).json({
            message: 'ID tag parameter can not be empty! Please refer an id in the request'
        });
    }

});


module.exports = router;