var express = require('express');
var router = express.Router();
 var CARTC = require('../controller/cart')


/* GET home page. */
router.post('/add',CARTC.create)
router.get('/',CARTC.find)
router.put('/:id',CARTC.update)
router.delete('/:id',CARTC.delete)

module.exports = router;
