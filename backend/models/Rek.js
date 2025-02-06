const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const rekeningCustomer = new mongoose.Schema({
    nameBank: {
        type: String,
        trim: true,
    },
    nameCabang: {
        type: String,
        trim: true,
    },
    fullName: {
        type: String,
        trim: true,
    },
    nomorRekening: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
    }
}, { timestamps: true });

rekeningCustomer.plugin(AutoIncrement, { inc_field: 'rekId'}); 

module.exports = mongoose.model('Rekening', rekeningCustomer);