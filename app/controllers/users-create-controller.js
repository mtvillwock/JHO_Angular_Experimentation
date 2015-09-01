angular.module("JHO", [])
    .controller('UsersController', function($http) {
        var controller = this;
        console.log("in user controller")
        this.createUser = function(user) {
            $http({
                method: 'POST',
                url: 'https://jho.herokuapp.com/users',
                data: {
                    user: {
                        name: "Matt",
                        email: "mtvillwock@gmail.com",
                        password: "foobar",
                        password_confirmation: "foobar"
                    }
                }
            })
                .success(function(data) {
                    controller.user = data;
                })
                .catch(function(note) {
                  // controller.errors = user.data;
                })
        }
    });