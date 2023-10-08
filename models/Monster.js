const mongoose = require('mongoose');

const MonsterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    mainPic: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    weakness: {
        type: Array,
    },
    icon: {
        type: String,
    },
    effectiveness: {
        type: Object,
    },
    type: {
        type: String,
    },
    elements: {
        type: Array,
    }
});

module.exports = Monster = mongoose.model('monster', MonsterSchema);
