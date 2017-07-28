var app = angular.module("app", []);
app.controller("ctrl1", function ($scope) {
    $scope.emp = [
        {
            "name": "sangram",
            "profile": "Front End Developer"
        }, {
            "name": "akash",
            "profile": "Front End Developer"
        }, {
            "name": "Pratiksha",
            "profile": "UI Developer"
        }, {
            "name": "Madhuri",
            "profile": "UI Developer"
        }
    ];
    console.log($scope.emp);

    $scope.add = function (name, profile) {
        var temp = {};
        temp.name = name;
        temp.profile = profile;
        console.log(temp);
        $scope.emp.push(temp);

    }
    $scope.show = function (da) {
        alert(da);
    }
    $scope.showText = true;
    $scope.show = function () {
        if ($scope.showText === false) {
            $scope.showText = true;
        } else {
            $scope.showText = false;
        }

    }

    $scope.trackChange=function (data) {
        $scope.track=data;

    }
    $scope.trackColor=function () {
        if ($scope.over === false) {
            $scope.over = true;
        } else {
            $scope.over = false;
        }

    }
});



