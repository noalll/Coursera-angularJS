(function  () {
'use strict';

angular.module('data')
.component('items', {
  templateUrl: 'items.component.html',
  bindings: {
    items: '<'
  }
});

})();
