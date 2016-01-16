angular.module('app')
	.controller('LevelCtrl', function($scope, SensorDataProvider) {
		SensorDataProvider.getLevel(function(result) {
		  console.log(result);
			$scope.level = result;
		});
	});