const path = require('node:path');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/historique.json');

const PURCHASES = [];

function savePurchases(pseudo, id, quantite){
    const purchases = parse(jsonDbPath, PURCHASES);

    const savedPurchases = {
        pseudo, 
        id, 
        quantite,
    }

    purchases.push(savedPurchases);

    serialize(jsonDbPath, purchases);

    return savedPurchases;
}

function foundUser(id){
    // Cette opération renvoie le pseudo de l’utilisateur ayant acheté le plus d’unités de ce produit, selon la liste des achats enregistrés
    const idNumber = parseInt(id, 10);
    const purchases = parse(jsonDbPath, PURCHASES);

    let maxQuantity = -1;
    let pseudoWithMaxQuantity = null;

    for(let i=0; i<purchases.length; i+=1){
        if(purchases[i].id === idNumber && purchases[i].quantite > maxQuantity){
            maxQuantity = purchases[i].quantite;
            pseudoWithMaxQuantity = purchases[i].pseudo;
        }
    }

    return pseudoWithMaxQuantity;
}


module.exports = {
    savePurchases,
    foundUser,
};


