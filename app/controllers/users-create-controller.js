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
                    data: { user: user },
                })
                    .then(function(response) {
                        console.log("success: ", response);
                        console.log("user data is: ", response["data"]);
                        controller.user = response["data"];
                    }, function(data) {
                        console.log("errors: ", data);
                    })
            }
            console.log(controller);
        }
    ]);