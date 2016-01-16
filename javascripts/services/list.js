angular.module("JHO")
    .factory('List', ['$http', 'API', 'auth',
        function ListFactory($http, API, auth) {
            var factory = {};
            // Need to build out in Rails API
            factory.all = function() {
              return $http.get(API + '/lists')
              // returns all lists and cards for user
            }

            factory.get = function(list_id) {
              return $http.get(API + '/lists/' + list_id)
              // returns a list and its cards
            }
            // methods go here
            // consider using $resource or Restangular
            return factory;
        }
    ])