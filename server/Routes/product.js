const express = require('express')
const router = express.Router()
const models = require('../models')


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

//update product

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



module.exports = router
