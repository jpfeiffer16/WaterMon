/// <reference path="../../typings/mongoose/mongoose.d.ts" />


var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  WaterLevelReading = require('../models/waterLevelReading');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/generatetestdata', function (req, res, next) {
  var NUMBEROFRECORDS = 365;
  
  
  for (var i = 0; i < NUMBEROFRECORDS; i++) {
    var record = new WaterLevelReading({
      level: Math.random() * 100
    });
    record.save();
  }
  res.send('Done');
  
  
  
  
});
