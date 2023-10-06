const express=require("express")
const router=express.Router()


const paymentControllers= require("../controllers/paymentControllers")

router.route('/').get(paymentControllers.Payments)
router.route('/').post(paymentControllers.savePayment)
router.route('/:id').get(paymentControllers.singlePayment)
router.route('/:id').put(paymentControllers.editPayment)
router.route('/:id').delete(paymentControllers.deletePayment)


module.exports=router