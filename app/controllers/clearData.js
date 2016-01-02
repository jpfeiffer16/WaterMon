/// <reference path="../../typings/mongoose/mongoose.d.ts" />
var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  WaterLevelReading = require('../models/waterLevelReading');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/cleardata', function (req, res, next) {
  WaterLevelReading.remove(null, function(err) {
    if (!err) {
      res.send({
        success: true,
        error: null
      });
    } else {
      res.status(500).send({
        success: false,
        error: err
      });
    }
  });
});