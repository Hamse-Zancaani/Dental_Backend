const express= require("express")
const patientControllers= require("../controllers/patientControllers")

const requireAuth = require('../middleware/requireAuth')
const router=express.Router();

router.route('/').post(patientControllers.savePatient)
router.route('/').get(patientControllers.patients)
router.use(requireAuth)

// get all patient lists

//create a patient

router.route('/:id').get(patientControllers.singlePatient)
router.route('/:id').put(patientControllers.editPatient)
router.route('/:id').delete(patientControllers.deletePatient)
module.exports=router