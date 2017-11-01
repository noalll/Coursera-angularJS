(function  () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.inject = ['$stateProvider', '$urlRouterProvider', 'MenuDataService'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'home.template.html'
  })
  .state('categories', {
    url: '/categories',
    templateUrl: 'categories.template.html',
    controller: 'CategoriesController as categoryList',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })
  .state('items', {
    url: '/items/{catName}',
    templateUrl: 'items.template.html',
    controller: 'ItemsController as itemList',
    resolve: {
      items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
        return MenuDataService.getItemsForCategory($stateParams.catName);
      }]
    }

  });


}

})();
