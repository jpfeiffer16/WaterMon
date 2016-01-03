var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  SettingStorage = require("../modules/settingStorage");

module.exports = function (app) {
  app.use('/', router);
};

router.get('/issetup', function (req, res, next) {
  SettingStorage.getSettings(function(err, result) {
      if (err) {
          res.status(500).send(err);
          return;
      }
      res.send({
          result: result != null
      });
  })
});
