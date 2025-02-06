const rateLimit = require('express-rate-limit');

// Middleware untuk rate limiter login
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 menit
    max: 5, // Maksimal 5 permintaan per IP
    standardHeaders: true,
    legacyHeaders: false,
});

module.exports = { loginLimiter };