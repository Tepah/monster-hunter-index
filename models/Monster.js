const mongoose = require('mongoose');

const MonsterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    games: {
        type: Array,
    },
    summary: {
        type: String
    },
    weakness: {
        type: Array,
    },
});

module.exports = Monster = mongoose.model('monster', MonsterSchema);