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
          controllerAs: 'logout',
          private: true
        })
        .when('/changepassword',{
          templateUrl: 'views/changepassword.html',
          controller: 'ChangePasswordController',
          controllerAs: 'changepw',
          private: true
        });
    })
    .run(function($rootScope, authFactory){
      $rootScope.$on('$routeChangeStart', function(event, nextRoute, priorRoute){
        if(nextRoute.$$route.private){
          authFactory.requireLogin();
        }
      })
    })
})();
