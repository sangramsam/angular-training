var app = angular.module("app", ['ngRoute']);
app.controller("ctrl1", function ($scope, git) {
    /*$scope.emp = [
        {
            "name": "sangram singh",
            "profile": "Front End Developer",
            "date": new Date()
        }, {
            "name": "akash deep",
            "profile": "Front End Developer",
            "date": new Date()

        }, {
            "name": "Pratiksha parsewaa",
            "profile": "UI Developer",
            "date": new Date()
        }, {
            "name": "Madhuri zyxx",
            "profile": "UI Developer",
            "date": new Date()
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

    $scope.trackChange = function (data) {
        $scope.track = data;

    }
    $scope.trackColor = function () {
        if ($scope.over === false) {
            $scope.over = true;
        } else {
            $scope.over = false;
        }

    }

    $scope.submit = function (username, password) {
        console.log("data", username, password);
    }

    $scope.getuser = function () {
        $http({
            method: "get",
            url: "http://localhost:3000/getUser"
        }).then(function (response) {
            console.log(response);
            $scope.data = response.data.user;
        })
    }
    $scope.data = {name: 'sam', address: '123 Somewhere'};

    $scope.trackValue = [{
        "text": "ds"
    }]
    ;
    var i = 1;
    $scope.add = function (value) {
        var tepp = {
            "text": value
        }
        $scope.trackValue.push(tepp);
        console.log(value);
    }
    $scope.blk = [
        {
            name: '',
            email: '',
            btn: 'add'
        }
    ]
    $scope.addMore = function () {
        $scope.blk.push({name: '', email: ''});
    }

    $scope.trackAddress = false;
    $scope.bAddress = [];
    $scope.sAddress = [
        {
            name: '',
            No: '',
            addr: ''
        }
    ];
    $scope.save = function (bill) {
        $scope.bAddress.push(bill);
        console.log($scope.bAddress);
    };
    $scope.saveShop = function () {
        console.log($scope.sAddress);
    }

    $scope.$watch('trackAddress', function () {
        console.log("called");
        if ($scope.trackAddress === true) {
            $scope.sAddress = $scope.bAddress[0];
            console.log($scope.sAddress);
        } else {
            $scope.sAddress = [
                {
                    name: '',
                    No: '',
                    addr: ''
                }
            ];
        }
    });*/
    var name = "pratikshaparsewar"

    git.getUser(name).then(function (response) {
        console.log(response)
    });
});
app.controller('mainCtrl', function ($scope) {
    $scope.route = "HELLO";
    $scope.name = "daa";
})

app.controller('mainctrl1', function ($scope) {

})
app.filter("myfil", function () {
    return function (value) {
        console.log("inside filter", value);
        return value.split(' ')[1];

    }
});
app.directive("customElement", function () {
    return {
        restrict: 'E',
        scope: {
            data: '=id'
        },
        templateUrl: 'custom.html'
    }
})
app.factory("git", function ($http, $q) {
    function getUser(name) {
        var deferred = $q.defer();
        $http({
            url: "https://api.github.com/users/" + name,
            method: "get"
        }).then(function (response) {
            deferred.resolve({
                data: response.data
            });
        });
        return deferred.promise;
    }

    return {
        getUser: getUser
    }


});

app.config(function ($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl: "main.html", controller: 'mainCtrl'
    })
        .when("/", {
            templateUrl: "home.html",
            controller: 'mainCtrl'
        })
        .when("/demo", {
            templateUrl: "demo.html",
            controller: 'mainctrl1'
        })
        .when("/prac", {
            template: "<h1>Pratiksha parsewar</h1><br> <h2>hello, its me</h2>",
            controller: 'mainctrl1'
        })
});



