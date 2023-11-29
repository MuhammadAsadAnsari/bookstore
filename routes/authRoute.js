const {Router}= require('express');
const { signup, signuppost, login, loginpost } = require('../controllers/authController')
const router = Router();
router.get('/signup',()=>signup)
router.route('/signupPost').post(signuppost)

router.get('/login',()=>login)
router.route('/loginp').post(loginpost)
module.exports =router
