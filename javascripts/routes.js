angular.module("JHO")
    .config([
        // These strings are annotations of dependencies being injected
        // This is for properly tracking dependencies in minified code
        '$stateProvider', '$urlRouterProvider', '$locationProvider',

        function($stateProvider, $urlRouterProvider, $locationProvider) {

            // So you don't need the query hash in navigation
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });


            $stateProvider
            // maybe state('guest')
            // Auth view
            .state('auth', {
                url: '/auth',
                templateUrl: "templates/auth.html",
                controller: "AuthController"
            })

            // Welcome view
            .state('logged-in', {
                url: "/",
                templateUrl: "templates/welcome.html",
                controller: "WelcomeController"
            })

            // Register view
            .state('register', {
                url: '/register',
                templateUrl: "templates/register.html",
                controller: 'AuthController'
            })

            // Login view
            .state('login', {
                url: '/login',
                templateUrl: "templates/login.html",
                controller: 'AuthController'
            })

            .state('board', {
                url: '/board',
                templateUrl: 'templates/panels/board/board-index.html',
                // activetab: 'board'
            })

            .state('today', {
                templateUrl: 'templates/panels/today/today-index.html',
                // activetab: 'today'
            })

            .state('stats', {
                templateUrl: 'templates/panels/stats/stats-index.html',
                // activetab: 'toda'
            })

            .state('tips', {
                templateUrl: 'templates/panels/tips/tips-index.html',
                // activetab: 'board'
            })



            // .when('/update-user', {
            //     templateUrl: "templates/update-user.html",
            //     controller: "UsersController",
            //     controllerAs: "userCtrl"
            // })

            // .when('/about', {
            //     templateUrl: "templates/about.html",
            //     controller: ['$scope',
            //         function($scope) {
            //             $scope.title = "About JHO";
            //         }
            //     ]
            // })

            // .when('/contact', {
            //     templateUrl: "templates/contact.html",
            //     controller: ['$scope',
            //         function($scope) {
            //             $scope.title = "Contact the JHO team";
            //         }
            //     ]
            // })

            // invalid urls redirect to index route
            $urlRouterProvider.otherwise('/');
            // end routing
        }
    ])