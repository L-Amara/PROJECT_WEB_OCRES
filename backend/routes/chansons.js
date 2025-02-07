var express = require('express');
var Chansons = require('../models/Database');
const {createSongs} = require("../controllers/songsController")
var router = express.Router();

router.route("/insert").post(createSongs)
// Get 
router.get('/read', async (req, res) => {
    try {
        const getUser = await Chansons.find();
        res.json(getUser);
    } catch (err) {
        res.json({ message: err });
    }
});

// Post
/*router.post('/insert', async (req, res) => {
    const songs = new Chansons({
        artist: req.body.artist,
        title:req.body.title
    });
    try {
        const postedSong = await songs.save();
        res.json(postedSong);
    } catch (err) {
        res.json({message:err})
    }
});*/

// Delete
router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedSong = await Chansons.remove({ _id: req.params.id })
        res.json(deletedSong)
    } catch (error) {
        res.json({message:error})
    }
})

// Update 
router.patch('/:postId', async (req, res) => {
    try {
        const updatedSong = await Chansons.updateOne({ _id: req.params.postId },
            { $set: { name: req.body.name } });
        res.json(updatedSong);
    } catch (error) {
        res.json({message:error})
    }
})

module.exports = router;