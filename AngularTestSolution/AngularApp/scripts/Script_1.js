/// <reference path="angular.js" />
/// <reference path="angular.min.js" />

//Create the module
var myApp = angular.module("myModule", [])

//Create the controller
var myController = function ($scope) {
  //  $scope.message = "My first Angular Controller";

    var employee = {
        firstName: 'Scott',
        lastName: 'Allen',
        Age:25
    }

    $scope.employee = employee;
}

//Register the controller with the module
myApp.controller("myController", myController);
