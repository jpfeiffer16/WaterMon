var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  SettingStorage = require("../modules/settingStorage");

module.exports = function (app) {
  app.use('/', router);
};

router.post('/savesettings', function (req, res, next) {
	var settings = req.body;
	console.log(settings);
  SettingStorage.saveSettings(settings, function(err) {
  	if (err) {
  		res.status(500).send(err);
  		return;
  	}
  	res.send({
  	  result: true
  	});
  });
});
