// Mengimport tools yang dibutuhkan
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const User = require('./models/User');
const Product = require('./models/Product');
const getNextSequence = require('./getNextSequence');

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

// Konfigurasi penyimpanan menggunakan Cloudinary
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'products', // Nama folder di Cloudinary
        format: async (req, file) => 'jpg', // Format gambar yang diunggah
        public_id: (req, file) => Date.now(), // Nama file unik
    },
});

// Inisialisasi multer dengan penyimpanan Cloudinary
const upload = multer({ storage });

// Endpoint untuk Registrasi User
app.post('/daftar', async (req, res) => {
    try {
        const role = 'user';
        const { fullName, username, email, password } = req.body;
        // Cek apakah email sudah terdaftar
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email sudah terdaftar' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Simpan data user baru
        const newUser = new User({ fullName, username, email, password: hashedPassword, role });
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
            return res.status(400).json({ message: 'Username salah' });
        }

        // Periksa password
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Password salah' });
        }

        // Dapatkan role dari user
        const role = existingUser.role; // Pastikan `role` disimpan di database User

        // Buat token JWT dengan kunci rahasia dari .env, sertakan `role` dalam payload
        const token = jwt.sign(
            { id: existingUser._id, role }, 
            process.env.JWT_SECRET, 
            { expiresIn: '48h' }
        );

        // Kirimkan respons dengan token dan informasi user
        res.status(200).json({
            message: 'Login Berhasil',
            token,
            user: { id: existingUser._id, username: existingUser.username, role: existingUser.role }
        });
    } catch (error) {
        console.error('Error saat login:', error);
        res.status(500).json({ message: 'Login Error', error: error.message });
    }
});

// CRUD Produk
// Read Data Products
app.get('/product', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create Data Products
app.post('/product', upload.single('image'), async (req, res) => {
    try {
      const { title, price } = req.body;
      const imageUrl = req.file.path; // URL gambar dari Cloudinary
  
      // Dapatkan ID otomatis
      const newId = await getNextSequence('products');
  
      // Buat produk baru dengan ID otomatis
      const newProduct = new Product({
        _id: newId, // ID otomatis
        title,
        price,
        imageUrl,
      });
  
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (err) {
      console.error('Error saat membuat produk:', err);
      res.status(400).json({ message: err.message });
    }
  });

// Update Data Products
app.put('/product/:id', upload.single('image'), async (req, res) => {
    try {
        const { title, price } = req.body;
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: 'Produk tidak ditemukan' });
        }

        if (req.file) {
            product.imageUrl = req.file.path; // Perbarui gambar jika diunggah
        }

        product.title = title;
        product.price = price;
        await product.save();

        res.json(product);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete Data Products
app.delete('/product/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Produk tidak ditemukan' });
        }
        res.json({ message: 'Produk berhasil dihapus', product });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

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