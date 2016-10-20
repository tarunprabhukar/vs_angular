/// <reference path="angular.js" />
/// <reference path="angular.min.js" />

//Create the module
var myApp = angular.module("myModule", [])

//Create the controller
var myController = function ($scope) {
  //  $scope.message = "My first Angular Controller";

    var countries = [
                {
                    name: 'USA',
                    cities: [
                        { name:'pittsburgh' },
                        { name:'tempe' },
                        { name:'dallas' }
                    ]
                },
                {
                    name: 'India',
                    cities: [
                        { name:'hyderabad' },
                        { name:'chennai' },
                        { name:'delhi' }
                    ]

                }


    ];


    var employee = {
        firstName: 'Scott',
        lastName: 'Allen',
        Age: 25,
        nation: 'USA',
        path: "../Images/USA.png"             // Path Declaration
    };

    $scope.employee = employee;
    $scope.countries = countries;
}

//Register the controller with the module
myApp.controller("myController", myController);
