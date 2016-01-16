angular.module('app')
	.controller('SetupCtrl', function($scope, SettingsProvider) {
		$scope.save = function() {
			SettingsProvider.saveSettings($scope.settings, function(result) {
				console.log(result);
			});
		};
		// setInterval(function() {
		// 	console.log($scope.settings);
		// }, 300);
	});