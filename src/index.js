
const express = require('express');
const {User} = require('./model/user');
const { productroute } = require('./routes/productRoute');
const { loginroute } = require('./routes/loginroute');
const { registerroute } = require('./routes/registrationRoute');
const app = express();

app.use(express.json()),

require('dotenv').config();

app.use('/api',productroute)
app.use('/api',loginroute)
app.use('/api',registerroute)

const port = process.env.PORT || 2000

app.listen(port, () => {
    console.log(`this port is listening on ${port}`)
})
