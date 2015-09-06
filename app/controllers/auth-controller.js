angular.module("JHO")
    .controller('AuthController', ['user', 'auth', '$window',
        function AuthController(user, auth, $window) {
            var self = this;
            console.log("in AuthController")

            function handleRequest(res) {
                if (res.data) {
                    var user = res.data;
                }
                // res.data.auth_token ? res.data : null;
                if (user) {
                    $window.localStorage['id'] = user["id"];
                    $window.localStorage['auth_token'] = user["auth_token"];
                    $window.localStorage['name'] = user["name"];
                }
                var token = res.data ? res.data.token : null;
                if (token) {
                    console.log('JWT:', token);
                }
                self.message = res.data;
            }

            self.login = function(returningUser) {
                var credentials = {
                    "id": $window.localStorage['id'],
                    "auth_token": $window.localStorage['auth_token'],
                    "name": $window.localStorage['name']
                }

                user.login(returningUser, credentials)
                    .then(handleRequest, handleRequest)
            }
            self.register = function(newUser) {
                user.register(newUser)
                    .then(handleRequest, handleRequest)
            }

            self.logout = function() {
                auth.logout && auth.logout()
            }
            self.isAuthed = function() {
                return auth.isAuthed ? auth.isAuthed() : false
            }
        }
    ])