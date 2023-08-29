const {products, users} = require('../constants');


function foundUser(name){
  const user = users.find(u => u === name);

  return user;
}
function productFound(){
  // trouver un produit aléatoirement dans products
  const randomProduct = products[Math.floor(Math.random() * products.length)];

  return randomProduct;
}

  module.exports = {
    productFound,
    foundUser
  };