angular
    .module("JHO", ['ngRoute', 'ngResource', 'JHO.controllers'])
// .constant('DEV_API_URL', 'http://localhost:3000');
// .constant('PROD_API_URL', 'https://jho.herokuapp.com');
// .constant('API', 'https://jho.herokuapp.com')
    .constant('API', 'http://localhost:3000')

    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    }])