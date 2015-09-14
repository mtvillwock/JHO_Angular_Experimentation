angular.module("JHO", [])
// start TodoListController
    .controller('TodoListController', function() {
        var todoList = this;
        todoList.todos = [{
            text: 'learn angular',
            done: true
        }, {
            text: 'build an angular app',
            done: false
        }];

        // .dragoverCallback = function(event, index, external, type)
        todoList.dragoverCallback = function(event, index, external, type) {
            // todoList.logListEvent('dragged over', event, index, external, type);
            console.log("dragged over callback");
        };

        // .dropCallback = function(event, index, item, external, type, allowedType) {
        todoList.dropCallback = function(event, index, external, type) {
            console.log("drop callback");
            // todoList.logListEvent('dropped at', event, index, external, type);
            // if (external) {
            //     if (allowedType === 'itemType' && !item.label) return false;
            //     if (allowedType === 'containerType' && !angular.isArray(item)) return false;
            // }
            // return item;
        };


        todoList.logEvent = function(message, event) {
            console.log(message, '(triggered by the following', event.type, 'event)');
            console.log(event);
        };

        todoList.logListEvent = function(action, event, index, external, type) {
            var message = external ? 'External ' : '';
            message += type + ' element is ' + action + ' position ' + index;
            todoList.logEvent(message, event);
        };

        todoList.addTodo = function() {
            todoList.todos.push({
                text: todoList.todoText,
                done: false
            });
            todoList.todoText = '';
        };

        todoList.remaining = function() {
            var count = 0;
            angular.forEach(todoList.todos, function(todo) {
                count += todo.done ? 0 : 1;
            });
            return count;
        };

        todoList.archive = function() {
            var oldTodos = todoList.todos;
            todoList.todos = [];
            angular.forEach(oldTodos, function(todo) {
                if (!todo.done) todoList.todos.push(todo);
            });
        };
    });
    // end todoListController
