var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var data = {
  	confirmation: 'success',
  	resource: 'test'
  }
  res.json(data)
});

module.exports = router;