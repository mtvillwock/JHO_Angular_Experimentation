angular.module("JHO")
    .controller('AuthController', ['user', 'auth', '$window', '$location',
        function AuthController(user, auth, $window, $location) {
            var self = this;
            console.log("in AuthController")

            function sendToBoard() {
                $window.location.href = '#/board';
                $window.location.href;
            }

            function sendToAuth() {
                $window.location.href = '#/auth';
                $window.location.href;
            }

            function handleRequest(res) {
                console.log("handleRequest response is:", res)
                var token = res.data ? res.data.token : null;
                if (token) {
                    console.log('JWT:', token);
                    self.message = res.data;
                    sendToBoard();
                } else {
                    console.log("handleRequest server error / bad request: ", res);
                    sendToAuth();
                }
            }

            self.login = function(returningUser) {
                user.login(returningUser)
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