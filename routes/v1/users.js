var express = require('express');
var router = express.Router();

var userController = require('../../controllers/user');

router.post('/', userController.register);
router.post('/login', userController.login);


module.exports = router;
