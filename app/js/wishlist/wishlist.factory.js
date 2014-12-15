;(function(){
  'use strict';
  angular.module('wish_list')
  .factory('wishListFactory', function($rootScope, $http, FIREBASE_URL, $location){

    function _url(id){
      if(id){
        return FIREBASE_URL + 'users/' + $rootScope.user.uid + '/wishlist/' + id + '.json?auth=' + $rootScope.user.token;
      } else {
        return FIREBASE_URL + 'users/' + $rootScope.user.uid + '/wishlist.json?auth=' + $rootScope.user.token;
      }
    }

    var priorityOptions = {
      high: 'i need this!',
      medium: 'Please get me this',
      low: 'i\'d like this'
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
      $http.put(_url(id),item)
        .success(function(data){
          $location.path('/wishlist')
        })
        .error(function(err){
          console.log('edit item error: ' + err)
        })
    }

    return {
      getWishList : _getWishList,
      addNewItem : _addNewItem,
      removeItem: _removeItem,
      getItemDetails: _getItemDetails,
      editItemDetails: _editItemDetails,
      priorityOptions: priorityOptions
    };

  });
})();
