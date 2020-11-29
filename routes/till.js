const router = require('express').Router();
const async = require('async');
const Till = require('../models/tillModel');
const Stanbic = require('../models/stanbicModel')



router.post("/till", (req, res, next) => {
  let till  = new Till();
  till.amount = req.body.amount;
  till.save();
  res.json({
    success: true,
    message: 'Success'
  });
});


router.get("/till", (req, res, next) => {
    Till.find({}, (err, till) => {
     res.json({
       success: true,
       message: "Success",
       till: till
     })
    });
  })
 
  router.post("/stanbic", (req, res, next) => {
    let stanbic  = new Stanbic();
    stanbic.amount = req.body.amount;
    stanbic.save();
    res.json({
      success: true,
      message: 'Success'
    });
  });
  
  
  router.get("/stanbic", (req, res, next) => {
      Stanbic.find({}, (err, stanbic) => {
       res.json({
         success: true,
         message: "Success",
         stanbic: stanbic
       })
      });
    })

//Exporting the module 
module.exports = router;