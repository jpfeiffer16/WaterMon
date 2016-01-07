var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose');

module.exports = function (app) {
  app.use('/', router);
};

router.post('/getlevel', function (req, res, next) {
	//TODO: This is just test data. Will need to write a new module for interfacing
	//with the sensor and drop in a call to it here.
	
  var value = Math.random() * 100;
  res.send({
  	result: value
  });
});
