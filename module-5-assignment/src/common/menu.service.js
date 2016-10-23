(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', '$interpolate', '$q', 'ApiPath'];
function MenuService($http, $interpolate, $q, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };

  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getDish = function (short_name) {
    var exp = $interpolate('/menu_items/{{short_name}}.json', false, null, true),
        url = exp({ short_name: short_name});

    return $http
      .get(ApiPath + url)
      .then(function (response) {
        return response.data;
      })
      .catch(function(e){
        return $q.reject(e);
      });
  };

}



})();
