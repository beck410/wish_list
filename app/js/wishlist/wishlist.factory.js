;(function(){
  'use strict';
  angular.module('wish_list')
  .factory('wishListFactory', function($http, FIREBASE_URL){
    return {
      getWishList : _getWishList,
      addNewItem : _addNewItem
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

    function _addNewItem(item, cb){
      $http.post(FIREBASE_URL + 'wishlist.json', item)
        .success(function(data){
          cb(data)
        })
        .error(function(err){
          console.log('add new item error:' + err)
        })
    }
  });
})();
