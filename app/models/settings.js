var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var SettingSchema = new Schema({
  name: String,
  emptyDepth: Number,
  fullDepth: Number
});

SettingSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

module.exports = mongoose.model('Settings', SettingSchema);