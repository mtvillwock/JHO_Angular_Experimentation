angular.module("JHO")
    .factory('Card', ['$http', 'API', 'auth',
        function Card($http, API, auth) {
            var factory = {};

            factory.create = function(data) {
                return $http.post(API + '/cards', {
                    card: {
                        title: data.title,
                        list_id: data.list_id
                    }
                })
            }

            factory.update = function(data) {
                return $http.post(API + '/cards' + data.id, {
                    card: {
                        title: data.title,
                        list_id: data.list_id
                        // other data here
                    }
                })
            }

            return factory;
        }
    ])