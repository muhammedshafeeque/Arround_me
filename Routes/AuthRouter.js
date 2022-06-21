const express=require('express')
const { doSignup, handleLogin } = require('../Controllers/AuthControleer')
const router=express.Router()

router.post('/signup',doSignup)
router.post('/login',handleLogin)
module.exports=router