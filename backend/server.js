// Import paket utama
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Konfigurasi environment
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware global
app.use(cors());
app.use(express.json());

// Koneksi ke MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB terkoneksi ke database:', process.env.MONGO_URI.split('/').pop().split('?')[0]))
    .catch((err) => console.log(err));

// Import routes
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');

// Routes utama
app.use('/auth', authRoutes);
app.use('/product', productRoutes);

// Tes endpoint utama
app.get('/', (req, res) => {
    res.send('API RUNNING SUCCESSFULLY...');
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));