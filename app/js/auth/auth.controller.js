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
        vm.login();
      })
    }

    vm.forgotPassword = function(){
      authFactory.forgotPassword(vm.email, function(){
        alert('email has been sent with new password');
      });
    }
  })
  .controller('LogoutController',function($scope, $location, authFactory){
    authFactory.logout(function(){
      $location.path('/login');
      $scope.$apply();
    })
  })
 .controller('ChangePasswordController',function($scope, $location, authFactory){
    var vm = this;

    vm.changePassword = function(){
      authFactory.changePassword(vm.oldPassword, vm.newPassword, function(){
        $location.path('/logout');
        $scope.$apply();
      });
    }

  })
})();
