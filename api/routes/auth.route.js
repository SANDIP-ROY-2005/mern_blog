// const express = require('express');
import express from 'express';
// const { signup } = require('../controllers/auth.controller.js');
import { signup } from '../controllers/auth.controller.js';


const authRouter = express.Router();

// authRouter.post('/signup' , signup); its showing cant get will use postman for this
// authRouter.get('/signup' , signup); in the network section of console its showing status code 404
authRouter.post('/signup' , signup)
export default authRouter;
// module.exports = authRouter;


