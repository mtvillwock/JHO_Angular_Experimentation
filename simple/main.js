(function() {
    var app = angular.module("jho", ['ngCookies']);


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


    app.controller("PanelController", function() {
        this.tab = 1;

        this.selectTab = function(newActiveTab) {
            this.tab = newActiveTab;
        };

        this.isSelected = function(tabToCheck) {
            return this.tab === tabToCheck;
        };
    });

    app.controller('BoardController', function() {
        this.board = board1;
        this.list1_items = list1_items;
    });

    app.controller("AddOrganizationController", function() {
        this.organization = {};
        this.list1_items = list1_items;

        this.addOrganization = function(list1_items) {
            this.list1_items.push(this.organization);
            this.organization = {};
        };
    });

    var board1 = {
        name: "Test Board Title",
        description: '...'
    }
    var list1_items = [{
        title: "Google"
    }, {
        title: "Wired"
    }, {
        title: "TheGreatBlue"
    }, ]

})();