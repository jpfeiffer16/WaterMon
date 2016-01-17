var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  SettingStorage = require("../modules/settingStorage");

module.exports = function (app) {
  app.use('/', router);
};

router.post('/getsettings', function (req, res, next) {
  SettingStorage.getSettings(function(err, settings) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(settings);
    }
  });
});
