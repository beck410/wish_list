;(function(){
  'use strict';
  angular.module('wish_list')
  .controller('WishListController',function(wishListFactory, $location){
    var vm = this;

    wishListFactory.getWishList(function(data){
      vm.wishlist = data;
    })

    vm.addItemDetails = function(){
        wishListFactory.addNewItem(vm.newItem, function(data){
          vm.wishlist = vm.wishlist || {};
          vm.wishlist[data.name] = vm.newItem;
          vm.newItem = {};
          $location.path('/wishlist');
        })
    }
  })
  .controller('ShowItemController',function(){
  })

  .controller('EditController',function(){
  })
})();
