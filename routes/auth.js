const router = require("express").Router()
const AuthController = require("../controllers/AuthController")

//register

router.post('/register', AuthController.userRegister)
router.post('/login', AuthController.userLogin)

module.exports = router;