const Cart = require('../../../models/Cart');

const updateCart = async (req, res) => {
    const { id } = req.params;
    const { quantity } = req.body;

    try {
        // Populate the product field to access its price
        const cart = await Cart.findOne({ _id: id }).populate('product');
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        const updatedCart = await Cart.findOneAndUpdate(
            { _id: id },
            {
                $inc: { quantity: quantity, total: cart.product.price * quantity }
            },
            { new: true }
        );

        res.status(200).json({ savedCart: updatedCart });
    } catch (error) {
        res.status(500).json({ error });
    }
};

module.exports = updateCart;