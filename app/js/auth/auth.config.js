;(function(){
  angular.module('wish_list')
    .config(function($routeProvider){
      $routeProvider
        .when('/login',{
          templateUrl: 'views/login.html',
          controller: 'LoginController',
          controllerAs: 'login'
        })
        .when('/logout',{
          template: '',
          controller: 'LogoutController',
          controllerAs: 'logout'
        })
        .when('/changepassword',{
          templateUrl: 'views/changepassword.html',
          controller: 'ChangePasswordController',
          controllerAs: 'changepw'
        });
    });
})();

