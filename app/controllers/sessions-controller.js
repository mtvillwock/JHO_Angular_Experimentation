angular.module("JHO", [])
.controller("SessionsController", ['$http', function ($http) {
  $scope.createSession = function(session) {
    $http({
      // need to pass headers, including CORS and authentication
      method: "post",
      url: "http://localhost:3000/sessions",
      // url: "https://jho.herokuapp.com/sessions,"
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