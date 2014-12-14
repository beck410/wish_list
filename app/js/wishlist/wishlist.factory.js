;(function(){
  'use strict';
  angular.module('wish_list')
  .factory('wishListFactory', function($http, FIREBASE_URL, $location){
    return {
      getWishList : _getWishList,
      addNewItem : _addNewItem,
      removeItem: _removeItem
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

    function _removeItem(item,cb){
      console.log(FIREBASE_URL + 'wishlist/' + item + '.json')
      $http.delete(FIREBASE_URL + 'wishlist/' + item + '.json')
        .success(function(){
          cb();
        })
        .error(function(err){
          console.log('delete item error:' + err)
        })
    }
  });
})();
