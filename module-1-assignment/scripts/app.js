(function() {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.menu = "";
    $scope.message = "";
    $scope.checkStatus = "";

    $scope.checkMenu = function() {
      $scope.message = "";
      var wordsCount = countWords($scope.menu);

      if (wordsCount == 0) {
        $scope.message = "Please enter data first";
        $scope.checkStatus = "error";
      } else if (wordsCount <= 3) {
        $scope.message = "Enjoy!";
        $scope.checkStatus = "ok";
      } else if (wordsCount > 3) {
        $scope.message = "Too much!";
        $scope.checkStatus = "error";
      }
    };

    function countWords(string) {
      string = string.trim();
      var count = 0;

      if (string.length > 0) {
        count = string
          .split(',')
          .map(function(v) {
            return v.trim();
          })
          .filter(function(v) {
            return v != '';
          })
          .length;
      }

      return count;
    }
  }
})();
