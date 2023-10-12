const express = require('express');
const router = express.Router();

// Load Monster Model
const Monster = require('../../models/Monster');

// @route GET api/monsters/test
// @description tests monsters route
// @access Public
router.get('/test', (req, res) => res.send('Monster route test'));

// @route GET api/monsters
// @description Get all monster names
// @access Public
router.get('/', async (req, res) => {
    try {
        const items = await Monster.find({}, 'name');
        const names = items.map(item => item.name);
        res.json(names);
    } catch(err) {res.status(404).json({ nomonsterfound: "No Monsters found" })}
});

// @route GET api/monsters/icons
// @description Get all monster icons
// @access Public
router.get('/icons', async (req, res) => {
    try {
        const items = await Monster.find({}, 'icon');
        const icons = items.map(item => item.icon);
        res.json(icons);
    } catch (err) {res.status(404).json({ nomonsterfound: "No Monsters found" })}
})

// @route GET api/monsters/:id
// @description Get single monster by id
// @access Public
router.get('/:id', (req, res) => {
    Monster.findById(req.params.id)
        .then(monster => res.json(monster))
        .catch(err => res.status(404).json({ nomonsterfound: 'No Monsters found' }));
});

module.exports = router;
