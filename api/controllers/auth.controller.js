// const { default: User } = require("../models/user.model.js");
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();



// logic for signup for user
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!email || !password || email === '' || password === '') {
    next(errorHandler(400, "all fields are required"));

  }
  const hashedPassword = bcryptjs.hashSync(password, 10);
// if the entered credentials are valid then we will make a new user out of the given data 
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.json('Signup successful');
  } catch (error) {
    next(error);
  }
};



// logic for signin for user
export const signin = async (req, res, next) => {
// so here we would basically try to get the username ,email ,password the user registered with and verify the enter fields with that present in our database if all entered fields are correct then we would set a cookie inside the borwser of the user in the frontend ,its done to check if the user is authenticated or not 
  const { username, password } = req.body;
  console.log('Signin attempt with username:', username);

  if (!username || !password || username === '' || password === '') {
    console.log('Validation failed - missing email or password');
    return next(errorHandler(400, 'All fields are required'));
  }

  try {
    console.log('Attempting to find user in database...');
    // Log the query we're about to make
    console.log('Query:', { username });

    const validUser = await User.findOne({ username });
    console.log('Database response:', validUser);

    if (!validUser) {
      console.log('No user found with username:', username);
      return next(errorHandler(404, 'User not found'));
    }

    console.log('User found, verifying password');
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      console.log('Invalid password');
      return next(errorHandler(400, 'Invalid password'));
    }
     // if all the credentials entered by user is correct then we will proceed as below 

    const token = jwt.sign(
      { id: validUser._id },
      process.env.JWT_SECRET
    );

    const { password: pass, ...rest } = validUser._doc;

    console.log('Authentication successful, sending response');
    res
      .status(200)
      .cookie('access_token', token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    console.error('Database error:', error);
    return next(error);
  }
};



//logic for signup for user using google account 
export const google = async(req,res,next)=>{

  const {email,name,googlePhotoUrl} = req.body;
  try {

  // here we are trying to find the user thorough the email he/she had entered
    const user = await User.findOne({email}); 
    if(user){
      const token = jwt.sign({id:user._id},process.env.JWT_SECRET);
      const {password, ...rest} = user._doc;
      res.status(200).cookie('access_token',token,{httpOnly:true,}).json(rest);
    }
    // if the user doesnt exist then we make a new user
    else{
      const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);

      const hashedPassword = bcryptjs.hashSync(generatedPassword,10);
      const newUser = new User(
        {
          username:name.toLowerCase().split('').join('') + Math.random().toString(9).slice(-4),
          email,
          password:hashedPassword,
          profilePicture: googlePhotoUrl,
        }
      );

       await newUser.save();
       // till here the new user has been created successfully now we need to send cookie to the frontend of the browser of user
       const token = jwt.sign({id:newUser._id},process.env.JWT_SECRET);
       const {password, ...rest} = newUser._doc;
       res.status(200).cookie('access_token',token,{httpOnly:true,}).json(rest); 
    }


    
  } catch (error) {
    next(error);
  }

}

// module.exports = {signup};
// export default signup; this is saying that signup is not exported 