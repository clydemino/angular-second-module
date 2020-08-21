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
          name : "cookies",
          quantity : 15
        },
        {
          name : "shoes",
          quantity : 8
        },
        {
          name : "glasses",
          quantity : 25
        },
        {
          name : "computers",
          quantity : 10
        },
        {
          name : "cars",
          quantity : 12
        },
        {
          name : "candies",
          quantity : 5
        },
        {
          name : "cookie7",
          quantity : 3
        },
        {
          name : "nuggets",
          quantity : 20
        },
        {
          name : "shirts",
          quantity : 19
        },
        {
          name : "balls",
          quantity : 7
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
