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
                    controller: function(){},
                    controllerAs: 'userCtrl'
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