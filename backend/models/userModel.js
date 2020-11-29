const mongoose = require('mongoose');

const userSchema = new mongoose.Schema
({
    name: {
        type: String,
        required: true,
    },
    userName:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    phone:{
        type: Number,
        required: true,
    },
    isAdmin:{
        type: Boolean,
        required: true,
    },
});
const User = mongoose.model('User',userSchema);

module.exports = User;