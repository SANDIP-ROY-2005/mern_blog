// const mongoose = require('mongoose')
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username:{
    type: String,
    required : true,
    unique   : true,
    },
    password:{
        type: String,
        required : true,
    },
    profilePicture :{
        type: String,
        default: "https://www.google.co.in/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fblank-profile-picture&psig=AOvVaw0JCNXZYD9JO82G9r4aQy-X&ust=1738243015131000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKis8PyBm4sDFQAAAAAdAAAAABAR"
    }


},{timestamps: true});

const User = mongoose.model('User', userSchema);
// module.exports = {User};
export default User;