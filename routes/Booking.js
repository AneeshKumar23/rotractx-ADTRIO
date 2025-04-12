const express  =require('express')
const router   =express.Router()

const BookingController  = require('../controllers/BookingController')
const Franchise = require('../models/Booking')

router.get('/',BookingController.index)
router.post('/show',BookingController.show)
router.post('/store',BookingController.store)
router.post('/update',BookingController.update)
router.post('/destroy',BookingController.destroy)
module.exports=router