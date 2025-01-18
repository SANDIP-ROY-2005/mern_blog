// const { default: User } = require("../models/user.model.js");
import User from "../models/user.model.js";

 export const signup = async(req,res)=>{
    // res.json({message: "signup  api is working oo yeah "});
    // console.log(req.body);
    const {username,email,password} = req.body;
    if(!username || !email || !password || username ==='' || email  ==='' || password ===''){
        return res.status(400).json({message: "all fields are required"});
    }
    const newUser = new User({
        username,
        email,
        passoword,
    });

    try{
        await newUser.save();
        res.json("signup successful");
    }catch(error){
        res.status(500).json({message: error.message})
    }
     

};
// module.exports = {signup};
// export default signup; this is saying that signup is not exported 