const express = require('express');
const router = express.Router();

// Load Monster Model
const Monster = require('../../models/Monster');

// @route GET api/monsters/test
// @description tests monsters route
// @access Public
router.get('/test', (req, res) => res.send('Monster route test'));

// @route GET api/monsters
// @description Get all monsters
// @access Public
router.get('/', (req, res) => {
    Monster.find()
        .then(monsters => res.json(monsters))
        .catch(err => res.status(404).json({ nomonsterfound: "No Monsters found" }));
});

// @route GET api/monsters/:id
// @description Get single monster by id
// @access Public
router.get('/:id', (req, res) => {
    Monster.findById(req.params.id)
        .then(monster => res.json(monster))
        .catch(err => res.status(404).json({ nomonsterfound: 'No Monsters found' }));
});

module.exports = router;