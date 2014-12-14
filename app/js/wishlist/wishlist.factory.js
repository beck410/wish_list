;(function(){
  'use strict';
  angular.module('wish_list')
  .factory('wishListFactory', function($http, FIREBASE_URL, $location){
    return {
      getWishList : _getWishList,
      addNewItem : _addNewItem,
      removeItem: _removeItem,
      getItemDetails: _getItemDetails,
      editItemDetails: _editItemDetails
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
      $http.delete(FIREBASE_URL + 'wishlist/' + item + '.json')
        .success(function(){
          cb();
        })
        .error(function(err){
          console.log('delete item error:' + err)
        })
    }

    function _getItemDetails(item, cb){
      $http.get(FIREBASE_URL + 'wishlist/' + item + '.json')
        .success(function(data){
          cb(data);
        })
        .error(function(err){
          console.log('get item details error: ' + err)
        })
    }

    function _editItemDetails(id, item){
      $http.put(FIREBASE_URL + 'wishlist/' + id + '.json', item)
        .success(function(data){
          $location.path('/wishlist')
        })
        .error(function(err){
          console.log('edit item error: ' + err)
        })
    }
  });
})();
