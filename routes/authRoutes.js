const express=require('express')

const router= express.Router()

const authControllers=require("../controllers/authControllers")



router.route('/login').post(authControllers.login)
router.route('/signup').post(authControllers.signup)

module.exports=router;