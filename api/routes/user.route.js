// const express = require('express');
import express from 'express';
// const { test } = require('../controllers/user.controller.js');
import { test } from '../controllers/user.controller.js';
// since to go inside test we had to go out form routes folder and get inside controllers folder
//i.e moving outside of one folder and getting insid another folder to fetch a file we use ../

const router = express.Router();

router.use('/test' ,test);

// this also works router.get('/test' ,test);

export default router;
// module.exports = router;
