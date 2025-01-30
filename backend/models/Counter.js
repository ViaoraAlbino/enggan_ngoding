const mongoose = require('mongoose');

const counterSchema = new mongoose.Schema({
  _id: {
    type: String, // Nama sequence, seperti 'products' atau 'users'
    required: true,
  },
  seq: {
    type: Number, // Nilai sequence yang terus meningkat
    default: 0,   // Nilai awal sequence
  },
});

module.exports = mongoose.model('Counter', counterSchema);