const Order = require('../../../models/Order');

const deleteOrder = async (req,res) => {
    const { id } = req.params;

    try {
        const order = await Order.findByIdAndDelete(id);
        if(!order) {
            return res.status(404).json({message: 'Order not found'});
        }
        return res.status(200).json({message: 'Order deleted successfully', order: order});
    } catch (error) {
        return res.status(500).json({message: 'Internal server error'});
    }
 }

module.exports = deleteOrder;