(function() {
  'use strict';

  angular.module('NarrowItDownApp')
    .directive('foundItems', foundItems);

  function foundItems() {
    var ddo = {
      templateUrl: 'app/found-items/found-items.template.html',
      scope: {
        items: '<',
        message: '<',
        onRemove: '&'
      }
    };

    return ddo;
  }

})();
