const express = require('express');
const router = express.Router();

router.get('/podcasts',(req, res) => {
  res.render('pages/podcasts')
});

module.exports = router
