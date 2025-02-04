const express = require('express');
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('./models/User'); // Pastikan Anda sudah mengimpor model User yang benar
const dotenv = require('dotenv');

dotenv.config(); // Load .env file

// Konfigurasi Google OAuth
const client = new OAuth2Client(process.env.CLIENT_ID);

// Endpoint Google Login
router.post('/signin', async (req, res) => {
  const { token } = req.body;

  try {
    // Verifikasi token Google
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
    });

    const payload = ticket.getPayload(); // Data user dari Google
    const { email, name, picture } = payload;

    // Periksa apakah pengguna sudah ada di database
    let user = await User.findOne({ email }); // Sesuaikan dengan model database Anda

    if (!user) {
      // Jika pengguna belum terdaftar, tambahkan ke database
      user = new User({
        email,
        name,
        picture,
        role: 'user', // Default role
      });
      await user.save();
    }

    // Buat token JWT untuk login
    const jwtToken = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.SECRET_KEY, // Ambil secret key dari .env
      { expiresIn: '1d' } // Token berlaku selama 1 hari
    );

    // Kirimkan token JWT dan data pengguna
    res.status(200).json({
      message: 'Login successful',
      token: jwtToken,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        picture: user.picture,
        role: user.role,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: 'Invalid Google token' });
  }
});

module.exports = router;
