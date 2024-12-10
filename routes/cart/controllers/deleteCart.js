// directly delete from the cart 
const Cart = require('./../../../models/Cart');

const deleteCart = async (req,res) => {
    const { id } = req.params;
    try {
        const deleteProduct = await Cart.findByIdAndDelete({ _id: id });
        res.status(200).json({ message: 'Product removed from cart' });
    }catch(error){
        res.status(500).json({ error });
    }
}

module.exports = deleteCart;