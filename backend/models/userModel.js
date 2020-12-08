const mongoose = require('mongoose');
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema
({
    name: {
        type: String,
        required: [true, 'Name is Required']
    },
    userName:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: [true, 'Email is Required'],
        unique: true,
        validate : [isEmail, 'Please enter a valid Email']
    },
    password:{
        type: String,
        required: [true, 'Password is Required']
    },
    phone:{
        type: Number,
        required: true,
    },
    isAdmin:{
        type: Boolean,
    },
});
 userSchema.pre('save', async function(next){
     const salt = await bcrypt.genSalt();
     this.password = await bcrypt.hash(this.password,salt);
     next();
  });

// //login user
userSchema.statics.signin = async function(email, password){
    const user = await this.findOne({email});
    if (user){
  const auth = await bcrypt.compare(password, user.password);
  if(auth){
    return user;
  }
  throw('incorrect password');
    }
    throw Error('incorrect email');
}

// jwt

const User = mongoose.model('User',userSchema);

module.exports = User;