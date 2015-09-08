angular.module("JHO")
    .service('auth', ['$window',
        function authService($window) {
            var self = this;

            // JWT methods here
            self.parseJwt = function(token) {
                var base64Url = token.split('.')[1];
                var base64 = base64Url.replace('-', '+').replace('_', '/');
                return JSON.parse($window.atob(base64));
            };

            self.saveToken = function(token) {
                $window.localStorage['jwtToken'] = token;
            };

            self.getToken = function() {
                return $window.localStorage['jwtToken'];
            };

            self.isAuthed = function() {
                var token = self.getToken();
                if (token) {
                    console.log("authenticated")
                    var params = self.parseJwt(token);
                    return Math.round(new Date().getTime() / 1000) <= params.exp;
                } else {
                    return false;
                }
            };

            self.logout = function() {
                console.log("logging out");
                $window.localStorage.removeItem('jwtToken');
            };
        }
    ])