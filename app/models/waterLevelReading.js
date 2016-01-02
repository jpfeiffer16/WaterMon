var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var WaterLevelReadingSchema = new Schema({
  level: Number
});

WaterLevelReadingSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('WaterLevelReading', WaterLevelReadingSchema);