/// <reference path="../../typings/mongoose/mongoose.d.ts" />
var Settings = require('../models/settings.js');

module.exports = {
    saveSettings: function(settings, callback) {
        Settings.findOne(function(err, result) {
           if (err) return;
           if (result != null) {
               //TODO: Update it here
               for (var prop in settings) {
                   result[prop] = settings[prop];
               }
               result.save();
           } else {
               var newSettings = new Settings();
               for (var prop in settings) {
                   newSettings[prop] = settings[prop];
               }
               newSettings.save();
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