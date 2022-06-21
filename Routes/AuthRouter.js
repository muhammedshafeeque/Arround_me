const express=require('express')
const router=express.Router()
const AuthController=require('../Controllers/AuthControleer')
router.post('/signup',AuthController.doSignup)
module.exports=router