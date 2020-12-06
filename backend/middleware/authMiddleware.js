const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');

const authRequire = (req,res,next) => {
    const token = req.cookies.jwt;

// json web token is verified
    if(token){
        jwt.verify(token, 'courseToken',(err, decodedToken) =>{
          if(err){
              console.log(err.message);
          }
          else{
              console.log(decodedToken);
              next();
          }
        });
    }
    else{
        res.status(401);
        throw new Error('no token found');
    }
}

module.exports = authRequire;