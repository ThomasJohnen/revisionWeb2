const express = require('express');
const {
    productFound,
    foundUser
} = require('../models/recommandations');

const router = express.Router();

router.get('/:username', (req, res) => {
    const user = foundUser(req.params.username);
  
    if (!user) return res.sendStatus(404);
    const suggeredProduct = productFound();
    return res.json(suggeredProduct);
  });

module.exports = router;