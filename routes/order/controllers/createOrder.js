const Order = require('./../../../models/Order');
const Cart = require('./../../../models/Cart');

const createOrder = async (req, res) => {
    const { items, user } = req.body;

    let itemTotal = 0;

    const carts = await Cart.find({ user : user });
    carts.forEach(cart => {
        itemTotal += cart.total;
    });

    const total = itemTotal;

    console.log(itemTotal);
    
    const newOrder = new Order({
        items,
        user,
        total 
    });
    try {
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = createOrder;