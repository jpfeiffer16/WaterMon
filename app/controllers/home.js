var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  LevelRecordStorage = require('../modules/levelRecordStorage');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  LevelRecordStorage.getAllLevelRecords(function(err, records) {
    if (!err) {
      res.render('index', {
        title: 'WaterMon',
        records: records
      });
    } else {
      res.render('error', {
        error: err
      });
    }
  });
});
