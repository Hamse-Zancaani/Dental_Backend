const express= require("express")
const router= express.Router()

const dentistControllers= require("../controllers/dentistControllers")

router.route('/').get(dentistControllers.dentists)
router.route('/').post(dentistControllers.saveDentist)
router.route('/:id').get(dentistControllers.dentist)
router.route('/:id').put(dentistControllers.editDentist)
router.route('/:id').delete(dentistControllers.deleteDentist)


module.exports=router