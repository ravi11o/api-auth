var express = require('express');
var router = express.Router();
var usersRouter = require('./users');
var userController = require('../../controllers/user');
var auth = require('../../modules/auth');

router.get('/', (req, res) => {
  res.json({message: "Welcome to conduit API"})
});

router.get('/user', auth.validateJWT, userController.getCurrentUser);

router.use('/users', usersRouter);

module.exports = router;
