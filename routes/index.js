var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/year", (req, res) => {
    let date = new Date();
    let Year = date.getFullYear().toString();
    console.log(Year);
  res.json({year: Year})
});

module.exports = router;
