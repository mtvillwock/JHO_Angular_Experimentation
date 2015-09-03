angular
    .module("JHO", ['ngRoute', 'ngResource'])

.config([
    // These strings are annotations of dependencies being injected
    // This is for properly tracking dependencies in minified code
    '$httpProvider', '$routeProvider',
    function($httpProvider, $routeProvider) {
        // setting headers for CORS requests
        $httpProvider.defaults.headers.common({
            "Accept": "application/json, text/plain, * / *",
            "Content-Type": "application/json"
        });

        // If client doesn't hit an existing route, go to '/'
        $routeProvider.otherwise('/');
        // if client hits index, send them to welcome page
        $routeProvider.when('/', {
            redirectTo: '/welcome'
        });

        // Welcome view
        $routeProvider.when('/welcome', {
            templateUrl: "templates/welcome.html",
            controller: 'WelcomeController',
            controllerAs: 'welcomeCtrl'
        });

        // Register view
        $routeProvider.when('/register', {
            templateUrl: "templates/register.html",
            controller: function($scope) {
                $scope.pageTitle = "Register New User";
            }
        });

        // Login view
        $routeProvider.when('/login', {
            templateUrl: "templates/register.html",
            controller: function($scope) {
                $scope.pageTitle = "Register New User";
            }
        });

    }
])