angular.module("JHO")
    .controller('UsersController', ['$http', '$window', 'API', 'auth',
        function UsersController($http, $window, API, auth) {
            var controller = this;
            console.log("in user controller");

            controller.updateUser = function(user) {
                console.log("user from form is: ", user);
                var token, parsed_token, user_id;
                // need to pass headers, including CORS and authentication
                token = auth.getToken();
                parsed_token = auth.parseJwt(token);
                user_id = parsed_token["user_id"];
                console.log("auth headers are:", $http.headers);

                $http({
                    method: 'PUT',
                    url: API + '/users/' + user_id,
                    // url: 'https://jho.herokuapp.com/users',
                    data: {
                        user: user
                    },
                })
                    .then(function(response) {
                        console.log("success: ", response);
                        console.log("user data is: ", response["data"]);
                    }, function(data) {
                        console.log("errors: ", data);
                    })
            }
        }
    ]);