const express = require('express');
const { signup } = require('../controllers/auth.controller.js');


const authRouter = express.Router();

// authRouter.post('/signup' , signup); its showing cant get will use postman for this
authRouter.get('/signup' , signup);
module.exports = authRouter;


