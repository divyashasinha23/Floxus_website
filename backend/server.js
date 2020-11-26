const express = require("express");
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const colors = require('colors');

dotenv.config();

connectDB()
const app = express();

app.use(express.json());


 
app.get("/", (req,res) => {
    res.send("Server running");
});

PORT = process.env.PORT;

app.listen(PORT, ()=> console.log(`Server started at port ${PORT}`));
