(function() {
  'use strict';

  angular.module('data')
    .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$rootScope', '$http', 'ApiBasePath']
  function MenuDataService($rootScope, $http, ApiBasePath) {

    var service = {
      getAllCategories: getAllCategories,
      getItemsForCategory: getItemsForCategory
    };

    return service;

    ////////////

    function getAllCategories() {
      $rootScope.$broadcast('categories.load', {on: true});

      return $http
        .get(ApiBasePath + "/categories.json")
        .then(getCategoriesComplete);

      function getCategoriesComplete(data) {
        $rootScope.$broadcast('categories.load', {on: false});
        return data.data;
      }
    }

    function getItemsForCategory(categoryShortName) {
      $rootScope.$broadcast('items.load', {on: true});
      return $http
        .get(ApiBasePath + "/menu_items.json", {
          params: {
            category: categoryShortName
          }
        })
        .then(getItemsComplete);

      function getItemsComplete(data) {
        $rootScope.$broadcast('items.load', {on: false});
        return data.data.menu_items;
      }
    }
  }

})();
