const express = require('express')
const router = express.Router()
const models = require('../models')
const photoController = require('../utils/photoController')
const cors = require('cors')
router.use(express.static('public'))


const Sequelize = require('sequelize')
router.use(express.json())
router.use(cors())


//add product
router.post('/add-product', (req, res) => {
    const product_name = req.body.product_name
    const product_qty = req.body.product_qty
    const product_type = req.body.product_type
    const product_image = req.body.product_image
    const product_description = req.body.product_description
    const user_description = req.body.user_description
    const lisitng_expiration = req.body.lisitng_expiration
    const user_id = req.body.user_id

    let product = models.Product.build({
        product_name, product_qty, product_type, product_image, product_description, user_description, lisitng_expiration, user_id
    })
    product.save().then(savedProduct => {
        res.send("successfully added product!")
    })
})

//view all products 
router.get('/',  photoController.uploadUserProductPhoto, (req, res) => {
    models.Product.findAll().then(products =>{
        res.json(products)
    } )
})

//view not my products
router.get('/others-products/:id', photoController.uploadUserProductPhoto, (req, res) => {
    const user_id = req.params.id
    const Op = Sequelize.Op

    models.Product.findAll({
        where:{
            user_id: {
                [Op.ne]: user_id
            }
            
        }
    }).then(product => {
        res.json(product)
    })
})

//upload.single('photo'),
//update product
router.post('/update-product/:id', photoController.uploadUserProductPhoto, (req, res) => {

    const id = req.params.id
    const product_name = req.body.product_name
    const product_qty = req.body.product_qty
    const product_type = req.body.product_type
    const product_image = req.file.file
    const product_description = req.body.product_description
    const user_description = req.body.user_description
    const lisitng_expiration = req.body.lisitng_expiration
    const user_id = req.body.user_id
    
    let product = models.Product.update({
        product_name, product_qty, product_type, product_image, product_description, user_description, lisitng_expiration, user_id

    },{
        where: {
            id: id
        }
    })
    .then(() => {
        res.send("Update successful!")
    }).catch(e=>console.log(e))
})


//delete product
router.delete('/delete', (req, res) => {
    let product_id = req.body.id
    models.Product.destroy({
        where: {
            id: product_id
        }
    })
    res.send("Deleted!")
})

//sort product by type
router.get('/product-sort', (req, res) => {
    let type = req.body.product_type
    models.Product.findAll({
        where: {
            product_type: type
        }
    }).then(products => {
        res.json(products)
    })
})

//product by product id
router.get('/:id', (req, res) => {
    let product_id = req.params.id
    models.Product.findOne({
        where: {
        id: product_id
        }
    }).then(product => {
        res.json(product)
    })
})

//archive a product
router.post('/user-products/archived/:id', (req, res) => {
    const id = req.params.id

    const item_active = req.body.item_active    
    const inactivate_reason = req.body.inactivate_reason

    models.Product.update({
         item_active, inactivate_reason
        }, {
            where: { 
                id: id
            }
        })
        .then(() => {
            res.send("Update successful!")
        }).catch(e=>console.log(e))
})
//view archived products
router.get('/user-products/archived/:user_id', (req, res) => {
    let user_id = req.params.user_id
    models.Product.findAll({
        where: {
            user_id: user_id,
            item_active: false
        }
    }).then(products =>{
        res.json(products)
    })    
})

//display user's products
router.get('/user-products/:user_id', (req, res) => {
    let user_id = req.params.user_id
    models.Product.findAll({
        where: {
            user_id: user_id,
            item_active: true
        }
    }).then(products =>{
        res.json(products)
    })
})


module.exports = router
