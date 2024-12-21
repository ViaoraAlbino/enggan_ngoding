//Mengimport tools yang dibutuhkan
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

//Menyiapkan PORT
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

//CRUD 
const Todo  = require('./models/unify');

//Midldleware
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB Terkoneksi'))
.catch(err=> console.log(err));

//Routes
app.get('/',(req,res) => {
    res.send('API RUNNING SUCCESSFULLY...');
});

// Start Server
app.listen(PORT, () => console.log(`Server Running on http://localhost:${PORT}`));

