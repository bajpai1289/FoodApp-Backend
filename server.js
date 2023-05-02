const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose')
const connectDB = require('./Database/connectDB')
require('dotenv').config()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3500;
connectDB();

app.use('/fooditems', require('./routes/foods.js'))
app.use('/admin', require('./routes/admin'))
app.get('/', (req, res)=>{
    res.send("The server is up and running");
})
mongoose.connection.once('open',()=>{
    console.log('Connected to mongoDB');
    app.listen(PORT, ()=>console.log(`App is listening in port ${PORT}`));
});