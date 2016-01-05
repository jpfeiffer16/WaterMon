angular.module('app')
	.service('SettingsProvider', function($http) {
		return (function() {
			function isSetup(callback) {
				$http.post('/isSetup', null, null).then(function(data) {
					console.log(data);
				})
				.error(function (err) {
					throw err;
				});
			}
		})();
	});