angular.module("JHO")
    .factory('Card', ['$http', 'API', 'auth',
        function Card($http, API, auth, $http) {
            var factory = {};

            // methods go here
            factory.create = function(data) {
                return $http.post(API + '/cards', {
                    card: {
                        title: data.title,
                        list_id: data.list_id
                    }
                })
            }

            return factory;
        }
    ])