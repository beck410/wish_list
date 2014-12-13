;(function(){
  'use strict';
  angular.module('wish_list')
  .factory('wishListFactory', function($http, FIREBASE_URL){
    return {
      getWishList : _getWishList
    };

    function _getWishList(cb){
      $http.get(FIREBASE_URL + 'wishlist.json')
        .success(function(data){
          cb(data);
        })
        .error(function(err){
          console.log('get wishlist error:' + err);
    });
    }
  });
})();

