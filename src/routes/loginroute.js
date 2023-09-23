const express= require('express');
const { logincontroller } = require('../controllers/loginController');


const loginroute=express.Router();


loginroute.post('/login',logincontroller)


exports.loginroute=loginroute