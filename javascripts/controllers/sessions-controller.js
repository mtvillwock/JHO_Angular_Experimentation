angular.module("JHO")
  .controller("SessionsController", ['$http', 'API', function ($http, API) {
    $scope.createSession = function(session) {
      $http({
        // need to pass headers, including CORS and authentication
        method: "post",
        url: API + "/sessions",
        headers: {
          "name": session["name"],
          "auth_token": session["auth_token"]
        }
      }).then(function(data){
        console.log("success: ", data);
      }, function(data){
        console.log("errors: ", data);
      })
    }
  }])