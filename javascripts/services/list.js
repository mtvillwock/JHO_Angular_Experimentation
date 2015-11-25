angular.module("JHO")
    .factory('List', ['$http', 'API', 'auth',
        function ListFactory($http, API, auth) {
            var factory = {};

            // methods go here
            // consider using $resource or Restangular
            return factory;
        }
    ])