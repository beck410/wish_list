;(function(){
  'use strict';
  angular.module('wish_list')
  .controller('WishListController',function(wishListFactory){
    var vm = this;

    wishListFactory.getWishList(function(data){
      vm.wishlist = data;
    })

    vm.addItemDetails = function(){
        wishListFactory.addNewItem(vm.newItem, function(data){
          vm.wishlist = vm.wishlist || {};
          vm.wishlist[data.name] = vm.newItem;
          vm.newItem = {};
        })
    }
  })
  .controller('ShowItemController',function(){
  })

  .controller('EditController',function(){
  })
})();
