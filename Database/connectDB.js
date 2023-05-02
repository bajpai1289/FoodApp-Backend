const mongoose = require('mongoose');
require('dotenv').config()
const DATABASE_URL = process.env.DATABASE_URI;
const connectDB = async () => {
    try {
        await mongoose.connect(DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    } catch (err) {
        console.error(err)
    }
}

module.exports = connectDB
