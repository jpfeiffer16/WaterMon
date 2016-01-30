/// <reference path="../../typings/mongoose/mongoose.d.ts" />
var Settings = require('../models/settings.js');

module.exports = {
  saveSettings: function(settings, callback) {
    Settings.findOne(function(err, result) {
      if (err) {
        if (typeof(callback) == 'function') {
          callback(err);
        }
        return;
      };
      if (result != null) {
        for (var prop in settings) {
          result[prop] = settings[prop];
        }
        result.save();
      } else {
        var newSettings = new Settings();
        console.log(newSettings);
        for (var prop in settings) {
          newSettings[prop] = settings[prop];
        }
        console.log(newSettings);
        newSettings.save();
      }
      if (typeof(callback) == 'function') {
        callback();
      }
    });
  },

  getSettings: function(callback) {
    Settings.findOne(function(err, result) {
      if (typeof(callback) == 'function') {
        callback(err, result);
      }
    });
  }
}
