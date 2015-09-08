angular.module('jho')
.config([
  '$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/board',{
    templateUrl: '/templates/panels/board/board-index.html'
    })
    .when('/today',{
    templateUrl: '/templates/panels/today/today-index.html'
    })
    .when('/stats',{
    templateUrl: '/templates/panels/stats/stats-index.html'
    })
    .when('/tips',{
    templateUrl: '/templates/panels/tips/tips-index.html'
    })
  }
]);