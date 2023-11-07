const express= require("express")
const dentistControllers= require("../controllers/dentistControllers")
const requireAuth = require('../middleware/requireAuth')
const router= express.Router()

router.route('/').post(dentistControllers.saveDentist)
router.route('/').get(dentistControllers.dentists)
router.use(requireAuth)

// to secure all routes below



router.route('/:id').get(dentistControllers.dentist)
router.route('/:id').put(dentistControllers.editDentist)
router.route('/:id').delete(dentistControllers.deleteDentist)


module.exports=router