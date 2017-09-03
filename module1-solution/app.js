(function  () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
  $scope.itemsStr;
  $scope.resultMsg;
  $scope.strValidator = function () {
    if ($scope.itemsStr == '' || $scope.itemsStr == undefined )
      $scope.resultMsg = "Please enter data first";
    else
      $scope.resultMsg = $scope.itemsStr.split(',').length <= 3 ? "Enjoy!" : "Too much!";
  }
});

LunchCheckController.$inject = ['$scope'];
})();
