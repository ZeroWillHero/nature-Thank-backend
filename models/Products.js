const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    product_images: {
        type: Array,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    sub_category: {
        type: String,
        required: true
    },

    state: {
        // weather it is an oil or a solid 
        type: String,
        required: true,
        enum: ['oil', 'solid']
    },

    amount: {
        type: Number,
    },

    keyWords: {
        type: Array,
        required: true
    },

    stock: {
        type: Number,
        required: true
    },

    rating: {
        type: Array,
        default: []
    },

    user : {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required:true
    }

    // type : {
    //     type: String,
    //     required: true,
    //     enum: ['liquid ', 'powder','other']
    // }



},{timestamps: true});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;