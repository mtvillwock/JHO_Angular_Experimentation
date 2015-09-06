(function() {
    // inject dependency modules
    var app = angular.module('todoApp', ['dndLists']);

    // start boardController
    app.controller('boardController', function() {
        var board = this;

        board.lists = [
        {
            name: "Interested In",
            cards: [
                {title: 'Google'},
                {title: 'FaceBook'}
            ]
        },
        {
            name: "Applied",
            cards: [
                {title: 'Wired'},
                {title: 'Make'}
            ]
        },
        {
            name: "Interviewed",
            cards: [
                {title: 'Wired'},
                {title: 'Make'}
            ]
        }
        ]

        // boardController.addTodo = function() {
        //     todoList.todos.push({
        //         text: todoList.todoText,
        //         done: false
        //     });
        //     todoList.todoText = '';
        // };

        // boardController.remaining = function() {
        //     var count = 0;
        //     angular.forEach(todoList.todos, function(todo) {
        //         count += todo.done ? 0 : 1;
        //     });
        //     return count;
        // };

        // boardController.archive = function() {
        //     var oldTodos = todoList.todos;
        //     todoList.todos = [];
        //     angular.forEach(oldTodos, function(todo) {
        //         if (!todo.done) todoList.todos.push(todo);
        //     });
        // };

    });

})();