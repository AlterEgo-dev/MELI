const express = require('express');
const path = require('path');
const route = express.Router();
const mainController = require('../controller/mainController');
const registerController = require('../controller/registerController');
const loginController = require('../controller/loginController');

route.get('/', mainController.home);
route.get('/login', loginController.login);
route.get('/register', registerController.register);

module.exports = route;