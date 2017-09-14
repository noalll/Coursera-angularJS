(function  () {
'use strict';

angular.module('ShoppingListCheckOff', [])

.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];

function ToBuyController($scope, ShoppingListCheckOffService)
{
  this.ItemList =  ShoppingListCheckOffService.getToBuyList();
  this.isListEmpty = false;

  this.moveItem = function(index) {
    ShoppingListCheckOffService.markAsBought(index);

    if (ShoppingListCheckOffService.getToBuyList().length == 0)
      this.isListEmpty = true;
  }
//  console.log($scope.ItemList);
}

function AlreadyBoughtController($scope, ShoppingListCheckOffService)
{
  this.ItemList =  ShoppingListCheckOffService.getAlreadyBoughtList();
  $scope.$watch( function (){return ShoppingListCheckOffService.isBoughtListEmpty()}, function (newVal, oldVal) {
    $scope.isEmpty = newVal;
  });
}

function ShoppingListCheckOffService()
{
  var service = this;
  var toBuyArray = [
    { name: 'cookies', quantity: 10 },
    { name: 'pasta', quantity: 2 },
    { name: 'coffee', quantity: 3 },
    { name: 'wine', quantity: 5 },
    { name: 'soda', quantity: 7 }];
  var boughtArray = [];

  service.markAsBought = function (index) {
    addItem(popItem(index));
  }

  function addItem(item) {
    boughtArray.push(item);
  };

  function popItem(index) {
    var item = toBuyArray[index];
    toBuyArray.splice(index, 1);
    return item;
  };

  service.getToBuyList = function() {
    return toBuyArray;
  };

  service.getAlreadyBoughtList = function() {
    return boughtArray;
  };

  service.isBoughtListEmpty = function() {
    return boughtArray.length == 0;
  }
}

})();
