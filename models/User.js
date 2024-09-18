const mongoose = require('mongoose');

// create Schema 
const Schema =  mongoose.Schema();

const userSchema = new mongoose.Schema({
    firstname : {
        type : String,
        required : true
    },

    profile_iamge : {
        type : String,
        default : 'default.jpg'
    },

    lastname : {
        type : String,
        required : true

    },

    email : {
        type : String,
        required : true,
        unique : true
    },

    password : {
        type : String,
        required : true
    },

    role : {
        type : String,
        enum : ['admin','user'],
        default : 'user'
    },

    confirmed : {
        type : Boolean,
        default : false
    }
});


const User = mongoose.model('User',userSchema);

module.exports = User;
