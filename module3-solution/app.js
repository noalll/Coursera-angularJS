(function  () {
'use strict';

angular.module('NarrowItDownApp', [])

.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems)

NarrowItDownController.inject = ['$scope', 'MenuSearchService'];
function NarrowItDownController($scope, MenuSearchService) {
  var narrow = this;
  narrow.found;

  narrow.narrowDown = function() {
    if (narrow.narrowText === undefined || narrow.narrowText === '')
      console.log('empty field');
    else {
      narrow.found = [];
      MenuSearchService.getMatchedMenuItems().then(function(dataResponse) {
        for(var i = 0; i < dataResponse.data.menu_items.length; i++)
          if ((dataResponse.data.menu_items[i].description).indexOf(narrow.narrowText) !== -1)
            narrow.found.push(dataResponse.data.menu_items[i]);

      }, function (dataResponse) {
        console.log('no data returned');
      });
    }

    narrow.removeItem = function(index) {
      narrow.found.splice(index, 1);
    }


  }
}

MenuSearchService.inject = ['$http'];
function MenuSearchService($http) {
  var search = this;
  var found;

  search.getMatchedMenuItems = function() {    
    return $http.get("https://davids-restaurant.herokuapp.com/menu_items.json");
  }
}

function FoundItems () {
  var ddo = {
    templateUrl: 'menu.html',
    scope: {
      items: '<',
      onRemove: '&'
    }
  }
  return ddo;
}

})();
