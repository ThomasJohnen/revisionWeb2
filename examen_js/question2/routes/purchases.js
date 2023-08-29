const express = require('express');
const {
    createOnePurchase,
    findAUserByProduct
} = require('../models/purchases');

const router = express.Router();

router.post('/', (req, res) =>{
    const pseudo = req?.body?.pseudo?.length !== 0 ? req.body.pseudo : undefined;
    const produit = req?.body?.produit;
    const quantite = req?.body?.quantite;

    if(!quantite || !produit || !pseudo || quantite <= 0 )  return res.sendStatus(400); // error code '400 Bad request'
  
    const createdpurchase = createOnePurchase (pseudo, produit, quantite);
  
    return res.json(createdpurchase);
});


router.get('/:id', (req, res) => {
    const foundPurchase = findAUserByProduct(req.params.id);
  
    if (!foundPurchase) return res.sendStatus(404);
  
    return res.json(foundPurchase);
  });

module.exports = router;