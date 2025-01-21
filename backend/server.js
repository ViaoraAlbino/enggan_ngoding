// Mengimport tools yang dibutuhkan
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const cloudinary = require('cloudinary').v2;
const path = require('path');

// Konfigurasi Environment
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB Terkoneksi ke database:', process.env.MONGO_URI.split('/').pop().split('?')[0]))
    .catch(err => console.log(err));

// Routes
app.get('/', (req, res) => {
    res.send('API RUNNING SUCCESSFULLY...');
});

// Konfigurasi untuk cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Endpoint untuk Registrasi User
app.post('/daftar', async (req, res) => {
    try {
        const { fullName, username, email, password } = req.body;

        // Cek apakah email sudah terdaftar
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email sudah terdaftar' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Simpan data user baru
        const newUser = new User({ fullName, username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'Registrasi berhasil', user: newUser });
    } catch (error) {
        console.error('Error saat registrasi:', error);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});

// Endpoint untuk Login
app.post('/masuk', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Cari user berdasarkan username
        const existingUser = await User.findOne({ username });
        if (!existingUser) {
            return res.status(400).json({ message: 'Username atau Password salah' });
        }

        // Periksa password
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Username atau Password salah' });
        }

        // Buat token JWT dengan kunci rahasia dari .env
        const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, { expiresIn: '24h' });

        // Kirimkan respons dengan token
        res.status(200).json({ 
            message: 'Login Berhasil', 
            token, 
            user: { id: existingUser._id, username: existingUser.username } 
        });
    } catch (error) {
        console.error('Error saat login:', error);
        res.status(500).json({ message: 'Login Error', error: error.message });
    }
});

// Read Data Product


// Middleware untuk memeriksa token JWT
const auth = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Akses ditolak' });

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Token tidak valid' });
    }
};

// Start Server
app.listen(PORT, () => console.log(`Server Running on http://localhost:${PORT}`));