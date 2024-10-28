const Product = require('./../../../models/Products');

const getProducts = async (req,res) => {
    const products = await Product.find();
    console.log(products);
}

module.exports = {getProducts}