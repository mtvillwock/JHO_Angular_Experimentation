// Review this line by line
angular.module("JHO")
  .directive('list', function() {
    return {
      restrict: 'E',
      scope: {
        id: '@',
        name: '@',
        cards: '@'
      },
      replace: true, // Replace with the template below
      transclude: true, // we want to insert custom content inside the directive
      // link: function(scope, element, attrs) {},
      templateUrl: "../templates/panels/board/list.html",
      controller: "ListController"
    };
  });