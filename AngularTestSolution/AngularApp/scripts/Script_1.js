/// <reference path="angular.js" />


//Create the module
var myApp = angular.module("myModule", [])

//Create the controller
var myController = function ($scope,$http,$log) {
  //  $scope.message = "My first Angular Controller";

    $http.post('http://localhost:52960/EmployeeService.asmx/GetEmployee').then(function (response) {
        $scope.employeelist = response.data;
        $log.info(response);
    }, function (response) {
        $scope.error = response.data;
        $log.info(response);
    });

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

    var technologies = [
        {
            name: 'C#',
            likes: 0,
            dislikes: 0

        },
        {
            name: 'Java',
            likes: 0,
            dislikes: 0
        }
    ];

    
    var employee = {
        firstName: 'Scott',
        lastName: 'Allen',
        Age: 25,
        salary: 2800.9999,
        salary_curr: 2800.9999,
        date:12/22/2018,
        nation: 'USA',
        path: "../Images/USA.png"             // Path Declaration
    };

    $scope.employee = employee;
    $scope.countries = countries;
    $scope.technologies = technologies;
    $scope.incrementLikes = function (technology) {
        technology.likes++;
    };
    $scope.incrementDisLikes = function (technology) {
        technology.dislikes++;
    };
    $scope.rowLimit = 2;


    $scope.search = function (item) {
        if ($scope.searchText2 == undefined) {
            return true;
        }
        else
        {
            if (item.name.toLowerCase().indexOf($scope.searchText2.toLowerCase()) != -1)
                return true;
        }
        return false;
    }
    $scope.embed = "Embed.html";
   // $scope.sortBy = "-name";
}

//Register the controller with the module
myApp.controller("myController", myController);
