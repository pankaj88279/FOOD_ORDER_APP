
const mongoose = require("../config/db");


let userschema =new mongoose.Schema ({
    productName: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String },
    img:{type:String}

});

let registerschema=new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: {
        type: String,
        required: true,
        unique: true,
      },
    password: { type: String },
    confirmpassword:{type: String,required: true}
});

const User = mongoose.model('User', userschema)
const register = mongoose.model('register',registerschema)

exports.User = User;
exports.register = register;