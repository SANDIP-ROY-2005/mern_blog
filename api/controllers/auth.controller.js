// const { default: User } = require("../models/user.model.js");
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

 export const signup = async(req,res ,next)=>{
    // res.json({message: "signup  api is working oo yeah "});
    // console.log(req.body);
    const {username,email,password} = req.body;
    if(!username || !email || !password || username ==='' || email  ==='' || password ===''){
        // return res.status(400).json({message: "all fields are required"});
        next(errorHandler(400, "all fields are required"));
    }

    const hashedPassword = bcryptjs.hashSync(password,10);
    const newUser = new User({
        username,
        email,
        passoword :hashedPassword,
    });

    try{
        await newUser.save();
        res.json("signup successful");
    }catch(error){
        // res.status(500).json({message: error.message})
        next(error);
    }
     

};
// module.exports = {signup};
// export default signup; this is saying that signup is not exported 