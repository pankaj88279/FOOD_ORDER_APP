const express= require('express');
const { productcontroller } = require('../controllers/productcontroller');
const multer = require('multer');

const productroute=express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      console.log('file---->',file)
      let randomNumber = Math.ceil(Math.random()*10000); 
      let filename = randomNumber+''+file.originalname;
     
      cb(null,file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

productroute.post('/products',upload.single('file'),productcontroller)


exports.productroute=productroute