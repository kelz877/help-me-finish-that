const express = require('express')
const router = express.Router()
const models = require('../models')
const bcrypt = require('bcrypt')
const saltRounds = 10
const cors = require('cors')
const jwt = require('jsonwebtoken')
const photoController = require('../utils/photoController')

require('dotenv').config()

router.use(cors())
router.use(express.json())

//middleware -> upload.single('photo')


//user registration route
router.post('/register', photoController.uploadUserProductPhoto, async(req, res) => {
    let username = req.body.username
    let password = req.body.password
    let full_name = req.body.full_name
    let email_address = req.body.email_address
    let zip_code = req.body.zip_code
    let user_image = 'default.jpg'

    models.User.findOne({
        where: {
            username: username
        }
    }).then(user =>{
        if(user){
            res.send({message: "user already exists"})
        }else{
            bcrypt.hash(password, saltRounds).then(function(hash){
                models.User.create({
                    username: username,
                    password: hash,
                    full_name: full_name,
                    email_address: email_address,
                    zip_code: zip_code,
                    last_login: Date.now(),
                    user_image: user_image
                }).then(user => {
                    res.send({message: "User created!"})
                }).catch(e=>console.log(e))
            })
        }
    }).catch(e=>console.log(e))

})

router.get('/', (req, res) => {
    models.User.findAll().then(users => {
        console.log("looking for users")
        res.json(users)
    })
})
//user login route
router.post('/login', (req, res) => {
    let username = req.body.username
    let password = req.body.password 

    models.User.findOne({
        where: {
            username: username
        },
        attributes:['id', 'password']
    }).then(user => {
        if(user){
            bcrypt.compare(password, user.get('password')).then((response) => {
                if(response){
                    var token = jwt.sign({username: username},process.env.JWT_SECRET_KEY);
                    var user_id = user.id
                    
                    res.json({token: token, user_id: user_id, username: username})
                    console.log(response)
                    // res.send({message: "You are logged in!"})
                }else{
                    res.send({message: "Wrong username or password"})
                }
            })
        }else{
            res.send({username: "Unable to login"})
        }
    })
    .catch(e=> console.log(e))
})







module.exports = router