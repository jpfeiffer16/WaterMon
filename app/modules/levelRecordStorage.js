/// <reference path="../../typings/mongoose/mongoose.d.ts" />

var WaterLevelReading = require('../models/waterLevelReading'),
    later = require('later'),
    timer = null;
module.exports = {
  
  getAllLevelRecords: function (callback) {
    WaterLevelReading.find(null, function(err, records) {
      if (typeof(callback) == 'function') {
        callback(err, records);
      }
    }); 
  },
  
  saveCurrentLevel: function (callback) {
    //TODO: Need to write this code once we have as SensorDataReader
  },
  
  startDailyRecording: function(callback) {
    //TODO: Fix it! Something's going wrong in here. Focusing on other fires right now.
    // var schedule = later.parse.recur().every(25).hours();
    // timer = later.setInterval(function() {
    //   //TODO: Need to write this code once we have logic for saving level records
    // }, schedule);
  },
  
  stopDailyRecording: function(callback) {
    var wasStopped = false;
    if (timer != null) {
      timer.clear();
      timer = null;
      wasStopped = true;
    }
    if (typeof(callback) == 'function') {
      callback(wasStopped);
    }
  }
}