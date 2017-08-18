var app = angular.module('app', []);
app.controller("mainCtrl", function ($scope) {
    $scope.name = "madhuri";
});
app.controller("childCtrl", ['$scope', function (v) {
    v.profile = 'UI developer';
    v.mob = "9874563210";
}]);
app.controller("counter", function ($scope, $interval) {
    $scope.time = 0;
    function caaltime() {
        $scope.time++;
    }
    var start;
    $scope.start = function(){
        start= $interval(caaltime, 1000);
    }
    $scope.stop = function(){
        $scope.lap=
        $interval.cancel(start);
    }
})