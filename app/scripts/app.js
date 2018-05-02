'use strict';

angular.module('jQuery', []).factory('jQuery', ['$window', function ($window) { return $window.jQuery; }]);

angular.module('designSystem.controllers', ['jQuery'])
  .controller('BootstrapJsCtrl', ['jQuery', function ($) {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    $('[data-toggle="dropdown"]').dropdown();
  }]);

angular.module('designSystem.directives', []);


angular.module('designSystem', ['ui.router', 'designSystem.controllers', 'designSystem.directives', 'hljs'])
  .config(config)
  .run(run);

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];
function config($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

  $locationProvider.html5Mode(true).hashPrefix('!');
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];

  $urlRouterProvider
    .when('/css', '/css/layout')
    .when('/bootstrap', '/bootstrap/css')
    .otherwise('/');

  $stateProvider
    .state('introduction', {
      url: '/',
      templateUrl: 'views/introduction.html'
    })
    .state('css', {
      url: '/css',
      abstract: true,
      template: '<ui-view/>'
    })
    .state('css.layout', {
      url: '/layout',
      templateUrl: 'views/layout.html'
    })
    .state('css.color', {
      url: '/color',
      templateUrl: 'views/color.html'
    })
    .state('css.typography', {
      url: '/typography',
      templateUrl: 'views/typography.html'
    })
    .state('css.iconography', {
      url: '/iconography',
      templateUrl: 'views/iconography.html'
    })
    .state('css.formElements', {
      url: '/formElements',
      templateUrl: 'views/form_elements.html'
    })
    .state('css.navigation', {
      url: '/navigation',
      templateUrl: 'views/navigation.html'
    })
    .state('css.tables', {
      url: '/tables',
      templateUrl: 'views/tables.html'
    })
    .state('css.badges', {
      url: '/badges',
      templateUrl: 'views/labels-badges.html'
    })
    .state('content', {
      url: '/content',
      templateUrl: 'views/content.html'
    })
    .state('bootstrap', {
      url: '/bootstrap',
      abstract: true,
      template: '<ui-view/>'
    })
    .state('bootstrap.css', {
      url: '/css',
      templateUrl: 'views/bootstrap-css.html'
    })
    .state('bootstrap.components', {
      url: '/components',
      templateUrl: 'views/bootstrap-components.html',
      controller: 'BootstrapJsCtrl'
    })
    .state('bootstrap.javascript', {
      url: '/javascript',
      templateUrl: 'views/bootstrap-javascript.html',
      controller: 'BootstrapJsCtrl'
    });
}

run.$inject = ['$rootScope', '$history', '$state', 'jQuery'];
function run($rootScope, $history, $state, $) {
  $rootScope.$on('$stateChangeSuccess', function(event, to, toParams, from, fromParams) {
    if (!from.abstract) {
      $history.push(from, fromParams);
    }
    // close hamburger menu if open
    if($('#ncarbNavmenu').hasClass('in')) {
      $('[data-toggle=offcanvas]').trigger('click.bs.offcanvas.data-api');
    }
  });

  $history.push($state.current, $state.params);
}
