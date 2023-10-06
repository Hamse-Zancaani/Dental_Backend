
const express=require("express")
const router=express.Router()

const invoiceControllers=require("../controllers/invoiceControllers")


router.route('/').get(invoiceControllers.Invoices)
router.route('/').post(invoiceControllers.saveInvoices)
router.route('/:id').get(invoiceControllers.singleInvoice)
router.route('/:id').put(invoiceControllers.editInvoices)
router.route('/:id').delete(invoiceControllers.deleteInvoices)



module.exports=router;