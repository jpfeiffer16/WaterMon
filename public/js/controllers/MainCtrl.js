angular.module('app')
  .controller('MainCtrl', function($scope, $location, SettingsProvider) {
    var currentPath = $location.path();
    $scope.navVisibility = 'hidden';
    SettingsProvider.isSetup(function (isSetup) {
      if (!isSetup) {
        //We need to redirect to the setup page if we are not already there.
        if (currentPath != '/setup') {
          $location.path('/setup');
        }
      } else {
        $scope.navVisibility = 'visible';
        SettingsProvider.getSettings(function(settings) {
          console.log(settings);
          $scope.settings = settings;
        });
      }
    });
  });