const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [ true, 'product name must pe provided' ]
    },

    price : {
        type : Number,
        type : String,
        required : [ true, 'product price must pe provided' ]
    },

    feature : {
        type : Boolean,
        default : false
    },

    rating : {
        type : Number,
        default : 4.5,
    },

    createdAt : {
        type : Date,
        default : Date.now()
    },

    compony : {
        type : String,
        enum : {
            values : ['ikea', 'liddy', 'caressa', 'marcos'],
            message : '{ VALUE } is not supported'
        }
        // enum : ['ikea', 'liddy', 'caressa', 'marcos']
    },

})

module.exports = mongoose.model('Product', productSchema);