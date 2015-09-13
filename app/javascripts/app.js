angular.module("JHO", ['ngRoute', 'ngResource', 'dndLists'])
// .constant('API', 'https://jho.herokuapp.com')
.constant('API', 'http://localhost:3000')

.config(['$httpProvider',
    function($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    }
])

.controller('BoardController', ['$http','$scope','API', function($http,$scope, API) {
    // New Code;  Put the board onto
    $scope.board = {};
    $scope.list1_items = [];
    // Refactor this into a service
    $http({method: 'GET', url: API+'/dashboard'})
    .success(function(returnValues){
        console.log("ReturnValues : ", returnValues)
        $scope.board = returnValues.board;
        console.log("Inside succes:", $scope.board);
        $scope.list1_items = $scope.board.lists[0]
    });

}])

.controller("AddOrganizationController", ['$scope','$http', function($scope) {
    this.organization = {};
    // this.list1_items = board1.lists[0];
    this.addOrganization = function(list1_items) {
        console.log("in AddOrganizationController", $scope.board)
        $scope.list1_items.cards.push(this.organization);
        this.organization = {};
    };

    $http({method: 'PUT', url: API+'/boards/', { }})
    .success(function(returnValues){
        console.log("ReturnValues : ", returnValues)
        $scope.board = returnValues.board;
        console.log("Inside succes:", $scope.board);
        $scope.list1_items = $scope.board.lists[0]
    });

}])

// This is actually the modal controller
.controller('CardController', ['$scope', function($scope, card) {
    console.log("in CardController")
    $scope.modalShown = false;
    $scope.toggleModal = function() {
        console.log("Toggle modal!!!")
        $scope.modalShown = !$scope.modalShown;
        console.log($scope.modalShown);
    };
}])


var board1 = {
name: "New Test Board",
lists: [{
    name: "interested-col",
    cards: [{
        title: 'Google'
    }, {
        title: 'FaceBook'
    }]
}, {
    name: "in-progress",
    cards: [{
        title: 'Wired'
    }, {
        title: 'Make'
    }]
}, {
    name: "done",
    cards: [{
        title: 'Wired Times'
    }, {
        title: 'Make'
    }]
}, {
    name: "interested-col",
    cards: [{
        title: 'Wired'
    }, {
        title: 'Maker Times'
    }]
}, {
    name: "interested-col",
    cards: [{
        title: 'News Corp.'
    }, {
        title: 'Make'
    }]
}, {
    name: "interested-col",
    cards: [{
        title: 'Wired'
    }, {
        title: 'WWF'
    }]
}],
user_id: 123456
}
