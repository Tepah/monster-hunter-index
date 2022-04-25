const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

// Load Monster Model
const Monster = require('../../models/Book');

// @route GET api/monsters/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('Monster route test'));

// @route GET api/monsters
// @description Get all monsters
// @access Public
router.get('/', (req, res) => {
    Monster.find()
        .then(monsters => res.json(monsters))
        .catch(err => res.status(404).json({ nomonstersfound: "No Monsters found" }));
});

// @route GET api/monsters/:id
// @description Get single monster by id
// @access Public
router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(monster => res.json(monster))
        .catch(err => res.status(404).json({ nobookfound: 'No Book found' }));
});