angular.module("JHO.auth", [])
    .factory('authInterceptor', ['API', 'auth', function authInterceptor(API, auth) {
        return {
            // automatically attach Authorization header
            request: function(config) {
                var token = auth.getToken();
                if (config.url.indexOf(API) === 0 && token) {
                    config.headers.Authorization = 'Bearer ' + token;
                }

                return config;
            },

            requestError: function(config) {
                // handling request error
            },

            // If a token was sent back, save it
            response: function(res) {
                if (res.config.url.indexOf(API) === 0 && res.data.token) {
                    auth.saveToken(res.data.token);
                }

                return res;
            },

            responseError: function(res) {
                // if response to API is a 401
                // redirect user to login page
            }
        }
    }])

.service('user', ['$http', function userService($http, API, auth) {
    var self = this;

    // Need to revise these for JHO API
    self.getQuote = function() {
        return $http.get(API + '/auth/quote')
    };

    // add authentication methods here
    self.register = function(username, password) {
        return $http.post(API + '/auth/register', {
            username: username,
            password: password
        })
    };

    self.login = function(username, password) {
        return $http.post(API + '/auth/login', {
            username: username,
            password: password
        })
    };

}])
    .service('auth', ['$window', function authService($window) {
        var self = this;

        // Add JWT methods here
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
                var params = self.parseJwt(token);
                return Math.round(new Date().getTime() / 1000) <= params.exp;
            } else {
                return false;
            }
        };

        self.logout = function() {
            $window.localStorage.removeItem('jwtToken');
        };
    }])
    .constant('API', 'http://test-routes.herokuapp.com')
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    }])
    .controller('Main', ['user', 'auth', function MainCtrl(user, auth) {
        var self = this;

        function handleRequest(res) {
            var token = res.data ? res.data.token : null;
            if (token) {
                console.log('JWT:', token);
            }
            self.message = res.data.message;
        }

        self.login = function() {
            user.login(self.username, self.password)
                .then(handleRequest, handleRequest)
        }
        self.register = function() {
            user.register(self.username, self.password)
                .then(handleRequest, handleRequest)
        }
        self.getQuote = function() {
            user.getQuote()
                .then(handleRequest, handleRequest)
        }
        self.logout = function() {
            auth.logout && auth.logout()
        }
        self.isAuthed = function() {
            return auth.isAuthed ? auth.isAuthed() : false
        }
    }])