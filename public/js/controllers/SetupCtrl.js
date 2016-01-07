angular.module('app')
	.controller('SetupCtrl', function($scope, SettingsProvider) {
		$scope.save = function() {
			SettingsProvider.saveSettings({
				name: $scope.name,
				emptyDepth: $scope.emptyDepth,
				fullDepth: $scope.fullDepth
			}, function(result) {
				console.log(result);
			});
		};
	});