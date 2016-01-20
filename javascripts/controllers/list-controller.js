// var ListController =

angular.module("JHO")
  .controller('ListController', ['$http', '$scope', 'API', 'List', function($http, $scope, API, List) {
    var _this = this;

    _this.getLists = function() {
      List.all()
      .then(function(response) {
        _this.lists = response.data.lists;
        _this.cards = response.data.cards;
      }, function(err) {
        console.log(err)
      })
    }

    _this.getList = function(id) {
      List.get(id)
      .then(function(response) {
        // list specific info here
      }, function(err) {
        console.log(err)
      })
    }
  }
])
  // .$inject['$http', '$scope', 'API', 'List']