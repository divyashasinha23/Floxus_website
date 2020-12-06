const {Router} = require('express');
const authController =  require('../controllers/authControllers');

const router = Router();

router.post('/signup',authController.signup_post);


module.exports = router;