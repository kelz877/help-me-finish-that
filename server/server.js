const express = require('express')
const app = express()
const multer = require('multer');
//require('dotenv').config() //initializes the .env config file
const models = require('./models')
const cors = require('cors')
const jwt = require('jsonwebtoken')
//const PORT = process.env.PORT
app.use(express.json())
const account = require('./routes/account')
const product = require('./routes/product')
const deals = require('./routes/deals')

const upload = multer({ dest: 'public/img/users'})


global.authenticate = require('./utils/authMiddleware')

app.use(cors())

app.use('/account', account)
app.use('/product', product)
app.use('/deals', deals, authenticate)



app.listen(8080, () => {
    console.log('server is running')
})