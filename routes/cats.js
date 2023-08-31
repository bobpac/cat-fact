var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const ROOT_URL = 'https://catfact.ninja';
  const userData = await fetch(`${ROOT_URL}/fact`)
    .then(res => res.json());
  res.render('cat', { 
    title: 'Cat Fact',
    fact: userData.fact
  } );
});

module.exports = router;
