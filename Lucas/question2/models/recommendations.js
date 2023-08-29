const {products} = require('../constants');

function productFound(){
    // trouver un produit aléatoirement dans products
    const randomProduct = products[Math.floor(Math.random() * products.length)];

    return randomProduct;
}

module.exports = {
    productFound
};