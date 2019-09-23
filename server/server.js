const express = require('express')
const app = express()

require('dotenv').config() //initializes the .env config file

const models = require('./models')
const cors = require('cors')
const PORT = process.env.PORT
app.use(express.json())
const account = require('./routes/account')
const product = require('./routes/product')

app.use('/', account)
app.use('/product', product)



app.listen(PORT, () => {
    console.log('server is running')
})