const express = require('express');
const mongoose = require('mongoose');

 //one way to connect dot env would be 
 //const dotenv = require('dotenv);
 //dotenv.config(); 
 // or simply the below mentioned 

require('dotenv').config()

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("MongoDb is connected");
    
}).catch(err=>{
    console.log(err);
});

const app = express();
app.listen(3000,()=>{
    console.log("server is running on port 3000!");
});
