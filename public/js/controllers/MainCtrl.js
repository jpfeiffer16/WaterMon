angular.module('app')
  .controller('MainCtrl', function($scope) {
    $scope.test = 'Test';
    $scope.$apply();
  });