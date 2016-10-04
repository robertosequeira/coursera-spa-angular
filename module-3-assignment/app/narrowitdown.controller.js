(function() {
  'use strict';

  angular.module('NarrowItDownApp')
    .controller('NarrowItDownController', NarrowItDownController);

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var vm = this;

    vm.found = [];
    vm.removeMenuItem = removeMenuItem;
    vm.searchMenuItem = searchMenuItem;
    vm.searchTerm = ''

    ////////////

    function searchMenuItem(){
      vm.loading = true;
      vm.message = '';

      return MenuSearchService.getMatchedMenuItems(vm.searchTerm)
      .then(function(data) {
        vm.found = data;

        vm.loading = false;
        if (vm.found.length == 0) {
          vm.message = 'Nothing found!';
        }
      })
      .catch(function(error) {
        console.log(
          'Failed loading information. Error Code: %s, Error Message: %s',
          error.status,
          error.statusText
        );

        vm.loading = false;
        vm.message = 'Error loading information';
      });
    }

    function removeMenuItem(index){
      vm.found.splice(index, 1);
    }

  }
  
})();
