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

            self.login = function(user, credentials) {
                // this should probably go in the interceptors service
                $http.defaults.headers.post = {
                    "Accept": "application/json, text/plain, * / *",
                    "Content-Type": "application/json",
                    "name": credentials["name"],
                    "auth_token": credentials["auth_token"]
                };

                return $http.post(API + '/sessions', {
                    session: {
                        email: user.email,
                        password: user.password,
                    }
                });
            };

        }
    ])