(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyShoppingController', ToBuyShoppingController)
    .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var shoppingList = this;

    shoppingList.items = ShoppingListCheckOffService.buyListItems();

    shoppingList.buyItem = function(index) {
       ShoppingListCheckOffService.buyItem(index);
    };
  }

  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var boughtList = this;

    boughtList.items = ShoppingListCheckOffService.boughtListItems();

    boughtList.finishedShopping = function() {
      return ShoppingListCheckOffService.finishedShopping();
    };
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var buyList = [
        { name: "Milk", quantity: 1 },
        { name: "Donuts", quantity: 3 },
        { name: "Cookies", quantity: 2 },
        { name: "Chocolate", quantity: 10 },
        { name: "Peanut Butter", quantity: 2 },
        { name: "Coke", quantity: 5 },
        { name: "Chips", quantity: 2 },
        { name: "Candies", quantity: 8 }
      ];

    var boughtList = [];

    service.buyListItems = function () {
      return buyList;
    };

    service.boughtListItems = function () {
      return boughtList;
    };

    service.buyItem = function (index) {
      var item = buyList[index];
      buyList.splice(index,1);
      boughtList.push(item);
    };

    service.finishedShopping = function(){
      return buyList.length == 0;
    };
  }
})();
