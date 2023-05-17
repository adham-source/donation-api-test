const express = require('express')
const donationController = require('../controllers/donationController')

const router = express.Router()

router.post('/donate', donationController.addNewDonataion)
router.get('/donate', donationController.getAllElement)
router.get('/donate/:id', donationController.getElmenetById)
router.put('/donate/:id', donationController.updateById)
router.delete('/donate/:id', donationController.deletById)

module.exports = router
