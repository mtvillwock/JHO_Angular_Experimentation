(function() {
    var app = angular.module("JHO", ['ngRoute', 'jho-routes', 'jho-drag-drop', 'jho-auth']);

    app.controller('UsersController', function($http) {
        var controller = this;
        console.log("in user controller")
        this.createUser = function(user) {
            console.log("in createUser")
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
                    console.log("data: ", data);
                    controller.user = data;
                })
                .catch(function(errors) {
                    console.log("catch: ", errors);
                  // controller.errors = user.data;
                })
                .errors(function(errors) {
                    console.log("errors: ", errors);
                })
        }
    })

    app.controller("PanelController", function() {
        this.tab = 1;

        this.selectTab = function(newActiveTab) {
            this.tab = newActiveTab;
        };

        this.isSelected = function(tabToCheck) {
            return this.tab === tabToCheck;
        };
    });

    app.controller('BoardController', function() {
        this.board = board1;
        this.list1_items = list1_items;
    });

    app.controller("AddOrganizationController", function() {
        this.organization = {};
        this.list1_items = list1_items;

        this.addOrganization = function(list1_items) {
            this.list1_items.push(this.organization);
            this.organization = {};
        };
    });

    var board1 = {
        name: "Test Board Title",
        description: '...'
    }
    var list1_items = [{
        title: "Google"
    }, {
        title: "Wired"
    }, {
        title: "TheGreatBlue"
    }, ]

})();