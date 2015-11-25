angular.module("JHO")
    .factory('Task', ['$http', 'API', 'auth',
        function TaskFactory($http, API, auth) {
            var factory = {};

            // methods go here
            // consider using $resource or Restangular
            return factory;
        }
    ])