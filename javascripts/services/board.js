angular.module("JHO")
    .factory('Board', ['$http', 'API', 'auth',
        function BoardFactory($http, API, auth) {
            var self = this;

            self.get = function(board) {
                return $http.get(API + '/boards', {
                    board: {
                        name: board.name,
                    }
                });
            };

        }
    ])