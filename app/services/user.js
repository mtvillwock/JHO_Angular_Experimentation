angular.module("JHO")
    .service('user', ['$http', 'API', 'auth',
        function userService($http, API, auth) {
            var self = this;

            // authentication methods here
            self.register = function(user) {
                return $http.post(API + '/users', {
                    user: {

                        name: user.name,
                        email: user.email,
                        password: user.password,
                        password_confirmation: user.password_confirmation
                    }
                });
            };

            self.login = function(user) {
                return $http.post(API + '/sessions', {
                    session: {
                        email: user.email,
                        password: user.password,
                    }
                });
            };

        }
    ])