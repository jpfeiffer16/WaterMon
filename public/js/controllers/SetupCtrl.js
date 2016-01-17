angular.module('app')
	.controller('SetupCtrl', function($scope, $location, SettingsProvider) {
    $scope.isSetup = false;
		$scope.save = function() {
			SettingsProvider.saveSettings($scope.settings, function(result) {
				if (result && !$scope.isSetup) {
          if (typeof($scope.showScreenMessage) == 'function') {
            $scope.showScreenMessage(
              'Awesome.',
              'You\'re all set up. Now we can get to work!',
              3000,
              function() {
                $location.path('/');
              }
            );
          }
        } else if (result && $scope.isSetup) {
          $scope.showScreenMessage(
            'Nice.',
            'Your settings have been saved away by tiny little indentured elves.',
            3000
          );
        }
			});
		};
    
    SettingsProvider.isSetup(function(isSetup) {
      if (!isSetup) {
        if (typeof($scope.showScreenMessage) == 'function') {
          $scope.showScreenMessage(
            'Lets get you set up.',
            'We\'ll need a little info to get the right measurements for your Cistern.',
            3000
          );
        }
      } else {
        $scope.isSetup = true;
        SettingsProvider.getSettings(function(settings) {
          $scope.settings = settings;
        });
      }
    });
	});
  