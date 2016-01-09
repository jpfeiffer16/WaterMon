angular.module('app')
	.service('SensorDataProvider', function($http) {
		return (function() {
			
			function getLevel(callback) {
				$http.post('/getlevel', null, null)
					.then(function(data) {
						if (typeof(callback) == 'function') {
							callback(data.data.result);
						}
					})
					.catch(function (err) {
						throw err;
					});
			}
			
			
			return {
				getLevel: getLevel
			}
		})();
	});