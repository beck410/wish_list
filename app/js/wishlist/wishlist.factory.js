;(function(){
  'use strict';
  angular.module('wish_list')
  .factory('wishListFactory', function($http, FIREBASE_URL, $location){

    function _url(id){
      if(id){
        return FIREBASE_URL + 'wishlist/' + id + '.json';
      } else {
        return FIREBASE_URL + 'wishlist.json';
      }
    }

    return {
      getWishList : _getWishList,
      addNewItem : _addNewItem,
      removeItem: _removeItem,
      getItemDetails: _getItemDetails,
      editItemDetails: _editItemDetails
    };

    function _getWishList(cb){
      $http.get(_url())
        .success(function(data){
          cb(data);
        })
        .error(function(err){
          console.log('get wishlist error:' + err);
    });
    }

    function _addNewItem(item, cb){
      $http.post(_url(), item)
        .success(function(data){
          cb(data)
        })
        .error(function(err){
          console.log('add new item error:' + err)
        })
    }

    function _removeItem(id,cb){
      $http.delete(_url(id))
        .success(function(){
          cb();
        })
        .error(function(err){
          console.log('delete item error:' + err)
        })
    }

    function _getItemDetails(id, cb){
      $http.get(_url(id))
        .success(function(data){
          cb(data);
        })
        .error(function(err){
          console.log('get item details error: ' + err)
        })
    }

    function _editItemDetails(id, item){
      $http.put(_url(id))
        .success(function(data){
          $location.path('/wishlist')
        })
        .error(function(err){
          console.log('edit item error: ' + err)
        })
    }
  });
})();
