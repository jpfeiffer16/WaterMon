var SettingStorage = require('./settingStorage'),
		LevelRecordStorage = require('./levelRecordStorage');


module.exports = function() {
	SettingStorage.getSettings(function(err, result) {
		if (err) throw err;
		if (result.enableLevelRecording) LevelRecordStorage.startDailyRecording();
	});
};