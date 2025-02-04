const mongoose = require('mongoose');

// Definisi Schema User
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        trim: true,
    },
    username: {
        type: String,
        required: true,
        unique: true, // Hanya username yang unik
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Hanya email yang unik
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        lowercase: true,
    },
}, { timestamps: true });

// Ekspor Model
module.exports = mongoose.model('User', userSchema);