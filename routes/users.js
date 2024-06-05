var express = require('express');
var router = express.Router();
var AUTHC = require('../controller/users')


/* GET users listing. */
router.post('/register',AUTHC.register)
router.post('/login',AUTHC.login)
router.put('/:id',AUTHC.sequre,AUTHC.update)
router.delete('/:id',AUTHC.sequre,AUTHC.delete)

module.exports = router;
