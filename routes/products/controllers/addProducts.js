const Product = require('../../../models/Products');
const User = require('../../../models/User');
const jwt = require('jsonwebtoken');

const addProduct = async (req, res) => {
    const authHeader = req.header('Authorization');
    const token = authHeader.split(' ')[1];
    try {
        const { title, price, description, category, stock, weight, sub_category, state } = req.body;

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ email: verified.email });


        let images = [];
        try {
            images = req.files.map((file) => file.path);

        } catch (error) {
            return res.status(500).send({ error });
        }

        try {
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
                user: user.id
            });
    
            await product.save();
            res.status(201).send({ message: 'Product added successfully', product });
        }catch (error) {
            res.status(500).send({ message: 'Error adding product', error });
        }

    } catch (error) {
        res.status(500).send({ message: 'Error adding product', error });
    }
};

module.exports = addProduct;