const mongoose = require('mongoose');

const schema = mongoose.Schema({
    artist: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Ma Playlist', schema);