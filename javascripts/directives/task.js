angular.module("JHO")
  .directive('task', function() {
    return {
      restrict: 'E',
      // scope: {
      //   show: '='
      // },
      replace: true, // Replace with the template below
      transclude: true, // we want to insert custom content inside the directive
      // link: function(scope, element, attrs) {},
      templateUrl: "../templates/panels/board/card/task.html"
    };
  });