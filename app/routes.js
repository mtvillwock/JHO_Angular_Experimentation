// angular.module('NoteWrangler')
// .controller('NotesShowController', ['$routeParams', '$http',
//                                     function($routeParams, $http) {
//                                       var controller = this;

//                                       $http({method: "get",
//                                        url: "/notes/" + $routeParams.id
//                                             })
//                                       .success(function(data) {
//                                         controller.note = data;
//                                       });
// }]);

angular.module('JHO')
    .controller('UsersCreateController', ['$routeParams', '$http',
        function($routeParams, $http) {
            var controller = this;

            var data = {
                "name": "Black Dynamite",
                "email": "dynamite@mail.com",
                "password": "foobar"
                "password_confirmation": "foobar"
            }

            var headers = {
                'Accept': "application/json",
                'Content-Type': "application/json",
                // "name": data["name"],
                // auth_token: data["auth"]
            }

            controller.saveUser = function(user) {
                // grab data from from field
            }

            $http({
                method: "post",
                url: "https://jho.herokuapp.com/users",
                data: data
            })
                .success(function(data) {
                    console.log(data);
                    controller.user = data;
                });
        }
    ]);

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