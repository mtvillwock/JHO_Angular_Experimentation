angular.module("JHO", [])
    .controller('UsersController', ['$http',
        function($http) {
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
                console.log("controller's user is: ", controller.user);
                console.log("user from form is: ", user);
                // need to pass headers, including CORS and authentication
                $http({
                    method: 'PUT',
                    url: 'http://localhost:3000/users/' + controller.user.id,
                    // url: 'https://jho.herokuapp.com/users',
                    data: {
                        user: user
                    },
                    headers: {
                        "Accept": "application/json, text/plain, * / *",
                        "Content-Type": "application/json",
                        "name": controller.user["name"],
                        "auth_token": controller.user["auth_token"]
                    }
                })
                    .then(function(response) {
                        console.log("success: ", response);
                        console.log("user data is: ", response["data"]);
                        controller.user = data;
                    }, function(data) {
                        console.log("errors: ", data);
                    })
            }
        }
    ]);