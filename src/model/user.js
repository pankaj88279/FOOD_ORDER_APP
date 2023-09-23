
const mongoose = require("../config/db");


let productschema =new mongoose.Schema ({
    productName: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String },
    file:{type:String}

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

const Product = mongoose.model('Product',productschema)
const register = mongoose.model('register',registerschema)

exports.Product = Product;
exports.register = register;