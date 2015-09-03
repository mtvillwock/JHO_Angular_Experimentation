angular.module("JHO", [])
    .controller('WelcomeController', function($scope) {
        $scope.quote = "Anything added dilutes everything else.";
        $scope.foo = "FOO";
        $scope.bar = "BAR";
        $scope.baz = "BAz";
    })
    .controller('UsersController', function($scope) {
        $scope.pageTitle = "Register New User";
    })
    .controller('SessionsController', function($scope) {
        $scope.pageTitle = "Login User";
    })