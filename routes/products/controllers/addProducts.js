const Product = require('../../../models/Products');

const addProduct = async (req, res) => {
    try {
        const { title, price, description, category, stock, weight, sub_category, state } = req.body;

        let images = [];
        try {
            images = req.files.map((file) => file.path);
        } catch (error) {
            return res.status(500).send({ error });
        }

        const product = new Product({
            title,
            price,
            description,
            category,
            stock,
            keyWords: title.split(' '),
            weight,
            sub_category,
            product_images: images,
            state,
        });

        await product.save();
        res.status(201).send({ message: 'Product added successfully', product });

    } catch (error) {
        res.status(500).send({ message: 'Error adding product', error });
    }
};

module.exports = addProduct;