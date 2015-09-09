angular.module("JHO")
    .config([
        // These strings are annotations of dependencies being injected
        // This is for properly tracking dependencies in minified code
        '$routeProvider',
        function($routeProvider) {

            // if client hits index, send them to welcome page
            $routeProvider

            .when('/', {
                redirectTo: '/auth'
            })

            // example route
            // .when('/notes', {
            //     templateUrl: "assets/templates/notes/index.html",
            //     controller: "NotesIndexController"
            // })

            .when('/logout', {
                redirectTo: '/auth'
            })

            .when('/auth', {
                templateUrl: "templates/auth.html",
                controller: "AuthController",
                controllerAs: 'auth'
            })
            // Welcome view
            .when('/welcome', {
                templateUrl: "templates/welcome.html",
                controller: "WelcomeController",
                controllerAs: 'welcome'
            })

            // Register view
            .when('/register', {
                templateUrl: "templates/register.html",
                controller: 'AuthController',
                controllerAs: 'auth'
            })

            // Login view
            .when('/login', {
                templateUrl: "templates/login.html",
                controller: 'AuthController',
                controllerAs: 'auth'
            })

            .when('/update-user', {
                templateUrl: "templates/update-user.html",
                controller: "UsersController",
                controllerAs: "userCtrl"
            })

            .when('/about', {
                templateUrl: "templates/about.html",
                controller: ['$scope',
                    function($scope) {
                        $scope.title = "About JHO";
                    }
                ]
            })

            .when('/contact', {
                templateUrl: "templates/contact.html",
                controller: ['$scope',
                    function($scope) {
                        $scope.title = "Contact the JHO team";
                    }
                ]
            })

            .when('/board', {
                templateUrl: '../templates/panels/board/board-index.html',
                activetab: 'board'
            })
                .when('/today', {
                    templateUrl: '../templates/panels/today/today-index.html',
                    activetab: 'today'
                })
                .when('/stats', {
                    templateUrl: 'templates/panels/stats/stats-index.html',
                    activetab: 'toda'
                })
                .when('/tips', {
                    templateUrl: 'templates/panels/tips/tips-index.html',
                    activetab: 'board'
                })

            // If client doesn't hit an existing route, go to '/'
            .otherwise({
                redirectTo: '/'
            });
            // end routing
        }
    ])