const Product = require('./../../../models/Products');

const getProducts = async (req,res) => {
    const products = await Product.find();
    console.log(products);

    res.status(200).json(products);
}

const getProduct = async (req,res) => {
    try {
        const { id } = req.params;
        const product = await Product.findOne({
            _id : id
        });

        res.status(200).json(product);


    }catch(error){
        res.status(500).json({error});
    }
}

module.exports = {getProducts, getProduct}