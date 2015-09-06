angular.module("JHO", [])
    .service('user', ['$http',
        function userService($http, API, auth) {
            var self = this;

            // authentication methods here
            self.register = function(username, password) {
                return $http.post(API + '/users', {
                    username: username,
                    password: password
                })
            };

            self.login = function(username, password) {
                return $http.post(API + '/sessions', {
                    username: username,
                    password: password
                })
            };

        }
    ])