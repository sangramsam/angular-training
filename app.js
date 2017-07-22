var app = angular.module("app", []);
app.controller("main", function ($scope) {
    $scope.a = 12;
    $scope.b = 10;

    $scope.add = function () {
        $scope.b += 10;
        $scope.a += 10;
        $scope.sum = $scope.a + $scope.b;
    }
    $scope.data = "Testing";


    $scope.login=function (name,email) {
        $scope.username=name;
        $scope.emails=email;
    }
});