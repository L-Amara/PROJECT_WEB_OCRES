var express = require('express');
var Artists = require('../models/Database');

var router = express.Router();


// Get 
router.get('/read', async (req, res) => {
    try {
        const getUser = await Artists.find();
        res.json(getUser);
    } catch (err) {
        res.json({ message: err });
    }
});

// Post
router.post('/insert', async (req, res) => {
    const artists = new Artists({
        artist: req.body.artist
    });
    try {
        const postedUser = await artists.save();
        res.json(postedUser);
    } catch (error) {
        res.json({message:error})
    }
});

// Delete
router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedUser = await Artists.remove({ _id: req.params.id })
        res.json(deletedUser)
    } catch (error) {
        res.json({message:error})
    }
})

// Update 
router.patch('/:postId', async (req, res) => {
    try {
        const updatedUser = await Artists.updateOne({ _id: req.params.postId },
            { $set: { name: req.body.name } });
        res.json(updatedUser);
    } catch (error) {
        res.json({message:error})
    }
})

module.exports = router;