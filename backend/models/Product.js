const mongoose = require('mongoose');

//Definisi Schema Produtcs
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required : true,
        unique : true
    },
    price: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required : true
    }, // Cloudinary URL
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Product', productSchema);