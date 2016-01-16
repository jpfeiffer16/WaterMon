var SettingStorage = require("./settingStorage");


function moduleExport() {
	function getLevel(callback) {
		//TODO: This is dummy data. Need to acually write something to pull the values from the sensor.
		SettingStorage.getSettings(function(err, settings){
			if (err) {
				if (typeof(callback) == 'function') callback(err);
				return;
			}
			if (settings == null) {
				if (typeof(callback) == 'function') callback({
					empty: true
				}, null);
				return;
			}
			var percentage = Math.round(Math.random() * 100),
			decimal = percentage / 100,
			range = settings.fullDepth - settings.emptyDepth,
			distance = range * decimal + settings.emptyDepth,
			fullness = settings.capacity * decimal;
			
			if (typeof(callback) == 'function') callback(null, {
				percentage: percentage,
				distance: distance,
				fullness: fullness
			});
		});
	}
	
	
	return {
		getLevel: getLevel
	};
}


module.exports = moduleExport();
