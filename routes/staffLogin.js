var express = require('express');
var router = express.Router();
/* GET staff page. */
router.get('/', function(req, res, next) {
  res.render('staffLogin', { title: 'Express' });
});

module.exports = router;
