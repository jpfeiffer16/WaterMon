/// <reference path="../../typings/angularjs/angular-route.d.ts" />

angular.module('app', ['ngRoute'])
	.config(function ($locationProvider, $routeProvider) {
		$locationProvider.html5Mode = true;
    
    $routeProvider
      .when('/', {
        templateUrl: '/templates/level.html'
      });
    
    
    
	});