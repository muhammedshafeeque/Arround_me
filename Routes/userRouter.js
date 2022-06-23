const express=require('express')
const { getUserDetails, getUserData, sendOtp, verifyOtp } = require('../Controllers/UserController')
const router=express.Router()
router.get('/user-details',getUserDetails)
router.get('/userData',getUserData)
router.get('/sentotp',sendOtp)
router.get('/verifyOtp/:otp',verifyOtp)

module.exports=router