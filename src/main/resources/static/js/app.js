var app = angular.module('app', [ 'ngRoute', 'ngResource' ,'angularModalService']);
app.config(function($routeProvider) {
	$routeProvider.when('/liga1', {
		templateUrl : '/views/liga1.html',
		controller : 'ligaController'
	}).when('/liga2', {
		templateUrl : '/views/liga2.html',
		controller : 'ligaController'
	}).when('/liga3', {
		templateUrl : '/views/liga3.html',
		controller : 'ligaController'
	}).when('/kontakt', {
		templateUrl : '/views/kontakt.html',
		controller : 'contactController'
	}).when('/create', {
		templateUrl : '/create.html',
		controller : 'createController'
	}).when('/glowna', {
		templateUrl : '/views/glowna.html',
		controller : 'glownaController'
	}).otherwise({
		redirectTo : 'liga1',
		controller : 'ligaController'
	});
});
