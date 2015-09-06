angular.module("JHO", ['ngRoute', 'JHO.controllers'])
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

            .when('/auth', {
                templateUrl: "templates/auth.html",
                controller: "AuthController as auth"
            })
            // Welcome view
            .when('/welcome', {
                templateUrl: "app/templates/welcome.html",
                controller: ['$scope',
                    function($scope) {
                        $scope.title = "Welcome to JHO";
                        $scope.quote = "Anything added dilutes everything else.";
                        $scope.items = ["foo", "bar", "baz"]
                    }
                ]
            })

            // Register view
            .when('/register', {
                templateUrl: "templates/register.html",
                // controller: ['$scope',
                //     function($scope) {
                //         $scope.title = "Register New User";
                //     }
                // ]
                controller: 'UsersController',
                controllerAs: 'userCtrl'
            })

            // Login view
            .when('/login', {
                templateUrl: "templates/login.html",
                controller: ['$scope',
                    function($scope) {
                        $scope.title = "Login User";
                    }
                ]
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
                templateUrl: "templates/board.html",
                controller: ['$scope',
                    function($scope) {
                        var board1 = {
                            name: "Test Board Title",
                            description: '...'
                        }

                        var list1_items = [{
                            title: "Google"
                        }, {
                            title: "Wired"
                        }, {
                            title: "TheGreatBlue"
                        }, ]

                        $scope.title = "Your board";
                        $scope.tab = 1;

                        $scope.selectTab = function(newActiveTab) {
                            $scope.tab = newActiveTab;
                        };

                        $scope.isSelected = function(tabToCheck) {
                            return $scope.tab === tabToCheck;
                        };

                        $scope.board = board1;
                        $scope.list1_items = list1_items;

                        $scope.organization = {};
                        $scope.list1_items = list1_items;

                        $scope.addOrganization = function(list1_items) {
                            $scope.list1_items.push($scope.organization);
                            $scope.organization = {};
                        };
                    }
                ]
            })

            // If client doesn't hit an existing route, go to '/'
            .otherwise({
                redirectTo: '/'
            });
            // end routing
        }
    ])