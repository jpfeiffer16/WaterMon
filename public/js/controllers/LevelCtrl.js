angular.module('app')
	.controller('LevelCtrl', function($scope, SensorDataProvider) {
		SensorDataProvider.getLevel(function(result) {
			$scope.level = result + '%';
		});
	});