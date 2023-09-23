const express = require('express');
const bcrypt = require('bcrypt');

const { register } = require('../model/user');

const app = express();


let registercontroller = async (req, res) => {
   // const { firstName, lastName, email, password, confirmPassword } = req.body;
    // Check if password and confirm password match
    if (req.body.password !== req.body.confirmpassword) {
        return res.status(400).json({ msg: "Password and confirm password do not match" });
    }
    console.log(req.body)
    const salt = 10;

    const hash = await bcrypt.hashSync(req.body.password, salt);

    req.body.password = hash
    console.log("data---->", hash)
    const registerobj = new register(req.body)
    registerobj.save()
        .then((d) => {
            res.status(200).json({
                msg: "registration successfully",
                data: d
            })
        })
        .catch((e) => {
            res.status(401).json({
                msg: "Not register data in DB",
                err: e
            })
        })

}

exports.registercontroller = registercontroller
