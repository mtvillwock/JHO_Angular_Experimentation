angular.module("JHO", ['ngRoute', 'ngResource', 'dndLists'])
// .constant('API', 'https://jho-api.herokuapp.com')
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
    // Refactor this into a service later
    (function(){
        $http({method: 'GET', url: API+'/dashboard'})
        .success(function(returnValues){
            // console.log("ReturnValues : ", returnValues)
            $scope.board = returnValues.board;
            console.log("Inside succes:", $scope.board);
            $scope.list1_items = $scope.board.lists[0]
        });
    })();

    $scope.dropCallback = function(event, index, item, external, type, allowedType) {
        console.log("dropped item is: ", item);
        $scope.logListEvent('dropped at', event, index, external, type);
        if (external) {
            if (allowedType === 'itemType' && !item.label) return false;
            if (allowedType === 'containerType' && !angular.isArray(item)) return false;
        }
        return item;
    };

    $scope.logListEvent = function(action, event, index, external, type) {
        var message = external ? 'External ' : '';
        message += type + ' element is ' + action + ' position ' + index;
        console.log(message, event);
    };




    this.updateCardPosition = function(event,index,card, list_id) {
        console.log("in updateCardPosition")
        console.log("event,index,card, list_id", event,index,card, list_id);

        card.list_id = list_id; // update Card in DOM

        $http.put( API+'/cards/' + card.id, {
            card: {
                title: card.title,
                list_id: list_id
            }
        })
        .success(function(response){
            console.log("updated card: ", response);
        });
    };

    // updateCardPosition(event,index,item,type)

}])

.controller("AddOrganizationController", ['$scope','$http','API', function($scope,$http,API) {
    this.organization = {};
    // this.list1_items = board1.lists[0];
    var newCard = function(card, list_id){

        $http.post( API+'/cards', {
            card: {
                title: card.title,
                list_id: list_id
            }
        })
        .success(function(returnValues){
            console.log("ReturnValues : ", returnValues)
            // $scope.board = returnValues.board;
            console.log("Inside succes:", $scope.board);
            // $scope.list1_items = $scope.board.lists[0]
        });
    };

    this.addOrganization = function(list1_items) {
        console.log("in AddOrganizationController", $scope.board)
        $scope.list1_items.cards.push(this.organization);
        this.organization = {};

        var card = $scope.list1_items.cards[$scope.list1_items.cards.length - 1];
        var list_id = $scope.list1_items.id
        console.log("Card", card)
        newCard(card, list_id);

    };
    // console.log("Cards : ", $scope.board)
    // Be very careful with this method of getting the last element.  Refactor with underscore


}])

// This is actually the modal controller.  Removed card from the cardController function call...
.controller('CardController', ['$scope', function($scope) {
    console.log("in CardController")
    $scope.modalShown = false;
    $scope.toggleModal = function() {
        console.log("Toggle modal!!!")
        $scope.modalShown = !$scope.modalShown;
        console.log($scope.modalShown);
    };
    $scope.updateCard = function(card) {
        console.log("In updateCard function:", card)
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
