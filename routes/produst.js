var express = require('express');
var router = express.Router();
var productC = require('../controller/product')


/* GET home page. */
router.post('/create',productC.create)
router.get('/',productC.sequre,productC.find)
router.put('/:id',productC.sequre, productC.update)
router.delete('/:id',productC.sequre, productC.delete)

module.exports = router;
