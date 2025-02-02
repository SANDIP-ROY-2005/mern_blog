// const express = require('express');
// const mongoose = require('mongoose');
// const router = require('./routes/user.route.js')
// const authRouter = require('./routes/auth.route.js')
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
// import userRouter from "./routes/user.route.js";

 //one way to connect dot env would be 
 //const dotenv = require('dotenv);
 //dotenv.config(); 
 // or simply the below mentioned 

// require('dotenv').config()
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("MongoDb is connected");
    
}).catch(err=>{
    console.log(err);
});

const app = express();
app.listen(3000,()=>{
    console.log("server is running on port 3000!");
});

app.get('/',(req,res)=>{
    res.send("hello world,  ");
});


app.use(express.json());
app.use(cookieParser());
app.use('/api/user', router);
app.use('/api/auth', authRouter)

// setting up middleware
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "internal server error";
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    });

});
 
