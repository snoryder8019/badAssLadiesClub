const express = require('express');
const router = express.Router();

router.get('/feelGood',(req,res)=>{
res.redirect('https://badassladiesclub-school.thinkific.com/courses/feelinggood')});
router.get('/w2',(req,res)=>{
res.redirect('http://www.w2marketing.biz')});

module.exports = router;
