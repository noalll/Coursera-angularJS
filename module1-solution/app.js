(function  () {
'use strict';

angular.module('LunchCheck', [])

.controller('MyLunchCheckController', function ($scope) {
  $scope.lunchItems = [];
  $scope.itemsStr;
  $scope.resultMsg;
  $scope.itemValidator = function () {
    if ($scope.itemsStr == '' || $scope.itemsStr == undefined )
      $scope.resultMsg = "Please enter data first";
    else {
      $scope.lunchItems = $scope.itemsStr.split(',');
      $scope.resultMsg = $scope.lunchItems.length <= 3 ? "Enjoy!" : "Too much!";
    }
  }
});

MyLunchCheckController.$inject = ['$scope'];
})();
