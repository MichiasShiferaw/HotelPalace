
const { Router } = require("express");
const { getUsers, register, login, protected, logout } = require("../controllers/auth");
const { registerValidation, loginValidation } = require("./auth_validators");
const { validationMiddleware } = require("../middleware/validate-middleware");
const { userAuth } = require("../middleware/auth-middleware");
const router = Router();

router.get('/get-users',getUsers);
router.post('/register',registerValidation,validationMiddleware, register);
router.post('/login',loginValidation,validationMiddleware,login);
router.get('/protected',userAuth, protected)
router.get('/logout',logout)

module.exports = router