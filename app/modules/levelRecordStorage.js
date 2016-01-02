/// <reference path="../../typings/mongoose/mongoose.d.ts" />
var WaterLevelReading = require('../models/waterLevelReading');
module.exports = {
  
  getAllLevelRecords: function (callback) {
    WaterLevelReading.find(null, function(err, records) {
      if (typeof(callback) == 'function') {
        callback(err, records);
      }
    }); 
  }
}