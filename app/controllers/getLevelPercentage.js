var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose');

module.exports = function (app) {
  app.use('/', router);
};

router.post('/getlevelpercentage', function (req, res, next) {
	//TODO: Will need to implement this once we get the SensorDataReader module done.
	//Should grab the level value and do whatever 'math stuffs' we need to it.
	
  res.status(505).send('Not Implemented');
});
