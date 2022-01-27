const router = require("express").Router()
const UserController = require("../controllers/UserController")

//update
router.put('/:id', UserController.updateProfile)
router.delete('/:id', UserController.deleteProfile)
router.get('/:id', UserController.getUser)
//delete


module.exports = router;