// ngView
// load ngRoute library
// import ngRoute module
// define routes
angular.module('jho-routes', [])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'templates/board.html'
                })
                .when('/register', {
                    templateUrl: 'templates/register.html',
                    controller: 'UsersCreateController',
                    controllerAs: 'userController'
                })
                .when('/login', {
                    templateUrl: 'jho.herokuapp.com/sessions'
                })
                .when('/logout', {

                })
            // handle request that doesn't match routes
            .otherwise({
                redirectTo: '/'
            });
        }
    ]);