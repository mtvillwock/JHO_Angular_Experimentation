angular.module("JHO", [])
    .controller('welcomeCtrl', ['$scope', function($scope) {
        $scope.quote = "Anything added dilutes everything else.";
        $scope.items = ["foo", "bar", "baz"]
    }]);