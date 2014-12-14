;(function(){
  'use strict';
  angular.module('wish_list')
  .controller('WishListController',function(wishListFactory, $location){
    var vm = this;

    wishListFactory.getWishList(function(data){
      vm.wishlist = data;
    });

    vm.removeItem = function(item){
      wishListFactory.removeItem(item,function(){
        delete vm.wishlist[item];
      });
    }

    vm.addItemDetails = function(){
        wishListFactory.addNewItem(vm.newItem, function(data){
          vm.wishlist = vm.wishlist || {};
          vm.wishlist[data.name] = vm.newItem;
          vm.newItem = {};
          $location.path('/wishlist');
        })
    }

  })
  .controller('ShowItemController',function($routeParams, wishListFactory){
    var vm = this;
    var id = $routeParams.id;
    wishListFactory.getItemDetails(id,function(data){
      vm.item = data;
    })
  })

  .controller('EditController',function($routeParams, wishListFactory){
    var vm = this;
    var id = $routeParams.id;

    wishListFactory.getItemDetails(id, function(data){
      vm.newItem = data;
    })

    vm.addItemDetails = function(){
      wishListFactory.editItemDetails(id,vm.newItem);
    }

  })
})();
