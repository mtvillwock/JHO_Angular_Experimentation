angular.module("JHO")
    .controller('WelcomeController', ['$scope', function($scope) {
        $scope.quote = "Anything added dilutes everything else.";
        $scope.items = ["foo", "bar", "baz"]
    }]);

// example controller
// angular.module('NoteWrangler').controller('NotesIndexController', function(Note, $scope){
//   $scope.notes = Note.query();
//   $scope.search = {};
// });