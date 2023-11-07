
const express= require("express")
const treatmentControllers= require("../controllers/treatmentControllers");
const router= express.Router();
// unscure routes to get data b/w them in other routws
router.route('/').post(treatmentControllers.saveTreatment)
router.route('/').get(treatmentControllers.Treatment)
const requireAuth = require('../middleware/requireAuth')




//require auth middleware for all routes
router.use(requireAuth)



router.route('/:id').get(treatmentControllers.singleTreatment)
router.route('/:id').put(treatmentControllers.editTreatment)
router.route('/:id').delete(treatmentControllers.deleteTreatment)


module.exports=router;