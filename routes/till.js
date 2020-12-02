const router = require('express').Router();
const async = require('async');
const Till = require('../models/tillModel');
const Stanbic = require('../models/stanbicModel');
const Extra = require('../models/extraModel');



router.post("/till", (req, res, next) => {
  let till  = new Till();
  till.amount = req.body.amount;
  till.totale = req.body.totale
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


  router.delete("/till",  (req, res, next) => {
    Till.deleteMany({})
      .exec((err, till) => {
        if (err) {
          res.json({
            success: false,
            message: 'Money not deleted'
          });
        } else {
          if (till) {
            res.json({
              success: true,
              till: till,
              message: 'Money Successfully Deleted'
            });
          }
        }
      });
  });


  router.post("/extra", (req, res, next) => {
    let extra  = new Extra();
    extra.amount = req.body.amount;
  
    extra.save();
    res.json({
      success: true,
      message: 'Success'
    });
  });
  


  
  router.get("/extra", (req, res, next) => {
      Extra.find({}, (err, extra) => {
       res.json({
         success: true,
         message: "Success",
         extra: extra
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