;(function(){
  'use strict';
  angular.module('wish_list')
  .controller('WishListController',function(wishListFactory){
    var vm = this;

    wishListFactory.getWishList(function(data){
      vm.wishlist = data;
    })
  })
  .controller('ShowItemController',function(){
  })

  .controller('EditController',function(){
  })
})();

