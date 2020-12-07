const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

//json web token

const createToken = (id) => {
  return jwt.sign({ id }, 'courseToken', {
    expiresIn: '30d',
  });
};

//controller actions

// module.exports.signup_post = asyncHandler(async (req, res) => {
//   const { name, userName, email, password, phone } = req.body;

//   const user = await User.create({ name, userName, email, password, phone });
//   if (user) {
//     res.status(201);
//     res.json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       token: createToken(user._id),
//     });
//   } else {
//     res.status(400);
//     res.json({ message: 'error' });
//   }
// });

module.exports.signup_post = async (req, res) => {
  const { name, userName, email, password, phone } = req.body;

  try {
    const user = await User.create({ name, userName, email, password, phone });
    if (user) {
      res.status(201);
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: createToken(user._id),
      });
    } else {
      res.status(400);
      res.json({ message: 'error' });
    }
  } catch (error) {
    res.status(400);
    res.json({ message: 'error' });
  }
};

// module.exports.signin_post = async (req,res) => {
//     const {email, password} = req.body;

//     try{
//         const user = await User.signin(email, password);
//         //const token = createToken(user._id);
//         res.status(200).json({success: true});
//     }
//     catch(err){
//         res.status(404).json({message : "error"});

//     }
// }
