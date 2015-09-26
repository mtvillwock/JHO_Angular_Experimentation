angular.module("JHO")
    .controller('AuthController', ['user', 'auth', '$window', '$location',
        function AuthController(user, auth, $window, $location) {
            var self = this;
            console.log("in AuthController")

            // checks for existing token, sends to board if token exists or board if they don't
            function verifyLoggedIn() {
                if (auth.isAuthed()) {
                    self.sendToBoard();
                } else {
                    self.sendToAuth();
                }
            }

            // this should only fire when the page loads since we don't have page refreshes happening
            angular.element(document).ready(verifyLoggedIn);

            self.sendToBoard = function() {
                $window.location.href = '#/board';
                $window.location.href;
            }

            self.sendToAuth = function() {
                $window.location.href = '#/auth';
                $window.location.href;
            }

            function handleRequest(res) {
                console.log("handleRequest response is:", res)
                var token = res.data ? res.data.token : null;
                if (token) {
                    console.log('JWT:', token);
                    self.message = res.data;
                    self.sendToBoard();
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
                auth.logout && auth.logout()
            }
            self.isAuthed = function() {
                return auth.isAuthed ? auth.isAuthed() : false
            }
        }
    ])