;(function(){
  'use strict';
  angular.module('wish_list')
    .config(function($routeProvider){
      $routeProvider
      .when('/wishlist',{
        templateUrl:'views/wishlist.html',
        controller:'WishListController',
        controllerAs:'wishlist',
        private: true
      })
      .when('/wishlist/new',{
        templateUrl:'views/itemform.html',
        controller:'WishListController',
        controllerAs:'wishlist',
        private: true
      })
      .when('/wishlist/:id',{
        templateUrl:'views/showitem.html',
        controller:'ShowItemController',
        controllerAs:'show',
        private: true
      })
      .when('/wishlist/:id/edit',{
        templateUrl:'views/itemform.html',
        controller:'EditController',
        controllerAs:'wishlist',
        private: true
      })
    })
    .run(function($rootScope, authFactory){
      $rootScope.$on('$routeChangeStart', function(event, nextRoute, priorRoute){
        if(nextRoute.$$route.private){
          authFactory.requireLogin();
        }
      })
    })
})();
