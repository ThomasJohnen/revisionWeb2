const express = require('express');

const {users} = require('../constants');
const{ productFound } = require('../models/recommendations');

const router = express.Router();

router.get('/:username', (req, res) => {
    const {username} = req.params;

    const pseudoFound = users.find((user) => user === username);

    if(!pseudoFound) return res.sendStatus(400);

    const foundProduct = productFound();

    if(!foundProduct) return res.sendStatus(404);

    return res.json(foundProduct);
});

module.exports = router;