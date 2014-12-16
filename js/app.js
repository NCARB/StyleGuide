angular.module('designSystem', ['ngRoute'])
.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../patterns/introduction.html'        
      })
      .when('/color', {
        templateUrl: '../patterns/introduction.html'        
      });

    $locationProvider.html5Mode(true);
}])