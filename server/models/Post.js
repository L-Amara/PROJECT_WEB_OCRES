const mongoose = require('mongoose');

const schema = mongoose.Schema({
    artist: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Database', schema);