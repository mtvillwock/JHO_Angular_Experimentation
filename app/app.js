angular.module("JHO", [
    'ui.router'
    // 'ngRoute',
    // 'jho-routes',
    // 'jho-drag-drop',
    // 'jho-auth'
])
    .config([
        // These strings are annotations of dependencies being injected
        // This is for properly tracking dependencies in minified code
        '$urlRouterProvider',
        '$stateProvider',
        '$httpProvider',
        function($urlRouterProvider, $stateProvider, $httpProvider) {
            // $httpProvider.defaults.headers.common({
            //     "Accept": "application/json, text/plain, * / *",
            //     "Content-Type": "application/json"
            // });

            // If client doesn't hit an existing route, go to '/'
            $urlRouterProvider.otherwise('/');
            // $urlRouterProvider.when('/foo', {
            //     redirectTo: '/'
            // });

            // States are comprised of a state name and a configuration object
            // Common config options include:
            // url => the url of the state
            // template || templateUrl || templateProvider => the HTML for that state
            // controller => define values for {{ expressions }} in HTML
            // ===> Can also reference an already defined controller
            // controllerAs => specify alias for controller, e.g., 'ItemController as item'
            $stateProvider

            // Welcome state
            .state('welcome', {
                url: '/',
                templateUrl: "/welcome.html",
                controller: 'WelcomeController',
                controllerAs: 'welcomeCtrl'
            })

            // Register state
            .state('register', {
                url: '/register',
                templateUrl: "/register.html",
                controller: function($scope) {
                    $scope.pageTitle = "Register New User";
                }
            })

            // Login state

        }
    ])