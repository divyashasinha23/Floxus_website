const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

//json web token

 const createToken = (id) => {
     return jwt.sign({id}, 'courseToken',{
     expiresIn: '30d',
 })
};

const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: '', password: '' };

  if (err.code === 11000) {
    errors.email = 'that email is already registered';
    return errors;
  }

  if(err.message === "incorrect email"){
    errors.email = "That email is not registered";
    return errors;
  }

  if(err.message === "incorrect password"){
    errors.password = "Password is incorrect";
    return errors;
  }


if (err.message.includes('user validation failed')) {
  Object.values(err.errors).forEach(({ properties }) => {
    errors[properties.path] = properties.message;
  });
}
}
//controller actions

module.exports.signup_post = async (req,res) => {
    const {name, email, password, userName, phone  } = req.body;
    // const userExists = await User.findOne({ email });
   
    // if(userExists) {
    //     res.status(400);
    //     throw new ErrorEent("Email already exists");
        
    // }
        try{
        const user = await User.create({name, userName, email, password, phone});
        if(user){
        res.status(201);
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            token: createToken(user._id),
        });
        }
        else{
            res.status(400);
            throw new Error('Invalid user details');
        }
    }
    catch(err){
      const errors = handleErrors(err);
      res.status(400).json({ errors });
    }
    
};

module.exports.signin_post = async (req,res) => {

  try{
  const{email, password} = req.body;
  const user = await User.signin(email,password);
  res.status(201);
  res.json({
    id:user._id,
    email:user.email,
    password:user.password,
    token: createToken(user._id),
  });
}
catch(err){
   const errors = handleErrors(err);
   res.status(400).json({errors});
}
}


