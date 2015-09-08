(function() {
    var app = angular.module('jho-auth', ['ngCookies'])
    app.controller('SigninController', function($scope) {
        $scope.newSession = function(authInfo) {
            SessionService(authInfo);
        };
    });

    app.controller('sessionsController', function(CookieHandler, $scope) {
        $scope.logout = function() {
            CookieHandler.delete();
        }
    });

    app.factory('SessionService', function(CookieHandler, $http) {
        return function(authInfo) {
            $http.post('https://jho.herokuapp.com/sessions', authInfo)
                .success(function(data) {
                    CookieHandler.set(data.user);
                })
                .error(function() {
                    console.log("error in SessionService")
                });
        };
    });

    app.factory('CookieHandler', function($cookieStore) {
        var user = null;

        var CookieHandler = {
            set: function(user) {
                $cookieStore.put('currentUser', user);
            },

            get: function() {
                return $cookieStore.get('currentUser');
            },

            delete: function(user) {
                $cookieStore.remove('currentUser');
            }
        };

        return CookieHandler;
    });

    app.factory('SessionInjector', function(CookieHandler) {
        return {
            request: function(config) {
                if (CookieHandler.get() !== undefined) {
                    config.headers['auth_token'] = CookieHandler.get().token;
                    config.headers['name'] = CookieHandler.get().username;
                }
                return config;
            }
        }
    });

    app.config(function($httpProvider) {
        $httpProvider.interceptors.push('SessionInjector');
    });
})();