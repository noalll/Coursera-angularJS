(function  () {
'use strict';

angular.module('data')
.component('categories', {
  templateUrl: 'categories.component.html',
  bindings: {
    categories: '<'
  }
});

})();
