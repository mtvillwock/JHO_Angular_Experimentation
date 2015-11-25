angular.module("JHO", ['ui.router', 'ngResource', 'dndLists'])
// .constant('API', 'https://jho-api.herokuapp.com')
.constant('API', 'http://localhost:3000')

.config(['$httpProvider',
    function($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    }
])

.controller('BoardController', ['$http', '$scope', 'API', 'Board',
    function($http, $scope, API, Board) {
        $scope.board = {};
        $scope.list1_items = [];
        $scope.allCards = [];
        // $scope

        function getBoard() {
            console.log("in getBoard")
            Board.dashboard()
                .success(function(returnValues) {
                    // console.log("ReturnValues : ", returnValues)
                    $scope.board = returnValues.board;
                    console.log("Inside success:", $scope.board);
                    $scope.list1_items = $scope.board.lists[0]
                    $scope.allCards = returnValues.cards;
                    console.log("All cards: ", $scope.allCards)
                    console.log("Entire board: ", returnValues)
                });
        }

        getBoard();

        this.updateCardPosition = function(event, index, card, list_id) {
            console.log("in updateCardPosition")
            console.log("event,index,card, list_id", event, index, card, list_id);

            card.list_id = list_id; // update Card in DOM

            $http.post(API + '/cards/' + card.id + '/movements', {
                card: {
                    title: card.title,
                    list_id: list_id
                }
            })
                .success(function(response) {
                    // response.movement and response.card
                    console.log("moved card: ", response);
                    card = response.card;
                    console.log("card with new priority and position is: ", card);
                });
        };
    }
])

.controller("AddOrganizationController", ['$scope', '$http', 'API', 'Card',
    function($scope, $http, API, Card) {
        this.organization = {};
        // this.list1_items = board1.lists[0];
        var newCard = function(card, list_id) {

            // $http.post(API + '/cards', {
            //     card: {
            //         title: card.title,
            //         list_id: list_id
            //     }
            // })
            var cardOptions = {
                title: card.title,
                list_id: list_id
            }
            Card.create(cardOptions)
                .success(function(card) {
                    // This needs to set the ID of the Card so that we can use the dropCallback that needs the card ID
                    console.log("Cards#create returns: ", card);

                    $scope.list1_items.cards.pop();
                    $scope.list1_items.cards.push(card);

                    // $scope.board = returnValues.board;
                    // console.log("Inside succes:", $scope.board);
                    // $scope.list1_items = $scope.board.lists[0]
                });
        };

        this.addOrganization = function(list1_items) {
            console.log("in AddOrganizationController", $scope.board)
            // reset addOrgCtrl.organization ng-model
            $scope.list1_items.cards.push(this.organization);
            this.organization = {};

            var card = $scope.list1_items.cards[$scope.list1_items.cards.length - 1];
            console.log("card to send to DB:", card);
            var list_id = $scope.list1_items.id

            return newCard(card, list_id);
        };

    }
])

//Removed card from the cardController function call...
.controller('CardController', ['$scope', '$http', 'API',
    function($scope, $http, API) {
        console.log("in CardController")
        $scope.modalShown = false;
        $scope.toggleModal = function() {
            // console.log("Toggle modal!!!")
            $scope.modalShown = !$scope.modalShown;
            // console.log($scope.modalShown);
        };

        this.delete = function(card) {
            console.log("card to delete", card);

            var element = document.getElementById('card' + card.id);
            console.log("card to element", element);
            element.parentNode.removeChild(element);

            for (var i = 0; i < $scope.board.lists.length; i++) {
                if ($scope.board.lists[i].id == card.list_id) {
                    list = $scope.board.lists[i];
                    // console.log("list !!!", list);
                    for (var j = 0; j < list.cards.length; j++) {
                        if (list.cards[j].id == card.id) {
                            // console.log("found card: ", list.cards[j]);
                            list.cards.splice(j, 1);
                        }
                    };
                }
            };
            // Need to also implement this for cards

            $scope.toggleModal()
            $http.delete(API + '/cards/' + card.id).success(function(response) {
                console.log("response ", response);
            });
        }

        this.updateCard = function(card) {
            console.log("In updateCard function:", card)
            // Add in all card attributes, eventually
            $scope.toggleModal()
            $http.put(API + '/cards/' + card.id, {
                card: {
                    title: card.title,
                    description: card.description,
                    organization_name: card.organization_name,
                    organization_summary: card.organization_summary,
                    position_description: card.position_description,
                    advocate: card.advocate,
                    position_applied_for: card.position_applied_for,
                    tech_stack: card.tech_stack,
                    glassdoor_rating: card.glassdoor_rating,
                    recent_articles: card.recent_articles,
                    priority: card.priority
                }
            })
                .success(function(response) {
                    console.log("updated card: ", response);
                });

        };
        this.updateCardPriority = function(card) {
            // console.log("In updateCardPriority function:", card)

            for (var i = 0; i < $scope.allCards.length; i++) {
                if ($scope.allCards[i].id == card.id) {
                    $scope.allCards[i].priority = 1;
                }
            };

            $http.put(API + '/cards/' + card.id, {
                card: {
                    priority: 1
                }
            })
                .success(function(response) {
                    console.log("updated card: ", response);
                });

        };
    }
])

// .controller('TodayController', function(){
//     console.log("today controller");
// })€


// Test data on client side when API is not available
// var board1 = {
// name: "New Test Board",
// lists: [{
//     name: "interested-col",
//     cards: [{
//         title: 'Google'
//     }, {
//         title: 'FaceBook'
//     }]
// }, {
//     name: "in-progress",
//     cards: [{
//         title: 'Wired'
//     }, {
//         title: 'Make'
//     }]
// }, {
//     name: "done",
//     cards: [{
//         title: 'Wired Times'
//     }, {
//         title: 'Make'
//     }]
// }, {
//     name: "interested-col",
//     cards: [{
//         title: 'Wired'
//     }, {
//         title: 'Maker Times'
//     }]
// }, {
//     name: "interested-col",
//     cards: [{
//         title: 'News Corp.'
//     }, {
//         title: 'Make'
//     }]
// }, {
//     name: "interested-col",
//     cards: [{
//         title: 'Wired'
//     }, {
//         title: 'WWF'
//     }]
// }],
// user_id: 123456
// }