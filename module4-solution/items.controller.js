(function  () {
'use strict';

angular.module('data')
.controller('ItemsController', ItemsController);

ItemsController.inject = ['categories'];
function ItemsController(items) {
  var itemList = this;

  itemList.categoryItems = items.data;  
}

})();
