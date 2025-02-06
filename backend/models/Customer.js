const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const customerSchema = new mongoose.Schema({
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
    noTelepon: {
        type: String,
        required: true,
        trim: true,
    },
    alamat: {
        type: String,
        required: true,
    },
}, { timestamps: true });

customerSchema.plugin(AutoIncrement, { inc_field: 'customerId'}); 

module.exports = mongoose.model('Customer', customerSchema);