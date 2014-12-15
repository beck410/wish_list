;(function(){
  'use strict';
  angular.module('wish_list')
  .controller('LoginController',function(authFactory, $scope, $location){
    var vm = this;

    vm.login = function(){
      authFactory.login(vm.email, vm.password, function(){
        $location.path('/wishlist');
        $scope.$apply();
      })
    }

    vm.register = function(){
      authFactory.register(vm.email,vm.password,function(){
        $location.path('/wishlist');
        $scope.$apply();
      })
    }
  })
  .controller('LogoutController',function($scope, $location, authFactory){
    authFactory.logout(function(){
      $location.path('/login');
      $scope.$apply();
    })
  })
 .controller('ChangePasswordController',function(){
  })
})();
