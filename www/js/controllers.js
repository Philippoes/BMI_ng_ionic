angular.module('starter.controllers', [])

  .controller('BmiController', function ($scope) {

    $scope.data = {};
    $scope.data.imperialSwitch = false;
    console.dir($scope.data);

    $scope.calculateBMI = function () {
      var person = new Person({
        weight: $scope.data.weight,
        height: $scope.data.height,
        height_feet: $scope.data.height_feet,
        height_inches: $scope.data.height_inches,
        imperialSwitch: $scope.data.imperialSwitch
      });
      person.calculate_bmi();
      $scope.person = person;
    }

    $scope.setUnits = function () {
      console.log(this.data.imperialSwitch);
      $scope.data.imperialSwitch = this.value;
    }
  })

  .controller('AboutController', function () {
  });
