var app = angular.module('app', []);
app.controller("main", function ($scope) {
    $scope.name = "Hello World !";
    $scope.login = function (username, password) {
        if (username == "" && password == "") {
            alert("Enter username and password");
        }
    }
    $scope.da = "daad";
    $scope.limit = 140;

    $scope.twitter = function (d) {
        if ($scope.limit <= d.length) {

        } else {
            $scope.limit = $scope.limit - d.length;
        }

    }
});