const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

const Pelanggan = require('../models/Customer');

router.get('/read', async (req, res) => {
    try {
        const customers = await Pelanggan.find();
        res.status(200).json(customers);
    } catch (err){
        res.status(500).json(err);
    }
});

router.put('/edit/:id', async (req, res) => {
    const { fullName, email, noTelepon, alamat } = req.body;
    try{
        const customupdate = await Pelanggan.findByIdAndUpdate(
            req.params.id,
            { fullName, email, noTelepon, alamat }
        );
        res.status(200).json(customupdate);
    }catch(err){
        res.status(500).json(err);
    }
});

router.delete('/delete/:id', async (req, res) => {
    try{
        await Pelanggan.findByIdAndDelete(req.params.id);
        res.status(200).json('Customer Deleted');
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;