/// <reference path="../../typings/mongoose/mongoose.d.ts" />
var Settings = require('../models/settings.js');

module.exports = {
    saveSettings: function(callback) {
        Settings.findOne(function(err, result) {
           if (err) return;
           if (result != null) {
               //TODO: Update it here
           } else {
               //TODO: Insert it here
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