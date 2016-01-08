angular.module('app')
	.service('SettingsProvider', function($http) {
		return (function() {
			function isSetup(callback) {
				$http.post('/isSetup', null, null).then(function(data) {
					if (typeof(callback) == 'function') {
            callback(data.data.result);
          }
				})
				.catch(function (err) {
					throw err;
				});
			}
			function saveSettings(settings, callback) {
				$http.post('/savesettings', settings, null).then(function(data) {
					if (typeof(callback) == 'function') {
            callback(data.data.result);
          }
				})
				.catch(function (err) {
					throw err;
				});
			}
      return {
        isSetup: isSetup,
        saveSettings: saveSettings
      };
		})();
	});