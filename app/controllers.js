angular.module("JHO.controllers", [])
    .controller('UsersController', ['$http',
        function($http) {

            // development URL
            var apiUrl = "http://localhost:3000"
            // production URL https://jho.herokuapp.com

            var controller = this;
            console.log("in user controller");

            controller.createUser = function(user) {
                console.log(user);

                $http({
                    method: 'POST',
                    url: apiUrl + '/users',
                    data: {
                        user: user
                    },
                })
                    .then(function(response) {
                        console.log("user data is: ", response["data"]);
                        controller.user = response["data"];
            // {
            //     auth_token: "c6f51397-2669-4378-a3cd-30d98f871563"
            //     created_at: "2015-09-05T08:27:46.456Z"
            //     email: "exper@iment.com"
            //     id: 22
            //     location: null
            //     name: "Experiment"
            //     password_digest: "$2a$10$QmMoulQR8waF3tCp6wcM2uK0YvTvlZZG0TYOGem7ZePhXtdHVZCjS"
            //     password_hash: null
            //     updated_at: "2015-09-05T08:27:46.484Z"
            // }
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
                    url: apiUrl + '/users/' + controller.user.id,
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
    ])

    .controller('SessionsController', function($scope) {
        $scope.pageTitle = "Login User";
    })