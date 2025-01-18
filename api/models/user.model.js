// const mongoose = require('mongoose')
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username:{
    type: String,
    required : true,
    unique   : true,
    },
    passoword:{
        type: String,
        required : true,
    },


},{timestamps: true});

const User = mongoose.model('User', userSchema);
// module.exports = {User};
export default User;