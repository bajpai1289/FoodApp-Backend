const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodItem = new Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    quantity:{
        type: String,
        default: "1 plate"
    },
    vegStatus:{
        type: Boolean,
        default: true
    }
})

module.exports= mongoose.model('FoodItem', foodItem);