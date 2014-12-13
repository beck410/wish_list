;(function(){
  'use strict';

  angular.module('wish_list')
    .config(function($routeProvider){
      $routeProvider
      .when('/', {
        templateUrl: 'views/landing.html'
      })
      .otherwise({redirectTo: '/'})
    });
})();

