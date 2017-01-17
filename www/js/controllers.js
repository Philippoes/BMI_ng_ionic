angular.module('starter.controllers', [])

  .controller('BmiController', function ($scope) {
    $scope.data = {};
    $scope.calculateBMI = function () {
      var person = new Person({
        weight: $scope.data.weight,
        height: $scope.data.height,
        imperialswitch: $scope.data.imperialswitch
      });
      person.calculate_bmi();
      $scope.person = person;
    }
  })

  .controller('AboutController', function () {
  })
