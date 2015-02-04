angular.module('designSystem.controllers', [])
  .controller('BootstrapJsCtrl', [function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
  }]);

angular.module('designSystem.directives', [])
  .directive('a', function () {
      return {
          restrict: 'E',
          link: function (scope, elem, attrs) {
              if (attrs.href && attrs.href.indexOf('#') == 0 && !attrs.uiSref) {
                  elem.on('click', function (e) {
                      e.preventDefault();
                  });
              }
          }
      };
  }); 

angular.module('designSystem', ['ui.router', 'designSystem.controllers', 'designSystem.directives'])
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
        })
        .state('bootstrap-javascript', {
          url: '/bootstrap-javascript',
          templateUrl: 'patterns/bootstrap-javascript.html',
          controller: "BootstrapJsCtrl"
        });
    }
  ]);