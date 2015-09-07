angular.module("JHO")
    .controller('UsersController', ['$http', '$window',
        function($http, $window) {
            var controller = this;
            console.log("in user controller");

            controller.createUser = function(user) {
                console.log(user);

                $http({
                    method: 'POST',
                    url: 'http://localhost:3000/users',
                    // url: 'https://jho.herokuapp.com/users',
                    data: {
                        user: user
                    },
                })
                    .then(function(response) {
                        console.log("user data is: ", response["data"]);
                        controller.user = response["data"];
                        console.log("controller.user is: ", controller.user)
                    }, function(data) {
                        console.log("errors: ", data);
                    })
            };

            controller.updateUser = function(user) {
                console.log("user from form is: ", user);
                var credentials = {
                    "id": $window.localStorage['id'],
                    "auth_token": $window.localStorage['auth_token'],
                    "name": $window.localStorage['name']
                }
                console.log("credentials are: ", credentials);
                // need to pass headers, including CORS and authentication
                $http({
                    method: 'PUT',
                    url: 'http://localhost:3000/users/' + credentials["id"],
                    // url: 'https://jho.herokuapp.com/users',
                    data: {
                        user: user
                    },
                    headers: {
                        "Accept": "application/json, text/plain, * / *",
                        "Content-Type": "application/json",
                        "name": credentials["name"],
                        "auth_token": credentials["auth_token"]
                    }
                })
                    .then(function(response) {
                        console.log("success: ", response);
                        console.log("user data is: ", response["data"]);
                        user = response["data"];
                        $window.localStorage['id'] = user["id"];
                        $window.localStorage['auth_token'] = user["auth_token"];
                        $window.localStorage['name'] = user["name"];


                    }, function(data) {
                        console.log("errors: ", data);
                    })
            }
        }
    ]);