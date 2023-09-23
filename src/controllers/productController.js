const express = require('express');
//const multer = require('multer');
const { Product } = require('../model/user');
const app = express();


let productcontroller = (req, res) => {
    if (!req.body.productName || !req.body.description || !req.body.price || !req.body.category || !req.file) {
        return res.status(400).json({ msg: 'Please provide all required information.' });
    }
    console.log(req.body)

    const user = new Product(req.body)
    user.save()
        .then((d) => {
            res.status(200).json({
                msg: " product registration successfully",
                data: d
            })
        })
        .catch((e) => {
            res.status(200).json({
                msg: "product not register data in DB",
                err: e
            })
        })

}

exports.productcontroller = productcontroller
