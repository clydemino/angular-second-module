(function () {
  'use strict';
    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService)

    ToBuyController.$inject =['ShoppingListCheckOffService']
    function ToBuyController(ShoppingListCheckOffService){
          this.buyitems = ShoppingListCheckOffService.getbuyItems();
          this.buycookie = function (index){
            ShoppingListCheckOffService.buyitem(index);
          }

    }

    AlreadyBoughtController.$inject =['ShoppingListCheckOffService']
    function AlreadyBoughtController(ShoppingListCheckOffService){
         this.boughtitems = ShoppingListCheckOffService.getboughtItems();
    }

    function ShoppingListCheckOffService(){
      var buyItems = [
        {
          name : "cookie1"
        },
        {
          name : "cookie2"
        },
        {
          name : "cookie3"
        },
        {
          name : "cookie4"
        },
        {
          name : "cookie5"
        },
        {
          name : "cookie6"
        },
        {
          name : "cookie7"
        },
        {
          name : "cookie8"
        },
        {
          name : "cookie9"
        },
        {
          name : "cookie10"
        }
      ];
      var boughtItems = [];

      this.getbuyItems = function (){
        return buyItems ;
      }
      this.getboughtItems = function () {
        return boughtItems ;
      }
      this.buyitem = function(index){
        boughtItems.push(buyItems[index])
        buyItems.splice(index,1);
      }
    }

})();
