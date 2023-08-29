const express = require('express');

const {users, products} = require('../constants');

const{ savePurchases, foundUser } = require('../models/purchases');

const router = express.Router();

router.post('/', (req, res) => {
    const pseudo = req?.body?.pseudo;
    const id = req?.body?.id;
    const quantite = req?.body?.quantite;

    if((!pseudo && !id && !quantite) || pseudo.length === 0){
        return res.sendStatus(400);
    }

    const pseudoFound = users.find((user) => user === pseudo);
    const productFound = products.find((product) => product.id === id);

    if(!pseudoFound || !productFound) return res.sendStatus(400);

    const savedPurchases = savePurchases(pseudo, id, quantite);
    return res.json(savedPurchases);
});

router.get('/:productId', (req, res) => {
    const userFound = foundUser(req.params.productId);

    if(!userFound) return res.sendStatus(404);

    return res.json(userFound);
});

module.exports = router;