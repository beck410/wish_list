;(function(){
  'use strict';
  angular.module('wish_list')
  .factory('authFactory', function($rootScope, $http, FIREBASE_URL, $location){

    var ref = new Firebase(FIREBASE_URL);
    $rootScope.user = ref.getAuth();
    return {
      login: _login,
      logout: _logout,
      register: _register,
      changePassword: _changePassword,
      forgotPassword: _forgotPassword,
      requireLogin: _requireLogin,
      disallowLogin: _disallowLogin
    }


    function _login(email, password,cb){
      var ref = new Firebase(FIREBASE_URL);
      ref.authWithPassword({
        email: email,
        password: password
      }, function(error, authData) {
        if (error === null) {
          $rootScope.user = authData;
          console.log("User logged in successfully", authData);
          cb();
        } else {
          console.log("Error creating user:", error);
        }
      })
    }

    function _register(email, password, cb){
      var ref = new Firebase(FIREBASE_URL);
      ref.createUser({
        email: email,
        password: password
      }, function(error, authData){
        if(error === null){
          console.log('User created successfully', authData);
          cb();
        } else {
          console.log('Error creating User: ' + error)
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

    function _changePassword(oldPass, newPass, cb){
      var ref = new Firebase(FIREBASE_URL);
      ref.changePassword({
        email: ref.getAuth().password.email,
        oldPassword: oldPass,
        newPassword: newPass
      }, function(error){
        if (error === null) {
          console.log('Password changed successfully');
          cb();
        } else {
          console.log('Error changing password:', error);
        }
      })
    }

    function _forgotPassword(email, cb){
      var ref = new Firebase(FIREBASE_URL);
      ref.resetPassword({
        email : email
      }, function(error) {
        if (error === null) {
          console.log('Password reset email sent successfully');
          cb();
        } else {
          console.log('Error sending password reset email:', error);
        }
      });
    }

    function _requireLogin(){
      if(!_isLoggedIn()){
        $location.path('/login');
      } else if(_hasTemporaryPassword()){
        $location.path('/changepassword');
      }
    }

    function _isLoggedIn(){
      var ref = new Firebase(FIREBASE_URL);
      return Boolean(ref.getAuth());
    }

    function _hasTemporaryPassword(){
      var ref = new Firebase(FIREBASE_URL);
      return ref.getAuth().password.isTemporaryPassword;
    }

    function _disallowLogin(){
      if(_isLoggedIn()){
        $location.path('/wishlist');
      }
    }
  })
})();
