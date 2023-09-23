const express= require('express');
const { registercontroller } = require('../controllers/registrationController');

const registerroute=express.Router();


registerroute.post('/register',registercontroller)


exports.registerroute=registerroute