(function() {
  "use strict";

  angular.module('public')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuService', 'StorageService'];
  function SignUpController(MenuService, StorageService) {
    var $ctrl = this;
    $ctrl.submit = submit;

    function submit() {
      $ctrl.invalidDish = false;
      $ctrl.completed = false;

      MenuService.getDish($ctrl.dish)
        .then(function(data){
          var user = {
            firstname: $ctrl.firstname,
            lastname: $ctrl.lastname,
            email: $ctrl.email,
            phone: $ctrl.phone,
            dish:$ctrl.dish
          };

          StorageService.setUserInformation(user);
          StorageService.setDishInformation(data);
          $ctrl.completed = true;
        })
        .catch(function(e){
          $ctrl.invalidDish = true;
        });;
    }
  }

})();
