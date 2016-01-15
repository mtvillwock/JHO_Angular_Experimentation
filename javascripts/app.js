angular.module("JHO", ['ui.router', 'ngResource', 'dndLists'])
    // .constant('API', 'https://jho-api.herokuapp.com')
    .constant('API', 'http://localhost:3000')

    .config(['$httpProvider',
        function($httpProvider) {
            $httpProvider.interceptors.push('authInterceptor');
        }
    ])