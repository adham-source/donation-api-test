const express = require ('express')
const searchController= require('../controllers/searchController')

const router = express.Router()

router.get ('/products' , searchController.getAllProduct)
router.get('/products/:key',searchController.getProductByKey)
router.post ('/products' , searchController.postNewProduct)
router.put('/products/:id' , searchController.putFindAndUpdate)
router.delete ('/products/:id',searchController.deletProductById)
module.exports = router 