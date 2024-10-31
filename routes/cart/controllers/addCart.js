const Cart = require('../../../models/Cart');
const Product = require('./../../../models/Products');

const addToCart = async (req, res) => {
    const { product, user, quantity } = req.body;
    const productExists = await Product.findById(product);
    const existingCart = await Cart.findOne({ product, user });

    if (existingCart) {
        const updatedCart = await Cart.findOneAndUpdate(
            { _id: existingCart._id },
            {
                $inc: { quantity: quantity, total: productExists.price * quantity }
            },
            { new: true }
        );

        return res.status(200).json({ savedCart: updatedCart });
    } else {
        if (!productExists) return res.status(404).json({ message: 'Product not found' });
        const total = productExists.price * quantity;

        const cart = new Cart({
            product,
            user,
            quantity,
            total
        });

        try {
            const savedCart = await cart.save();
            res.status(200).json({ savedCart: savedCart });
        } catch (error) {
            res.status(500).json({ error });
        }
    }


}

module.exports = addToCart;