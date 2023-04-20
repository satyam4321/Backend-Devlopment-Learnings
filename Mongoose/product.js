const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    cateogry: String
})

module.exports = mongoose.model('products', ProductSchema);