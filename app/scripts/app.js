'use strict';

angular.module('jquery', []).factory('$', function () { return window.jQuery; });

angular.module('designSystem.controllers', [])
  .controller('BootstrapJsCtrl', ['jquery', function ($) {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
  }]);

angular.module('designSystem.directives', []);
  /*.directive('a', function () {
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

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('introduction', {
          url: '/',
          templateUrl: 'views/introduction.html'
        })
        .state('layout', {
          url: '/layout',
          templateUrl: 'views/layout.html'
        })
        .state('color', {
          url: '/color',
          templateUrl: 'views/color.html'
        })
        .state('typography', {
          url: '/typography',
          templateUrl: 'views/typography.html'
        })
        .state('iconography', {
          url: '/iconography',
          templateUrl: 'views/iconography.html'
        })
        .state('formElements', {
          url: '/formElements',
          templateUrl: 'views/form_elements.html'
        })
        .state('navigation', {
          url: '/navigation',
          templateUrl: 'views/navigation.html'
        })
        .state('content', {
          url: '/content',
          templateUrl: 'views/content.html'
        })
        .state('bootstrap-css', {
          url: '/bootstrap-css',
          templateUrl: 'views/bootstrap-css.html'
        })
        .state('bootstrap-components', {
          url: '/bootstrap-components',
          templateUrl: 'views/bootstrap-components.html'
        })
        .state('bootstrap-javascript', {
          url: '/bootstrap-javascript',
          templateUrl: 'views/bootstrap-javascript.html',
          controller: 'BootstrapJsCtrl'
        });
    }
  ]);