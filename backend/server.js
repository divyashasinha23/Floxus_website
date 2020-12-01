const express = require("express");
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const colors = require('colors');
const courseRoutes = require('./routes/courseRoutes');
const courses = require('./data/courses');
const authRoutes = require('./routes/authRoute'); 

dotenv.config();

connectDB()
const app = express();

app.use(express.json());
app.use('/api/courses', courseRoutes);
app.use(authRoutes);

 
app.get("/", (req,res) => {
    res.send("Server running");
});
app.get('/courses', (req,res) => {
    res.json(courses);
});

PORT = process.env.PORT;

app.listen(PORT, ()=> console.log(`Server started at port ${PORT}`));
