angular.module("JHO")
    .factory('Movement', ['$http', 'API', 'auth',
        function Movement($http, API, auth) {
            var factory = {};

            factory.create = function(data) {
                $http.post(API + '/cards/' + data.id + '/movements', {
                    card: {
                        id: data.id
                        list_id: data.list_id
                    }
                })
            }

            // factory.update = function(data) {
            //     return $http({
            //         method: "PUT",
            //         url: API + '/cards/' + data.card.id + '/movements' + data.movement.id,
            //         data: {
            //             card: {
            //                 title: card.title,
            //                 list_id: list_id
            //             }
            //         }
            //     })
            // }

            return factory;
        }
    ])