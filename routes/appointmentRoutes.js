const express=require("express")
const router=express.Router()

const appointmentControllers= require("../controllers/appointmentControllers")

router.route('/').get(appointmentControllers.Appointments)
router.route('/').post(appointmentControllers.saveAppointments)
router.route('/:id').get(appointmentControllers.singleAppointment)
router.route('/:id').put(appointmentControllers.editAppointment)
router.route('/:id').delete(appointmentControllers.deleteAppointment)



module.exports=router;