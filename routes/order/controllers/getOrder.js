const Order = require('./../../../models/Order');

const getOrders = async (req,res) => {
    try {
        const orders = await Order.find().populate('items').populate('user');
        res.status(200).json(orders);
    }catch(error){
        res.status(404).json({message : error.message});
    }
}

const getOrder = async(req,res) => {
    const { id } = req.params;
    try {
        const order = await Order.findOne({ _id : id }).populate('items').populate('user');
        if(order){
            res.status(200).json(order);
        } else {
            res.status(404).json({message : 'Order not found'});
        }
    } catch (error) {
        res.status(500).json({message : error.message});
    }
}

module.exports = { getOrders, getOrder };