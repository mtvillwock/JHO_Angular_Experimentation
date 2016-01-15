angular.module("JHO")
    .controller('AuthController', ['user', 'auth', '$window', '$location',
        function AuthController(user, auth, $window, $location) {
            var self = this;
            console.log("in AuthController")

            // checks for existing token, sends to board if token exists or board if they don't
            function verifyLoggedIn() {
                if (auth.isAuthed()) {
                    self.sendToBoard();
                    return true;
                } else {
                    self.sendToAuth();
                    return false;
                }
            }

            // this should only fire when the page loads since we don't have page refreshes happening
            angular.element(document).ready(verifyLoggedIn);

            self.sendToBoard = function() {
                $location.path('/board');
            }

            self.sendToWelcome = function() {
                $location.path('/');
            }

            self.sendToAuth = function() {
                $location.path('/auth');
            }

            function handleRequest(res) {
                console.log("handleRequest response is:", res)
                var token = res.data ? res.data.token : null;
                if (token) {
                    console.log('JWT:', token);
                    self.message = res.data;
                    // self.sendToBoard();
                    self.sendToWelcome();
                } else {
                    console.log("handleRequest server error / bad request: ", res);
                    self.sendToAuth();
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
                console.log("logging out")
                auth.logout && auth.logout()
            }
            self.isAuthed = function() {
                // return auth.isAuthed ? auth.isAuthed() : false
                console.log("auth.isAuthed is: ", auth.isAuthed())
                if (auth.isAuthed()) {
                    console.log("auth controller, isAuthed is true")
                    return true;
                } else {
                    console.log("auth controller isAuthed is false")
                    return false;
                }
            }
        }
    ])