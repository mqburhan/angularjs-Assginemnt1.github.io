(function() {
    'use strict';

    var app = angular.module('ShoppingListCheckOff', []);
    app.controller('ToBuyController', BuyController);
    app.controller('AlreadyBoughtController', AlreadyBoughtController);
    app.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    BuyController.$inject = ['ShoppingListCheckOffService']

    function BuyController(ShoppingListCheckOffService) {
      var buy = this;
      buy.items = ShoppingListCheckOffService.getItems() || [];
      buy.buyItem = function(index){
        console.log("index "+index);
        ShoppingListCheckOffService.buyItems(index)
      }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
      var bought = this;
      bought.items = ShoppingListCheckOffService.getBoughtItems()||[];
    }

    function ShoppingListCheckOffService() {
      var service = this;
      
      var itemsBought =  [];

      var itemsToBuy = [{
          item_quantity: '10',
          item_name: 'cookies'
        },
        {
          item_quantity: '5',
          item_name: 'pineapples'
        },
        {
          item_quantity: '5',
          item_name: 'oranges'
        }, {
          item_quantity: '6',
          item_name: 'egges'
        },
        {
          item_quantity: '3',
          item_name: 'cakes'
        },
      ];



    service.getItems = function(){
      return itemsToBuy;
    };

    service.getBoughtItems = function(){
      return itemsBought;
    };

    service.buyItems = function(index){
      var item = itemsToBuy[index] ;
      itemsToBuy.splice(index,1);
      itemsBought.push(item);
    };
  }
  })();
