angular.module('jho')
.config([
  '$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/',{
      templateUrl: '/templates/panels/board/board-index.html',
      activetab: 'board'
    })
    .when('/board',{
      templateUrl: '/templates/panels/board/board-index.html',
      activetab: 'board'
    })
    .when('/today',{
      templateUrl: '/templates/panels/today/today-index.html',
      activetab: 'today'
    })
    .when('/stats',{
      templateUrl: '/templates/panels/stats/stats-index.html',
      activetab: 'toda'
    })
    .when('/tips',{
      templateUrl: '/templates/panels/tips/tips-index.html',
      activetab: 'board'
    })
    .otherwise( {redirectTo: '/' });
  }
]);