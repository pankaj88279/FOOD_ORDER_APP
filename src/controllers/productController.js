const express=require('express');
const { User } = require('../model/user');
const app=express();



let productcontroller=(req,res) => {
  console.log(req.body)
    const user=new User(req.body)
    user.save()
    .then((d)=>{
        res.status(200).json({
            msg: " product registration successfully",
            data:d
        })
    })
    .catch((e)=>{
        res.status(200).json({
            msg: "product not register data in DB",
            err:e
        })
    })
   
}

exports.productcontroller=productcontroller
