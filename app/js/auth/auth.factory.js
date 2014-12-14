;(function(){
  'use strict';
  angular.module('wish_list')
  .factory('authFactory', function($http, FIREBASE_URL, $location){
    return {
      login: _login
    }



    function _login(email, password){
      var ref = new Firebase(FIREBASE_URL);
      console.log(ref)
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
  })
})();
