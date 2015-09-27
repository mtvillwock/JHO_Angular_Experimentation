angular.module("JHO")
    .controller('TasksController', ['$http', '$window', 'API', 'auth',
        function TasksController($http, $window, API, auth) {
            var controller = this;
            console.log("in task controller");

            controller.updateTask = function(task) {
                console.log("task being updated is: ", task);
                var token, parsed_token, user_id;
                // need to pass headers, including CORS and authentication
                token = auth.getToken();
                parsed_token = auth.parseJwt(token);
                user_id = parsed_token["user_id"];

                $http({
                    method: 'PUT',
                    url: API + '/cards/' + task.card_id + "/tasks/" + task.id,
                    data: {
                        task: task
                    },
                })
                    .then(function(response) {
                        console.log("success: ", response);
                        console.log("task data is: ", response["data"]);
                    }, function(data) {
                        console.log("errors: ", data);
                    })
            }

            controller.createTask = function(task, card) {
                // setting values for creating task
                task.card_id = card.id;
                task.completed = false;
                console.log("task being created is: ", task);
                // card.tasks.push(task);

                var token, parsed_token, user_id;
                // need to pass headers, including CORS and authentication
                token = auth.getToken();
                parsed_token = auth.parseJwt(token);
                user_id = parsed_token["user_id"];

                $http({
                    method: "POST",
                    url: API + '/cards/' + task.card_id + "/tasks",
                    data: {
                        task: task
                    }
                })
                    .then(function(response) {
                        console.log("success: ", response);
                        console.log("created task data from DB is: ", response["data"]);
                        // appending task to card's array of tasks
                        card.tasks.push(response["data"]);
                        // reset value of input field
                        task.title = '';
                    }, function(data) {
                        console.log("errors: ", data);
                    })
            }
        }
    ]);