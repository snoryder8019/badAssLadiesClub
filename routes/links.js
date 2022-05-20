const express = require('express');
const router = express.Router();

router.get('/feelGood',(req,res)=>{
res.redirect('https://badassladiesclub-school.thinkific.com/courses/feelinggood')});
router.get('/w2',(req,res)=>{
res.redirect('http://www.w2marketing.biz')});
router.get('/purple',(req,res)=>{
    res.redirect('http://www.purplereignftw.com')});
    router.get('/lawrieWork',(req,res)=>{
        res.redirect('https://calendly.com/lawriewallace/30min?month=2022-05')});
module.exports = router;
