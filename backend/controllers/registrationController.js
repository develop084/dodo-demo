const User =require("../models/registrationModel")
const sendToken = require( "../utils/jwtToken")


exports.registerUser = async (req, res, next) => {
   
  
    const { name, email, password } = req.body;
  
    const user = await User.create({
      name,
      email,
      password,
    });
    sendToken(user, 201, res);
    // res.status(201).json(user)
    
  };