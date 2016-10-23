(function() {
  "use strict";

  angular.module('common')
    .service('StorageService', StorageService);

  function StorageService() {
    var user = undefined;
    var dish = undefined;

    var service = {
      setUserInformation: setUserInformation,
      getUserInformation: getUserInformation,
      setDishInformation: setDishInformation,
      getDishInformation: getDishInformation
    };
    return service;

    ////////////

    function setUserInformation(_user_){
      user = _user_;
    };

    function getUserInformation(){
      return user;
    };

    function setDishInformation(_dish_){
      dish = _dish_;
    };

    function getDishInformation(){
      return dish;
    };

  }

})();
