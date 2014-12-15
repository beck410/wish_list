;(function(){
  'use strict';
  angular.module('wish_list')
  .factory('authFactory', function($rootScope, $http, FIREBASE_URL, $location){
    return {
      login: _login,
      logout: _logout
    }

    var ref = new Firebase(FIREBASE_URL);
    $rootScope.user = ref.getAuth();

    function _login(email, password){
      var ref = new Firebase(FIREBASE_URL);
      ref.authWithPassword({
        email: email,
        password: password
      }, function(error, authData) {
        if (error === null) {
          console.log("User logged in successfully", authData);
        } else {
          console.log("Error creating user:", error);
        }
      })
    }

    function _logout(cb){
      var ref = new Firebase(FIREBASE_URL);
      ref.unauth(function(){
        $rootScope.user = null;
        console.log('user logged out')
        cb();
      })
    }
  })
})();
