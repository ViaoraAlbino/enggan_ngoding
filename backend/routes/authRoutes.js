const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Customer = require('../models/Customer');
const { loginLimiter } = require('../middleware/rateLimiter');

const router = express.Router();

// Endpoint untuk Registrasi User
router.post('/registrasi', async (req, res) => {
    try {
        const role = 'user';
        const { fullName, username, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email sudah terdaftar' });
        }

        // Untuk User
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ fullName, username, email, password: hashedPassword, role });
        await newUser.save();

        // Untuk Customer
        const noTelepon = 'Tambahkan Nomor Telepon Anda';
        const alamat = 'Tambahkan Alamat Anda';
        const newCustomer = new Customer({ fullName, username, email, password: hashedPassword, noTelepon, alamat });
        await newCustomer.save();

        res.status(201).json({ message: 'Registrasi berhasil', user: newUser });
    } catch (error) {
        console.error('Error saat registrasi:', error);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});

// Endpoint untuk Login dengan Rate Limiter
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        const existingUser = await User.findOne({ username });
        if (!existingUser) {
            return res.status(400).json({ message: 'Username salah' });
        }

        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Password salah' });
        }

        const role = existingUser.role;
        const id = existingUser.id;
        const token = jwt.sign({ id: existingUser._id, role, id }, process.env.JWT_SECRET, { expiresIn: '48h' });
        //  console.log(userId);

        res.status(200).json({
            message: 'Login Berhasil',
            token,
            user: { id: existingUser._id, username: existingUser.username, role: existingUser.role },
        });
    } catch (error) {
        console.error('Error saat login:', error);
        res.status(500).json({ message: 'Login Error', error: error.message });
    }
});

module.exports = router;