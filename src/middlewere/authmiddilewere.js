let express = require('express');

const jwt = require('jsonwebtoken');

const { register } = require('../model/user')

let authMiddleware = (req, res, next) => {

    if (req.headers.authorization === undefined) {

        res.status(200).json({ msg: 'Unauthorized' })
    }
    
    //  console.log("data--->",req.headers.authorization.split(" ")[1]);

    let token = req.headers.authorization.split(' ')[1];
    

    try {
        //   console.log("decode---->",token)
        var decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("decode---->", decoded,)
        req.user = decoded;

        next();

    } catch (error) {
        res.status(403).json({
            msg: 'unauthorized',
        });
    }
    
};

let enduserAuth = (req, res, next) => {
    if (req.user.role !== 'enduser') {
        res.status(403).json({
            msg: "Unauthorized"
        })
    } else {
        next();
    }
}

let adminAuth = (req, res, next) => {
    // console.log("role--->",req.user.role)
    if (req.user.role !== 'admin') {
        res.status(403).json({
            msg: "Unauthorized"
        })
    } else {
        next();
    }
}


module.exports = { authMiddleware, enduserAuth, adminAuth }