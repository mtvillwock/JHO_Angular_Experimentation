// Review this line by line
angular.module("JHO")
  .directive('card', function() {
    return {
      restrict: 'E',
      // scope: {
      //   show: '='
      // },
      replace: true, // Replace with the template below
      transclude: true, // we want to insert custom content inside the directive
      // link: function(scope, element, attrs) {},
      templateUrl: "../templates/panels/board/card/card.html"
    };
  });