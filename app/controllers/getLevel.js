var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    SensorDataReader = require("../modules/sensorDataReader");

module.exports = function (app) {
  app.use('/', router);
};

router.post('/getlevel', function (req, res, next) {
  //TODO: This is just test data. Will need to write a new module for interfacing
  //with the sensor and drop in a call to it here.
  SensorDataReader.getLevel(function(err, result) {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.send({
      result: result
    });
  });

});
