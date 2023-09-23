const {mongoose}= require('mongoose');

//mongodb+srv://pankaj:pankaj@cluster0.4gb2s.mongodb.net/
mongoose.connect('mongodb+srv://pankaj:pankaj@cluster0.4gb2s.mongodb.net/')
.then(()=>{
    console.log("Connected to Mongodb server")
})
.catch(()=>{
    console.log("disconnetd to Mongodb")
})

module.exports = mongoose;