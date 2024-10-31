const Cart = require('./../../../models/Cart');

const getCart = async(req,res) => {
    const { id } = req.params;
    const cart = await Cart.findOne({ user: id }).populate('product').populate('user');
    console.log(cart);  
    if(cart){
        res.status(200).json({cart});

    }else{
        res.status(404).json({message : 'Cart not found'});
    }


}

const getAllCart = async (req,res) => {
    const carts = await Cart.find().populate('product').populate('user');
    if(carts){
        res.status(200).json({carts});
    }else {
        res.status(404).json({message : 'Carts not found'});
    }
}

module.exports = { getCart, getAllCart };