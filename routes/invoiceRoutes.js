
const express=require("express")
const invoiceControllers=require("../controllers/invoiceControllers")
const router=express.Router()

/// unscure routes to get data b/w them in other routws
router.route('/').post(invoiceControllers.saveInvoices)
router.route('/').get(invoiceControllers.Invoices)
const requireAuth = require('../middleware/requireAuth')


// to secure all routes below


router.use(requireAuth)


router.route('/:id').get(invoiceControllers.singleInvoice)
router.route('/:id').put(invoiceControllers.editInvoices)
router.route('/:id').delete(invoiceControllers.deleteInvoices)



module.exports=router;