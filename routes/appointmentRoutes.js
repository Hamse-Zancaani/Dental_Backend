const express=require("express")
const appointmentControllers= require("../controllers/appointmentControllers")
const router=express.Router()

router.route('/').post(appointmentControllers.saveAppointments)
router.route('/').get(appointmentControllers.Appointments)
const requireAuth = require('../middleware/requireAuth')


router.use(requireAuth)


router.route('/:id').get(appointmentControllers.singleAppointment)
router.route('/:id').put(appointmentControllers.editAppointment)
router.route('/:id').delete(appointmentControllers.deleteAppointment)



module.exports=router;