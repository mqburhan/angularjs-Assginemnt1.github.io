(function() {
  'use strict';

  var app = angular.module('LunchCheck', []);
  app.controller('LunchCheckController', mController);
  mController.$inject = ['$scope'];

  function mController($scope) {
    $scope.food = '';
    $scope.checkFoods = function() {
      var foods = $scope.food.split(',').filter(i => i) //split foods by camma and remove empty food betwean cammas.
      $scope.msg = 'Please enter data first';
      if (foods.length > 0 && foods.length < 4) {
        $scope.msg = 'Enjoy!';
      } else if (foods.length >= 4) {
        $scope.msg = 'Too much!';
      }
    }
  }

})();
