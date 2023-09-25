const express = require('express');
const {register } = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();

let logincontroller = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email in the database
        const user = await register.findOne({ email });
        console.log("user--->",user)
        if (!user) {
            return res.status(401).json({ msg: 'User not found' });
        }

        // Compare the provided password with the hashed password stored in the database
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        console.log('isPasswordValid---->',isPasswordValid)
        if (!isPasswordValid) {
            return res.status(401).json({ msg: 'Invalid password' });
        }
      const token= jwt.sign({ email: user.email,role:user.role}, process.env.JWT_SECRET)
        // Password is valid, you can create a JWT token or set a session to manage the user's authentication
        // Here, we are sending a success response
        res.status(200).json({
            msg: 'Login successfully',
            email: user.email,
            token:token,
            role:user.role
        });
    } catch (err) {
        res.status(500).json({
            msg: 'Login unsuccessful',
            err,
        });
    }
};

exports.logincontroller = logincontroller;
