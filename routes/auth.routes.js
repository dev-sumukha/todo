const express = require('express');
const router = express.Router();

const {requireAuth} = require('../middlewares/auth.middleware');

const authController = require('../controllers/auth.controller');

router.post('/signup',authController.register);
router.post('/login',authController.login);
router.get('/profile',requireAuth,authController.profile);
router.get('/logout',authController.logout);
module.exports = router;