/// <reference path="../../typings/angularjs/angular-route.d.ts" />

angular.module('app', ['ngRoute'])
	.config(function ($locationProvider, $routeProvider) {
		$locationProvider.html5Mode({
		  enabled: true,
		  requireBase: false
		});
    
    $routeProvider
      .when('/', {
        templateUrl: '/templates/level.html'
      })
	    .when('/setup', {
        templateUrl: '/templates/setup.html'
      });
	});