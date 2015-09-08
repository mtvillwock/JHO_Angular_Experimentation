angular.module("JHO", ['ngRoute', 'ngResource', 'JHO.controllers'])
// .constant('API', 'https://jho.herokuapp.com')
.constant('API', 'http://localhost:3000')

.config(['$httpProvider',
    function($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    }
])