const express= require('express');
const { productcontroller } = require('../controllers/productcontroller');


const productroute=express.Router();


productroute.post('/products',productcontroller)


exports.productroute=productroute