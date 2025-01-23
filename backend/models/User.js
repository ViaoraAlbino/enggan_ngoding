const mongoose = require('mongoose');

// Definisi Schema User
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true, // Menghapus spasi di awal/akhir
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true, // Menghapus spasi di awal/akhir
        lowercase: true, // Menyimpan email dalam huruf kecil
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        lowercase: true,
        required: true,
    }
}, {
    timestamps: true, // Menambahkan createdAt dan updatedAt secara otomatis
});

// Ekspor Model
module.exports = mongoose.model('User', userSchema);