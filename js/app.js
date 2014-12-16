angular.module('designSystem', ['ngRoute'])
	.config(['$routeProvider', '$locationProvider',
		function($routeProvider, $locationProvider) {
			$routeProvider
				.when('/', {
					templateUrl: '../patterns/introduction.html'
				})
				.when('/layout', {
					templateUrl: '../patterns/layout.html'
				})
				.when('/color', {
					templateUrl: '../patterns/color.html'
				})
				.when('/typography', {
					templateUrl: '../patterns/typography.html'
				})
				.when('/iconography', {
					templateUrl: '../patterns/iconography.html'
				})
				.when('/formElements', {
					templateUrl: '../patterns/form_elements.html'
				})
				.when('/navigation', {
					templateUrl: '../patterns/navigation.html'
				})
				.when('/content', {
					templateUrl: '../patterns/content.html'
				});

			$locationProvider.html5Mode(true);
		}
	]);