angular.module("JHO")
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