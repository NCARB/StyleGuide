angular.module('designSystem', ['ui.router'])
	.config(['$stateProvider', '$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/');

			$stateProvider
				.state('introduction', {
					url: '/',
					templateUrl: 'patterns/introduction.html'
				})
				.state('layout', {
					url: '/layout',
					templateUrl: 'patterns/layout.html'
				})
				.state('color', {
					url: '/color',
					templateUrl: 'patterns/color.html'
				})
				.state('typography', {
					url: '/typography',
					templateUrl: 'patterns/typography.html'
				})
				.state('iconography', {
					url: '/iconography',
					templateUrl: 'patterns/iconography.html'
				})
				.state('formElements', {
					url: '/formElements',
					templateUrl: 'patterns/form_elements.html'
				})
				.state('navigation', {
					url: '/navigation',
					templateUrl: 'patterns/navigation.html'
				})
				.state('content', {
					url: '/content',
					templateUrl: 'patterns/content.html'
				})
				.state('bootstrap-css', {
					url: '/bootstrap-css',
					templateUrl: 'patterns/bootstrap-css.html'
				})
				.state('bootstrap-components', {
					url: '/bootstrap-components',
					templateUrl: 'patterns/bootstrap-components.html'
				});
		}
	]);