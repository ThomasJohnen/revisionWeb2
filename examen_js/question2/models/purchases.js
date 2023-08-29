const path = require('node:path');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/historique.json');

const purchasesList = [];

function createOnePurchase(pseudo, produit, quantite) {
    const purchase = parse(jsonDbPath, purchasesList);
  
    const purchaseCreated = {
      id: getNextId(),
      pseudo,
      produit,
      quantite
    };
  
    purchase.push(purchaseCreated);
  
    serialize(jsonDbPath, purchase);
  
    return purchaseCreated;
  }

  function findAUserByProduct(id) {
    const idNumber = parseInt(id, 10);
    const purchases = parse(jsonDbPath, purchasesList);

    let foundUser = null;
    let max = -1;

    for( let i = 0 ; i< purchases.length; i+=1){
        if(purchases[i].produit === idNumber){
            if(purchases[i].quantite > max){
                foundUser = purchases[i].pseudo;
                max = purchases[i].quantite;
            }
        }
    }
  
    return foundUser;
  }

  function getNextId() {
    const purchases = parse(jsonDbPath, purchasesList);
    const lastItemIndex = purchases?.length !== 0 ? purchases.length - 1 : undefined;
    if (lastItemIndex === undefined) return 1;
    const lastId = purchases[lastItemIndex]?.id;
    const nextId = lastId + 1;
    return nextId;
  }


  module.exports = {
    createOnePurchase,
    findAUserByProduct
  };