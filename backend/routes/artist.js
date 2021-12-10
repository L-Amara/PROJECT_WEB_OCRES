const express = require('express');
const Post = require('../models/Post');

const router = express.Router();

// Get 
router.get('/read', async (req, res) => {
    try {
        const getUser = await Post.find();
        res.json(getUser);
    } catch (err) {
        res.json({ message: err });
    }
});

// Post
router.post('/insert', async (req, res) => {
    const post = new Post({
        artist: req.body.artist
    });
    try {
        const postedUser = await post.save();
        res.json(postedUser);
    } catch (error) {
        res.json({message:error})
    }
});

// Delete
router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedUser = await Post.remove({ _id: req.params.id })
        res.json(deletedUser)
    } catch (error) {
        res.json({message:error})
    }
})

// Update 
router.patch('/:postId', async (req, res) => {
    try {
        const updatedUser = await Post.updateOne({ _id: req.params.postId },
            { $set: { name: req.body.name } });
        res.json(updatedUser);
    } catch (error) {
        res.json({message:error})
    }
})

module.exports = router;