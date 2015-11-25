angular.module("JHO")
    .factory('Card', ['$http', 'API', 'auth',
        function CardFactory($http, API, auth) {
            var factory = {};

            // methods go here
            factory.create = function(cardData) {
              // magic
            }
            // consider using $resource or Restangular
            return factory;
        }
    ])