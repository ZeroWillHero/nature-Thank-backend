const Cart = require('../../../models/Cart');

const updateCart = async (req,res) => {
    const { id } = req.params;
    const { quantity } = req.body;

    try {
        const cart = await Cart.findOne({_id : id});
        const updatedCart = await Cart.findOneAndUpdate(
            { _id: id },
            {
                $set: { quantity: quantity, total: cart.product.price * quantity }
            },
            { new: true }
        );
        res.status(200).json({ savedCart : updatedCart });
    }catch(error){
        res.status(500).json({ error });
    }
}

module.exports = updateCart;