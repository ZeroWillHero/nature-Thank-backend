const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({

    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cart',
        required: true
    }],

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    total: {
        type: Number,
        required: true
    },

}, {timestamps : true});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
