const express = require('express')
const router = express.Router()
const models = require('../models')

const cors = require('cors')
router.use(cors())

router.use(express.json())
//admin - view all deals
router.get('/', (req, res) => {
    models.Deal.findAll().then(deals => {
        res.json(deals)
    })
})

//add deal
router.post('/add-deal', (req, res) => {
    const message = req.body.message
    //user attached to the product
    const product_owner_id = req.body.product_owner_id
    //user who is logged in trying to finish product
    const product_buyer_id = req.body.product_buyer_id
    //product id that is being bought/given
    const product_id = req.body.product_id


    let deal = models.Deal.build({
        message, product_owner_id, product_buyer_id, product_id
    })
    deal.save().then(deal => {
        res.send("Deal saved successfully!")
    })
})

//view my deals as owner - message receiver

router.get('/my-deals/:product_owner_id', (req, res) => {
    const product_owner_id = req.params.product_owner_id
    models.Deal.findAll({
        where: {
            product_owner_id: product_owner_id
        },
        include: [
            {
                model: models.Product,
                as: 'Product',
                attributes: ["product_name", "product_qty", 'product_image', 'product_description', 'user_description']
            },
            {
                model: models.User, 
                as: "Product_Buyer",
                attributes: ["username"]
            }
        ]
    }).then(deals => {
        res.json(deals)
    })
})

//view my deals as buyer - message sender
router.get('/my-finishes/:product_buyer_id', (req, res) => {
    const product_buyer_id = req.params.product_buyer_id
    models.Deal.findAll({
        where: {
            product_buyer_id: product_buyer_id
        },
        include: [
        {
            model: models.Product,
            as: 'Product',
            attributes: ["product_name", "product_qty", 'product_image', 'product_description', 'user_description']
        },
        {
            model: models.User, 
            as: "Product_Owner",
            attributes: ["username"]
        }

        ]
    }).then(deals => {
        res.json(deals)
    })
})

//admin delete deal

module.exports = router