const express = require('express')
const app = express()

//require('dotenv').config() //initializes the .env config file
const models = require('./models')
const cors = require('cors')
const jwt = require('jsonwebtoken')
//const PORT = process.env.PORT
app.use(express.json())
const account = require('./routes/account')
const product = require('./routes/product')
const deals = require('./routes/deals')

app.use('/account', account)
app.use('/product', product)
app.use('/deals', deals)



app.listen(8080, () => {
    console.log('server is running')
})