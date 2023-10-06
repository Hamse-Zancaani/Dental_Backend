
const express= require("express")
const router= express.Router();


const treatmentControllers= require("../controllers/treatmentControllers");



router.route('/').get(treatmentControllers.Treatment)
router.route('/').post(treatmentControllers.saveTreatment)
router.route('/:id').get(treatmentControllers.singleTreatment)
router.route('/:id').put(treatmentControllers.editTreatment)
router.route('/:id').delete(treatmentControllers.deleteTreatment)


module.exports=router;