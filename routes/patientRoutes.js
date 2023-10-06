const express= require("express")
const router=express.Router();

const patientControllers= require("../controllers/patientControllers")


// get all patient lists
router.route('/').get(patientControllers.patients)
//create a patient
router.route('/').post(patientControllers.savePatient)
router.route('/:id').get(patientControllers.singlePatient)
router.route('/:id').put(patientControllers.editPatient)
router.route('/:id').delete(patientControllers.deletePatient)
module.exports=router