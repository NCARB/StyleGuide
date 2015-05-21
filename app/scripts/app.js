'use strict';

angular.module('jQuery', []).factory('jQuery', ['$window', function ($window) { return $window.jQuery; }]);

angular.module('designSystem.controllers', ['jQuery'])
  .controller('BootstrapJsCtrl', ['jQuery', function ($) {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
  }]);

angular.module('designSystem.directives', []);
  /*
  .directive('a', function () {
      return {
          restrict: 'E',
          link: function (scope, elem, attrs) {
              if (attrs.href && attrs.href.indexOf('#') === 0 && !attrs.uiSref) {
                  elem.on('click', function (e) {
                      e.preventDefault();
                  });
              }
          }
      };
  }); 
  */

angular.module('designSystem', ['ui.router', 'designSystem.controllers', 'designSystem.directives'])
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

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
        .state('content', {
          url: '/content',
          templateUrl: 'views/content.html'
        })
        .state('bootstrap', {
          url: "/bootstrap",
          abstract: true,
          template: '<ui-view/>'
        })
        .state('bootstrap.css', {
          url: '/css',
          templateUrl: 'views/bootstrap-css.html'
        })
        .state('bootstrap.components', {
          url: '/components',
          templateUrl: 'views/bootstrap-components.html'
        })
        .state('bootstrap.javascript', {
          url: '/javascript',
          templateUrl: 'views/bootstrap-javascript.html',
          controller: 'BootstrapJsCtrl'
        });
    }
  ]);