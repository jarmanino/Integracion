const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    category: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    imgUrl: { type: String, required: true },
    price: { type:Number, required: true },
    amount: {type:Number, required: false}
});

module.exports = mongoose.model('Product', ProductSchema);