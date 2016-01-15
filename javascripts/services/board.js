angular.module("JHO")
    .factory('Board', ['$http', 'API', 'auth',
        function Board($http, API, auth) {
            var factory = {};

            factory.get = function(board) {
                return $http.get(API + '/boards', {
                    board: {
                        name: board.name,
                    }
                });
            };

            factory.dashboard = function() {
                return $http.get(API + '/dashboard');
            }
            return factory;
        }
    ])